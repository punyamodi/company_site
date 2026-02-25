"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Zap, ArrowRight, Server, Code2, Globe, Settings, Shield, Layers } from "lucide-react";

export default function MCPPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="eyebrow">MCP & Actions</div>
              <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 20 }}>
                Agents that<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>act,</span> not just answer.
              </h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 36 }}>
                Genie implements the Model Context Protocol (MCP) natively — giving your agents the ability to interact with any external system, execute workflows, and take real-world actions beyond retrieval and generation.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
                <Link href="/platform" className="btn-secondary" style={{ textDecoration: "none" }}>View Platform</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="code-block">
                <div className="code-block__bar">
                  <div className="code-dot code-dot--r" /><div className="code-dot code-dot--y" /><div className="code-dot code-dot--g" />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 8, fontFamily: "var(--font-jetbrains, monospace)" }}>mcp_tool_call.json</span>
                </div>
                <div className="code-block__body">
                  <pre>{`<span class="tok-comment">// Agent invokes an MCP tool</span>
{
  <span class="tok-keyword">"tool"</span>: <span class="tok-string">"create_jira_ticket"</span>,
  <span class="tok-keyword">"args"</span>: {
    <span class="tok-keyword">"project"</span>: <span class="tok-string">"ENG"</span>,
    <span class="tok-keyword">"summary"</span>: <span class="tok-string">"Fix auth token refresh bug"</span>,
    <span class="tok-keyword">"priority"</span>: <span class="tok-string">"High"</span>,
    <span class="tok-keyword">"assignee"</span>: <span class="tok-string">"auto"</span>
  }
}

<span class="tok-comment">// MCP server response</span>
{
  <span class="tok-keyword">"status"</span>: <span class="tok-string">"created"</span>,
  <span class="tok-keyword">"ticket_id"</span>: <span class="tok-string">"ENG-4821"</span>,
  <span class="tok-keyword">"url"</span>: <span class="tok-string">"jira.co/ENG-4821"</span>
}`}</pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-label">What Agents Can Do</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            From answering to<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>doing.</span>
          </h2>
          <div className="cards-3">
            {[
              { icon: Settings, title: "Tool Registry", desc: "Define a catalog of tools your agents can invoke — each with typed parameters, authentication, and permission scoping." },
              { icon: Server, title: "MCP Server", desc: "Genie runs a built-in MCP server that registers tools from your own APIs, internal services, or third-party integrations." },
              { icon: Code2, title: "Custom Tool Development", desc: "Build new MCP tools using any programming language. Register them with Genie and they become available to all agents immediately." },
              { icon: Globe, title: "External API Actions", desc: "Create Jira tickets, send Slack messages, trigger Salesforce workflows, update Google Sheets — whatever your team needs agents to do." },
              { icon: Shield, title: "Permission-Scoped", desc: "Each tool is scoped to specific agents and user groups. Agents can only invoke tools they're explicitly authorized to use." },
              { icon: Layers, title: "Agent Orchestration", desc: "Agents can invoke other agents as sub-tasks — enabling complex multi-step workflows that combine retrieval, analysis, and action." },
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
            Turn your agents into doers.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            We'll scope which workflows in your organization are ready for AI automation and design the tool architecture to make it happen.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
