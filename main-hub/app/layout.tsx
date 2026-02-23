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
    default: "AI Platform — The Complete Enterprise AI Infrastructure Suite",
    template: "%s | AI Platform",
  },
  description:
    "AI Platform is the complete enterprise AI infrastructure suite. AI Gateway, Voice AI, Customer Support Intelligence, and Enterprise Knowledge — designed for regulated enterprises at scale.",
  keywords: [
    "enterprise AI","AI infrastructure","AI platform","AI gateway","voice AI",
    "customer support AI","enterprise knowledge","AI suite","B2B AI",
    "AI governance","AI security","AI compliance",
  ],
  openGraph: {
    title: "AI Platform — Enterprise AI Infrastructure Suite",
    description: "Four production-grade AI products. One unified enterprise suite.",
    type: "website",
    siteName: "AI Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Platform — Enterprise AI Infrastructure Suite",
    description: "Four production-grade AI products. One unified enterprise suite.",
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
