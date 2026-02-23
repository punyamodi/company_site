import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowRight, Zap, Mic, MessageSquare, Search, Shield, Server, Lock, BarChart3, Network, CheckCircle, ChevronRight, Layers } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PRODUCTS = [
  {
    name: "InferGate",
    color: "#F5C518",
    textColor: "#0A0A0A",
    bgColor: "var(--nb-yellow-subtle)",
    href: `${BASE}/infergate/`,
    icon: Zap,
    tagline: "Enterprise AI Gateway",
    desc: "The high-performance infrastructure layer that routes, caches, and governs every AI call across your organization — from a single unified API.",
    metrics: [
      { value: "10,400+", label: "req/s" },
      { value: "0.3ms", label: "P50 latency" },
      { value: "25+", label: "LLM providers" },
      { value: "65%", label: "cost reduction" },
    ],
    capabilities: [
      "Intelligent multi-provider routing",
      "Semantic caching & deduplication",
      "Real-time observability & tracing",
      "Rate limiting & budget enforcement",
      "MCP gateway & virtual keys",
      "Audit logs & compliance reports",
    ],
    audience: "For Platform & ML Engineering Teams",
  },
  {
    name: "Converse",
    color: "#7C3AED",
    textColor: "#fff",
    bgColor: "var(--nb-violet-subtle)",
    href: `${BASE}/converse/`,
    icon: Mic,
    tagline: "Voice AI Platform",
    desc: "Production-grade voice AI infrastructure with real-time speech processing, multimodal pipelines, and enterprise-scale WebRTC transport.",
    metrics: [
      { value: "<100ms", label: "voice latency" },
      { value: "50+", label: "languages" },
      { value: "99.9%", label: "uptime SLA" },
      { value: "10M+", label: "minutes/month" },
    ],
    capabilities: [
      "Real-time STT/TTS pipeline engine",
      "Multimodal audio/video processing",
      "WebRTC & telephony transport",
      "AI service integrations (LLMs, TTS)",
      "Customer service AI & companions",
      "Full observability & compliance",
    ],
    audience: "For Product & Customer Experience Teams",
  },
  {
    name: "HaloDesk",
    color: "#0D9488",
    textColor: "#fff",
    bgColor: "var(--nb-teal-subtle)",
    href: `${BASE}/halodesk/`,
    icon: MessageSquare,
    tagline: "Customer Support Intelligence",
    desc: "The AI-native support platform that unifies every channel, automates resolution, and gives your team superhuman insight into every customer relationship.",
    metrics: [
      { value: "60%", label: "auto-resolution" },
      { value: "12+", label: "channels unified" },
      { value: "3×", label: "agent productivity" },
      { value: "<1hr", label: "mean time to resolve" },
    ],
    capabilities: [
      "Omnichannel inbox (email, chat, SMS, voice)",
      "Captain AI Agent for autonomous resolution",
      "Workflow automation & SLA enforcement",
      "Advanced analytics & health scores",
      "Knowledge base & AI-assisted responses",
      "Campaigns & proactive outreach",
    ],
    audience: "For Customer Success & Support Operations",
  },
  {
    name: "Onyx",
    color: "#F59E0B",
    textColor: "#0A0A0A",
    bgColor: "var(--nb-amber-subtle)",
    href: `${BASE}/onyx/`,
    icon: Search,
    tagline: "Enterprise Knowledge AI",
    desc: "Custom AI agents, retrieval-augmented generation, and deep research capabilities that connect to every system your enterprise runs on.",
    metrics: [
      { value: "40+", label: "connectors" },
      { value: "<2s", label: "avg. query time" },
      { value: "VPC", label: "deployment" },
      { value: "SOC 2", label: "certified" },
    ],
    capabilities: [
      "Custom AI agents with tool use",
      "RAG & enterprise semantic search",
      "Deep research with citation chains",
      "Knowledge graph construction",
      "MCP & 40+ native connectors",
      "Role-based access & audit trails",
    ],
    audience: "For Engineering, Legal, HR & Sales Teams",
  },
];

const PLATFORM_CAPABILITIES = [
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "SOC 2 Type II, HIPAA, and GDPR-ready. Fine-grained RBAC, end-to-end encryption, and comprehensive audit trails.",
  },
  {
    icon: Server,
    title: "VPC & On-Premise Deployment",
    desc: "Deploy within your own cloud infrastructure or on-premise. No data ever leaves your perimeter.",
  },
  {
    icon: Network,
    title: "Unified Integration Layer",
    desc: "All four products share a single integration model — connect once, available everywhere across the suite.",
  },
  {
    icon: BarChart3,
    title: "Cross-Platform Observability",
    desc: "Unified dashboards, OpenTelemetry-based tracing, and cost attribution across the entire AI stack.",
  },
  {
    icon: Lock,
    title: "Enterprise SSO & Identity",
    desc: "SAML 2.0, OIDC, and Active Directory integration with centralized identity governance.",
  },
  {
    icon: Layers,
    title: "99.99% SLA & Dedicated Support",
    desc: "Guaranteed uptime, priority incident response, and a dedicated customer success engineer.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Unify Your AI Traffic",
    desc: "InferGate becomes your single control plane for all AI consumption — routing, caching, and governing every call to every provider.",
    color: "#F5C518",
  },
  {
    step: "02",
    title: "Activate Voice Interfaces",
    desc: "Converse layers real-time voice capabilities onto your AI stack — customer calls, internal assistants, and interactive experiences.",
    color: "#7C3AED",
  },
  {
    step: "03",
    title: "Automate Support at Scale",
    desc: "HaloDesk orchestrates every customer interaction — from first contact to resolution — with AI embedded at every step.",
    color: "#0D9488",
  },
  {
    step: "04",
    title: "Connect Organizational Knowledge",
    desc: "Onyx indexes every data source and surfaces accurate, cited answers — making your enterprise knowledge instantly accessible.",
    color: "#F59E0B",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" />

        {/* Animated SVG background — interconnected nodes */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.06 }}>
            {/* Grid lines */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 56} x2="1200" y2={i * 56} stroke="#0A0A0A" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 22 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 56} y1="0" x2={i * 56} y2="600" stroke="#0A0A0A" strokeWidth="0.5" />
            ))}
            {/* Animated data flow paths */}
            <path d="M200,300 Q400,200 600,300 Q800,400 1000,300" stroke="#F5C518" strokeWidth="2" fill="none" strokeDasharray="8,4"
              style={{ animation: "dataFlow 3s linear infinite" }} />
            <path d="M200,200 Q400,300 600,200 Q800,100 1000,200" stroke="#7C3AED" strokeWidth="2" fill="none" strokeDasharray="8,4"
              style={{ animation: "dataFlow 4s linear infinite", animationDelay: "1s" }} />
            {/* Nodes */}
            {[
              { cx: 200, cy: 300, r: 8, fill: "#F5C518" },
              { cx: 600, cy: 300, r: 8, fill: "#7C3AED" },
              { cx: 600, cy: 200, r: 8, fill: "#0D9488" },
              { cx: 1000, cy: 300, r: 8, fill: "#F59E0B" },
            ].map((n, i) => (
              <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill}
                style={{ animation: "nodePulse 2s ease-in-out infinite", animationDelay: `${i * 0.5}s` }} />
            ))}
          </svg>
        </div>

        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <div className="eyebrow anim-fade-up" style={{ display: "inline-flex" }}>
            Enterprise AI Infrastructure Suite
          </div>

          <h1
            className="anim-fade-up delay-100"
            style={{ fontSize: "clamp(44px,6.5vw,88px)", lineHeight: 0.95, letterSpacing: "-0.045em", marginBottom: 28, maxWidth: 900, margin: "0 auto 28px" }}
          >
            The complete AI stack{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", fontWeight: 700, color: "var(--nb-ink-muted)" }}>
              for the modern enterprise.
            </span>
          </h1>

          <p
            className="anim-fade-up delay-200"
            style={{ fontSize: "clamp(17px,2vw,21px)", color: "var(--nb-ink-muted)", maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.65, fontWeight: 400 }}
          >
            Four production-grade products — AI Gateway, Voice AI, Customer Support Intelligence, and Enterprise Knowledge — engineered to work individually or as an integrated suite.
          </p>

          <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
              Request a Demo <ArrowRight size={16} />
            </a>
            <a href={`${BASE}/enterprise/`} className="btn-secondary" style={{ fontSize: 16, padding: "16px 32px" }}>
              Enterprise Overview
            </a>
          </div>

          {/* Stats strip */}
          <div className="anim-fade-up delay-400" style={{ display: "flex", justifyContent: "center", gap: 0, marginTop: 64, flexWrap: "wrap" }}>
            {[
              { value: "4", label: "enterprise products" },
              { value: "99.99%", label: "SLA uptime" },
              { value: "SOC 2", label: "Type II" },
              { value: "VPC", label: "deployment ready" },
              { value: "25+", label: "LLM providers" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "20px 36px", borderLeft: i > 0 ? "2px solid var(--nb-border-faint)" : "none", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--nb-ink)" }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: "var(--nb-ink-dim)", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SUITE ──────────────────────────────────────── */}
      <section className="section section--surface" id="products">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label">The Suite</div>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
              Four products. One unified platform.
            </h2>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
              Each product is production-ready as a standalone investment. Together, they form the most comprehensive enterprise AI infrastructure available.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {PRODUCTS.map((product, i) => {
              const Icon = product.icon;
              return (
                <a
                  key={product.name}
                  href={product.href}
                  className={`nb-card anim-fade-up delay-${(i + 1) * 100}`}
                  style={{
                    padding: 32, textDecoration: "none", color: "var(--nb-ink)",
                    display: "flex", flexDirection: "column", gap: 24,
                    borderLeft: `4px solid ${product.color}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                        <div style={{ width: 40, height: 40, background: product.color, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius)" }}>
                          <Icon size={18} color={product.textColor} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>{product.name}</h3>
                          <p style={{ fontSize: 12, fontWeight: 700, color: "var(--nb-ink-muted)", letterSpacing: ".06em", textTransform: "uppercase", marginTop: 2 }}>{product.tagline}</p>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 380 }}>{product.desc}</p>
                    </div>
                    <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: "var(--nb-ink-muted)", whiteSpace: "nowrap" }}>
                      Explore <ChevronRight size={14} />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
                    {product.metrics.map((m) => (
                      <div key={m.label} style={{ padding: "10px 12px", background: "var(--nb-surface)", border: "1.5px solid var(--nb-border-faint)", borderRadius: "var(--radius)", textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 16, fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.02em" }}>{m.value}</div>
                        <div style={{ fontSize: 10, color: "var(--nb-ink-dim)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", marginTop: 2 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                    {product.capabilities.map((cap) => (
                      <div key={cap} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--nb-ink-muted)", fontWeight: 500 }}>
                        <CheckCircle size={12} color={product.color} style={{ flexShrink: 0 }} />
                        {cap}
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "auto", paddingTop: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--nb-ink-dim)" }}>{product.audience}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <style>{`
          @media(max-width:768px){
            .product-grid{grid-template-columns:1fr!important;}
          }
        `}</style>
      </section>

      {/* ── HOW THE SUITE WORKS ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="section-label">Platform Architecture</div>
              <h2 style={{ fontSize: "clamp(30px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 20, lineHeight: 1 }}>
                Every product is stronger{" "}
                <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", fontWeight: 700, color: "var(--nb-ink-muted)" }}>together.</span>
              </h2>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 40 }}>
                The AI Platform suite is designed with integration-first architecture. InferGate governs all AI traffic. Converse, HaloDesk, and Onyx each route through InferGate — giving you unified observability, cost control, and compliance across every AI interaction.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {HOW_IT_WORKS.map((step) => (
                  <div key={step.step} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, background: step.color, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)", fontFamily: "var(--font-jetbrains,monospace)", fontSize: 11, fontWeight: 700 }}>
                      {step.step}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4, letterSpacing: "-0.02em" }}>{step.title}</h4>
                      <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture diagram */}
            <div style={{ position: "relative" }}>
              <div style={{ border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-xl)", borderRadius: "var(--radius)", background: "var(--nb-invert)", padding: 32, overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />

                {/* InferGate at center */}
                <div style={{ textAlign: "center", marginBottom: 24 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 20px", background: "var(--nb-yellow)", border: "2px solid var(--nb-yellow)", boxShadow: "var(--shadow-brutal)", borderRadius: "var(--radius)" }}>
                    <Zap size={16} color="#0A0A0A" />
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#0A0A0A", letterSpacing: "-0.02em" }}>InferGate — AI Gateway</span>
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(250,248,243,0.5)", marginTop: 6, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase" }}>
                    Central Control Plane
                  </div>
                </div>

                {/* Connection lines */}
                <svg width="100%" height="40" style={{ marginBottom: 0 }}>
                  <line x1="16.6%" y1="0" x2="16.6%" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4,3" />
                  <line x1="50%" y1="0" x2="50%" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4,3" />
                  <line x1="83.3%" y1="0" x2="83.3%" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4,3" />
                </svg>

                {/* Products */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                  {[
                    { name: "Converse", color: "#7C3AED", Icon: Mic, label: "Voice AI" },
                    { name: "HaloDesk", color: "#0D9488", Icon: MessageSquare, label: "Support AI" },
                    { name: "Onyx", color: "#F59E0B", Icon: Search, label: "Knowledge AI" },
                  ].map((p) => (
                    <div key={p.name} style={{ padding: "16px 12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius)", textAlign: "center" }}>
                      <div style={{ width: 32, height: 32, background: p.color, border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                        <p.Icon size={14} color="#fff" />
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 800, color: "#FAF8F3", letterSpacing: "-0.01em" }}>{p.name}</div>
                      <div style={{ fontSize: 10, color: "rgba(250,248,243,0.5)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", marginTop: 2 }}>{p.label}</div>
                    </div>
                  ))}
                </div>

                {/* LLM providers row */}
                <svg width="100%" height="32" style={{ margin: "0" }}>
                  <line x1="50%" y1="0" x2="50%" y2="32" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4,3" />
                </svg>

                <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius)" }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "rgba(250,248,243,0.4)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>25+ LLM Providers</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                    {["OpenAI", "Anthropic", "AWS Bedrock", "Google Vertex", "Azure", "Groq", "+20 more"].map((p) => (
                      <span key={p} style={{ padding: "3px 8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px", fontSize: 11, color: "rgba(250,248,243,0.6)", fontWeight: 600 }}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.arch-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── PLATFORM CAPABILITIES ───────────────────────────── */}
      <section className="section section--elevated">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">Enterprise-Grade Platform</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
              Built for regulated, complex enterprise environments.
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
              Every product in the suite ships with enterprise controls, compliance certifications, and the deployment flexibility your security team demands.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {PLATFORM_CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius)", marginBottom: 16 }}>
                    <Icon size={20} color="var(--nb-ink)" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{cap.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE CTA ───────────────────────────────────── */}
      <section className="section section--invert">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex", background: "var(--nb-yellow)" }}>
            Enterprise Pricing
          </div>
          <h2 style={{ fontSize: "clamp(32px,4.5vw,60px)", letterSpacing: "-0.045em", marginBottom: 20, color: "var(--nb-bg)", lineHeight: 1 }}>
            Priced for the scale of your ambition.
          </h2>
          <p style={{ fontSize: 18, color: "rgba(250,248,243,0.7)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Enterprise pricing is tailored to your organization — products deployed individually or as a full suite. Speak with our team to build the right package.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
              Contact Sales <ArrowRight size={16} />
            </a>
            <a href={`${BASE}/enterprise/`} className="btn-invert" style={{ fontSize: 16, padding: "16px 32px" }}>
              Enterprise Overview
            </a>
          </div>

          {/* Feature bullets */}
          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
            {["Dedicated success manager", "Custom SLA & uptime guarantees", "VPC / on-premise deployment", "Unlimited seats on request", "Priority incident response", "Annual billing with multi-year discounts"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(250,248,243,0.65)", fontWeight: 500 }}>
                <CheckCircle size={14} color="var(--nb-yellow)" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
