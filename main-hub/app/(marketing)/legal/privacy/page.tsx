import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AI Platform Agency.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you contact us, we may collect your name, email address, company name, project details, and communication preferences. We also collect basic analytics data to understand site usage and improve performance.",
  },
  {
    title: "How We Use Information",
    body: "We use information to respond to enquiries, scope projects, provide services, communicate updates, improve our website, and meet legal obligations. We do not sell personal information.",
  },
  {
    title: "Data Sharing",
    body: "We only share information with service providers needed to operate our business (for example hosting, email, and analytics). These providers are contractually required to protect your data.",
  },
  {
    title: "Data Retention",
    body: "We retain enquiry and project data only as long as needed for delivery, support, legal, and operational requirements. If you request deletion, we will remove eligible data from our systems.",
  },
  {
    title: "Security",
    body: "We apply industry-standard technical and organisational safeguards to protect your data from unauthorised access, disclosure, or loss.",
  },
  {
    title: "Your Rights",
    body: "Depending on your location, you may have rights to access, correct, export, or delete your personal data. Contact us to make a request and we will respond in a reasonable timeframe.",
  },
  {
    title: "Contact",
    body: "For privacy requests, contact hello@aiplatform.io with the subject line \"Privacy Request\".",
  },
];

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container--narrow">
        <div className="eyebrow" style={{ display: "inline-flex" }}>Legal</div>
        <h1 style={{ fontSize: "clamp(34px,4.5vw,56px)", letterSpacing: "-0.045em", marginBottom: 14 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", marginBottom: 36 }}>
          Last updated: April 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {sections.map((section) => (
            <article key={section.title} className="nb-card" style={{ padding: 22 }}>
              <h2 style={{ fontSize: 20, letterSpacing: "-0.03em", marginBottom: 8 }}>{section.title}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--nb-ink-muted)" }}>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
