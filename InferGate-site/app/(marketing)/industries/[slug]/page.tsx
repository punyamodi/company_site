import type { Metadata } from "next";
import { IndustrySlugClient } from "./client";

const INDUSTRY_LABELS: Record<string, string> = {
  "financial-services": "Financial Services",
  healthcare: "Healthcare",
  technology: "Technology",
  government: "Government",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const label = INDUSTRY_LABELS[slug] ?? slug;
  return {
    title: `${label} AI Infrastructure | InferGate`,
    description: `How InferGate powers secure, compliant AI for ${label.toLowerCase()} — VPC deployment, RBAC, immutable audit logs, and zero external data egress.`,
    openGraph: {
      title: `${label} AI Infrastructure | InferGate`,
      description: `How InferGate powers secure, compliant AI for ${label.toLowerCase()} — VPC deployment, RBAC, immutable audit logs, and zero external data egress.`,
    },
  };
}

const SLUGS = [
  "financial-services",
  "healthcare",
  "technology",
  "government",
] as const;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function IndustrySlugPage({ params }: Props) {
  const { slug } = await params;
  return <IndustrySlugClient slug={slug} />;
}
