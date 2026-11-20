import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Phone,
  ShieldAlert,
  Siren,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { faqs, services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Emergency Dentistry",
  description:
    "Lovell Dental offers 24/7 dental emergency care and same-day emergency appointments in Lovell, Wyoming. Call (307) 271-5910 for urgent dental help.",
};

const emergencyService = services.find((service) => service.slug === "emergencies-root-canals");

const steps = [
  {
    title: "Call our office first",
    description:
      "Your first step should always be to call our office if you're experiencing something painful in your mouth, that way someone on the team can help schedule you for the earliest appointment.",
    icon: Phone,
  },
  {
    title: "Life-threatening? Call 911",
    description:
      "If you're suffering from a more life-threatening situation, such as excessive bleeding, then you should call 911 and head to your local ER instead.",
    icon: ShieldAlert,
  },
  {
    title: "Same-day appointments",
    description:
      "Our practice welcomes same-day appointments so that patients are likelier to get the treatment they need at a moment's notice.",
    icon: CalendarCheck,
  },
];

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="24/7 dental emergency care"
        title="Lovell's emergency dentist."
        description="In pain? Have an accident? We're here to help. If your teeth are suddenly damaged or a loved one starts experiencing severe dental pain, reach out to Lovell Dental for immediate, professional care."
        image={{ src: "/assets/images/services-3.jpg", alt: "Woman holding jaw in pain" }}
        actions={
          <>
            <Button asChild size="lg" variant="clay">
              <a href={site.emergencyPhoneHref}>
                <Siren className="size-4" aria-hidden="true" />
                Call {site.emergencyPhone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link href="/contact">Request an appointment</Link>
            </Button>
          </>
        }
        facts={[
          { label: "Emergency line", value: site.emergencyPhone },
          { label: "Availability", value: "24/7" },
          { label: "Appointments", value: "Same-day" },
        ]}
      />

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="What to do"
              title="A calm next step when every minute matters."
              description="Dental emergencies can feel overwhelming. Start here, and call the office so our team can help you get seen."
            />
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.07}>
                  <div className="flex gap-5 rounded-3xl border border-pine-950/10 bg-white/55 p-6">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-pine-950 text-sand-300">
                      <step.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sand-800">
                        Step {index + 1}
                      </p>
                      <h2 className="mt-1 font-display text-xl font-semibold text-pine-950">
                        {step.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-pine-900/70">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Emergency dentistry"
              title="Care for knocked-out teeth, damaged work, and severe pain."
              description={emergencyService?.description}
            />
            <ul className="mt-7 space-y-3 text-sm text-pine-900/75">
              {[
                "Our entire team is trained to handle a wide variety of dental emergencies.",
                "We do our best to always see emergency patients the same day that they call in.",
                "Regular visits every six months can help prevent emergencies before they start.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-sand-700" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-pine-950/10">
              <div className="relative aspect-[4/3]">
                <Image loading="eager"
                  src="/assets/images/callouts-4.jpg"
                  alt="Woman holding ice pack to face"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-pine-950/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-pine-950/60 p-5 backdrop-blur-md">
                <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sand-300">
                  <AlarmClock className="size-3.5" aria-hidden="true" />
                  Dental emergency?
                </p>
                <a
                  href={site.emergencyPhoneHref}
                  className="mt-1 block font-display text-2xl text-cream hover:text-sand-300"
                >
                  {site.emergencyPhone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Good to know"
              title="How do I get emergency dental care?"
              description={faqs[2].answer}
            />
            <div className="mt-7">
              <Button asChild variant="outline">
                <Link href="/faqs">
                  Read all FAQs
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-pine-950/10 bg-white/55 p-6 sm:p-8">
            <p className="eyebrow">Reach us now</p>
            <a
              href={site.emergencyPhoneHref}
              className="mt-3 block font-display text-3xl font-semibold text-pine-950 hover:text-sand-800"
            >
              {site.emergencyPhone}
            </a>
            <p className="mt-2 text-sm leading-6 text-pine-900/75">
              Dental emergency? Call us. We&apos;re available 24/7.
            </p>
            <div className="mt-5 border-t border-pine-950/10 pt-5 text-sm">
              <p className="font-semibold text-pine-950">Office line</p>
              <a href={site.phoneHref} className="mt-1 inline-flex items-center gap-2 text-pine-900/70 hover:text-pine-950">
                <Phone className="size-4 text-sand-700" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
            <div className="mt-4 text-sm">
              <p className="font-semibold text-pine-950">Office hours</p>
              <p className="mt-1 text-pine-900/75">Monday–Thursday, 7:00 am - 3:00 pm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-pine-950/10 bg-cream-deep/50 py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Emergency questions" title="Answers before you call." />
          <FaqAccordion items={[faqs[2], faqs[3]]} defaultOpen={0} />
        </div>
      </section>

      <CtaBand
        eyebrow="We're here to help"
        title="In pain? Have an accident? Call us."
        description="Our team is trained to handle a wide variety of dental emergencies, and we do our best to see emergency patients the same day they call in."
      />
    </>
  );
}
