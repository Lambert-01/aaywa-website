import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function SisterhoodSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-aaywa">
        <Reveal>
          <div className="relative overflow-hidden rounded-[10px] shadow-soft">
            <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <Image
                src="/images/sisterhood.jpg"
                alt="AAYWA members gathered together — a community of young women growing through shared strength"
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/10 to-transparent"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-earth">
            Sisterhood
          </p>
          <h2 className="mt-4 font-serif text-balance text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight text-forest">
            Growth is stronger when it is shared.
          </h2>
          <p className="mt-6 text-pretty leading-8 text-forest/70">
            AAYWA is more than a programme — it is a community of young women
            who learn together, challenge each other and celebrate every step
            forward. Peer support, shared knowledge and collective confidence
            are at the heart of everything we do.
          </p>
          <p className="mt-4 text-pretty leading-8 text-forest/70">
            When one woman grows, she brings others with her.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
