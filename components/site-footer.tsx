import Image from "next/image";
import Link from "next/link";
import { Clock, Facebook, MapPin, Phone, Star, Siren } from "lucide-react";

import { Affiliations } from "@/components/affiliations";
import { fullAddress, navItems, services, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-pine-950 text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-sand-500/10 blur-3xl"
      />
      <div className="shell relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Lovell Dental — home" className="inline-flex">
              <Image loading="eager"
                src="/assets/images/header-logo.png"
                alt="Lovell Dental"
                width={306}
                height={117}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-6 text-cream/60">
              Quality, caring dentistry in Lovell. From our family to yours — preventive,
              restorative, cosmetic, and emergency care for every smile.
            </p>
            <div className="mt-7 space-y-3 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-cream/85 transition-colors hover:text-sand-300"
              >
                <Phone className="size-4 text-sand-400" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-cream/70 transition-colors hover:text-sand-300"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-sand-400" aria-hidden="true" />
                {fullAddress}
              </a>
              <p className="flex items-start gap-3 text-cream/70">
                <Clock className="mt-0.5 size-4 shrink-0 text-sand-400" aria-hidden="true" />
                <span>
                  Monday–Thursday
                  <br />
                  7:00 am - 3:00 pm
                </span>
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:pl-8">
            <div>
              <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sand-300">
                Explore
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="text-cream/65 transition-colors hover:text-cream">
                    Home
                  </Link>
                </li>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-cream/65 transition-colors hover:text-cream">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sand-300">
                Dental Services
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-cream/65 transition-colors hover:text-cream"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-cream/65 transition-colors hover:text-cream">
                    All services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sand-300">
                Patient Resources
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/new-patients" className="text-cream/65 transition-colors hover:text-cream">
                    New patient info
                  </Link>
                </li>
                <li>
                  <Link href="/new-patients#insurance" className="text-cream/65 transition-colors hover:text-cream">
                    Insurance &amp; Medicaid
                  </Link>
                </li>
                <li>
                  <Link href="/new-patients#financing" className="text-cream/65 transition-colors hover:text-cream">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link href="/new-patients#forms" className="text-cream/65 transition-colors hover:text-cream">
                    Download Our Forms
                  </Link>
                </li>
                <li>
                  <a
                    href={site.membershipUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/65 transition-colors hover:text-cream"
                  >
                    Lovell Dental Membership Plan
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-2">
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Lovell Dental on Facebook"
                  className="grid size-9 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-sand-400 hover:text-sand-300"
                >
                  <Facebook className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={site.reviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Read Lovell Dental reviews"
                  className="grid size-9 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-sand-400 hover:text-sand-300"
                >
                  <Star className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={site.emergencyPhoneHref}
                  aria-label={`Emergency dental care: call ${site.emergencyPhone}`}
                  className="grid size-9 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-sand-400 hover:text-sand-300"
                >
                  <Siren className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="border-t border-white/10 py-10">
          <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cream/65">
            Professional affiliations
          </p>
          <Affiliations />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-[0.72rem] text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Accepting new patients</span>
            <span aria-hidden="true">•</span>
            <a
              href={site.emergencyPhoneHref}
              className="transition-colors hover:text-cream"
            >
              Dental Emergency? Call {site.emergencyPhone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
