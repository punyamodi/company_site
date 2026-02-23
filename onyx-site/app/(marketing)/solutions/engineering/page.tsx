"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Code2, ArrowRight, CheckCircle2, Zap, Search, GitBranch, Plug } from "lucide-react";

export default function EngineeringSolutionPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="eyebrow">Engineering Teams</div>
              <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 20 }}>
                Stop searching.<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>Start building.</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 36 }}>
                Engineering teams waste hours every week searching across Jira, Confluence, GitHub, Slack, and runbooks for information that exists but is buried. Onyx surfaces it in seconds — without context-switching.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="code-block">
                <div className="code-block__bar">
                  <div className="code-dot code-dot--r" /><div className="code-dot code-dot--y" /><div className="code-dot code-dot--g" />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>engineering agent</span>
                </div>
                <div className="code-block__body">
                  <pre style={{ fontSize: 13 }}>{`<span class="tok-comment">Q: How does our auth token refresh work?</span>

<span class="tok-keyword">→ Searching:</span> GitHub · Confluence · Jira

<span class="tok-string">Found in auth/refresh.py (line 142):</span>
  Tokens refresh via sliding window.
  JWT TTL: 15m access, 7d refresh.

<span class="tok-string">Related: JIRA-4821</span> (bug: refresh race)
<span class="tok-string">Runbook:</span> confluence/auth-ops#refresh

<span class="tok-keyword">3 sources · cited · 1.2s</span>`}</pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-3">
            {[
              { icon: Search, title: "Codebase Q&A", desc: "Ask questions about your codebase in plain English. Onyx searches GitHub, inline docs, and architecture Confluence pages simultaneously." },
              { icon: GitBranch, title: "PR & Incident Context", desc: "When investigating a bug, agents surface related PRs, past incident tickets, Slack discussions, and runbooks in one response." },
              { icon: Plug, title: "Auto-Ticket Creation", desc: "Via MCP actions, agents can create Jira tickets, assign them, and link related issues directly from the conversation." },
              { icon: Zap, title: "Onboarding Acceleration", desc: "New engineers ask the engineering agent about architecture, conventions, and processes — reducing ramp time from weeks to days." },
              { icon: CheckCircle2, title: "Documentation Synthesis", desc: "Agents read scattered documentation and generate structured summaries, architecture overviews, and runbook drafts for human review." },
              { icon: Code2, title: "Code Interpreter", desc: "Upload logs, csvs, or data exports. The agent analyzes them, computes metrics, and renders visualizations in the chat window." },
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

      <section className="section">
        <div className="container container--narrow">
          <div className="section-label">Connected Sources</div>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 24 }}>
            What your engineering agent knows.
          </h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["GitHub", "GitLab", "Bitbucket", "Jira", "Linear", "Confluence", "Notion", "Slack", "Teams", "Stack Overflow for Teams", "Slab", "Outline", "PagerDuty", "Datadog", "Runbooks"].map((s) => (
              <div key={s} style={{ padding: "8px 14px", border: "1.5px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 13, fontWeight: 600, background: "var(--nb-surface)", boxShadow: "var(--shadow-brutal-sm)" }}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Your engineering team deserves better tooling.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
