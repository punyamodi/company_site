import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Server,
  Cloud,
  Building2,
  Key,
  Users,
  FileText,
  Lock,
  Globe,
  ArrowRight,
  CheckCircle,
  Layers,
} from "lucide-react";

const DEPLOYMENT_OPTIONS = [
  {
    icon: Cloud,
    title: "Managed Cloud",
    description:
      "Converse hosts, operates, and scales the infrastructure. Your team focuses on building voice experiences. Zero infrastructure overhead with enterprise SLAs and dedicated support.",
    highlights: ["Multi-region availability", "Automatic scaling", "Managed upgrades", "24×7 ops support", "Per-tenant isolation"],
    badge: "#7C3AED",
  },
  {
    icon: Server,
    title: "Private Cloud",
    description:
      "Converse deployed exclusively in your cloud account (AWS, Azure, or GCP). Your VPC, your keys, your data. Fully isolated from other tenants with dedicated capacity.",
    highlights: ["Your cloud account", "VPC-native networking", "BYO KMS encryption", "Custom domain", "Data never leaves your cloud"],
    badge: "#2563EB",
  },
  {
    icon: Building2,
    title: "On-Premise",
    description:
      "Air-gapped deployment on your hardware or a co-location facility. No internet egress required. Converse's GPU-optimized containers run on-prem for maximum data sovereignty.",
    highlights: ["No internet dependency", "Air-gapped option", "GPU-optimized containers", "Custom hardware sizing", "Full data sovereignty"],
    badge: "#059669",
  },
];

const SECURITY_FEATURES = [
  { icon: Key, title: "SSO / SAML 2.0", description: "Connect to Okta, Azure AD, Ping, or any SAML 2.0 IdP. Enforce MFA at the identity provider layer." },
  { icon: Users, title: "Role-Based Access Control", description: "Granular RBAC across projects, pipelines, API keys, and billing. Custom role definitions with least-privilege defaults." },
  { icon: FileText, title: "Audit Logging", description: "Immutable audit trail for every API call, configuration change, and pipeline invocation. Exportable to SIEM systems." },
  { icon: Globe, title: "Data Residency", description: "Pin tenant data to specific regions (US, EU, APAC). Meet data localization requirements without custom engineering." },
  { icon: Lock, title: "Vault Support", description: "Secrets managed via HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault. No secrets in environment variables." },
  { icon: Layers, title: "Private Networking", description: "VPC peering, PrivateLink, and ExpressRoute support. API endpoints never traverse the public internet." },
];

const COMPLIANCE_ITEMS = [
  { name: "SOC 2 Type II", status: "Certified", color: "#059669", description: "Annual third-party audit of security, availability, and confidentiality controls." },
  { name: "HIPAA", status: "BAA Available", color: "#7C3AED", description: "Business Associate Agreements available for healthcare customers. PHI handling controls documented." },
  { name: "GDPR", status: "Compliant", color: "#2563EB", description: "Data processing agreements, right-to-erasure workflows, and EU data residency options." },
  { name: "ISO 27001", status: "In Progress", color: "#D97706", description: "Information security management system certification underway." },
];

const SLA_TIERS = [
  { tier: "Professional", uptime: "99.9%", support: "Business hours", rto: "4 hours", rpo: "1 hour" },
  { tier: "Enterprise", uptime: "99.95%", support: "24×7 dedicated", rto: "1 hour", rpo: "15 minutes" },
  { tier: "Enterprise+", uptime: "99.99%", support: "24×7 + on-call CSM", rto: "30 minutes", rpo: "5 minutes" },
];

const FEATURE_GRID = [
  "SSO / SAML 2.0",
  "RBAC with custom roles",
  "Immutable audit logs",
  "Data residency controls",
  "Private cloud deployment",
  "On-premise air-gapped",
  "VPC / PrivateLink support",
  "Vault-based secret management",
  "Dedicated CSM",
  "SLA with financial penalties",
  "Custom contract terms",
  "Professional services",
  "Priority support queue",
  "Multi-region redundancy",
  "BYO encryption keys",
  "HIPAA BAA available",
];

export const metadata: Metadata = {
  title: "Enterprise | Converse",
  description: "Enterprise-grade voice AI platform with advanced security, compliance, and scalability for large organizations.",
  openGraph: {
    title: "Enterprise | Converse",
    description: "Enterprise-grade voice AI platform with advanced security, compliance, and scalability for large organizations.",
    type: "website",
  },
};

export default function EnterprisePage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative", maxWidth: "780px" }}>
            <span className="eyebrow anim-fade-up">Enterprise</span>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}
            >
              Enterprise-grade voice AI.{" "}
              <span style={{ color: "var(--nb-violet)" }}>Built for regulated industries.</span>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.2rem", marginTop: "1.5rem", maxWidth: "620px", lineHeight: 1.7, opacity: 0.8 }}
            >
              SSO, RBAC, audit logs, private cloud deployment, data residency, and SLAs.
              Converse meets your security and compliance requirements without compromising developer velocity.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
              </Link>
              <Link href="/enterprise/security" className="btn-secondary">
                Security Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Deployment</span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 900, marginTop: "0.5rem" }}>Three deployment models</h2>
            <p style={{ marginTop: "0.75rem", opacity: 0.65, maxWidth: "520px", margin: "0.75rem auto 0" }}>
              Choose the model that matches your data sovereignty, infrastructure preferences, and
              operational capacity. Migrate between models as your requirements evolve.
            </p>
          </div>
          <div className="cards-3" style={{ gap: "1.5rem" }}>
            {DEPLOYMENT_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.title} className="nb-card">
                  <div
                    className="feature-icon"
                    style={{ background: option.badge, color: "#fff", marginBottom: "1rem", width: "48px", height: "48px" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.6rem" }}>{option.title}</h3>
                  <p style={{ opacity: 0.75, lineHeight: 1.65, fontSize: "0.9rem", marginBottom: "1.25rem" }}>{option.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    {option.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                        <CheckCircle size={14} color={option.badge} />
                        <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Security & Compliance</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginTop: "0.5rem" }}>Enterprise security controls</h2>
          </div>
          <div className="cards-2" style={{ gap: "1.25rem" }}>
            {SECURITY_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="feature-icon" style={{ flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.35rem" }}>{f.title}</h3>
                    <p style={{ opacity: 0.7, fontSize: "0.9rem", lineHeight: 1.6 }}>{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>Complete enterprise feature list</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {FEATURE_GRID.map((f) => (
              <div
                key={f}
                style={{
                  border: "2px solid #000",
                  padding: "0.75rem 1rem",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  boxShadow: "3px 3px 0 #000",
                }}
              >
                <CheckCircle size={16} color="var(--nb-violet)" />
                <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Compliance</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginTop: "0.5rem" }}>Regulatory compliance</h2>
          </div>
          <div className="cards-2" style={{ gap: "1.25rem" }}>
            {COMPLIANCE_ITEMS.map((c) => (
              <div key={c.name} className="nb-card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontWeight: 900, fontSize: "1.05rem" }}>{c.name}</h3>
                    <span style={{ background: c.color, color: "#fff", border: "1.5px solid #000", padding: "0.15rem 0.55rem", fontSize: "0.72rem", fontWeight: 700 }}>
                      {c.status}
                    </span>
                  </div>
                  <p style={{ opacity: 0.7, fontSize: "0.9rem", lineHeight: 1.6 }}>{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Table */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <span className="section-label">SLAs</span>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem" }}>Service Level Agreements</h2>
          </div>
          <div style={{ border: "2px solid #000" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
              <thead>
                <tr style={{ background: "#111", color: "#fff" }}>
                  {["Tier", "Uptime SLA", "Support", "RTO", "RPO"].map((h) => (
                    <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SLA_TIERS.map((row, i) => (
                  <tr key={row.tier} style={{ borderBottom: i < SLA_TIERS.length - 1 ? "1.5px solid #000" : "none", background: i % 2 === 0 ? "#fff" : "#FAFAF8" }}>
                    <td style={{ padding: "0.75rem 1rem", fontWeight: 800 }}>{row.tier}</td>
                    <td style={{ padding: "0.75rem 1rem", fontFamily: "monospace", color: "#059669", fontWeight: 700 }}>{row.uptime}</td>
                    <td style={{ padding: "0.75rem 1rem", fontSize: "0.9rem" }}>{row.support}</td>
                    <td style={{ padding: "0.75rem 1rem", fontFamily: "monospace", fontWeight: 600 }}>{row.rto}</td>
                    <td style={{ padding: "0.75rem 1rem", fontFamily: "monospace", fontWeight: 600 }}>{row.rpo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <Shield size={44} color="var(--nb-violet)" style={{ margin: "0 auto 1.5rem" }} />
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff" }}>
            Ready to deploy in your environment?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.1rem", maxWidth: "540px", margin: "1rem auto 0" }}>
            Our enterprise team will walk you through deployment options, compliance documentation,
            and a proof-of-concept tailored to your infrastructure.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
            <Link href="/contact" className="btn-primary">
              Contact Sales <ArrowRight size={16} style={{ marginLeft: "0.4rem" }} />
            </Link>
            <Link href="/enterprise/security" className="btn-secondary" style={{ color: "#fff", borderColor: "#fff" }}>
              View Security Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
