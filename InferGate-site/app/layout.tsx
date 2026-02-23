import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
  display: "swap",
});
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["100","300","400","700","900"],
  style: ["normal","italic"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400","500","700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InferGate — Enterprise AI Gateway. One API, Every Provider.",
    template: "%s | InferGate",
  },
  description:
    "InferGate is the fastest enterprise AI gateway. Unify 25+ LLM providers behind one OpenAI-compatible API. 10,400 req/s · 0.3ms P50 · Semantic caching · MCP native · Built in Go.",
  keywords: [
    "AI gateway","LLM gateway","enterprise AI infrastructure","model routing",
    "AI observability","semantic caching","MCP gateway","InferGate","AI governance",
    "AI cost control","multi-provider AI","AI compliance","AI security",
  ],
  openGraph: {
    title: "InferGate — Enterprise AI Gateway",
    description: "10,400 req/s · 25+ providers · 0.3ms overhead · Built in Go for regulated enterprise.",
    type: "website",
    siteName: "InferGate",
  },
  twitter: {
    card: "summary_large_image",
    title: "InferGate — Enterprise AI Gateway",
    description: "One API for every AI provider. 10,400 req/s. Built in Go.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "var(--font-bricolage,'Bricolage Grotesque',sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
