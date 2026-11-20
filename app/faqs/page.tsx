import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Siren } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { faqs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about dental care at Lovell Dental in Lovell, Wyoming — finding a dentist, checkup costs, emergency care, and affordability.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Questions from our patients in Lovell, answered."
        description="Whether you're looking to enhance your smile with cosmetic dentistry or rebuild it with dental implants, we want you to feel well-informed about your options."
        image={{ src: "/assets/images/callouts-5.jpg", alt: "Woman and dentist looking at x-rays" }}
        actions={
          <Button asChild size="lg">
            <a href={site.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </Button>
        }
        facts={[
          { label: "Questions", value: "Answered" },
          { label: "Office", value: "Lovell, WY" },
          { label: "Emergency", value: "24/7" },
        ]}
      />

      <section className="bg-cream pb-16 pt-4 sm:pb-20 lg:pb-24">
        <div className="shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Good questions, clear answers"
              title="Start here, then call if you'd like to talk."
              description="The quickest way to get the information you need is with a simple phone call, but we understand if you aren't able to do so. We've collected some of our most frequently asked questions from patients in the community and beyond."
            />
            <div className="mt-8">
              <FaqAccordion items={faqs} defaultOpen={0} />
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-[2rem] border border-pine-950/10 bg-pine-950 p-6 text-cream sm:p-7">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sand-300">
                Have questions? Get answers.
              </p>
              <p className="mt-3 font-display text-2xl leading-8 text-cream">
                The quickest way to get the information you need is with a simple phone call.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 block font-display text-2xl text-sand-300 hover:text-sand-200"
              >
                {site.phone}
              </a>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                <Button asChild size="sm">
                  <Link href="/contact">Request appointment</Link>
                </Button>
                <Button asChild size="sm" variant="outline-light">
                  <Link href="/emergency">Emergency care</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-pine-950/10 bg-white/55 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-pine-950">
                <ShieldCheck className="size-4 text-sand-700" aria-hidden="true" />
                Insurance &amp; financing
              </p>
              <p className="mt-2 text-sm leading-6 text-pine-900/75">
                We&apos;re an in-network provider with most insurances, with flexible financing and
                Wyoming Medicaid welcome.
              </p>
              <Link href="/new-patients" className="link-underline mt-3 inline-flex text-sm font-semibold text-pine-950">
                New patient information
              </Link>
            </div>

            <div className="rounded-2xl border border-pine-950/10 bg-white/55 p-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-pine-900/75">
                Average U.S. checkup &amp; cleaning cost
              </p>
              <p className="mt-1 font-display text-2xl text-pine-950">$200 and $350</p>
              <p className="mt-1 text-xs leading-5 text-pine-900/75">
                Several factors can impact the specific cost, including geography and your current
                dental health. Insurance benefits can be negotiated between your provider and
                dentist.
              </p>
            </div>

            <div className="rounded-2xl border border-clay/20 bg-clay/5 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-pine-950">
                <Siren className="size-4 text-clay" aria-hidden="true" />
                Dental emergency?
              </p>
              <a href={site.emergencyPhoneHref} className="mt-2 block font-display text-xl text-pine-950">
                {site.emergencyPhone}
              </a>
              <p className="mt-1 text-xs text-pine-900/75">Available 24/7.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-pine-950/10 bg-cream-deep/50 py-14">
        <div className="shell flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl text-pine-950">Still have a question?</h2>
            <p className="mt-1 text-sm text-pine-900/75">
              Our team is happy to help before you book.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/contact">
              Ask the office
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to book?"
        title="We'll help you find the right next step."
        description="Request an appointment or call the office. We'll answer your questions and help you choose the care that fits."
      />
    </>
  );
}
