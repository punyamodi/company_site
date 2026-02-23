"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Microscope, ArrowRight, GitBranch, Search, CheckCircle2, Layers, Zap } from "lucide-react";

export default function DeepResearchPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Deep Research</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Research that<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>thinks for itself.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Deep Research goes far beyond a single RAG query. It decomposes complex questions into sub-questions, executes parallel retrieval loops, validates evidence, synthesizes findings, and delivers a comprehensive, cited answer — autonomously.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
              <Link href="/platform" className="btn-secondary" style={{ textDecoration: "none" }}>View Platform</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research flow visualization */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            The agentic research<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>loop, visualized.</span>
          </h2>

          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {[
              { step: "01", icon: Layers, title: "Question Decomposition", desc: "The research agent analyzes the original question and generates a set of targeted sub-questions, each designed to gather a specific piece of evidence needed for a complete answer." },
              { step: "02", icon: Search, title: "Parallel Retrieval", desc: "Each sub-question triggers parallel retrieval across your indexed sources — vector search, keyword search, knowledge graph traversal — maximizing evidence coverage." },
              { step: "03", icon: CheckCircle2, title: "Evidence Validation", desc: "Retrieved passages are cross-checked for relevance and consistency. Contradictory evidence is flagged. The agent identifies knowledge gaps and triggers additional search rounds." },
              { step: "04", icon: GitBranch, title: "Iterative Refinement", desc: "If initial answers are insufficient, the agent generates refined sub-questions based on gaps identified, repeating the retrieval loop until confidence thresholds are met." },
              { step: "05", icon: Microscope, title: "Synthesis & Citation", desc: "All validated evidence is synthesized into a structured, comprehensive answer with inline citations — traceable back to the original source documents." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.step}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ display: "grid", gridTemplateColumns: "60px auto 1fr", gap: 20, paddingBottom: 32, position: "relative" }}>
                  {/* Step number */}
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 11, fontWeight: 700, color: "var(--nb-amber)", letterSpacing: "0.1em", marginBottom: 8 }}>{item.step}</div>
                    {i < 4 && <div style={{ width: 2, height: "calc(100% - 20px)", background: "var(--nb-border-light)", margin: "0 auto" }} />}
                  </div>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-violet)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Use Cases</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40 }}>
            When a single search<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>isn't enough.</span>
          </h2>
          <div className="cards-3">
            {[
              { title: "Due Diligence", desc: "Synthesize findings from thousands of documents across regulatory filings, contracts, technical specs, and news — generating a structured analysis in minutes." },
              { title: "Competitive Intelligence", desc: "Research a competitor across your CRM notes, analyst reports, product teardowns, and market research to produce a comprehensive battle card." },
              { title: "Regulatory Compliance", desc: "Deep Research traces how a new regulation impacts your existing policies, contracts, and operational procedures across all business units." },
              { title: "Incident Post-Mortems", desc: "Connect logs, runbooks, Slack conversations, and tickets to reconstruct a full incident timeline and generate a comprehensive root-cause analysis." },
              { title: "Market Research", desc: "Synthesize customer feedback, support tickets, sales call notes, and product usage data into structured market signals your product team can act on." },
              { title: "Technical Documentation", desc: "Trace how a system component is described across architecture docs, code comments, Confluence, and team wikis to generate authoritative documentation." },
            ].map((uc, i) => (
              <motion.div key={uc.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="nb-card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{uc.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Put your analysts' hardest questions to the test.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            We'll demonstrate Deep Research on a real use case from your organization — connecting to your actual data sources and returning a live synthesis.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Request a Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
