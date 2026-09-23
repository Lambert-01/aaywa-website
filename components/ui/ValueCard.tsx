import type { LucideIcon } from "lucide-react";

type ValueCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export default function ValueCard({ title, text, icon: Icon }: ValueCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.4rem] border border-forest/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/25 hover:shadow-soft">
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-leaf transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-cream text-earth transition-colors duration-500 group-hover:bg-sage group-hover:text-leaf">
        <Icon size={20} aria-hidden />
      </span>
      <h3 className="mt-5 font-serif text-lg leading-snug text-forest">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-forest/65">{text}</p>
    </article>
  );
}