"use client";
import { announcementMessages, storeInfo } from "@/lib/data";

export default function AnnouncementBar() {
  const doubled = [...announcementMessages, ...announcementMessages];

  return (
    <div
      className="relative overflow-hidden py-2 text-sm font-semibold font-nunito"
      style={{ background: "var(--color-red)", color: "#fff" }}
      role="banner"
      aria-label="Store announcements"
    >
      <div className="marquee-track">
        {doubled.map((msg, i) => (
          <span key={i} className="flex items-center gap-1 whitespace-nowrap px-8">
            {msg}
          </span>
        ))}
      </div>
      {/* Phone CTA always visible on desktop */}
      <a
        href={`tel:${storeInfo.phone}`}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-1 bg-white/20 hover:bg-white/30 transition-colors px-3 py-0.5 rounded text-white font-bold text-xs"
        aria-label={`Call us at ${storeInfo.phone}`}
      >
        📞 {storeInfo.phone}
      </a>
    </div>
  );
}
