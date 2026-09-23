import { Handshake } from "lucide-react";

export default function PartnersStrip() {
  return (
    <section className="border-y border-forest/10 bg-white/60 py-12">
      <div className="container-aaywa">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="eyebrow text-[0.72rem] font-bold uppercase tracking-[0.22em] text-earth">
              Partners & collaborators
            </h2>
            <p className="mt-3 text-sm leading-6 text-forest/65">
              AAYWA works with development, financial, market and research organizations
              across Africa and beyond. Partner logos will appear here as formal
              partnerships are announced.
            </p>
          </div>

          <div
            className="grid grid-cols-3 gap-4 sm:grid-cols-5"
            aria-label="Partner logo placeholders"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex h-20 w-full items-center justify-center rounded-2xl border border-dashed border-forest/20 bg-paper"
              >
                <span className="flex flex-col items-center gap-1.5 text-forest/35">
                  <Handshake size={18} aria-hidden />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em]">
                    Partner logo
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}