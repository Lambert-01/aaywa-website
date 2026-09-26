import Image from "next/image";
import { WHO_WE_SERVE } from "@/data/serve";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function WhoWeServeSection() {
  return (
    <section className="bg-sage/40 py-20 sm:py-24">
      <div className="container-aaywa grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[10px] shadow-soft">
            <div className="relative aspect-[3/4] w-full max-w-lg">
              <Image
                src="/images/woman-working-farm.jpg"
                alt="A young woman working on her farm — representing the women AAYWA serves"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/70 to-transparent px-6 pb-5 pt-16"
              >
                <p className="text-sm font-semibold text-cream">
                  Dignity, agency and ownership — never charity
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-earth">
              Who we serve
            </p>
            <h2 className="mt-4 font-serif text-balance text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight text-forest">
              Young women shaping their future through agriculture.
            </h2>
            <p className="mt-5 leading-8 text-forest/70">
              We serve young women as leaders, entrepreneurs, farmers, innovators and
              decision-makers — working beside them with dignity, agency and
              respect.
            </p>
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
