import type { Metadata } from "next";
import CategoryPageLayout from "@/components/sections/CategoryPageLayout";
import { getProductsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frozen Desi Food | Asia Bazaar Alexandria VA",
  description:
    "Frozen paratha, samosa, spring rolls, frozen Hilsa fish & more. Ready-to-cook South Asian frozen food in Alexandria, VA.",
};

export default function FrozenFoodPage() {
  const products = getProductsByCategory("frozen-food");
  const subcategories = Array.from(new Set(products.map((p) => p.subcategory).filter(Boolean))) as string[];

  return (
    <CategoryPageLayout
      title="Frozen Food"
      description="Paratha, samosa, frozen fish & ready-to-cook items. Stock your freezer with desi favorites."
      heroImage="https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=1600&q=80"
      products={products}
      subcategories={subcategories}
    />
  );
}
