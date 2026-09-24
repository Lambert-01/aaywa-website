import type { Metadata } from "next";
import {
  BarChart3,
  BookOpen,
  FileText,
  Newspaper,
  Presentation,
  Target,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { RESOURCE_CATEGORIES } from "@/data/resources";
import PageHero from "@/components/ui/PageHero";
import Scene from "@/components/ui/Scene";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterForm from "@/components/ui/NewsletterForm";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "News, opportunities, reports, publications, training resources, agribusiness guides and market insights from AAYWA.",
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  news: Newspaper,
  opportunities: Target,
  reports: Presentation,
  publications: BookOpen,
  training: Trophy,
  guides: FileText,
  insights: BarChart3,
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Knowledge built for women building agribusinesses."
        text="Practical, honest and Africa-rooted resources — from training tools and business guides to research, reports and market insight."
        scene="ledger"
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-aaywa">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Scene
                variant="ledger"
                aspect="wide"
                rounded="rounded-[1.8rem]"
                className="shadow-soft"
                label="An agricultural ledger with notes and a small sprout"
              />
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center">
              <h2 className="font-serif text-balance text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.12] tracking-tight text-forest">
                One place for the whole journey.
              </h2>
              <p className="mt-4 text-pretty leading-8 text-forest/70">
                AAYWA&apos;s resource library is organized around the real questions
                young women agripreneurs ask — how to learn, how to produce, how to
                organize, how to sell and how to grow.
              </p>
              <p className="mt-4 text-pretty leading-8 text-forest/70">
                Content is published as it is developed, reviewed and approved.
                Until then, each category below describes exactly what will live
                there.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-aaywa">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCE_CATEGORIES.map((category, index) => {
              const Icon = CATEGORY_ICONS[category.id] ?? FileText;
              return (
                <Reveal key={category.id} delay={(index % 3) * 0.06}>
                  <a
                    href={`#${category.id}`}
                    className="group flex h-full flex-col rounded-[1.5rem] border border-forest/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-leaf/30 hover:shadow-soft"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sage text-leaf transition-colors duration-300 group-hover:bg-forest group-hover:text-gold">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="mt-5 font-serif text-xl tracking-tight text-forest">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-forest/65">{category.description}</p>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.18}>
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-cream p-6">
                <p className="text-lg font-bold leading-snug text-forest">
                  Want a note when new resources drop?
                </p>
                <div className="mt-6">
                  <NewsletterForm tone="dark" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-aaywa">
          <Reveal>
            <SectionHeading
              eyebrow="Library index"
              title="Organized around real questions."
              text="Each section below is where its content will live — training tools, business guides and insight, reviewed and approved before anything goes public."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {RESOURCE_CATEGORIES.map((category, index) => {
              const Icon = CATEGORY_ICONS[category.id] ?? FileText;
              return (
                <Reveal key={category.id} delay={(index % 2) * 0.07}>
                  <article
                    id={category.id}
                    className="scroll-mt-28 rounded-[1.6rem] border border-forest/10 bg-white p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sage text-leaf">
                        <Icon size={20} aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl tracking-tight text-forest">{category.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-forest/65">{category.description}</p>
                      </div>
                    </div>
                    <div className="mt-6 rounded-xl border border-dashed border-forest/15 bg-cream/60 px-5 py-4 text-sm leading-6 text-forest/60">
                      New content in this section is published here as soon as it
                      is reviewed and approved.
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Find something missing?"
        text="If you are developing reports, guides or research on women in African agriculture, let's share it with the women building the sector."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Partner with us"
        secondaryHref="/get-involved#partner"
      />
    </>
  );
}