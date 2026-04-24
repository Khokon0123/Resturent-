import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { storeInfo, storeHours } from "@/lib/data";

export default function LocationContact() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-surface)" }}
      aria-label="Store location and contact"
    >
      <div className="container-inner">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Asia Bazaar Today"
          description="We're conveniently located on Richmond Highway in Alexandria, VA."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Google Maps embed */}
          <div
            className="rounded overflow-hidden"
            style={{ aspectRatio: "4/3", border: "1px solid var(--color-border)" }}
          >
            <iframe
              title="Asia Bazaar location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.938624773!2d-77.10599688466775!3d38.73003657959617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b1c2bb3a0b6d%3A0x1234567890abcdef!2s7864+Richmond+Hwy%2C+Alexandria%2C+VA+22306!5e0!3m2!1sen!2sus!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Store info */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div
              className="flex items-start gap-4 p-5 rounded"
              style={{ background: "#fff", border: "1px solid var(--color-border)" }}
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                style={{ background: "var(--color-red)", color: "#fff" }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="font-bold font-hind mb-1" style={{ color: "var(--color-text)" }}>
                  Address
                </h3>
                <p className="text-sm font-nunito" style={{ color: "var(--color-muted)" }}>
                  {storeInfo.address}
                  <br />
                  {storeInfo.city}, {storeInfo.state} {storeInfo.zip}
                </p>
                <a
                  href={storeInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs font-semibold font-nunito hover:underline"
                  style={{ color: "var(--color-red)" }}
                >
                  Get Directions <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-start gap-4 p-5 rounded"
              style={{ background: "#fff", border: "1px solid var(--color-border)" }}
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                style={{ background: "var(--color-halal)", color: "#fff" }}
              >
                <Phone size={18} />
              </div>
              <div>
                <h3 className="font-bold font-hind mb-1" style={{ color: "var(--color-text)" }}>
                  Phone (Call or WhatsApp)
                </h3>
                <a
                  href={`tel:${storeInfo.phone}`}
                  className="text-sm font-semibold font-nunito hover:underline"
                  style={{ color: "var(--color-red)" }}
                >
                  {storeInfo.phone}
                </a>
                <p className="text-xs mt-1 font-nunito" style={{ color: "var(--color-muted)" }}>
                  Call to order fresh meat & fish for same-day pickup
                </p>
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-5 rounded"
              style={{ background: "#fff", border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-amber)", color: "#fff" }}
                >
                  <Clock size={18} />
                </div>
                <h3 className="font-bold font-hind" style={{ color: "var(--color-text)" }}>
                  Store Hours
                </h3>
              </div>
              <ul className="space-y-2">
                {storeHours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-sm font-nunito py-1"
                    style={{ borderBottom: "1px solid var(--color-border)" }}
                  >
                    <span style={{ color: "var(--color-muted)" }}>{h.day}</span>
                    <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                      {h.open} – {h.close}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
