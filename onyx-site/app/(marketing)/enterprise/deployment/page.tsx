"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Server, ArrowRight, Cloud, Container, Wifi, CheckCircle2, Settings } from "lucide-react";

export default function DeploymentPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Deployment Options</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Deploy on your<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>terms, in your environment.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
              Onyx runs wherever you need it. Cloud-hosted, self-managed on Kubernetes, containerized with Docker Compose, or fully air-gapped with no internet dependency. The same platform, the same capabilities, deployed to your security posture.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Discuss Your Requirements <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                icon: Cloud,
                title: "Cloud-Hosted",
                desc: "Onyx manages infrastructure, scaling, and updates. Your data remains in an isolated tenant. Fastest time-to-deployment for teams prioritizing speed.",
                features: ["Managed infrastructure", "Automatic updates", "Horizontal scaling", "Tenant data isolation", "SOC 2 controls"],
                accent: "var(--nb-teal)",
              },
              {
                icon: Server,
                title: "Self-Managed Kubernetes",
                desc: "Deploy Onyx on your Kubernetes cluster with Helm charts. Full control over your infrastructure, networking, and data residency.",
                features: ["Helm chart deployment", "Your cloud or on-premises", "Full infrastructure control", "Custom networking policies", "Production SLA supported"],
                accent: "var(--nb-amber)",
              },
              {
                icon: Wifi,
                title: "Air-Gapped",
                desc: "For organizations that require complete network isolation. Onyx runs entirely on-premises with local LLM inference via Ollama or vLLM. Zero public internet dependency.",
                features: ["No internet egress", "On-premises LLM (Ollama/vLLM)", "Data sovereignty guaranteed", "Supports classified environments", "Defense & gov use cases"],
                accent: "var(--nb-violet)",
              },
            ].map((tier, i) => {
              const Icon = tier.icon;
              return (
                <motion.div key={tier.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="nb-card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "var(--radius)", background: tier.accent, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={24} color={tier.accent === "var(--nb-amber)" ? "var(--nb-ink)" : "#fff"} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 10 }}>{tier.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{tier.desc}</p>
                  </div>
                  <div style={{ borderTop: "1.5px solid var(--nb-border)", paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {tier.features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5 }}>
                        <CheckCircle2 size={14} color={tier.accent === "var(--nb-amber)" ? "var(--nb-ink)" : tier.accent} style={{ flexShrink: 0 }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="section-label">LLM Flexibility</div>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20 }}>
            Bring your own LLM.
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 32 }}>
            Onyx is LLM-agnostic. Connect to the inference provider that fits your security posture, cost model, and performance requirements.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["OpenAI", "Anthropic", "Azure OpenAI", "AWS Bedrock", "Gemini / Vertex AI", "Mistral", "Ollama (local)", "vLLM (self-hosted)", "OpenRouter", "Groq", "Cerebras"].map((llm) => (
              <div key={llm} style={{ padding: "8px 14px", border: "1.5px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 13, fontWeight: 600, background: "var(--nb-surface)", boxShadow: "var(--shadow-brutal-sm)" }}>{llm}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Tell us about your environment.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            We'll recommend the deployment configuration that matches your infrastructure and security requirements.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Talk to Our Engineers <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
