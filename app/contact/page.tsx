import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Facebook,
  FileText,
  MapPin,
  Phone,
  Siren,
  Star,
} from "lucide-react";

import { AppointmentForm } from "@/components/appointment-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { fullAddress, hours, quickActions, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Lovell Dental in Lovell, Wyoming. Call (307) 548-7654, request an appointment, or visit us at 240 E Main St. Emergency care available 24/7.",
};

const actionIcons = [Phone, MapPin, Star, Facebook];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Contact Lovell Dental."
        description="Accepting new patients. Request an appointment, call the office, or stop by. We're here to help you and your family."
        image={{ src: "/assets/images/callouts-1.jpg", alt: "Smiling man at reception desk" }}
        actions={
          <>
            <Button asChild size="lg">
              <a href={site.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call {site.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#appointment">Request an appointment</a>
            </Button>
          </>
        }
        facts={[
          { label: "Address", value: "240 E Main St" },
          { label: "Hours", value: "Mon–Thu · 7am–3pm" },
          { label: "Emergency", value: "24/7 care" },
        ]}
      />

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action, index) => {
            const Icon = actionIcons[index];
            const external = action.href.startsWith("http");
            return (
              <Reveal key={action.label} delay={index * 0.06}>
                <a
                  href={action.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex h-full items-start justify-between gap-4 rounded-3xl border border-pine-950/10 bg-white/55 p-5 transition-colors hover:border-sand-500/40 hover:bg-white/80"
                >
                  <div>
                    <span className="grid size-10 place-items-center rounded-xl bg-pine-950 text-sand-300">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-pine-950">{action.label}</p>
                    <p className="mt-1 text-xs text-pine-900/75">{action.detail}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-pine-900/75 transition-colors group-hover:text-pine-950" aria-hidden="true" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Visit us"
              title="240 E Main St, Lovell, WY."
              description="We're right on Main Street in Lovell. Call ahead or request an appointment and we'll have everything ready for you."
            />
            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-pine-950/10 bg-white/60 p-5 transition-colors hover:border-sand-500/40"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-pine-950 text-sand-300">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-pine-900/75">
                    Office phone
                  </span>
                  <span className="mt-0.5 block font-display text-xl font-semibold text-pine-950">
                    {site.phone}
                  </span>
                </span>
              </a>

              <a
                href={site.emergencyPhoneHref}
                className="flex items-center gap-4 rounded-2xl border border-clay/20 bg-clay/5 p-5 transition-colors hover:border-clay/40"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-clay text-cream">
                  <Siren className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-clay-dark">
                    Dental emergency? Call
                  </span>
                  <span className="mt-0.5 block font-display text-xl font-semibold text-pine-950">
                    {site.emergencyPhone}
                  </span>
                </span>
              </a>

              <a
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-pine-950/10 bg-white/60 p-5 transition-colors hover:border-sand-500/40"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-pine-950 text-sand-300">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-pine-900/75">
                    Address
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold leading-6 text-pine-950">
                    {fullAddress}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-pine-950/10 bg-white/60 p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-sand-200 text-sand-900">
                  <Clock className="size-4" aria-hidden="true" />
                </span>
                <h2 className="font-display text-2xl text-pine-950">Office hours</h2>
              </div>
              <dl className="mt-6 divide-y divide-pine-950/10">
                {hours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-4 py-3.5 text-sm">
                    <dt className="font-semibold text-pine-950">{item.day}</dt>
                    <dd className="text-pine-900/75">{item.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 rounded-xl bg-pine-50 px-4 py-3 text-xs leading-5 text-pine-900/75">
                Dental emergency? We&apos;re available 24/7. Call{" "}
                <a href={site.emergencyPhoneHref} className="font-semibold text-pine-950 underline">
                  {site.emergencyPhone}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="shell grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div id="appointment" className="scroll-mt-28 rounded-[2.5rem] border border-pine-950/10 bg-white/55 p-6 shadow-card sm:p-9">
            <SectionHeading
              eyebrow="Request an appointment"
              title="Tell us how we can help."
              description="Send us a request with your name, email, phone, and a few details. The team will follow up to confirm a time."
            />
            <div className="mt-7">
              <AppointmentForm />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative flex-1 overflow-hidden rounded-[2.5rem] border border-pine-950/10 bg-pine-50">
              <div className="absolute inset-0 bg-grid-faint" aria-hidden="true" />
              <div className="relative flex h-full min-h-72 flex-col items-center justify-center p-8 text-center">
                <span className="relative grid size-16 place-items-center rounded-full bg-pine-950 text-sand-300 shadow-soft">
                  <MapPin className="size-7" aria-hidden="true" />
                  <span className="absolute inset-0 animate-ping rounded-full border border-sand-600/40" aria-hidden="true" />
                </span>
                <p className="mt-5 font-display text-2xl text-pine-950">Find us in Lovell</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-pine-900/75">{fullAddress}</p>
                <Button asChild className="mt-6">
                  <a href={site.mapUrl} target="_blank" rel="noreferrer">
                    View our Map
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-pine-950/10 bg-white/55 p-6">
              <p className="flex items-center gap-2 font-display text-lg text-pine-950">
                <FileText className="size-4 text-sand-700" aria-hidden="true" />
                Download Our Forms
              </p>
              <p className="mt-2 text-sm leading-6 text-pine-900/75">
                New patient? Contact the office and we&apos;ll help you get the paperwork before
                your visit.
              </p>
              <Link href="/new-patients#forms" className="link-underline mt-3 inline-flex text-sm font-semibold text-pine-950">
                New patient forms
              </Link>
            </div>

            <div className="rounded-[2rem] border border-pine-950/10 bg-pine-950 p-6 text-cream">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sand-300">
                Connect with us
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-cream/10"
                >
                  <Facebook className="size-3.5" aria-hidden="true" />
                  Like us on Facebook
                </a>
                <a
                  href={site.reviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-cream/10"
                >
                  <Star className="size-3.5" aria-hidden="true" />
                  Read Our Reviews
                </a>
              </div>
              <p className="mt-4 text-xs leading-5 text-cream/65">
                Experience dentistry the way it should be, right here in Lovell.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
