import type { Metadata } from "next";
import { Globe2, LineChart, TreePalm, type LucideIcon } from "lucide-react";
import { IMPACT_CATEGORIES, MEASURES } from "@/data/impact";
import PageHero from "@/components/ui/PageHero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Scene from "@/components/ui/Scene";
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
        scene="terraces"
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
          <Reveal>
            <h2 className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.24em] text-gold">
              What we measure
            </h2>
            <p className="mt-4 max-w-2xl font-serif text-balance text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.12] tracking-tight">
              The dimensions that hold AAYWA accountable.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-cream/70">
              These are the areas where change must be visible. Results are
              prepared and updated as programmes operate, data is verified and
              figures are approved for public release. Numbers are never
              estimated.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-12">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MEASURES.map((measure, index) => (
                <div
                  key={measure.id}
                  className="h-full rounded-[1.4rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="font-serif text-xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-bold leading-snug text-cream">{measure.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/65">{measure.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
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
            <Scene
              variant="fields"
              aspect="landscape"
              rounded="rounded-[1.8rem]"
              className="w-full shadow-soft"
              label="Cultivated fields — the ground on which impact is measured"
              overlay={
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-forest/60 to-transparent px-5 pb-4 pt-14">
                  <p className="text-sm font-semibold text-cream">
                    Quantitative results are published only after programme data has
                    been verified and approved for public release.
                  </p>
                </div>
              }
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