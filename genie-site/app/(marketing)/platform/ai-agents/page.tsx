"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Bot, ArrowRight, CheckCircle2, Settings, Zap, Shield, Users, Brain, BookOpen } from "lucide-react";

const AGENT_FEATURES = [
  { icon: Settings, title: "Custom System Prompts", desc: "Define precise instructions, personas, and behavioral constraints for each agent tailored to specific team needs." },
  { icon: BookOpen, title: "Curated Knowledge Sets", desc: "Assign specific connector sources, document sets, or knowledge bases to each agent — restricting and focusing what it can access." },
  { icon: Zap, title: "Tool Access Control", desc: "Grant agents selective access to tools: web search, code interpreter, image generation, MCP actions, and custom integrations." },
  { icon: Shield, title: "Permission Mirroring", desc: "Agents respect the same document-level ACLs from source systems — users can only retrieve documents they already have access to." },
  { icon: Users, title: "Team Collaboration", desc: "Share agents across teams or restrict to specific user groups. Collaborative chat, session history, and feedback collection built in." },
  { icon: Brain, title: "Multi-LLM Backbone", desc: "Assign different LLMs to different agents. Use GPT-4o for high-stakes reasoning and faster models for routine queries to optimize cost." },
];

export default function AIAgentsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="eyebrow">Custom AI Agents</div>
              <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 20 }}>
                AI agents that<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>know your</span><br />
                business.
              </h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 36 }}>
                Build specialized AI assistants with unique instructions, curated knowledge access, and selective tool permissions. Deploy purpose-built agents for engineering, sales, legal, HR — any team, any workflow.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
                <Link href="/platform" className="btn-secondary" style={{ textDecoration: "none" }}>View Platform</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="code-block" style={{ maxWidth: 440 }}>
                <div className="code-block__bar">
                  <div className="code-dot code-dot--r" /><div className="code-dot code-dot--y" /><div className="code-dot code-dot--g" />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 8, fontFamily: "var(--font-jetbrains, monospace)" }}>agent_config.yaml</span>
                </div>
                <div className="code-block__body">
                  <pre>{`<span class="tok-keyword">name:</span> <span class="tok-string">"Engineering Assistant"</span>

<span class="tok-keyword">system_prompt:</span> <span class="tok-string">|
  You are a senior engineer assistant.
  Always check Jira before answering.
  Reference relevant PRs and commits.</span>

<span class="tok-keyword">knowledge_sources:</span>
  - <span class="tok-string">confluence/engineering</span>
  - <span class="tok-string">github/repos</span>
  - <span class="tok-string">jira/projects</span>

<span class="tok-keyword">tools:</span>
  - <span class="tok-string">web_search</span>
  - <span class="tok-string">code_interpreter</span>
  - <span class="tok-string">mcp_actions</span>

<span class="tok-keyword">model:</span> <span class="tok-string">gpt-4o</span>
<span class="tok-keyword">access_groups:</span> [<span class="tok-string">engineering</span>]`}</pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-label">Agent Capabilities</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            Every control you need<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>to build production agents.</span>
          </h2>
          <div className="cards-3">
            {AGENT_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="nb-card" style={{ padding: 28 }}>
                  <div className="feature-icon" style={{ marginBottom: 20 }}><Icon size={20} color="var(--nb-ink)" /></div>
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
          <div className="section-label">Use Cases</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40 }}>
            What teams build<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>with Genie agents.</span>
          </h2>
          {[
            { team: "Engineering", example: "An agent scoped to GitHub, Jira, and Confluence that answers 'how does auth work?' by surfacing relevant code comments, tickets, and runbooks in seconds." },
            { team: "Sales", example: "A deal assistant agent connected to Salesforce and product docs that drafts personalized outreach, answers pricing objections, and summarizes account history." },
            { team: "Legal", example: "A contract review agent that searches your executed agreements library to surface precedent language, flag non-standard clauses, and summarize obligations." },
            { team: "Support", example: "A customer-facing agent trained on your knowledge base, release notes, and Zendesk history — resolving Tier-1 tickets before they reach a human." },
          ].map((uc, i) => (
            <motion.div key={uc.team}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, padding: "24px 0", borderBottom: "1px solid var(--nb-border-faint)", alignItems: "start" }}>
              <div style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 11, fontWeight: 700, color: "var(--nb-teal)", letterSpacing: "0.1em", textTransform: "uppercase", paddingTop: 2 }}>{uc.team}</div>
              <p style={{ fontSize: 15, color: "var(--nb-ink)", lineHeight: 1.75 }}>{uc.example}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Ready to build your first agent?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32, lineHeight: 1.7 }}>
            Our solutions team will help you define the right agent architecture for your use case and get a proof-of-concept running on your own data.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
