"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Target, Shield, Zap, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">About Genie</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 24 }}>
              Every organization deserves<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>AI that knows what it knows.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 640, lineHeight: 1.75 }}>
              Genie was built to solve a universal enterprise problem: organizations have accumulated enormous amounts of institutional knowledge across dozens of systems, yet that knowledge is almost entirely inaccessible at the moment it's needed. Teams make worse decisions, repeat research that has already been done, and onboard slowly because the answers exist — they just can't be found.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <div className="section-label">Mission</div>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
                Making organizational knowledge genuinely useful.
              </h2>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 20 }}>
                Genie is the AI platform that connects to your organization's knowledge sources and makes them accessible through natural conversation — with citations, access control, and the depth of analysis that complex decisions require.
              </p>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>
                We believe that AI in the enterprise must be trustworthy: grounded in real documents, controlled by real permissions, and auditable by real compliance teams. We built Genie to hold that standard.
              </p>
            </div>
            <div>
              <div className="section-label">Platform Philosophy</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { icon: Target, title: "Grounded in real knowledge", desc: "Genie never fabricates. Every response is grounded in retrieved documents with cited sources, so users can trust what they read and trace where it came from." },
                  { icon: Shield, title: "Security is the foundation", desc: "Access control, audit logging, tenant isolation, and deployment flexibility are not optional features — they are fundamental to how Genie works." },
                  { icon: Zap, title: "Agentic where it matters", desc: "For complex research and multi-step workflows, Genie agents reason, plan, and synthesize at a depth that simple search cannot match." },
                  { icon: Globe, title: "LLM-agnostic by design", desc: "Organizations should not be locked to a single AI provider. Genie works with every major LLM and supports on-premises models for complete independence." },
                ].map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} color="#fff" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{v.title}</div>
                        <div style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{v.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Platform Capabilities</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 24 }}>
            What Genie does, at a glance.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              ["Enterprise Search & RAG", "Semantic retrieval across all connected sources with document-level access control."],
              ["Custom AI Agents", "Configurable personas with targeted knowledge access and system prompt control."],
              ["Deep Research", "Multi-step agentic research loops for complex analytical tasks."],
              ["40+ Connectors", "Pre-built integrations with every major enterprise knowledge source."],
              ["MCP & Actions", "Agents that can take actions in external systems, not just answer questions."],
              ["Knowledge Graph", "Entity extraction and relationship mapping across your entire corpus."],
              ["Code Interpreter", "In-context code execution for data analysis and visualization."],
              ["Multi-LLM Support", "Compatible with every major AI provider and self-hosted models."],
              ["Enterprise Security", "SSO, SCIM, RBAC, audit logging, air-gapped deployment."],
            ].map(([title, desc]) => (
              <motion.div key={title as string}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4 }}
                style={{ padding: "20px 24px", border: "1.5px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-surface)" }}>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Ready to see it in your environment?
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
