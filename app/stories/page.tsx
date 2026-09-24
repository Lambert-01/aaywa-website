import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { getPublishedStories } from "@/data/stories";
import PageHero from "@/components/ui/PageHero";
import StoryCard from "@/components/ui/StoryCard";
import Scene from "@/components/ui/Scene";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Stories of Change",
  description:
    "Stories of young African women transforming their lives and communities through agribusiness — shared in their own words, with their consent and verified by AAYWA.",
};

const STORY_PROMISES = [
  {
    title: "Her own voice",
    text: "Each story is told from the woman's own perspective, in language she recognizes and approves.",
  },
  {
    title: "Full consent",
    text: "Nothing is shared without the woman's informed, revisable consent — and she reviews every word before publication.",
  },
  {
    title: "Verified facts",
    text: "Names, programmes and outcomes are confirmed with the woman and with AAYWA programme records.",
  },
];

export default function StoriesPage() {
  const published = getPublishedStories();

  return (
    <>
      <PageHero
        eyebrow="Stories of change"
        title="Stories will be told in their own voices."
        text="AAYWA publishes stories only with the informed consent of the women whose journeys they represent. Verified stories will appear here as programmes grow."
        scene="sunrise"
        crumbs={[{ label: "Home", href: "/" }, { label: "Stories" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-aaywa">
          {published.length > 0 ? (
            <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {published.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          ) : (
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
              <Reveal>
                <Scene
                  variant="soil"
                  aspect="portrait"
                  rounded="rounded-[1.8rem] sm:rounded-[2.2rem]"
                  className="w-full shadow-soft"
                  label="Soil, seedling and open ground — the respectful beginning of every story"
                  caption="Their stories come first — patient, truthful and personal."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <p className="font-serif text-balance text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.2] tracking-tight text-forest">
                  We won&apos;t invent heroes for a beautiful website. The women
                  AAYWA walks alongside will speak for themselves.
                </p>
                <p className="mt-5 leading-8 text-forest/70">
                  Real stories take time. They are collected directly, checked with
                  the woman and her programme, and published only once she has
                  reviewed every word. First validated stories are on their way and
                  will appear on this page.
                </p>

                <ul className="mt-10 space-y-5">
                  {STORY_PROMISES.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sage text-leaf">
                        <ShieldCheck size={17} aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-bold text-forest">{item.title}</h3>
                        <p className="mt-0.5 text-sm leading-6 text-forest/65">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-[1.4rem] border border-dashed border-forest/20 bg-white p-6">
                  <p className="text-sm leading-6 text-forest/70">
                    <span className="font-bold text-forest">Stories are on their way.</span>{" "}
                    If you are a young woman agripreneur whose journey has been
                    shaped by AAYWA, we would be honoured to tell it on your terms.
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-leaf transition-colors hover:text-forest"
                  >
                    Share your story
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Your story is part of this movement."
        text="If you are a young woman agripreneur, mentor or partner with a story shaped by AAYWA, we would love to hear from you."
        primaryLabel="Share your story"
        primaryHref="/contact"
        secondaryLabel="Get involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}