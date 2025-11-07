import { Users, Laptop, Smartphone, Activity } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Overview of student device usage and activity</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value={245}
          icon={Users}
          iconColor="bg-[hsl(var(--card-blue))]"
        />
        <StatCard
          title="Available Laptops"
          value={18}
          icon={Laptop}
          iconColor="bg-[hsl(var(--card-green))]"
        />
        <StatCard
          title="Available Phones"
          value={32}
          icon={Smartphone}
          iconColor="bg-[hsl(var(--card-pink))]"
        />
        <StatCard
          title="Today's Activity"
          value={87}
          icon={Activity}
          iconColor="bg-[hsl(var(--card-orange))]"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-muted-foreground">
              <Activity className="h-12 w-12 mx-auto mb-3 opacity-20" />
              <p>No recent activities to display</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Laptop className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Laptops</span>
                </div>
                <span className="font-mono font-bold">18/35</span>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-pink-600" />
                  <span className="font-medium">Phones</span>
                </div>
                <span className="font-mono font-bold">32/50</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
