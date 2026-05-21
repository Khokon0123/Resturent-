import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/sections/ProductCard";
import ShopByCategory from "@/components/sections/ShopByCategory";
import { products } from "@/lib/data";

const featuredShopProducts = products.filter((p) => !p.brand);

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse all desi groceries, halal meat, fresh fish, frozen food, spices & more at Asia Bazaar, Alexandria VA.",
};

export default function ShopPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-14"
        style={{ background: "var(--color-surface-2)" }}
      >
        <div className="container-inner">
          <SectionHeading
            eyebrow="Everything"
            title="All Products"
            description="Browse our full selection of desi groceries, halal meat, fresh fish & more."
          />
          <nav className="flex flex-wrap gap-2" aria-label="Quick category links">
            {[
              { label: "Fresh Meat & Fish", href: "/fresh-meat-fish" },
              { label: "Grocery", href: "/grocery" },
              { label: "Frozen Food", href: "/frozen-food" },
              { label: "Offers", href: "/offers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-semibold font-nunito transition-all duration-200 hover:bg-[var(--color-red)] hover:text-white"
                style={{
                  background: "#fff",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Category section */}
      <ShopByCategory />

      {/* All products grid */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-inner">
          <SectionHeading eyebrow="In Stock" title="All Available Products" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featuredShopProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
