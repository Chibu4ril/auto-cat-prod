import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentActivity, columns } from "../activity-table/column";
import { DataTable } from "./data-table";

async function getData(): Promise<RecentActivity[]> {
  // Fetch data from your API here.
  return [
    {
      id: "32",
      fileName: "ewerr.csv",
      totalRows: 3,
      emptyRRP: 4,
      date: "30/10/2023",
      action: "", // This could be a button or link, so we keep it as a string for now.
      status: "synced",
      email: "",
    },
  ];
}

export default async function ActivityTable() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
