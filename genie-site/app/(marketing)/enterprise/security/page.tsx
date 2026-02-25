"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Shield, ArrowRight, Lock, Users, Key, FileSearch, Eye, CheckCircle2 } from "lucide-react";

export default function SecurityPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Enterprise Security</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Security built<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>into the architecture.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
              Security in Genie is not a layer added on top — it is fundamental to the architecture. From identity integration to document-level permissioning to audit logging, every component was designed with enterprise security requirements as the primary constraint.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Request Security Review <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="section-label">Identity & Access</div>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20 }}>Enterprise identity, fully integrated.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: Key, title: "SAML / OIDC SSO", desc: "Native support for SAML 2.0 and OIDC providers including Okta, Azure AD, Google Workspace, and PingFederate." },
                  { icon: Users, title: "SCIM Provisioning", desc: "Automated user provisioning and deprovisioning via SCIM 2.0. When an employee leaves, their access is revoked automatically." },
                  { icon: Lock, title: "Role-Based Access Control", desc: "Granular RBAC with custom role definitions. Control who can access which agents, connectors, and administrative functions." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} color="#fff" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="section-label">Data Security</div>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20 }}>Your data never leaves your control.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: Shield, title: "Document-Level Permissions", desc: "Genie mirrors existing ACLs from your connected sources. A user who can't see a document in Confluence can't see it through Genie." },
                  { icon: Eye, title: "No Training on Your Data", desc: "Your organizational data is never used to train or fine-tune any model. It is used only for retrieval in service of your users' queries." },
                  { icon: FileSearch, title: "Encryption at Rest & Transit", desc: "All data is encrypted at rest using AES-256 and in transit using TLS 1.2+. Encryption keys are managed within your infrastructure." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "var(--radius)", background: "var(--nb-violet)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} color="#fff" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="access-control">
        <div className="container">
          <div className="section-label">Audit & Compliance</div>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 32 }}>
            Complete traceability for compliance teams.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: FileSearch, title: "Query History Logs", desc: "Every query and response is logged with user identity, timestamp, documents retrieved, and model used." },
              { icon: Users, title: "Admin Audit Trail", desc: "All administrative actions — connector configuration, user changes, role assignments — are logged and timestamped." },
              { icon: Eye, title: "Usage Analytics", desc: "Aggregate and per-user usage reports for capacity planning, cost attribution, and compliance reporting." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-amber)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="var(--nb-ink)" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Request a security architecture review.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Security Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
