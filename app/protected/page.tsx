import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DataTable } from "@/components/tables/activity-table/data-table";
import {
  RecentActivity,
  columns,
} from "../../components/tables/activity-table/column";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    // ...
  ];
}

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const dataTables = await getData();

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full flex flex-col gap-6 min-w-5xl">
        <div className="flex flex-col gap-6">
          <div className="flex justify-end">
            <Button className="bg-blue-600 rounded-none">
              <Link href="/protected/catalog-upload">Upload Catalog</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
            <Card className="rounded-sm w-full">
              <CardHeader className="p-2"></CardHeader>
              <CardContent className="pb-3">
                <p className="text-xl font-bold">2,000,000</p>
              </CardContent>
              <CardFooter className="pb-2 text-sm uppercase">
                Total Products Processed
              </CardFooter>
            </Card>
            <Card className="rounded-sm">
              <CardHeader className="p-2"></CardHeader>
              <CardContent className="pb-3">
                <p className="text-xl font-bold">2,000,000</p>
              </CardContent>
              <CardFooter className="pb-2 text-sm uppercase">
                Total Products Processed
              </CardFooter>
            </Card>
            <Card className="rounded-sm">
              <CardHeader className="p-2"></CardHeader>
              <CardContent className="pb-3">
                <p className="text-xl font-bold">2,000,000</p>
              </CardContent>
              <CardFooter className="pb-2 text-sm uppercase">
                Total Products Processed
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 ">
        <DataTable columns={columns} data={dataTables} />
      </div>
      {/* <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <FetchDataSteps /> */}
    </div>
  );
}
