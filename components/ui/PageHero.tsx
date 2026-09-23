import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sprig } from "@/components/ui/Botanical";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  crumbs?: { label: string; href?: string }[];
  className?: string;
};

export default function PageHero({ eyebrow, title, text, crumbs, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-forest text-cream",
        "bg-[radial-gradient(circle_at_18%_20%,rgba(215,169,75,0.20),transparent_36%),radial-gradient(circle_at_82%_30%,rgba(47,107,73,0.35),transparent_42%),linear-gradient(135deg,#163D2B,#1E5238_60%,#163D2B)]",
        className
      )}
    >
      <div className="grain-layer" aria-hidden />
      <Sprig className="pointer-events-none absolute -right-6 -top-8 h-56 w-56 rotate-12 text-cream/10" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border border-cream/10" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-cream/5" aria-hidden />

      <div className="container-aaywa relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream/55">
            {crumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight size={12} className="text-cream/35" aria-hidden />}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-gold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <p className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-balance text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[1.05] tracking-tight">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-cream/75">{text}</p>}
      </div>
    </section>
  );
}