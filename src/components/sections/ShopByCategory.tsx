"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Fish,
  ShoppingBasket,
  Snowflake,
  Leaf,
  Plug,
  Star,
  GlassWater,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Fish,
  ShoppingBasket,
  Snowflake,
  Leaf,
  Plug,
  Star,
  GlassWater,
};

export default function ShopByCategory() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div className="container-inner">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Browse Categories"
            title="Everything You Need, In One Place"
            description="From fresh fish to spices to religious items — we stock it all."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  delay,
}: {
  category: (typeof categories)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[category.icon] ?? ShoppingBasket;

  return (
    <ScrollReveal delay={delay}>
      <Link
        href={category.href}
        className="block rounded p-5 md:p-7 transition-all duration-200"
        style={{
          background: hovered ? category.color + "14" : "var(--color-surface)",
          border: `2px solid ${hovered ? category.color : "transparent"}`,
          boxShadow: hovered ? `0 6px 24px ${category.color}22` : "none",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Shop ${category.label}: ${category.description}`}
      >
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded flex items-center justify-center mb-4 transition-transform duration-200"
          style={{
            background: category.color + "18",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Icon size={24} style={{ color: category.color }} />
        </div>

        <h3
          className="font-bold text-base md:text-lg font-hind leading-tight mb-1"
          style={{ color: "var(--color-text)" }}
        >
          {category.label}
        </h3>
        <p
          className="text-xs md:text-sm font-nunito mb-3 leading-snug"
          style={{ color: "var(--color-muted)" }}
        >
          {category.description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className="text-xs font-semibold font-nunito"
            style={{ color: category.color }}
          >
            {category.count}+ items
          </span>
          <ArrowRight
            size={14}
            style={{
              color: category.color,
              opacity: hovered ? 1 : 0.4,
              transform: hovered ? "translateX(3px)" : "translateX(0)",
              transition: "all 0.2s",
            }}
          />
        </div>
      </Link>
    </ScrollReveal>
  );
}
