import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import QuoteBlock from "@/components/ui/QuoteBlock";
import CTAButton from "@/components/ui/CTAButton";

export default function AboutPreview() {
  return (
    <section className="soft-grid relative py-24 sm:py-28">
      <div className="container-aaywa grid items-center gap-16 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="relative z-10">
              <PhotoFrame
                src="/images/about-main.svg"
                alt="Woman agripreneur with fresh produce"
                aspect="portrait"
                sizes="(min-width: 1024px) 40vw, 90vw"
                rounded="rounded-[2rem] sm:rounded-[2.6rem]"
                className="w-full max-w-md shadow-soft"
              />
            </div>

            <div className="absolute -bottom-8 -right-2 z-20 w-[52%] sm:-right-6 sm:w-[46%]">
              <PhotoFrame
                src="/images/about-accent.svg"
                alt="Women working inside a greenhouse"
                aspect="landscape"
                sizes="(min-width: 1024px) 20vw, 45vw"
                rounded="rounded-[1.5rem] ring-[6px] ring-paper sm:rounded-[1.8rem]"
                className="shadow-lifted"
              />
            </div>

            <div className="absolute -left-3 -top-6 z-20 hidden items-center gap-2.5 rounded-full bg-white px-4 py-2.5 shadow-soft sm:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-forest">
                <Compass size={15} aria-hidden />
              </span>
              <span className="text-xs font-bold text-forest">Sisterhood · Leadership · Growth</span>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.22em] text-earth">
              About AAYWA
            </div>
            <h2 className="mt-4 font-serif text-balance text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.1] tracking-tight text-forest">
              Where women grow, communities flourish.
            </h2>
            <p className="mt-6 max-w-readable text-pretty leading-8 text-forest/70">
              AAYWA is an African NGO empowering young women to move beyond
              subsistence farming into profitable, sustainable agribusiness — giving
              them ownership, knowledge, leadership and a place in the global economy.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-forest/10 bg-white p-6 shadow-soft">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">Vision</div>
              <p className="mt-3 font-serif text-lg leading-snug text-forest">
                Transforming the lives of young African women from subsistence
                farming to sustainable agribusiness.
              </p>
            </div>
            <div className="rounded-[1.6rem] bg-forest p-6 text-cream shadow-soft">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">Mission</div>
              <p className="mt-3 text-sm leading-7 text-cream/80">
                Empowering young African women to build profitable, sustainable
                agribusinesses through training, finance, innovation, global markets
                and ethical value chains — while developing leaders who create
                lasting change.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-6">
            <CTAButton href="/about" variant="forest" size="lg" withArrow>
              Discover AAYWA
            </CTAButton>
            <Link
              href="/our-work"
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-leaf transition-colors hover:text-forest"
            >
              See how we work
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="container-aaywa mt-24 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <Reveal>
          <QuoteBlock
            quote="We do not measure transformation by training alone. We follow the journey from opportunity to enterprise, and from enterprise to leadership."
            source="A belief that shapes AAYWA"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <CTAButton href="/impact" variant="outline-dark" withArrow>
            Explore our impact story
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}