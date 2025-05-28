"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RecentActivity = {
  id: string;
  fileName: string;
  totalRows: number;
  emptyRRP: number;
  date: string;
  action: any; // This could be a button or link, so we keep it as a string for now.
  status: "not synced" | "synced";
  email: string;
};

export const columns: ColumnDef<RecentActivity>[] = [
  {
    accessorKey: "fileName",
    header: "File Name",
  },
  {
    accessorKey: "totalRows",
    header: "No. of Rows",
  },
  {
    accessorKey: "emptyRRP",
    header: "No. of Empty RRP",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
