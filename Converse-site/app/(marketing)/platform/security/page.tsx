import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Shield, Lock, Key, Eye, FileText,
  ChevronRight, Check, Server, Globe, AlertCircle,
} from "lucide-react";

const COMPLIANCE_FEATURES = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    desc: "Annual third-party audit covering security, availability, processing integrity, confidentiality, and privacy. Full SOC 2 Type II report available to enterprise customers under NDA.",
    badge: "Certified",
    badgeColor: "#059669",
  },
  {
    icon: Lock,
    title: "HIPAA Readiness",
    desc: "Architecture supports HIPAA-compliant deployments for healthcare voice AI applications. BAA available for qualifying enterprise customers. PHI isolation and audit logging built-in.",
    badge: "Ready",
    badgeColor: "#7C3AED",
  },
  {
    icon: Globe,
    title: "GDPR Compliance",
    desc: "Data residency controls, right-to-erasure support, DPA templates, and EU-region-only processing options. Processing activities registry and data lineage tracking available.",
    badge: "Compliant",
    badgeColor: "#06B6D4",
  },
  {
    icon: Server,
    title: "Private Cloud Deployment",
    desc: "Deploy Converse entirely within your own VPC. No data leaves your environment. Bring your own encryption keys, your own KMS, and your own logging infrastructure.",
    badge: "Available",
    badgeColor: "#F97316",
  },
];

const SECURITY_CONTROLS = [
  { title: "End-to-End Encryption in Transit", desc: "All audio, transcripts, and control messages encrypted with TLS 1.3. WebRTC audio uses DTLS-SRTP for additional transport-layer security.", icon: Lock },
  { title: "At-Rest Encryption", desc: "Conversation data encrypted at rest with AES-256. Customer-managed key (CMK) support via AWS KMS, Azure Key Vault, and Google Cloud KMS.", icon: Key },
  { title: "Audit Logging", desc: "Immutable audit logs record every pipeline invocation, provider access, configuration change, and authentication event. Logs exportable to your SIEM.", icon: FileText },
  { title: "Access Controls", desc: "Role-based access control (RBAC) with scoped API keys. Separate permissions for pipeline execution, configuration management, and observability data.", icon: Eye },
  { title: "Network Isolation", desc: "Private endpoints, VPC peering, and IP allowlisting for all management APIs. Air-gapped deployments available for regulated industries.", icon: Server },
  { title: "Vulnerability Management", desc: "Continuous CVE scanning of all dependencies, quarterly penetration testing by third-party security firms, and a responsible disclosure program.", icon: AlertCircle },
];

const COMPLIANCE_CHECKLIST = [
  { item: "SOC 2 Type II certified", done: true },
  { item: "HIPAA BAA available", done: true },
  { item: "GDPR Article 28 DPA", done: true },
  { item: "CCPA compliant", done: true },
  { item: "ISO 27001 (in progress)", done: false },
  { item: "FedRAMP Moderate (roadmap)", done: false },
  { item: "PCI DSS Level 1 (roadmap)", done: false },
  { item: "Data residency controls", done: true },
  { item: "Right-to-erasure API", done: true },
  { item: "Processing activity registry", done: true },
  { item: "DPA templates provided", done: true },
  { item: "Sub-processor list published", done: true },
];

function ShieldSVG() {
  return (
    <svg
      width="100%"
      height="320"
      viewBox="0 0 580 320"
      fill="none"
      style={{ display: "block", maxWidth: 580 }}
    >
      <style>{`
        @keyframes shieldPulse {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(5,150,105,0.4)); }
          50% { filter: drop-shadow(0 0 16px rgba(5,150,105,0.7)); }
        }
        @keyframes layerScan {
          0% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(4px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.8; }
        }
        @keyframes checkAppear {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Shield shape */}
      <path
        d="M 290 20 L 460 70 L 460 180 C 460 250 360 295 290 310 C 220 295 120 250 120 180 L 120 70 Z"
        fill="rgba(5,150,105,0.08)"
        stroke="#059669"
        strokeWidth="2.5"
        style={{ animation: "shieldPulse 3s ease infinite" }}
      />
      <path
        d="M 290 42 L 438 84 L 438 180 C 438 238 348 278 290 291 C 232 278 142 238 142 180 L 142 84 Z"
        fill="rgba(5,150,105,0.05)"
        stroke="rgba(5,150,105,0.3)"
        strokeWidth="1.5"
      />

      {/* Lock icon center */}
      <rect x="268" y="120" width="44" height="36" rx="4" fill="#059669" stroke="#0A0A0A" strokeWidth="2" />
      <path d="M 278 120 L 278 112 C 278 104 302 104 302 112 L 302 120" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
      <circle cx="290" cy="138" r="5" fill="#fff" />
      <line x1="290" y1="143" x2="290" y2="150" stroke="#fff" strokeWidth="2" strokeLinecap="round" />

      {/* Security layer labels */}
      {[
        { label: "TLS 1.3 + DTLS-SRTP", y: 36, x: 290, color: "#06B6D4" },
        { label: "AES-256 at rest", y: 60, x: 290, color: "#7C3AED" },
        { label: "RBAC access controls", y: 220, x: 290, color: "#7C3AED" },
        { label: "Audit log trail", y: 244, x: 290, color: "#06B6D4" },
      ].map((l, i) => (
        <text
          key={i}
          x={l.x}
          y={l.y}
          textAnchor="middle"
          fontSize="10.5"
          fontWeight="700"
          fill={l.color}
          fontFamily="inherit"
          style={{ animation: `layerScan 2.5s ease ${i * 0.4}s infinite` }}
        >
          {l.label}
        </text>
      ))}

      {/* Compliance badges */}
      {[
        { label: "SOC 2", x: 80, y: 130, color: "#059669" },
        { label: "HIPAA", x: 80, y: 190, color: "#7C3AED" },
        { label: "GDPR", x: 466, y: 130, color: "#06B6D4" },
        { label: "CCPA", x: 466, y: 190, color: "#F97316" },
      ].map((b, i) => (
        <g key={i} style={{ animation: `checkAppear 0.4s ease ${i * 0.15}s both` }}>
          <rect
            x={b.x - 28}
            y={b.y - 16}
            width="56"
            height="28"
            rx="3"
            fill="rgba(255,255,255,0.9)"
            stroke={b.color}
            strokeWidth="2"
          />
          <text x={b.x} y={b.y + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill={b.color} fontFamily="inherit">
            {b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Security | Converse",
  description: "End-to-end security for your Converse AI platform — encryption, access control, and compliance built in.",
  openGraph: {
    title: "Security | Converse",
    description: "End-to-end security for your Converse AI platform — encryption, access control, and compliance built in.",
    type: "website",
  },
};

export default function SecurityPage() {
  return (
    <div
      style={{
        background: "var(--nb-bg)",
        minHeight: "100vh",
        fontFamily: "var(--font-bricolage, sans-serif)",
        color: "var(--nb-ink)",
        overflowX: "hidden",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{ position: "relative", padding: "96px 24px 80px", overflow: "hidden" }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "absolute",
            top: "-5%",
            right: "-5%",
            width: 420,
            height: 420,
            background:
              "radial-gradient(ellipse, rgba(5,150,105,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
          >
            <div>
              <Link
                href="/platform"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "var(--nb-ink-muted)",
                  textDecoration: "none",
                  marginBottom: 24,
                }}
              >
                <ChevronRight size={12} style={{ transform: "rotate(180deg)" }} /> Platform
              </Link>
              <div className="eyebrow anim-fade-up">Security & Compliance</div>
              <h1
                className="anim-fade-up delay-100"
                style={{
                  fontSize: "clamp(36px,5vw,64px)",
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                  marginBottom: 24,
                }}
              >
                Enterprise security,{" "}
                <span style={{ color: "#059669" }}>not an afterthought</span>
              </h1>
              <p
                className="anim-fade-up delay-200"
                style={{
                  fontSize: "clamp(15px,1.7vw,18px)",
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 40,
                  maxWidth: 500,
                }}
              >
                Converse is architected from first principles for regulated
                industries. SOC 2 Type II certified, HIPAA-ready, GDPR-compliant,
                and deployable in private cloud environments where your data never
                leaves your network.
              </p>
              <div
                className="anim-fade-up delay-300"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <Link href="/contact" className="btn-primary">
                  Contact Sales <ArrowRight size={15} />
                </Link>
                <Link href="/enterprise/security" className="btn-secondary">
                  Enterprise Security <Shield size={15} />
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginTop: 40,
                  flexWrap: "wrap",
                }}
              >
                {["SOC 2 Type II", "HIPAA Ready", "GDPR Compliant", "Private Cloud"].map(
                  (badge) => (
                    <div
                      key={badge}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#059669",
                      }}
                    >
                      <Check size={12} color="#059669" />
                      {badge}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="anim-fade-up delay-200">
              <ShieldSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE FEATURES ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Compliance Frameworks</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 540, marginBottom: 16 }}>
              Meet your compliance requirements out of the box
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--nb-ink-muted)",
                maxWidth: 540,
                lineHeight: 1.75,
              }}
            >
              Compliance is an architectural property of Converse, not a product
              tier. Every deployment — cloud or on-premise — ships with the same
              security controls and compliance capabilities.
            </p>
          </div>
          <div className="cards-2">
            {COMPLIANCE_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ padding: 36 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: "rgba(5,150,105,0.1)",
                        border: "2px solid var(--nb-border)",
                        borderRadius: "var(--radius)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} color="#059669" />
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: f.badgeColor,
                        background: `${f.badgeColor}14`,
                        padding: "3px 10px",
                        border: `1.5px solid ${f.badgeColor}40`,
                        borderRadius: "var(--radius)",
                      }}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      marginBottom: 12,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECURITY CONTROLS ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Security Controls</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 540 }}>
              Defense in depth across every layer
            </h2>
          </div>
          <div className="cards-3">
            {SECURITY_CONTROLS.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="nb-card" style={{ padding: 32 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(5,150,105,0.1)",
                      border: "2px solid var(--nb-border)",
                      borderRadius: "var(--radius)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={20} color="#059669" />
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      marginBottom: 10,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE CHECKLIST ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "flex-start",
            }}
          >
            <div>
              <p className="section-label">Compliance Checklist</p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", marginBottom: 20 }}>
                What&apos;s covered today
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                Our compliance posture is continuously maintained and improved.
                Certified and ready items are available to all enterprise customers.
                Roadmap items are in active development.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {COMPLIANCE_CHECKLIST.map((item) => (
                  <div
                    key={item.item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 16px",
                      background: item.done ? "rgba(5,150,105,0.06)" : "var(--nb-bg)",
                      border: `1.5px solid ${item.done ? "rgba(5,150,105,0.2)" : "var(--nb-border-light)"}`,
                      borderRadius: "var(--radius)",
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: item.done ? "#059669" : "var(--nb-surface)",
                        border: `2px solid ${item.done ? "#059669" : "var(--nb-border-light)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.done ? (
                        <Check size={11} color="#fff" />
                      ) : (
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--nb-border-light)",
                          }}
                        />
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: item.done ? "var(--nb-ink)" : "var(--nb-ink-dim)",
                      }}
                    >
                      {item.item}
                    </span>
                    {!item.done && (
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--nb-ink-dim)",
                        }}
                      >
                        Roadmap
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                className="nb-card"
                style={{ padding: 36, background: "var(--nb-invert)", color: "#FAF8F3" }}
              >
                <Shield size={32} color="#86efac" style={{ marginBottom: 20 }} />
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#FAF8F3",
                    marginBottom: 16,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Data Residency Controls
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(250,248,243,0.65)",
                    lineHeight: 1.75,
                    marginBottom: 24,
                  }}
                >
                  Choose where your voice data is processed and stored. Converse
                  supports single-region deployments across all major cloud regions
                  and on-premise environments with no cross-border data movement.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "US-only data processing",
                    "EU data residency (Frankfurt, Ireland)",
                    "APAC region support",
                    "Custom on-premise region",
                    "Data lineage tracking",
                    "Processing activity audit",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Check size={12} color="#86efac" />
                      <span style={{ fontSize: 13.5, color: "rgba(250,248,243,0.75)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE CLOUD ── */}
      <section className="section" style={{ padding: "80px 24px" }}>
        <div className="container container--narrow">
          <div
            style={{
              padding: "48px 56px",
              background: "rgba(5,150,105,0.05)",
              border: "2px solid rgba(5,150,105,0.2)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow-brutal)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              <div>
                <p className="section-label">Private Cloud</p>
                <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 16 }}>
                  Your network. Your keys. Your data.
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--nb-ink-muted)",
                    lineHeight: 1.75,
                    marginBottom: 24,
                  }}
                >
                  Private cloud deployment means Converse runs entirely within
                  your VPC. No telemetry leaves your environment, no shared
                  infrastructure, no data sharing with other customers.
                </p>
                <Link
                  href="/enterprise/security"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#059669",
                    textDecoration: "none",
                  }}
                >
                  Enterprise Security Details <ArrowRight size={13} />
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Deploy in your AWS, Azure, or GCP account",
                  "Bring your own encryption keys (BYOK)",
                  "Network isolation with private endpoints",
                  "No external API calls from pipeline",
                  "Self-hosted model serving option",
                  "Air-gapped deployment available",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(5,150,105,0.15)",
                        border: "1.5px solid #059669",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={9} color="#059669" />
                    </div>
                    <span style={{ fontSize: 13.5, color: "var(--nb-ink-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="section section--invert" style={{ padding: "80px 24px" }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,44px)",
              color: "#FAF8F3",
              marginBottom: 20,
            }}
          >
            Secure your voice AI infrastructure
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(250,248,243,0.65)",
              marginBottom: 40,
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto 40px",
            }}
          >
            Our security and compliance team is available for architecture reviews,
            compliance questionnaires, and private cloud deployment planning.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              className="btn-invert"
              style={{ fontSize: 16, padding: "16px 36px" }}
            >
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link
              href="/enterprise/security"
              className="btn-secondary"
              style={{
                fontSize: 16,
                padding: "16px 36px",
                background: "rgba(255,255,255,0.06)",
                color: "#FAF8F3",
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: "none",
              }}
            >
              Enterprise Security <Shield size={15} />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              justifyContent: "center",
              marginTop: 48,
              flexWrap: "wrap",
            }}
          >
            {["SOC 2 Type II", "HIPAA Ready", "GDPR Compliant", "Private Cloud"].map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 13,
                  color: "rgba(250,248,243,0.5)",
                  fontWeight: 600,
                }}
              >
                <Shield size={13} color="#86efac" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
