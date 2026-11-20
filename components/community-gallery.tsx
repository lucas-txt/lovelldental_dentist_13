"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { communityPhotos } from "@/lib/content";
import { cn } from "@/lib/utils";

type CommunityGalleryProps = {
  limit?: number;
  className?: string;
};

export function CommunityGallery({ limit, className }: CommunityGalleryProps) {
  const photos = typeof limit === "number" ? communityPhotos.slice(0, limit) : communityPhotos;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? photos[activeIndex] : null;

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + photos.length) % photos.length;
    });
  };

  return (
    <>
      <ul className={cn("grid grid-cols-2 gap-3 sm:grid-cols-4", className)}>
        {photos.map((photo, index) => (
          <li key={photo.src} className={cn(index === 0 && "col-span-2 row-span-2")}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl border border-pine-950/10 bg-pine-100"
              aria-label={`Open community photo: ${photo.alt}`}
            >
              <div className={cn("relative", index === 0 ? "aspect-square" : "aspect-[4/3]")}>
                <Image loading="eager"
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 640px) 40vw, 92vw" : "(min-width: 640px) 20vw, 46vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="absolute inset-0 bg-pine-950/0 transition-colors duration-300 group-hover:bg-pine-950/25" />
              <span className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full bg-cream/90 text-pine-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="size-3.5" aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-5xl border-white/10 bg-pine-950 p-3 text-cream sm:p-4">
          {active ? (
            <>
              <DialogTitle className="sr-only">Community photo</DialogTitle>
              <DialogDescription className="sr-only">
                Photo {activeIndex !== null ? activeIndex + 1 : 0} of {photos.length}: {active.alt}
              </DialogDescription>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-pine-900">
                <Image loading="eager"
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-3">
                <p className="text-xs text-cream/60">
                  {active.alt}
                  <span className="ml-2 text-cream/65">
                    {activeIndex !== null ? activeIndex + 1 : 0} / {photos.length}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Previous photo"
                    className="grid size-9 place-items-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
                  >
                    <ChevronLeft className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Next photo"
                    className="grid size-9 place-items-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
                  >
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
