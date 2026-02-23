// Server component — generateStaticParams cannot live in a "use client" file
import IntegrationContent from "./_content";

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

export default function IntegrationSlugPage({ params }: { params: { slug: string } }) {
  return <IntegrationContent slug={params.slug} />;
}