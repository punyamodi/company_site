import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Database, Globe, Lock, FileText, Activity, Users, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise — HaloDesk for Large Organizations",
  description: "Enterprise-grade security, compliance, data governance, and dedicated support. Built for organizations that demand control at scale.",
};

const ENTERPRISE_FEATURES = [
  { icon: Lock, title: "IP Access Control", desc: "Restrict HaloDesk access to your corporate network, VPN, or office IP ranges. CIDR range support with per-account rule management.", href: "/enterprise/security" },
  { icon: Database, title: "Data Retention Policies", desc: "Automated lifecycle management for conversations, messages, contacts, and attachments. Archive, delete, or anonymize on configurable schedules.", href: "/enterprise/data-governance" },
  { icon: FileText, title: "SLA Management", desc: "Define, monitor, and enforce SLAs across every inbox and team. Real-time compliance tracking and violation alerting.", href: "/enterprise/sla" },
  { icon: Shield, title: "Security & Compliance", desc: "GDPR data export, right-to-erasure, contact anonymization, and full audit trails for regulated industries.", href: "/enterprise/security" },
  { icon: Activity, title: "Webhook Event Logs", desc: "Every webhook delivery logged with status, response, retry count, and timestamp. Up to 5 automatic retries with manual override.", href: "/enterprise/data-governance" },
  { icon: Globe, title: "GDPR Data Exports", desc: "Self-service data export requests for full account data, contact data, or conversation data in machine-readable formats.", href: "/enterprise/data-governance" },
  { icon: Users, title: "Role-Based Access Control", desc: "Fine-grained permissions across agents, supervisors, and administrators. Scope what each role can view and action.", href: "/enterprise/security" },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Agent performance reports, SLA compliance tracking, sentiment distribution, health score dashboards — all exportable.", href: "/features/analytics" },
];

export default function EnterprisePage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "88px 24px 80px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden", background: "var(--nb-invert)", color: "#fff" }}>
        {/* Animated grid */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="entGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0EA5A0" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#entGrid)"/>
        </svg>

        {/* Rotating shield SVG */}
        <svg style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", width: 340, height: 340, pointerEvents: "none", opacity: 0.15 }} viewBox="0 0 340 340" fill="none">
          <path d="M170 20 L290 70 L290 170 C290 240 170 310 170 310 C170 310 50 240 50 170 L50 70 Z" stroke="#0EA5A0" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dashoffset" values="800;0" dur="3s" fill="freeze"/>
            <animate attributeName="stroke-dasharray" values="0,800;800,0" dur="3s" fill="freeze"/>
          </path>
          <circle cx="170" cy="170" r="50" stroke="#0EA5A0" strokeWidth="1.5" strokeDasharray="4,6">
            <animateTransform attributeName="transform" type="rotate" values="0 170 170;360 170 170" dur="15s" repeatCount="indefinite"/>
          </circle>
          {[0,90,180,270].map((a, i) => {
            const r = 50, rad = (a * Math.PI)/180;
            return <circle key={i} cx={170 + r * Math.cos(rad)} cy={170 + r * Math.sin(rad)} r="5" fill="#0EA5A0">
              <animate attributeName="opacity" values="1;0.2;1" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite"/>
            </circle>;
          })}
        </svg>

        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow anim-fade-up">Enterprise</div>
            <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(44px,6vw,84px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.92, color: "#fff", marginBottom: 28 }}>
              Control. Compliance.<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>Confidence at scale.</span>
            </h1>
            <p className="anim-fade-up delay-200" style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.72, marginBottom: 40, maxWidth: 560 }}>
              HaloDesk Enterprise delivers the security controls, data governance, SLA enforcement, and operational intelligence that large organizations require — without compromise.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-invert">Talk to Enterprise Sales <ArrowRight size={16} /></Link>
              <Link href="/enterprise/security" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", border: "2px solid rgba(255,255,255,0.3)", borderRadius: "var(--radius)", color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: "-0.02em" }}>
                Security Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise features grid */}
      <section className="section">
        <div className="container">
          <p className="section-label">Enterprise Capabilities</p>
          <h2 style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48, lineHeight: 1.05 }}>
            Every control your<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>organization needs.</span>
          </h2>
          <div className="cards-4" style={{ gap: 16 }}>
            {ENTERPRISE_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <Link key={f.title} href={f.href} style={{ textDecoration: "none" }}>
                  <div className="nb-card" style={{ padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div className="feature-icon" style={{ marginBottom: 16 }}><Icon size={18} /></div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ fontSize: 12.5, color: "var(--nb-ink-muted)", lineHeight: 1.7, flex: 1 }}>{f.desc}</p>
                    <div style={{ marginTop: 16, fontSize: 12, fontWeight: 800, color: "var(--nb-teal)", display: "flex", alignItems: "center", gap: 4 }}>
                      Learn more <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance section */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <p className="section-label">Compliance Ready</p>
              <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24 }}>
                Designed for regulated<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>environments.</span>
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 32 }}>
                HaloDesk Enterprise includes the data controls and audit capabilities required by GDPR, SOC 2-aligned organizations, and regulated industries including financial services and healthcare.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "GDPR Article 17 right-to-erasure support",
                  "Configurable data retention with automated execution",
                  "Full contact and conversation anonymization",
                  "Immutable webhook delivery audit logs",
                  "IP-range access control per account",
                  "Role-based access with agent-scope isolation",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600 }}>
                    <div style={{ width: 20, height: 20, background: "var(--nb-teal)", border: "1.5px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Compliance visual */}
            <div>
              <svg viewBox="0 0 400 320" fill="none" style={{ width: "100%" }}>
                <rect x="20" y="20" width="360" height="280" rx="4" fill="var(--nb-bg)" stroke="var(--nb-border)" strokeWidth="2"/>
                <rect x="20" y="20" width="360" height="48" fill="var(--nb-invert)" stroke="var(--nb-border)" strokeWidth="2"/>
                <text x="40" y="50" fill="#fff" fontSize="12" fontWeight="700" fontFamily="sans-serif">Data Governance Dashboard</text>
                {[
                  { label: "Data Retention Policy", status: "Active", color: "#059669", y: 100 },
                  { label: "IP Whitelist Rules", status: "3 Rules Active", color: "#059669", y: 136 },
                  { label: "GDPR Export Requests", status: "2 Pending", color: "#F59E0B", y: 172 },
                  { label: "Webhook Event Log", status: "847 Events · 0 Failed", color: "#059669", y: 208 },
                  { label: "Contact Anonymization", status: "Scheduled: Weekly", color: "#0EA5A0", y: 244 },
                ].map((row) => (
                  <g key={row.label}>
                    <rect x="40" y={row.y - 14} width="320" height="28" rx="2" fill="var(--nb-surface)" stroke="var(--nb-border-faint)" strokeWidth="1"/>
                    <text x="56" y={row.y + 4} fill="var(--nb-ink)" fontSize="10" fontWeight="600" fontFamily="sans-serif">{row.label}</text>
                    <rect x={260} y={row.y - 8} width={84} height={16} rx="2" fill={row.color} fillOpacity="0.15" stroke={row.color} strokeWidth="1"/>
                    <text x={263} y={row.y + 4} fill={row.color} fontSize="8.5" fontWeight="700" fontFamily="sans-serif">{row.status}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-page links */}
      <section className="section">
        <div className="container">
          <p className="section-label">Explore Enterprise</p>
          <div className="cards-3" style={{ gap: 16 }}>
            {[
              { title: "Security & Compliance", desc: "IP access control, role-based permissions, GDPR compliance, and audit trails.", href: "/enterprise/security", icon: Shield },
              { title: "SLA Management", desc: "Define SLA policies, track compliance in real time, and receive violation alerts.", href: "/enterprise/sla", icon: FileText },
              { title: "Data Governance", desc: "Automated retention policies, data exports, and anonymization for regulated industries.", href: "/enterprise/data-governance", icon: Database },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <Link key={p.title} href={p.href} style={{ textDecoration: "none" }}>
                  <div className="nb-card" style={{ padding: "36px 32px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div className="feature-icon" style={{ marginBottom: 20 }}><Icon size={20} /></div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 12 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.72, flex: 1 }}>{p.desc}</p>
                    <div style={{ marginTop: 20, fontSize: 13, fontWeight: 800, color: "var(--nb-teal)", display: "flex", alignItems: "center", gap: 6 }}>
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert" style={{ textAlign: "center" }}>
        <div className="container container--tight">
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.045em", color: "#fff", marginBottom: 20, lineHeight: 0.95 }}>
            Let&apos;s scope your<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>enterprise deployment.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
            Every enterprise contract includes onboarding support, SLA commitments, and a dedicated solutions engineer.
          </p>
          <Link href="/contact" className="btn-invert" style={{ fontSize: 16 }}>
            Talk to Enterprise Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
