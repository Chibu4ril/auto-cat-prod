"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CatalogPreview } from "./getCatalogData";

export const columns: ColumnDef<CatalogPreview>[] = [
  { accessorKey: "prodno", header: "Prod No." },
  { accessorKey: "manufprodno", header: "Manuf. Prod No." },
  { accessorKey: "manufname", header: "Manuf. Name" },
  { accessorKey: "proddesc", header: "Product Desc." },
  { accessorKey: "tradeprice", header: "Trade Price" },
  { accessorKey: "rrp", header: "RRP" },
  { accessorKey: "ean", header: "EAN" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "currencycode", header: "Currency Code" },
  { accessorKey: "filecreation", header: "File Creation" },
  { accessorKey: "stock", header: "Stock" },
  { accessorKey: "stockdelvdate", header: "Stock Delv Date" },
  { accessorKey: "classification", header: "Classification" },
  { accessorKey: "eorderable", header: "E-Orderable" },
  { accessorKey: "manufprodurl", header: "Manuf Prod URL" },
  { accessorKey: "prodfamilies", header: "Prod Families" },
  { accessorKey: "advclassification", header: "Adv Classification" },
  { accessorKey: "futexp1", header: "Fut Exp 1" },
  { accessorKey: "futexp2", header: "Fut Exp 2" },
  { accessorKey: "futexp3", header: "Fut Exp 3" },
  { accessorKey: "futexp4", header: "Fut Exp 4" },
  { accessorKey: "futexp5", header: "Fut Exp 5" },
  { accessorKey: "weight", header: "Weight" },
];
