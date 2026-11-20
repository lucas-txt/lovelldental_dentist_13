import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Stethoscope,
  Siren,
  Star,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { MountainDivider } from "@/components/mountain-divider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceExplorer } from "@/components/service-explorer";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { TrustCards } from "@/components/trust-cards";
import { Button } from "@/components/ui/button";
import {
  faqs,
  featureCallouts,
  fullAddress,
  site,
  testimonials,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Lovell Dentist | Preventive Dentistry | Lovell Dental, Lovell, WY",
  description: site.description,
};

const featureIcons = {
  siren: Siren,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 size-[32rem] rounded-full bg-sand-300/35 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-64 size-[28rem] rounded-full bg-pine-200/35 blur-3xl"
        />

        <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <p className="eyebrow">
              <span className="inline-block size-1.5 rounded-full bg-sand-500" aria-hidden="true" />
              From our family to yours
            </p>
            <h1 className="display-title mt-5 text-pine-950 sm:text-[4.25rem] lg:text-[4.8rem]">
              Quality, caring dentistry in{" "}
              <span className="relative whitespace-nowrap italic text-sand-700">
                Lovell
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-sand-400/70"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C42 3 92 2 198 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
            <p className="body-copy mt-6 max-w-xl">
              Experience dentistry the way it should be. Big practice benefits with a small
              practice feel — preventive, restorative, cosmetic, and emergency care for every
              smile in Lovell.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request an appointment
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore services</Link>
              </Button>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-pine-950/10 pt-7 sm:grid-cols-3">
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-pine-900/75">
                  Emergency care
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-pine-950">
                  <Siren className="size-3.5 text-sand-700" aria-hidden="true" />
                  24/7 availability
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-pine-900/75">
                  Office hours
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-pine-950">
                  <Clock className="size-3.5 text-sand-700" aria-hidden="true" />
                  Mon–Thu · 7am–3pm
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-pine-900/75">
                  Find us
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-pine-950">
                  <MapPin className="size-3.5 text-sand-700" aria-hidden="true" />
                  Lovell, Wyoming
                </dd>
              </div>
            </dl>
          </div>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-xl">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[3rem] border border-sand-500/30"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.75rem] bg-pine-900 shadow-soft">
                <Image loading="eager"
                  src="/assets/images/index-banner.jpg"
                  alt="Dr. Anderson and his family"
                  fill
                  sizes="(min-width: 1024px) 46vw, 94vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-pine-950/5 to-transparent"
                />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-pine-950/55 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-sand-300" aria-hidden="true" />
                  Accepting new patients
                </div>

                <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1 rounded-2xl border border-white/20 bg-pine-950/60 px-4 py-3.5 text-cream backdrop-blur-md">
                  <p className="font-display text-lg leading-tight">Meet Dr. Anderson &amp; the team</p>
                  <p className="text-xs text-cream/65">At Lovell Dental, you&apos;re family.</p>
                </div>
              </div>

              <div className="glass absolute -bottom-7 -left-3 hidden w-48 rounded-2xl border border-white/60 p-4 shadow-card sm:block lg:-left-8">
                <div className="flex items-center gap-1 text-sand-700" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-3 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-xs font-semibold leading-5 text-pine-950">
                  “He and his staff are friendly and highly skilled.”
                </p>
                <p className="mt-1 text-[0.65rem] text-pine-900/75">Jennifer T., Lovell</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-pine-950/10 bg-cream-deep/60 py-12 sm:py-16">
        <div className="shell">
          <TrustCards />
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-950 py-16 text-cream sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 size-[34rem] rounded-full bg-sand-500/10 blur-3xl"
        />
        <div className="shell relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Meet Lovell's #1 dental team"
                title="Big practice benefits. Small practice feel."
                tone="dark"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-base leading-7 text-cream/70 sm:text-lg sm:leading-8">
                At Lovell Dental, you&apos;ll experience big practice benefits with a small
                practice feel. We offer a wide array of services and have a state-of-the-art
                facility, and we&apos;ll also take the extra time to get to know you as a person so
                we can better personalize your care. Dr. Anderson and our team are dedicated to
                giving everyone in Lovell a smile they can be proud of, so when you walk through our
                doors, you can trust that we&apos;ll always have what you and your family need.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="primary">
                  <Link href="/about">Meet our dentist</Link>
                </Button>
                <Button asChild variant="outline-light">
                  <Link href="/about#team">Meet our staff</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-12">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
              <div className="relative aspect-[4/3] sm:aspect-[16/7] lg:aspect-[3.6/1]">
                <Image loading="eager"
                  src="/assets/images/index-meet-2a.jpg"
                  alt="The Lovell Dental team"
                  fill
                  sizes="94vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-pine-950/85 via-pine-950/25 to-transparent"
              />
              <div className="absolute inset-0 flex items-end p-5 sm:items-center sm:p-8 lg:p-10">
                <div className="max-w-sm rounded-2xl border border-white/20 bg-pine-950/45 p-5 backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sand-300">
                    From our family to yours
                  </p>
                  <p className="mt-2 font-display text-xl leading-7 text-cream">
                    “A smile they can be proud of.”
                  </p>
                  <p className="mt-2 text-xs text-cream/60">
                    Dr. Anderson and the Lovell Dental team
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {featureCallouts.map((item, index) => {
              const Icon = featureIcons[item.icon];
              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <Link
                    href={item.href}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-sand-400/40 hover:bg-white/10"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sand-400/15 text-sand-300">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="flex items-center gap-2 font-display text-lg font-semibold text-cream">
                        {item.title}
                        <ArrowUpRight className="size-4 text-sand-300 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-cream/60">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
        <MountainDivider className="absolute -bottom-1 left-0" />
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24" id="services">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Featured dental services"
                title="Care for every chapter of your smile."
                description="Select a service below to learn more. From routine cleanings to full smile restorations, our team handles the details so you can feel at home."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild variant="outline">
                <Link href="/services">
                  View all services
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-10">
            <ServiceExplorer />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-deep/60 py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Patient stories"
                title="Cared for like family."
                description="Read what patients from Lovell, Powell, Cody, and beyond say about their visits to Lovell Dental."
              />
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={site.reviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-sm font-semibold text-pine-950"
                >
                  Read more reviews
                </a>
                <Link href="/reviews" className="link-underline text-sm font-semibold text-pine-950">
                  All patient stories
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <TestimonialCarousel items={testimonials} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {["index-community-1", "index-community-2", "index-community-3", "index-community-5"].map(
                  (name, index) => (
                    <div
                      key={name}
                      className={`relative overflow-hidden rounded-2xl border border-pine-950/10 ${
                        index === 1 ? "translate-y-6" : index === 3 ? "-translate-y-2" : ""
                      }`}
                    >
                      <div className="relative aspect-square">
                        <Image loading="eager"
                          src={`/assets/images/${name}.jpg`}
                          alt="Lovell Dental community involvement"
                          fill
                          sizes="(min-width: 1024px) 22vw, 45vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 -z-10 size-40 rounded-full bg-sand-300/40 blur-2xl"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="We love giving back"
              title="Part of the community, not just the practice."
              description="Each and every member of our team chose to go into dentistry because it allows us to truly help people on a daily basis, and this dedication to service isn't just confined to the walls of our office."
            />
            <p className="mt-5 text-base leading-7 text-pine-900/70">
              When we aren&apos;t helping patients, you&apos;ll find Dr. Anderson and our team
              donating time and money to a wide variety of charitable organizations right here in
              Lovell. Basically, if it&apos;s for a good cause, we support it.
            </p>
            <div className="mt-7">
              <Button asChild variant="outline">
                <Link href="/community">
                  Get involved with us
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Good questions, clear answers"
              title="Questions from our patients in Lovell, answered."
              description="Whether you're looking to enhance your smile with cosmetic dentistry or rebuild it with dental implants, we want you to feel well-informed about your options."
            />
            <div className="mt-8 rounded-3xl border border-pine-950/10 bg-white/55 p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-pine-950">
                <Phone className="size-4 text-sand-700" aria-hidden="true" />
                Prefer to talk it through?
              </p>
              <p className="mt-2 text-sm leading-6 text-pine-900/75">
                The quickest way to get the information you need is with a simple phone call.
              </p>
              <a
                href={site.phoneHref}
                className="mt-3 inline-flex font-display text-2xl font-semibold text-pine-950 hover:text-sand-800"
              >
                {site.phone}
              </a>
            </div>
          </div>
          <Reveal delay={0.1}>
            <FaqAccordion items={faqs} defaultOpen={0} />
            <div className="mt-6">
              <Button asChild variant="ghost" className="px-0">
                <Link href="/faqs">
                  See all frequently asked questions
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-950 py-16 text-cream sm:py-20">
        <div className="shell relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-sand-300">Visit us in Lovell</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.06] tracking-[-0.03em] text-cream sm:text-4xl">
              240 E Main St. Right where you need us.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-cream/65">
              Accepting new patients, with dental insurance friendly care, flexible financing, and
              Wyoming Medicaid welcome.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <a href={site.mapUrl} target="_blank" rel="noreferrer">
                  View our map
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline-light">
                <Link href="/contact">Contact the office</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <MapPin className="size-5 text-sand-300" aria-hidden="true" />
              <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/65">
                Address
              </p>
              <p className="mt-1 text-sm leading-6 text-cream/85">{fullAddress}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <Clock className="size-5 text-sand-300" aria-hidden="true" />
              <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/65">
                Office hours
              </p>
              <p className="mt-1 text-sm leading-6 text-cream/85">
                Monday–Thursday
                <br />
                7:00 am - 3:00 pm
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <Phone className="size-5 text-sand-300" aria-hidden="true" />
              <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/65">
                Call the office
              </p>
              <a
                href={site.phoneHref}
                className="mt-1 block text-sm font-semibold text-cream/85 hover:text-sand-300"
              >
                {site.phone}
              </a>
            </div>
            <div className="rounded-3xl border border-sand-400/30 bg-sand-400/10 p-6">
              <Siren className="size-5 text-sand-300" aria-hidden="true" />
              <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sand-300">
                Dental emergency?
              </p>
              <a
                href={site.emergencyPhoneHref}
                className="mt-1 block text-sm font-semibold text-cream hover:text-sand-300"
              >
                {site.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="A healthier smile is closer than you think."
        description="Request an appointment with Lovell Dental. We'll help you find a time that works and walk you through insurance, financing, and care options."
      />
    </>
  );
}
