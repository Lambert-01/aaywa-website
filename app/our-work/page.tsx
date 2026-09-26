import type { Metadata } from "next";
import Image from "next/image";
import { PILLARS } from "@/data/pillars";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "AAYWA works across six pillars: agribusiness & entrepreneurship, sustainable agriculture, market access, finance readiness, leadership & mentorship, and innovation & digital agriculture.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Six pillars. One purpose: women-led agribusiness that lasts."
        text="Every AAYWA programme is built around the full journey — from knowledge to production, from enterprise to markets, and from markets to leadership."
        scene="fields"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-aaywa space-y-20 sm:space-y-28">
          {PILLARS.map((pillar, index) => (
            <article
              key={pillar.id}
              id={pillar.id}
              className={cn(
                "grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-20",
                index % 2 === 1 && "lg:[direction:rtl]"
              )}
            >
              <Reveal className={cn(index % 2 === 1 && "lg:[direction:ltr]")}>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-6xl leading-none text-forest/10">
                    {pillar.index}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-sage text-leaf">
                    <pillar.icon size={22} aria-hidden />
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-balance text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.12] tracking-tight text-forest">
                  {pillar.title}
                </h2>
                <p className="mt-5 max-w-xl text-pretty leading-8 text-forest/70">
                  {pillar.long}
                </p>
                <div className="mt-6 rounded-[8px] border-l-4 border-gold bg-white px-5 py-4 shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-earth">
                    What it creates
                  </span>
                  <p className="mt-1.5 font-semibold text-forest">{pillar.impact}</p>
                </div>
              </Reveal>

              {/* Visual accent — alternating color blocks instead of Scene */}
              <Reveal
                delay={0.08}
                className={cn(index % 2 === 1 && "lg:[direction:ltr]")}
              >
                <div
                  className={cn(
                    "flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[10px]",
                    index % 3 === 0 && "bg-sage",
                    index % 3 === 1 && "bg-forest",
                    index % 3 === 2 && "bg-cream border border-forest/10"
                  )}
                >
                  <span
                    className={cn(
                      "font-serif text-[8rem] leading-none opacity-20",
                      index % 3 === 1 ? "text-cream" : "text-forest"
                    )}
                    aria-hidden
                  >
                    {pillar.index}
                  </span>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* Growing plant divider */}
      <Reveal>
        <div className="relative h-64 w-full overflow-hidden sm:h-80">
          <Image
            src="/images/growing-plant.jpg"
            alt="A young plant growing — representing the growth AAYWA cultivates in women and communities"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-forest/60 via-forest/20 to-forest/60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-serif text-xl text-cream/90 sm:text-2xl">
              Every programme grows from a single commitment.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="pt-10">
        <CtaBanner
          title="Built around young women. Ready for partnership."
          text="If your organization accelerates young women in agriculture — through finance, markets, research or technology — let's combine forces."
          primaryLabel="Partner With AAYWA"
          primaryHref="/get-involved#partner"
          secondaryLabel="Get involved"
          secondaryHref="/get-involved"
        />
      </div>
    </>
  );
}
