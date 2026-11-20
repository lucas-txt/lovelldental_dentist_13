import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, FileText, Phone, ShieldCheck, Wallet } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TrustCards } from "@/components/trust-cards";
import { Button } from "@/components/ui/button";
import { faqs, insurancePlans, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "New patients are welcome at Lovell Dental. Learn about dental insurance, Wyoming Medicaid, flexible financing, and what to expect at your first visit in Lovell, WY.",
};

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title="New patients welcome."
        description="Accepting new patients. Dental insurance, Medicaid, and financing — we'll help you understand your options before you come in."
        image={{ src: "/assets/images/callouts-2.jpg", alt: "Patient filling in forms" }}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">Request an appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
            </Button>
          </>
        }
        facts={[
          { label: "Insurance", value: "Most plans accepted" },
          { label: "Medicaid", value: "Wyoming Medicaid" },
          { label: "Financing", value: "Monthly plans" },
        ]}
      />

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="shell">
          <TrustCards />
        </div>
      </section>

      <section id="insurance" className="scroll-mt-28 border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Insurance plans"
              title="In-network with most insurances."
              description="We're an in-network provider with most insurances. Our team will walk you through the details of your benefits so you can maximize them."
            />
            <div className="mt-7 rounded-2xl border border-pine-950/10 bg-white/55 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-pine-950">
                <ShieldCheck className="size-4 text-sand-700" aria-hidden="true" />
                Wyoming Medicaid welcome
              </p>
              <p className="mt-2 text-sm leading-6 text-pine-900/75">
                Providing quality dentistry, accessible for everyone.
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {insurancePlans.map((plan) => (
                <div
                  key={plan}
                  className="flex items-center gap-2.5 rounded-2xl border border-pine-950/10 bg-white/60 px-4 py-4 text-sm font-semibold text-pine-950"
                >
                  <Check className="size-4 shrink-0 text-sand-700" aria-hidden="true" />
                  {plan}
                </div>
              ))}
              <div className="flex items-center gap-2.5 rounded-2xl border border-sand-500/40 bg-sand-100 px-4 py-4 text-sm font-semibold text-pine-950">
                <Check className="size-4 shrink-0 text-sand-800" aria-hidden="true" />
                Wyoming Medicaid
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-pine-900/75">
              Don&apos;t see your plan? Call the office and we&apos;ll help you check your coverage.
            </p>
          </div>
        </div>
      </section>

      <section id="financing" className="scroll-mt-28 bg-cream py-16 sm:py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Financing & membership"
              title="Care that fits your budget."
              description="We make dental care affordable with flexible financing and a membership plan."
            />
            <p className="mt-5 text-base leading-7 text-pine-900/75">
              If you want to save money on dental care, take care of your teeth with daily oral
              hygiene and routine dental checkups. You can also take advantage of dental insurance
              coverage to lower your out-of-pocket expenses. If you don&apos;t have dental insurance,
              CareCredit can help turn your treatments into monthly payments that come with little
              to no interest. We even have special offers that can reduce the price of examinations
              for both new patients and children.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <a href={site.membershipUrl} target="_blank" rel="noreferrer">
                  Lovell Dental Membership Plan
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Ask about financing</Link>
              </Button>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-pine-950/10 bg-white/55 p-7 shadow-card sm:p-9">
              <span className="grid size-12 place-items-center rounded-2xl bg-pine-950 text-sand-300">
                <Wallet className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-pine-950">Ways we keep care accessible</h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-pine-900/70">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-sand-700" aria-hidden="true" />
                  Proudly offering affordable monthly payment plans.
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-sand-700" aria-hidden="true" />
                  We&apos;re an in-network provider with most insurances.
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-sand-700" aria-hidden="true" />
                  Providing quality dentistry, accessible for everyone.
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-sand-700" aria-hidden="true" />
                  Special offers can reduce the price of examinations for new patients and children.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="forms" className="scroll-mt-28 border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div className="rounded-[2rem] border border-pine-950/10 bg-white/55 p-7 sm:p-9">
            <span className="grid size-12 place-items-center rounded-2xl bg-sand-200 text-sand-900">
              <FileText className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-2xl text-pine-950 sm:text-3xl">Download Our Forms</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-pine-900/70">
              Save time at your first visit. Contact the office and we&apos;ll help you get the
              new-patient paperwork before you arrive.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Request new-patient forms</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={site.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {site.phone}
                </a>
              </Button>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="What to expect"
              title="A first visit that feels like home."
              description="From our family to yours — quality, caring dentistry in Lovell. At Lovell Dental, you'll experience big practice benefits with a small practice feel."
            />
            <p className="mt-4 text-sm leading-7 text-pine-900/70">
              We offer a wide array of services and have a state-of-the-art facility, and we&apos;ll
              take the extra time to get to know you as a person so we can better personalize your
              care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Common questions" title="Before your first visit." />
          <div>
            <FaqAccordion items={[faqs[0], faqs[1], faqs[3]]} defaultOpen={0} />
            <div className="mt-6">
              <Button asChild variant="ghost" className="px-0">
                <Link href="/faqs">See all FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="We're accepting new patients"
        title="Let's get your first visit on the calendar."
        description="Request an appointment and our team will help with insurance, financing, and anything else you need before you arrive."
      />
    </>
  );
}
