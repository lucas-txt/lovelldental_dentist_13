import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { fullAddress, site } from "@/lib/content";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  actions?: ReactNode;
  facts?: { label: string; value: string }[];
  tone?: "light" | "dark";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  actions,
  facts,
  tone = "light",
}: PageHeroProps) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24",
        dark ? "bg-pine-950 text-cream" : "bg-cream text-pine-950",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full blur-3xl",
          dark ? "bg-sand-500/10" : "bg-sand-300/30",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -bottom-56 -left-32 size-[30rem] rounded-full blur-3xl",
          dark ? "bg-pine-600/20" : "bg-pine-200/40",
        )}
      />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className={cn("eyebrow", dark && "text-sand-300")}>
            <span className="inline-block size-1.5 rounded-full bg-sand-500" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1
            className={cn(
              "display-title mt-5 max-w-3xl",
              dark ? "text-cream" : "text-pine-950",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
              dark ? "text-cream/70" : "text-pine-900/75",
            )}
          >
            {description}
          </p>

          {actions ? <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div> : null}

          {facts?.length ? (
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-current/10 pt-7 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt
                    className={cn(
                      "text-[0.65rem] font-semibold uppercase tracking-[0.18em]",
                      dark ? "text-cream/65" : "text-pine-900/75",
                    )}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className={cn(
                      "mt-1 text-sm font-semibold",
                      dark ? "text-cream" : "text-pine-950",
                    )}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {image ? (
          <Reveal delay={0.12} className="lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-xl">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2.9rem] border border-sand-500/25"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-pine-900 shadow-soft">
                <Image loading="eager"
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-pine-950/55 via-pine-950/5 to-transparent"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-pine-950/55 px-4 py-3 text-cream backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sand-300">
                      <MapPin className="size-3" aria-hidden="true" />
                      Lovell, Wyoming
                    </p>
                    <p className="mt-1 truncate text-xs text-cream/80">{fullAddress}</p>
                  </div>
                  <Link
                    href={site.phoneHref}
                    aria-label={`Call Lovell Dental at ${site.phone}`}
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-sand-400 text-pine-950 transition-colors hover:bg-sand-300"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.12} className="lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pine-900 to-pine-950 p-8 shadow-soft">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sand-300">
                  Visit the office
                </p>
                <p className="mt-3 font-display text-2xl text-cream">{fullAddress}</p>
                <div className="mt-6 space-y-4 border-t border-white/10 pt-5 text-sm">
                  <a href={site.phoneHref} className="flex items-center gap-3 text-cream/80 hover:text-cream">
                    <Phone className="size-4 text-sand-400" aria-hidden="true" />
                    {site.phone}
                  </a>
                  <Link href="/contact" className="flex items-center gap-3 text-cream/80 hover:text-cream">
                    <ArrowUpRight className="size-4 text-sand-400" aria-hidden="true" />
                    Request an appointment
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function HeroActions() {
  return (
    <>
      <Button asChild size="lg">
        <Link href="/contact">Request an appointment</Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link href="/services">Explore services</Link>
      </Button>
    </>
  );
}
