import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MountainDivider } from "@/components/mountain-divider";
import { site } from "@/lib/content";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CtaBand({
  eyebrow = "Ready when you are",
  title = "Your best smile starts with a conversation.",
  description = "Request an appointment, ask about insurance, or talk through a treatment plan. Our team in Lovell is here to help.",
}: CtaBandProps) {
  return (
    <section className="relative bg-cream pb-20 pt-8 sm:pb-24">
      <div className="shell">
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-pine-950 px-6 pb-14 pt-12 shadow-soft sm:px-10 sm:pt-14 lg:px-16 lg:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-sand-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-radial-warm"
          />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="max-w-2xl">
              <p className="eyebrow text-sand-300">{eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.03em] text-cream sm:text-4xl lg:text-[3.1rem]">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-cream/65 sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request an appointment
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <a href={site.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cream/65">
            <span>Accepting new patients</span>
            <span>Wyoming Medicaid welcome</span>
            <span>24/7 dental emergency care</span>
          </div>
        </div>
      </div>
      <MountainDivider className="absolute -bottom-1 left-0" tone="light" />
    </section>
  );
}
