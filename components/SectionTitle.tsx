export default function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-earth">{eyebrow}</div>
      <h2 className="text-3xl font-black leading-tight text-forest sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-forest/70">{text}</p>}
    </div>
  );
}
