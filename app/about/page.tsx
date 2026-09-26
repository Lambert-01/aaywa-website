import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
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
        title="An African organization growing young women leaders through agribusiness."
        text="We believe young African women are not simply part of agriculture — they can shape its future."
        scene="terraces"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Our Story */}
      <section className="py-20 sm:py-24">
        <div className="container-aaywa grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-earth">
              Who we are
            </p>
            <h2 className="mt-4 font-serif text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.12] tracking-tight text-forest">
              Women-led. Africa-rooted. Enterprise-focused.
            </h2>
            <p className="mt-5 text-pretty leading-8 text-forest/70">
              AAYWA is an African NGO empowering young women to move beyond
              subsistence farming into profitable, sustainable and resilient
              agribusiness — as entrepreneurs, innovators and decision-makers.
            </p>
            <p className="mt-4 text-pretty leading-8 text-forest/70">
              We walk alongside young women from their first step in agriculture to
              leading enterprises that transform their communities and food
              systems.
            </p>
            <div className="mt-8">
              <QuoteBlock
                quote="Where young women grow, communities flourish."
                source="The idea at the heart of AAYWA"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[10px] shadow-soft">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/aaywa-young-women.jpg"
                  alt="AAYWA young women — a community united by shared purpose and agricultural ambition"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-aaywa">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-earth">
              Vision &amp; Mission
            </p>
          </Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <Reveal delay={0.06}>
              <div className="h-full rounded-[8px] border-l-4 border-gold bg-white px-8 py-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                  Vision
                </p>
                <p className="mt-4 font-serif text-xl leading-relaxed text-forest">
                  Transforming the lives of young African women from subsistence
                  farming to sustainable agribusiness.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-[8px] bg-forest px-8 py-8 text-cream">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                  Mission
                </p>
                <p className="mt-4 leading-7 text-cream/85">
                  Empowering young African women to build profitable, sustainable
                  agribusinesses through training, finance, innovation, global
                  markets and ethical value chains — while developing leaders who
                  create lasting change.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <ValuesSection />

      {/* Sisterhood */}
      <section className="py-20 sm:py-24">
        <div className="container-aaywa">
          <Reveal>
            <div className="relative overflow-hidden rounded-[10px] shadow-soft">
              <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
                <Image
                  src="/images/sisterhood.jpg"
                  alt="AAYWA members gathered — a community of young women growing through shared strength"
                  fill
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/10 to-transparent"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-earth">
              Sisterhood
            </p>
            <h2 className="mt-4 font-serif text-balance text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight text-forest">
              Growth is stronger when it is shared.
            </h2>
            <p className="mt-5 text-pretty leading-8 text-forest/70">
              AAYWA is more than a programme — it is a community of young women
              who learn together, challenge each other and celebrate every step
              forward. Peer support, shared knowledge and collective confidence
              are at the heart of everything we do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Who We Serve */}
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
