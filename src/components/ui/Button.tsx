import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary" | "secondary" | "ghost" | "amber";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-dark)] border border-[var(--color-red)]",
  secondary:
    "bg-transparent text-[var(--color-red)] hover:bg-[var(--color-red)] hover:text-white border border-[var(--color-red)]",
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-white/40",
  amber:
    "bg-[var(--color-amber)] text-white hover:bg-[var(--color-amber-dark)] border border-[var(--color-amber)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold rounded font-nunito transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-red)] disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
