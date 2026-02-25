import Link from "next/link";
import { ArrowRight, Code2, Workflow, Database, Bot, Brain, Shield, Zap, Building2, HeartPulse, Landmark, Factory, Server, Globe, CheckCircle2 } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SERVICES = [
  {
    icon: Code2,
    title: "Custom AI Integration",
    desc: "Connect AI capabilities to your existing systems. API layers, middleware, data pipelines, and provider migrations engineered to your exact spec.",
    href: `${BASE}/services/ai-integration`,
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Replace manual, repetitive processes with intelligent AI-driven workflows. Decision engines, RPA+AI hybrids, and custom orchestration.",
    href: `${BASE}/services/workflow-automation`,
  },
  {
    icon: Database,
    title: "Data & AI Platforms",
    desc: "Build the data infrastructure that makes AI possible. Custom pipelines, vector stores, RAG systems, and real-time data platforms.",
    href: `${BASE}/services/data-ai-platform`,
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    desc: "Autonomous agents that act on your behalf. From single-purpose tools to complex multi-agent systems — domain-trained and deployed.",
    href: `${BASE}/services/custom-agents`,
  },
  {
    icon: Brain,
    title: "AI Consulting & Strategy",
    desc: "Get the roadmap right before you build. AI readiness assessments, architecture reviews, vendor selection, and transformation strategy.",
    href: `${BASE}/services/ai-consulting`,
  },
];

const WHY = [
  {
    title: "Truly Bespoke",
    desc: "No templates, no off-the-shelf bolt-ons. Every solution is designed and engineered from scratch to fit your business.",
    icon: Code2,
  },
  {
    title: "Enterprise-Grade Security",
    desc: "SOC 2, HIPAA, FedRAMP-aligned architectures. We build with your compliance requirements front and center.",
    icon: Shield,
  },
  {
    title: "Full-Stack Delivery",
    desc: "From architecture design to production deployment — we own the full build, not just a piece of it.",
    icon: Zap,
  },
  {
    title: "Domain Expertise",
    desc: "Our engineers have deep experience in finance, healthcare, government, and enterprise tech. We speak your domain.",
    icon: Building2,
  },
  {
    title: "Ongoing Partnership",
    desc: "We don't disappear after launch. Forge provides continuous support, iteration, and optimization as your needs evolve.",
    icon: CheckCircle2,
  },
  {
    title: "AI Platform Integration",
    desc: "Built-in integrations with InferGate, Converse, HaloDesk, and Genie — our enterprise AI platform suite, or your existing stack.",
    icon: Server,
  },
];

const INDUSTRIES = [
  { icon: Building2, title: "Financial Services", desc: "Risk models, fraud detection, compliance automation, and intelligent document processing for banks and fintechs." },
  { icon: HeartPulse, title: "Healthcare", desc: "Clinical decision support, patient data intelligence, prior auth automation, and HIPAA-compliant AI workflows." },
  { icon: Landmark, title: "Government & Defense", desc: "FedRAMP-aligned AI systems, document intelligence, case management automation, and mission-critical deployments." },
  { icon: Factory, title: "Manufacturing", desc: "Predictive maintenance, quality control AI, supply chain optimization, and computer vision inspection systems." },
  { icon: Server, title: "Technology", desc: "Custom LLM integrations, developer tooling, AI-powered product features, and internal knowledge systems." },
  { icon: Globe, title: "Retail & E-Commerce", desc: "Personalization engines, demand forecasting, customer service AI, and intelligent merchandising systems." },
];

const PROCESS = [
  { num: "01", title: "Discovery", desc: "We map your existing systems, data, and requirements. No assumptions — we learn your business deeply before writing a single line of code." },
  { num: "02", title: "Architecture", desc: "We design the exact solution for your needs. Tech stack, data flows, integrations, security model — everything documented before build begins." },
  { num: "03", title: "Engineering", desc: "Senior engineers build your solution. Weekly demos, full transparency, and iterative delivery so you see progress continuously." },
  { num: "04", title: "Deploy & Support", desc: "We handle production deployment, monitoring, and ongoing support. Your solution stays healthy, performant, and evolving." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: "clamp(64px,8vw,96px)", paddingBottom: "clamp(64px,8vw,96px)", position: "relative", overflow: "hidden" }}>
        {/* Animated grid BG */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(var(--nb-border-faint) 1px, transparent 1px), linear-gradient(90deg, var(--nb-border-faint) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        {/* Rose accent blob */}
        <div style={{
          position: "absolute", top: "10%", right: "-5%", width: 520, height: 520,
          background: "radial-gradient(circle, rgba(225,29,72,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="container">
          <div className="fg-hero-grid">
            <div className="anim-fade-up">
              <span className="eyebrow">Bespoke Enterprise AI Engineering</span>
              <h1 style={{
                fontSize: "clamp(38px,6vw,72px)", fontWeight: 800,
                letterSpacing: "-0.04em", lineHeight: 1.0,
                marginBottom: 24, color: "var(--nb-ink)",
              }}>
                We build the AI your enterprise{" "}
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
                  actually needs.
                </span>
              </h1>
              <p style={{
                fontSize: "clamp(16px,2vw,20px)", color: "var(--nb-ink-muted)",
                lineHeight: 1.65, marginBottom: 36, maxWidth: 520,
              }}>
                Custom AI solutions engineered to your exact specification. From integration to full-stack transformation — Forge delivers bespoke AI systems built for the way your business works.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none", fontSize: 16, padding: "13px 28px" }}>
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link href={`${BASE}/case-studies`} className="btn-secondary" style={{ textDecoration: "none", fontSize: 16, padding: "13px 28px" }}>
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="anim-fade-up delay-200" style={{ position: "relative" }}>
              <div style={{
                border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-xl)",
                background: "#0A0A0A", borderRadius: "var(--radius)", overflow: "hidden",
                padding: 32,
              }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                </div>
                <svg viewBox="0 0 400 280" width="100%" style={{ display: "block" }}>
                  {/* Grid */}
                  {[40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => (
                    <line key={`vx${x}`} x1={x} y1="0" x2={x} y2="280" stroke="rgba(225,29,72,0.1)" strokeWidth="1"/>
                  ))}
                  {[40, 80, 120, 160, 200, 240].map(y => (
                    <line key={`hy${y}`} x1="0" y1={y} x2="400" y2={y} stroke="rgba(225,29,72,0.1)" strokeWidth="1"/>
                  ))}
                  {/* Nodes */}
                  {[
                    { cx: 80, cy: 80 }, { cx: 200, cy: 60 }, { cx: 320, cy: 80 },
                    { cx: 140, cy: 160 }, { cx: 260, cy: 160 }, { cx: 200, cy: 220 },
                  ].map((n, i) => (
                    <g key={i}>
                      <circle cx={n.cx} cy={n.cy} r="16" fill="rgba(225,29,72,0.15)" stroke="#E11D48" strokeWidth="1.5"/>
                      <circle cx={n.cx} cy={n.cy} r="5" fill="#E11D48"/>
                    </g>
                  ))}
                  {/* Edges */}
                  {[
                    [80, 80, 200, 60], [200, 60, 320, 80],
                    [80, 80, 140, 160], [200, 60, 140, 160], [200, 60, 260, 160],
                    [320, 80, 260, 160], [140, 160, 200, 220], [260, 160, 200, 220],
                  ].map(([x1,y1,x2,y2], i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(225,29,72,0.4)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  ))}
                  {/* Labels */}
                  {[
                    { cx: 80, cy: 80, label: "Data" },
                    { cx: 200, cy: 60, label: "AI Core" },
                    { cx: 320, cy: 80, label: "APIs" },
                    { cx: 140, cy: 160, label: "Agents" },
                    { cx: 260, cy: 160, label: "Workflows" },
                    { cx: 200, cy: 220, label: "Output" },
                  ].map((n, i) => (
                    <text key={i} x={n.cx} y={n.cy + 30} textAnchor="middle" fill="rgba(250,248,243,0.5)" fontSize="9" fontFamily="JetBrains Mono, monospace">{n.label}</text>
                  ))}
                </svg>
                <p style={{
                  fontFamily: "var(--font-jetbrains, monospace)", fontSize: 11,
                  color: "var(--nb-rose)", marginTop: 16, opacity: 0.8,
                }}>// custom_ai_architecture.forge</p>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div style={{ marginTop: 64 }}>
            <div className="fg-stats-strip" style={{
              border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)",
              background: "#fff", borderRadius: "var(--radius)",
            }}>
              {[
                { val: "500+", label: "Custom solutions delivered" },
                { val: "60+", label: "Enterprise clients" },
                { val: "12+", label: "Industries served" },
                { val: "Full-stack", label: "End-to-end delivery" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "28px 32px",
                  borderRight: i < 3 ? "2px solid var(--nb-border)" : "none",
                  textAlign: "center",
                }}>
                  <div style={{
                    fontFamily: "var(--font-jetbrains, monospace)", fontSize: "clamp(20px,3vw,28px)",
                    fontWeight: 700, color: "var(--nb-rose)", marginBottom: 6,
                  }}>{s.val}</div>
                  <div style={{ fontSize: 12.5, color: "var(--nb-ink-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ─────────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
            <span className="section-label">What We Build</span>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 16 }}>
              Five pillars of enterprise AI
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
              Every engagement starts with a blank slate. We scope exactly what you need — then we build it.
            </p>
          </div>
          <div className="fg-services-grid">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="nb-card"
                  style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div style={{
                    width: 48, height: 48, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                    boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "var(--radius)", flexShrink: 0,
                  }}>
                    <Icon size={22} color="#fff" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 19, marginBottom: 8 }}>{svc.title}</h3>
                    <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{svc.desc}</p>
                  </div>
                  <Link href={svc.href} style={{
                    display: "inline-flex", alignItems: "center", gap: 4, marginTop: "auto",
                    fontSize: 13, fontWeight: 700, color: "var(--nb-rose)", textDecoration: "none",
                    transition: "gap 0.15s",
                  }}>
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="section-label">How It Works</span>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", maxWidth: 480 }}>
              From brief to production in four steps
            </h2>
          </div>
          <div className="fg-process-grid">
            {PROCESS.map((p, i) => (
              <div
                key={i}
                style={{
                  border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow-brutal)", background: "#fff", padding: 32,
                  position: "relative",
                }}
              >
                <div style={{
                  width: 44, height: 44, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                  boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "var(--radius)", marginBottom: 20,
                }}>
                  <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 13, fontWeight: 700, color: "#fff" }}>
                    {p.num}
                  </span>
                </div>
                <h3 style={{ fontSize: 19, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
            <div style={{
              border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
              boxShadow: "var(--shadow-brutal)", background: "var(--nb-rose)", padding: 32,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16,
                }}>Ready to start?</p>
                <h3 style={{ fontSize: 22, color: "#fff", marginBottom: 12 }}>See the full engagement model</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  Learn about timelines, engagement formats, and what a project with Forge actually looks like.
                </p>
              </div>
              <Link href={`${BASE}/process`} style={{
                display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28,
                background: "#fff", color: "var(--nb-rose)", border: "2px solid #fff",
                padding: "10px 20px", fontWeight: 800, fontSize: 14, textDecoration: "none",
                borderRadius: "var(--radius)", boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
                transition: "transform 0.12s",
              }}>
                Our Process <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY FORGE ─────────────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
            <span className="section-label">Why Forge</span>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 16 }}>
              Built differently. Delivered differently.
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
              We built Forge because enterprises deserve AI built for them — not adapted from something else.
            </p>
          </div>
          <div className="fg-why-grid">
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: "28px 28px 28px" }}>
                  <div style={{
                    width: 40, height: 40, background: "var(--nb-rose-subtle)", border: "2px solid var(--nb-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "var(--radius)", marginBottom: 16,
                  }}>
                    <Icon size={18} color="var(--nb-rose)" />
                  </div>
                  <h3 style={{ fontSize: 17, marginBottom: 8 }}>{w.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 56, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <span className="section-label">Industries</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,44px)" }}>Domain expertise across sectors</h2>
            </div>
            <Link href={`${BASE}/industries`} style={{
              display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700,
              color: "var(--nb-rose)", textDecoration: "none",
            }}>
              All industries <ArrowRight size={14} />
            </Link>
          </div>
          <div className="fg-industries-grid">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Link key={i} href={`${BASE}/industries`} style={{ textDecoration: "none" }}>
                  <div className="nb-card" style={{ padding: "24px 24px", cursor: "pointer" }}>
                    <div style={{
                      width: 40, height: 40, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                      boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                      borderRadius: "var(--radius)", marginBottom: 16,
                    }}>
                      <Icon size={18} color="#fff" />
                    </div>
                    <h3 style={{ fontSize: 16, marginBottom: 8 }}>{ind.title}</h3>
                    <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{ind.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────── */}
      <section className="section section--invert" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(225,29,72,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(225,29,72,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container" style={{ textAlign: "center", maxWidth: 680 }}>
          <span style={{
            display: "inline-block", padding: "5px 12px",
            background: "rgba(225,29,72,0.2)", color: "var(--nb-rose)",
            fontSize: 11, fontWeight: 800, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 24, border: "2px solid rgba(225,29,72,0.3)",
          }}>
            Ready to Build?
          </span>
          <h2 style={{
            fontSize: "clamp(28px,4.5vw,52px)", color: "#FAF8F3",
            marginBottom: 20, letterSpacing: "-0.035em",
          }}>
            Every enterprise is different.{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              Your AI should be too.
            </span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(250,248,243,0.65)", lineHeight: 1.7, marginBottom: 40 }}>
            We don&apos;t sell packages. We build exactly what you need. Tell us your challenge — we&apos;ll architect the solution.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`${BASE}/contact`} style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
              background: "var(--nb-rose)", color: "#fff", border: "2px solid var(--nb-rose)",
              boxShadow: "4px 4px 0 rgba(255,255,255,0.15)", fontFamily: "var(--font-bricolage, sans-serif)",
              fontSize: 15, fontWeight: 800, textDecoration: "none", borderRadius: "var(--radius)",
              transition: "transform 0.12s, box-shadow 0.12s",
            }}>
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link href={`${BASE}/case-studies`} style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
              background: "transparent", color: "#FAF8F3", border: "2px solid rgba(250,248,243,0.3)",
              boxShadow: "none", fontFamily: "var(--font-bricolage, sans-serif)",
              fontSize: 15, fontWeight: 700, textDecoration: "none", borderRadius: "var(--radius)",
            }}>
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
