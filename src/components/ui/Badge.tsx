import { cn } from "@/lib/utils";
import type { BadgeType } from "@/types";

interface BadgeProps {
  type: BadgeType | string;
  className?: string;
}

const badgeConfig: Record<string, { bg: string; text: string; label: string }> = {
  FRESH: { bg: "bg-[var(--color-fresh)]", text: "text-white", label: "FRESH" },
  HALAL: { bg: "bg-[var(--color-halal)]", text: "text-white", label: "HALAL" },
  SALE: { bg: "bg-[var(--color-red)]", text: "text-white", label: "SALE" },
  HOT: { bg: "bg-[var(--color-amber)]", text: "text-white", label: "HOT 🔥" },
  NEW: { bg: "bg-blue-600", text: "text-white", label: "NEW" },
};

export default function Badge({ type, className }: BadgeProps) {
  const config = badgeConfig[type] ?? {
    bg: "bg-gray-500",
    text: "text-white",
    label: type,
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-bold rounded uppercase tracking-wide",
        config.bg,
        config.text,
        className
      )}
    >
      {config.label}
    </span>
  );
}
