"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  GitBranch, Shield, Database, Eye, BarChart3, Lock, Zap, Brain,
  Activity, Server, Layers, Key, ArrowRight, Check, X,
} from "lucide-react";

const TAG_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  Core:       { bg: "var(--nb-yellow)",  color: "var(--nb-ink)", border: "var(--nb-border)" },
  Enterprise: { bg: "var(--nb-invert)",  color: "var(--nb-bg)",  border: "var(--nb-border)" },
  Agents:     { bg: "var(--nb-orange)",  color: "#fff",          border: "var(--nb-orange)" },
  Platform:   { bg: "var(--nb-surface)", color: "var(--nb-ink)", border: "var(--nb-border)" },
};

interface FeatureCard {
  slug: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  shortDesc: string;
  tag: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  { slug: "routing",                 icon: GitBranch, label: "Intelligent Routing",     shortDesc: "CEL-based routing evaluated in <100µs. Route by cost, latency, region, tokens, or custom metadata tags.",          tag: "Core" },
  { slug: "fallback",                icon: Shield,    label: "Provider Fallback",        shortDesc: "Automatic A→B→C failover with exponential backoff. Clients never see provider errors.",                            tag: "Core" },
  { slug: "caching",                 icon: Database,  label: "Semantic Caching",         shortDesc: "30–65% cost reduction via vector-similarity deduplication using Qdrant or pgvector.",                              tag: "Core" },
  { slug: "observability",           icon: Eye,       label: "Observability & Tracing",  shortDesc: "Prometheus metrics, OpenTelemetry traces, WebSocket log streaming, and an immutable audit trail.",                 tag: "Core" },
  { slug: "rate-limiting",           icon: BarChart3, label: "Budget Governance",        shortDesc: "6-level hierarchy from org to model. Real-time cost tracking. Zero surprise bills.",                               tag: "Core" },
  { slug: "access-control",          icon: Lock,      label: "Virtual Keys & Access",    shortDesc: "ig_vkey_ scoped keys with RBAC, SCIM 2.0, SSO (Google/GitHub), TTL, and instant revocation.",                     tag: "Core" },
  { slug: "guardrails",              icon: Shield,    label: "AI Guardrails",            shortDesc: "PII redaction, semantic content filters, and policy enforcement at the gateway layer.",                            tag: "Enterprise" },
  { slug: "mcp-gateway",             icon: Brain,     label: "Native MCP Gateway",       shortDesc: "Built-in MCP 2024-11-05 spec. Tool registry, agent loop, Starlark sandboxed execution.",                          tag: "Agents" },
  { slug: "adaptive-load-balancing", icon: Activity,  label: "Adaptive Load Balancing",  shortDesc: "4 algorithms: round-robin, weighted, priority, and latency-based with a 5-min rolling window.",                  tag: "Enterprise" },
  { slug: "clustering",              icon: Server,    label: "Clustering & HA",          shortDesc: "Stateless nodes, Redis/Postgres shared state, official Helm chart, zero-downtime rolling updates.",                tag: "Enterprise" },
  { slug: "audit-logs",              icon: Layers,    label: "Audit Logs & Compliance",  shortDesc: "Immutable append-only trail, SIEM-ready JSON. SOC 2 / HIPAA / ISO 27001 exports.",                               tag: "Enterprise" },
  { slug: "vault",                   icon: Key,       label: "Vault Integration",        shortDesc: "HashiCorp Vault for external key management, dynamic secrets, and transit encryption.",                           tag: "Enterprise" },
  { slug: "plugins",                 icon: Zap,       label: "Plugin System",            shortDesc: "BeforeHook/AfterHook Go interface. 9 bundled plugins: otel, semanticcache, governance, and more.",               tag: "Platform" },
];

const COMPARISON_ROWS = [
  { feature: "Multi-provider routing",      rawApi: null,                      ig: "CEL-based, evaluated in <100µs" },
  { feature: "Provider failover",            rawApi: null,                      ig: "Automatic, exponential backoff + jitter" },
  { feature: "Semantic response caching",   rawApi: null,                      ig: "30–65% cost reduction, vector dedup" },
  { feature: "Budget & cost controls",      rawApi: null,                      ig: "6-level hierarchy, hard + soft limits" },
  { feature: "Per-key rate limiting",       rawApi: "Provider-level only",     ig: "Per org / team / key / model" },
  { feature: "Distributed tracing",         rawApi: null,                      ig: "OpenTelemetry → Jaeger / Datadog / OTLP" },
  { feature: "API key management",          rawApi: "Raw keys in application",  ig: "Virtual keys, RBAC, TTL, revocation" },
  { feature: "PII guardrails",              rawApi: null,                      ig: "Pattern + semantic filters, audit logged" },
  { feature: "MCP / agent support",         rawApi: null,                      ig: "Native spec, tool registry, Starlark sandbox" },
  { feature: "Immutable audit trail",       rawApi: null,                      ig: "Append-only, SIEM-ready, queryable" },
  { feature: "Load balancing",              rawApi: null,                      ig: "4 algorithms, latency-aware routing" },
  { feature: "SSO & SCIM provisioning",     rawApi: null,                      ig: "Google/GitHub OAuth2, Okta/Azure AD SCIM" },
  { feature: "HashiCorp Vault integration", rawApi: null,                      ig: "Dynamic secrets, transit encryption" },
  { feature: "Plugin extensibility",        rawApi: null,                      ig: "Go hooks, 9 bundled, hot-reloadable" },
];

const PROVIDERS = [
  "OpenAI", "Anthropic", "AWS Bedrock", "Google Vertex AI", "Azure OpenAI",
  "Gemini", "Mistral", "Groq", "Cerebras", "Cohere", "Ollama",
  "xAI", "OpenRouter", "Perplexity", "HuggingFace", "ElevenLabs",
];

export default function FeaturesPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingTop: 104, paddingBottom: 72 }}>
        <div className="container" style={{ maxWidth: 960, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">AI Gateway Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              fontSize: "clamp(38px, 5.5vw, 72px)", fontWeight: 900,
              letterSpacing: "-0.04em", lineHeight: 1.0,
              maxWidth: 860, margin: "0 auto 24px",
            }}
          >
            Every capability your AI{" "}
            <em style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', serif)",
              fontStyle: "italic", color: "var(--nb-orange)",
            }}>
              infrastructure
            </em>{" "}
            demands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 18, color: "var(--nb-ink-muted)",
              maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.7,
            }}
          >
            InferGate is a production-grade AI gateway — intelligent routing, semantic caching,
            enterprise security, and native MCP in a single sub-millisecond runtime supporting 25+ providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-primary">
              Talk to our team <ArrowRight size={14} />
            </Link>
            <Link href="/integrations" className="btn-secondary">
              See all integrations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ────────────────────────────────────────────── */}
      <div style={{
        background: "var(--nb-invert)",
        borderTop: "2px solid var(--nb-border)",
        borderBottom: "2px solid var(--nb-border)",
        overflowX: "auto",
      }}>
        <div className="container" style={{ padding: "0 24px" }}>
          <div style={{ display: "flex", minWidth: "max-content" }}>
            {[
              { val: "10,400", unit: "req/s",     label: "Peak throughput" },
              { val: "0.3ms",  unit: "P50",       label: "Median latency" },
              { val: "1.2ms",  unit: "P99",       label: "Tail latency" },
              { val: "<100µs", unit: "",           label: "CEL routing eval" },
              { val: "25+",    unit: "providers",  label: "AI providers" },
              { val: "30–65%", unit: "",           label: "Cache cost saving" },
              { val: "<2s",    unit: "",           label: "Cold start" },
            ].map((s, i, arr) => (
              <div key={i} style={{
                display: "flex", flexDirection: "column", gap: 4,
                padding: "22px 36px",
                borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                flexShrink: 0,
              }}>
                <span style={{
                  fontSize: 24, fontWeight: 900, color: "var(--nb-yellow)",
                  letterSpacing: "-0.03em", lineHeight: 1,
                  fontFamily: "var(--font-display, 'Bricolage Grotesque', sans-serif)",
                }}>
                  {s.val}
                  {s.unit && (
                    <span style={{ fontSize: 13, fontWeight: 600, marginLeft: 4, color: "rgba(255,255,255,0.5)" }}>
                      {s.unit}
                    </span>
                  )}
                </span>
                <span style={{
                  fontSize: 11, color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700,
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature cards grid ────────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="section-label">Platform capabilities</span>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900,
              letterSpacing: "-0.035em", maxWidth: 560,
            }}>
              Built for production from day one
            </h2>
            <p style={{
              color: "var(--nb-ink-muted)", fontSize: 15, marginTop: 12,
              maxWidth: 520, lineHeight: 1.65,
            }}>
              Click any capability to see full documentation, configuration examples, and architecture details.
            </p>
          </div>

          <div className="cards-3" style={{ gap: 16 }}>
            {FEATURE_CARDS.map((card, i) => {
              const Icon = card.icon;
              const tc = TAG_COLORS[card.tag];
              return (
                <motion.div
                  key={card.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.42, delay: (i % 3) * 0.07 }}
                >
                  <Link
                    href={`/features/${card.slug}`}
                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                  >
                    <article className="nb-card" style={{ padding: 24, height: "100%", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                        <div className="feature-icon"><Icon size={20} /></div>
                        <span style={{
                          fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase",
                          padding: "3px 8px", border: `1.5px solid ${tc.border}`,
                          background: tc.bg, color: tc.color, borderRadius: 2,
                        }}>
                          {card.tag}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>
                        {card.label}
                      </h3>
                      <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.65, flex: 1 }}>
                        {card.shortDesc}
                      </p>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 5,
                        marginTop: 20, color: "var(--nb-orange)", fontSize: 13, fontWeight: 700,
                      }}>
                        Explore feature <ArrowRight size={12} />
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="section-label">Why a gateway</span>
            <h2 style={{
              fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 900,
              letterSpacing: "-0.035em", maxWidth: 540,
            }}>
              Direct API calls vs InferGate
            </h2>
            <p style={{
              color: "var(--nb-ink-muted)", fontSize: 15, marginTop: 12,
              maxWidth: 500, lineHeight: 1.65,
            }}>
              Every capability you&apos;d otherwise build and maintain yourself — shipped, tested, and running
              at sub-millisecond speed.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              border: "2px solid var(--nb-border)",
              boxShadow: "var(--shadow-brutal)",
              borderRadius: "var(--radius)",
              overflow: "auto",
            }}
          >
            <table className="ig-table">
              <thead>
                <tr>
                  <th style={{ minWidth: 220 }}>Capability</th>
                  <th style={{ minWidth: 210 }}>Direct provider API</th>
                  <th className="col-us" style={{ minWidth: 270 }}>✦ InferGate</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td className="bold">{row.feature}</td>
                    <td>
                      <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{
                          width: 18, height: 18, display: "inline-flex",
                          alignItems: "center", justifyContent: "center",
                          background: "var(--nb-danger-subtle)", borderRadius: "50%", flexShrink: 0,
                        }}>
                          <X size={10} color="var(--nb-danger)" />
                        </span>
                        <span style={{ color: "var(--nb-ink-dim)", fontSize: 13 }}>
                          {row.rawApi ?? "Not included"}
                        </span>
                      </span>
                    </td>
                    <td className="col-us">
                      <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{
                          width: 18, height: 18, display: "inline-flex",
                          alignItems: "center", justifyContent: "center",
                          background: "var(--nb-success-subtle)", borderRadius: "50%", flexShrink: 0,
                        }}>
                          <Check size={10} color="var(--nb-success)" />
                        </span>
                        <span style={{ color: "var(--nb-ink)", fontSize: 13, fontWeight: 600 }}>{row.ig}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── Provider marquee ──────────────────────────────────────── */}
      <div style={{
        borderTop: "2px solid var(--nb-border-light)",
        borderBottom: "2px solid var(--nb-border-light)",
        padding: "36px 0", overflow: "hidden",
      }}>
        <p style={{
          textAlign: "center", fontSize: 11, fontWeight: 800,
          letterSpacing: ".14em", textTransform: "uppercase",
          color: "var(--nb-ink-dim)", marginBottom: 20,
        }}>
          25+ AI providers supported out of the box
        </p>
        <div className="marquee">
          <div className="marquee-track">
            {[...PROVIDERS, ...PROVIDERS].map((p, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center",
                padding: "7px 22px", margin: "0 5px",
                border: "1.5px solid var(--nb-border-light)",
                borderRadius: 2, background: "var(--nb-bg)",
                fontSize: 13, fontWeight: 700, color: "var(--nb-ink-muted)",
                whiteSpace: "nowrap",
              }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 800,
              letterSpacing: ".14em", textTransform: "uppercase",
              color: "rgba(245,197,24,0.75)", marginBottom: 20,
            }}>
              — Get started —
            </span>
            <h2 style={{
              fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 900,
              letterSpacing: "-0.04em", marginBottom: 18,
              color: "var(--nb-bg)", lineHeight: 1.05,
            }}>
              Ready to see it in action?
            </h2>
            <p style={{
              fontSize: 17, color: "rgba(250,248,243,0.65)",
              maxWidth: 460, margin: "0 auto 36px", lineHeight: 1.7,
            }}>
              Talk to our engineering team and see how InferGate fits your
              production AI infrastructure.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact our team <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
