import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import PhotoFrame from "@/components/ui/PhotoFrame";
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
              title="The women behind the movement."
              text="Our work is only credible if the women at its centre are seen and heard. Their stories come first — in their own words, with their consent."
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
            <PhotoFrame
              src="/images/stories-3.jpg"
              alt="A young African woman in an agricultural setting"
              aspect="portrait"
              sizes="(min-width: 1024px) 46vw, 100vw"
              rounded="rounded-[1.8rem] sm:rounded-[2.2rem]"
              className="h-full min-h-[22rem] w-full shadow-soft"
              overlay={
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/70 to-transparent px-6 pb-5 pt-16">
                  <p className="text-sm font-medium text-cream">
                    Real change begins with real stories — patient, truthful and personal.
                  </p>
                </div>
              }
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

            <div className="mt-10 rounded-[1.4rem] border border-dashed border-forest/20 bg-white p-6">
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