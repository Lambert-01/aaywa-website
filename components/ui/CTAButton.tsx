import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "forest" | "outline-light" | "outline-dark";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

const base =
  "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-forest hover:bg-[#e2bc66] hover:shadow-glow active:scale-[0.98]",
  forest:
    "bg-forest text-cream hover:bg-leaf hover:shadow-soft active:scale-[0.98]",
  "outline-light":
    "border border-white/35 text-white hover:bg-white/10 hover:border-white/60 active:scale-[0.98]",
  "outline-dark":
    "border border-forest/25 text-forest hover:bg-forest hover:text-cream active:scale-[0.98]",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

export default function CTAButton({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const arrow = withArrow ? (
    <ArrowRight
      className="transition-transform duration-300 group-hover:translate-x-1"
      size={16}
      aria-hidden
    />
  ) : null;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
      {arrow}
    </button>
  );
}