"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Bot, Search, Microscope, Plug, Zap, Network, Code2, Globe, Image as ImageIcon, ArrowRight, ChevronRight } from "lucide-react";

const PLATFORM_FEATURES = [
  { icon: Bot, title: "Custom AI Agents", desc: "Build agents with unique instructions, knowledge, and tool access for every team workflow.", href: "/platform/ai-agents", accent: "var(--nb-amber)" },
  { icon: Search, title: "RAG & Enterprise Search", desc: "Hybrid vector + BM25 search that scales to tens of millions of documents.", href: "/platform/rag-search", accent: "var(--nb-teal)" },
  { icon: Microscope, title: "Deep Research", desc: "Agentic multi-step research that synthesizes comprehensive answers from across your knowledge base.", href: "/platform/deep-research", accent: "var(--nb-violet)" },
  { icon: Network, title: "Knowledge Graph", desc: "Entity extraction and relationship mapping that turns documents into connected intelligence.", href: "/platform/knowledge-graph", accent: "var(--nb-amber)" },
  { icon: Plug, title: "40+ Connectors", desc: "Native integrations to every tool in your stack — continuously synced and permissioned.", href: "/platform/connectors", accent: "var(--nb-teal)" },
  { icon: Zap, title: "MCP & Actions", desc: "Give agents the ability to interact with external systems via Model Context Protocol.", href: "/platform/mcp-actions", accent: "var(--nb-violet)" },
  { icon: Code2, title: "Code Interpreter", desc: "Execute Python, analyze data, and render charts within a secure sandboxed environment.", href: "/platform/code-interpreter", accent: "var(--nb-amber)" },
  { icon: Globe, title: "Web Search", desc: "Real-time web browsing with Google PSE, Exa, Serper, and built-in scraping capabilities.", href: "/platform/web-search", accent: "var(--nb-teal)" },
  { icon: ImageIcon, title: "Image Generation", desc: "Generate images from natural language prompts, embedded directly in the chat experience.", href: "/platform/image-generation", accent: "var(--nb-violet)" },
];

export default function PlatformPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Platform Overview</div>
            <h1 style={{ fontSize: "clamp(40px,6vw,80px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              The complete<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>enterprise AI</span> stack.
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Genie is a unified platform that connects, indexes, and activates your organization's institutional knowledge — with custom agents, deep research, and complete security controls.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
              <Link href="/pricing" className="btn-secondary" style={{ textDecoration: "none" }}>Enterprise Pricing <ChevronRight size={16} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-3">
            {PLATFORM_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
                  <Link href={f.href} className="nb-card" style={{ display: "block", padding: 28, textDecoration: "none" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: f.accent, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <Icon size={20} color={f.accent === "var(--nb-amber)" ? "var(--nb-ink)" : "#fff"} />
                    </div>
                    <h2 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 10 }}>{f.title}</h2>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 14 }}>{f.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)" }}>
                      Learn more <ArrowRight size={13} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Works with <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>every</span> LLM.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", lineHeight: 1.75, marginBottom: 32 }}>
            OpenAI, Anthropic, Google Gemini, AWS Bedrock, Azure OpenAI, Mistral, and self-hosted models via Ollama or vLLM. Genie is model-agnostic by design.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            {["OpenAI", "Anthropic", "Gemini", "Azure OpenAI", "AWS Bedrock", "Ollama", "vLLM", "Mistral"].map((m) => (
              <div key={m} style={{ padding: "8px 16px", border: "1.5px solid rgba(245,158,11,0.4)", borderRadius: "var(--radius)", fontSize: 13, fontWeight: 600, color: "rgba(250,249,246,0.8)", background: "rgba(245,158,11,0.08)" }}>{m}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
