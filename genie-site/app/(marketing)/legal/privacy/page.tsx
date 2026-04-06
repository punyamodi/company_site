import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Genie",
  description: "How Genie collects, uses, and protects your data. Read our privacy policy for full details on data handling and your rights.",
  openGraph: {
    title: "Privacy Policy | Genie",
    description: "How Genie collects, uses, and protects your data. Read our privacy policy for full details on data handling and your rights.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)", padding: "80px 0" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 16 }}>Legal</div>
        <h1 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 48 }}>Last updated: January 2025</p>

        {[
          {
            title: "1. Information We Collect",
            body: `We collect information you provide directly to us, such as when you create an account, contact us for support, or fill out a form on our website. This includes name, email address, company name, and any communications you send us.\n\nWhen you use Genie Enterprise, we also collect usage data to operate and improve the service, including query logs (which remain within your tenanted environment), connector sync metadata, and platform usage analytics.`,
          },
          {
            title: "2. How We Use Your Information",
            body: `We use collected information to provide, maintain, and improve the Genie platform; to process transactions and send related information; to respond to comments, questions, and requests; to send technical notices, updates, and security alerts; and to monitor and analyze trends and usage.`,
          },
          {
            title: "3. Data Isolation and Tenancy",
            body: `Genie Enterprise is a multi-tenant platform with strict data isolation. Your organizational data — including documents ingested from connected sources, user queries, and agent configurations — is scoped to your tenant and is never accessible to other customers or used to train shared models.\n\nFor air-gapped and self-managed deployments, all data remains entirely within your infrastructure and is never transmitted to Genie systems.`,
          },
          {
            title: "4. No Model Training on Your Data",
            body: `We do not use your organizational content, user queries, or any data ingested from your connected sources to train, fine-tune, or improve any AI model — whether operated by Genie or a third-party LLM provider. Your data is used solely for retrieval in service of your users' queries within your tenanted environment.`,
          },
          {
            title: "5. Data Retention",
            body: `We retain personal information for as long as necessary to provide the services and as required by applicable law. You may request deletion of your personal data at any time by contacting our privacy team. For enterprise deployments, data retention policies are configurable and can be set to meet your organization's requirements.`,
          },
          {
            title: "6. Security",
            body: `We implement industry-standard security measures including encryption at rest (AES-256) and in transit (TLS 1.2+), access controls, audit logging, and regular security assessments. Our enterprise security architecture is documented separately and available upon request for enterprise evaluations.`,
          },
          {
            title: "7. Third-Party Services",
            body: `When you use Genie with a cloud-hosted LLM provider (e.g., OpenAI, Anthropic, Azure OpenAI), queries are sent to that provider in accordance with your configured API integration. We recommend reviewing the privacy policies of your chosen LLM provider. For air-gapped deployments, no data is sent to external LLM providers.`,
          },
          {
            title: "8. Your Rights",
            body: `Depending on your jurisdiction, you may have rights to access, correct, delete, or port your personal data. To exercise these rights, contact us at privacy@genie.ai. We will respond to requests within 30 days.`,
          },
          {
            title: "9. Contact",
            body: `For privacy-related questions, contact our privacy team at privacy@genie.ai. For enterprise security reviews and compliance inquiries, contact your dedicated customer success manager or reach us at security@genie.ai.`,
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e5e7eb" }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>{section.title}</h2>
            {section.body.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: "#374151", lineHeight: 1.75, marginBottom: 12 }}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
