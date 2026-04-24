import { Phone } from "lucide-react";
import { storeInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  className?: string;
  iconOnly?: boolean;
}

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function PhoneButton({
  label = "Call Now to Order",
  size = "md",
  variant = "primary",
  className,
  iconOnly = false,
}: PhoneButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded font-nunito transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-red)]";

  const variants = {
    primary:
      "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-dark)] border border-[var(--color-red)]",
    ghost:
      "bg-transparent text-white hover:bg-white/10 border border-white/40",
  };

  return (
    <a
      href={`tel:${storeInfo.phone}`}
      className={cn(base, variants[variant], sizeStyles[size], className)}
      aria-label={`Call ${storeInfo.name} at ${storeInfo.phone}`}
    >
      <Phone size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />
      {!iconOnly && <span>{label}</span>}
    </a>
  );
}
