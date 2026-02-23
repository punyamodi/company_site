import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  Lock,
  FileText,
  AlertTriangle,
  CreditCard,
  UserCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Financial Services Voice AI | Converse – SOC 2-Aligned Banking & Finance",
  description:
    "Deploy secure voice AI for account inquiries, fraud alerts, KYC verification, and wealth advisor assistants with Converse's SOC 2-aligned, low-latency framework.",
};

const complianceHighlights = [
  { badge: "SOC 2", desc: "Framework aligned with Type II audit requirements" },
  { badge: "PCI-DSS", desc: "Aware architecture for cardholder data environments" },
  { badge: "GDPR", desc: "Consent management, right-to-erasure, data minimization" },
  { badge: "CCPA", desc: "California consumer privacy controls built in" },
  { badge: "Audit Trails", desc: "Full call logs via OpenTelemetry with SIEM export" },
];

const technicalCapabilities = [
  "Sub-100ms end-to-end latency for time-sensitive finance contexts",
  "Encrypted SIP/telephony transport for inbound/outbound calls",
  "WebRTC integration for in-app banking assistant experiences",
  "MCP tools for core banking API integration (read/write)",
  "Voice biometric hooks for KYC verification workflows",
  "DTMF fallback for legacy IVR compatibility",
  "Call recording with retention policy management",
  "OpenTelemetry audit log export to Splunk, Datadog, SIEMs",
  "On-premises deployment for strict data residency needs",
];

const useCases = [
  { icon: Landmark, title: "Account Inquiry Bots", description: "Handle balance checks, transaction history, statement requests, and account status inquiries 24/7 — authenticated by voice PIN or biometric verification." },
  { icon: AlertTriangle, title: "Fraud Alert Calls", description: "Outbound AI calls notify customers of suspicious activity, collect confirm/deny responses, and trigger immediate card freeze or escalation workflows." },
  { icon: CreditCard, title: "Loan Application Assistance", description: "Guide applicants through structured loan intake via phone or web — collecting income, employment, and asset data, then writing to your origination system via MCP." },
  { icon: TrendingUp, title: "Wealth Advisor Assistants", description: "AI-assisted pre-call briefings and post-call summaries for wealth management teams — surfacing portfolio data, client history, and talking points via voice." },
  { icon: UserCheck, title: "KYC Voice Verification", description: "Conversational KYC flows collect identity information, verify against external databases via MCP tools, and document the verification outcome with full audit trail." },
  { icon: FileText, title: "Regulatory Disclosures", description: "Automate mandatory disclosure delivery for loan products, investment products, and payment services — with spoken confirmation and logged consent." },
];

export default function FinancialServicesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Industries › Financial Services</span>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
                Voice AI for finance —
                <br />
                <span style={{ color: "#A78BFA" }}>secure by design</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Converse delivers low-latency voice AI for financial institutions — with SOC 2-aligned architecture, PCI-DSS-aware data flows, and full audit trails from day one.
              </p>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {complianceHighlights.map((c) => (
                <div
                  key={c.badge}
                  style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", gap: "0.875rem" }}
                >
                  <span style={{ background: "#7C3AED", color: "#fff", fontWeight: 700, fontSize: "0.75rem", padding: "2px 8px", borderRadius: 4, flexShrink: 0 }}>{c.badge}</span>
                  <span style={{ fontSize: "0.875rem", opacity: 0.85 }}>{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Security Architecture SVG ── */}
      <section className="section section--surface" style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Security architecture</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Multi-layer security for financial data
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 780 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 780, height: "auto" }}
              aria-label="Financial services security architecture: customer authentication, encrypted voice transport, Converse AI pipeline, and core banking integration with audit trail"
            >
              {/* Customer Auth */}
              <rect x="20" y="60" width="140" height="80" rx="6" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="90" y="90" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Customer</text>
              <text x="90" y="106" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">Phone / Web</text>
              <text x="90" y="122" textAnchor="middle" fill="#2563EB" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">Voice PIN Auth</text>

              {/* Encrypted transport */}
              <rect x="200" y="74" width="120" height="52" rx="4" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
              <text x="260" y="97" textAnchor="middle" fill="#2563EB" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Encrypted</text>
              <text x="260" y="111" textAnchor="middle" fill="#2563EB" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Transport</text>
              <text x="260" y="124" textAnchor="middle" fill="#555" fontSize="9" fontFamily="var(--font-bricolage)">TLS 1.3 · SRTP</text>
              <line x1="160" y1="100" x2="200" y2="100" stroke="#2563EB" strokeWidth="2" />
              <polygon points="196,96 204,100 196,104" fill="#2563EB" />

              {/* Converse pipeline */}
              <rect x="360" y="60" width="160" height="80" rx="6" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="440" y="85" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Converse AI</text>
              <text x="440" y="101" textAnchor="middle" fill="#C4B5FD" fontSize="10" fontFamily="var(--font-bricolage)">STT → LLM → TTS</text>
              <text x="440" y="116" textAnchor="middle" fill="#C4B5FD" fontSize="9" fontFamily="var(--font-bricolage)">No card data in LLM</text>
              <text x="440" y="130" textAnchor="middle" fill="#C4B5FD" fontSize="9" fontFamily="var(--font-bricolage)">tokenized references</text>
              <line x1="320" y1="100" x2="360" y2="100" stroke="#2563EB" strokeWidth="2" />
              <polygon points="356,96 364,100 356,104" fill="#2563EB" />

              {/* Core banking */}
              <rect x="570" y="60" width="150" height="80" rx="6" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="645" y="88" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Core Banking</text>
              <text x="645" y="104" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">Temenos · FIS</text>
              <text x="645" y="118" textAnchor="middle" fill="#555" fontSize="9" fontFamily="var(--font-bricolage)">via MCP Tools</text>
              <text x="645" y="132" textAnchor="middle" fill="#555" fontSize="9" fontFamily="var(--font-bricolage)">tokenized only</text>
              <line x1="520" y1="100" x2="570" y2="100" stroke="#7C3AED" strokeWidth="2" />
              <polygon points="566,96 574,100 566,104" fill="#7C3AED" />

              {/* Audit trail */}
              <rect x="270" y="158" width="240" height="30" rx="4" fill="#FEF9C3" stroke="#D97706" strokeWidth="2" />
              <text x="390" y="177" textAnchor="middle" fill="#D97706" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Audit Trail → SIEM / Splunk / Datadog</text>
              <line x1="440" y1="140" x2="440" y2="158" stroke="#D97706" strokeWidth="1.5" strokeDasharray="4,3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Applications</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Voice AI across financial operations
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <article key={uc.title} className="nb-card">
                  <div style={{ background: "#2563EB", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", display: "inline-flex", marginBottom: "1rem" }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.5rem" }}>{uc.title}</h3>
                  <p style={{ color: "#444", lineHeight: 1.65, fontSize: "0.95rem" }}>{uc.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technical Depth ── */}
      <section className="section section--surface" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Technical capabilities</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1.5rem" }}>
                Built for financial-grade requirements
              </h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {technicalCapabilities.map((cap) => (
                  <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle size={16} color="#2563EB" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.5 }}>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: Zap, title: "Low Latency for Trading Contexts", body: "Sub-100ms voice response times meet the real-time expectations of trading desks, fraud operations, and high-velocity transaction environments." },
                { icon: Lock, title: "No Sensitive Data in LLM Prompts", body: "Converse routes sensitive identifiers through tokenized references — card numbers, SSNs, and account IDs never appear in LLM context windows." },
                { icon: ShieldCheck, title: "Enterprise Security Reviews", body: "We support SOC 2 documentation requests, penetration testing preparation, and information security questionnaires for enterprise procurement." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="nb-card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: "#2563EB", borderRadius: 4, border: "2px solid #0A0A0A", padding: "9px", flexShrink: 0 }}>
                      <Icon size={18} color="#fff" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.3rem", fontSize: "0.95rem" }}>{item.title}</h4>
                      <p style={{ color: "#444", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--invert" style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="container container--narrow">
          <Landmark size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Deploy voice AI your security team will trust
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our financial services solutions team supports security reviews, compliance mapping, and architecture design for banking, insurance, and fintech deployments.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
