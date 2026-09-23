import { ArrowRight } from "lucide-react";
import { CHALLENGES, PATHWAY } from "@/data/challenge";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const PATHWAY_TEXT: Record<string, string> = {
  Barrier: "Obstacles become opportunities",
  Knowledge: "Skills and confidence grow",
  Production: "Climate-smart farming takes root",
  Enterprise: "Farms become businesses",
  Markets: "Products reach real buyers",
  Leadership: "Women lead lasting change",
};

export default function ChallengeSection() {
  return (
    <section className="overflow-hidden bg-cream py-24 sm:py-28">
      <div className="container-aaywa">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="The challenge"
              title="Turning barriers into pathways."
            />
            <p className="mt-6 max-w-readable text-pretty leading-8 text-forest/70">
              Young women across Africa hold enormous potential in agriculture. Yet
              systems — not ability — often stand between them and sustainable
              enterprise: capital, markets, training, technology, climate and
              representation. AAYWA exists to turn those barriers into pathways.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2" aria-label="Barriers AAYWA works to overcome">
              {CHALLENGES.map(({ barrier, pathway, icon: Icon }) => (
                <li
                  key={barrier}
                  className="group rounded-2xl border border-forest/10 bg-white/70 p-4 transition-all duration-300 hover:border-gold/50 hover:bg-white hover:shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sage text-leaf">
                      <Icon size={17} aria-hidden />
                    </span>
                    <span className="text-sm font-bold text-forest">{barrier}</span>
                  </div>
                  <p className="mt-2.5 flex items-center gap-1.5 pl-12 text-xs font-medium text-earth">
                    <ArrowRight size={12} className="rotate-90 text-gold" aria-hidden />
                    {pathway}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-20" y={40}>
          <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-12 text-cream sm:px-10 lg:px-14">
            <div className="grain-layer" aria-hidden />
            <div className="relative">
              <p className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.24em] text-gold">
                From barrier to leadership
              </p>

              <ol className="mt-10 hidden gap-2 lg:grid lg:grid-cols-6" aria-label="AAYWA transformation pathway">
                {PATHWAY.map((label, index) => (
                  <li key={label} className="relative flex flex-col">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/15 font-serif text-lg text-gold">
                        {index + 1}
                      </span>
                      {index < PATHWAY.length - 1 && (
                        <span className="relative h-0.5 flex-1 bg-gradient-to-r from-gold/50 to-cream/25">
                          <ArrowRight size={13} className="absolute -right-1 top-1/2 -translate-y-1/2 text-gold" aria-hidden />
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-serif text-lg leading-snug">{label}</h3>
                    <p className="mt-1.5 pr-2 text-xs leading-5 text-cream/60">{PATHWAY_TEXT[label]}</p>
                  </li>
                ))}
              </ol>

              <ol className="mt-8 space-y-0 lg:hidden" aria-label="AAYWA transformation pathway">
                {PATHWAY.map((label, index) => (
                  <li key={label} className="relative flex gap-5 pb-8 last:pb-0">
                    {index < PATHWAY.length - 1 && (
                      <span className="absolute left-6 top-12 h-[calc(100%-2.5rem)] w-px bg-gold/30" aria-hidden />
                    )}
                    <span className="z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/15 font-serif text-lg text-gold">
                      {index + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-serif text-xl leading-snug">{label}</h3>
                      <p className="mt-1 text-sm leading-5 text-cream/60">{PATHWAY_TEXT[label]}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}