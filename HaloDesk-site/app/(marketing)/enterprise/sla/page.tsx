import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, AlertTriangle, BarChart3, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "SLA Management — HaloDesk Enterprise",
  description: "Define, monitor, and enforce service-level agreements across every inbox and team. Real-time compliance dashboards and violation alerting.",
};

export default function SLAPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "88px 24px 80px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="line-grid" style={{ position: "absolute", inset: 0, opacity: 0.3 }}/>
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <Link href="/enterprise" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)", textDecoration: "none", marginBottom: 24 }}>
            ← Enterprise
          </Link>
          <div style={{ maxWidth: 680 }}>
            <div className="eyebrow">SLA Management</div>
            <h1 style={{ fontSize: "clamp(44px,6vw,84px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.92, marginBottom: 28 }}>
              SLAs that actually<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>get enforced.</span>
            </h1>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 40 }}>
              Define response and resolution time targets per inbox, escalation tier, or priority level. Monitor compliance in real time and receive alerts before SLAs breach.
            </p>
            <Link href="/contact" className="btn-primary">Get Enterprise Pricing <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* SLA dashboard visual */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <p className="section-label">Live SLA Tracking</p>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
                Compliance visibility,<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>always on.</span>
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 24 }}>
                Every active conversation is tracked against its assigned SLA policy. Breach risk is calculated continuously — agents and supervisors see countdowns in their queues before the clock runs out.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: Clock, text: "First response time tracking per conversation" },
                  { icon: AlertTriangle, text: "Pre-breach alerts for agents and supervisors" },
                  { icon: BarChart3, text: "Daily and weekly SLA compliance reports" },
                  { icon: Bell, text: "Escalation triggers on breach events" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, fontWeight: 600 }}>
                    <Icon size={16} color="var(--nb-teal)" style={{ marginTop: 2, flexShrink: 0 }}/>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            {/* SLA dashboard SVG */}
            <svg viewBox="0 0 420 320" fill="none" style={{ width: "100%" }}>
              <rect width="420" height="320" rx="4" fill="var(--nb-surface)" stroke="var(--nb-border)" strokeWidth="2"/>
              <rect y="0" width="420" height="44" fill="var(--nb-invert)" rx="4"/>
              <text x="20" y="28" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">SLA Compliance Dashboard</text>
              <text x="340" y="28" fill="var(--nb-teal)" fontSize="10" fontWeight="700" fontFamily="sans-serif">Live ●</text>

              {/* Stat cards */}
              {[
                { label: "Compliant", value: "94.2%", color: "#059669", x: 20, w: 100 },
                { label: "At Risk", value: "3", color: "#F59E0B", x: 134, w: 80 },
                { label: "Breached", value: "1", color: "#EF4444", x: 228, w: 80 },
                { label: "Avg. FRT", value: "3m 41s", color: "var(--nb-teal)", x: 322, w: 78 },
              ].map((s) => (
                <g key={s.label}>
                  <rect x={s.x} y="60" width={s.w} height="52" rx="3" fill="var(--nb-bg)" stroke="var(--nb-border)" strokeWidth="1.5"/>
                  <text x={s.x + s.w/2} y="82" fill={s.color} fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">{s.value}</text>
                  <text x={s.x + s.w/2} y="97" fill="var(--nb-ink-muted)" fontSize="8" textAnchor="middle" fontFamily="sans-serif">{s.label}</text>
                </g>
              ))}

              {/* Conversation list */}
              {[
                { id: "#4921", channel: "Chat", remaining: "14m", status: "ok", agent: "Sarah K." },
                { id: "#4918", channel: "Email", remaining: "3m", status: "warn", agent: "James L." },
                { id: "#4915", channel: "WhatsApp", remaining: "BREACHED", status: "breach", agent: "Unassigned" },
                { id: "#4912", channel: "Chat", remaining: "28m", status: "ok", agent: "Omar F." },
              ].map((row, i) => {
                const y = 130 + i * 34;
                const statusColor = row.status === "ok" ? "#059669" : row.status === "warn" ? "#F59E0B" : "#EF4444";
                return (
                  <g key={row.id}>
                    <rect x="20" y={y} width="380" height="28" rx="2" fill={i % 2 === 0 ? "var(--nb-bg)" : "transparent"} stroke="var(--nb-border-faint)" strokeWidth="1"/>
                    <text x="36" y={y + 17} fill="var(--nb-ink)" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">{row.id}</text>
                    <text x="100" y={y + 17} fill="var(--nb-ink-muted)" fontSize="9" fontFamily="sans-serif">{row.channel}</text>
                    <text x="170" y={y + 17} fill="var(--nb-ink-muted)" fontSize="9" fontFamily="sans-serif">{row.agent}</text>
                    <rect x="300" y={y + 6} width={80} height={16} rx="2" fill={statusColor} fillOpacity="0.15" stroke={statusColor} strokeWidth="1"/>
                    <text x="340" y={y + 17} fill={statusColor} fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">{row.remaining}</text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section--surface">
        <div className="container">
          <p className="section-label">SLA Capabilities</p>
          <h2 style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            Everything you need to<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>honour your commitments.</span>
          </h2>
          <div className="cards-3" style={{ gap: 16 }}>
            {[
              { title: "Policy Definition", desc: "Create SLA policies with first-response and resolution targets. Assign policies to inboxes, teams, or conversation priority levels." },
              { title: "Real-Time Countdown", desc: "Every queued conversation shows its SLA countdown to agents and supervisors. Visual escalation cues appear as the deadline approaches." },
              { title: "Pre-Breach Alerting", desc: "Configure alert thresholds — notify agents at 50%, 80%, and 95% of SLA consumed. Supervisors receive team-level summaries." },
              { title: "Violation Tracking", desc: "Breached conversations are flagged and tracked separately. Root-cause data (assignment delay, response gap) is available for each breach." },
              { title: "Compliance Reports", desc: "Daily, weekly, and monthly SLA compliance reports broken down by inbox, agent, and conversation type. All exportable." },
              { title: "Escalation Automation", desc: "Trigger workflow automations on SLA breach events — re-assign conversations, notify supervisors, or create escalation tasks automatically." },
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
          <h2 style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.045em", color: "#fff", marginBottom: 20 }}>
            Ready to make SLAs<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>more than a promise?</span>
          </h2>
          <Link href="/contact" className="btn-invert" style={{ marginTop: 16 }}>Contact Enterprise Sales <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
