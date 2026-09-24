import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Scene, { type SceneName } from "@/components/ui/Scene";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  crumbs?: { label: string; href?: string }[];
  variant?: "forest" | "cream";
  scene?: SceneName;
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  variant = "forest",
  scene = "hills",
  className,
}: PageHeroProps) {
  const light = variant === "cream";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        light
          ? "bg-[radial-gradient(circle_at_84%_20%,rgba(215,169,75,0.18),transparent_42%)] text-forest"
          : "bg-[rgba(15,49,33,0.55)] text-cream",
        className
      )}
    >
      <div className="absolute inset-0" aria-hidden>
        <Scene
          variant={scene}
          className="h-full w-full rounded-none"
          aspect="wide"
        />
      </div>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          light
            ? "bg-gradient-to-b from-[#FAF8F2]/92 via-[#FAF8F2]/78 to-[#F7F3E8]/85"
            : "bg-gradient-to-b from-[rgba(15,49,33,0.9)] via-[rgba(15,49,33,0.74)] to-[rgba(15,49,33,0.82)]"
        )}
      />
      <div className="grain-layer" aria-hidden />

      <div className="container-aaywa relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28">
        {crumbs && (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "mb-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
              light ? "text-forest/55" : "text-cream/60"
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
              light ? "text-forest/80" : "text-cream/85"
            )}
          >
            {text}
          </p>
        )}
      </div>
    </section>
  );
}