import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import PhoneButton from "@/components/ui/PhoneButton";
import { deals } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Today's Offers & Deals 🔥",
  description:
    "Current deals and combo offers at Asia Bazaar, Alexandria VA. Fresh Ilish fish combo, halal meat bundles & grocery packs.",
};

export default function OffersPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-14"
        style={{ background: "var(--color-red)", color: "#fff" }}
      >
        <div className="container-inner text-center">
          <span className="text-5xl block mb-3" aria-hidden="true">🔥</span>
          <h1 className="text-4xl md:text-5xl font-bold font-hind mb-3">
            Today&apos;s Special Deals
          </h1>
          <p className="text-white/80 text-lg font-nunito max-w-xl mx-auto">
            Limited time offers — call now to reserve your order for same-day pickup.
          </p>
        </div>
      </section>

      {/* Deals grid */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-inner">
          <SectionHeading
            eyebrow="Special Pricing"
            title="Current Deals"
            description="Call to order any deal for same-day pickup."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <article
                key={deal.id}
                className="rounded overflow-hidden"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div className="relative" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                    style={{ background: "var(--color-red)", color: "#fff" }}
                  >
                    {deal.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h2
                    className="text-xl font-bold font-hind mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {deal.title}
                  </h2>
                  <p
                    className="text-sm font-nunito mb-4 leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {deal.description}
                  </p>

                  <div className="flex items-baseline gap-3 mb-5">
                    <span
                      className="text-3xl font-bold font-hind"
                      style={{ color: "var(--color-red)" }}
                    >
                      {formatPrice(deal.price)}
                    </span>
                    {deal.originalPrice && (
                      <span
                        className="text-lg line-through font-nunito"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {formatPrice(deal.originalPrice)}
                      </span>
                    )}
                    {deal.savings && (
                      <span
                        className="text-sm font-bold px-2 py-0.5 rounded"
                        style={{ background: "var(--color-halal)", color: "#fff" }}
                      >
                        Save {formatPrice(deal.savings)}
                      </span>
                    )}
                  </div>

                  <PhoneButton label="Order This Deal" size="md" className="w-full justify-center" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
