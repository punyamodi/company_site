"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Shield, Server, Lock, Users, CheckCircle2 } from "lucide-react";

const PILLARS = [
  { icon: Shield, title: "Security & Compliance", desc: "SSO, SCIM, RBAC, audit logging, and encryption at rest and in transit. Built for organizations with strict security requirements.", href: "/enterprise/security" },
  { icon: Server, title: "Deployment Options", desc: "Kubernetes, Docker Compose, or air-gapped. Genie runs in your cloud, your data center, or completely offline.", href: "/enterprise/deployment" },
  { icon: Lock, title: "Access Control", desc: "Document-level permissions mirror your existing identity sources. Users see only what they're authorized to see — automatically.", href: "/enterprise/security#access-control" },
  { icon: Users, title: "Admin & Governance", desc: "Centralized admin console for user management, agent configuration, usage analytics, and policy enforcement across the entire platform.", href: "/enterprise/integrations" },
];

export default function EnterprisePage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Enterprise</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Production AI for<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>organizations that can't afford failure.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
              Genie Enterprise is purpose-built for regulated industries and complex organizations. Security, compliance, access control, and deployment flexibility are first-class concerns — not add-ons.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Contact Sales <ArrowRight size={16} /></Link>
              <Link href="/enterprise/security" className="btn-secondary" style={{ textDecoration: "none" }}>Security Overview</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-2">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Link href={p.href} className="nb-card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, padding: 32, textDecoration: "none" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={24} color="#fff" />
                    </div>
                    <div>
                      <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{p.title}</h2>
                      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)" }}>Learn more <ArrowRight size={13} /></div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Enterprise-Grade</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40 }}>What's included in Enterprise.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 40px", maxWidth: 720 }}>
            {[
              "SAML/OIDC Single Sign-On",
              "SCIM user provisioning & deprovisioning",
              "Role-Based Access Control (RBAC)",
              "Document-level permission mirroring",
              "Audit logs with full query history",
              "Multi-tenant organizational isolation",
              "Advanced usage analytics & reporting",
              "Enterprise SLA & dedicated support",
              "Air-gapped deployment support",
              "Kubernetes production deployment",
              "Token rate-limit controls per user group",
              "Custom LLM provider configuration",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14.5, fontWeight: 600, padding: "10px 0", borderBottom: "1px solid var(--nb-border)" }}>
                <CheckCircle2 size={16} color="var(--nb-teal)" style={{ flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Ready to evaluate Genie Enterprise?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            Our team will walk you through security architecture, deployment options, and integration requirements.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Schedule Enterprise Review <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
