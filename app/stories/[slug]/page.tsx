import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStory } from "@/data/stories";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import QuoteBlock from "@/components/ui/QuoteBlock";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story not found" };
  return {
    title: story.headline,
    description: story.excerpt,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-forest pt-32 pb-16 text-cream sm:pt-40 sm:pb-20">
          <div className="grain-layer" aria-hidden />
          <div className="container-aaywa relative">
            <p className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.24em] text-gold">
              {story.program}
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-balance text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.06] tracking-tight">
              {story.headline}
            </h1>
            {(story.name || story.location || story.country) && (
              <p className="mt-5 text-cream/70">
                {[story.name, story.location, story.country].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
        </header>

        <section className="py-16 sm:py-20">
          <div className="container-aaywa grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <PhotoFrame
                src={story.image}
                alt={story.headline}
                aspect="portrait"
                sizes="(min-width: 1024px) 42vw, 100vw"
                rounded="rounded-[1.8rem]"
                className="sticky top-28 shadow-soft"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-pretty leading-8 text-forest/75">
                {story.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              {story.quote && (
                <div className="mt-10">
                  <QuoteBlock quote={story.quote} source={story.name} />
                </div>
              )}

              <div className="mt-12 flex flex-wrap gap-4 border-t border-forest/10 pt-8">
                <CTAButton href="/stories" variant="outline-dark" withArrow>
                  More stories
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </section>
      </article>
    </>
  );
}