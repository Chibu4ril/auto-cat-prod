"use client";
import { columns } from "../catalog-preview/column";
import { DataTable } from "./data-table";
import type { CatalogPreview } from "../catalog-preview/getCatalogData";

type Props = {
  data: CatalogPreview[];
};

export default function CatalogTable({ data }: Props) {
  return (
    <div className="container mx-auto py-10 w-full px-0">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
