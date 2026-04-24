"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/lib/data";

export default function FeaturedProducts() {
  const trackRef = useRef<HTMLDivElement>(null);
  const products = getFeaturedProducts();

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-inner">
        <div className="flex items-end justify-between mb-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Staff Picks"
              title="Featured Products"
              description="Our freshest, most popular items — available daily."
            />
          </ScrollReveal>

          {/* Scroll controls */}
          <div className="hidden md:flex items-center gap-2 mb-10">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded border transition-colors hover:bg-white"
              style={{ borderColor: "var(--color-border)" }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} style={{ color: "var(--color-muted)" }} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded border transition-colors hover:bg-white"
              style={{ borderColor: "var(--color-border)" }}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} style={{ color: "var(--color-muted)" }} />
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          role="list"
          aria-label="Featured products carousel"
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{ scrollSnapAlign: "start", minWidth: "260px", maxWidth: "300px", flex: "0 0 auto" }}
              role="listitem"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
