import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureContent } from "./client";

const FEATURE_LABELS: Record<string, string> = {
  routing: "Intelligent Routing",
  fallback: "Automatic Fallback",
  caching: "Semantic Caching",
  observability: "Observability",
  "rate-limiting": "Rate Limiting",
  "access-control": "Access Control",
  guardrails: "Guardrails",
  "mcp-gateway": "MCP Gateway",
  "adaptive-load-balancing": "Adaptive Load Balancing",
  clustering: "Clustering",
  "audit-logs": "Audit Logs",
  vault: "HashiCorp Vault Integration",
  plugins: "Plugin System",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const label = FEATURE_LABELS[slug] ?? slug;
  return {
    title: `${label} | InferGate`,
    description: `How InferGate's ${label.toLowerCase()} works — built for enterprises that need reliable, observable, and cost-efficient AI infrastructure.`,
    openGraph: {
      title: `${label} | InferGate`,
      description: `How InferGate's ${label.toLowerCase()} works — built for enterprises that need reliable, observable, and cost-efficient AI infrastructure.`,
    },
  };
}

const SLUGS = [
  "routing","fallback","caching","observability","rate-limiting",
  "access-control","guardrails","mcp-gateway","adaptive-load-balancing",
  "clustering","audit-logs","vault","plugins",
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <FeatureContent slug={slug} />;
}
