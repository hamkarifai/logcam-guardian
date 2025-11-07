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
import { Search } from "lucide-react";

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
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Logbook</h2>
        <p className="text-muted-foreground">Detailed device borrowing and returning logs</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity Logs</CardTitle>
          <div className="flex gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search student name..." className="pl-9" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Device Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Devices</SelectItem>
                <SelectItem value="laptop">Laptop</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="borrowed">Borrowed</SelectItem>
                <SelectItem value="returned">Returned</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Device</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLogs.map((log) => (
                <TableRow key={log.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">{log.date}</TableCell>
                  <TableCell className="font-medium">{log.student}</TableCell>
                  <TableCell>{log.device}</TableCell>
                  <TableCell>
                    <Badge variant={log.action === "Borrowed" ? "default" : "secondary"}>
                      {log.action}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{log.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
