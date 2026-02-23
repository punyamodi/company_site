"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Cpu,
  Building2,
  ShieldCheck,
  DollarSign,
  Zap,
  Bot,
  Server,
  ArrowRight,
} from "lucide-react";

const SOLUTIONS = [
  {
    slug: "platform-engineers",
    icon: Cpu,
    headline: "Platform & ML Engineers",
    description:
      "Drop-in URL replacement, CEL routing under 100µs, hot-reload config, Go SDK, and a plugin system. Built for teams that own AI infrastructure end-to-end.",
    tag: "Infrastructure",
  },
  {
    slug: "cto-it-leaders",
    icon: Building2,
    headline: "CTO & IT Leaders",
    description:
      "6-level budget hierarchy, real-time dashboards, RBAC, audit trail, and SCIM 2.0 provisioning. Complete visibility and control over every AI dollar.",
    tag: "Governance",
  },
  {
    slug: "security-compliance",
    icon: ShieldCheck,
    headline: "Security & Compliance",
    description:
      "AES-256, TLS 1.2+, PII guardrails, HashiCorp Vault, SCIM 2.0, and SIEM-ready audit logs. VPC-deployable for air-gapped regulated environments.",
    tag: "Enterprise",
  },
  {
    slug: "cost-control",
    icon: DollarSign,
    headline: "Cost Control",
    description:
      "Semantic caching cuts AI spend by 30–65%. Real-time budget enforcement reroutes traffic to cheaper models before overages happen.",
    tag: "FinOps",
  },
  {
    slug: "high-throughput",
    icon: Zap,
    headline: "High-Throughput Apps",
    description:
      "10,400 req/s on a single node. Zero-allocation Go middleware, 0.3ms P50 latency, and SSE zero-copy streaming for production-scale AI.",
    tag: "Performance",
  },
  {
    slug: "agent-orchestration",
    icon: Bot,
    headline: "Agent Orchestration",
    description:
      "Native MCP gateway with tool registry, Starlark execution, and health monitoring. Reduce agentic LLM round-trips by up to 10x.",
    tag: "Agentic AI",
  },
  {
    slug: "self-hosted",
    icon: Server,
    headline: "Self-Hosted / VPC",
    description:
      "Complete data sovereignty in your infrastructure. Air-gapped VPC, Ollama/vLLM local models, and a Kubernetes Helm chart with HPA and PDB.",
    tag: "Sovereignty",
  },
];

const STATS = [
  { value: "10,400", label: "req/s single node" },
  { value: "0.3ms", label: "P50 overhead" },
  { value: "25+", label: "providers unified" },
  { value: "30–65%", label: "avg cost reduction" },
];

export default function SolutionsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingTop: 128, paddingBottom: 72 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 760 }}
          >
            <span className="eyebrow">Solutions</span>
            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                marginBottom: 24,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              The right gateway{" "}
              <em
                className="text-serif"
                style={{ fontStyle: "italic", fontFamily: "var(--font-fraunces, Fraunces, serif)" }}
              >
                for every team.
              </em>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "var(--nb-ink-muted)",
                maxWidth: 600,
                lineHeight: 1.78,
              }}
            >
              Whether you&apos;re a platform engineer standardizing AI integrations, a CISO
              locking down sensitive workloads in an air-gapped VPC, or a FinOps lead
              watching your LLM bill balloon — InferGate is purpose-built for your exact
              requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)", borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                style={{
                  padding: "28px 24px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 800,
                    color: "var(--nb-yellow)",
                    letterSpacing: "-0.03em",
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    marginBottom: 4,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 12, color: "rgba(250,248,243,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution Cards ───────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-label" style={{ marginBottom: 40 }}>
            All solutions
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {SOLUTIONS.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.slug}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={`/solutions/${sol.slug}`}
                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                  >
                    <article
                      className="nb-card"
                      style={{
                        padding: "32px 28px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        background: "var(--nb-bg)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          marginBottom: 20,
                        }}
                      >
                        <div className="feature-icon">
                          <Icon size={20} strokeWidth={2.5} />
                        </div>
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 800,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--nb-ink-dim)",
                            fontFamily: "var(--font-bricolage, sans-serif)",
                            paddingTop: 4,
                          }}
                        >
                          {sol.tag}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontSize: 19,
                          fontWeight: 800,
                          marginBottom: 10,
                          letterSpacing: "-0.03em",
                          lineHeight: 1.25,
                        }}
                      >
                        {sol.headline}
                      </h3>
                      <p
                        style={{
                          fontSize: 14.5,
                          color: "var(--nb-ink-muted)",
                          lineHeight: 1.78,
                          flex: 1,
                          marginBottom: 28,
                        }}
                      >
                        {sol.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 13,
                          fontWeight: 700,
                          color: "var(--nb-orange)",
                          fontFamily: "var(--font-bricolage, sans-serif)",
                        }}
                      >
                        Explore solution <ArrowRight size={13} strokeWidth={2.5} />
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="section section--invert">
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 620 }}
          >
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 48px)",
                color: "var(--nb-bg)",
                marginBottom: 16,
                letterSpacing: "-0.035em",
              }}
            >
              Not sure which solution fits?
            </h2>
            <p
              style={{
                color: "rgba(250,248,243,0.6)",
                fontSize: 17,
                marginBottom: 36,
                lineHeight: 1.7,
              }}
            >
              Our team will walk through your infrastructure requirements and identify
              exactly where InferGate delivers the most value for your use case.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Talk to an engineer →
              </Link>
              <Link href="/book-demo" className="btn-secondary">
                Book a live demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
