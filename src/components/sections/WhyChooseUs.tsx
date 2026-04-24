"use client";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: "🥩",
    title: "Fresh Halal Meat Daily",
    description:
      "Our meat is slaughtered fresh every morning following strict halal standards. No frozen shortcuts.",
  },
  {
    icon: "🐟",
    title: "Authentic Desi Products",
    description:
      "Ilish, Rohu, Kalijeera rice, Shaan masala — we carry brands and items you grew up with.",
  },
  {
    icon: "💰",
    title: "Affordable Prices",
    description:
      "Wholesale buying power means we pass the savings to you. Compare our prices — you'll come back.",
  },
  {
    icon: "🤝",
    title: "Friendly Local Service",
    description:
      "We're your neighbors. We speak your language, understand your needs, and go the extra mile.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div className="container-inner">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Asia Bazaar"
            title="Why Customers Choose Us"
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.08}>
              <div
                className="p-6 rounded h-full"
                style={{
                  background: "var(--color-surface)",
                  borderLeft: "4px solid var(--color-red)",
                }}
              >
                <div className="text-3xl mb-3" aria-hidden="true">
                  {reason.icon}
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-halal)" }}
                  />
                  <h3
                    className="font-bold font-hind text-base leading-tight"
                    style={{ color: "var(--color-text)" }}
                  >
                    {reason.title}
                  </h3>
                </div>
                <p
                  className="text-sm font-nunito leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
