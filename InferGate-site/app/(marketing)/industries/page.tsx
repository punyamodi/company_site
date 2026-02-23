"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Landmark, HeartPulse, Cpu, Building2, ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    slug: "financial-services",
    icon: Landmark,
    headline: "Financial Services",
    description:
      "PII guardrails, SOX/MiFID II audit logs, RBAC per trading desk, air-gapped VPC deployment, and Vault-managed API key rotation for financial-grade AI compliance.",
    tag: "Regulated",
    stat: { value: "AES-256", label: "encryption at rest" },
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    headline: "Healthcare",
    description:
      "PHI never leaves your perimeter. VPC-only deployment, PII/PHI redaction, on-prem Ollama/vLLM for sensitive workloads, and HIPAA-aligned audit trails.",
    tag: "HIPAA-aligned",
    stat: { value: "Zero", label: "external PHI exposure" },
  },
  {
    slug: "technology",
    icon: Cpu,
    headline: "Technology",
    description:
      "10,400 req/s throughput, semantic caching for 30–65% cost reduction, hot-reload CEL routing for A/B model testing, and a plugin system for custom middleware.",
    tag: "High-throughput",
    stat: { value: "10,400", label: "req/s · single node" },
  },
  {
    slug: "government",
    icon: Building2,
    headline: "Government",
    description:
      "Air-gapped sovereign deployment, on-prem LLM support, RBAC + SCIM for large-org provisioning, full audit logging, and FedRAMP-posture-aligned security controls.",
    tag: "Sovereign",
    stat: { value: "100%", label: "data residency control" },
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingTop: 128, paddingBottom: 72 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 780 }}
          >
            <span className="eyebrow">Industries</span>
            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                marginBottom: 24,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              Purpose-built governance{" "}
              <em
                className="text-serif"
                style={{ fontStyle: "italic", fontFamily: "var(--font-fraunces, Fraunces, serif)" }}
              >
                for every regulated sector.
              </em>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "var(--nb-ink-muted)",
                maxWidth: 620,
                lineHeight: 1.78,
              }}
            >
              AI infrastructure requirements vary significantly across regulated industries.
              InferGate ships with the compliance controls, deployment patterns, and security
              architecture that each sector demands — not bolted on after the fact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Industry cards ───────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 20,
            }}
          >
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={`/industries/${ind.slug}`}
                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                  >
                    <article
                      className="nb-card"
                      style={{
                        padding: "36px 30px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        background: "var(--nb-bg)",
                      }}
                    >
                      {/* Top row: icon + tag */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          marginBottom: 24,
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
                          {ind.tag}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: 22,
                          fontWeight: 800,
                          marginBottom: 12,
                          letterSpacing: "-0.035em",
                          lineHeight: 1.2,
                        }}
                      >
                        {ind.headline}
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
                        {ind.description}
                      </p>

                      {/* Stat strip */}
                      <div
                        style={{
                          padding: "14px 16px",
                          background: "var(--nb-surface)",
                          border: "1.5px solid var(--nb-border-light)",
                          borderRadius: "var(--radius)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 20,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: 800,
                            color: "var(--nb-ink)",
                            letterSpacing: "-0.03em",
                            fontFamily: "var(--font-bricolage, sans-serif)",
                          }}
                        >
                          {ind.stat.value}
                        </span>
                        <span
                          style={{ fontSize: 11, color: "var(--nb-ink-dim)", fontWeight: 600, textAlign: "right" }}
                        >
                          {ind.stat.label}
                        </span>
                      </div>

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
                        Explore {ind.headline} <ArrowRight size={13} strokeWidth={2.5} />
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Compliance callout strip ──────────────────────────── */}
      <section
        style={{
          background: "var(--nb-invert)",
          borderTop: "2px solid var(--nb-border)",
          borderBottom: "2px solid var(--nb-border)",
          padding: "48px 24px",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 32,
              textAlign: "center",
            }}
          >
            {[
              { label: "SOX / MiFID II", sub: "Audit log support" },
              { label: "HIPAA-aligned", sub: "PHI redaction & VPC" },
              { label: "FedRAMP posture", sub: "Air-gapped deployment" },
              { label: "SCIM 2.0 + RBAC", sub: "All sectors" },
            ].map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "var(--nb-yellow)",
                    marginBottom: 6,
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-bricolage, sans-serif)",
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 12, color: "rgba(250,248,243,0.45)", fontWeight: 500 }}>{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="section">
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
            <span className="eyebrow">Don&apos;t see your industry?</span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                marginBottom: 16,
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
              }}
            >
              InferGate adapts to your compliance requirements.
            </h2>
            <p style={{ color: "var(--nb-ink-muted)", fontSize: 17, marginBottom: 36, lineHeight: 1.7 }}>
              Whether you&apos;re in insurance, legal, energy, or any other sector with strict data
              governance requirements — our team will walk through exactly how InferGate maps
              to your framework.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Talk to a compliance engineer →
              </Link>
              <Link href="/trust" className="btn-secondary">
                Trust & security overview
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
