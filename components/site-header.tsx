"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Siren } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fullAddress, navItems, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-pine-950 text-cream/75">
        <div className="shell flex min-h-9 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5 text-[0.68rem] font-medium leading-5">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sand-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-sand-400" />
            </span>
            24/7 Dental Emergency Care
          </span>
          <a
            href={site.emergencyPhoneHref}
            className="inline-flex items-center gap-1.5 text-cream transition-colors hover:text-sand-300"
          >
            <Siren className="size-3" aria-hidden="true" />
            Dental Emergency? Call {site.emergencyPhone}
          </a>
          <span className="hidden items-center gap-2 lg:inline-flex">
            <span className="text-cream/65">•</span> Accepting New Patients
          </span>
          <span className="hidden text-cream/60 xl:inline">{fullAddress}</span>
        </div>
      </div>

      <div className="border-b border-white/10 bg-pine-950/95 backdrop-blur-xl">
        <div className="shell flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Lovell Dental — home"
            className="relative z-10 flex shrink-0 items-center"
          >
            <Image loading="eager"
              src="/assets/images/header-logo.png"
              alt="Lovell Dental"
              width={306}
              height={117}
              className="h-10 w-auto brightness-0 invert sm:h-11"
            />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex h-9 items-center rounded-full px-3 text-[0.8rem] font-semibold transition-colors",
                        active
                          ? "bg-cream/10 text-cream"
                          : "text-cream/70 hover:bg-cream/5 hover:text-cream",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-cream/20 px-4 py-2.5 text-xs font-semibold text-cream transition-colors hover:bg-cream/10 md:inline-flex"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {site.phone}
            </a>
            <Button asChild size="sm" className="hidden h-10 px-5 sm:inline-flex">
              <Link href="/contact">Request appointment</Link>
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline-light"
                  size="icon"
                  className="xl:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </Button>
              </DialogTrigger>
              <DialogContent className="left-auto right-0 top-0 h-dvh w-full max-w-sm translate-x-0 translate-y-0 overflow-y-auto rounded-none rounded-l-3xl border-y-0 border-r-0 p-6 sm:p-8">
                <DialogTitle>Menu</DialogTitle>
                <DialogDescription>Explore Lovell Dental.</DialogDescription>
                <nav aria-label="Mobile" className="mt-8">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-3 font-display text-xl transition-colors",
                          pathname === "/" ? "bg-pine-950 text-cream" : "text-pine-950 hover:bg-pine-950/5",
                        )}
                      >
                        Home
                      </Link>
                    </li>
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-3 py-3 font-display text-xl transition-colors",
                            pathname === item.href
                              ? "bg-pine-950 text-cream"
                              : "text-pine-950 hover:bg-pine-950/5",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-8 rounded-2xl bg-pine-950 p-5 text-cream">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sand-300">
                    Dental emergency?
                  </p>
                  <a
                    href={site.emergencyPhoneHref}
                    className="mt-2 block font-display text-2xl hover:text-sand-300"
                  >
                    {site.emergencyPhone}
                  </a>
                  <p className="mt-3 text-xs leading-5 text-cream/60">
                    Available 24/7. Same-day emergency appointments.
                  </p>
                </div>
                <div className="mt-6 space-y-2 text-sm text-pine-900/70">
                  <p>{fullAddress}</p>
                  <a href={site.phoneHref} className="flex items-center gap-2 font-semibold text-pine-950">
                    <Phone className="size-4" aria-hidden="true" />
                    {site.phone}
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
