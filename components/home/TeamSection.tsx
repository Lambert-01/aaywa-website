import { EXECUTIVE, MEMBERS } from "@/data/team";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

type TeamCardProps = {
  name: string;
  role: string;
  delay?: number;
};

function TeamCard({ name, role, delay = 0 }: TeamCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col items-center rounded-[1.4rem] border border-forest/10 bg-white px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-leaf/30 hover:shadow-soft">
        <span
          className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-forest to-leaf shadow-soft"
          aria-hidden
        >
          <span className="font-serif text-2xl tracking-wide text-gold">
            {initials(name)}
          </span>
        </span>
        <h3 className="mt-5 font-serif text-lg leading-snug tracking-tight text-forest">
          {name}
        </h3>
        <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-earth">
          {role}
        </p>
      </article>
    </Reveal>
  );
}

export default function TeamSection() {
  return (
    <section id="leadership" className="scroll-mt-24 bg-sage/30 py-24 sm:py-28">
      <div className="container-aaywa">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="The women leading AAYWA."
            text="AAYWA is guided by a committed team of young African women — bringing together agricultural expertise, entrepreneurship and community leadership."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXECUTIVE.map((member, index) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              delay={(index % 3) * 0.08}
            />
          ))}
        </div>

        {MEMBERS.length > 0 && (
          <Reveal delay={0.1} className="mt-16">
            <div className="flex items-center gap-4">
              <h3 className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-earth">
                Committee members
              </h3>
              <div className="h-px flex-1 bg-forest/10" aria-hidden />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MEMBERS.map((member, index) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  delay={(index % 4) * 0.06}
                />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}