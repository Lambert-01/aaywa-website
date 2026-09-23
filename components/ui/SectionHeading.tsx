import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "dark",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "eyebrow text-[0.72rem] font-bold uppercase tracking-[0.22em]",
            light ? "text-gold" : "text-earth",
            align === "center" && "justify-center"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "mt-4 font-serif text-balance",
          "text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.1] tracking-tight",
          light ? "text-cream" : "text-forest"
        )}
      >
        {title}
      </Tag>
      {text && (
        <p
          className={cn(
            "mt-5 max-w-readable text-pretty text-[1.05rem] leading-8",
            light ? "text-white/70" : "text-forest/70"
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}