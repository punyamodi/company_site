"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Lock, Wifi, Key, Users, Server, FileText,
  ShieldCheck, ArrowRight, Mail, CheckCircle2,
} from "lucide-react";

const PILLARS = [
  {
    icon: Lock,
    title: "Encryption at Rest",
    body: "All secrets, API keys, and stored telemetry are encrypted using AES-256-GCM. Key material is never persisted in plaintext. Encryption is enforced at the storage layer, not the application layer.",
    tag: "AES-256-GCM",
  },
  {
    icon: Wifi,
    title: "Transport Security",
    body: "TLS 1.2 is the minimum enforced across all InferGate connections — internal service mesh included. TLS 1.3 is preferred. Weak ciphers and SSLv3/TLS 1.0/1.1 are explicitly disabled.",
    tag: "TLS 1.3 preferred",
  },
  {
    icon: Key,
    title: "External Key Management",
    body: "Native HashiCorp Vault integration for dynamic secret generation and rotation. Keys are never stored in environment variables or config files. Vault leases are revoked on session termination.",
    tag: "HashiCorp Vault",
  },
  {
    icon: Users,
    title: "Identity & Access Control",
    body: "Three-tier RBAC (Admin → Operator → Viewer), SCIM 2.0 for directory sync, and SSO via Google and GitHub OAuth2. API virtual keys support fine-grained permission scoping per model and endpoint.",
    tag: "RBAC · SCIM 2.0 · SSO",
  },
  {
    icon: Server,
    title: "Data Isolation",
    body: "VPC-native deployment by default. Air-gapped mode for classified environments. On-premises model support via Ollama. InferGate never routes your LLM payloads through external servers — zero egress.",
    tag: "Zero external egress",
  },
  {
    icon: FileText,
    title: "Audit & Compliance",
    body: "Every request, routing decision, and configuration change generates an immutable, structured audit event. JSON log format is SIEM-compatible (Splunk, Datadog, Elastic). PII guardrails with regex and LLM-based detection.",
    tag: "Immutable audit trail",
  },
];

const COMPLIANCE = [
  {
    name: "SOC 2 Type II Alignment",
    desc: "InferGate is architected to align with SOC 2 Type II trust service criteria — availability, confidentiality, security, processing integrity, and privacy. Engineering controls map directly to CC6–CC9 controls.",
    note: "Alignment posture — not a certification claim",
  },
  {
    name: "HIPAA-Aligned Deployment Patterns",
    desc: "For healthcare customers, InferGate supports the technical safeguards required under HIPAA: access controls, audit controls, integrity controls, and transmission security — all within your own VPC.",
    note: "BAA available upon request",
  },
  {
    name: "ISO 27001 Alignment",
    desc: "Information security management controls align with ISO 27001 Annex A domains including access control, cryptography, physical security (for on-prem deployments), operations security, and incident management.",
    note: "Alignment posture — not a certification claim",
  },
  {
    name: "GDPR Data Residency Controls",
    desc: "Customers retain full control over data residency. InferGate can be configured to enforce that all AI inference remains within specific geographic boundaries. No cross-border data transfer without explicit configuration.",
    note: "Data residency configurable per workspace",
  },
];

/* ── Animated Shield SVG ── */
function ShieldSVG() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1100),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2100),
    ];
    return () => intervals.forEach(clearTimeout);
  }, []);

  const checks = [
    { x: 180, y: 108, label: "Encrypted" },
    { x: 180, y: 148, label: "Isolated" },
    { x: 180, y: 188, label: "Audited" },
    { x: 180, y: 228, label: "Governed" },
  ];

  return (
    <svg width="100%" viewBox="0 0 340 300" fill="none" aria-hidden="true" style={{ maxWidth: 340 }}>
      {/* Shield path */}
      <motion.path
        d="M170 24 L280 64 L280 160 Q280 232 170 276 Q60 232 60 160 L60 64 Z"
        fill="#FAF8F3"
        stroke="#0A0A0A"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      {/* Shield fill overlay */}
      <motion.path
        d="M170 24 L280 64 L280 160 Q280 232 170 276 Q60 232 60 160 L60 64 Z"
        fill="var(--nb-yellow)"
        opacity={0}
        animate={{ opacity: phase >= 4 ? 0.15 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Center lock */}
      <motion.g
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: "170px 150px" }}
      >
        <rect x="148" y="148" width="44" height="34" rx="3" fill="#0A0A0A" />
        <path d="M157 148 Q157 128 183 128 Q183 128 183 148" stroke="#0A0A0A" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="170" cy="165" r="4" fill="#F5C518" />
        <rect x="168" y="165" width="4" height="8" rx="1" fill="#F5C518" />
      </motion.g>

      {/* Checkmarks */}
      {checks.map((c, i) => (
        <motion.g
          key={c.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: phase >= i + 1 ? 1 : 0, x: phase >= i + 1 ? 0 : -10 }}
          transition={{ duration: 0.35 }}
        >
          <circle cx={c.x - 10} cy={c.y} r="9" fill="#0A0A0A" />
          <path d={`M${c.x - 14} ${c.y} L${c.x - 11} ${c.y + 3} L${c.x - 6} ${c.y - 3}`} stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x={c.x + 4} y={c.y + 5} fill="#0A0A0A" fontSize="12" fontWeight="700" fontFamily="'Bricolage Grotesque',sans-serif">{c.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}

export default function TrustPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────── */}
      <section className="section dot-grid">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="eyebrow">Trust &amp; Security</span>
              <h1 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
                Security is infrastructure,<br />
                <span style={{ color: "var(--nb-orange)" }}>not an afterthought.</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.75, maxWidth: 520, marginBottom: 32 }}>
                InferGate was designed for regulated enterprises where security failures are not recoverable. Every architectural decision is made with the assumption that you are handling sensitive data.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">Talk to our security team <ArrowRight size={14} /></Link>
                <a href="mailto:security@getinfergate.ai" className="btn-secondary">
                  <Mail size={14} /> security@getinfergate.ai
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ShieldSVG />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Security Pillars ───────────────────── */}
      <section className="section section--surface">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Security architecture</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              Six layers of enterprise security
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
              Security controls are enforced at the infrastructure level — not bolted on as application middleware.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="nb-card" style={{ padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                      <div className="feature-icon">
                        <Icon size={20} />
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--nb-ink-muted)", padding: "3px 8px", border: "1.5px solid var(--nb-border-light)", borderRadius: "2px", background: "var(--nb-surface)", whiteSpace: "nowrap" }}>
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>{pillar.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.75, flex: 1 }}>{pillar.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Zero-egress architecture callout ──── */}
      <section className="section section--invert" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label" style={{ color: "rgba(250,248,243,0.5)" }}>Architecture principle</span>
              <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", lineHeight: 1.1, marginBottom: 20 }}>
                Your prompts never leave your infrastructure.
              </h2>
              <p style={{ fontSize: 15, color: "rgba(250,248,243,0.7)", lineHeight: 1.75, marginBottom: 24 }}>
                Unlike SaaS-model AI gateways, InferGate is deployed inside your VPC. LLM request payloads travel from your application → InferGate → your chosen provider. InferGate&apos;s control plane never sees, stores, or proxies your prompt content through external servers.
              </p>
              <p style={{ fontSize: 15, color: "rgba(250,248,243,0.7)", lineHeight: 1.75 }}>
                For maximum isolation, InferGate supports air-gapped deployments with local models (Ollama, vLLM, LM Studio) — no external network egress whatsoever.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Your App", sub: "originates request", color: "var(--nb-yellow)", dark: true },
                  { label: "InferGate Gateway", sub: "routes · caches · governs · audits", color: "var(--nb-orange)", dark: true },
                  { label: "Your AI Provider", sub: "OpenAI · Anthropic · Bedrock · on-prem", color: "rgba(250,248,243,0.12)", dark: false },
                ].map((node, i) => (
                  <div key={node.label}>
                    <div style={{ padding: "20px 24px", background: node.color, border: "2px solid rgba(255,255,255,0.15)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <p style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", color: node.dark ? "var(--nb-ink)" : "var(--nb-bg)", marginBottom: 2 }}>{node.label}</p>
                        <p style={{ fontSize: 12, fontWeight: 500, color: node.dark ? "rgba(10,10,10,0.65)" : "rgba(250,248,243,0.55)" }}>{node.sub}</p>
                      </div>
                      {i < 2 && <CheckCircle2 size={18} color={node.dark ? "var(--nb-invert)" : "var(--nb-yellow)"} />}
                    </div>
                    {i < 2 && (
                      <div style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
                        <svg width="2" height="20" viewBox="0 0 2 20"><line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 3" /></svg>
                      </div>
                    )}
                  </div>
                ))}
                <p style={{ fontSize: 12, color: "rgba(250,248,243,0.4)", textAlign: "center", marginTop: 4, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>
                  InferGate control plane: zero payload egress
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Compliance posture ─────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Compliance posture</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              Designed for regulated industries
            </h2>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", maxWidth: 580, margin: "16px auto 0", lineHeight: 1.7 }}>
              InferGate does not currently hold formal certifications. The following describes our architectural alignment with compliance frameworks — frameworks that InferGate was designed to support from day one.
            </p>
          </div>

          <div className="cards-2">
            {COMPLIANCE.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="nb-card" style={{ padding: "32px 32px", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16, gap: 12 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em" }}>{item.name}</h3>
                    <ShieldCheck size={18} color="var(--nb-ink-dim)" style={{ flexShrink: 0, marginTop: 2 }} />
                  </div>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 16 }}>{item.desc}</p>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink-dim)", padding: "4px 10px", border: "1.5px solid var(--nb-border-faint)", borderRadius: "2px", background: "var(--nb-surface)" }}>
                    {item.note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Responsible disclosure ─────────────── */}
      <section className="section section--surface" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container container--tight">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}
          >
            <div>
              <span className="section-label">Responsible disclosure</span>
              <h2 style={{ fontSize: "clamp(22px,2.8vw,36px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
                Found a vulnerability?
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 8 }}>
                We take security reports seriously. If you believe you&apos;ve found a security issue in InferGate, please contact our security team directly. We commit to acknowledging all reports within 48 hours and providing a resolution timeline within 5 business days for critical issues.
              </p>
              <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                Please do not disclose vulnerabilities publicly before we have had the opportunity to address them.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a
                href="mailto:security@getinfergate.ai"
                className="btn-primary"
                style={{ display: "inline-flex", whiteSpace: "nowrap" }}
              >
                <Mail size={15} />
                security@getinfergate.ai
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
            Need a security review for your deployment?
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Our engineering team can walk you through the architecture, answer compliance questions, and scope a proof-of-concept deployment.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Contact Sales <ArrowRight size={14} /></Link>
            <Link href="/book-demo" className="btn-secondary">Book a Demo <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
