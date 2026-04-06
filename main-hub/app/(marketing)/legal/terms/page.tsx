import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for AI Platform Agency.",
};

const sections = [
  {
    title: "Scope of Services",
    body: "Services are defined in project proposals, statements of work, and written agreements. Any additions or changes require mutual written approval.",
  },
  {
    title: "Commercial Terms",
    body: "Fees, payment schedules, and delivery milestones are specified per engagement. Late payments may delay delivery timelines.",
  },
  {
    title: "Client Responsibilities",
    body: "Clients are responsible for timely feedback, approvals, and access to required systems, content, and stakeholders.",
  },
  {
    title: "Intellectual Property",
    body: "Ownership and IP transfer terms are governed by the signed agreement for each project. Unless otherwise agreed, pre-existing tools and frameworks remain the property of their original owners.",
  },
  {
    title: "Confidentiality",
    body: "Both parties agree to protect confidential information shared during discovery, delivery, and support. NDA terms take precedence where applicable.",
  },
  {
    title: "Warranties and Liability",
    body: "Services are provided with professional care and skill. Liability is limited to the extent permitted by law and as defined in the applicable contract.",
  },
  {
    title: "Termination",
    body: "Either party may terminate according to notice and termination terms in the signed agreement. Outstanding fees for completed work remain payable.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent to hello@aiplatform.io.",
  },
];

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container--narrow">
        <div className="eyebrow" style={{ display: "inline-flex" }}>Legal</div>
        <h1 style={{ fontSize: "clamp(34px,4.5vw,56px)", letterSpacing: "-0.045em", marginBottom: 14 }}>
          Terms of Service
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
