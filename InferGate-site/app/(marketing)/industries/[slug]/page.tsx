import { IndustrySlugClient } from "./client";

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
