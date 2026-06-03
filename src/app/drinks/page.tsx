import type { Metadata } from "next";
import DrinksPageLayout from "@/components/sections/DrinksPageLayout";
import { getProducts } from "@/lib/getProducts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Drinks & Beverages | Asia Bazaar Alexandria VA",
  description:
    "Coca-Cola, Sprite, Pepsi, Rooh Afza, Maaza, Frooti, coconut water, mango lassi & more. Cold drinks & desi beverages in Alexandria, VA.",
};

export default async function DrinksPage() {
  const allProducts = await getProducts();
  const products = allProducts.filter(
    (p) => p.category === "drinks" || p.subcategory === "beverages" || p.subcategory === "dairy"
  );

  return (
    <DrinksPageLayout
      products={products}
      heroImage="https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=1600&q=80"
    />
  );
}
