// Server component — generateStaticParams cannot live in a "use client" file
import type { Metadata } from "next";
import IntegrationContent from "./_content";

const INTEGRATION_LABELS: Record<string, string> = {
  openai: "OpenAI",
  anthropic: "Anthropic",
  "aws-bedrock": "AWS Bedrock",
  "google-vertex": "Google Vertex AI",
  azure: "Azure OpenAI",
  groq: "Groq",
  ollama: "Ollama",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const label = INTEGRATION_LABELS[slug] ?? slug;
  return {
    title: `${label} Integration | InferGate`,
    description: `Connect ${label} to InferGate for unified routing, observability, rate limiting, and cost control across your AI stack.`,
    openGraph: {
      title: `${label} Integration | InferGate`,
      description: `Connect ${label} to InferGate for unified routing, observability, rate limiting, and cost control across your AI stack.`,
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: "openai" },
    { slug: "anthropic" },
    { slug: "aws-bedrock" },
    { slug: "google-vertex" },
    { slug: "azure" },
    { slug: "groq" },
    { slug: "ollama" },
  ];
}

export default async function IntegrationSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <IntegrationContent slug={slug} />;
}