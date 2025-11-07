import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  gradient?: string;
}

export function StatCard({ title, value, icon: Icon, iconColor, gradient }: StatCardProps) {
  return (
    <Card className="card-hover-lift border-2 overflow-hidden relative group">
      {gradient && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
          style={{ background: gradient }}
        />
      )}
      <CardContent className="p-6 relative">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-secondary text-muted-foreground font-medium">{title}</p>
            <p className="text-4xl font-bold font-secondary tracking-tight">{value}</p>
          </div>
          <div className={`p-4 rounded-2xl ${iconColor} shadow-lg`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
