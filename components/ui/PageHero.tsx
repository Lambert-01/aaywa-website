import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sprig } from "@/components/ui/Botanical";
import PhotoFrame from "@/components/ui/PhotoFrame";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  crumbs?: { label: string; href?: string }[];
  variant?: "forest" | "cream";
  image?: string;
  imageAlt?: string;
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  variant = "forest",
  image,
  imageAlt = "",
  className,
}: PageHeroProps) {
  const light = variant === "cream";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        light
          ? "bg-[radial-gradient(circle_at_16%_18%,rgba(215,169,75,0.18),transparent_40%),radial-gradient(circle_at_84%_28%,rgba(102,138,90,0.22),transparent_44%),linear-gradient(135deg,#F7F1E6,#EFE5CF_60%,#F7F1E6)] text-forest"
          : "bg-[radial-gradient(circle_at_18%_20%,rgba(215,169,75,0.20),transparent_36%),radial-gradient(circle_at_82%_30%,rgba(47,107,73,0.35),transparent_42%),linear-gradient(135deg,#163D2B,#1E5238_60%,#163D2B)] text-cream",
        className
      )}
    >
      <div className="grain-layer" aria-hidden />
      <Sprig
        className={cn(
          "pointer-events-none absolute -right-6 -top-8 h-56 w-56 rotate-12",
          light ? "text-forest/5" : "text-cream/10"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border",
          light ? "border-forest/10" : "border-cream/10"
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border",
          light ? "border-forest/5" : "border-cream/5"
        )}
        aria-hidden
      />

      <div
        className={cn(
          "container-aaywa relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28",
          image && "grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16"
        )}
      >
        <div>
          {crumbs && (
            <nav
              aria-label="Breadcrumb"
              className={cn(
                "mb-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
                light ? "text-forest/55" : "text-cream/55"
              )}
            >
              {crumbs.map((crumb, index) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <ChevronRight
                      size={12}
                      className={light ? "text-forest/35" : "text-cream/35"}
                      aria-hidden
                    />
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className={cn("transition-colors", light ? "hover:text-earth" : "hover:text-gold")}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <p
            className={cn(
              "eyebrow text-[0.72rem] font-bold uppercase tracking-[0.24em]",
              light ? "text-earth" : "text-gold"
            )}
          >
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-balance text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[1.05] tracking-tight">
            {title}
          </h1>
          {text && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-pretty text-lg leading-8",
                light ? "text-forest/75" : "text-cream/75"
              )}
            >
              {text}
            </p>
          )}
        </div>

        {image && (
          <div className="shrink-0">
            <PhotoFrame
              src={image}
              alt={imageAlt}
              aspect="tall"
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              rounded="rounded-[2rem] sm:rounded-[2.4rem]"
              className={cn("shadow-soft", light && "ring-[6px] ring-white/70")}
            />
          </div>
        )}
      </div>
    </section>
  );
}