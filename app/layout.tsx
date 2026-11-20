import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/content";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lovelldental.vercel.app"),
  title: {
    default: "Lovell Dentist | Preventive Dentistry | Lovell Dental, Lovell, WY",
    template: "%s | Lovell Dental",
  },
  description: site.description,
  keywords: [
    "Lovell dentist",
    "dentist Lovell WY",
    "Lovell Dental",
    "dental implants Lovell",
    "Invisalign Lovell",
    "emergency dentist Lovell",
    "family dentistry Lovell",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Lovell Dental | Quality, caring dentistry in Lovell, WY",
    description: site.description,
    images: [{ url: "/assets/images/index-banner.jpg", alt: "Dr. Anderson and his family" }],
  },
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b211c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pine-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
