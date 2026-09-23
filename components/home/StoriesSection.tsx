import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Story } from "@/data/stories";
import StoryCard from "@/components/ui/StoryCard";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const PLACEHOLDER_STORIES: Story[] = [
  {
    slug: "placeholder-1",
    status: "draft",
    program: "Agribusiness Development",
    headline: "From the field to the market",
    excerpt:
      "This space will feature a verified, consent-based story of a young African woman's journey from subsistence farming to running her own agribusiness.",
    image: "/images/stories-1.svg",
  },
  {
    slug: "placeholder-2",
    status: "draft",
    program: "Leadership & Mentorship",
    headline: "Leading beyond the farm gate",
    excerpt:
      "A profile of a young woman growing into a leader — organizing peers, influencing decisions and creating opportunity in her community.",
    image: "/images/stories-2.svg",
  },
  {
    slug: "placeholder-3",
    status: "draft",
    program: "Sustainable Agriculture",
    headline: "Farming with the land",
    excerpt:
      "A story of regenerative farming: restoring soil, weathering uncertain seasons and building a resilient, climate-smart enterprise.",
    image: "/images/stories-3.svg",
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
              title="Women leading. Journeys unfolding."
              text="The heart of AAYWA is human: young women stepping into ownership, leadership and enterprise."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <CTAButton href="/stories" variant="outline-dark" withArrow>
              All stories
            </CTAButton>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-4">
          <Reveal className="lg:col-span-2">
            <StoryCard story={PLACEHOLDER_STORIES[0]} featured />
          </Reveal>
          <Reveal delay={0.08}>
            <StoryCard story={PLACEHOLDER_STORIES[1]} />
          </Reveal>
          <Reveal delay={0.16}>
            <Link
              href="/stories"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.6rem] border border-forest/10 bg-forest p-7 text-cream transition-all duration-500 hover:shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold">
                <BookOpen size={20} aria-hidden />
              </span>
              <div className="mt-8">
                <h3 className="font-serif text-2xl leading-snug tracking-tight">
                  Stories are verified before they are shared.
                </h3>
                <p className="mt-3 text-sm leading-6 text-cream/65">
                  Every story published by AAYWA is shared with the full consent of
                  the woman it belongs to.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold">
                  Visit Stories
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <p className="text-sm text-forest/55">
            These cards are layout placeholders. Authentic beneficiary stories will
            appear here as they are collected, verified and approved for publication.
          </p>
        </Reveal>
      </div>
    </section>
  );
}