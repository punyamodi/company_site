import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Archive,
  Database,
  Eye,
  Globe,
  Key,
  Lock,
  Shield,
  TrendingDown,
  Users,
  Webhook,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Services — HaloDesk Solutions",
  description:
    "Compliant by design. Data retention, audit logs, IP whitelisting, and regulated channel support built for financial services compliance.",
};

const FEATURES = [
  {
    icon: Globe,
    title: "IP Access Control",
    desc: "Restrict agent portal access to approved CIDR ranges. Network-level enforcement prevents unauthorized access to customer financial data.",
  },
  {
    icon: Archive,
    title: "Configurable Data Retention",
    desc: "Define how long conversation data is retained per inbox. Financial services conversations can follow a 7-year retention schedule compliant with FCA and SEC requirements.",
  },
  {
    icon: Database,
    title: "GDPR Data Exports",
    desc: "One-click data exports per contact for Subject Access Requests. All conversation history, metadata, and tags exported in structured JSON within 24 hours.",
  },
  {
    icon: Eye,
    title: "Contact Anonymization",
    desc: "Right to erasure compliance: anonymize contact records, redact PII from conversation history, and generate an erasure confirmation record.",
  },
  {
    icon: Webhook,
    title: "Webhook Audit Logs",
    desc: "Every agent action fires a webhook payload \u2014 assignment, escalation, status change, annotation. Your SIEM or audit trail receives a full event stream.",
  },
  {
    icon: Key,
    title: "Role-Scoped Access",
    desc: "Agents see only conversations within their assigned team or inbox. Sensitive customer enquiries never surface outside the authorized group.",
  },
];

export default function FinancialServicesPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--nb-invert)",
          borderBottom: "2px solid var(--nb-border)",
          paddingTop: 96,
          paddingBottom: 80,
        }}
      >
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }} />
        <div className="container">
          <div style={{ maxWidth: 680, position: "relative" }}>
            <div className="eyebrow anim-fade-up" style={{ marginBottom: 24 }}>
              <Shield size={12} />
              Financial Services
            </div>
            <h1
              className="anim-fade-up delay-100"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                lineHeight: 1.05,
                marginBottom: 24,
                letterSpacing: "-0.04em",
                color: "var(--nb-bg)",
              }}
            >
              Compliant by design.{" "}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)", fontWeight: 700 }}>
                Not by accident.
              </em>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{
                fontSize: "1.125rem",
                color: "rgba(250,248,243,0.75)",
                lineHeight: 1.7,
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              HaloDesk gives financial services teams data retention policies, audit
              logs, IP whitelisting, and GDPR tooling built in \u2014 not bolted on.
              Compliance is the default, not a configuration afterthought.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-invert">
                Contact Enterprise Sales <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                All Solutions <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE CONTROLS DETAIL ───────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            {/* Left: compliance bullets */}
            <div>
              <div className="section-label">Compliance Controls</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
                Every control your{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
                  compliance team needs
                </em>
              </h2>
              <p style={{ color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                Financial services teams operate under strict regulatory requirements.
                HaloDesk includes the controls your compliance team will ask for
                before approving any new platform.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: Globe,    title: "IP Whitelisting",   desc: "Restrict platform access to approved CIDR ranges. Network-level enforcement." },
                  { icon: Archive,  title: "Data Retention",    desc: "Configure retention schedules per inbox \u2014 7-year for regulated conversations, 90-day for standard." },
                  { icon: Webhook,  title: "Audit Logs",        desc: "Full event stream via webhook: every action, every agent, timestamped." },
                  { icon: Database, title: "GDPR Compliance",   desc: "Subject access requests, data exports, and right-to-erasure handled in one workflow." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                      <div style={{ width: 30, height: 30, background: "var(--nb-invert)", border: "2px solid var(--nb-border)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={14} color="var(--nb-teal)" />
                      </div>
                      <div>
                        <strong style={{ fontSize: "0.9375rem", display: "block", marginBottom: 2 }}>{item.title}</strong>
                        <span style={{ fontSize: "0.875rem", color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: retention policy JSON */}
            <div className="anim-fade-up delay-200">
              <div className="code-block">
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" />
                  <span className="code-dot code-dot--y" />
                  <span className="code-dot code-dot--g" />
                  <span style={{ color: "#6b7280", fontSize: 11, marginLeft: 8 }}>retention_policy.json</span>
                </div>
                <div className="code-block__body">
                  <pre style={{ margin: 0, lineHeight: 1.9, fontSize: 12 }}>{`{
  "retention_policy": {
    "default_days": 2555,
    "inboxes": [
      {
        "inbox": "complaints",
        "retain_days": 2555,
        "regulation": "FCA DISP"
      },
      {
        "inbox": "general_support",
        "retain_days": 365
      }
    ],
    "anonymize_on_expiry": true
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SENSITIVE CONVERSATION HANDLING ─────────────────────── */}
      <section className="section" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="section-label">Sensitive Conversations</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
                Distressed customers{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-orange)" }}>
                  escalated automatically
                </em>
              </h2>
              <p style={{ color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                Financial stress conversations require a different kind of care.
                HaloDesk\u2019s sentiment engine detects distress signals \u2014 phrases,
                tone, and context \u2014 and triggers an escalation workflow before the
                conversation deteriorates.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Sentiment-triggered escalation fires on negative threshold breach",
                  "Conversation tagged with vulnerability indicator and priority-elevated",
                  "Specialist agent or trained team assigned within SLA window",
                  "Escalation event logged to audit webhook in real time",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <TrendingDown size={14} color="var(--nb-orange)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: "0.9375rem", color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Escalation flow visual */}
            <div className="anim-fade-up delay-200">
              <div className="nb-card" style={{ padding: 28, background: "var(--nb-invert)", color: "var(--nb-bg)" }}>
                <div style={{ fontSize: "0.6875rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--nb-teal)", marginBottom: 16, textTransform: "uppercase" }}>
                  Sentiment Escalation Trigger
                </div>
                {[
                  { label: "Sentiment detected",     color: "#DC2626", value: "Negative: \u201cI can\u2019t afford this\u201d" },
                  { label: "Threshold crossed",      color: "#F97316", value: "Score \u2264 \u221225 (Critical)" },
                  { label: "Tag applied",            color: "#F59E0B", value: "vulnerability, priority-high" },
                  { label: "Conversation routed",    color: "#0EA5A0", value: "Specialist Support Team" },
                  { label: "Audit log fired",        color: "#6366F1", value: "Webhook payload sent to SIEM" },
                ].map((step, i) => (
                  <div
                    key={step.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 0",
                      borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}
                  >
                    <div style={{ width: 8, height: 8, background: step.color, borderRadius: 2, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.6875rem", color: "rgba(250,248,243,0.5)", marginBottom: 2 }}>{step.label}</div>
                      <div style={{ fontSize: "0.8125rem", color: "rgba(250,248,243,0.9)", fontWeight: 600 }}>{step.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">Compliance Features</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 48 }}>
            Built for{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              regulated industries
            </em>
          </h2>
          <div className="cards-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card anim-fade-up" style={{ padding: 24, animationDelay: `${i * 80}ms` }}>
                  <div className="feature-icon" style={{ marginBottom: 16 }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <div className="eyebrow anim-fade-up" style={{ margin: "0 auto 24px" }}>
            <Lock size={12} />
            Enterprise Compliance
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--nb-bg)", marginBottom: 20 }}
          >
            Compliance that{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              ships with the platform
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{ color: "rgba(250,248,243,0.7)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7, fontSize: "1.0625rem" }}
          >
            Retention policies, audit logs, IP whitelisting, and GDPR tooling
            are standard features in HaloDesk \u2014 not add-ons you configure after
            your compliance review.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-invert">
              Contact Enterprise Sales <ArrowRight size={16} />
            </Link>
            <Link href="/enterprise/data-governance" className="btn-secondary">
              Data governance details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
