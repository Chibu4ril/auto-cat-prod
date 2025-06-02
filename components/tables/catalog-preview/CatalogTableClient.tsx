"use client";
import { columns } from "../catalog-preview/column";
import { catalogProcess, DataTable } from "./data-table";
import type { CatalogPreview } from "../catalog-preview/getCatalogData";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CatalogTable() {
  const [data, setData] = useState<CatalogPreview[]>([]);
  const [dataProfile, setDataProfile] = useState<any>(null);
  const [processed, setProcessed] = useState(false);

  const fetchProcessedCatalog = async () => {
    setProcessed(true);
    try {
      // Call your client-side Supabase fetch function directly
      const result = await catalogProcess();
      setData(result);
    } catch (error) {
      console.error("Error fetching processed catalog:", error);
    } finally {
      setProcessed(false);
    }
  };

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
        console.log("Parsed CSV data:", json);

        setDataProfile(json.data);
      } catch (error) {
        console.error("Error fetching parsed CSV:", error);
      }
    };

    fetchParsedCSV();
  }, []);

  return (
    <div className="container mx-auto py-10 w-full px-0">
      {dataProfile && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>{dataProfile?.total_rows}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Total Rows</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{dataProfile?.rrp_empty_or_missing}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>RRP Missing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{dataProfile?.rrp_zero}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>RRP With Value Zero</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle> {dataProfile?.duplicate_rows}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Duplicate Rows</p>
            </CardContent>
          </Card>
        </div>
      )}
      <div>
        <div className="flex justify-end">
          <div className="flex flex-col mb-5">
            {processed ? (
              <Button
                className="w-full rounded-sm py-1 bg-black"
                disabled
                variant={"outline"}
              >
                Processing...
              </Button>
            ) : (
              <Button
                className="w-full border-blue-700 text-blue-700  enabled:hover:bg-blue-600 enabled:hover:text-white rounded-sm py-1"
                onClick={fetchProcessedCatalog}
                variant={"outline"}
              >
                Process Catalog
              </Button>
            )}
          </div>
        </div>
        <DataTable columns={columns} data={data ?? []} />
      </div>
    </div>
  );
}
