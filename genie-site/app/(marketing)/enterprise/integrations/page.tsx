"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Plug, ArrowRight, Settings, Webhook, Code2, Database, CheckCircle2 } from "lucide-react";

export default function EnterpriseIntegrationsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Enterprise Integrations</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Connect Genie to<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>everything that matters.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
              Enterprise deployments require deep integration with existing IT infrastructure — identity providers, data sources, ticketing systems, and internal services. Genie was designed for this.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Discuss Your Stack <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-2">
            {[
              { icon: Settings, title: "Identity Provider Integration", desc: "Connect to Okta, Azure AD, Google Workspace, PingFederate, or any SAML/OIDC-compatible IdP for seamless SSO and SCIM provisioning.", features: ["SAML 2.0", "OIDC", "SCIM 2.0", "JIT provisioning"] },
              { icon: Database, title: "Data Source Connectors", desc: "40+ pre-built connectors covering every major enterprise SaaS platform. Documents sync on a configurable schedule with delta updates.", features: ["Confluence, SharePoint, Notion", "Jira, Linear, Asana", "Slack, Teams, Gmail", "Salesforce, HubSpot"] },
              { icon: Webhook, title: "Webhook & Event API", desc: "Subscribe to Genie events via webhooks for custom integrations — post-query callbacks, agent completions, and alert triggers for your internal systems.", features: ["Query events", "Agent completion hooks", "Connector sync status", "Admin event stream"] },
              { icon: Code2, title: "REST API", desc: "Every capability in Genie is available via REST API. Build custom front-ends, embed Genie into internal portals, or automate queries from scheduled jobs.", features: ["Full query API", "Connector management API", "User management API", "Admin configuration API"] },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="nb-card" style={{ padding: 32 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={24} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 16 }}>{f.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {f.features.map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                        <CheckCircle2 size={13} color="var(--nb-teal)" style={{ flexShrink: 0 }} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Custom integration requirements? We've seen them.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Solutions Engineering <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
