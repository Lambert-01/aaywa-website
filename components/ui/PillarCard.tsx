import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type PillarCardProps = {
  index: string;
  title: string;
  short: string;
  icon: LucideIcon;
  href: string;
};

export default function PillarCard({ index, title, short, icon: Icon, href }: PillarCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-forest/10 bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/30 hover:bg-white hover:shadow-soft"
    >
      <div className="flex items-start justify-between">
        <span className="font-serif text-5xl leading-none tracking-tight text-forest/12 transition-colors duration-500 group-hover:text-leaf/30">
          {index}
        </span>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-sage text-leaf transition-colors duration-500 group-hover:bg-forest group-hover:text-gold">
          <Icon size={20} aria-hidden />
        </span>
      </div>

      <h3 className="mt-5 font-serif text-xl leading-snug tracking-tight text-forest">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-forest/65">{short}</p>

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-leaf transition-colors group-hover:text-forest">
        Explore pillar
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </span>
    </Link>
  );
}