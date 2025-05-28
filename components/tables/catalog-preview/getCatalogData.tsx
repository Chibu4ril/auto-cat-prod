// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CatalogPreview = {
  id: string;
  prodNo: string;
  manufProdNo: number;
  manufName: string;
  prodDesc: string;
  tradePrice: number;
  rrp: number;
  EAN: number;
  price: number;
  currencyCode: string;
  filecreation: string;
  stock: number;
  stockdelvdate: string;
  classification: string;
  eorderable: string;
  manufProdUrl: string;
  prodfamilies: string;
  advClassification: string;
  futexp1: string;
  futexp2: string;
  futexp3: string;
  futexp4: string;
  futexp5: string;
  weight: number;
};

export async function getCatalogData(): Promise<CatalogPreview[]> {
  // Fetch data from your API here.
  return [
    {
      id: "string",
      prodNo:
        "faafaafdfafasfafdfewreqrwtwterwtwfwevdccxzdsfvsvfdbfebegergfdcsfsdfsfgdsfwefwefewgewgesdfdsfdsfsfsfsdfsdfdfsfSDFdafafsgfsdfgdgsgsgfhfgrtryryewqwqqerewwetewtwtrtrewtwfdfsdgsvvsvdsvsfdfdfa",
      manufProdNo: 76,
      manufName: "string",
      prodDesc: "string",
      tradePrice: 12.3,
      rrp: 43.4,
      EAN: 12,
      price: 324,
      currencyCode: "string",
      filecreation: "string",
      stock: 76,
      stockdelvdate: "string",
      classification: "string",
      eorderable: "string",
      manufProdUrl: "string",
      prodfamilies: "string",
      advClassification: "string",
      futexp1: "string",
      futexp2: "string",
      futexp3: "string",
      futexp4: "string",
      futexp5: "string",
      weight: 54,
    },
  ];
}
