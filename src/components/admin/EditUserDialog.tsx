import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Crown, Shield, Users } from "lucide-react";

type UserRole = 'admin' | 'moderator' | 'user';

interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  roles: UserRole[];
}

interface EditUserDialogProps {
  user: UserProfile;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function EditUserDialog({ user, open, onOpenChange, onSuccess }: EditUserDialogProps) {
  const [fullName, setFullName] = useState(user.full_name || "");
  const [avatarUrl, setAvatarUrl] = useState(user.avatar_url || "");
  const [selectedRoles, setSelectedRoles] = useState<Set<UserRole>>(new Set(user.roles));
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const allRoles: { value: UserRole; label: string; icon: any }[] = [
    { value: 'admin', label: 'Admin', icon: Crown },
    { value: 'moderator', label: 'Moderator', icon: Shield },
    { value: 'user', label: 'User', icon: Users },
  ];

  const handleRoleToggle = (role: UserRole, checked: boolean) => {
    const newRoles = new Set(selectedRoles);
    if (checked) {
      newRoles.add(role);
    } else {
      newRoles.delete(role);
    }
    setSelectedRoles(newRoles);
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      // Ensure at least one role is selected
      if (selectedRoles.size === 0) {
        toast({
          title: "Error",
          description: "User must have at least one role",
          variant: "destructive",
        });
        return;
      }

      // Update profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: fullName || null,
          avatar_url: avatarUrl || null,
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      // Get current roles
      const { data: currentRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id);

      if (rolesError) throw rolesError;

      const currentRoleSet = new Set(currentRoles?.map(r => r.role as UserRole) || []);

      // Find roles to add and remove
      const rolesToAdd = Array.from(selectedRoles).filter(r => !currentRoleSet.has(r));
      const rolesToRemove = Array.from(currentRoleSet).filter(r => !selectedRoles.has(r));

      // Add new roles
      if (rolesToAdd.length > 0) {
        const { error: addError } = await supabase
          .from('user_roles')
          .insert(rolesToAdd.map(role => ({ user_id: user.id, role })));

        if (addError) throw addError;
      }

      // Remove old roles
      if (rolesToRemove.length > 0) {
        const { error: removeError } = await supabase
          .from('user_roles')
          .delete()
          .eq('user_id', user.id)
          .in('role', rolesToRemove);

        if (removeError) throw removeError;
      }

      toast({
        title: "Success",
        description: "User updated successfully",
      });

      onSuccess();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update user",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="text-gradient-primary">Edit</span> User
          </DialogTitle>
          <DialogDescription>
            Update user information and manage their roles
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Email (read-only) */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={user.email}
              disabled
              className="bg-muted"
            />
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
            />
          </div>

          {/* Avatar URL */}
          <div className="space-y-2">
            <Label htmlFor="avatarUrl">Avatar URL</Label>
            <Input
              id="avatarUrl"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          {/* Roles */}
          <div className="space-y-3">
            <Label>Roles</Label>
            <div className="space-y-3 border rounded-lg p-4 bg-muted/30">
              {allRoles.map((role) => {
                const Icon = role.icon;
                return (
                  <div key={role.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={role.value}
                      checked={selectedRoles.has(role.value)}
                      onCheckedChange={(checked) => handleRoleToggle(role.value, checked as boolean)}
                    />
                    <Label
                      htmlFor={role.value}
                      className="flex items-center gap-2 cursor-pointer font-normal"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span>{role.label}</span>
                    </Label>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              User must have at least one role assigned
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
