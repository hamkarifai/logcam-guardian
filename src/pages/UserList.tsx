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

const mockUsers = [
  { id: 1, name: "Ahmad Fauzi", device: "Laptop", status: "Borrowed", time: "08:30 AM" },
  { id: 2, name: "Siti Nurhaliza", device: "Phone", status: "Borrowed", time: "09:15 AM" },
  { id: 3, name: "Muhammad Rizki", device: "Laptop", status: "Returned", time: "10:00 AM" },
  { id: 4, name: "Fatimah Azzahra", device: "Phone", status: "Borrowed", time: "10:45 AM" },
  { id: 5, name: "Abdullah Rahman", device: "Laptop", status: "Borrowed", time: "11:20 AM" },
];

export default function UserList() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Users List</h2>
        <p className="text-muted-foreground">View all students and their device status</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Device Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Device</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.device}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Borrowed" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{user.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
