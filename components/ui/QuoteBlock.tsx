import { cn } from "@/lib/utils";

type QuoteBlockProps = {
  quote: string;
  source?: string;
  tone?: "dark" | "light";
  className?: string;
};

export default function QuoteBlock({
  quote,
  source,
  tone = "dark",
  className,
}: QuoteBlockProps) {
  const light = tone === "light";
  return (
    <blockquote
      className={cn("relative max-w-4xl", className)}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-8 -left-2 select-none font-serif text-[7rem] leading-none",
          light ? "text-gold/30" : "text-gold/50"
        )}
      >
        “
      </span>
      <p
        className={cn(
          "relative font-serif text-balance text-[clamp(1.5rem,3.2vw,2.4rem)] leading-[1.25] tracking-tight",
          light ? "text-cream" : "text-forest"
        )}
      >
        {quote}
      </p>
      {source && (
        <footer
          className={cn(
            "mt-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em]",
            light ? "text-gold" : "text-earth"
          )}
        >
          <span className="h-px w-10 bg-current" aria-hidden />
          {source}
        </footer>
      )}
    </blockquote>
  );
}