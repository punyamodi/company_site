"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Zap, Shield, DollarSign, Code2,
  ArrowRight, Globe, Brain, Database, BarChart3, Lock, Server,
} from "lucide-react";

const VALUES = [
  {
    icon: Zap,
    title: "Uncompromising Performance",
    body: "10,400 req/s on minimal hardware. 0.3ms P50 overhead. Zero-allocation middleware written in Go. Performance is a feature, not a benchmark footnote.",
    accent: "var(--nb-yellow)",
  },
  {
    icon: Shield,
    title: "Data Sovereignty",
    body: "Your prompts never leave your infrastructure. InferGate is designed for VPC-native, air-gapped, and on-premises deployments. You own your data — always.",
    accent: "var(--nb-yellow)",
  },
  {
    icon: DollarSign,
    title: "Financial Transparency",
    body: "Real-time cost attribution down to the individual request. 6-level budget governance. No surprise bills. No opaque markup on token costs.",
    accent: "var(--nb-yellow)",
  },
  {
    icon: Code2,
    title: "Engineering Excellence",
    body: "Built by engineers, for engineers. Every API is documented. Every behavior is deterministic. We ship production-grade software, not demos.",
    accent: "var(--nb-yellow)",
  },
];

const PLATFORM_STATS = [
  { value: "25+",    label: "LLM Providers" },
  { value: "0.3ms",  label: "P50 Overhead" },
  { value: "10,400", label: "Req/s Peak" },
  { value: "~50MB",  label: "Memory Footprint" },
  { value: "65%",    label: "Avg Cost Reduction" },
  { value: "6",      label: "Governance Levels" },
];

const PLATFORM_FEATURES = [
  { icon: Globe,     label: "25+ AI providers unified behind one OpenAI-compatible API" },
  { icon: Brain,     label: "Native MCP gateway for multi-agent orchestration" },
  { icon: Database,  label: "Semantic caching with configurable similarity thresholds" },
  { icon: BarChart3, label: "6-level budget governance (org → workspace → project → key → model → request)" },
  { icon: Lock,      label: "RBAC, SCIM 2.0, SSO, HashiCorp Vault integration" },
  { icon: Server,    label: "VPC-native deployment · Air-gapped · On-prem model support" },
];

/* ── Go architecture SVG ── */
function GoArchSVG() {
  return (
    <svg width="100%" viewBox="0 0 520 320" fill="none" aria-hidden="true" style={{ maxWidth: 520 }}>
      {/* Background */}
      <rect width="520" height="320" rx="4" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />

      {/* Title bar */}
      <rect width="520" height="36" fill="#111" />
      <circle cx="18" cy="18" r="5" fill="#FF5F57" />
      <circle cx="36" cy="18" r="5" fill="#FEBC2E" />
      <circle cx="54" cy="18" r="5" fill="#28C840" />
      <text x="270" y="23" textAnchor="middle" fill="rgba(250,248,243,0.4)" fontSize="11" fontWeight="700" fontFamily="'JetBrains Mono',monospace" letterSpacing=".1em">
        infergate — gateway.go
      </text>

      {/* Code lines */}
      {[
        { y: 62,  color: "#6b7280", text: "// zero-allocation middleware chain" },
        { y: 84,  color: "#F5C518", text: "func", rest: " (g *Gateway) ServeHTTP(" },
        { y: 104, color: "#e8e2d0", text: "    w http.ResponseWriter, r *http.Request) {" },
        { y: 128, color: "#6b7280", text: "    // route · cache · govern · observe" },
        { y: 150, color: "#c4b5fd", text: "    g.chain.ServeHTTP(w, r)" },
        { y: 170, color: "#e8e2d0", text: "}" },
        { y: 198, color: "#6b7280", text: "// BenchmarkGateway — apple M2 pro" },
        { y: 220, color: "#86efac", text: "// BenchmarkGateway-10   10400 req/s" },
        { y: 242, color: "#86efac", text: "// ns/op: 96141    allocs/op: 0" },
        { y: 262, color: "#fb923c", text: "// Memory:  ~50 MB RSS  (vs 800MB Node)" },
        { y: 284, color: "#fb923c", text: "// Latency: 0.3ms P50  · 1.1ms P99" },
      ].map((line, i) => (
        <text key={i} x="20" y={line.y} fill={line.color} fontSize="12" fontWeight="500" fontFamily="'JetBrains Mono',monospace">
          {line.text}
          {line.rest && <tspan fill="#e8e2d0">{line.rest}</tspan>}
        </text>
      ))}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────── */}
      <section className="section dot-grid">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">About InferGate</span>
            <h1 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
              Building the control plane<br />
              for <span style={{ color: "var(--nb-orange)" }}>enterprise AI.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontWeight: 400 }}>
              One gateway. Every model. Complete control over cost, latency, governance, and compliance — deployed inside your own infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ────────────────────────────── */}
      <section className="section section--surface">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Our mission</span>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 24 }}>
                We built InferGate because AI infrastructure was broken.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Teams were hardcoding provider SDKs into production services, creating brittle integrations that shattered with every API update.",
                  "Enterprises were paying 10× what they should — because nobody had visibility into token costs, no caching, and no routing intelligence.",
                  "Sensitive data was flowing through uncontrolled endpoints with no audit trail, no governance, and no compliance posture.",
                  "We built InferGate to fix all three problems simultaneously — with a single, Go-native gateway that runs inside your own infrastructure.",
                ].map((text, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <span style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 11, fontWeight: 700 }}>{i + 1}</span>
                    </div>
                    <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, fontWeight: 500 }}>{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="nb-card nb-card--invert" style={{ padding: "40px 36px" }}>
                <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(250,248,243,0.5)", marginBottom: 24 }}>
                  The numbers speak
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {PLATFORM_STATS.map((s) => (
                    <div key={s.label} style={{ padding: "16px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "2px", background: "rgba(255,255,255,0.04)" }}>
                      <p style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 26, fontWeight: 700, color: "var(--nb-yellow)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{s.value}</p>
                      <p style={{ fontSize: 11, color: "rgba(250,248,243,0.5)", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Core principles</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              What we stand for
            </h2>
          </div>

          <div className="cards-2">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <div className="nb-card" style={{ padding: "36px 32px", height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                      <div style={{ width: 48, height: 48, background: val.accent, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={22} color="var(--nb-ink)" />
                      </div>
                      <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.03em" }}>{val.title}</h3>
                    </div>
                    <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>{val.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Built in Go ────────────────────────── */}
      <section className="section section--surface">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GoArchSVG />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="section-label">Why Go?</span>
              <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 24 }}>
                Built in Go for{" "}
                <span style={{ color: "var(--nb-orange)" }}>uncompromising performance.</span>
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 28 }}>
                When every millisecond of overhead multiplies across millions of requests, language choice is architecture. Go gives us zero-allocation middleware chains, goroutine concurrency that scales linearly, and a runtime that predictably handles production load.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Zero-allocation middleware", detail: "No GC pressure per request — allocations happen once at startup." },
                  { label: "Sub-millisecond P50 latency", detail: "0.3ms P50 overhead even under 10,000+ concurrent connections." },
                  { label: "Linear horizontal scaling", detail: "Add nodes, throughput scales proportionally. No thread-pool tuning." },
                  { label: "10,400 req/s on minimal hardware", detail: "Measured on a single Apple M2 Pro node. Your Kubernetes cluster does more." },
                  { label: "~50MB memory footprint", detail: "Versus 400–800MB for equivalent Python or Node.js gateways." },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingBottom: 14, borderBottom: "1px solid var(--nb-border-faint)" }}>
                    <div style={{ width: 8, height: 8, background: "var(--nb-orange)", border: "1.5px solid var(--nb-border)", borderRadius: "2px", flexShrink: 0, marginTop: 6 }} />
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 2 }}>{item.label}</p>
                      <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What we've built ───────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">The platform</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              What we&apos;ve built
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.7 }}>
              A complete AI infrastructure layer — not just a proxy, but a full control plane for how your organization uses AI at scale.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {PLATFORM_FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="nb-card" style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
                    <div className="feature-icon" style={{ flexShrink: 0 }}>
                      <Icon size={18} />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.5, letterSpacing: "-0.01em" }}>{feat.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/features" className="btn-secondary" style={{ display: "inline-flex" }}>
              Explore all features <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="eyebrow" style={{ background: "var(--nb-yellow)", color: "var(--nb-ink)" }}>Get started</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", lineHeight: 1.1, marginBottom: 20, marginTop: 4 }}>
              Ready to take control of your AI infrastructure?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(250,248,243,0.65)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
              Talk to our engineering team about your specific use case, architecture, and requirements.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Sales <ArrowRight size={14} /></Link>
              <Link href="/book-demo" className="btn-invert">Book a Demo <ArrowRight size={14} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
