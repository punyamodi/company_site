import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, Trash2, Archive, UserX, Download, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Governance — HaloDesk Enterprise",
  description: "Automated data retention policies, GDPR-compliant data exports, contact anonymization, and webhook audit logs for enterprise compliance.",
};

export default function DataGovernancePage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "88px 24px 80px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35 }}/>
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <Link href="/enterprise" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)", textDecoration: "none", marginBottom: 24 }}>
            ← Enterprise
          </Link>
          <div style={{ maxWidth: 680 }}>
            <div className="eyebrow">Data Governance</div>
            <h1 style={{ fontSize: "clamp(44px,6vw,84px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.92, marginBottom: 28 }}>
              Your data.<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>Your rules.</span>
            </h1>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 40 }}>
              Automated retention policies, GDPR-compliant data exports, contact anonymization, and immutable webhook logs. Every control you need to manage data across its full lifecycle.
            </p>
            <Link href="/contact" className="btn-primary">Talk to Enterprise Sales <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Retention Policies */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <p className="section-label">Data Retention</p>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
                Automated lifecycle<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>management.</span>
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 24 }}>
                Define retention policies for conversations, messages, contacts, and attachments. Choose the action — archive, delete, or anonymize — and the schedule. Policies execute automatically without manual intervention.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { icon: Archive, label: "Archive", desc: "Retain for audit, remove from active queues" },
                  { icon: Trash2, label: "Delete", desc: "Permanent removal with confirmation log" },
                  { icon: UserX, label: "Anonymize", desc: "Redact PII while preserving structure" },
                  { icon: RefreshCw, label: "Schedule", desc: "Daily, weekly, or monthly execution" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} style={{ background: "var(--nb-surface)", border: "2px solid var(--nb-border)", padding: "16px", borderRadius: "var(--radius)" }}>
                    <Icon size={16} color="var(--nb-teal)" style={{ marginBottom: 8 }}/>
                    <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 11.5, color: "var(--nb-ink-muted)" }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="code-block" style={{ fontSize: 11.5 }}>
              <div style={{ color: "var(--nb-teal-muted)", marginBottom: 16, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Data Retention Policy</div>
              <pre style={{ margin: 0, lineHeight: 1.9 }}><code>{`// DataRetentionPolicy model
{
  "name": "GDPR 24-Month Cleanup",
  "resource_type": "conversation",
  "action": "anonymize",
  "schedule": "monthly",
  "conditions": {
    "older_than_days": 730,
    "status": "resolved"
  },
  "last_executed": "2025-05-01T00:00:00Z",
  "records_processed": 14203,
  "active": true
}

// Supported resource types:
// conversation · message · contact · attachment

// Supported actions:
// archive · delete · anonymize`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* GDPR exports */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <svg viewBox="0 0 400 280" fill="none" style={{ width: "100%" }}>
                <rect width="400" height="280" rx="4" fill="var(--nb-bg)" stroke="var(--nb-border)" strokeWidth="2"/>
                <rect y="0" width="400" height="44" fill="var(--nb-invert)" rx="4"/>
                <text x="20" y="28" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">GDPR Data Export Requests</text>
                <text x="332" y="28" fill="var(--nb-teal)" fontSize="9" fontWeight="700" fontFamily="sans-serif">+ New Request</text>
                {[
                  { id: "EXP-0091", type: "Full Account", requester: "DPO Team", status: "Processing", statusC: "#F59E0B" },
                  { id: "EXP-0090", type: "Contact Data", requester: "Legal Dept.", status: "Complete", statusC: "#059669" },
                  { id: "EXP-0089", type: "Conversations", requester: "DPO Team", status: "Complete", statusC: "#059669" },
                  { id: "EXP-0088", type: "Full Account", requester: "Compliance", status: "Complete", statusC: "#059669" },
                ].map((row, i) => {
                  const y = 60 + i * 36;
                  return (
                    <g key={row.id}>
                      <rect x="16" y={y} width="368" height="28" rx="2" fill={i % 2 === 0 ? "var(--nb-surface)" : "transparent"} stroke="var(--nb-border-faint)" strokeWidth="1"/>
                      <text x="32" y={y + 17} fill="var(--nb-ink)" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">{row.id}</text>
                      <text x="110" y={y + 17} fill="var(--nb-ink-muted)" fontSize="9" fontFamily="sans-serif">{row.type}</text>
                      <text x="210" y={y + 17} fill="var(--nb-ink-muted)" fontSize="9" fontFamily="sans-serif">{row.requester}</text>
                      <rect x={302} y={y + 5} width={70} height={18} rx="2" fill={row.statusC} fillOpacity="0.15" stroke={row.statusC} strokeWidth="1"/>
                      <text x={337} y={y + 17} fill={row.statusC} fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">{row.status}</text>
                    </g>
                  );
                })}
                <text x="20" y="268" fill="var(--nb-ink-muted)" fontSize="9" fontFamily="sans-serif">All exports are encrypted and available for 72 hours post-generation.</text>
              </svg>
            </div>
            <div>
              <p className="section-label">GDPR Compliance</p>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
                Data subject rights,<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>handled correctly.</span>
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 24 }}>
                Process data subject access requests and Article 17 erasure requests directly from HaloDesk. Exports compile contact, conversation, and message data into machine-readable packages.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Full account data export (contacts + conversations + messages)",
                  "Scoped contact data export for individual data subjects",
                  "Article 17 right-to-erasure — contact anonymization",
                  "Attachment and note redaction",
                  "72-hour encrypted download window",
                ].map((i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, fontWeight: 600 }}>
                    <Download size={14} color="var(--nb-teal)" style={{ flexShrink: 0 }}/>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webhook logs */}
      <section className="section">
        <div className="container">
          <p className="section-label">Webhook Audit Logs</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
            Every delivery.<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>Every retry. Logged.</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 40, maxWidth: 620 }}>
            HaloDesk logs every webhook delivery event — status, HTTP response code, response time, and retry count. Up to 5 automatic retries with exponential backoff. Manual replay available from the admin panel.
          </p>
          <div className="cards-3" style={{ gap: 16 }}>
            {[
              { title: "Status Tracking", desc: "Every event carries a status: pending, delivered, failed, or retrying. Filter and search by any status at any time." },
              { title: "Retry Intelligence", desc: "Failed deliveries retry automatically up to 5 times with exponential backoff. Each retry is logged with its own response record." },
              { title: "Manual Replay", desc: "Replay any event manually from the log viewer. Useful for recovering from transient endpoint failures without re-triggering business logic." },
              { title: "Response Detail", desc: "HTTP status code, response body, and response time recorded for every delivery attempt. Diagnose integration issues with full context." },
              { title: "Log Retention", desc: "Webhook event logs are retained according to your data retention policy. Configurable separately from conversation and contact data." },
              { title: "Export & Audit", desc: "Export webhook logs as CSV or JSON for external audit systems, SIEM ingestion, or compliance reviews." },
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
          <Database size={48} color="var(--nb-teal)" style={{ margin: "0 auto 24px" }}/>
          <h2 style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.045em", color: "#fff", marginBottom: 20 }}>
            Governed data.<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>Confident compliance.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
            Talk to a solutions engineer about mapping your compliance framework to HaloDesk&apos;s data controls.
          </p>
          <Link href="/contact" className="btn-invert">Contact Enterprise Sales <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
