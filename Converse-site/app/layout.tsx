import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
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
    default: "Converse — Enterprise Real-Time Voice AI Infrastructure",
    template: "%s | Converse",
  },
  description:
    "Build production-grade real-time voice and multimodal AI agents. Composable pipelines, sub-100ms latency, 20+ AI providers, and enterprise-grade transport. The infrastructure powering the next generation of voice AI.",
  keywords: [
    "voice AI",
    "real-time AI agents",
    "conversational AI",
    "voice pipeline",
    "multimodal AI",
    "AI agent framework",
    "enterprise voice AI",
    "WebRTC AI",
    "speech AI infrastructure",
    "AI orchestration",
    "Converse",
  ],
  openGraph: {
    title: "Converse — Enterprise Real-Time Voice AI Infrastructure",
    description: "Sub-100ms latency · 20+ AI providers · Production-grade WebRTC · Enterprise-ready",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "var(--font-bricolage, 'Bricolage Grotesque', sans-serif)" }}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
