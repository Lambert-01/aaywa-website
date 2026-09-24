import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  tone?: "dark" | "light";
};

export default function Logo({ className, href = "/", tone = "dark" }: LogoProps) {
  const light = tone === "light";
  return (
    <Link
      href={href}
      aria-label="AAYWA home"
      className={cn("inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "inline-flex h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white",
          !light && "shadow-[0_2px_10px_rgba(23,61,43,0.14)]"
        )}
      >
        <Image
          src="/logo-512.png"
          alt="AAYWA logo"
          width={512}
          height={512}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col gap-0.5">
        <span
          className={cn(
            "text-[1.05rem] font-extrabold leading-none tracking-[0.18em]",
            light ? "text-cream" : "text-forest"
          )}
        >
          AAYWA
        </span>
        <span
          className={cn(
            "text-[9.5px] font-semibold uppercase leading-none tracking-[0.16em]",
            light ? "text-gold" : "text-leaf"
          )}
        >
          Women · Agriculture · Leadership
        </span>
      </span>
    </Link>
  );
}