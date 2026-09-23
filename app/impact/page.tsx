import type { Metadata } from "next";
import { Globe2, LineChart, TreePalm, type LucideIcon } from "lucide-react";
import { IMPACT_CATEGORIES, STATS } from "@/data/impact";
import PageHero from "@/components/ui/PageHero";
import StatCard from "@/components/ui/StatCard";
import QuoteBlock from "@/components/ui/QuoteBlock";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";
import PartnersStrip from "@/components/ui/PartnersStrip";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "AAYWA impact across social, economic and environmental change: skills, confidence and leadership; productivity, enterprise and market access; regenerative agriculture and climate resilience.",
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  social: LineChart,
  economic: Globe2,
  environmental: TreePalm,
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title="Transformation you can follow, not just count."
        text="We measure the change created around women-led agribusiness — social, economic and environmental."
        crumbs={[{ label: "Home", href: "/" }, { label: "Impact" }]}
      />

      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="container-aaywa">
          <div className="grid gap-6 lg:grid-cols-3">
            {IMPACT_CATEGORIES.map((category, index) => {
              const Icon = CATEGORY_ICONS[category.id];
              return (
                <Reveal key={category.id} delay={index * 0.08}>
                  <article className="h-full rounded-[1.6rem] border border-forest/10 bg-white p-8">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-earth">
                      <Icon size={22} aria-hidden />
                    </span>
                    <h2 className="mt-6 font-serif text-2xl tracking-tight text-forest">{category.title}</h2>
                    <p className="mt-3 leading-7 text-forest/70">{category.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-cream sm:py-24">
        <div className="container-aaywa">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-20">
            <Reveal>
              <h2 className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.24em] text-gold">
                Our indicators
              </h2>
              <p className="mt-4 font-serif text-balance text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.12] tracking-tight">
                The statistics AAYWA will report.
              </p>
              <p className="mt-5 leading-7 text-cream/70">
                Metrics are prepared and updated as programmes operate, data is
                verified and results are approved for public release. Figures are
                never estimated.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {STATS.map((stat) => (
                  <StatCard
                    key={stat.id}
                    label={stat.label}
                    value={stat.value}
                    note={stat.note}
                    tone="light"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-aaywa grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <QuoteBlock
              quote="We are building an ecosystem where young women lead — in the field, in the market and in their communities."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoFrame
              src="/images/impact-field.svg"
              alt="Thriving farmland managed through sustainable agriculture"
              aspect="landscape"
              sizes="(min-width: 1024px) 40vw, 100vw"
              rounded="rounded-[1.8rem]"
              className="shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      <PartnersStrip />

      <div className="pt-10">
        <CtaBanner
          title="Help us grow what works."
          text="Verified results are only the beginning. Support programmes, or join as a measuring and learning partner, to keep the evidence strong."
          primaryLabel="Support our programmes"
          primaryHref="/get-involved#support"
          secondaryLabel="Partner with us"
          secondaryHref="/get-involved#research"
        />
      </div>
    </>
  );
}