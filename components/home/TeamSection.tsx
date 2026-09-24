import Image from "next/image";
import { EXECUTIVE, MEMBERS } from "@/data/team";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  delay?: number;
};

function TeamCard({ name, role, image, delay = 0 }: TeamCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-leaf/30 hover:shadow-soft">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={`Photo of ${name}, ${role} of AAYWA`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <figcaption className="flex flex-col items-center px-5 py-5 text-center">
          <h3 className="font-serif text-lg leading-snug tracking-tight text-forest">
            {name}
          </h3>
          <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-earth">
            {role}
          </p>
        </figcaption>
      </figure>
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
              image={member.image}
              delay={(index % 3) * 0.08}
            />
          ))}
        </div>

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
                image={member.image}
                delay={(index % 4) * 0.06}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}