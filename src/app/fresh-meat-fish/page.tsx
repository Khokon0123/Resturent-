import type { Metadata } from "next";
import CategoryPageLayout from "@/components/sections/CategoryPageLayout";
import { getProducts } from "@/lib/getProducts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Fresh Halal Meat & Fish | Asia Bazaar Alexandria VA",
  description:
    "Daily fresh halal chicken, goat, beef & Ilish/Hilsa fish at Asia Bazaar. Bangladeshi and South Asian specialty cuts. Call to order.",
};

export default async function FreshMeatFishPage() {
  const allProducts = await getProducts();
  const products = allProducts.filter((p) => p.category === "fresh-meat-fish");
  const subcategories = Array.from(new Set(products.map((p) => p.subcategory).filter(Boolean))) as string[];

  return (
    <CategoryPageLayout
      title="Fresh Meat & Fish"
      description="Daily fresh halal chicken, goat, beef & Ilish/Hilsa fish. Slaughtered fresh every morning."
      heroImage="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80"
      products={products}
      subcategories={subcategories}
    />
  );
}
