import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import type { Story } from "@/data/stories";
import { cn } from "@/lib/utils";
import PhotoFrame from "@/components/ui/PhotoFrame";

type StoryCardProps = {
  story: Story;
  featured?: boolean;
};

export default function StoryCard({ story, featured = false }: StoryCardProps) {
  const published = story.status === "published";

  return (
    <article
      className={cn(
        "group relative flex overflow-hidden rounded-[1.6rem] border border-forest/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-soft",
        featured && "lg:col-span-2"
      )}
    >
      <div className={cn(featured ? "grid md:grid-cols-2" : "flex flex-col")}>
        <PhotoFrame
          src={story.image}
          alt={published ? `${story.name} — ${story.program}` : "Beneficiary story photograph placeholder"}
          aspect={featured ? "landscape" : "portrait"}
          rounded="rounded-none"
          className={cn(featured && "md:min-h-[340px]")}
          imgClassName="group-hover:scale-[1.04]"
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 640px) 40vw, 100vw"}
        />

        <div className="flex flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex rounded-full bg-sage px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-leaf">
              {story.program}
            </span>
            {!published && (
              <span className="inline-flex rounded-full bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-earth">
                Story being verified
              </span>
            )}
          </div>

          <h3
            className={cn(
              "mt-4 font-serif leading-snug tracking-tight text-forest",
              featured ? "text-2xl sm:text-[1.7rem]" : "text-xl"
            )}
          >
            {story.headline}
          </h3>

          <p className="mt-3 flex-1 text-pretty text-[0.95rem] leading-7 text-forest/70">
            {story.excerpt}
          </p>

          {story.quote && (
            <blockquote className="mt-4 border-l-2 border-gold pl-4 text-sm italic leading-6 text-earth">
              <Quote size={13} className="mb-1 text-gold" aria-hidden />
              {story.quote}
            </blockquote>
          )}

          <div className="mt-6 flex items-end justify-between gap-3 border-t border-forest/10 pt-4">
            <div className="text-sm">
              {story.name && (
                <span className="font-bold text-ink">{story.name}</span>
              )}
              {story.name && <span className="text-forest/50"> · </span>}
              {(story.location || story.country) && (
                <span className="text-forest/60">
                  {[story.location, story.country].filter(Boolean).join(", ")}
                </span>
              )}
            </div>

            {published ? (
              <Link
                href={`/stories/${story.slug}`}
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-leaf transition-colors hover:text-forest"
              >
                Read Story
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            ) : (
              <span className="text-sm font-semibold text-forest/40">Available soon</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}