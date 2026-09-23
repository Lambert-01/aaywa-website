import { Globe2, LineChart, TreePalm, type LucideIcon } from "lucide-react";
import { IMPACT_CATEGORIES, MEASURES } from "@/data/impact";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  social: LineChart,
  economic: Globe2,
  environmental: TreePalm,
};

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(47,107,73,0.35), transparent 40%), radial-gradient(circle at 10% 90%, rgba(215,169,75,0.16), transparent 45%)",
        }}
      />
      <div className="grain-layer" aria-hidden />

      <div className="container-aaywa relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our impact"
            title="Strong women. Stronger farms. Stronger communities."
            text="AAYWA measures success through the social, economic and environmental change created around women-led agribusiness."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {IMPACT_CATEGORIES.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id];
            return (
              <Reveal key={category.id} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:border-gold/40 hover:bg-white/10">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold">
                    <Icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl tracking-tight text-cream">{category.title}</h3>
                  <p className="mt-3 leading-7 text-cream/70">{category.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEASURES.map((measure, index) => (
              <Reveal key={measure.id} delay={(index % 3) * 0.06}>
                <div className="h-full rounded-[1.4rem] border border-white/10 bg-white/5 p-6">
                  <div className="font-serif text-xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="mt-3 font-bold leading-snug text-cream">{measure.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-cream/65">{measure.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-cream/50">
            This framework is what AAYWA is accountable for. Numbers are published
            only from verified programme data — never estimated.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          <Reveal>
            <QuoteBlock
              tone="light"
              quote="We are building more than enterprises. We are building an ecosystem where young women lead — in the field, in the market and in their communities."
            />
          </Reveal>
          <Reveal delay={0.1} className="hidden lg:block">
            <div className="flex items-center gap-4 opacity-70">
              <div className="h-px flex-1 bg-gold/40" aria-hidden />
              <TreePalm size={18} className="text-gold" aria-hidden />
              <div className="h-px flex-1 bg-gold/40" aria-hidden />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}