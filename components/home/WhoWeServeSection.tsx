import { WHO_WE_SERVE } from "@/data/serve";
import CTAButton from "@/components/ui/CTAButton";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhoWeServeSection() {
  return (
    <section className="bg-sage/40 py-24 sm:py-28">
      <div className="container-aaywa grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <PhotoFrame
            src="/images/who-we-serve.svg"
            alt="Young women farmers working together in community"
            aspect="portrait"
            sizes="(min-width: 1024px) 40vw, 90vw"
            rounded="rounded-[2rem] sm:rounded-[2.6rem]"
            className="w-full max-w-lg shadow-soft"
            overlay={
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/60 to-transparent px-6 pb-5 pt-16">
                <p className="text-sm font-semibold text-cream">
                  Dignity, agency and ownership — never charity
                </p>
              </div>
            }
          />
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white px-6 py-5 shadow-soft sm:block">
            <div className="font-serif text-3xl text-forest">6</div>
            <div className="mt-1 max-w-[9rem] text-xs leading-4 text-forest/60">
              communities of young women we walk alongside
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Who we serve"
              title="Young women ready to shape their future through agriculture."
              text="We serve women as leaders, entrepreneurs, farmers, innovators and decision-makers — working beside them with dignity, agency and respect."
            />
          </Reveal>

          <ol className="mt-10">
            {WHO_WE_SERVE.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05}>
                <li className="flex items-start gap-5 border-b border-forest/10 py-4">
                  <span className="font-serif text-xl leading-none text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-forest">{group.title}</h3>
                    <p className="mt-0.5 text-sm text-forest/60">{group.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1} className="mt-8">
            <CTAButton href="/about#who-we-serve" variant="primary" withArrow>
              Meet the women we serve
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}