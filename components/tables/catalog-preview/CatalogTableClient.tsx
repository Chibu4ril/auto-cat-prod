"use client";
import { columns } from "../catalog-preview/column";
import { DataTable } from "./data-table";
import type { CatalogPreview } from "../catalog-preview/getCatalogData";
import { useEffect, useState } from "react";

export default function CatalogTable() {
  const [data, setData] = useState<CatalogPreview[]>([]);

  useEffect(() => {
    const fetchParsedCSV = async () => {
      const filePath = localStorage.getItem("uploadedFilePath");
      if (!filePath) return console.error("No uploaded file path found.");

      try {
        const response = await fetch(
          "http://localhost:8000/api/parse-csv-from-supabase",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_path: filePath }),
          }
        );

        const json = await response.json();
        if (json?.data) {
          localStorage.setItem("catalogData", JSON.stringify(json.data)); // store parsed rows
        } else {
          console.error("Failed to get parsed data from server");
        }
      } catch (error) {
        console.error("Error fetching parsed CSV:", error);
      }
    };

    fetchParsedCSV();
  }, []);

  return (
    <div className="container mx-auto py-10 w-full px-0">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
