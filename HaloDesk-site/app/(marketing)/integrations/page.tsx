import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, MessageSquare, Mail, Slack, Phone, Zap, Code, Bot, ShoppingCart, Languages, TicketCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations — Connect HaloDesk to Your Stack",
  description: "Connect HaloDesk to Slack, WhatsApp, Shopify, Dialogflow, and your own systems via REST API and webhooks.",
};

const INTEGRATIONS = [
  { icon: MessageSquare, name: "WhatsApp", category: "Messaging", desc: "Handle WhatsApp Business conversations natively within HaloDesk. Supports templates, media, and quick replies.", href: "/integrations/whatsapp", featured: true },
  { icon: Mail, name: "Email", category: "Communication", desc: "Turn any email address into a support inbox. Full threading, CC support, HTML templates, and IMAP/SMTP.", href: "/integrations/email", featured: true },
  { icon: Slack, name: "Slack", category: "Collaboration", desc: "Manage and respond to conversations directly from Slack. Notifications, two-way sync, and team escalation.", href: "/integrations/slack", featured: true },
  { icon: Globe, name: "Instagram", category: "Social", desc: "Handle Instagram DMs and story mentions without leaving HaloDesk.", href: "/integrations", featured: false },
  { icon: Globe, name: "Facebook", category: "Social", desc: "Facebook Page messages and Messenger conversations in your unified inbox.", href: "/integrations", featured: false },
  { icon: Globe, name: "Telegram", category: "Messaging", desc: "Telegram bot integration with full conversation management.", href: "/integrations", featured: false },
  { icon: Phone, name: "Twilio SMS", category: "SMS", desc: "Two-way SMS conversations powered by Twilio. Phone number provisioning included.", href: "/integrations", featured: false },
  { icon: Globe, name: "TikTok", category: "Social", desc: "TikTok DM support for brands engaging with creator audiences.", href: "/integrations", featured: false },
  { icon: ShoppingCart, name: "Shopify", category: "E-Commerce", desc: "View and manage customer orders directly within a conversation. Order history, status, and fulfillment actions.", href: "/integrations", featured: false },
  { icon: Bot, name: "Dialogflow", category: "AI / Bot", desc: "Integrate Google Dialogflow bots for advanced NLP-driven automation flows.", href: "/integrations", featured: false },
  { icon: Languages, name: "Google Translate", category: "Language", desc: "Real-time message translation. Agents reply in their language; customers read in theirs.", href: "/integrations", featured: false },
  { icon: TicketCheck, name: "Linear", category: "Project Management", desc: "Create and manage Linear tickets directly from any conversation. Bug reports to backlog in seconds.", href: "/integrations", featured: false },
  { icon: Code, name: "API & Webhooks", category: "Developer", desc: "Full REST API access and configurable webhooks for custom integrations and automation workflows.", href: "/integrations/api", featured: true },
  { icon: Zap, name: "Dashboard Apps", category: "Embedded Tools", desc: "Embed internal tools, CRMs, or custom dashboards directly within the HaloDesk conversation view.", href: "/integrations", featured: false },
];

const CATEGORIES = ["All", "Messaging", "Social", "Communication", "Collaboration", "E-Commerce", "AI / Bot", "Developer"];

export default function IntegrationsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 72px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="line-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />

        {/* Integration hub SVG */}
        <svg style={{ position: "absolute", right: "5%", top: "5%", width: 400, height: 420, pointerEvents: "none" }} viewBox="0 0 400 420" fill="none">
          {/* Central HaloDesk hub */}
          <circle cx="200" cy="210" r="52" fill="#0A1628" stroke="#0A0A0A" strokeWidth="2"/>
          <circle cx="200" cy="210" r="52" fill="none" stroke="#0EA5A0" strokeWidth="1.5" strokeDasharray="6,4">
            <animateTransform attributeName="transform" type="rotate" values="0 200 210;360 200 210" dur="20s" repeatCount="indefinite"/>
          </circle>
          <text x="200" y="206" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">HaloDesk</text>
          <text x="200" y="222" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif">Hub</text>

          {/* Orbiting integration nodes */}
          {[
            { label: "WhatsApp", angle: 0,   color: "#25D366", r: 140 },
            { label: "Email",    angle: 51,  color: "#F59E0B", r: 140 },
            { label: "Slack",    angle: 102, color: "#4A154B", r: 140 },
            { label: "Shopify",  angle: 153, color: "#96BF48", r: 140 },
            { label: "API",      angle: 204, color: "#0EA5A0", r: 140 },
            { label: "TikTok",   angle: 255, color: "#FF0050", r: 140 },
            { label: "Linear",   angle: 306, color: "#5E6AD2", r: 140 },
          ].map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 200 + node.r * Math.cos(rad);
            const y = 210 + node.r * Math.sin(rad);
            return (
              <g key={node.label}>
                <line x1="200" y1="210" x2={x} y2={y} stroke={node.color} strokeWidth="1.2" strokeDasharray="4,4" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="16;0" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite"/>
                </line>
                <circle cx={x} cy={y} r="24" fill={node.color} stroke="#0A0A0A" strokeWidth="1.5"/>
                <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">{node.label}</text>
                <circle cx={x} cy={y} r="3" fill="#fff" opacity="0.6">
                  <animate attributeName="r" values="3;5;3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
                </circle>
              </g>
            );
          })}
        </svg>

        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow anim-fade-up">Integrations</div>
            <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(44px,6vw,80px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.93, marginBottom: 24 }}>
              HaloDesk connects<br />
              to your{" "}
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>entire stack.</span>
            </h1>
            <p className="anim-fade-up delay-200" style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 36 }}>
              14 native integrations covering every major messaging channel, collaboration tool, e-commerce platform, and developer integration. No duct tape required.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Sales <ArrowRight size={16} /></Link>
              <Link href="/integrations/api" className="btn-secondary">API Reference</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured integrations */}
      <section className="section">
        <div className="container">
          <p className="section-label">Featured</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40 }}>
            Start with these.
          </h2>
          <div className="cards-4" style={{ gap: 16, marginBottom: 64 }}>
            {INTEGRATIONS.filter(i => i.featured).map((integ) => {
              const Icon = integ.icon;
              return (
                <Link key={integ.name} href={integ.href} style={{ textDecoration: "none" }}>
                  <div className="nb-card" style={{ padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div className="feature-icon" style={{ marginBottom: 16 }}><Icon size={18} /></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>{integ.name}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", background: "var(--nb-teal-subtle)", color: "var(--nb-teal)", border: "1px solid var(--nb-teal)", borderRadius: "2px" }}>{integ.category}</span>
                    </div>
                    <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.7, flex: 1 }}>{integ.desc}</p>
                    <div style={{ marginTop: 16, fontSize: 13, fontWeight: 800, color: "var(--nb-teal)", display: "flex", alignItems: "center", gap: 4 }}>
                      Learn more <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* All integrations grid */}
          <div style={{ borderTop: "2px solid var(--nb-border)", paddingTop: 48 }}>
            <p className="section-label">All Integrations</p>
            <div className="cards-3" style={{ gap: 16 }}>
              {INTEGRATIONS.map((integ) => {
                const Icon = integ.icon;
                return (
                  <div key={integ.name} className="nb-card" style={{ padding: "24px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, background: "var(--nb-surface)", border: "1.5px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                      <Icon size={16} color="var(--nb-teal)" />
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                        <span style={{ fontWeight: 800, fontSize: 14, letterSpacing: "-0.02em" }}>{integ.name}</span>
                        <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", background: "var(--nb-surface)", border: "1px solid var(--nb-border-light)", borderRadius: "2px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{integ.category}</span>
                      </div>
                      <p style={{ fontSize: 12.5, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{integ.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* API section */}
      <section className="section section--invert">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <p className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>For Developers</p>
              <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.0, marginBottom: 20 }}>
                Build anything<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>with our API.</span>
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 32 }}>
                Our REST API exposes full access to conversations, contacts, inboxes, and automation. Webhooks deliver real-time events to your systems with full retry audit logging.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <Link href="/integrations/api" className="btn-invert">Explore API <ArrowRight size={14} /></Link>
                <Link href="/contact" className="btn-secondary">Contact Sales</Link>
              </div>
            </div>
            <div className="code-block">
              <div className="code-block__bar">
                <div className="code-dot code-dot--r" /><div className="code-dot code-dot--y" /><div className="code-dot code-dot--g" />
                <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-jetbrains, monospace)" }}>webhook_event.json</span>
              </div>
              <div className="code-block__body">
                <pre>{`POST https://your-endpoint.com/hooks
Content-Type: application/json

{
  "event":        "conversation.created",
  "account_id":   1024,
  "conversation": {
    "id":       4829,
    "status":   "open",
    "channel":  "whatsapp",
    "priority": "high"
  },
  "timestamp":    "2026-02-23T12:00:00Z"
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--surface" style={{ textAlign: "center" }}>
        <div className="container container--tight">
          <h2 style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20 }}>
            Missing an integration?<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>Let&apos;s build it together.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", marginBottom: 36 }}>Our solutions team works with enterprise customers to build custom integrations via our partner API program.</p>
          <Link href="/contact" className="btn-primary">Contact Sales <ArrowRight size={14} /></Link>
        </div>
      </section>

    </div>
  );
}
