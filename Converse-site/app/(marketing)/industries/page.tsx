import Link from "next/link";
import {
  Stethoscope,
  Landmark,
  ShoppingBag,
  Building2,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Industries | Converse – Voice AI for Regulated Sectors",
  description:
    "Converse delivers compliance-ready voice AI for healthcare, financial services, retail, and telecommunications. Purpose-built patterns for regulated and high-volume industries.",
};

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    tagline: "HIPAA-ready patient voice AI",
    description:
      "Deploy patient intake bots, appointment schedulers, and clinical documentation assistants with HIPAA-aligned architecture, encrypted transport, and PHI-safe data handling.",
    compliance: ["HIPAA-ready", "Data residency controls", "Audit logging", "PHI handling"],
    useCases: ["Patient intake", "Appointment scheduling", "Medication reminders", "Nurse call automation"],
    href: "/industries/healthcare",
    color: "#059669",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    tagline: "SOC 2-aligned voice AI for finance",
    description:
      "Serve customers with account inquiry bots, fraud alert outbound calls, and wealth advisor assistants — built with SOC 2 controls, PCI-DSS considerations, and full audit trails.",
    compliance: ["SOC 2 aligned", "PCI-DSS aware", "GDPR controls", "Audit trails"],
    useCases: ["Account inquiries", "Fraud alerts", "Loan assistance", "KYC verification"],
    href: "/industries/financial-services",
    color: "#2563EB",
  },
  {
    icon: ShoppingBag,
    name: "Retail & Commerce",
    tagline: "24/7 voice support for retail operations",
    description:
      "Handle order status, returns processing, product recommendations, and loyalty enrollment with voice AI that integrates directly to your commerce and CRM platforms.",
    compliance: ["GDPR / CCPA", "PCI-DSS for payments", "Data minimization"],
    useCases: ["Order status bots", "Returns processing", "Loyalty enrollment", "Product recommendations"],
    href: "/industries/retail",
    color: "#D97706",
  },
  {
    icon: Building2,
    name: "Telecommunications",
    tagline: "IVR modernization for telcos",
    description:
      "Replace legacy DTMF IVR trees with natural voice AI, handle high call volumes with SIP/telephony integration, and deliver sub-second responses for billing and provisioning.",
    compliance: ["CPNI compliance", "GDPR / CCPA", "Call recording rules"],
    useCases: ["IVR modernization", "Billing inquiries", "Network troubleshooting", "Provisioning bots"],
    href: "/industries/telecom",
    color: "#7C3AED",
  },
];

const whyConverse = [
  "Compliance-pattern libraries for regulated industries",
  "Encrypted WebRTC/WebSocket transport end-to-end",
  "Configurable data residency and storage controls",
  "OpenTelemetry audit logs for every conversation",
  "20+ STT/LLM/TTS integrations — choose your certified stack",
  "MCP tools for HIPAA/SOC2-certified system integrations",
];

export default function IndustriesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="section section--invert"
        style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}
      >
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container container--narrow" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="eyebrow" style={{ color: "#C4B5FD" }}>Industries</span>
          <h1
            className="anim-fade-up"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}
          >
            Voice AI built for
            <br />
            <span style={{ color: "#A78BFA" }}>regulated industries</span>
          </h1>
          <p
            className="anim-fade-up delay-100"
            style={{ fontSize: "1.15rem", maxWidth: 580, margin: "0 auto 2.5rem", opacity: 0.85, lineHeight: 1.75 }}
          >
            Converse ships compliance-ready architecture and industry-specific integration patterns so your team can go from pilot to production without building compliance from scratch.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>

      {/* ── Compliance SVG ── */}
      <section className="section section--surface" style={{ padding: "56px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="section-label">Compliance by design</span>
            <h2 style={{ fontSize: "1.75rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Security and compliance built into every layer
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 780 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 780, height: "auto" }}
              aria-label="Compliance layers: Transport security, Data handling, Audit logging, and Integration controls"
            >
              {/* Layer stack */}
              {[
                { y: 20, label: "Transport Layer", sub: "End-to-end encrypted WebRTC / WebSocket / SIP", color: "#7C3AED", textColor: "#fff" },
                { y: 66, label: "Data Handling", sub: "PHI-safe, PII controls, configurable data residency", color: "#EDE9FE", textColor: "#4C1D95" },
                { y: 112, label: "Audit & Observability", sub: "OpenTelemetry traces · Call logs · SIEM export", color: "#FAF8F3", textColor: "#0A0A0A" },
              ].map((layer) => (
                <g key={layer.y}>
                  <rect x="100" y={layer.y} width="580" height="36" rx="4" fill={layer.color} stroke="#0A0A0A" strokeWidth="2" />
                  <text x="390" y={layer.y + 16} textAnchor="middle" fill={layer.textColor} fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">{layer.label}</text>
                  <text x="390" y={layer.y + 30} textAnchor="middle" fill={layer.textColor === "#fff" ? "#C4B5FD" : "#555"} fontSize="10" fontFamily="var(--font-bricolage)">{layer.sub}</text>
                </g>
              ))}
              {/* Compliance badges */}
              {["HIPAA", "SOC 2", "GDPR", "PCI-DSS", "CCPA"].map((badge, i) => (
                <g key={badge}>
                  <rect x={100 + i * 116} y={156} width="100" height="20" rx="10" fill="#0A0A0A" />
                  <text x={150 + i * 116} y={170} textAnchor="middle" fill="#A78BFA" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="700">{badge}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* ── Industry Cards ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Sectors</span>
            <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Purpose-built for your industry
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <article key={ind.name} className="nb-card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", alignItems: "start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.875rem" }}>
                      <div style={{ background: ind.color, borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px" }}>
                        <Icon size={22} color="#fff" />
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, fontSize: "1.2rem", marginBottom: 2 }}>{ind.name}</h3>
                        <p style={{ color: ind.color, fontWeight: 600, fontSize: "0.8rem" }}>{ind.tagline}</p>
                      </div>
                    </div>
                    <p style={{ color: "#444", lineHeight: 1.7, fontSize: "0.95rem" }}>{ind.description}</p>
                    <Link href={ind.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: ind.color, fontWeight: 600, fontSize: "0.875rem", marginTop: "1rem", textDecoration: "none" }}>
                      Explore {ind.name} <ArrowRight size={13} />
                    </Link>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#555" }}>Compliance</p>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {ind.compliance.map((c) => (
                        <li key={c} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <ShieldCheck size={14} color={ind.color} style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: "0.9rem", color: "#333" }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#555" }}>Use Cases</p>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {ind.useCases.map((u) => (
                        <li key={u} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <CheckCircle size={14} color={ind.color} style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: "0.9rem", color: "#333" }}>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Converse ── */}
      <section className="section section--surface" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Why Converse</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1rem" }}>
                Compliance-ready from the first deploy
              </h2>
              <p style={{ color: "#444", lineHeight: 1.75, marginBottom: "2rem" }}>
                Most voice AI frameworks treat compliance as an afterthought. Converse ships with encrypted transport, configurable data residency, and comprehensive audit logging as first-class framework features — not bolted-on add-ons.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {whyConverse.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle size={16} color="#7C3AED" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Enterprise Security Reviews", body: "Converse supports standard enterprise security questionnaires, SOC 2 documentation requests, and pen-test preparation." },
                { title: "On-Premises Deployment", body: "Run Converse entirely within your VPC or on-premises infrastructure. No data leaves your environment." },
                { title: "Dedicated Implementation Support", body: "Our solutions engineering team guides compliance architecture, integration design, and production readiness reviews." },
              ].map((item) => (
                <div key={item.title} className="nb-card" style={{ padding: "1.25rem" }}>
                  <h4 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.4rem", fontSize: "0.95rem" }}>{item.title}</h4>
                  <p style={{ color: "#444", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--invert" style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="container container--narrow">
          <Globe size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Speak with our industry solutions team
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            We work with compliance, legal, and engineering teams to design voice AI architectures that meet your industry's regulatory requirements from day one.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
