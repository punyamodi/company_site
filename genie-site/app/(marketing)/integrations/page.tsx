"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Plug } from "lucide-react";

const CATEGORIES = [
  {
    name: "Knowledge Management",
    connectors: ["Confluence", "Notion", "Slab", "Outline", "Guru", "Coda", "Tettra", "Document360"],
  },
  {
    name: "Project & Issue Tracking",
    connectors: ["Jira", "Linear", "Asana", "Monday.com", "Productboard", "Shortcut", "ClickUp", "Trello"],
  },
  {
    name: "Communication",
    connectors: ["Slack", "Microsoft Teams", "Gmail", "Google Groups", "Discourse", "Zendesk"],
  },
  {
    name: "File Storage & Documents",
    connectors: ["Google Drive", "SharePoint", "OneDrive", "Dropbox", "Box", "File System"],
  },
  {
    name: "Code & Engineering",
    connectors: ["GitHub", "GitLab", "Bitbucket", "Stack Overflow for Teams"],
  },
  {
    name: "CRM & Revenue",
    connectors: ["Salesforce", "HubSpot", "Loopio"],
  },
  {
    name: "Support",
    connectors: ["Zendesk", "Freshdesk", "Intercom", "ServiceNow"],
  },
  {
    name: "Web & Custom Sources",
    connectors: ["Web Connector (URL crawler)", "RSS / Atom Feeds", "REST API (custom)", "S3 / Object Storage"],
  },
];

export default function IntegrationsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">All Integrations</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              40+ connectors.<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>All your knowledge sources.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Genie connects to every major enterprise system where knowledge lives. Pre-built connectors handle authentication, incremental sync, and permission mirroring automatically.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Request a Custom Connector <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {CATEGORIES.map((cat, ci) => (
              <motion.div key={cat.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.05 }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--nb-teal)", marginBottom: 16 }}>{cat.name}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {cat.connectors.map((c) => (
                    <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 16px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-bg)", boxShadow: "var(--shadow-brutal-sm)", fontSize: 14, fontWeight: 700 }}>
                      <Plug size={13} color="var(--nb-teal)" />
                      {c}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Need a connector we don't have yet?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            Custom connector development is available for Enterprise customers. Talk to our team about your requirements.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
