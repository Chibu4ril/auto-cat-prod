import { getCatalogData } from "./getCatalogData";
import CatalogTable from "./CatalogTableClient";

export default async function CatalogPage() {
  const data = await getCatalogData();

  return <CatalogTable data={data} />;
}
