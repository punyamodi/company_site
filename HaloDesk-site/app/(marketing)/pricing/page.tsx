import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Pricing — HaloDesk",
  description: "HaloDesk is available exclusively on enterprise contracts. Contact our sales team to scope a deployment matched to your organization.",
};

const TIERS = [
  {
    name: "Professional",
    tagline: "For growing support teams ready to scale.",
    description: "Full omnichannel inbox, automation, analytics, and Captain AI. Designed for organizations moving from fragmented tools to a unified platform.",
    features: [
      "All 11 channel integrations",
      "Captain AI Agent",
      "Workflow Automation",
      "Advanced Analytics",
      "Sentiment Analysis",
      "Customer Health Scores",
      "Knowledge Base",
      "Campaign Manager",
      "Proactive Messaging",
      "Standard SLA policies",
      "API & Webhooks",
    ],
    notIncluded: [
      "IP Access Control",
      "Custom Data Retention Policies",
      "GDPR Data Exports",
      "Dedicated Support Engineer",
      "Custom SLA Contract",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
  {
    name: "Enterprise",
    tagline: "For organizations that need control at every level.",
    description: "Everything in Professional, plus the security, compliance, and governance controls that regulated industries and large organizations demand.",
    features: [
      "Everything in Professional",
      "IP Access Control (CIDR rules)",
      "Custom Data Retention Policies",
      "GDPR Data Exports & Erasure",
      "Contact Anonymization",
      "Advanced SLA Management",
      "Webhook Event Audit Logs",
      "Role-Based Access Control",
      "Agent Shift Scheduling",
      "Dedicated Solutions Engineer",
      "Custom SLA Contract",
      "Priority Support Queue",
      "Custom Integrations",
    ],
    notIncluded: [],
    cta: "Talk to Enterprise Sales",
    highlight: true,
  },
];

const COMPARISON = [
  { category: "Core Platform", features: [
    { name: "Omnichannel Inbox (11 channels)", pro: true, ent: true },
    { name: "Captain AI Agent", pro: true, ent: true },
    { name: "Workflow Automation", pro: true, ent: true },
    { name: "Sentiment Analysis", pro: true, ent: true },
    { name: "Customer Health Scores", pro: true, ent: true },
    { name: "Knowledge Base", pro: true, ent: true },
    { name: "Campaign Manager", pro: true, ent: true },
  ]},
  { category: "Analytics", features: [
    { name: "Real-time conversation analytics", pro: true, ent: true },
    { name: "Agent performance reports", pro: true, ent: true },
    { name: "SLA compliance dashboards", pro: "Basic", ent: true },
    { name: "Sentiment distribution reports", pro: true, ent: true },
    { name: "Health score dashboards", pro: true, ent: true },
  ]},
  { category: "Security & Compliance", features: [
    { name: "IP Access Control", pro: false, ent: true },
    { name: "Data Retention Policies", pro: false, ent: true },
    { name: "GDPR Data Exports", pro: false, ent: true },
    { name: "Contact Anonymization", pro: false, ent: true },
    { name: "Webhook Audit Logs", pro: false, ent: true },
    { name: "Role-Based Access Control", pro: "Standard", ent: "Advanced" },
  ]},
  { category: "Support & SLA", features: [
    { name: "SLA Policies", pro: "Standard", ent: "Custom" },
    { name: "Support Access", pro: "Team Queue", ent: "Priority + Dedicated" },
    { name: "Onboarding", pro: "Self-Serve", ent: "Guided Implementation" },
    { name: "Solutions Engineer", pro: false, ent: true },
    { name: "Custom Integrations", pro: false, ent: true },
  ]},
];

export default function PricingPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "88px 24px 80px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }}/>
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <div className="eyebrow anim-fade-up">Enterprise Pricing</div>
          <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(48px,7vw,96px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.9, maxWidth: 800, margin: "0 auto 28px" }}>
            Pricing scoped to<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>your requirements.</span>
          </h1>
          <p className="anim-fade-up delay-200" style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.72, maxWidth: 560, margin: "0 auto" }}>
            HaloDesk is offered exclusively through enterprise agreements. Our sales team will scope a contract matched to your team size, channel mix, and compliance requirements.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 900, margin: "0 auto" }}>
            {TIERS.map((tier) => (
              <div key={tier.name} style={{
                border: `2px solid ${tier.highlight ? "var(--nb-teal)" : "var(--nb-border)"}`,
                borderRadius: "var(--radius)",
                padding: "40px 36px",
                background: tier.highlight ? "var(--nb-invert)" : "var(--nb-bg)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}>
                {tier.highlight && (
                  <div style={{ position: "absolute", top: -1, right: 24, background: "var(--nb-teal)", color: "#fff", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: "0 0 var(--radius) var(--radius)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Recommended
                  </div>
                )}
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", color: tier.highlight ? "#fff" : "var(--nb-ink)", marginBottom: 8 }}>{tier.name}</h2>
                <p style={{ fontSize: 13, fontStyle: "italic", fontFamily: "var(--font-fraunces, serif)", color: tier.highlight ? "var(--nb-teal)" : "var(--nb-ink-muted)", marginBottom: 16 }}>{tier.tagline}</p>
                <p style={{ fontSize: 13.5, color: tier.highlight ? "rgba(255,255,255,0.65)" : "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 28 }}>{tier.description}</p>

                <div style={{ flex: 1, marginBottom: 28 }}>
                  {tier.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, marginBottom: 10, color: tier.highlight ? "rgba(255,255,255,0.85)" : "var(--nb-ink)" }}>
                      <Check size={14} color="var(--nb-teal)" style={{ flexShrink: 0 }}/>
                      {f}
                    </div>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, marginBottom: 10, color: "var(--nb-ink-muted)", opacity: 0.5 }}>
                      <X size={14} color="#aaa" style={{ flexShrink: 0 }}/>
                      {f}
                    </div>
                  ))}
                </div>

                <Link href="/contact" className={tier.highlight ? "btn-invert" : "btn-primary"} style={{ textAlign: "center", justifyContent: "center" }}>
                  {tier.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section section--surface">
        <div className="container">
          <p className="section-label">Feature Comparison</p>
          <h2 style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            Everything, side by side.
          </h2>
          <div style={{ border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", background: "var(--nb-invert)", color: "#fff", padding: "16px 24px", borderBottom: "2px solid var(--nb-border)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Feature</div>
              <div style={{ fontSize: 13, fontWeight: 800, textAlign: "center" }}>Professional</div>
              <div style={{ fontSize: 13, fontWeight: 800, textAlign: "center", color: "var(--nb-teal)" }}>Enterprise</div>
            </div>

            {COMPARISON.map((cat) => (
              <div key={cat.category}>
                <div style={{ padding: "10px 24px", background: "var(--nb-surface)", borderBottom: "1px solid var(--nb-border-faint)", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--nb-teal)" }}>
                  {cat.category}
                </div>
                {cat.features.map((f, i) => (
                  <div key={f.name} style={{
                    display: "grid", gridTemplateColumns: "1fr 140px 140px",
                    padding: "14px 24px",
                    background: i % 2 === 0 ? "var(--nb-bg)" : "transparent",
                    borderBottom: "1px solid var(--nb-border-faint)",
                  }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600 }}>{f.name}</div>
                    <div style={{ textAlign: "center" }}>
                      {f.pro === true ? <Check size={16} color="#059669" style={{ display: "inline" }}/> :
                       f.pro === false ? <X size={16} color="#aaa" style={{ display: "inline" }}/> :
                       <span style={{ fontSize: 11, fontWeight: 700, color: "var(--nb-ink-muted)" }}>{f.pro}</span>}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      {f.ent === true ? <Check size={16} color="var(--nb-teal)" style={{ display: "inline" }}/> :
                       f.ent === false ? <X size={16} color="#aaa" style={{ display: "inline" }}/> :
                       <span style={{ fontSize: 11, fontWeight: 700, color: "var(--nb-teal)" }}>{f.ent}</span>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included in every contract */}
      <section className="section">
        <div className="container">
          <p className="section-label">What&apos;s Always Included</p>
          <h2 style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48, lineHeight: 1.05 }}>
            Every contract comes with<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>more than software.</span>
          </h2>
          <div className="cards-3" style={{ gap: 16 }}>
            {[
              { title: "Guided Onboarding", desc: "A dedicated implementation team to configure inboxes, automations, and integrations to match your existing workflows." },
              { title: "Solutions Engineer", desc: "Enterprise contracts include a named solutions engineer for the duration of your implementation and beyond." },
              { title: "SLA Contract", desc: "Every enterprise agreement includes uptime SLA commitments and escalation paths for critical incidents." },
              { title: "Data Processing Agreement", desc: "Full DPA available as part of every enterprise contract for GDPR and regulatory compliance." },
              { title: "Custom Integration Support", desc: "Our engineering team can develop bespoke integrations with your existing CRM, helpdesk, or data warehouse." },
              { title: "Training Program", desc: "Agent and administrator training tailored to your team structure, workflows, and HaloDesk configuration." },
            ].map((f) => (
              <div key={f.title} className="nb-card" style={{ padding: "24px 20px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 12.5, color: "var(--nb-ink-muted)", lineHeight: 1.72 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert" style={{ textAlign: "center" }}>
        <div className="container container--tight">
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.045em", color: "#fff", marginBottom: 20, lineHeight: 0.95 }}>
            Let&apos;s build a<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>contract that fits.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
            Talk to our enterprise sales team. No quotes on the first call — just a genuine conversation about your requirements.
          </p>
          <Link href="/contact" className="btn-invert" style={{ fontSize: 16 }}>
            Talk to Enterprise Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
