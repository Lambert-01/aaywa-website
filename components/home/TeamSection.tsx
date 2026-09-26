import Image from "next/image";
import { EXECUTIVE, MEMBERS } from "@/data/team";
import Reveal from "@/components/ui/Reveal";

type PortraitProps = {
  name: string;
  role: string;
  image: string;
  size?: "large" | "medium" | "small";
  delay?: number;
};

function Portrait({ name, role, image, size = "medium", delay = 0 }: PortraitProps) {
  const aspectClass =
    size === "large" ? "aspect-[3/4]" : size === "medium" ? "aspect-[4/5]" : "aspect-[4/5]";

  return (
    <Reveal delay={delay}>
      <figure className="flex flex-col overflow-hidden rounded-[8px] border border-forest/10 bg-white">
        <div className={`relative w-full overflow-hidden ${aspectClass}`}>
          <Image
            src={image}
            alt={`${name}, ${role}`}
            fill
            sizes={
              size === "large"
                ? "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                : "(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            }
            className="object-cover object-top"
          />
        </div>
        <figcaption className="px-4 py-4 text-center">
          <h3 className="font-serif text-base leading-snug tracking-tight text-forest">
            {name}
          </h3>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-earth">
            {role}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function TeamSection() {
  const [president, vicePresident, ...rest] = EXECUTIVE;

  return (
    <section id="leadership" className="scroll-mt-24 bg-sage/30 py-20 sm:py-24">
      <div className="container-aaywa">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-earth">
            Leadership
          </p>
          <h2 className="mt-3 font-serif text-balance text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight text-forest">
            The women leading AAYWA.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-forest/65">
            AAYWA is guided by a committed team of young African women — bringing
            together agricultural expertise, entrepreneurship and community
            leadership.
          </p>
        </Reveal>

        {/* President + Vice President — larger */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
          <Portrait
            name={president.name}
            role={president.role}
            image={president.image}
            size="large"
            delay={0}
          />
          <Portrait
            name={vicePresident.name}
            role={vicePresident.role}
            image={vicePresident.image}
            size="large"
            delay={0.06}
          />
        </div>

        {/* Remaining executives */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {rest.map((member, index) => (
            <Portrait
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              size="medium"
              delay={index * 0.06}
            />
          ))}
        </div>

        {/* Members */}
        <Reveal delay={0.08} className="mt-14">
          <div className="flex items-center gap-4">
            <h3 className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-earth">
              Members
            </h3>
            <div className="h-px flex-1 bg-forest/10" aria-hidden />
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {MEMBERS.map((member, index) => (
              <Portrait
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                size="small"
                delay={(index % 5) * 0.05}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
