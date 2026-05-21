import type { Metadata } from "next";
import FrozenPageLayout from "@/components/sections/FrozenPageLayout";
import { getProductsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frozen Desi Food | Asia Bazaar Alexandria VA",
  description:
    "Frozen paratha, samosa, spring rolls, frozen Hilsa fish & more. Ready-to-cook South Asian frozen food in Alexandria, VA.",
};

export default function FrozenFoodPage() {
  const products = getProductsByCategory("frozen-food");

  return (
    <FrozenPageLayout
      products={products}
      heroImage="https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=1600&q=80"
    />
  );
}
