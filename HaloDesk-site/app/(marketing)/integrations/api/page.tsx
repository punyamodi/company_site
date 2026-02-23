import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code, Webhook, Activity, Shield, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "API & Webhooks — HaloDesk Developer Integration",
  description: "Full REST API and configurable webhooks for custom HaloDesk integrations. Audit logs, retry logic, and complete event coverage.",
};

export default function ApiPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>
      <section style={{ padding: "80px 24px 72px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="line-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div className="eyebrow anim-fade-up" style={{ background: "var(--nb-teal)" }}>Developer API</div>
            <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.93, marginBottom: 24 }}>
              Build anything<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>on top of HaloDesk.</span>
            </h1>
            <p className="anim-fade-up delay-200" style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 36 }}>
              The HaloDesk REST API gives you complete programmatic access to conversations, contacts, inboxes, agents, and analytics. Webhooks deliver real-time events with full retry audit logging.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Sales <ArrowRight size={15} /></Link>
              <Link href="/integrations" className="btn-secondary">All Integrations</Link>
            </div>
          </div>

          <div className="code-block" style={{ boxShadow: "var(--shadow-brutal-lg)" }}>
            <div className="code-block__bar">
              <div className="code-dot code-dot--r" /><div className="code-dot code-dot--y" /><div className="code-dot code-dot--g" />
              <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-jetbrains, monospace)" }}>REST API · Webhook Payload</span>
            </div>
            <div className="code-block__body">
              <pre>{`{
  "event": "conversation.status_changed",
  "id": 48291,
  "status": "resolved",
  "assignee": {
    "id": 7,
    "name": "Sarah Okonkwo"
  },
  "sentiment": "positive",
  "csat_score": 5,
  "resolution_time_s": 742,
  "retry_count": 0,
  "delivered_at": "2026-02-23T12:01:22Z"
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-3" style={{ gap: 16 }}>
            {[
              { icon: Code, title: "Full REST API", desc: "CRUD operations on conversations, contacts, inboxes, agents, labels, teams, and more. OpenAPI spec available." },
              { icon: Webhook, title: "Configurable Webhooks", desc: "Subscribe to any event type: conversation created/updated/resolved, message received, contact created, CSAT received, and more." },
              { icon: Activity, title: "Webhook Event Logs", desc: "Every webhook delivery is logged with status, response code, response body, and timestamp. Full audit trail." },
              { icon: RefreshCw, title: "Automatic Retry Logic", desc: "Failed webhooks retry up to 5 times with exponential backoff. Manual retry available from the event log interface." },
              { icon: Shield, title: "Secure Endpoints", desc: "HMAC signature verification on all webhook payloads. Configure IP whitelists for API access." },
              { icon: Code, title: "Dashboard Apps", desc: "Embed custom internal tools, CRMs, or external services directly within the conversation view using Dashboard Apps." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ padding: "28px 24px" }}>
                  <div className="feature-icon" style={{ marginBottom: 16 }}><Icon size={18} /></div>
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
            Start building with the API.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 36 }}>Talk to our solutions team about API access, rate limits, and enterprise integration support.</p>
          <Link href="/contact" className="btn-invert">Contact Sales <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
