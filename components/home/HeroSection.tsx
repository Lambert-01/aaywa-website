"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Leaf } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { Sprig } from "@/components/ui/Botanical";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden text-cream">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(215,169,75,0.20),transparent_34%),radial-gradient(circle_at_82%_28%,rgba(47,107,73,0.35),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(22,61,43,0.6),transparent_55%),linear-gradient(140deg,#163D2B,#1E5238_58%,#163D2B)]"
      />
      <div className="grain-layer" aria-hidden />
      <Sprig className="pointer-events-none absolute right-2 top-24 hidden h-72 w-72 rotate-12 text-cream/10 md:block" />
      <Sprig className="pointer-events-none absolute bottom-16 left-4 hidden h-44 w-44 -rotate-45 text-gold/15 xl:block" />
      <div className="pointer-events-none absolute -bottom-32 -right-28 h-96 w-96 animate-spin-slow rounded-full border border-cream/10 [mask-image:linear-gradient(transparent,black)]" aria-hidden />
      <div className="pointer-events-none absolute -top-24 right-1/3 hidden h-64 w-64 animate-[spin-slow_38s_linear_infinite] rounded-full border border-gold/15 [mask-image:linear-gradient(transparent,black)] lg:block" aria-hidden />

      <div className="container-aaywa relative grid items-center gap-14 pb-20 pt-32 sm:pt-36 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:pb-28 lg:pt-40">
        <motion.div
          initial={reduced ? false : "hidden"}
          animate="visible"
          variants={container}
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-cream/20 bg-cream/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm"
          >
            <Leaf size={13} className="text-gold" aria-hidden />
            Women · Agriculture · Opportunity
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-serif text-balance text-[clamp(2.7rem,7vw,5.2rem)] leading-[1.02] tracking-tight"
          >
            Growing women.
            <br />
            Growing agribusiness.
            <br />
            <em className="italic text-gold">Transforming communities.</em>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-pretty text-lg leading-8 text-cream/75">
            AAYWA empowers young African women to build profitable, sustainable and
            resilient agribusinesses through knowledge, innovation, leadership and
            access to opportunity.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <CTAButton href="/our-work" variant="primary" size="lg">
              Explore Our Work
            </CTAButton>
            <CTAButton href="/get-involved" variant="outline-light" size="lg">
              Join AAYWA
            </CTAButton>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 flex items-center gap-3 text-sm font-medium text-cream/55"
          >
            <span className="h-px w-12 bg-gold/60" aria-hidden />
            From subsistence farming to sustainable agribusiness.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            <PhotoFrame
              src="/images/hero-primary.jpg"
              alt="Young African woman farmer leading in the field"
              aspect="portrait"
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              rounded="rounded-[2rem] sm:rounded-[2.4rem]"
              className="w-full shadow-lifted"
              overlay={
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-forest/60 via-forest/10 to-transparent px-6 pb-5 pt-16">
                  <p className="text-sm font-semibold text-cream">
                    Young women leading African agriculture
                  </p>
                </div>
              }
            />

            <motion.div
              initial={reduced ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -right-2 -top-4 sm:right-0"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-gold/30 bg-forest/90 px-4 py-3 shadow-glow backdrop-blur-sm">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-forest">
                  <Leaf size={17} aria-hidden />
                </span>
                <div className="text-[11px] leading-tight">
                  <div className="font-bold text-cream">Sustainable</div>
                  <div className="text-cream/60">agribusiness</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}