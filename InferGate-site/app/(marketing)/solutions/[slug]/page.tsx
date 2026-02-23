import { SolutionSlugClient } from "./client";

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
