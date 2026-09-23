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
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 85% 15%, rgba(215,169,75,0.22), transparent 42%), radial-gradient(circle at 10% 100%, rgba(47,107,73,0.4), transparent 45%)",
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