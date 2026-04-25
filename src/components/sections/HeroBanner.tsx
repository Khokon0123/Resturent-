"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { storeInfo } from "@/lib/data";

const stats = [
  { icon: "🥩", label: "Fresh Halal Meat Daily" },
  { icon: "🐟", label: "Bangladeshi Fish" },
  { icon: "🚚", label: "Same-Day Pickup" },
  { icon: "🅿️", label: "Free Parking" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroBanner() {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: "92vh" }}
      aria-label="Hero banner"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Radhuni authentic Bangladeshi spice masala packs"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.58)" }} />

      {/* Red gradient left edge */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(220,38,38,0.45) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="container-inner relative z-10 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.div variants={itemVariants}>
            <span
              className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ background: "var(--color-amber)", color: "#111" }}
            >
              Alexandria, Virginia
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-hind leading-tight text-white mb-4 max-w-3xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Fresh Desi Grocery &
            <br />
            <span style={{ color: "var(--color-amber)" }}>Halal Meat</span> in
            <br />
            Alexandria
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/85 mb-8 max-w-xl font-nunito"
          >
            Fish • Meat • Rice • Spices • Frozen Food — Everything in One Place
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={`tel:${storeInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded font-bold text-base font-nunito transition-all duration-200 hover:scale-105"
              style={{ background: "var(--color-red)", color: "#fff" }}
              aria-label={`Call ${storeInfo.name}`}
            >
              <Phone size={18} />
              Call Now to Order
            </a>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded font-bold text-base font-nunito transition-all duration-200 hover:bg-white/20"
              style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff" }}
            >
              Browse Shop
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Trust stats strip */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 px-4 py-3 rounded"
                style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
              >
                <span className="text-2xl" aria-hidden="true">{stat.icon}</span>
                <span className="text-sm font-semibold text-white font-nunito leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom address strip */}
      <div
        className="absolute bottom-0 left-0 right-0 py-3"
        style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      >
        <div className="container-inner flex items-center justify-between flex-wrap gap-2">
          <span className="text-white/80 text-sm font-nunito flex items-center gap-2">
            <CheckCircle size={14} style={{ color: "var(--color-halal)" }} />
            {storeInfo.address}, {storeInfo.city}, {storeInfo.state}
          </span>
          <a
            href={storeInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold font-nunito transition-colors hover:text-white"
            style={{ color: "var(--color-amber)" }}
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}
