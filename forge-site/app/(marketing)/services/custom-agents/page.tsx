import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Zap, Network, Shield, Code2 } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INCLUDES = [
  "Agent architecture design & specification",
  "Tool integration (APIs, databases, file systems)",
  "Function-calling & structured output engineering",
  "Multi-agent orchestration framework",
  "Domain-specific fine-tuning & evaluation",
  "Memory systems (short-term, long-term, episodic)",
  "Agent evaluation harness & testing suite",
  "Safety guardrails & output validation",
  "Production deployment & monitoring",
  "Human-in-the-loop escalation design",
];

const AGENT_TYPES = [
  { icon: Zap, title: "Task Automation Agents", desc: "Single-purpose agents that execute specific tasks autonomously — research, data extraction, report generation, API calls." },
  { icon: Network, title: "Multi-Agent Systems", desc: "Coordinated networks of specialized agents that collaborate on complex multi-step workflows too sophisticated for a single agent." },
  { icon: Code2, title: "Developer Agents", desc: "Code review, PR summarization, documentation generation, test writing — AI agents that accelerate your engineering team." },
  { icon: Shield, title: "Compliance Agents", desc: "Continuous monitoring agents that watch for policy violations, flagging issues and generating compliance reports automatically." },
  { icon: Bot, title: "Customer-Facing Agents", desc: "Intelligent conversational agents trained on your specific domain, policies, and products — deployed in your existing channels." },
  { icon: CheckCircle2, title: "Data Analysis Agents", desc: "Agents that query databases, run analyses, generate visualizations, and surface insights from your enterprise data on demand." },
];

export default function CustomAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 64, position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(var(--nb-border-faint) 1px, transparent 1px), linear-gradient(90deg, var(--nb-border-faint) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container">
          <div style={{ marginBottom: 8 }}>
            <Link href={`${BASE}/services`} style={{ fontSize: 13, color: "var(--nb-ink-muted)", textDecoration: "none" }}>← Services</Link>
          </div>
          <span className="eyebrow" style={{ marginTop: 16 }}>Custom AI Agents</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 700 }}>
            Deploy agents that work{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              for your enterprise.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 580, marginBottom: 36 }}>
            Purpose-built AI agents designed for your specific domain, processes, and data. From single-task automation to complex multi-agent systems — engineered, evaluated, and deployed in production.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link href={`${BASE}/process`} className="btn-secondary" style={{ textDecoration: "none" }}>
              Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Agent types */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <span className="section-label">What We Build</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>Six categories of custom agent</h2>
          </div>
          <div className="cards-3">
            {AGENT_TYPES.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: 28 }}>
                  <div style={{
                    width: 42, height: 42, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                    boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "var(--radius)", marginBottom: 16,
                  }}>
                    <Icon size={19} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 16, marginBottom: 8 }}>{a.title}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="container">
          <div className="fg-split-2col">
            <div>
              <span className="section-label">What&apos;s Included</span>
              <h2 style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: 16 }}>
                From design to production deployment
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                Building agents that work in production is much harder than building agents that work in a demo. We include comprehensive evaluation frameworks, safety guardrails, and production monitoring in every engagement.
              </p>
              <div style={{ padding: "20px 24px", background: "var(--nb-rose-subtle)", border: "2px solid var(--nb-rose)", borderRadius: "var(--radius)", marginBottom: 32 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "var(--nb-rose)", marginBottom: 6 }}>Evaluation-first approach</p>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>
                  We define success metrics before we write the first line of agent code. Every agent ships with a benchmark suite so you can measure performance over time.
                </p>
              </div>
              <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
                Discuss Your Agent <ArrowRight size={14} />
              </Link>
            </div>
            <div className="nb-card" style={{ padding: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 20 }}>
                Deliverables
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {INCLUDES.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={14} color="var(--nb-rose)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our agent stack */}
      <section className="section section--surface">
        <div className="container container--narrow">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Our Stack</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>Built on proven agent frameworks</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { name: "LangGraph", type: "Orchestration" },
              { name: "AutoGen", type: "Multi-agent" },
              { name: "CrewAI", type: "Agent crews" },
              { name: "OpenAI Assistants", type: "Managed agents" },
              { name: "Anthropic Claude", type: "Reasoning" },
              { name: "Custom frameworks", type: "Proprietary builds" },
            ].map((s, i) => (
              <div key={i} style={{
                border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
                padding: "16px 20px", background: "#fff", boxShadow: "var(--shadow-brutal-sm)",
              }}>
                <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 13, fontWeight: 700, color: "var(--nb-ink)", marginBottom: 4 }}>{s.name}</p>
                <p style={{ fontSize: 11, color: "var(--nb-ink-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--rose">
        <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff", marginBottom: 16 }}>
            Ready to deploy custom agents?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 32 }}>
            Tell us what you want the agent to do. We&apos;ll design the architecture, tools, memory systems, and evaluation harness.
          </p>
          <Link href={`${BASE}/contact`} style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
            background: "#fff", color: "var(--nb-rose)", border: "2px solid #fff",
            fontWeight: 800, fontSize: 15, textDecoration: "none", borderRadius: "var(--radius)",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.15)",
          }}>
            Start a Project <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
