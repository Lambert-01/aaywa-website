import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PILLARS } from "@/data/pillars";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function PillarsSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-aaywa">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-earth">
              Our Work
            </p>
            <h2 className="mt-3 font-serif text-balance text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight text-forest">
              Six pillars. One movement.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="shrink-0">
            <CTAButton href="/our-work" variant="outline-dark" withArrow>
              View all work
            </CTAButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.id} delay={(index % 3) * 0.06}>
                <Link
                  href={`/our-work#${pillar.id}`}
                  className="group flex h-full flex-col gap-4 rounded-[8px] border border-forest/10 bg-white p-6 transition-all duration-300 hover:border-leaf/30 hover:shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl leading-none text-gold/60">
                      {pillar.index}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-sage text-leaf">
                      <Icon size={18} aria-hidden />
                    </span>
                  </div>
                  <h3 className="font-serif text-lg leading-snug tracking-tight text-forest">
                    {pillar.title}
                  </h3>
                  <p className="flex-1 text-sm leading-6 text-forest/65">
                    {pillar.short}
                  </p>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-leaf transition-colors group-hover:text-forest">
                    Learn more
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
