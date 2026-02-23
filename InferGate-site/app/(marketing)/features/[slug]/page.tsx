import { notFound } from "next/navigation";
import { FeatureContent } from "./client";

const SLUGS = [
  "routing","fallback","caching","observability","rate-limiting",
  "access-control","guardrails","mcp-gateway","adaptive-load-balancing",
  "clustering","audit-logs","vault","plugins",
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  if (!SLUGS.includes(params.slug)) notFound();
  return <FeatureContent slug={params.slug} />;
}
