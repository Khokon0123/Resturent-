"use client";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import PhoneButton from "@/components/ui/PhoneButton";
import ProductCard from "./ProductCard";
import type { Product } from "@/types";

interface GroceryPageLayoutProps {
  products: Product[];
  heroImage: string;
}

const GROCERY_SECTIONS = [
  { id: "rice", label: "Rice" },
  { id: "spices", label: "Pure Spices" },
  { id: "masala", label: "Masala Mixes" },
  { id: "bottle-spices", label: "Bottle Spices" },
  { id: "cooking-sauces", label: "Cooking Sauces" },
  { id: "cooking-paste", label: "Cooking Pastes" },
  { id: "cooking-mixes", label: "Cooking & Dessert Mixes" },
  { id: "condiments", label: "Condiments & Sauces" },
  { id: "pickles", label: "Pickles" },
  { id: "chutneys", label: "Chutneys" },
  { id: "snacks-mixes", label: "Snack Mixes" },
  { id: "snacks-sev", label: "Sev, Papdi & Fafda" },
  { id: "snacks-chips", label: "Chips & Popcorn" },
  { id: "snacks-south-indian", label: "South Indian Snacks" },
  { id: "snacks-khakhra", label: "Khakhra" },
  { id: "snacks-bhakri", label: "Bhakri" },
  { id: "snacks-nuts", label: "Nuts & Masala Peas" },
  { id: "dry-fruits", label: "Dry Fruits" },
  { id: "fruit-bites", label: "Fruit Bites (Aampapad)" },
  { id: "lentils", label: "Dal & Lentils" },
  { id: "flour", label: "Flour & Grains" },
  { id: "noodles", label: "Instant Noodles" },
  { id: "oil", label: "Cooking Oils" },
  { id: "ghee", label: "Ghee & Dairy" },
  { id: "dairy", label: "Paneer, Lassi & Dairy" },
  { id: "canned-goods", label: "Canned Goods & Pulp" },
  { id: "beverages", label: "Mango & Fruit Drinks" },
  { id: "mukhwas", label: "Mukhwas & Digestives" },
  { id: "jaggery", label: "Jaggery & Sweeteners" },
  { id: "special-foods", label: "Fasting & Special Foods" },
  { id: "sweets", label: "Sweets & Mithai" },
];

const BRANDS = [
  { id: "all", label: "All Brands" },
  { id: "Deep", label: "Deep" },
  { id: "Radhuni", label: "Radhuni" },
  { id: "Shaan", label: "Shaan" },
  { id: "Nanak", label: "Nanak" },
];

const COMING_SOON_BRANDS: string[] = [];

export default function GroceryPageLayout({ products, heroImage }: GroceryPageLayoutProps) {
  const [activeBrand, setActiveBrand] = useState("all");
  const [sectionSearch, setSectionSearch] = useState<Record<string, string>>({});

  const brandFiltered =
    activeBrand === "all" ? products : products.filter((p) => p.brand === activeBrand);

  function getSectionProducts(sectionId: string) {
    const base = brandFiltered.filter((p) => p.subcategory === sectionId);
    const q = (sectionSearch[sectionId] ?? "").toLowerCase().trim();
    if (!q) return base;
    return base.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }

  const visibleSections = GROCERY_SECTIONS.filter(
    (s) => brandFiltered.some((p) => p.subcategory === s.id)
  );

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "40vh" }}
        aria-label="Grocery hero"
      >
        <Image
          src={heroImage}
          alt="Grocery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
        <div className="relative z-10 container-inner text-center py-16">
          <h1
            className="text-4xl md:text-5xl font-bold font-hind text-white mb-3"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
          >
            Grocery
          </h1>
          <p className="text-white/80 font-nunito text-lg mb-6 max-w-xl mx-auto">
            Rice, spices, lentils, oils, snacks &amp; all your pantry essentials. Authentic
            desi brands you trust.
          </p>
          <PhoneButton label="Call to Order" size="md" />
        </div>
      </section>

      {/* Mobile brand strip */}
      <div
        className="lg:hidden overflow-x-auto border-b section-padding"
        style={{ paddingTop: "12px", paddingBottom: "12px", background: "var(--color-surface)" }}
      >
        <div className="flex gap-2 px-4 min-w-max">
          {BRANDS.map((brand) => (
            <BrandPill
              key={brand.id}
              label={brand.label}
              active={activeBrand === brand.id}
              onClick={() => setActiveBrand(brand.id)}
            />
          ))}
          {COMING_SOON_BRANDS.map((b) => (
            <BrandPill key={b} label={b} active={false} disabled />
          ))}
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-inner">
          <div className="flex gap-8 items-start">
            {/* Product sections */}
            <div className="flex-1 min-w-0 space-y-12">
              {visibleSections.map((section) => {
                const items = getSectionProducts(section.id);
                return (
                  <div key={section.id} id={`section-${section.id}`}>
                    {/* Section header */}
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold font-hind" style={{ color: "var(--color-text)" }}>
                        {section.label}
                      </h2>
                      <span
                        className="text-xs font-semibold font-nunito px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--color-surface-2)",
                          color: "var(--color-muted)",
                        }}
                      >
                        {brandFiltered.filter((p) => p.subcategory === section.id).length}
                      </span>
                    </div>

                    {/* Section search */}
                    <div className="relative mb-5 max-w-sm">
                      <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                        style={{ color: "var(--color-muted)" }}
                      />
                      <input
                        type="text"
                        placeholder={`Search ${section.label}…`}
                        value={sectionSearch[section.id] ?? ""}
                        onChange={(e) =>
                          setSectionSearch((prev) => ({
                            ...prev,
                            [section.id]: e.target.value,
                          }))
                        }
                        className="w-full pl-9 pr-4 py-2 text-sm font-nunito border rounded-full outline-none transition-colors"
                        style={{
                          borderColor: "var(--color-border, #E5E7EB)",
                          background: "var(--color-surface)",
                          color: "var(--color-text)",
                        }}
                      />
                    </div>

                    {/* Product grid */}
                    {items.length === 0 ? (
                      <p
                        className="py-6 text-sm font-nunito"
                        style={{ color: "var(--color-muted)" }}
                      >
                        No products match your search.
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {items.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {visibleSections.length === 0 && (
                <p
                  className="py-16 text-center font-nunito"
                  style={{ color: "var(--color-muted)" }}
                >
                  No products found for the selected brand.
                </p>
              )}
            </div>

            {/* Right sidebar — hidden on mobile */}
            <aside className="hidden lg:block w-56 shrink-0 sticky top-24">
              <div
                className="rounded border p-5"
                style={{
                  borderColor: "var(--color-border, #E5E7EB)",
                  background: "var(--color-surface)",
                }}
              >
                <h3
                  className="text-sm font-bold font-nunito uppercase tracking-wide mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  Filter by Brand
                </h3>
                <div className="space-y-2">
                  {BRANDS.map((brand) => (
                    <BrandPill
                      key={brand.id}
                      label={brand.label}
                      active={activeBrand === brand.id}
                      onClick={() => setActiveBrand(brand.id)}
                      block
                    />
                  ))}
                  <div className="pt-2 border-t" style={{ borderColor: "var(--color-border, #E5E7EB)" }}>
                    <p
                      className="text-xs font-nunito mb-2"
                      style={{ color: "var(--color-muted)" }}
                    >
                      Coming soon
                    </p>
                    {COMING_SOON_BRANDS.map((b) => (
                      <BrandPill key={b} label={b} active={false} disabled block />
                    ))}
                  </div>
                </div>

                {/* Section jump links */}
                <div className="mt-6 pt-4 border-t" style={{ borderColor: "var(--color-border, #E5E7EB)" }}>
                  <h3
                    className="text-sm font-bold font-nunito uppercase tracking-wide mb-3"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Jump to Section
                  </h3>
                  <ul className="space-y-1">
                    {visibleSections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#section-${s.id}`}
                          className="block text-xs font-nunito py-0.5 hover:underline transition-colors"
                          style={{ color: "var(--color-text)" }}
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function BrandPill({
  label,
  active,
  onClick,
  disabled,
  block,
}: {
  label: string;
  active: boolean;
  onClick?: () => void;
  disabled?: boolean;
  block?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${block ? "w-full text-left" : ""} px-4 py-2 rounded-full text-sm font-semibold font-nunito transition-all duration-200`}
      style={{
        background: disabled
          ? "var(--color-surface)"
          : active
          ? "var(--color-red)"
          : "var(--color-surface)",
        color: disabled
          ? "var(--color-muted)"
          : active
          ? "#fff"
          : "var(--color-text)",
        border: `2px solid ${
          disabled
            ? "var(--color-border, #E5E7EB)"
            : active
            ? "var(--color-red)"
            : "var(--color-border, #E5E7EB)"
        }`,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {label}
      {disabled && (
        <span className="ml-1 text-xs" style={{ color: "var(--color-muted)" }}>
          (soon)
        </span>
      )}
    </button>
  );
}
