"use client";
import Image from "next/image";
import { useState } from "react";
import { Phone } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { storeInfo } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative rounded overflow-hidden flex-shrink-0"
      style={{
        background: "#fff",
        border: "1px solid var(--color-border)",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.2s ease",
        width: compact ? "200px" : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={product.name}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          sizes={compact ? "200px" : "(max-width: 768px) 50vw, 280px"}
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge && <Badge type={product.badge} />}
        </div>

        {/* Phone CTA overlay */}
        <a
          href={`tel:${storeInfo.phone}`}
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-3 font-bold text-sm font-nunito transition-all duration-200"
          style={{
            background: "var(--color-red)",
            color: "#fff",
            transform: hovered ? "translateY(0)" : "translateY(100%)",
          }}
          aria-label={`Order ${product.name} by phone`}
        >
          <Phone size={14} />
          Order Now
        </a>
      </div>

      {/* Info */}
      <div className={compact ? "p-3" : "p-4"}>
        <h3
          className="font-bold font-hind leading-tight mb-0.5"
          style={{
            color: "var(--color-text)",
            fontSize: compact ? "0.85rem" : "1rem",
          }}
        >
          {product.name}
        </h3>
        {product.namebn && (
          <p className="text-xs mb-1" style={{ color: "var(--color-muted)" }}>
            {product.namebn}
          </p>
        )}
        {!compact && (
          <p
            className="text-xs leading-snug mb-2 line-clamp-2 font-nunito"
            style={{ color: "var(--color-muted)" }}
          >
            {product.description}
          </p>
        )}
        <div className="flex items-baseline gap-1">
          <span className="font-bold font-hind" style={{ color: "var(--color-red)", fontSize: compact ? "1rem" : "1.15rem" }}>
            {formatPrice(product.price)}
          </span>
          <span className="text-xs font-nunito" style={{ color: "var(--color-muted)" }}>
            / {product.unit}
          </span>
        </div>
      </div>
    </article>
  );
}
