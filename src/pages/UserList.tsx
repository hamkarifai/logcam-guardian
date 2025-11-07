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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";

const mockUsers = [
  { id: 1, name: "Ahmad Fauzi", device: "Laptop", status: "Borrowed", time: "08:30 AM", initials: "AF" },
  { id: 2, name: "Siti Nurhaliza", device: "Phone", status: "Borrowed", time: "09:15 AM", initials: "SN" },
  { id: 3, name: "Muhammad Rizki", device: "Laptop", status: "Returned", time: "10:00 AM", initials: "MR" },
  { id: 4, name: "Fatimah Azzahra", device: "Phone", status: "Borrowed", time: "10:45 AM", initials: "FA" },
  { id: 5, name: "Abdullah Rahman", device: "Laptop", status: "Borrowed", time: "11:20 AM", initials: "AR" },
];

export default function UserList() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-4xl font-bold tracking-tight">
          <span className="text-gradient-primary">Users</span> List
        </h2>
        <p className="text-lg text-muted-foreground font-secondary mt-2">View all students and their device status</p>
      </div>

      <Card className="border-2 card-hover-lift">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Student Device Usage
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b-2">
                <TableHead className="font-bold text-foreground">Student</TableHead>
                <TableHead className="font-bold text-foreground">Device</TableHead>
                <TableHead className="font-bold text-foreground">Status</TableHead>
                <TableHead className="font-bold text-foreground">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-white font-semibold">
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-semibold">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{user.device}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.status === "Borrowed" ? "default" : "secondary"}
                      className="font-semibold px-3 py-1 rounded-full"
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-secondary font-medium text-muted-foreground">{user.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
