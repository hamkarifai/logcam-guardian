import { useState } from "react";
import { Camera, Laptop, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Attendance() {
  const [deviceType, setDeviceType] = useState<"laptop" | "phone">("laptop");

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Absensi Perangkat Santri</h2>
        <p className="text-muted-foreground">Use face recognition to borrow or return a device</p>
      </div>

      <div className="flex justify-center">
        <Tabs value={deviceType} onValueChange={(v) => setDeviceType(v as "laptop" | "phone")} className="w-[300px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="laptop" className="gap-2">
              <Laptop className="h-4 w-4" />
              Laptop
            </TabsTrigger>
            <TabsTrigger value="phone" className="gap-2">
              <Smartphone className="h-4 w-4" />
              HP
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">
              Borrow {deviceType === "laptop" ? "Laptop" : "Phone"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <Camera className="h-16 w-16 text-muted-foreground" />
            </div>
            <Button className="w-full" size="lg">
              <Camera className="mr-2 h-4 w-4" />
              Start Face Recognition - Borrow {deviceType === "laptop" ? "Laptop" : "Phone"}
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">
              Return {deviceType === "laptop" ? "Laptop" : "Phone"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <Camera className="h-16 w-16 text-muted-foreground" />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
              <Camera className="mr-2 h-4 w-4" />
              Start Face Recognition - Return {deviceType === "laptop" ? "Laptop" : "Phone"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
