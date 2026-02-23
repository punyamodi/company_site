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
    default: "Onyx — Enterprise AI Platform. Agents, Search & Deep Research.",
    template: "%s | Onyx",
  },
  description:
    "The enterprise AI platform that unifies your knowledge. Custom AI Agents, hybrid RAG search, Deep Research, 40+ connectors, and full security compliance — all on your infrastructure.",
  keywords: [
    "enterprise AI platform",
    "AI agents",
    "RAG search",
    "knowledge management",
    "deep research AI",
    "enterprise search",
    "LLM platform",
    "AI connectors",
    "Onyx AI",
    "knowledge graph",
    "MCP actions",
    "enterprise AI",
  ],
  openGraph: {
    title: "Onyx — Enterprise AI Platform",
    description: "Custom Agents · 40+ Connectors · Deep Research · Enterprise-grade Security.",
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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
