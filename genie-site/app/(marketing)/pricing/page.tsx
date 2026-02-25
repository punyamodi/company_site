"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";

const TIERS = [
  {
    name: "Team",
    tagline: "For growing teams getting started with enterprise AI.",
    features: [
      "Up to 50 users",
      "10 custom agents",
      "20 connector integrations",
      "RAG & enterprise search",
      "Web search (configurable)",
      "SSO (SAML/OIDC)",
      "Standard RBAC",
      "Email support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
  {
    name: "Enterprise",
    tagline: "Full-scale deployment for complex organizations.",
    features: [
      "Unlimited users",
      "Unlimited agents & personas",
      "All 40+ connectors",
      "Deep Research & agentic workflows",
      "Code Interpreter",
      "Knowledge Graph",
      "MCP & external actions",
      "Image generation",
      "SCIM provisioning",
      "Advanced RBAC & user groups",
      "Audit logs & query history",
      "Advanced analytics & reporting",
      "Multi-tenant isolation",
      "Token rate-limit controls",
      "Dedicated customer success",
      "Priority SLA",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
  {
    name: "Sovereign",
    tagline: "Air-gapped and classified environments.",
    features: [
      "Everything in Enterprise",
      "Air-gapped deployment",
      "On-premises LLM (Ollama/vLLM)",
      "Zero internet dependency",
      "Data sovereignty guarantee",
      "Classification-aware access control",
      "Custom security architecture review",
      "Dedicated solutions engineering",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80, paddingBottom: 48 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container container--tight" style={{ position: "relative", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Enterprise Pricing</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 20 }}>
              Priced for the<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>scale you need.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 16 }}>
              Genie is priced based on deployment scale, feature set, and organizational requirements. All plans are tailored — talk to our team to understand what fits your organization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {TIERS.map((tier, i) => (
              <motion.div key={tier.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  border: tier.highlighted ? "3px solid var(--nb-ink)" : "2px solid var(--nb-border)",
                  borderRadius: "var(--radius)",
                  boxShadow: tier.highlighted ? "var(--shadow-brutal)" : "var(--shadow-brutal-sm)",
                  background: tier.highlighted ? "var(--nb-ink)" : "var(--nb-bg)",
                  color: tier.highlighted ? "var(--nb-bg)" : "var(--nb-ink)",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}>
                <div>
                  {tier.highlighted && <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--nb-amber)", marginBottom: 8 }}>Most Popular</div>}
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em" }}>{tier.name}</div>
                  <div style={{ fontSize: 14, color: tier.highlighted ? "rgba(250,249,246,0.65)" : "var(--nb-ink-muted)", marginTop: 8, lineHeight: 1.6 }}>{tier.tagline}</div>
                </div>
                <div style={{ padding: "20px 0", borderTop: `1.5px solid ${tier.highlighted ? "rgba(250,249,246,0.2)" : "var(--nb-border)"}`, borderBottom: `1.5px solid ${tier.highlighted ? "rgba(250,249,246,0.2)" : "var(--nb-border)"}` }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: tier.highlighted ? "rgba(250,249,246,0.5)" : "var(--nb-ink-muted)", marginBottom: 4 }}>Custom pricing</div>
                  <div style={{ fontSize: 15, fontWeight: 800 }}>Contact our team for a tailored quote</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {tier.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5 }}>
                      <CheckCircle2 size={14} color={tier.highlighted ? "var(--nb-amber)" : "var(--nb-teal)"} style={{ flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "14px 20px",
                    background: tier.highlighted ? "var(--nb-amber)" : "transparent",
                    border: `2px solid ${tier.highlighted ? "var(--nb-amber)" : tier.highlighted ? "" : "var(--nb-border)"}`,
                    borderRadius: "var(--radius)",
                    fontWeight: 800,
                    fontSize: 14,
                    textDecoration: "none",
                    color: tier.highlighted ? "var(--nb-ink)" : "var(--nb-ink)",
                    boxShadow: tier.highlighted ? "var(--shadow-brutal-sm)" : "none",
                  }}>
                  {tier.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Building2 size={26} color="#fff" />
          </div>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 16 }}>
            Every deployment is different.
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520, margin: "0 auto 32px" }}>
            Pricing is determined by the number of users, connectors, deployment model, and support tier. Our team will propose a package that fits your organization's scale and requirements.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
