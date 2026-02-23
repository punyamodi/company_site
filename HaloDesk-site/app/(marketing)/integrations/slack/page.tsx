import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Slack, Bell, MessageSquare, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Slack Integration — HaloDesk",
  description: "Manage HaloDesk conversations directly from Slack. Real-time notifications, two-way sync, and team escalations.",
};

export default function SlackPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>
      <section style={{ padding: "80px 24px 72px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <svg style={{ position: "absolute", right: "6%", top: "8%", width: 380, height: 360, pointerEvents: "none" }} viewBox="0 0 380 360" fill="none">
          <rect x="20" y="20" width="340" height="320" rx="8" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"/>
          <rect x="20" y="20" width="340" height="52" rx="8" fill="#4A154B" stroke="#0A0A0A" strokeWidth="2"/>
          <text x="44" y="50" fill="#fff" fontSize="12" fontWeight="700" fontFamily="sans-serif"># halodesk-support</text>
          {[
            { sender: "HaloDesk Bot", msg: "🚨 New conversation from Sarah Chen", color: "#E01E5A", y: 92 },
            { sender: "HaloDesk Bot", msg: "Channel: WhatsApp · Priority: High", color: "#E01E5A", y: 124 },
            { sender: "James (Agent)", msg: "On it — assigning to myself", color: "#36C5F0", y: 164 },
            { sender: "HaloDesk Bot", msg: "✓ Assigned to James · SLA: 45 min", color: "#E01E5A", y: 196 },
            { sender: "James (Agent)", msg: "Resolved! Customer satisfied ✓", color: "#36C5F0", y: 236 },
            { sender: "HaloDesk Bot", msg: "📊 CSAT: 5/5 · Resolved in 12 min", color: "#E01E5A", y: 268 },
          ].map((item, i) => (
            <g key={i} style={{ animation: `messageSlide 0.5s ${0.2 + i * 0.25}s both` }}>
              <circle cx="44" cy={item.y + 8} r="10" fill={item.color}/>
              <text x="62" y={item.y + 4} fill={item.color} fontSize="9" fontWeight="800" fontFamily="sans-serif">{item.sender}</text>
              <text x="62" y={item.y + 16} fill="#4A4540" fontSize="9.5" fontFamily="sans-serif">{item.msg}</text>
            </g>
          ))}
        </svg>

        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow anim-fade-up" style={{ background: "#4A154B", color: "#fff" }}>Slack Integration</div>
            <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.93, marginBottom: 24 }}>
              Support conversations<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "#4A154B" }}>inside Slack.</span>
            </h1>
            <p className="anim-fade-up delay-200" style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 36 }}>
              Bring HaloDesk into your Slack workspace. Agents receive instant notifications, can respond directly from Slack channels, and escalate to teammates without switching apps.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Connect Slack <ArrowRight size={15} /></Link>
              <Link href="/integrations" className="btn-secondary">All Integrations</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-3" style={{ gap: 16 }}>
            {[
              { icon: Bell, title: "Real-Time Notifications", desc: "New conversations, assignment changes, and SLA warnings delivered instantly to your Slack channels." },
              { icon: MessageSquare, title: "Two-Way Sync", desc: "Reply to HaloDesk conversations from Slack. Messages appear in both systems with full attribution." },
              { icon: Users, title: "Team Escalation", desc: "@mention teammates in Slack to pull them into urgent conversations. Context transfers automatically." },
              { icon: Zap, title: "Automation Triggers", desc: "Route specific conversation types (VIP customers, high sentiment) to dedicated Slack channels." },
              { icon: Slack, title: "Channel Routing", desc: "Map different HaloDesk inboxes to different Slack channels. Keep WhatsApp, Email, and Live Chat separate." },
              { icon: Bell, title: "Custom Notification Rules", desc: "Configure exactly which events trigger Slack messages. Avoid noise, never miss critical escalations." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ padding: "28px 24px" }}>
                  <div className="feature-icon" style={{ marginBottom: 16, background: "#4A154B" }}><Icon size={18} /></div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--invert" style={{ textAlign: "center" }}>
        <div className="container container--tight">
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", marginBottom: 20 }}>
            Bring your support into Slack.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 36 }}>Contact our team to get Slack integration set up for your workspace.</p>
          <Link href="/contact" className="btn-invert">Contact Sales <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
