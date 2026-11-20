"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import type { Testimonial } from "@/lib/content";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  items: Testimonial[];
  className?: string;
  interval?: number;
};

export function TestimonialCarousel({
  items,
  className,
  interval = 9000,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback(
    (direction: 1 | -1) => {
      setIndex((current) => (current + direction + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    if (paused || reduce || items.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [interval, items.length, paused, reduce]);

  const active = items[index];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border border-pine-950/10 bg-white/60 p-6 shadow-card sm:p-10 lg:p-12",
        className,
      )}
      role="group"
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-sand-300/30 blur-2xl"
      />
      <Quote className="size-9 text-sand-500" aria-hidden="true" />

      <div aria-live="polite" className="relative mt-5 min-h-[19rem] sm:min-h-[16rem] lg:min-h-[14rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={active.name}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <blockquote className="font-display text-lg leading-8 text-pine-950 sm:text-xl sm:leading-9">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-pine-950 font-display text-sm font-semibold text-sand-300">
                {active.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-pine-950">{active.name}</p>
                <p className="text-xs text-pine-900/75">{active.location}</p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-pine-950/10 pt-5">
        <div className="flex items-center gap-1.5" role="group" aria-label="Choose testimonial">
          {items.map((item, itemIndex) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={itemIndex === index}
              aria-label={`Show review by ${item.name}`}
              onClick={() => setIndex(itemIndex)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                itemIndex === index
                  ? "w-7 bg-sand-600"
                  : "w-2 bg-pine-950/20 hover:bg-pine-950/40",
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid size-10 place-items-center rounded-full border border-pine-950/15 text-pine-950 transition-colors hover:bg-pine-950 hover:text-cream"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid size-10 place-items-center rounded-full border border-pine-950/15 text-pine-950 transition-colors hover:bg-pine-950 hover:text-cream"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
