import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, BookOpen, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockLogs = [
  { id: 1, student: "Ahmad Fauzi", device: "Laptop", action: "Borrowed", time: "08:30 AM", date: "2025-11-07" },
  { id: 2, student: "Siti Nurhaliza", device: "Phone", action: "Borrowed", time: "09:15 AM", date: "2025-11-07" },
  { id: 3, student: "Muhammad Rizki", device: "Laptop", action: "Returned", time: "10:00 AM", date: "2025-11-07" },
  { id: 4, student: "Fatimah Azzahra", device: "Phone", action: "Borrowed", time: "10:45 AM", date: "2025-11-07" },
  { id: 5, student: "Abdullah Rahman", device: "Laptop", action: "Borrowed", time: "11:20 AM", date: "2025-11-07" },
  { id: 6, student: "Zainab Fatima", device: "Phone", action: "Returned", time: "12:00 PM", date: "2025-11-07" },
  { id: 7, student: "Yusuf Ibrahim", device: "Laptop", action: "Returned", time: "01:30 PM", date: "2025-11-07" },
];

export default function Logbook() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-4xl font-bold tracking-tight">
          Activity <span className="text-gradient-primary">Logbook</span>
        </h2>
        <p className="text-lg text-muted-foreground font-secondary mt-2">Detailed device borrowing and returning logs</p>
      </div>

      <Card className="border-2 card-hover-lift">
        <CardHeader className="border-b bg-gradient-to-r from-muted/50 to-muted/30 space-y-6">
          <CardTitle className="text-2xl flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Activity Logs
          </CardTitle>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search student name..." 
                className="pl-12 h-12 rounded-xl border-2 font-secondary"
              />
            </div>
            
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-[160px] h-12 rounded-xl border-2 font-semibold">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Device" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Devices</SelectItem>
                  <SelectItem value="laptop">Laptop</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-[160px] h-12 rounded-xl border-2 font-semibold">
                  <SelectValue placeholder="Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="borrowed">Borrowed</SelectItem>
                  <SelectItem value="returned">Returned</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b-2">
                <TableHead className="font-bold text-foreground text-base">Date</TableHead>
                <TableHead className="font-bold text-foreground text-base">Student Name</TableHead>
                <TableHead className="font-bold text-foreground text-base">Device</TableHead>
                <TableHead className="font-bold text-foreground text-base">Action</TableHead>
                <TableHead className="font-bold text-foreground text-base">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLogs.map((log) => (
                <TableRow key={log.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-secondary font-semibold text-muted-foreground">{log.date}</TableCell>
                  <TableCell className="font-semibold">{log.student}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted font-medium">
                      {log.device}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={log.action === "Borrowed" ? "default" : "secondary"}
                      className="font-semibold px-3 py-1 rounded-full"
                    >
                      {log.action}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-secondary font-medium text-muted-foreground">{log.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
