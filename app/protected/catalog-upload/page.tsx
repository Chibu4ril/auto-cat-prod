"use client";

// import { handleDatasetUpload, handleFileChange } from "../actions";
import { useEffect, useState } from "react";
import {
  FileSpreadsheet,
  Frown,
  Info,
  Smile,
  UploadCloud,
  X,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import CatalogPage from "@/components/tables/catalog-preview/page";
import { redirect } from "next/navigation";
// import { fetchUploadedFiles } from "../api/api";

export default function UploadCard() {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [checkbox, setCheckbox] = useState(false);
  const [dataset, setDataset] = useState<File | null>(null);

  // Function to handle file selection
  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/csv" && file.size <= 1024 * 1024) {
      setSelectedFile(file);
      setDataset(file);
    } else {
      setSelectedFile(null);
      setUploadStatus({
        message: "Please select a valid CSV file (max 1MB).",
        success: false,
      });
      return;
    }
  };

  const handleFileProcessing = async () => {
    if (!selectedFile) {
      setUploadStatus({
        message: "No file selected. Please select a file first.",
        success: false,
      });
      return;
    }

    let error;
    // setUploading(true);
    // const fileName = `${selectedFile.name}`;
    redirect("/protected/catalog-preview");

    // setUploading(false);
  };

  useEffect(() => {
    if (uploadStatus) {
      const timer = setTimeout(() => {
        setUploadStatus(null);
        window.location.reload();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [uploadStatus]);

  return (
    <div className="">
      {uploadStatus && (
        <div className="mb-4">
          <Alert
            variant={"destructive"}
            color={uploadStatus.success ? "success" : "failure"}
            // onDismiss={() => setU`ploadStatus(null)}
            className="rounded-sm"
          >
            <span className="font-medium">
              {uploadStatus.success ? (
                <Smile size={16} className="text-lime-700 mr-2" />
              ) : (
                <Frown size={16} className="text-red-700 mr-2" />
              )}
            </span>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              <span>{uploadStatus.message}</span>
            </AlertDescription>
          </Alert>
        </div>
      )}
      <div>
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex  w-full cursor-pointer rounded-xl flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center py-14">
              <UploadCloud size={32} />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  Click and select a file to upload.
                </span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                CSV files Only! (MAX. 1mb)
              </p>
            </div>
            <Input
              id="dropzone-file"
              className="hidden"
              onChange={onFileSelect}
              type="file"
            />
          </Label>
        </div>
      </div>

      <div className="my-10">
        {selectedFile && (
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-400">
            <Card className="shadow-none rounded-sm ">
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center space-x-2">
                  <div className="shrink-0">
                    <Icon
                      icon="vscode-icons:file-type-excel"
                      width="32"
                      height="32"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      {selectedFile.name}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {`Size: ${selectedFile.size} Kb`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <button
                      onClick={() => {
                        window.location.reload();
                        setSelectedFile(null);
                      }}
                    >
                      <Icon
                        icon="fluent:delete-16-regular"
                        width="16"
                        height="16"
                        className="text-red-600"
                      />
                    </button>
                  </div>
                  <div className="flex flex-col ms-4">
                    {uploading ? (
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
                        onClick={handleFileProcessing}
                        variant={"outline"}
                      >
                        Process File
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
