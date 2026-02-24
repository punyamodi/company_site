import Link from "next/link";
import { ArrowRight, Code2, Workflow, Database, Bot, Brain, CheckCircle2 } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SERVICES = [
  {
    icon: Code2,
    title: "Custom AI Integration",
    tagline: "Connect AI to your systems",
    href: `${BASE}/services/ai-integration`,
    desc: "We build the middleware, APIs, and data connectors that bridge AI capabilities with your existing enterprise infrastructure. From ERP integrations to custom LLM API layers.",
    includes: [
      "Custom API middleware & connectors",
      "Legacy system AI augmentation",
      "Multi-provider AI orchestration",
      "Data pipeline engineering",
      "Authentication & security layers",
      "Monitoring & observability setup",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    tagline: "Eliminate manual processes",
    href: `${BASE}/services/workflow-automation`,
    desc: "Replace error-prone manual workflows with intelligent, AI-driven automation. We combine RPA capabilities with modern AI to create decision engines and smart orchestration systems.",
    includes: [
      "Intelligent process mapping & design",
      "AI-driven decision engines",
      "RPA + AI hybrid systems",
      "Document processing pipelines",
      "Approval & escalation workflows",
      "Cross-system orchestration",
    ],
  },
  {
    icon: Database,
    title: "Data & AI Platforms",
    tagline: "Build the infrastructure for AI",
    href: `${BASE}/services/data-ai-platform`,
    desc: "Custom data platforms that make AI possible. We architect and build the ingestion, storage, and retrieval systems that power intelligent applications.",
    includes: [
      "Custom data pipeline architecture",
      "Vector database implementation",
      "RAG system design & build",
      "Real-time data processing",
      "Data governance frameworks",
      "Embedding & indexing pipelines",
    ],
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    tagline: "Deploy intelligent autonomous agents",
    href: `${BASE}/services/custom-agents`,
    desc: "Purpose-built agents that operate autonomously on your behalf. From single-task tools to multi-agent systems capable of handling complex enterprise workflows.",
    includes: [
      "Autonomous task agents",
      "Tool-using & function-calling agents",
      "Multi-agent orchestration systems",
      "Domain-specific fine-tuning",
      "Agent evaluation & testing",
      "Production deployment & monitoring",
    ],
  },
  {
    icon: Brain,
    title: "AI Consulting & Strategy",
    tagline: "Get the roadmap right",
    href: `${BASE}/services/ai-consulting`,
    desc: "Before you build, you need a strategy. We conduct deep assessments, design architectures, and create roadmaps that ensure your AI investments deliver measurable ROI.",
    includes: [
      "AI readiness assessment",
      "Strategic AI roadmap",
      "Architecture design & review",
      "Vendor & model selection",
      "Team upskilling & training",
      "ROI modeling & prioritization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 64 }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(var(--nb-border-faint) 1px, transparent 1px), linear-gradient(90deg, var(--nb-border-faint) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 640 }}>
            Everything you need.{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              Nothing you don&apos;t.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}>
            Five service pillars covering the full spectrum of enterprise AI — from strategy to production deployment. All delivered as bespoke engagements tailored to your needs.
          </p>
          <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
            Start a Project <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Services list */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: "40px 40px", display: "flex", gap: 48, flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 300px" }}>
                    <div style={{
                      width: 52, height: 52, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                      boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                      borderRadius: "var(--radius)", marginBottom: 20,
                    }}>
                      <Icon size={24} color="#fff" />
                    </div>
                    <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-rose)", marginBottom: 8 }}>
                      {svc.tagline}
                    </p>
                    <h2 style={{ fontSize: 26, marginBottom: 16 }}>{svc.title}</h2>
                    <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 24 }}>{svc.desc}</p>
                    <Link href={svc.href} className="btn-primary" style={{ textDecoration: "none", fontSize: 14 }}>
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div style={{ flex: "1 1 260px" }}>
                    <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 20 }}>
                      What&apos;s included
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {svc.includes.map((item, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <CheckCircle2 size={15} color="var(--nb-rose)" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center", maxWidth: 600 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", color: "#FAF8F3", marginBottom: 16 }}>
            Not sure which service you need?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,248,243,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
            Most projects span multiple service areas. Start with a discovery call and we&apos;ll map out exactly what&apos;s needed.
          </p>
          <Link href={`${BASE}/contact`} style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
            background: "var(--nb-rose)", color: "#fff", border: "2px solid var(--nb-rose)",
            fontWeight: 800, fontSize: 15, textDecoration: "none", borderRadius: "var(--radius)",
            boxShadow: "4px 4px 0 rgba(255,255,255,0.15)",
          }}>
            Book a Discovery Call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
