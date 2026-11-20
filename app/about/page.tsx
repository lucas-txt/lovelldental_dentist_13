import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

import { Affiliations } from "@/components/affiliations";
import { CtaBand } from "@/components/cta-band";
import { PageHero, HeroActions } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Button } from "@/components/ui/button";
import { communityPhotos, featureCallouts, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Our Office",
  description:
    "Meet Dr. Anderson and the Lovell Dental team. Big practice benefits with a small practice feel, serving families in Lovell, Wyoming.",
};

const values = [
  {
    title: "State-of-the-art technology",
    description: "The latest tools, techniques, materials & training.",
    icon: Sparkles,
  },
  {
    title: "A full range of services",
    description: "From cleanings to dental implants & more.",
    icon: Stethoscope,
  },
  {
    title: "Here when you need us",
    description: "In pain? Have an accident? We're available 24/7.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About our office"
        title="Meet Lovell's #1 dental team."
        description="At Lovell Dental, you'll experience big practice benefits with a small practice feel. We take the extra time to get to know you as a person so we can better personalize your care."
        image={{ src: "/assets/images/callouts-3.jpg", alt: "Mother father and two children smiling together" }}
        actions={<HeroActions />}
        facts={[
          { label: "Dentist", value: "Dr. Anderson" },
          { label: "Office", value: "Lovell, WY" },
          { label: "Emergency", value: "24/7 care" },
        ]}
      />

      <section className="bg-cream pb-16 sm:pb-20 lg:pb-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-pine-950/10">
              <div className="relative aspect-[4/3]">
                <Image loading="eager"
                  src="/assets/images/index-meet-2a.jpg"
                  alt="The Lovell Dental team"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-cream/85 p-4 backdrop-blur-md">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sand-800">
                  The Lovell Dental team
                </p>
                <p className="mt-1 font-display text-lg leading-6 text-pine-950">
                  From our family to yours.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="Experience dentistry the way it should be."
              description="At Lovell Dental, you'll experience big practice benefits with a small practice feel. We offer a wide array of services and have a state-of-the-art facility, and we'll also take the extra time to get to know you as a person so we can better personalize your care."
            />
            <p className="mt-5 text-base leading-7 text-pine-900/70">
              Dr. Anderson and our team are dedicated to giving everyone in Lovell a smile they can
              be proud of, so when you walk through our doors, you can trust that we&apos;ll always
              have what you and your family need.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-pine-950/10 bg-white/50 p-4">
                  <value.icon className="size-5 text-sand-700" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-5 text-pine-950">{value.title}</p>
                  <p className="mt-1 text-xs leading-5 text-pine-900/75">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-28 border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="The people behind the smiles"
            title="A team that treats you like family."
            description="From your first phone call to your follow-up visit, you'll be cared for by people who live and work in the same community you do."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-pine-950/10">
                <div className="relative aspect-[16/9]">
                  <Image loading="eager"
                    src="/assets/images/callouts-1.jpg"
                    alt="Smiling man at reception desk"
                    fill
                    sizes="(min-width: 1024px) 60vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="max-w-md font-display text-xl leading-7 text-cream sm:text-2xl">
                    “He and his staff are friendly and highly skilled.”
                  </p>
                  <p className="mt-2 text-xs text-cream/70">Jennifer T., Lovell, WY</p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {featureCallouts.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-start justify-between gap-4 rounded-3xl border border-pine-950/10 bg-white/55 p-5 transition-colors hover:border-sand-500/40 hover:bg-white/80"
                >
                  <div>
                    <p className="font-display text-lg font-semibold text-pine-950">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-pine-900/75">{item.description}</p>
                  </div>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-pine-900/75 transition-colors group-hover:text-pine-950" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="We love giving back"
              title="More than a dental office."
              description="Each and every member of our team chose to go into dentistry because it allows us to truly help people on a daily basis, and this dedication to service isn't just confined to the walls of our office."
            />
            <p className="mt-5 text-base leading-7 text-pine-900/70">
              When we aren&apos;t helping patients, you&apos;ll find Dr. Anderson and our team
              donating time and money to a wide variety of charitable organizations right here in
              Lovell. Basically, if it&apos;s for a good cause, we support it! It&apos;s all in an
              effort to keep making Lovell a better place to live, work, and raise a family.
            </p>
            <div className="mt-7">
              <Button asChild variant="outline">
                <Link href="/community">
                  See our community work
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {communityPhotos.slice(0, 4).map((photo, index) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-2xl border border-pine-950/10 ${
                    index % 2 === 1 ? "translate-y-5" : ""
                  }`}
                >
                  <div className="relative aspect-square">
                    <Image loading="eager"
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-pine-950/10 bg-cream-deep/60 py-16 sm:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <SectionHeading
              eyebrow="What our patients say"
              title="Trusted by families across the Big Horn Basin."
              description="Read real experiences from patients in Lovell, Powell, and Cody."
            />
            <Reveal delay={0.1}>
              <TestimonialCarousel items={testimonials} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="shell">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Professional affiliations" title="Connected to the profession." />
            <p className="flex items-center gap-2 text-sm font-medium text-pine-900/75">
              <ShieldCheck className="size-4 text-sand-700" aria-hidden="true" />
              Proud members and providers
            </p>
          </div>
          <div className="mt-8">
            <Affiliations />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Come say hello"
        title="We'd love to meet you and your family."
        description="Request an appointment at Lovell Dental, or call the office and we'll help you find a time that works."
      />
    </>
  );
}
