import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Users } from "lucide-react";

import { CommunityGallery } from "@/components/community-gallery";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community Involvement",
  description:
    "Lovell Dental loves giving back to the Lovell community. See how Dr. Anderson and our team donate time and support to local charitable organizations.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="We love giving back"
        title="Part of Lovell, not just the practice."
        description="Each and every member of our team chose to go into dentistry because it allows us to truly help people on a daily basis — and that dedication doesn't stop at the office door."
        image={{ src: "/assets/images/index-community-3.jpg", alt: "Dental team posing at community outing" }}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">Get involved with us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.facebookUrl} target="_blank" rel="noreferrer">
                Follow on Facebook
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </>
        }
        facts={[
          { label: "Community", value: "Lovell, WY" },
          { label: "Team", value: "Dr. Anderson & staff" },
          { label: "Focus", value: "Local causes" },
        ]}
      />

      <section className="bg-cream pb-16 sm:pb-20 lg:pb-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why we give back"
              title="If it's for a good cause, we support it."
              description="When we aren't helping patients, you'll find Dr. Anderson and our team donating time and money to a wide variety of charitable organizations right here in Lovell."
            />
            <p className="mt-5 text-base leading-7 text-pine-900/70">
              It&apos;s all in an effort to keep making Lovell a better place to live, work, and
              raise a family. From community events to local kids and families, we&apos;re grateful
              to be part of this community.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-pine-950/10 bg-white/50 p-5">
                <HeartHandshake className="size-5 text-sand-700" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-pine-950">Time and resources</p>
                <p className="mt-1 text-xs leading-5 text-pine-900/75">
                  Donating time and money to charitable organizations in Lovell.
                </p>
              </div>
              <div className="rounded-2xl border border-pine-950/10 bg-white/50 p-5">
                <Users className="size-5 text-sand-700" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-pine-950">A stronger community</p>
                <p className="mt-1 text-xs leading-5 text-pine-900/75">
                  Helping make Lovell a better place to live, work, and raise a family.
                </p>
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-pine-950/10">
              <div className="relative aspect-[4/3]">
                <Image loading="eager"
                  src="/assets/images/index-community-1.jpg"
                  alt="Team at community event"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-pine-950/55 p-5 backdrop-blur-md">
                <p className="font-display text-xl leading-7 text-cream">
                  “We love giving back.”
                </p>
                <p className="mt-1 text-xs text-cream/65">Dr. Anderson and the Lovell Dental team</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Community gallery"
              title="Moments from around Lovell."
              description="A few snapshots from events, causes, and families we've been proud to support."
            />
            <p className="text-sm text-pine-900/75">Tap any photo to view it larger.</p>
          </div>
          <div className="mt-10">
            <CommunityGallery />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="shell flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-pine-950/10 bg-white/55 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="font-display text-2xl text-pine-950 sm:text-3xl">Get involved with us.</h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-pine-900/75">
              Have a cause or community event you think we should know about? We&apos;d love to hear
              from you.
            </p>
          </div>
          <Button asChild>
            <Link href="/contact">
              Contact the office
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand
        eyebrow="Thank you, Lovell"
        title="We're proud to call this community home."
        description="Thank you for letting our team care for your smiles and be part of your lives. We'll keep showing up for Lovell."
      />
    </>
  );
}
