import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PILLARS, SCENE_LABELS } from "@/data/pillars";
import CTAButton from "@/components/ui/CTAButton";
import Scene from "@/components/ui/Scene";
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
              title="Six journeys. One movement."
              text="Each pillar carries a young woman further along the road to enterprise — learning, producing, selling and leading."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <CTAButton href="/our-work" variant="outline-dark" withArrow>
              View all work
            </CTAButton>
          </Reveal>
        </div>

        <div className="mt-16 space-y-12 lg:mt-20 lg:space-y-16">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={pillar.id}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"
              >
                <Reveal y={28} className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <Scene
                    variant={pillar.scene}
                    label={SCENE_LABELS[pillar.scene]}
                    aspect="landscape"
                    rounded="rounded-[1.8rem] sm:rounded-[2rem]"
                    className="shadow-soft"
                  />
                </Reveal>

                <Reveal
                  delay={0.08}
                  className={imageFirst ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-serif text-5xl leading-none text-gold/70 sm:text-6xl" aria-hidden>
                      {pillar.index}
                    </span>
                    <div>
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-sage text-leaf">
                        <Icon size={20} aria-hidden />
                      </span>
                      <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-forest sm:text-3xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 max-w-xl leading-7 text-forest/70">{pillar.short}</p>
                      <Link
                        href={`/our-work#${pillar.id}`}
                        className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-leaf transition-colors hover:text-forest"
                      >
                        Explore this pillar
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                          aria-hidden
                        />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}