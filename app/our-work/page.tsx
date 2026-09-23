import type { Metadata } from "next";
import { PILLARS } from "@/data/pillars";
import PageHero from "@/components/ui/PageHero";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";
import PartnersStrip from "@/components/ui/PartnersStrip";
import CTAButton from "@/components/ui/CTAButton";
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
        image="/images/impact-community.jpg"
        imageAlt="Community members working together on shared goals"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-aaywa space-y-24 sm:space-y-32">
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
                <PhotoFrame
                  src={pillar.image}
                  alt={pillar.title}
                  aspect="landscape"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  rounded="rounded-[1.8rem] lg:rounded-[2.2rem]"
                  caption={pillar.impact}
                  className="shadow-soft"
                />
              </Reveal>

              <Reveal delay={0.1} className={cn(index % 2 === 1 && "lg:[direction:ltr]")}>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-6xl leading-none text-forest/10">{pillar.index}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage text-leaf">
                    <pillar.icon size={22} aria-hidden />
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-balance text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.12] tracking-tight text-forest">
                  {pillar.title}
                </h2>
                <p className="mt-5 max-w-xl text-pretty leading-8 text-forest/70">{pillar.long}</p>
                <div className="mt-6 rounded-2xl border-l-4 border-gold bg-white px-5 py-4 shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-earth">
                    What it creates
                  </span>
                  <p className="mt-1.5 font-semibold text-forest">{pillar.impact}</p>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-aaywa">
          <Reveal id="journey" className="flex scroll-mt-28 flex-col items-start gap-6 rounded-[1.8rem] bg-cream px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="font-serif text-2xl tracking-tight text-forest">
                Follow the full AAYWA journey
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-forest/65">
                Discover → Learn → Produce → Build → Access Markets → Grow → Lead. A
                supported pathway from first step to leadership.
              </p>
            </div>
            <CTAButton href="/#journey" variant="forest" withArrow>
              See the journey
            </CTAButton>
          </Reveal>
        </div>
      </section>

      <PartnersStrip />

      <section className="pt-10">
        <CtaBanner
          title="Built around women. Ready for partnership."
          text="If your organization accelerates women in agriculture — through finance, markets, research or technology — let's combine forces."
          primaryLabel="Partner With AAYWA"
          primaryHref="/get-involved#partner"
          secondaryLabel="Get involved"
          secondaryHref="/get-involved"
        />
      </section>
    </>
  );
}