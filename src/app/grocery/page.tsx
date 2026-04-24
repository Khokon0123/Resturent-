import type { Metadata } from "next";
import CategoryPageLayout from "@/components/sections/CategoryPageLayout";
import { getProductsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bangladeshi & Desi Grocery | Asia Bazaar Alexandria VA",
  description:
    "Basmati & Kalijeera rice, Shaan masala, mustard oil, dal, atta flour & more. Authentic desi grocery in Alexandria, VA.",
};

export default function GroceryPage() {
  const products = getProductsByCategory("grocery");
  const subcategories = Array.from(new Set(products.map((p) => p.subcategory).filter(Boolean))) as string[];

  return (
    <CategoryPageLayout
      title="Grocery"
      description="Rice, spices, lentils, oil & all your pantry essentials. Authentic desi brands you trust."
      heroImage="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80"
      products={products}
      subcategories={subcategories}
    />
  );
}
