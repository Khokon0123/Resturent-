"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "./ProductCard";
import PhoneButton from "@/components/ui/PhoneButton";
import type { Product } from "@/types";

interface CategoryPageLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
  subcategories: string[];
}

export default function CategoryPageLayout({
  title,
  description,
  heroImage,
  products,
  subcategories,
}: CategoryPageLayoutProps) {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.subcategory === active);

  return (
    <>
      {/* Category hero (shorter, 40vh) */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "40vh" }}
        aria-label={`${title} hero`}
      >
        <Image
          src={heroImage}
          alt={title}
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
            {title}
          </h1>
          <p className="text-white/80 font-nunito text-lg mb-6 max-w-xl mx-auto">
            {description}
          </p>
          <PhoneButton label="Call to Order" size="md" />
        </div>
      </section>

      {/* Products */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-inner">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <SectionHeading title={`All ${title}`} />

            {/* Filter pills */}
            {subcategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                <FilterPill
                  label="All"
                  active={active === "all"}
                  onClick={() => setActive("all")}
                />
                {subcategories.map((sub) => (
                  <FilterPill
                    key={sub}
                    label={sub.charAt(0).toUpperCase() + sub.slice(1)}
                    active={active === sub}
                    onClick={() => setActive(sub)}
                  />
                ))}
              </div>
            )}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center py-12 font-nunito" style={{ color: "var(--color-muted)" }}>
              No products found. Try a different filter.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full text-sm font-semibold font-nunito transition-all duration-200"
      style={{
        background: active ? "var(--color-red)" : "var(--color-surface)",
        color: active ? "#fff" : "var(--color-text)",
        border: `2px solid ${active ? "var(--color-red)" : "var(--color-border)"}`,
      }}
    >
      {label}
    </button>
  );
}
