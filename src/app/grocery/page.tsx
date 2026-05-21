import type { Metadata } from "next";
import GroceryPageLayout from "@/components/sections/GroceryPageLayout";
import { getProductsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bangladeshi & Desi Grocery | Asia Bazaar Alexandria VA",
  description:
    "Basmati & Kalijeera rice, Shaan masala, mustard oil, dal, atta flour & more. Authentic desi grocery in Alexandria, VA.",
};

export default function GroceryPage() {
  const products = getProductsByCategory("grocery");

  return (
    <GroceryPageLayout
      products={products}
      heroImage="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80"
    />
  );
}
