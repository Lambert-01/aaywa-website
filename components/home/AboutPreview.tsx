"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-aaywa grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[10px] shadow-soft">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/woman-planting-field.jpg"
                alt="A young woman tending her farm — the heart of AAYWA's work"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-earth">
              About AAYWA
            </p>
            <h2 className="mt-4 font-serif text-balance text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight text-forest">
              Where young women grow,
              <br />
              communities flourish.
            </h2>
            <p className="mt-6 max-w-readable text-pretty leading-8 text-forest/70">
              AAYWA is an African NGO equipping young women to move beyond
              subsistence farming into profitable, sustainable agribusiness —
              giving them ownership, knowledge, leadership and a place in the
              global economy.
            </p>
            <p className="mt-4 max-w-readable text-pretty leading-8 text-forest/70">
              We walk alongside young women from their first step in agriculture to
              leading enterprises that transform their communities.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <CTAButton href="/about" variant="forest" size="lg" withArrow>
              Discover AAYWA
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
