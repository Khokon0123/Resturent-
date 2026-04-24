import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShoppingBasket } from "lucide-react";
import { storeInfo, storeHours } from "@/lib/data";

const shopLinks = [
  { label: "Fresh Meat & Fish", href: "/fresh-meat-fish" },
  { label: "Grocery", href: "/grocery" },
  { label: "Frozen Food", href: "/frozen-food" },
  { label: "Today's Offers", href: "/offers" },
  { label: "All Products", href: "/shop" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Store Policies", href: "/policies" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#111827", color: "#F9FAFB" }}>
      {/* Main footer grid */}
      <div className="container-inner py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl font-hind mb-4"
              style={{ color: "var(--color-amber)" }}
            >
              <ShoppingBasket size={24} />
              Asia Bazaar
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#9CA3AF" }}>
              Your one-stop South Asian grocery & halal market in Alexandria, VA.
              Fresh fish, halal meat, and authentic desi products daily.
            </p>
            <div className="flex items-center gap-3">
              {storeInfo.social.facebook && (
                <a
                  href={storeInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded transition-colors hover:bg-white/10"
                  style={{ color: "#9CA3AF" }}
                >
                  <span className="text-xs font-bold">FB</span>
                </a>
              )}
              {storeInfo.social.instagram && (
                <a
                  href={storeInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded transition-colors hover:bg-white/10"
                  style={{ color: "#9CA3AF" }}
                >
                  <span className="text-xs font-bold">IG</span>
                </a>
              )}
              {storeInfo.social.whatsapp && (
                <a
                  href={storeInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2 rounded transition-colors hover:bg-white/10 text-sm font-bold"
                  style={{ color: "#9CA3AF" }}
                >
                  WA
                </a>
              )}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5 font-nunito" style={{ color: "#E5E7EB" }}>
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Hours */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5 font-nunito flex items-center gap-2" style={{ color: "#E5E7EB" }}>
              <Clock size={14} />
              Store Hours
            </h3>
            <ul className="space-y-2">
              {storeHours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm gap-4">
                  <span style={{ color: "#9CA3AF" }}>{h.day.slice(0, 3)}</span>
                  <span style={{ color: "#D1D5DB" }}>{h.open} – {h.close}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5 font-nunito" style={{ color: "#E5E7EB" }}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={storeInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm transition-colors hover:text-white group"
                  style={{ color: "#9CA3AF" }}
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 group-hover:text-[var(--color-red)]" />
                  <span>
                    {storeInfo.address}<br />
                    {storeInfo.city}, {storeInfo.state} {storeInfo.zip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${storeInfo.phone}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: "#9CA3AF" }}
                >
                  <Phone size={16} className="shrink-0" />
                  {storeInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${storeInfo.email}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: "#9CA3AF" }}
                >
                  <Mail size={16} className="shrink-0" />
                  {storeInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1F2937" }}>
        <div className="container-inner py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#6B7280" }}>
            © {year} Asia Bazaar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: "var(--color-halal)", color: "#fff" }}
            >
              ✓ Halal Certified
            </span>
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "#6B7280" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
