import type { Metadata } from "next";
import { getPublishedStories, type Story } from "@/data/stories";
import PageHero from "@/components/ui/PageHero";
import StoryCard from "@/components/ui/StoryCard";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Stories of Change",
  description:
    "Stories of young African women transforming their lives and communities through agribusiness — shared with their consent and verified by AAYWA.",
};

const PLACEHOLDER_STORIES: Story[] = [
  {
    slug: "ph-1",
    status: "draft",
    program: "Agribusiness Development",
    headline: "From the field to the market",
    excerpt:
      "This space is prepared for a verified, consent-based story of a young woman's journey from subsistence farming to running her own agribusiness.",
    image: "/images/stories-1.svg",
  },
  {
    slug: "ph-2",
    status: "draft",
    program: "Leadership & Mentorship",
    headline: "Leading beyond the farm gate",
    excerpt:
      "Prepared for a profile of a young woman growing into leadership — organizing peers, influencing decisions and creating opportunity.",
    image: "/images/stories-2.svg",
  },
  {
    slug: "ph-3",
    status: "draft",
    program: "Sustainable Agriculture",
    headline: "Farming with the land",
    excerpt:
      "Prepared for a story of regenerative farming — restoring soil, weathering seasons and building a resilient, climate-smart enterprise.",
    image: "/images/stories-3.svg",
  },
  {
    slug: "ph-4",
    status: "draft",
    program: "Market Access",
    headline: "Reaching real markets",
    excerpt:
      "Prepared for a story of a woman-led enterprise connecting to reliable buyers and growing through ethical value chains.",
    image: "/images/journey-woman.svg",
  },
  {
    slug: "ph-5",
    status: "draft",
    program: "Finance & Investment Readiness",
    headline: "Ready for investment",
    excerpt:
      "Prepared for a story of a young woman preparing her enterprise to attract finance and grow with confidence.",
    image: "/images/about-accent.svg",
  },
  {
    slug: "ph-6",
    status: "draft",
    program: "Innovation & Digital Agriculture",
    headline: "Farming with technology",
    excerpt:
      "Prepared for a story of a young woman innovator pairing indigenous knowledge with digital tools.",
    image: "/images/work-innovation.svg",
  },
];

export default function StoriesPage() {
  const published = getPublishedStories();

  return (
    <>
      <PageHero
        eyebrow="Stories of change"
        title="Journeys that change everything."
        text="The heart of AAYWA is human. Here we share the journeys of young African women building enterprises, leadership and lasting change."
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
            <>
              <div className="grid items-stretch gap-6 lg:grid-cols-3">
                {PLACEHOLDER_STORIES.map((story, index) => (
                  <Reveal key={story.slug} delay={(index % 3) * 0.07}>
                    <StoryCard story={story} />
                  </Reveal>
                ))}
              </div>
              <Reveal className="mt-10">
                <div className="rounded-[1.6rem] border border-dashed border-forest/20 bg-white/70 p-8 text-center">
                  <h2 className="font-serif text-2xl tracking-tight text-forest">
                    Stories are on their way.
                  </h2>
                  <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-6 text-forest/65">
                    AAYWA shares the stories of young women agripreneurs with care.
                    Each story is collected directly, verified, and published only
                    with the woman&apos;s full consent and review.
                  </p>
                </div>
              </Reveal>
            </>
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