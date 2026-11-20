"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { serviceCategories, services, type Service } from "@/lib/content";
import { cn } from "@/lib/utils";

type Category = "all" | Service["category"];

export function ServiceExplorer() {
  const [category, setCategory] = useState<Category>("all");
  const filtered =
    category === "all" ? services : services.filter((service) => service.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter services by category">
        {serviceCategories.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setCategory(item.value as Category)}
            aria-pressed={category === item.value}
            className={cn(
              "h-10 rounded-full border px-4 text-xs font-semibold transition-colors sm:text-sm",
              category === item.value
                ? "border-pine-950 bg-pine-950 text-cream"
                : "border-pine-950/15 bg-white/40 text-pine-900/70 hover:border-pine-950/35 hover:text-pine-950",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <motion.li layout key={service.slug} transition={{ duration: 0.3, ease: "easeOut" }}>
            <Link
              href={`/services#${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-pine-950/10 bg-white/55 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sand-500/40 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image loading="eager"
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-pine-950/55 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
                  {service.shortName}
                </span>
              </div>
              <div className="flex flex-1 items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-pine-950">{service.name}</h3>
                  <p className="mt-1 text-sm text-pine-900/75">{service.tagline}</p>
                </div>
                <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-pine-950/15 text-pine-950 transition-colors group-hover:border-pine-950 group-hover:bg-pine-950 group-hover:text-cream">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
