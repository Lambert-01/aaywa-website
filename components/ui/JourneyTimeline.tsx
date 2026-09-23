"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Handshake,
  Leaf,
  Lightbulb,
  Sprout,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type JourneyTimelineStep = {
  title: string;
  text: string;
  icon: string;
};

type JourneyTimelineProps = {
  steps: JourneyTimelineStep[];
  tone?: "dark" | "light";
};

const ICONS: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  learn: GraduationCap,
  sprout: Sprout,
  build: Building2,
  markets: Handshake,
  grow: TrendingUp,
  lead: Leaf,
};

const colors = ["bg-gold", "bg-leaf", "bg-moss", "bg-earth", "bg-gold", "bg-leaf", "bg-moss"];

export default function JourneyTimeline({ steps, tone = "light" }: JourneyTimelineProps) {
  const reduced = useReducedMotion();
  const light = tone === "light";

  return (
    <div className="relative">
      {/* Horizontal — desktop */}
      <ol className="hidden w-full lg:flex" aria-label="AAYWA journey">
        {steps.map((step, index) => {
          const Icon = ICONS[step.icon] ?? Leaf;
          return (
            <motion.li
              key={step.title}
              className="relative min-w-0 flex-1 px-3"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            >
              <div className="relative h-16">
                <div className="absolute inset-x-0 top-7 h-0.5 bg-current opacity-10" aria-hidden />
                <div className="absolute inset-x-0 top-7 flex justify-center">
                  <span
                    className={cn(
                      "relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 bg-paper",
                      colors[index]
                    )}
                  >
                    <Icon size={19} className={index === 0 ? "text-forest" : "text-white"} aria-hidden />
                  </span>
                </div>
              </div>
              <div className={cn("mt-5 text-center", index === 0 && "text-left sm:text-center")}>
                <div className={cn("text-[11px] font-bold uppercase tracking-[0.16em]", light ? "text-earth" : "text-gold")}>
                  Step {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-serif text-lg text-forest">{step.title}</h3>
                <p className="mx-auto mt-2 text-sm leading-6 opacity-60">{step.text}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      {/* Vertical — mobile / tablet */}
      <ol className="lg:hidden" aria-label="AAYWA journey">
        {steps.map((step, index) => {
          const Icon = ICONS[step.icon] ?? Leaf;
          return (
            <motion.li
              key={step.title}
              className="relative flex gap-5 pb-10 last:pb-0"
              initial={reduced ? false : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
            >
              {index < steps.length - 1 && (
                <span className="absolute top-14 left-6 h-[calc(100%-3rem)] w-px bg-current opacity-10" aria-hidden />
              )}
              <span
                className={cn(
                  "relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 bg-paper",
                  colors[index]
                )}
              >
                <Icon size={19} className={index === 0 ? "text-forest" : "text-white"} aria-hidden />
              </span>
              <div className="pt-1">
                <div className={cn("text-[11px] font-bold uppercase tracking-[0.16em]", light ? "text-earth" : "text-gold")}>
                  Step {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1.5 font-serif text-xl text-forest">{step.title}</h3>
                <p className={cn("mt-2 max-w-sm text-sm leading-6", light ? "text-forest/65" : "text-white/70")}>
                  {step.text}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}