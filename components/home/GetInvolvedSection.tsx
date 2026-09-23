import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INVOLVE_PATHS } from "@/data/getInvolved";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GetInvolvedSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-28" id="get-involved">
      <div className="container-aaywa grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Get involved"
              title="Grow with AAYWA."
              text="Whether you are a young woman farmer, mentor, buyer, researcher, funder or institutional partner — there is a place for you in AAYWA's ecosystem."
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-10 hidden lg:block">
            <PhotoFrame
              src="/images/get-involved.jpg"
              alt="Hands joined in partnership around agriculture"
              aspect="landscape"
              sizes="(min-width: 1024px) 34vw, 80vw"
              rounded="rounded-[1.8rem]"
              className="w-full max-w-sm shadow-soft"
            />
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <ul className="divide-y divide-forest/10 border-y border-forest/10">
            {INVOLVE_PATHS.map((path) => (
              <li key={path.id}>
                <Link
                  href={`/get-involved#${path.id}`}
                  className="group flex items-center gap-5 py-6 transition-all duration-300 sm:gap-7"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-forest shadow-sm transition-colors duration-300 group-hover:bg-forest group-hover:text-gold">
                    <path.icon size={20} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-xl tracking-tight text-forest transition-colors group-hover:text-leaf">
                      {path.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-forest/60">
                      {path.description}
                    </span>
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-forest/15 text-forest transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                    <ArrowUpRight size={16} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}