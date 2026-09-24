import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Scene from "@/components/ui/Scene";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const STORY_PROMISES = [
  {
    title: "Her own voice",
    text: "Stories are told from the woman&apos;s own perspective, in words she recognizes.",
  },
  {
    title: "Full consent",
    text: "Nothing is published without the woman&apos;s informed, revisable consent.",
  },
  {
    title: "Verified, not embellished",
    text: "Facts are confirmed with the woman and the programme she took part in.",
  },
];

export default function StoriesSection() {
  return (
    <section className="soft-grid py-24 sm:py-28">
      <div className="container-aaywa">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Stories of change"
              title="Stories will be told in their own voices."
              text="AAYWA publishes stories only with the informed consent of the women whose journeys they represent. Verified stories will appear here as programmes grow."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <CTAButton href="/stories" variant="outline-dark" withArrow>
              Read the stories
            </CTAButton>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Scene
              variant="soil"
              aspect="portrait"
              rounded="rounded-[1.8rem] sm:rounded-[2.2rem]"
              className="h-full min-h-[22rem] w-full shadow-soft"
              label="Soil and a growing seedling — the patient beginning of every story"
              caption="Real change begins with real stories — patient, truthful and personal."
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="font-serif text-2xl leading-relaxed tracking-tight text-forest sm:text-[1.7rem]">
              We won&apos;t invent heroes. The women AAYWA walks alongside will
              speak for themselves — and we will make sure the world listens.
            </p>

            <ul className="mt-10 space-y-5">
              {STORY_PROMISES.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  <div>
                    <h3 className="font-bold text-forest">{item.title}</h3>
                    <p className="mt-0.5 text-sm leading-6 text-forest/65">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-2 border-gold bg-white px-6 py-5">
              <p className="text-sm leading-6 text-forest/70">
                <span className="font-bold text-forest">Stories are on their way —</span>{" "}
                collected directly, verified and published only with each
                woman&apos;s review and consent. The first validated stories will
                appear here.
              </p>
              <Link
                href="/stories"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-leaf transition-colors hover:text-forest"
              >
                Follow the Stories page
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}