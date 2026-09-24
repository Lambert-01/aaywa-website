"use client";

import { useState } from "react";
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
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#0F311F] text-cream sm:min-h-[680px] lg:min-h-[720px]">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(215,169,75,0.16), transparent 38%), linear-gradient(180deg, rgba(10,40,26,0.35) 0%, rgba(14,47,31,0.18) 46%, rgba(9,34,22,0.62) 100%)",
        }}
      />
      <div className="grain-layer" aria-hidden />

      <MoodHills className={imgFailed ? "block" : "hidden"} />

      {!imgFailed && (
        <Image
          src="/images/aaywa-hills.jpg"
          alt="Rolling green hills of Rwanda under an expansive sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ backgroundPosition: "center" }}
          onError={() => setImgFailed(true)}
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,35,23,0.90) 0%, rgba(12,49,32,0.78) 42%, rgba(12,49,32,0.40) 72%, rgba(8,35,23,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0E2C1D] to-transparent"
      />

      <motion.div
        initial={reduced ? false : "hidden"}
        animate="visible"
        variants={container}
        className="container-aaywa relative z-10 pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-44"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-cream/85"
        >
          <span className="h-px w-10 bg-gold/80" aria-hidden />
          AAYWA · Women · Agriculture · Leadership
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-7 max-w-4xl font-serif text-balance text-[clamp(2.8rem,7vw,5.4rem)] leading-[1.02] tracking-tight"
        >
          Growing women.
          <br />
          Growing agribusiness.
          <br />
          <em className="text-gold">Transforming communities.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-cream/80"
        >
          AAYWA empowers young African women to build profitable, sustainable and
          resilient agribusinesses through knowledge, innovation, leadership and
          access to opportunity.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <CTAButton href="/our-work" variant="primary" size="lg" withArrow>
            Explore Our Work
          </CTAButton>
          <CTAButton href="/about" variant="outline-light" size="lg">
            About AAYWA
          </CTAButton>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-12 flex items-center gap-3 text-sm font-medium text-cream/55"
        >
          <span className="h-px w-12 bg-gold/60" aria-hidden />
          From subsistence farming to sustainable agribusiness.
        </motion.p>
      </motion.div>
    </section>
  );
}

function MoodHills({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
      aria-hidden
     
    >
      <path d="M0,300 C140,250 300,265 430,215 C560,168 680,205 800,150 L800,600 L0,600 Z" fill="rgba(93,138,90,0.28)" />
      <path d="M0,420 C170,360 340,390 520,320 C640,276 720,318 800,292 L800,600 L0,600 Z" fill="rgba(47,107,73,0.5)" />
      <path d="M0,540 C160,478 340,505 520,448 C640,412 720,452 800,424 L800,600 L0,600 Z" fill="rgba(22,61,43,0.72)" />
      <g stroke="rgba(247,243,232,0.22)" strokeWidth="2" fill="none">
        <path d="M0,500 C160,452 340,477 520,426" />
        <path d="M0,530 C160,484 340,509 520,460" />
        <path d="M20,560 C180,516 360,541 540,494" />
      </g>
    </svg>
  );
}