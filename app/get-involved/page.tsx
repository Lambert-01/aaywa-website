import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INVOLVE_PATHS, PARTNER_TYPES } from "@/data/getInvolved";
import { JOURNEY } from "@/data/journey";
import PageHero from "@/components/ui/PageHero";
import JourneyTimeline from "@/components/ui/JourneyTimeline";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";
import NewsletterForm from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join AAYWA as a young woman farmer, become a mentor, partner with AAYWA, support our programmes, become a market partner or collaborate on research.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="A place for every kind of believer in women-led change."
        text="AAYWA grows through people — farmers, mentors, partners, funders, buyers and researchers. Find your place in the ecosystem."
        image="/images/hero-primary.jpg"
        imageAlt="Young women working in agriculture"
        crumbs={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-aaywa space-y-6">
          {INVOLVE_PATHS.map((path) => (
            <Reveal key={path.id}>
              <article
                id={path.id}
                className="group relative grid scroll-mt-28 gap-6 overflow-hidden rounded-[1.6rem] border border-forest/10 bg-white p-7 transition-all duration-300 hover:border-leaf/30 hover:shadow-soft sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:p-8"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream text-earth transition-colors duration-300 group-hover:bg-forest group-hover:text-gold">
                  <path.icon size={24} aria-hidden />
                </span>
                <div>
                  <h2 className="font-serif text-2xl tracking-tight text-forest">{path.title}</h2>
                  <p className="mt-1.5 max-w-2xl text-pretty text-sm leading-6 text-forest/65">
                    {path.description}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-forest/15 px-5 py-3 text-sm font-bold text-forest transition-all duration-300 hover:border-gold hover:bg-gold sm:self-center"
                >
                  {path.cta}
                  <ArrowUpRight size={15} aria-hidden />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="partner" className="scroll-mt-28 pb-20 sm:pb-24">
        <div className="container-aaywa">
          <Reveal>
            <div className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.22em] text-earth">
              Who we partner with
            </div>
            <h2 className="mt-4 font-serif text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.12] tracking-tight text-forest">
              Strong ecosystems grow strong enterprises.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty leading-8 text-forest/70">
              AAYWA seeks partners who bring capital, markets, knowledge, technology
              and policy influence alongside women-led agribusiness.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {PARTNER_TYPES.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-forest/15 bg-white px-4 py-2 text-xs font-bold text-forest/75"
                >
                  {type}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-[1.8rem] bg-cream p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
                <h3 className="font-serif text-2xl tracking-tight text-forest">
                  The journey we walk together
                </h3>
                <p className="max-w-md text-sm leading-6 text-forest/65">
                  Partners join AAYWA&apos;s supported pathway from discovery to
                  leadership.
                </p>
              </div>
              <div className="mt-8">
                <JourneyTimeline steps={JOURNEY} tone="light" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-aaywa">
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] bg-forest p-8 text-cream sm:p-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                  Follow AAYWA&apos;s opportunities.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-cream/70">
                  Calls for young women farmers, mentors, partners and market links
                  will be announced here first.
                </p>
              </div>
              <div>
                <NewsletterForm tone="light" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Questions about getting involved?"
        text="If your role in women-led agribusiness is not listed here, get in touch — the chance is that it belongs in AAYWA's ecosystem."
        primaryLabel="Contact AAYWA"
        primaryHref="/contact"
      />
    </>
  );
}