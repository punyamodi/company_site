import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollEffects } from "@/components/scroll-effects";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HaloDesk — Enterprise Customer Support Platform",
    template: "%s | HaloDesk",
  },
  description:
    "HaloDesk unifies every customer conversation into one intelligent workspace. Omnichannel inbox, AI-powered automation, advanced analytics, and enterprise-grade security — built for scale.",
  keywords: [
    "customer support platform",
    "omnichannel support",
    "AI customer service",
    "enterprise support desk",
    "helpdesk software",
    "customer success platform",
    "HaloDesk",
    "support automation",
    "customer health scores",
    "sentiment analysis",
  ],
  openGraph: {
    title: "HaloDesk — Enterprise Customer Support Platform",
    description:
      "Unify every conversation. Automate intelligently. Retain customers at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        style={{
          fontFamily:
            "var(--font-bricolage, 'Bricolage Grotesque', sans-serif)",
        }}
      >
        <ScrollEffects />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
