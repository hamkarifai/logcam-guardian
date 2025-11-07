import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <header className="h-20 border-b-2 border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <SidebarTrigger />
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-gradient-primary">HSI</span> Boarding School
          </h1>
          <p className="text-xs text-muted-foreground font-secondary">Logcam Attendance System</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-accent rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-3 pl-4 border-l-2">
          <div className="text-right">
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-muted-foreground font-secondary">Administrator</p>
          </div>
          <Avatar className="h-11 w-11 border-2 border-primary/30">
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold text-lg">
              AU
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
