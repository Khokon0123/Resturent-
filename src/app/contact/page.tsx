import type { Metadata } from "next";
import LocationContact from "@/components/sections/LocationContact";
import PhoneButton from "@/components/ui/PhoneButton";
import { storeInfo } from "@/lib/data";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Visit Asia Bazaar at 7864 Richmond Hwy, Alexandria VA 22306. Call to order fresh halal meat and desi groceries for same-day pickup.",
};

const faqs = [
  {
    q: "Do you offer same-day pickup?",
    a: "Yes! Call us to place your order and we'll have it ready for same-day pickup at our store.",
  },
  {
    q: "Is all your meat halal certified?",
    a: "Absolutely. All our meat is slaughtered fresh daily following strict halal standards.",
  },
  {
    q: "Do you carry Bangladeshi fish like Ilish?",
    a: "Yes, we carry fresh Ilish (Hilsa), Rohu, Katla and other Bangladeshi fish. Availability varies daily — call ahead to check.",
  },
  {
    q: "Can I request specific cuts?",
    a: "Yes, our butchers can cut to your specifications. Just let us know when you call or visit.",
  },
  {
    q: "Do you take online orders?",
    a: `Currently we take orders by phone and in-store only. Call us at ${storeInfo.phone} to order.`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-16"
        style={{ background: "var(--color-surface-2)" }}
      >
        <div className="container-inner">
          <h1
            className="text-4xl md:text-5xl font-bold font-hind mb-3"
            style={{ color: "var(--color-text)" }}
          >
            Contact & Location
          </h1>
          <p className="text-lg font-nunito mb-8" style={{ color: "var(--color-muted)" }}>
            We&apos;d love to hear from you. Stop by the store or give us a call.
          </p>
          <div className="flex flex-wrap gap-3">
            <PhoneButton size="lg" />
            <a
              href={storeInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded font-bold text-base font-nunito transition-all duration-200 hover:opacity-90"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={`mailto:${storeInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded font-bold text-base font-nunito transition-all duration-200"
              style={{
                background: "transparent",
                color: "var(--color-text)",
                border: "2px solid var(--color-border)",
              }}
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <LocationContact />

      {/* FAQ */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-inner max-w-3xl">
          <h2
            className="text-3xl font-bold font-hind mb-8"
            style={{ color: "var(--color-text)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded"
                style={{
                  background: "var(--color-surface)",
                  borderLeft: "4px solid var(--color-red)",
                }}
              >
                <h3
                  className="font-bold font-hind text-base mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm font-nunito leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
