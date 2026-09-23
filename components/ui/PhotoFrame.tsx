import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PhotoFrameProps = {
  src: string;
  alt: string;
  aspect: "portrait" | "landscape" | "tall" | "square" | "wide";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  caption?: string;
  overlay?: ReactNode;
  rounded?: string;
};

const aspects: Record<PhotoFrameProps["aspect"], string> = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function PhotoFrame({
  src,
  alt,
  aspect,
  className,
  imgClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  caption,
  overlay,
  rounded = "rounded-[1.6rem]",
}: PhotoFrameProps) {
  return (
    <figure className={cn(aspects[aspect], "relative overflow-hidden", rounded, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover transition-transform duration-700 ease-out", imgClassName)}
      />
      <div className="grain-layer" aria-hidden />
      {overlay}
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/70 to-transparent px-5 pt-14 pb-4 text-sm font-medium text-cream">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}