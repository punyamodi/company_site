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
    default: "AI Platform — Full-Service Digital Agency",
    template: "%s | AI Platform",
  },
  description:
    "AI Platform is a full-service digital agency. We design and build websites, web apps, mobile apps, AI agents, customer chatbots, and everything in between — from first pixel to production.",
  keywords: [
    "digital agency","web development","app development","AI agents","customer chatbot",
    "frontend development","backend development","mobile app development",
    "full-stack development","AI integration","e-commerce development","UI UX design",
  ],
  openGraph: {
    title: "AI Platform — Full-Service Digital Agency",
    description: "We design & build exceptional digital products. Frontend, backend, mobile, AI agents, chatbots, and more.",
    type: "website",
    siteName: "AI Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Platform — Full-Service Digital Agency",
    description: "We design & build exceptional digital products. Frontend, backend, mobile, AI agents, chatbots, and more.",
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
