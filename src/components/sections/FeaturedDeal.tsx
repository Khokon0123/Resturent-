"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PhoneButton from "@/components/ui/PhoneButton";
import { deals } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function FeaturedDeal() {
  const deal = deals[0];
  if (!deal) return null;

  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-surface-2)" }}
      aria-label="Today's special deal"
    >
      <div className="container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text side */}
          <ScrollReveal direction="right">
            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-4"
                style={{ background: "var(--color-red)", color: "#fff" }}
              >
                🔥 {deal.badge}
              </span>

              <h2
                className="text-3xl md:text-5xl font-bold font-hind leading-tight mb-3"
                style={{ color: "var(--color-text)" }}
              >
                {deal.title}
              </h2>

              <p
                className="text-base md:text-lg mb-6 font-nunito leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {deal.description}
              </p>

              {/* Price display */}
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  className="text-5xl font-bold font-hind"
                  style={{ color: "var(--color-red)" }}
                >
                  {formatPrice(deal.price)}
                </span>
                {deal.originalPrice && (
                  <span
                    className="text-2xl line-through font-nunito"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {formatPrice(deal.originalPrice)}
                  </span>
                )}
                {deal.savings && (
                  <span
                    className="px-3 py-1 rounded-full text-sm font-bold"
                    style={{ background: "var(--color-halal)", color: "#fff" }}
                  >
                    SAVE {formatPrice(deal.savings)}
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <PhoneButton label="Order This Deal" size="lg" />
                <p className="text-xs self-center font-nunito" style={{ color: "var(--color-muted)" }}>
                  Limited quantity daily. Call to reserve.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Image side */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              <div
                className="relative rounded overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Savings badge */}
                <motion.div
                  animate={{ rotate: [12, 15, 12] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="absolute top-4 right-4 flex flex-col items-center justify-center w-20 h-20 rounded-full font-bold text-center text-xs"
                  style={{
                    background: "var(--color-amber)",
                    color: "#111",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  <span className="text-lg leading-none">
                    -{formatPrice(deal.savings ?? 0)}
                  </span>
                  <span>OFF</span>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
