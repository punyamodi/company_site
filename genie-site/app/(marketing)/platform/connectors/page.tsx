"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Plug, ArrowRight, RefreshCw, Shield, Clock, CheckCircle2 } from "lucide-react";

const ALL_CONNECTORS = [
  { name: "Slack", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Gmail", category: "Communication" },
  { name: "Discord", category: "Communication" },
  { name: "Discourse", category: "Communication" },
  { name: "Confluence", category: "Knowledge" },
  { name: "Notion", category: "Knowledge" },
  { name: "Outline", category: "Knowledge" },
  { name: "Guru", category: "Knowledge" },
  { name: "Slab", category: "Knowledge" },
  { name: "Bookstack", category: "Knowledge" },
  { name: "Coda", category: "Knowledge" },
  { name: "Jira", category: "Project Management" },
  { name: "Linear", category: "Project Management" },
  { name: "Asana", category: "Project Management" },
  { name: "ClickUp", category: "Project Management" },
  { name: "GitHub", category: "Engineering" },
  { name: "GitLab", category: "Engineering" },
  { name: "Bitbucket", category: "Engineering" },
  { name: "Salesforce", category: "CRM & Sales" },
  { name: "HubSpot", category: "CRM & Sales" },
  { name: "Google Drive", category: "File Storage" },
  { name: "SharePoint", category: "File Storage" },
  { name: "Dropbox", category: "File Storage" },
  { name: "Egnyte", category: "File Storage" },
  { name: "Zendesk", category: "Support" },
  { name: "Freshdesk", category: "Support" },
  { name: "Intercom", category: "Support" },
  { name: "Gong", category: "Revenue Intelligence" },
  { name: "Loopio", category: "Revenue Intelligence" },
  { name: "Wikipedia", category: "Web" },
  { name: "Web Scraper", category: "Web" },
  { name: "Google Sites", category: "Web" },
  { name: "Fireflies", category: "Meetings" },
  { name: "Airtable", category: "Productivity" },
  { name: "Productboard", category: "Productivity" },
  { name: "Document360", category: "Productivity" },
  { name: "Higherspot", category: "Sales Enablement" },
  { name: "IMAP Email", category: "Communication" },
  { name: "Zulip", category: "Communication" },
];

const CATEGORIES = [...new Set(ALL_CONNECTORS.map((c) => c.category))];

export default function ConnectorsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">40+ Connectors</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Connect every<br />tool in your stack.
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Genie natively integrates with over 40 data sources — continuously ingesting, indexing, and permissioning your organizational knowledge. When your data changes, Genie knows.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
              <Link href="/integrations" className="btn-secondary" style={{ textDecoration: "none" }}>Integration Catalog</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "flex", gap: 20, marginBottom: 40, flexWrap: "wrap" }}>
            {[
              { icon: RefreshCw, label: "Continuous Sync", desc: "Connectors poll on configurable intervals — new content flows in automatically." },
              { icon: Shield, label: "Permission Mirroring", desc: "ACLs from source systems are replicated at ingestion time and enforced at query time." },
              { icon: Clock, label: "Historical Backfill", desc: "Ingest your complete historical archive, not just recent documents." },
              { icon: CheckCircle2, label: "Incremental Updates", desc: "Only changed documents are re-indexed, keeping sync overhead minimal." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ flex: "1 1 220px", display: "flex", alignItems: "flex-start", gap: 12, padding: "20px 20px", background: "var(--nb-bg)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)" }}>
                  <div className="feature-icon feature-icon--teal" style={{ flexShrink: 0 }}><Icon size={18} color="#fff" /></div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{f.label}</div>
                    <div style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {CATEGORIES.map((cat) => {
            const items = ALL_CONNECTORS.filter((c) => c.category === cat);
            return (
              <div key={cat} style={{ marginBottom: 40 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 14, paddingBottom: 10, borderBottom: "2px solid var(--nb-border-light)" }}>{cat}</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {items.map((c) => (
                    <motion.div key={c.name}
                      initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ duration: 0.3 }}
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "var(--nb-bg)", border: "1.5px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 13, fontWeight: 600, boxShadow: "var(--shadow-brutal-sm)" }}>
                      <Plug size={11} color="var(--nb-amber-dark)" />
                      {c.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Don't see your integration?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            Genie's connector framework makes it straightforward to build custom integrations to proprietary or internal data sources. Our team works with enterprise customers to scope and deliver custom connectors.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Discuss Custom Connectors <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
