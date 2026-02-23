import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Eye, Key, Users, FileSearch, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Compliance — HaloDesk Enterprise",
  description: "IP access control, role-based permissions, GDPR compliance tooling, and full audit trails for regulated enterprise environments.",
};

const SECURITY_FEATURES = [
  {
    icon: Globe,
    title: "IP Whitelist Rules",
    desc: "Restrict HaloDesk access to approved IP ranges using CIDR notation. Create multiple rules per account — ideal for multi-region offices or VPN exit nodes. Unauthorized IPs are blocked at the application layer.",
    detail: "CIDR range support · Per-account management · Instant enforcement",
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    desc: "Define what each role can see and do across inboxes, contacts, reports, and system settings. Agent roles are scoped to assigned inboxes only. Supervisors get cross-inbox visibility without admin privileges.",
    detail: "Agent · Supervisor · Administrator · Custom roles",
  },
  {
    icon: Key,
    title: "API Token Scoping",
    desc: "Issue read-only or write API tokens for integrations and external tools. Token permissions are auditable and revocable from the admin panel without disrupting other services.",
    detail: "Per-integration tokens · Revocable · Audit logged",
  },
  {
    icon: Eye,
    title: "Audit Log Access",
    desc: "Track configuration changes, permission updates, and administrative actions across your account. Logs are immutable and can be exported for compliance reviews.",
    detail: "Immutable · Exportable · Timestamped",
  },
  {
    icon: FileSearch,
    title: "GDPR Compliance Tooling",
    desc: "Self-service tools for data export requests and contact erasure. Right-to-erasure requests trigger anonymization of contact PII across conversations, notes, and attachments.",
    detail: "Article 17 erasure · PII anonymization · Export on request",
  },
  {
    icon: Users,
    title: "Agent Scope Isolation",
    desc: "Agents only see conversations assigned to their inboxes. Sensitive accounts can be further isolated by restricting team membership. Supervisors receive escalation visibility without full access.",
    detail: "Inbox-level isolation · Team-scoped access",
  },
];

export default function SecurityPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "88px 24px 80px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }}/>
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <Link href="/enterprise" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)", textDecoration: "none", marginBottom: 24, letterSpacing: "-0.01em" }}>
            ← Enterprise
          </Link>
          <div style={{ maxWidth: 700 }}>
            <div className="eyebrow anim-fade-up">Enterprise Security</div>
            <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(44px,6vw,84px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.92, marginBottom: 28 }}>
              Access control<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>built for the enterprise.</span>
            </h1>
            <p className="anim-fade-up delay-200" style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 40 }}>
              IP whitelisting, granular role permissions, GDPR tooling, and immutable audit logs — every security capability enterprises need to deploy HaloDesk with confidence.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 16 }}>
              <Link href="/contact" className="btn-primary">Contact Sales <ArrowRight size={16} /></Link>
              <Link href="/enterprise/data-governance" className="btn-secondary">Data Governance →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* IP Whitelist detail */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <p className="section-label">IP Access Control</p>
              <h2 style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
                Your network,<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>your perimeter.</span>
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 24 }}>
                Define which IP ranges are permitted to access HaloDesk using CIDR notation. Rules are enforced at login and session level — authenticated sessions originating from unauthorized IPs are blocked immediately.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["CIDR range notation (e.g. 10.0.0.0/8)", "Multiple rules per account", "Corporate network, VPN, and remote office support", "Immediate enforcement on rule changes", "Admin override for emergency access"].map((i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, fontWeight: 600 }}>
                    <div style={{ width: 16, height: 16, background: "var(--nb-teal)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2, flexShrink: 0 }}>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="code-block" style={{ fontSize: 12 }}>
                <div style={{ color: "var(--nb-teal-muted)", marginBottom: 16, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>IP Whitelist Configuration</div>
                <pre style={{ margin: 0, lineHeight: 1.8 }}><code>{`// Account IP Whitelist Rules
{
  "rules": [
    {
      "name": "Corporate HQ",
      "ip_range": "203.0.113.0/24",
      "description": "London HQ office range",
      "active": true
    },
    {
      "name": "VPN Exit",
      "ip_range": "198.51.100.0/28",
      "description": "Zscaler VPN exit nodes",
      "active": true
    },
    {
      "name": "NYC Office",
      "ip_range": "192.0.2.16/29",
      "description": "New York remote office",
      "active": true
    }
  ],
  "fallback_action": "block",
  "admin_override": "allowed"
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security features grid */}
      <section className="section section--surface">
        <div className="container">
          <p className="section-label">Security Capabilities</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48, lineHeight: 1.05 }}>
            Defense in depth at<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>every layer.</span>
          </h2>
          <div className="cards-3" style={{ gap: 16 }}>
            {SECURITY_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ padding: "28px 24px" }}>
                  <div className="feature-icon" style={{ marginBottom: 16 }}><Icon size={18} /></div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 14 }}>{f.desc}</p>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--nb-teal)", borderTop: "1px solid var(--nb-border-faint)", paddingTop: 12 }}>{f.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert" style={{ textAlign: "center" }}>
        <div className="container container--tight">
          <Shield size={48} color="var(--nb-teal)" style={{ margin: "0 auto 24px" }}/>
          <h2 style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.045em", color: "#fff", marginBottom: 20, lineHeight: 0.95 }}>
            Ready to deploy with<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>enterprise-grade security?</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
            Our solutions engineers will map your security requirements to HaloDesk&apos;s controls before you deploy.
          </p>
          <Link href="/contact" className="btn-invert">Talk to Enterprise Sales <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
