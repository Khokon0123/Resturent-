"use client";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { reviews } from "@/lib/data";

export default function CustomerReviews() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div className="container-inner">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Reviews"
            title="What Our Customers Say"
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.id} delay={i * 0.08}>
              <div
                className="p-6 rounded h-full flex flex-col"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Quote
                  size={24}
                  className="mb-3"
                  style={{ color: "var(--color-red)", opacity: 0.4 }}
                />
                <p
                  className="text-sm font-nunito leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--color-text)" }}
                >
                  &ldquo;{review.body}&rdquo;
                </p>
                <div className="mt-auto">
                  <StarRating rating={review.rating} size={14} className="mb-2" />
                  <p className="font-bold text-sm font-hind" style={{ color: "var(--color-text)" }}>
                    {review.author}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-nunito" style={{ color: "var(--color-muted)" }}>
                      {review.date}
                    </span>
                    {review.verified && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: "var(--color-halal)", color: "#fff" }}
                      >
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
