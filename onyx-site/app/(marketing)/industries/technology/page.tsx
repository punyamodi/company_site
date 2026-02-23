"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Factory, ArrowRight, Code2, Zap, Database, Users, Settings, Plug } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Technology Companies</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              The AI platform<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>engineers respect.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
              Technology companies have the highest standards for the tools they adopt. Onyx is built for engineering-first organizations: fully customizable agents, MCP for action integration, a complete API surface, and the flexibility to run any LLM stack you need.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Request Demo <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-3">
            {[
              { icon: Code2, title: "API-First Architecture", desc: "Every capability in Onyx is accessible via REST API. Build custom interfaces, integrations, and workflows that embed Onyx into your product and processes." },
              { icon: Plug, title: "MCP Tool Integration", desc: "Connect agents to any internal system via the Model Context Protocol. Agents can query databases, call internal APIs, and trigger workflows with structured tool calls." },
              { icon: Database, title: "Any LLM Stack", desc: "Onyx works with every major LLM provider and also supports self-hosted models via Ollama and vLLM — giving your team full control over the inference layer." },
              { icon: Settings, title: "Deep Customization", desc: "Custom system prompts, retrieval tuning, persona configuration, and per-agent tool selection. Onyx adapts to your product requirements, not vice versa." },
              { icon: Zap, title: "Connector Ecosystem", desc: "40+ pre-built connectors cover the entire modern SaaS stack — from Notion to Linear to Datadog. New connectors can be built against the standard connector interface." },
              { icon: Users, title: "Enterprise RBAC", desc: "Sophisticated role-based access control lets platform teams define exactly who can access what agents, documents, and capabilities across the organization." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="#fff" />
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
            Built for teams that build things.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
