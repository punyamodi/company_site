import type { Metadata } from "next";
import { SolutionSlugClient } from "./client";

const SOLUTION_LABELS: Record<string, string> = {
  "platform-engineers": "Platform & ML Engineers",
  "cto-it-leaders": "CTO & IT Leaders",
  "security-compliance": "Security & Compliance",
  "cost-control": "Cost Control",
  "high-throughput": "High-Throughput Apps",
  "agent-orchestration": "Agent Orchestration",
  "self-hosted": "Self-Hosted / VPC",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const label = SOLUTION_LABELS[slug] ?? slug;
  return {
    title: `${label} | InferGate Solutions`,
    description: `InferGate for ${label} — enterprise AI gateway with intelligent routing, fine-grained security, and full observability purpose-built for your team.`,
    openGraph: {
      title: `${label} | InferGate Solutions`,
      description: `InferGate for ${label} — enterprise AI gateway with intelligent routing, fine-grained security, and full observability purpose-built for your team.`,
    },
  };
}

const SLUGS = [
  "platform-engineers",
  "cto-it-leaders",
  "security-compliance",
  "cost-control",
  "high-throughput",
  "agent-orchestration",
  "self-hosted",
] as const;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function SolutionSlugPage({ params }: Props) {
  const { slug } = await params;
  return <SolutionSlugClient slug={slug} />;
}
