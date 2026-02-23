export default function TermsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)", padding: "80px 0" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 16 }}>Legal</div>
        <h1 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 12 }}>Terms of Service</h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 48 }}>Last updated: January 2025</p>

        {[
          {
            title: "1. Acceptance of Terms",
            body: `By accessing or using Onyx (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.`,
          },
          {
            title: "2. Description of Service",
            body: `Onyx is an enterprise AI platform that enables organizations to connect their knowledge sources, build AI agents, and provide intelligent search and research capabilities to their teams. The Service is offered as a cloud-hosted managed service or as a self-managed software platform deployed in your own infrastructure.`,
          },
          {
            title: "3. Enterprise Agreements",
            body: `Enterprise customers enter into a separate Master Service Agreement (MSA) or Order Form that governs the specific terms of their deployment, including service levels, data processing terms, security commitments, and commercial terms. In the event of a conflict between these Terms and an executed enterprise agreement, the enterprise agreement controls.`,
          },
          {
            title: "4. Your Data",
            body: `You retain all rights to your organizational data, documents, and content ("Customer Data") that you provide to or access through the Service. You grant Onyx a limited license to process Customer Data solely to provide the Service.\n\nOnyx does not use Customer Data to train AI models. For the avoidance of doubt, documents synced from your connected sources, user queries, and agent outputs are Customer Data and are subject to the protections described in our Privacy Policy.`,
          },
          {
            title: "5. Acceptable Use",
            body: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to: use the Service to violate any applicable law or regulation; attempt to gain unauthorized access to other users' data or the Service's underlying systems; use the Service to generate content that is harmful, fraudulent, or violates third-party rights; or interfere with or disrupt the integrity or performance of the Service.`,
          },
          {
            title: "6. Service Levels",
            body: `Service availability and support response time commitments are defined in the enterprise agreement applicable to your deployment. Standard cloud-hosted deployments are subject to Onyx's published Service Level Agreement. Self-managed deployments are not covered by cloud-hosted SLA commitments.`,
          },
          {
            title: "7. Intellectual Property",
            body: `Onyx and its licensors own all rights, title, and interest in and to the Service, including all intellectual property rights. These Terms do not grant you any right to use Onyx's trademarks, logos, or brand identifiers.`,
          },
          {
            title: "8. Limitation of Liability",
            body: `To the maximum extent permitted by applicable law, Onyx's total liability for claims arising from these Terms or the Service shall not exceed the amounts paid by you in the twelve months preceding the claim. Onyx shall not be liable for any indirect, incidental, special, consequential, or punitive damages.`,
          },
          {
            title: "9. Modifications",
            body: `We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the "Last updated" date at the top of this page. Continued use of the Service after any modification constitutes acceptance of the new Terms.`,
          },
          {
            title: "10. Contact",
            body: `Questions about these Terms should be directed to legal@onyx.ai.`,
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
