import Link from "next/link";
import {
  Shield,
  Lock,
  Key,
  Eye,
  Server,
  Globe,
  CheckCircle,
  ArrowRight,
  FileText,
  AlertTriangle,
  Layers,
} from "lucide-react";

const SECURITY_CONTROLS = [
  {
    icon: Lock,
    title: "TLS 1.3 Everywhere",
    description:
      "All API endpoints, WebSocket connections, and WebRTC signaling are enforced on TLS 1.3. Older protocol versions are rejected at the load balancer. Certificate management is automated via ACME.",
    category: "Encryption",
  },
  {
    icon: Shield,
    title: "WebRTC Encryption",
    description:
      "All WebRTC media streams are encrypted via DTLS-SRTP. Key exchange happens per-session through the ICE/DTLS handshake, ensuring forward secrecy even if session credentials are later compromised.",
    category: "Encryption",
  },
  {
    icon: Key,
    title: "Vault-Based Secret Management",
    description:
      "API keys, provider credentials, and signing secrets are stored in HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault depending on your deployment model. No secrets ever touch environment variables or config files.",
    category: "Secrets",
  },
  {
    icon: Eye,
    title: "Immutable Audit Logs",
    description:
      "Every API call, pipeline invocation, configuration change, and administrative action is logged to an append-only audit trail. Logs are exportable to your SIEM in CEF, JSON, or Parquet format.",
    category: "Observability",
  },
  {
    icon: FileText,
    title: "RBAC with Least Privilege",
    description:
      "Role-based access control with fine-grained permission scopes across projects, pipelines, API keys, and billing. Custom roles can restrict access to specific resource types and actions.",
    category: "Access Control",
  },
  {
    icon: Layers,
    title: "SSO / SAML 2.0",
    description:
      "Connect to any SAML 2.0-compliant identity provider: Okta, Azure AD, Ping Identity, OneLogin. SCIM 2.0 for automated user provisioning and deprovisioning.",
    category: "Identity",
  },
  {
    icon: Server,
    title: "VPC Deployment",
    description:
      "Private cloud and on-premise deployments run entirely within your VPC. PrivateLink (AWS), Private Service Connect (GCP), and Private Endpoints (Azure) ensure traffic never traverses the public internet.",
    category: "Network",
  },
  {
    icon: Globe,
    title: "Data Residency",
    description:
      "Tenant data is pinned to your selected region. Data never replicates cross-region without explicit consent. Available in US (us-east-1, us-west-2), EU (eu-west-1), and APAC (ap-southeast-1).",
    category: "Compliance",
  },
];

const COMPLIANCE_CERTS = [
  {
    name: "SOC 2 Type II",
    status: "Certified",
    description:
      "Annual audit by an independent CPA firm covering the Trust Services Criteria for security, availability, and confidentiality. Report available under NDA.",
    detail: "Covers security, availability, confidentiality, processing integrity",
    color: "#059669",
  },
  {
    name: "HIPAA",
    status: "BAA Available",
    description:
      "Business Associate Agreements are available for healthcare customers. Converse maintains the technical and administrative safeguards required under the HIPAA Security Rule.",
    detail: "PHI encryption, access controls, breach notification procedures",
    color: "#7C3AED",
  },
  {
    name: "GDPR",
    status: "Compliant",
    description:
      "Data Processing Agreements available for EU customers. Right-to-erasure workflows implemented. EU-only data residency option. No data transfers to non-adequate countries without SCCs.",
    detail: "DPA available, EU residency option, data deletion workflows",
    color: "#2563EB",
  },
  {
    name: "ISO 27001",
    status: "In Progress",
    description:
      "ISO 27001 information security management certification is currently in progress. Expected completion in 2025. Gap analysis and remediation plan available on request.",
    detail: "Expected certification Q4 2025",
    color: "#D97706",
  },
];

const THREAT_MITIGATIONS = [
  { threat: "API Key Leakage", mitigation: "Key rotation, scoped permissions, automatic expiry, audit trail" },
  { threat: "Man-in-the-Middle", mitigation: "TLS 1.3 enforcement, HSTS, certificate pinning option" },
  { threat: "Eavesdropping on Voice", mitigation: "DTLS-SRTP for all WebRTC media, encrypted transport for WS audio" },
  { threat: "Unauthorized Pipeline Access", mitigation: "RBAC, API key scoping, network-level isolation" },
  { threat: "Data Exfiltration", mitigation: "VPC confinement, egress filtering, audit logs with anomaly alerts" },
  { threat: "Supply Chain Attack", mitigation: "SBOM generation, signed container images, dependency scanning in CI" },
];

export default function EnterpriseSecurityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative", maxWidth: "780px" }}>
            <span className="eyebrow anim-fade-up">Enterprise Security</span>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}
            >
              Security architecture built for{" "}
              <span style={{ color: "var(--nb-violet)" }}>regulated enterprises.</span>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.15rem", marginTop: "1.5rem", maxWidth: "620px", lineHeight: 1.7, opacity: 0.8 }}
            >
              TLS 1.3 throughout, encrypted WebRTC media, RBAC, SSO/SAML, vault-based secrets,
              audit logs, VPC deployment, and data residency controls. SOC 2 Type II certified.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
              </Link>
              <Link href="/enterprise" className="btn-secondary">Enterprise Overview</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance badges */}
      <section style={{ background: "#111", padding: "1.5rem 0", borderTop: "2px solid #000", borderBottom: "2px solid #000" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap", alignItems: "center" }}>
            {COMPLIANCE_CERTS.map((c) => (
              <div key={c.name} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "10px", height: "10px", background: c.color, border: "1.5px solid #fff", borderRadius: "50%" }} />
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>{c.name}</span>
                <span style={{ background: c.color, color: "#fff", padding: "0.1rem 0.45rem", fontSize: "0.68rem", fontWeight: 700, border: "1px solid rgba(255,255,255,0.3)" }}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture SVG */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Architecture</span>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem", lineHeight: 1.2 }}>
                Defense in depth at every layer
              </h2>
              <p style={{ marginTop: "1rem", lineHeight: 1.7, opacity: 0.75 }}>
                Converse applies security controls at the network, application, and data layers.
                No single point of failure. Compromising one layer does not expose another.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "1.5rem" }}>
                {["Network layer: VPC isolation, PrivateLink", "Transport layer: TLS 1.3, DTLS-SRTP", "Application layer: RBAC, SAML, audit logs", "Data layer: Vault secrets, regional residency"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <CheckCircle size={17} color="var(--nb-violet)" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.93rem", fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Security SVG */}
            <div className="nb-card" style={{ padding: "1.5rem" }}>
              <svg viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Network Layer */}
                <rect x="10" y="10" width="360" height="260" rx="0" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="6 3" />
                <text x="20" y="25" fontSize="9" fill="#7C3AED" fontWeight="bold">NETWORK LAYER — VPC Isolation</text>
                {/* Transport Layer */}
                <rect x="25" y="35" width="330" height="210" rx="0" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="5 3" />
                <text x="35" y="50" fontSize="9" fill="#2563EB" fontWeight="bold">TRANSPORT — TLS 1.3 / DTLS-SRTP</text>
                {/* App Layer */}
                <rect x="40" y="60" width="300" height="165" rx="0" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" />
                <text x="50" y="75" fontSize="9" fill="#059669" fontWeight="bold">APPLICATION — RBAC / SAML / Audit</text>
                {/* Core */}
                <rect x="100" y="90" width="180" height="110" fill="#111" stroke="#000" strokeWidth="2.5" />
                <text x="190" y="120" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">CONVERSE</text>
                <text x="190" y="137" textAnchor="middle" fill="#fff" fontSize="9">PIPELINE RUNTIME</text>
                <text x="190" y="152" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Vault-backed secrets</text>
                <text x="190" y="165" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Immutable audit trail</text>
                <text x="190" y="178" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Data residency enforced</text>
                {/* External labels */}
                <rect x="10" y="240" width="80" height="24" fill="#F5F0FF" stroke="#000" strokeWidth="1.5" />
                <text x="50" y="256" textAnchor="middle" fontSize="8" fontWeight="bold">IdP (SSO)</text>
                <line x1="90" y1="252" x2="100" y2="160" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="3 2" />
                <rect x="290" y="240" width="80" height="24" fill="#F5F0FF" stroke="#000" strokeWidth="1.5" />
                <text x="330" y="256" textAnchor="middle" fontSize="8" fontWeight="bold">Vault / KMS</text>
                <line x1="290" y1="252" x2="280" y2="165" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="3 2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Security Controls */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>Security controls in detail</h2>
          </div>
          <div className="cards-2" style={{ gap: "1.25rem" }}>
            {SECURITY_CONTROLS.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="nb-card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="feature-icon" style={{ flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.35rem" }}>
                      <h3 style={{ fontWeight: 800, fontSize: "1rem" }}>{c.title}</h3>
                      <span style={{ background: "#F5F0FF", border: "1px solid #000", padding: "0.1rem 0.45rem", fontSize: "0.68rem", fontWeight: 700, color: "var(--nb-violet)" }}>
                        {c.category}
                      </span>
                    </div>
                    <p style={{ opacity: 0.72, fontSize: "0.88rem", lineHeight: 1.65 }}>{c.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Details */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Compliance</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginTop: "0.5rem" }}>Compliance certifications</h2>
          </div>
          <div className="cards-2" style={{ gap: "1.25rem" }}>
            {COMPLIANCE_CERTS.map((c) => (
              <div key={c.name} className="nb-card">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontWeight: 900, fontSize: "1.1rem" }}>{c.name}</h3>
                  <span style={{ background: c.color, color: "#fff", border: "1.5px solid #000", padding: "0.2rem 0.6rem", fontSize: "0.72rem", fontWeight: 700 }}>
                    {c.status}
                  </span>
                </div>
                <p style={{ opacity: 0.75, lineHeight: 1.65, marginBottom: "0.75rem", fontSize: "0.92rem" }}>{c.description}</p>
                <div style={{ background: "#F5F0FF", border: "1.5px solid #000", padding: "0.6rem 0.9rem", fontSize: "0.82rem", fontWeight: 600, color: "var(--nb-violet)" }}>
                  {c.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Mitigations */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <span className="section-label">Threat Model</span>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem" }}>Threat mitigations</h2>
          </div>
          <div style={{ border: "2px solid #000" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
              <thead>
                <tr style={{ background: "#111", color: "#fff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>Threat</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>Mitigation</th>
                </tr>
              </thead>
              <tbody>
                {THREAT_MITIGATIONS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < THREAT_MITIGATIONS.length - 1 ? "1.5px solid #000" : "none", background: i % 2 === 0 ? "#fff" : "#FAFAF8" }}>
                    <td style={{ padding: "0.8rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <AlertTriangle size={14} color="#DC2626" />
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{row.threat}</span>
                    </td>
                    <td style={{ padding: "0.8rem 1rem", fontSize: "0.88rem", opacity: 0.75 }}>{row.mitigation}</td>
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
            Request our security documentation
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.05rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            SOC 2 report, HIPAA security documentation, penetration test summaries, and architecture
            diagrams are available to enterprise prospects under NDA.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
