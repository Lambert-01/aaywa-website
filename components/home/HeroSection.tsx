"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#0A2418] text-cream sm:min-h-[90vh] sm:items-center lg:min-h-screen">
      {/* Real photograph */}
      <Image
        src="/images/woman-planting-field.jpg"
        alt="A young woman tending her farm — the spirit of AAYWA"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_20%] sm:object-[55%_25%] lg:object-[50%_30%]"
      />

      {/* Dark green gradient — left-heavy on desktop so text is readable, bottom-heavy on mobile */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,30,20,0.92) 0%, rgba(10,36,24,0.80) 38%, rgba(10,36,24,0.30) 65%, rgba(8,30,20,0.18) 100%)",
        }}
      />
      {/* Extra bottom fade for mobile readability */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#081E14]/95 via-[#081E14]/60 to-transparent sm:h-[40%] sm:from-[#081E14]/80"
      />
      {/* Subtle top fade for navbar */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#081E14]/60 to-transparent"
      />

      <div className="grain-layer" aria-hidden />

      <motion.div
        initial={reduced ? false : "hidden"}
        animate="visible"
        variants={container}
        className="container-aaywa relative z-10 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-cream/80"
        >
          <span className="h-px w-10 bg-gold/70" aria-hidden />
          AAYWA · Young Women · Agriculture · Leadership
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-2xl font-serif text-balance text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.04] tracking-tight"
        >
          Growing young women.
          <br />
          Growing agribusiness.
          <br />
          <em className="text-gold">Transforming communities.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-pretty text-base leading-8 text-cream/75 sm:text-lg"
        >
          AAYWA equips young African women to build sustainable enterprises,
          strengthen their leadership and create opportunity through agriculture.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <CTAButton href="/our-work" variant="primary" size="lg" withArrow>
            Explore Our Work
          </CTAButton>
          <CTAButton href="/about" variant="outline-light" size="lg">
            About AAYWA
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
