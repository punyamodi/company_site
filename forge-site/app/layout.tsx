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
    default: "Forge — Custom Enterprise AI Solutions",
    template: "%s | Forge",
  },
  description:
    "Bespoke AI engineering for the modern enterprise. From custom AI integrations to full-stack AI transformation — built to your exact specification.",
  keywords: [
    "custom enterprise AI",
    "bespoke AI solutions",
    "AI integration",
    "workflow automation",
    "AI consulting",
    "custom AI agents",
    "enterprise AI development",
    "data AI platform",
    "AI engineering",
  ],
  openGraph: {
    title: "Forge — Custom Enterprise AI Solutions",
    description: "Bespoke AI engineering for the modern enterprise. Built to your exact specification.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "var(--font-bricolage, 'Bricolage Grotesque', sans-serif)" }}>
        <ScrollEffects />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
