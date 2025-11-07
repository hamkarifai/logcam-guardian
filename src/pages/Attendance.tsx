import { useState } from "react";
import { Camera, Laptop, Smartphone, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Attendance() {
  const [deviceType, setDeviceType] = useState<"laptop" | "phone">("laptop");

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-semibold">Face Recognition Attendance</span>
        </div>
        <h2 className="text-5xl font-bold tracking-tight">
          Scan Your Face to <span className="text-gradient-primary">Record Attendance</span>
        </h2>
        <p className="text-lg text-muted-foreground font-secondary max-w-2xl mx-auto">
          Use our advanced face recognition technology to quickly borrow or return devices
        </p>
      </div>

      <div className="flex justify-center">
        <Tabs value={deviceType} onValueChange={(v) => setDeviceType(v as "laptop" | "phone")} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 p-1 h-14 bg-muted/50 rounded-2xl">
            <TabsTrigger value="laptop" className="gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all">
              <Laptop className="h-5 w-5" />
              <span className="font-semibold">Laptop</span>
            </TabsTrigger>
            <TabsTrigger value="phone" className="gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-amber-600 data-[state=active]:text-white transition-all">
              <Smartphone className="h-5 w-5" />
              <span className="font-semibold">Phone</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="card-hover-lift border-2 overflow-hidden glass-card">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[120px]" />
          <CardHeader className="relative">
            <CardTitle className="text-2xl font-bold">
              Borrow {deviceType === "laptop" ? "Laptop" : "Phone"}
            </CardTitle>
            <CardDescription className="text-base">
              Position your face in the camera frame to start borrowing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 relative">
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20 hover:border-primary/40 transition-colors group">
              <div className="text-center space-y-3">
                <div className="p-6 rounded-full bg-primary/10 inline-flex group-hover:scale-110 transition-transform">
                  <Camera className="h-12 w-12 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground font-secondary">Camera feed will appear here</p>
              </div>
            </div>
            <Button variant="gradient" size="lg" className="w-full text-base">
              <Camera className="mr-2 h-5 w-5" />
              Start Face Recognition
            </Button>
          </CardContent>
        </Card>

        <Card className="card-hover-lift border-2 overflow-hidden glass-card">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-500/20 to-transparent rounded-bl-[120px]" />
          <CardHeader className="relative">
            <CardTitle className="text-2xl font-bold">
              Return {deviceType === "laptop" ? "Laptop" : "Phone"}
            </CardTitle>
            <CardDescription className="text-base">
              Scan your face to complete the device return process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 relative">
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20 hover:border-teal-500/40 transition-colors group">
              <div className="text-center space-y-3">
                <div className="p-6 rounded-full bg-teal-500/10 inline-flex group-hover:scale-110 transition-transform">
                  <Camera className="h-12 w-12 text-teal-600" />
                </div>
                <p className="text-sm text-muted-foreground font-secondary">Camera feed will appear here</p>
              </div>
            </div>
            <Button 
              variant="gradient-accent" 
              size="lg" 
              className="w-full text-base"
              style={{ background: "linear-gradient(135deg, hsl(173, 67%, 47%) 0%, hsl(160, 60%, 45%) 100%)" }}
            >
              <Camera className="mr-2 h-5 w-5" />
              Start Face Recognition
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 bg-gradient-to-br from-background to-muted/30">
        <CardHeader>
          <CardTitle className="text-xl">Recent Scans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Camera className="h-10 w-10 mx-auto mb-3 opacity-20" />
            <p className="font-secondary">No recent face scans recorded</p>
            <p className="text-sm mt-1">Recent activity will appear here after scanning</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
