import { Sprout } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

type CtaBannerProps = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaBanner({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className="pb-24 sm:pb-28">
      <div className="container-aaywa">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest px-7 py-14 text-cream sm:px-14 sm:py-16">
          <svg
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
           
          >
            <path d="M0,320 C140,270 300,285 430,235 C560,188 680,225 800,170 L800,600 L0,600 Z" fill="rgba(93,138,90,0.22)" />
            <path d="M0,440 C170,380 340,410 520,340 C640,296 720,338 800,312 L800,600 L0,600 Z" fill="rgba(47,107,73,0.30)" />
            <path d="M0,560 C160,498 340,525 520,468 C640,432 720,472 800,444 L800,600 L0,600 Z" fill="rgba(22,61,43,0.5)" />
            <g stroke="rgba(247,243,232,0.16)" strokeWidth="2" fill="none">
              <path d="M0,520 C160,472 340,497 520,446" />
              <path d="M0,550 C160,504 340,529 520,480" />
            </g>
          </svg>
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(120deg, rgba(22,61,43,0.9) 0%, rgba(22,61,43,0.72) 55%, rgba(47,107,73,0.72) 100%)",
            }}
          />
          <div className="grain-layer" aria-hidden />
          <Sprout className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rotate-12 text-cream/10" aria-hidden />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="font-serif text-balance text-[clamp(1.8rem,3.6vw,2.9rem)] leading-[1.12] tracking-tight">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-pretty leading-7 text-cream/70">{text}</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <CTAButton href={primaryHref} variant="primary" size="lg" withArrow>
                {primaryLabel}
              </CTAButton>
              {secondaryLabel && secondaryHref && (
                <CTAButton href={secondaryHref} variant="outline-light" size="lg">
                  {secondaryLabel}
                </CTAButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}