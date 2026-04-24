import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className="inline-block mb-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{
            background: "var(--color-red)",
            color: "#fff",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl font-bold font-hind leading-tight"
        style={{ color: "var(--color-text)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-3 text-lg max-w-2xl"
          style={{ color: "var(--color-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
