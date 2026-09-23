import { ArrowRight, FileText, type LucideIcon } from "lucide-react";
import { RESOURCE_CATEGORIES } from "@/data/resources";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const CATEGORY_META: Record<string, { icon: LucideIcon }> = {
  news: { icon: FileText },
  opportunities: { icon: FileText },
  reports: { icon: FileText },
  publications: { icon: FileText },
  training: { icon: FileText },
  guides: { icon: FileText },
  insights: { icon: FileText },
};

export default function ResourcesPreview() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-aaywa">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionHeading
                eyebrow="Resources"
                title="Knowledge that travels with you."
                text="News, opportunities, reports, publications, training resources, agribusiness guides and market insights — built for women building agribusinesses."
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <CTAButton href="/resources" variant="forest" size="lg" withArrow>
                Browse resources
              </CTAButton>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {RESOURCE_CATEGORIES.map((category, index) => {
              const Icon = CATEGORY_META[category.id]?.icon ?? FileText;
              return (
                <Reveal key={category.id} delay={(index % 2) * 0.07}>
                  <a
                    href={`/resources#${category.id}`}
                    className="group flex h-full items-start gap-4 rounded-[1.4rem] border border-forest/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf/30 hover:shadow-soft"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sage text-leaf transition-colors duration-300 group-hover:bg-leaf group-hover:text-cream">
                      <Icon size={18} aria-hidden />
                    </span>
                    <span className="flex-1">
                      <span className="block font-bold text-forest">{category.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-forest/60">
                        {category.description}
                      </span>
                    </span>
                    <ArrowRight
                      size={15}
                      className="mt-2 shrink-0 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}