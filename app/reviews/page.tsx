import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Facebook, Quote, Star } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Button } from "@/components/ui/button";
import { site, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read patient reviews for Lovell Dental in Lovell, Wyoming. Real experiences from patients in Lovell, Powell, and Cody.",
};

const reviewSources = [
  {
    name: "Google Reviews",
    description: "Read Our Reviews",
    href: site.reviewsUrl,
    icon: Star,
  },
  {
    name: "Yelp",
    description: "Reviews on Yelp",
    href: site.yelpUrl,
    icon: Quote,
  },
  {
    name: "Facebook",
    description: "Like us on Facebook",
    href: site.facebookUrl,
    icon: Facebook,
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient stories"
        title="What our patients say."
        description="Real experiences from patients in Lovell, Powell, Cody, and across the Big Horn Basin. Read More Reviews and see why families trust Lovell Dental."
        image={{ src: "/assets/images/services-5.jpg", alt: "Woman with gorgeous smile" }}
        actions={
          <Button asChild size="lg">
            <a href={site.reviewsUrl} target="_blank" rel="noreferrer">
              Read our reviews
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        }
        facts={[
          { label: "Patients", value: "Lovell, Powell, Cody" },
          { label: "Dentist", value: "Dr. Anderson" },
          { label: "Care", value: "Friendly & skilled" },
        ]}
      />

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="shell grid gap-6 lg:grid-cols-3">
          {reviewSources.map((source, index) => (
            <Reveal key={source.name} delay={index * 0.07}>
              <a
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-start justify-between gap-4 rounded-3xl border border-pine-950/10 bg-white/55 p-6 transition-colors hover:border-sand-500/40 hover:bg-white/80"
              >
                <div>
                  <span className="grid size-10 place-items-center rounded-xl bg-pine-950 text-sand-300">
                    <source.icon className="size-4" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-display text-lg font-semibold text-pine-950">{source.name}</p>
                  <p className="mt-1 text-sm text-pine-900/75">{source.description}</p>
                </div>
                <ArrowUpRight className="size-4 text-pine-900/75 transition-colors group-hover:text-pine-950" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Featured review"
            title="Cared for like family."
            description="Our patients come from Lovell and the surrounding communities. Here's what a few of them wanted to share."
          />
          <Reveal delay={0.1}>
            <TestimonialCarousel items={testimonials} />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="More patient stories"
            title="In their own words."
            description="Every review is a reminder of why we do what we do."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.07}>
                <figure className="flex h-full flex-col rounded-3xl border border-pine-950/10 bg-white/55 p-6">
                  <div className="flex items-center gap-1 text-sand-600" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-7 text-pine-900/75">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-pine-950/10 pt-4">
                    <span className="grid size-9 place-items-center rounded-full bg-pine-950 font-display text-xs font-semibold text-sand-300">
                      {testimonial.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-pine-950">{testimonial.name}</span>
                      <span className="block text-xs text-pine-900/75">{testimonial.location}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-pine-950/10 bg-cream-deep/50 py-16 sm:py-20">
        <div className="shell flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-pine-950/10 bg-white/55 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="font-display text-2xl text-pine-950 sm:text-3xl">Share your experience.</h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-pine-900/75">
              We love hearing from our patients. Read our reviews online or call the office to tell
              us about your visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={site.reviewsUrl} target="_blank" rel="noreferrer">
                Read More Reviews
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Your turn"
        title="Experience the care our patients talk about."
        description="Request an appointment at Lovell Dental and see why patients from Lovell, Powell, and Cody keep coming back."
      />
    </>
  );
}
