import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PILLARS } from "@/data/pillars";
import CTAButton from "@/components/ui/CTAButton";
import PillarCard from "@/components/ui/PillarCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PillarsSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-aaywa">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Our work"
              title="Six pillars. One journey to enterprise."
              text="AAYWA works across the full journey of women-led agribusiness development — from the first seed of knowledge to leadership in global markets."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <CTAButton href="/our-work" variant="outline-dark" withArrow>
              View all work
            </CTAButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.id} delay={(index % 3) * 0.08}>
              <PillarCard
                index={pillar.index}
                title={pillar.title}
                short={pillar.short}
                icon={pillar.icon}
                href={`/our-work#${pillar.id}`}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-col items-start gap-5 rounded-[1.8rem] border border-forest/10 bg-white px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <p className="max-w-2xl text-pretty text-[0.98rem] leading-7 text-forest/70">
              Every programme links knowledge, production, enterprise and markets —
              so that young women move forward, not just around in circles.
            </p>
            <Link
              href="/our-work"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-leaf transition-colors hover:text-forest"
            >
              Meet the pillars
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}