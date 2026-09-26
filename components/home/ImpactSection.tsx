import { MEASURES } from "@/data/impact";
import Reveal from "@/components/ui/Reveal";

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream sm:py-24">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(47,107,73,0.35), transparent 40%), radial-gradient(circle at 10% 90%, rgba(215,169,75,0.12), transparent 45%)",
        }}
      />
      <div className="grain-layer" aria-hidden />

      <div className="container-aaywa relative">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
            Our Impact
          </p>
          <h2 className="mt-4 font-serif text-balance text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight">
            What we measure.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-cream/70">
            AAYWA publishes quantitative results only after programme data has
            been verified and approved for public release.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MEASURES.map((measure, index) => (
              <div
                key={measure.id}
                className="rounded-[8px] border border-white/10 bg-white/5 p-6"
              >
                <div className="font-serif text-xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-bold leading-snug text-cream">
                  {measure.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-cream/65">
                  {measure.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
