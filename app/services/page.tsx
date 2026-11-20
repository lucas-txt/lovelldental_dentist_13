import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero, HeroActions } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceExplorer } from "@/components/service-explorer";
import { Button } from "@/components/ui/button";
import { serviceCatalogue, services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore dental services at Lovell Dental: dental implants, family dentistry, emergency care, Invisalign, cosmetic dentistry, crowns, and bridges in Lovell, WY.",
};

const numbered = ["01", "02", "03", "04", "05", "06"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Featured dental services, thoughtfully delivered."
        description="Select a service below to learn more. From routine cleanings to dental implants and more, our team handles your care from start to finish."
        image={{ src: "/assets/images/services-5.jpg", alt: "Woman with gorgeous smile" }}
        actions={<HeroActions />}
        facts={[
          { label: "Services", value: "Preventive to restorative" },
          { label: "Emergency", value: "Same-day appointments" },
          { label: "Insurance", value: "Most plans accepted" },
        ]}
      />

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="shell">
          <div className="flex flex-col gap-6 border-t border-pine-950/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-pine-900/75">
              Find the care you need
            </p>
            <p className="flex items-center gap-2 text-sm text-pine-900/75">
              <Phone className="size-4 text-sand-700" aria-hidden="true" />
              Questions? Call{" "}
              <a href={site.phoneHref} className="font-semibold text-pine-950 hover:text-sand-800">
                {site.phone}
              </a>
            </p>
          </div>
          <div className="mt-8">
            <ServiceExplorer />
          </div>
        </div>
      </section>

      <section className="border-y border-pine-950/10 bg-cream-deep/50 py-16 sm:py-20 lg:py-24">
        <div className="shell space-y-16 sm:space-y-20">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-pine-950/10">
                    <div className="relative aspect-[4/3]">
                      <Image loading="eager"
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(min-width: 1024px) 45vw, 92vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-pine-950/55 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
                      {service.shortName}
                    </span>
                  </div>
                </Reveal>

                <div className={reversed ? "lg:order-1" : ""}>
                  <p className="font-display text-sm font-semibold tracking-[0.18em] text-sand-700">
                    {numbered[index]}
                  </p>
                  <h2 className="mt-3 font-display text-3xl leading-[1.06] tracking-[-0.03em] text-pine-950 sm:text-4xl">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-pine-900/75">
                    {service.tagline}
                  </p>
                  <p className="mt-5 text-base leading-7 text-pine-900/75 sm:text-lg sm:leading-8">
                    {service.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/contact">
                        Request this service
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={site.phoneHref}>
                        <Phone className="size-4" aria-hidden="true" />
                        Call the office
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Full service catalogue"
            title="More ways we care for your smile."
            description="Our practice offers a complete range of preventive, restorative, cosmetic, and advanced dental services. Ask us about any treatment during your visit."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCatalogue.map((group) => (
              <Reveal key={group.group}>
                <div className="h-full rounded-3xl border border-pine-950/10 bg-white/50 p-6">
                  <h3 className="font-display text-lg font-semibold leading-6 text-pine-950">
                    {group.group}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-5 text-pine-900/75">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-sand-700" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure where to start?"
        title="Tell us what's going on. We'll help you choose."
        description="Call the office or request an appointment. We'll talk through your options, insurance, and financing before any treatment."
      />
    </>
  );
}
