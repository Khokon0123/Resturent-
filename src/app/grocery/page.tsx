import type { Metadata } from "next";
import GroceryPageLayout from "@/components/sections/GroceryPageLayout";
import { getProducts } from "@/lib/getProducts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Bangladeshi & Desi Grocery | Asia Bazaar Alexandria VA",
  description:
    "Basmati & Kalijeera rice, Shaan masala, mustard oil, dal, atta flour & more. Authentic desi grocery in Alexandria, VA.",
};

export default async function GroceryPage() {
  const allProducts = await getProducts();
  const products = allProducts.filter((p) => p.category === "grocery");

  return (
    <GroceryPageLayout
      products={products}
      heroImage="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80"
    />
  );
}
