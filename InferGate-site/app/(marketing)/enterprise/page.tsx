"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, Shield, Zap, BarChart3, Server, Lock, CheckCircle,
  Globe, Key, Eye, Database, Building2, ChevronRight, Users,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────── */
const PILLARS = [
  {
    icon: Zap,
    title: "Performance",
    stat: "10,400 req/s",
    description:
      "Built in Go from the ground up. InferGate's lock-free request processing delivers 10,400 req/s with 0.3ms P50 overhead — designed for the highest-traffic enterprise workloads.",
    bullets: ["Go-native, lock-free architecture", "CEL routing decisions in <100µs", "Zero-copy SSE streaming pipeline", "Sub-millisecond P99 under sustained load"],
  },
  {
    icon: BarChart3,
    title: "Governance",
    stat: "6-Level Budgets",
    description:
      "InferGate's 6-level budget hierarchy gives enterprise teams granular control: org → team → project → environment → virtual key → model. Real-time budget enforcement with no request drops.",
    bullets: ["Organization → Virtual Key hierarchy", "Per-model, per-team spend caps", "Virtual keys with scoped permissions", "Real-time budget enforcement at edge"],
  },
  {
    icon: Shield,
    title: "Security",
    stat: "AES-256-GCM",
    description:
      "Credentials are encrypted at rest with AES-256-GCM. HashiCorp Vault integration for secrets management. RBAC and SCIM 2.0 for identity federation. Air-gapped VPC deployments supported.",
    bullets: ["AES-256-GCM credential encryption", "HashiCorp Vault secrets integration", "RBAC + SCIM 2.0 directory sync", "PII guardrails and content filtering"],
  },
  {
    icon: Server,
    title: "Reliability",
    stat: "HA Clustering",
    description:
      "InferGate deploys as a horizontally scalable cluster with leader election, automatic failover, and zero-downtime provider switching. Kubernetes-native with HPA and PDB support.",
    bullets: ["Raft-based leader election", "Automatic provider failover", "Zero-downtime configuration reload", "Kubernetes HPA + PDB support"],
  },
];

const SECURITY_ITEMS = [
  { icon: Lock,     label: "AES-256-GCM credential encryption at rest" },
  { icon: Shield,   label: "TLS 1.2+ enforced on all connections" },
  { icon: Key,      label: "HashiCorp Vault secrets management integration" },
  { icon: Users,    label: "RBAC with SCIM 2.0 directory sync (Okta, Entra, etc.)" },
  { icon: Globe,    label: "SSO via SAML 2.0 / OIDC (any IdP)" },
  { icon: Eye,      label: "PII guardrails — regex and semantic detection" },
  { icon: Database, label: "SIEM-ready structured audit logs (JSON / CEF / Syslog)" },
  { icon: Server,   label: "Air-gapped VPC deployments — zero external traffic" },
  { icon: Shield,   label: "Mutual TLS (mTLS) for internal service communication" },
  { icon: Lock,     label: "Automated credential rotation via Vault dynamic secrets" },
];

const DEPLOYMENT_CARDS = [
  {
    title: "Kubernetes / Helm",
    icon: Server,
    badge: "Most Common",
    description:
      "Deploy InferGate to your Kubernetes cluster using our official Helm chart. Pre-configured HorizontalPodAutoscaler (HPA), PodDisruptionBudget (PDB), Ingress with TLS, and ServiceAccount for Vault integration.",
    items: [
      "Official Helm chart with production defaults",
      "HPA: auto-scales from 2 to N replicas on CPU/RPS",
      "PDB: zero-downtime rolling updates guaranteed",
      "Ingress: cert-manager + TLS 1.2+ out of the box",
      "RBAC ServiceAccount for Vault agent sidecar",
    ],
  },
  {
    title: "Private Cloud / VPC",
    icon: Globe,
    badge: "Air-Gapped",
    description:
      "InferGate runs fully within your private cloud or on-premises data center. No external calls required — all routing, caching, and observability happen inside your perimeter. Supports AWS VPC, Azure VNET, GCP VPC, and bare-metal.",
    items: [
      "Air-gapped: no outbound calls to InferGate infrastructure",
      "On-premises model support via Ollama / vLLM",
      "AWS PrivateLink, Azure Private Endpoint, GCP VPC SC",
      "Bare-metal Linux deployment supported",
      "Offline license validation — no internet required",
    ],
  },
  {
    title: "Managed Enterprise",
    icon: Building2,
    badge: "Concierge",
    description:
      "Let InferGate's enterprise team handle deployment, configuration, and ongoing optimization. Includes dedicated onboarding engineer, architecture review, and a private Slack/Teams channel for direct support.",
    items: [
      "Dedicated onboarding engineer (4-week program)",
      "Architecture review and config optimization",
      "Private Slack or Teams channel for direct access",
      "Custom SLA with guaranteed response times",
      "Quarterly business reviews and roadmap access",
    ],
  },
];

const GOVERNANCE_LEVELS = [
  { level: "L1", label: "Organization",  color: "#0A0A0A", textColor: "#FAF8F3", desc: "Global spend caps, provider allow-lists" },
  { level: "L2", label: "Business Unit", color: "#1a1a2e", textColor: "#FAF8F3", desc: "Departmental budgets, team isolation" },
  { level: "L3", label: "Team",          color: "#F5C518", textColor: "#0A0A0A", desc: "Team-level quotas and rate limits" },
  { level: "L4", label: "Project",       color: "#FF5A36", textColor: "#FAF8F3", desc: "Project-scoped model access controls" },
  { level: "L5", label: "Environment",   color: "#2D6A4F", textColor: "#FAF8F3", desc: "Prod / staging / dev budget separation" },
  { level: "L6", label: "Virtual Key",   color: "#1D4ED8", textColor: "#FAF8F3", desc: "Per-key token, cost, and RPM caps" },
];

const ONBOARDING_STEPS = [
  { step: "01", title: "Architecture Review", desc: "Our engineers review your existing AI infrastructure and design an InferGate deployment plan tailored to your environment." },
  { step: "02", title: "Deployment & Config", desc: "Helm chart deployment or managed setup. InferGate is configured with your providers, virtual keys, and budget hierarchy." },
  { step: "03", title: "SDK Migration", desc: "Your existing OpenAI SDK code is migrated with a single base_url change. We verify compatibility with all your model calls." },
  { step: "04", title: "Observability Setup", desc: "Dashboards, alerting, SIEM integration, and audit log routing are configured to your existing observability stack." },
  { step: "05", title: "Go-Live & Hypercare", desc: "Production launch with 2-week hypercare period. Dedicated engineer on-call. Custom SLA active from day one." },
];

export default function EnterprisePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingBottom: 80 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow"><Building2 size={12} /> Enterprise</span>
            <h1 style={{ fontSize: "clamp(40px,6vw,80px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.98, marginBottom: 28 }}>
              Enterprise AI Infrastructure,{" "}
              <br />
              <span className="text-serif" style={{ color: "var(--nb-orange)", fontWeight: 400 }}>Built to Scale.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px,2vw,20px)", color: "var(--nb-ink-muted)", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.65 }}>
              InferGate is purpose-built for regulated, high-throughput enterprise environments — from the Go runtime up. Govern costs, enforce security, and deploy with confidence.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={14} />
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginTop: 64, display: "flex", justifyContent: "center", gap: 0, flexWrap: "wrap", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", borderRadius: "var(--radius)", maxWidth: 800, marginInline: "auto", overflow: "hidden" }}
          >
            {[
              { v: "10,400 req/s", l: "Throughput" },
              { v: "0.3ms",        l: "P50 Overhead" },
              { v: "AES-256-GCM",  l: "Encryption" },
              { v: "6-Level",      l: "Budget Hierarchy" },
              { v: "25+",          l: "LLM Providers" },
            ].map((s, i) => (
              <div key={s.l} style={{ flex: 1, minWidth: 130, padding: "18px 20px", borderRight: i < 4 ? "2px solid var(--nb-border)" : "none", textAlign: "center", background: i % 2 === 0 ? "var(--nb-bg)" : "var(--nb-surface)" }}>
                <div style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 18, fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.03em", marginBottom: 2 }}>{s.v}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--nb-ink-dim)", textTransform: "uppercase", letterSpacing: ".09em" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4 Pillars ─────────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <p className="section-label">Why Enterprise Teams Choose InferGate</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            Four pillars of enterprise-grade AI.
          </h2>
          <div className="cards-4" style={{ gap: 20 }}>
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  className="nb-card"
                  style={{ padding: 32 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                >
                  <div className="feature-icon" style={{ marginBottom: 20 }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 22, fontWeight: 700, color: "var(--nb-orange)", letterSpacing: "-0.03em", marginBottom: 6 }}>
                    {p.stat}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65, marginBottom: 20 }}>{p.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {p.bullets.map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <CheckCircle size={13} color="var(--nb-green)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Security & Compliance ─────────────────────────── */}
      <section className="section section--invert">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 480px", gap: 64, alignItems: "center" }}>
            <div>
              <p className="section-label" style={{ color: "rgba(250,248,243,0.5)" }}>Security & Compliance</p>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20, color: "var(--nb-bg)" }}>
                Built for regulated
                {" "}<span className="text-serif" style={{ color: "var(--nb-yellow)" }}>enterprises.</span>
              </h2>
              <p style={{ color: "rgba(250,248,243,0.65)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
                InferGate was designed for financial services, healthcare, and government workloads — environments where security is non-negotiable. Every credential is encrypted, every request is logged, and your data never touches InferGate&apos;s infrastructure in air-gapped deployments.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {SECURITY_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 28, height: 28, background: "var(--nb-yellow)", border: "2px solid var(--nb-yellow)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, borderRadius: "2px" }}>
                        <Icon size={12} color="var(--nb-ink)" strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: 13, color: "rgba(250,248,243,0.75)", lineHeight: 1.5 }}>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Animated shield */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div style={{ position: "relative", width: 320, height: 320 }}>
                {/* Pulsing rings */}
                {[320, 260, 200].map((size, i) => (
                  <motion.div
                    key={size}
                    style={{ position: "absolute", top: "50%", left: "50%", width: size, height: size, borderRadius: "50%", border: "1.5px solid rgba(245,197,24,0.2)", transform: "translate(-50%,-50%)" }}
                    animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
                {/* Shield center */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 140, height: 140, background: "var(--nb-yellow)", border: "3px solid var(--nb-yellow)", boxShadow: "0 0 40px rgba(245,197,24,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Shield size={56} color="var(--nb-ink)" strokeWidth={1.5} />
                </div>
                {/* Orbiting badges */}
                {[
                  { label: "AES-256", angle: 0 },
                  { label: "SCIM 2.0", angle: 72 },
                  { label: "Vault", angle: 144 },
                  { label: "TLS 1.2+", angle: 216 },
                  { label: "SIEM", angle: 288 },
                ].map(({ label, angle }) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 130;
                  const x = 160 + r * Math.cos(rad - Math.PI / 2);
                  const y = 160 + r * Math.sin(rad - Math.PI / 2);
                  return (
                    <div key={label} style={{ position: "absolute", left: x - 28, top: y - 14, background: "var(--nb-invert)", border: "1.5px solid rgba(245,197,24,0.4)", borderRadius: 2, padding: "4px 8px", fontSize: 9, fontWeight: 800, fontFamily: "var(--font-jetbrains,monospace)", color: "var(--nb-yellow)", letterSpacing: ".08em", whiteSpace: "nowrap" }}>
                      {label}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Deployment options ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Deployment</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 12 }}>
            Deployment that meets your infrastructure.
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", marginBottom: 48, maxWidth: 600 }}>
            InferGate runs wherever your workloads run — cloud-native Kubernetes, private VPC, or fully air-gapped.
          </p>
          <div className="cards-3" style={{ gap: 24 }}>
            {DEPLOYMENT_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="nb-card"
                  style={{ padding: 36 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <div className="feature-icon"><Icon size={20} /></div>
                    <span style={{ fontSize: 10, fontWeight: 800, padding: "3px 8px", background: i === 0 ? "var(--nb-yellow)" : i === 1 ? "var(--nb-orange)" : "var(--nb-ink)", color: i === 2 ? "var(--nb-bg)" : "var(--nb-ink)", border: "1.5px solid var(--nb-border)", borderRadius: 2, letterSpacing: ".08em", textTransform: "uppercase" }}>
                      {card.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65, marginBottom: 24 }}>{card.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {card.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <CheckCircle size={13} color="var(--nb-green)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: "var(--nb-ink)", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Governance hierarchy ──────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <p className="section-label">Governance</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 12 }}>
            Enterprise-scale governance.
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", marginBottom: 48, maxWidth: 600 }}>
            A 6-level budget hierarchy gives every stakeholder exactly the control they need — from the CFO to the individual developer.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Hierarchy diagram */}
            <div>
              {GOVERNANCE_LEVELS.map((level, i) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 0,
                    marginBottom: i < GOVERNANCE_LEVELS.length - 1 ? 0 : 0,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 56, height: 56, background: level.color, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                      <span style={{ fontSize: 10, fontWeight: 800, fontFamily: "var(--font-jetbrains,monospace)", color: level.textColor, letterSpacing: ".04em" }}>{level.level}</span>
                    </div>
                    {i < GOVERNANCE_LEVELS.length - 1 && (
                      <div style={{ width: 2, height: 16, background: "var(--nb-border-light)", flexShrink: 0 }} />
                    )}
                  </div>
                  <div style={{ flex: 1, padding: "12px 20px", marginLeft: 16, background: i === 0 ? "var(--nb-invert)" : i === 5 ? "var(--nb-yellow-subtle)" : "var(--nb-bg)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", marginBottom: i < GOVERNANCE_LEVELS.length - 1 ? 4 : 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 2, color: i === 0 ? "var(--nb-bg)" : "var(--nb-ink)" }}>{level.label}</div>
                    <div style={{ fontSize: 12.5, color: i === 0 ? "rgba(250,248,243,0.65)" : "var(--nb-ink-muted)" }}>{level.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Governance explainer */}
            <div style={{ paddingTop: 8 }}>
              <div className="nb-card" style={{ padding: 32, marginBottom: 20 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>How Budget Enforcement Works</h3>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 20 }}>
                  Every incoming request is checked against all applicable budget levels in microseconds. If a request would exceed any level&apos;s budget, it is rejected before touching the provider — with a clear error indicating which level triggered the block.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Real-time enforcement — no async catch-up",
                    "Soft limits: warn at 80%, hard block at 100%",
                    "Budget resets: hourly, daily, monthly, or custom",
                    "Override paths for emergency traffic",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={13} color="var(--nb-green)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 13, color: "var(--nb-ink)", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="nb-card nb-card--yellow" style={{ padding: 28 }}>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>Virtual Keys</div>
                <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>
                  Issue scoped virtual keys to teams, apps, or CI pipelines. Each key inherits the L6 budget and can further restrict model access, rate limits, and allowed providers — without exposing raw API credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Implementation & Onboarding ───────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Onboarding</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 12 }}>
            Concierge implementation.
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", marginBottom: 48, maxWidth: 600 }}>
            Every enterprise engagement includes a dedicated onboarding program — from initial architecture review to production go-live and hypercare.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {ONBOARDING_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ display: "flex", alignItems: "flex-start", gap: 0, position: "relative" }}
              >
                {/* Connector */}
                {i < ONBOARDING_STEPS.length - 1 && (
                  <div style={{ position: "absolute", left: 27, top: 56, bottom: -1, width: 2, background: "var(--nb-border-light)", zIndex: 0 }} />
                )}
                <div style={{ width: 56, height: 56, background: i === 0 ? "var(--nb-invert)" : "var(--nb-bg)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1, borderRadius: "var(--radius)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 12, fontWeight: 700, color: i === 0 ? "var(--nb-yellow)" : "var(--nb-ink-muted)" }}>{step.step}</span>
                </div>
                <div style={{ flex: 1, padding: "12px 24px 36px" }}>
                  <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 6 }}>{step.title}</div>
                  <div style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section section--invert">
        <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow" style={{ background: "var(--nb-yellow)" }}><Building2 size={12} /> Enterprise Sales</span>
            <h2 style={{ fontSize: "clamp(30px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20, color: "var(--nb-bg)" }}>
              Ready to discuss your enterprise deployment?
            </h2>
            <p style={{ fontSize: 17, color: "rgba(250,248,243,0.65)", marginBottom: 36, lineHeight: 1.65 }}>
              Talk to our enterprise team. We&apos;ll walk you through architecture options, compliance requirements, and build a deployment plan for your organization.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={14} />
              </Link>
              <Link href="/trust" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: "var(--radius)", fontSize: 15, fontWeight: 700, cursor: "pointer", border: "2px solid rgba(250,248,243,0.3)", background: "transparent", color: "var(--nb-bg)", transition: "border-color .15s,background .15s", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(250,248,243,0.6)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(250,248,243,0.3)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                Security & Trust <Shield size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .security-grid { grid-template-columns: 1fr !important; }
          .governance-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
