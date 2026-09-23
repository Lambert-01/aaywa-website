import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: number | null;
  suffix?: string;
  note?: string;
  icon?: LucideIcon;
  tone?: "dark" | "light";
  className?: string;
};

export default function StatCard({
  label,
  value,
  suffix,
  note,
  icon: Icon,
  tone = "dark",
  className,
}: StatCardProps) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.4rem] border p-6",
        light
          ? "border-white/12 bg-white/5"
          : "border-forest/10 bg-white",
        className
      )}
    >
      {Icon && (
        <span
          className={cn(
            "grid h-10 w-10 place-items-center rounded-xl",
            light ? "bg-gold/15 text-gold" : "bg-sage text-leaf"
          )}
        >
          <Icon size={18} aria-hidden />
        </span>
      )}
      <div
        className={cn(
          "mt-4 font-serif text-4xl leading-none tracking-tight",
          light ? "text-cream" : "text-forest"
        )}
      >
        {value === null ? (
          <span aria-label="Awaiting verified data">—</span>
        ) : (
          <>
            {value.toLocaleString()}
            {suffix}
          </>
        )}
      </div>
      <div className={cn("mt-2 text-sm font-semibold", light ? "text-white/80" : "text-ink")}>
        {label}
      </div>
      {value === null && note && (
        <div
          className={cn(
            "mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",
            light ? "bg-white/10 text-white/60" : "bg-cream text-earth"
          )}
        >
          {note}
        </div>
      )}
    </div>
  );
}