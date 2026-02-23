import type { Metadata } from "next";
import { ArrowRight, Shield, Server, Lock, BarChart3, Layers, Users, CheckCircle, Globe } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "AI Platform enterprise capabilities — VPC deployment, SOC 2 compliance, SLA, and dedicated support for regulated industries.",
};

const TIERS = [
  {
    name: "Professional",
    desc: "For scaling engineering teams deploying one or two AI Platform products.",
    features: [
      "Up to 3 products in the suite",
      "Standard SLA (99.9% uptime)",
      "Cloud deployment (AWS, GCP, Azure)",
      "Email & Slack support",
      "Standard onboarding",
      "Monthly billing",
    ],
    cta: "Contact Sales",
  },
  {
    name: "Enterprise",
    desc: "Full suite with dedicated support, advanced compliance, and custom deployment.",
    featured: true,
    features: [
      "All four suite products",
      "Enterprise SLA (99.99% uptime)",
      "VPC / on-premise deployment",
      "Dedicated Customer Success Manager",
      "Priority incident response (1hr SLA)",
      "Custom onboarding & training",
      "Annual billing with multi-year pricing",
      "Custom contract & DPA",
    ],
    cta: "Request Enterprise Demo",
  },
  {
    name: "Government & Regulated",
    desc: "FedRAMP-aligned deployment for government, defense, and highly regulated industries.",
    features: [
      "All enterprise features",
      "Air-gapped deployment options",
      "FedRAMP-aligned controls",
      "ITAR / HIPAA compliance support",
      "Dedicated security review",
      "Custom SLA & data residency",
    ],
    cta: "Contact Sales",
  },
];

const CERTIFICATIONS = [
  { name: "SOC 2 Type II", desc: "Audited security, availability, and confidentiality controls." },
  { name: "HIPAA Ready", desc: "BAA available for healthcare customers." },
  { name: "GDPR Compliant", desc: "EU data processing agreements and data residency." },
  { name: "ISO 27001", desc: "Information security management system certified." },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex" }}>Enterprise</div>
          <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", letterSpacing: "-0.045em", marginBottom: 20, lineHeight: 1, maxWidth: 800 }}>
            Infrastructure built for the{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>most demanding</span>{" "}
            environments.
          </h1>
          <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 640, marginBottom: 40 }}>
            Every AI Platform product is designed for enterprise from the ground up — not retrofitted with enterprise features. Security, compliance, and scale are core, not add-ons.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary">
              Request Enterprise Demo <ArrowRight size={15} />
            </a>
            <a href={`${BASE}/contact/`} className="btn-secondary">
              Talk to an Engineer
            </a>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="section-label">Security & Compliance</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-0.04em", marginBottom: 16, lineHeight: 1.05 }}>
                Compliance certifications your legal team will approve.
              </h2>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 32 }}>
                AI Platform maintains the industry{"'"}s highest security standards. Every product undergoes independent audits, and we provide the documentation your procurement team needs.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <CheckCircle size={18} color="var(--nb-green)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em" }}>{cert.name}</h4>
                      <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", marginTop: 2 }}>{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: Server, title: "VPC & On-Premise", desc: "Deploy every product within your cloud tenant or on-premise. No data leaves your perimeter." },
                { icon: Lock, title: "End-to-End Encryption", desc: "All data encrypted at rest (AES-256) and in transit (TLS 1.3) with customer-managed keys." },
                { icon: Shield, title: "RBAC & Identity Federation", desc: "SAML 2.0, OIDC, Active Directory. Fine-grained role-based access across the entire suite." },
                { icon: BarChart3, title: "Comprehensive Audit Trails", desc: "Immutable audit logs for every AI call, user action, and configuration change." },
                { icon: Globe, title: "Data Residency", desc: "Choose your data region. EU, US, APAC, or air-gapped for government deployments." },
                { icon: Users, title: "Zero-Trust Architecture", desc: "Every service-to-service call is authenticated. No implicit trust within the platform." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="nb-card" style={{ padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                      <Icon size={16} color="var(--nb-ink)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 2 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">Enterprise Pricing</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
              Designed for organizations at every scale.
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 520, margin: "0 auto" }}>
              All pricing is custom and confidential. Contact our sales team to receive a proposal tailored to your organization.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 48 }}>
            {TIERS.map((tier) => (
              <div key={tier.name} className="nb-card" style={{ padding: 32, position: "relative", borderTop: tier.featured ? "4px solid var(--nb-yellow)" : "2px solid var(--nb-border)" }}>
                {tier.featured && (
                  <div style={{ position: "absolute", top: -1, right: 20, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", padding: "3px 10px", fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{tier.name}</h3>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6, marginBottom: 24, minHeight: 48 }}>{tier.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, fontWeight: 500, color: "var(--nb-ink)" }}>
                      <CheckCircle size={13} color="var(--nb-green)" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`${BASE}/contact/`}
                  className={tier.featured ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", justifyContent: "center" }}>
                  {tier.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", padding: "28px 32px", background: "var(--nb-surface)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)" }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--nb-ink-muted)" }}>
              All tiers include access to our enterprise documentation portal, standard integrations, and the AI Platform core APIs.
              <strong style={{ color: "var(--nb-ink)" }}> No public pricing. No self-serve sign-up.</strong> Enterprise-only, by design.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container--tight" style={{ textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.045em", color: "var(--nb-bg)", marginBottom: 16, lineHeight: 1 }}>
            Ready to evaluate AI Platform?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(250,248,243,0.7)", marginBottom: 36, lineHeight: 1.65 }}>
            Our team will guide you through a tailored technical evaluation — aligned to your architecture and compliance requirements.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary">
              Schedule a Technical Review <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
