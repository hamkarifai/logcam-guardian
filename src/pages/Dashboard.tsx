import { Users, Laptop, Smartphone, Activity, Camera, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Welcome to <span className="text-gradient-primary">Logcam</span></h2>
        <p className="text-lg text-muted-foreground font-secondary">Track attendance effortlessly with face recognition</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Active Devices"
          value={50}
          icon={Laptop}
          iconColor="bg-[hsl(var(--card-blue))]"
          gradient="var(--gradient-primary)"
        />
        <StatCard
          title="Face Scans Today"
          value={87}
          icon={Camera}
          iconColor="bg-[hsl(var(--card-gold))]"
          gradient="var(--gradient-accent)"
        />
        <StatCard
          title="Attendance Rate"
          value="94%"
          icon={TrendingUp}
          iconColor="bg-[hsl(var(--card-teal))]"
          gradient="linear-gradient(135deg, hsl(173, 67%, 47%) 0%, hsl(217, 91%, 60%) 100%)"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="card-hover-lift border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Activity className="h-6 w-6 text-primary" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-16 text-muted-foreground">
              <Activity className="h-16 w-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-secondary">No recent activities to display</p>
              <p className="text-sm mt-2">Device borrowing and returns will appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover-lift border-2 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px]" />
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-accent" />
              Device Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-2 border-blue-200 dark:border-blue-800 transition-transform hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500">
                    <Laptop className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-lg">Laptops</span>
                </div>
                <span className="font-secondary font-bold text-2xl text-blue-600 dark:text-blue-400">18/35</span>
              </div>
            </div>
            
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 border-2 border-amber-200 dark:border-amber-800 transition-transform hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-lg">Phones</span>
                </div>
                <span className="font-secondary font-bold text-2xl text-amber-600 dark:text-amber-400">32/50</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="card-hover-lift border-2 bg-gradient-to-br from-background to-muted/30">
        <CardHeader>
          <CardTitle className="text-2xl">Daily Attendance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-3 opacity-20" />
              <p className="font-secondary">Chart visualization coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
