import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TopBar() {
  return (
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">HSI Boarding School</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium">Admin User</p>
          <p className="text-xs text-muted-foreground">Administrator</p>
        </div>
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">AU</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
