import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutPreview from "@/components/home/AboutPreview";
import ValuesSection from "@/components/home/ValuesSection";
import TeamSection from "@/components/home/TeamSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import CtaBanner from "@/components/ui/CtaBanner";
import Reveal from "@/components/ui/Reveal";
import QuoteBlock from "@/components/ui/QuoteBlock";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AAYWA is an African NGO empowering young African women to build sustainable and profitable agribusinesses through training, innovation, leadership, finance and market access.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AAYWA"
        title="An African organization growing women leaders through agribusiness."
        text="We believe young African women are not simply part of agriculture — they can shape its future."
        variant="cream"
        image="/images/work-markets.jpg"
        imageAlt="Produce from a women-led agribusiness ready for market"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-aaywa">
          <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
            <Reveal>
              <div className="pr-0 lg:pr-8">
                <div className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.22em] text-earth">
                  Who we are
                </div>
                <h2 className="mt-4 font-serif text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.12] tracking-tight text-forest">
                  Women-led. Africa-rooted. Enterprise-focused.
                </h2>
                <p className="mt-5 text-pretty leading-8 text-forest/70">
                  AAYWA is an African NGO empowering young women to move beyond
                  subsistence farming into profitable, sustainable and resilient
                  agribusiness — as entrepreneurs, innovators and decision-makers.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:self-stretch">
              <div className="relative h-full" aria-hidden>
                <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-gold to-transparent lg:left-0" />
                <div className="absolute left-8 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold lg:left-0" />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <QuoteBlock
                quote="Where women grow, communities flourish."
                source="The idea at the heart of AAYWA"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <AboutPreview />

      <ValuesSection />

      <TeamSection />

      <div id="who-we-serve">
        <WhoWeServeSection />
      </div>

      <section className="pt-10">
        <CtaBanner
          title="Ready to grow with AAYWA?"
          text="Whether you are a young woman farmer ready to start a journey, or an organization that believes in women-led agricultural transformation — there is a place for you here."
          primaryLabel="Get involved"
          primaryHref="/get-involved"
          secondaryLabel="Contact us"
          secondaryHref="/contact"
        />
      </section>
    </>
  );
}