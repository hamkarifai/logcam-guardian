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
    <div className="space-y-6 animate-in fade-in duration-500 max-w-[1440px] mx-auto">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          Activity <span className="text-gradient-primary">Logbook</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-secondary mt-2">Detailed device borrowing and returning logs</p>
      </div>

      <Card className="border-2 card-hover-lift">
        <CardHeader className="border-b bg-gradient-to-r from-muted/50 to-muted/30 space-y-4 sm:space-y-6 p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Activity Logs
          </CardTitle>
          
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <Input 
                placeholder="Search student name..." 
                className="pl-10 sm:pl-12 h-10 sm:h-12 rounded-xl border-2 font-secondary text-sm sm:text-base"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Select>
                <SelectTrigger className="w-full sm:w-[160px] h-10 sm:h-12 rounded-xl border-2 font-semibold text-sm sm:text-base">
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
                <SelectTrigger className="w-full sm:w-[160px] h-10 sm:h-12 rounded-xl border-2 font-semibold text-sm sm:text-base">
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
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-b-2">
                  <TableHead className="font-bold text-foreground text-sm sm:text-base">Date</TableHead>
                  <TableHead className="font-bold text-foreground text-sm sm:text-base">Student Name</TableHead>
                  <TableHead className="font-bold text-foreground text-sm sm:text-base">Device</TableHead>
                  <TableHead className="font-bold text-foreground text-sm sm:text-base">Action</TableHead>
                  <TableHead className="font-bold text-foreground text-sm sm:text-base">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLogs.map((log) => (
                  <TableRow key={log.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-secondary font-semibold text-muted-foreground text-xs sm:text-sm whitespace-nowrap">{log.date}</TableCell>
                    <TableCell className="font-semibold text-sm sm:text-base">{log.student}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted font-medium text-xs sm:text-sm">
                        {log.device}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={log.action === "Borrowed" ? "default" : "secondary"}
                        className="font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm"
                      >
                        {log.action}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-secondary font-medium text-muted-foreground text-xs sm:text-sm whitespace-nowrap">{log.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
