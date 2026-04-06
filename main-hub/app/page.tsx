import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import {
  ArrowRight, Monitor, Server, Smartphone, Bot, MessageSquare,
  ShoppingCart, Palette, CheckCircle, ChevronRight, Brain,
  Globe, Layers, Zap, Code2,
} from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SERVICES = [
  {
    icon: Monitor,
    title: "Frontend Development",
    desc: "Pixel-perfect interfaces built with React, Next.js, and TypeScript. Fast, accessible, and engineered to scale.",
    color: "#F5C518",
    textColor: "#0A0A0A",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust APIs, microservices, and data infrastructure built with Node.js, Python, and Go — engineered for reliability.",
    color: "#7C3AED",
    textColor: "#fff",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with React Native and Flutter. iOS and Android from a single, maintainable codebase.",
    color: "#0D9488",
    textColor: "#fff",
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Custom autonomous agents that work for your business — from single-purpose tools to complex multi-agent systems.",
    color: "#F59E0B",
    textColor: "#0A0A0A",
  },
  {
    icon: MessageSquare,
    title: "Customer Chatbots",
    desc: "AI-powered chatbots that handle support, sales, and lead generation 24/7 — deployed across every channel.",
    color: "#E11D48",
    textColor: "#fff",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Custom storefronts, checkout flows, and product experiences that convert visitors into customers at scale.",
    color: "#2D6A4F",
    textColor: "#fff",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "We map your goals, users, and technical requirements. No assumptions — we understand your business deeply before writing a single line of code.",
    color: "#F5C518",
  },
  {
    step: "02",
    title: "Design",
    desc: "We design the exact product for your needs. Wireframes, prototypes, and architecture — everything documented before build begins.",
    color: "#7C3AED",
  },
  {
    step: "03",
    title: "Build",
    desc: "Senior engineers build your product. Weekly demos, full transparency, and iterative delivery so you see progress every week.",
    color: "#0D9488",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We handle production deployment, monitoring, and ongoing support. Your product stays healthy, performant, and evolving.",
    color: "#F59E0B",
  },
];

const WORK_SAMPLES = [
  {
    name: "InferGate",
    category: "AI Infrastructure",
    desc: "Enterprise AI gateway routing 10,400+ req/s across 25+ LLM providers with semantic caching and real-time observability.",
    href: `${BASE}/infergate/`,
    color: "#F5C518",
    tags: ["AI", "Infrastructure", "API"],
  },
  {
    name: "Converse",
    category: "Voice AI Platform",
    desc: "Production voice AI infrastructure with real-time speech processing, multimodal pipelines, and WebRTC transport.",
    href: `${BASE}/converse/`,
    color: "#7C3AED",
    tags: ["Voice AI", "Real-time", "WebRTC"],
  },
  {
    name: "HaloDesk",
    category: "Customer Support AI",
    desc: "AI-native support platform unifying 12+ channels with autonomous resolution, analytics, and omnichannel inbox.",
    href: `${BASE}/halodesk/`,
    color: "#0D9488",
    tags: ["Chatbot", "Support", "Omnichannel"],
  },
  {
    name: "Genie",
    category: "Enterprise Knowledge AI",
    desc: "Custom AI agents with RAG, enterprise semantic search, and research capabilities connecting to 40+ enterprise systems.",
    href: `${BASE}/genie/`,
    color: "#F59E0B",
    tags: ["AI Agents", "RAG", "Search"],
  },
];

const TECH = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go",
  "React Native", "Flutter", "OpenAI", "Anthropic", "AWS", "GCP",
  "PostgreSQL", "Redis", "Docker", "Kubernetes", "GraphQL", "Tailwind CSS",
];

const TESTIMONIALS = [
  {
    quote: "The AI gateway they built handles 50M+ requests a month without a single outage. The engineering quality is a cut above any agency we've worked with.",
    name: "Jordan M.",
    role: "VP Engineering",
    company: "Series B FinTech",
    color: "#F5C518",
  },
  {
    quote: "We went from idea to production in 8 weeks. The codebase they handed over was genuinely impressive — our internal team said it looked like senior engineers had been on it for a year.",
    name: "Priya S.",
    role: "CTO",
    company: "Enterprise SaaS",
    color: "#7C3AED",
  },
  {
    quote: "Most agencies quote one thing and deliver another. AI Platform does exactly what they say, when they say it. That level of trust is genuinely rare.",
    name: "Alex T.",
    role: "Founder",
    company: "AI-first Startup",
    color: "#0D9488",
  },
];

const WHY = [
  {
    title: "Full-Stack by Default",
    desc: "Frontend, backend, mobile, AI — we do it all in-house. No handoffs, no gaps, no finger-pointing.",
    icon: Layers,
  },
  {
    title: "AI-Native Thinking",
    desc: "AI isn't a feature we bolt on. It's how we think about every product from the very start.",
    icon: Brain,
  },
  {
    title: "Owned Delivery",
    desc: "Senior engineers own your project end-to-end. No outsourcing, no juniors running the show.",
    icon: Code2,
  },
  {
    title: "Ongoing Partnership",
    desc: "We don't disappear after launch. We support, iterate, and optimize as your product grows.",
    icon: Zap,
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
          {/* Floating accent blobs */}
          <div data-float="on" style={{ position: "absolute", top: "10%", right: "5%", width: 320, height: 320, background: "radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />
          <div data-float="on" style={{ position: "absolute", bottom: "15%", left: "2%", width: 240, height: 240, background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
            <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.05 }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 56} x2="1200" y2={i * 56} stroke="#0A0A0A" strokeWidth="0.5" />
              ))}
              {Array.from({ length: 22 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 56} y1="0" x2={i * 56} y2="600" stroke="#0A0A0A" strokeWidth="0.5" />
              ))}
            </svg>
          </div>

          <div className="container" style={{ position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
              <div>
                <div className="eyebrow anim-fade-up" style={{ display: "inline-flex" }}>
                  Full-Service Digital Agency
                </div>
                <h1
                  className="anim-fade-up delay-100"
                  style={{ fontSize: "clamp(40px,6vw,80px)", lineHeight: 0.95, letterSpacing: "-0.045em", marginBottom: 24 }}
                >
                  We design &amp; build{" "}
                  <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", fontWeight: 700, color: "var(--nb-ink-muted)" }}>
                    exceptional
                  </span>{" "}
                  digital products.
                </h1>
                <p
                  className="anim-fade-up delay-200"
                  style={{ fontSize: "clamp(16px,2vw,20px)", color: "var(--nb-ink-muted)", lineHeight: 1.65, marginBottom: 36, maxWidth: 480 }}
                >
                  AI Platform is a senior-led digital agency. We build websites, web apps, mobile apps, AI agents, and customer chatbots from first concept to production launch.
                </p>
                <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <a href={`${BASE}/contact/`} className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
                    Start a Project <ArrowRight size={16} />
                  </a>
                  <a href={`${BASE}/work/`} className="btn-secondary" style={{ fontSize: 16, padding: "16px 32px" }}>
                    View Our Work
                  </a>
                </div>
              </div>

              {/* Hero visual */}
              <div className="anim-fade-up delay-200 hero-visual" style={{ position: "relative" }}>
                <div style={{
                  border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-xl)",
                  background: "#0A0A0A", borderRadius: "var(--radius)", overflow: "hidden", padding: 32,
                }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  </div>
                  <svg viewBox="0 0 400 260" width="100%" style={{ display: "block" }}>
                    {[40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => (
                      <line key={`vx${x}`} x1={x} y1="0" x2={x} y2="260" stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
                    ))}
                    {[40, 80, 120, 160, 200, 240].map(y => (
                      <line key={`hy${y}`} x1="0" y1={y} x2="400" y2={y} stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
                    ))}
                    {[
                      { cx: 80,  cy: 70,  color: "#F5C518" },
                      { cx: 200, cy: 50,  color: "#7C3AED" },
                      { cx: 320, cy: 70,  color: "#0D9488" },
                      { cx: 130, cy: 150, color: "#F59E0B" },
                      { cx: 270, cy: 150, color: "#E11D48" },
                      { cx: 200, cy: 220, color: "#F5C518" },
                    ].map((n, i) => (
                      <g key={i}>
                        <circle cx={n.cx} cy={n.cy} r="14" fill={`${n.color}22`} stroke={n.color} strokeWidth="1.5" />
                        <circle cx={n.cx} cy={n.cy} r="4" fill={n.color} />
                      </g>
                    ))}
                    {[
                      [80,70,200,50], [200,50,320,70],
                      [80,70,130,150], [200,50,130,150], [200,50,270,150],
                      [320,70,270,150], [130,150,200,220], [270,150,200,220],
                    ].map(([x1,y1,x2,y2], i) => (
                      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(245,197,24,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
                    ))}
                    {[
                      { cx: 80,  cy: 70,  label: "Frontend" },
                      { cx: 200, cy: 50,  label: "AI Core" },
                      { cx: 320, cy: 70,  label: "API Layer" },
                      { cx: 130, cy: 150, label: "Mobile" },
                      { cx: 270, cy: 150, label: "Chatbot" },
                      { cx: 200, cy: 220, label: "Deploy" },
                    ].map((n, i) => (
                      <text key={i} x={n.cx} y={n.cy + 28} textAnchor="middle" fill="rgba(250,248,243,0.45)" fontSize="9" fontFamily="JetBrains Mono, monospace">{n.label}</text>
                    ))}
                  </svg>
                  <p style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 11, color: "#F5C518", marginTop: 16, opacity: 0.8 }}>
                    {"// your_product.built_by_ai_platform"}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div
              className="anim-fade-up delay-400"
              style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: 64, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", background: "var(--nb-bg)" }}
            >
              {[
                { num: 50,  suffix: "+",  label: "projects delivered",  isCounter: true },
                { num: 8,   suffix: "",   label: "service areas",       isCounter: true },
                { num: 100, suffix: "%",  label: "in-house team",       isCounter: true },
                { num: null, text: "Senior", label: "led delivery",     isCounter: false },
                { num: null, text: "<1d",   label: "avg response time", isCounter: false },
              ].map((stat, i) => (
                <div key={i} style={{ padding: "20px 36px", borderLeft: i > 0 ? "2px solid var(--nb-border-faint)" : "none", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 700, letterSpacing: "-0.03em" }}>
                    {stat.isCounter
                      ? <span data-counter={stat.num} data-counter-suffix={stat.suffix}>{stat.num}{stat.suffix}</span>
                      : stat.text}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--nb-ink-dim)", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────── */}
        <section className="section section--surface" id="services">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="section-label">What We Build</div>
              <h2 style={{ fontSize: "clamp(30px,4vw,52px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
                Every service you need.{" "}
                <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>One team.</span>
              </h2>
              <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
                From marketing websites to complex AI systems — we have the expertise to build it, and the track record to get it right.
              </p>
            </div>

            <div className="hub-product-grid">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`nb-card anim-fade-up delay-${(i % 4 + 1) * 100}`}
                    style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16, borderLeft: `4px solid ${service.color}` }}
                  >
                    <div style={{ width: 48, height: 48, background: service.color, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius)" }}>
                      <Icon size={22} color={service.textColor} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{service.title}</h3>
                      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{service.desc}</p>
                    </div>
                    <a href={`${BASE}/services/`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--nb-ink)", textDecoration: "none", marginTop: "auto" }}>
                      Learn more <ChevronRight size={12} />
                    </a>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a href={`${BASE}/services/`} className="btn-primary" style={{ fontSize: 15 }}>
                Explore All Services <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ──────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="hub-arch-grid">
              <div>
                <div className="section-label">Our Process</div>
                <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 20, lineHeight: 1 }}>
                  How we turn your idea{" "}
                  <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>into a product.</span>
                </h2>
                <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 40 }}>
                  We follow a proven, transparent process that keeps you informed and in control at every step. No surprises, no handoffs — just great products built on time.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {PROCESS.map((step) => (
                    <div key={step.step} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 40, height: 40, background: step.color, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)", fontFamily: "var(--font-jetbrains,monospace)", fontSize: 12, fontWeight: 700 }}>
                        {step.step}
                      </div>
                      <div>
                        <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4, letterSpacing: "-0.02em" }}>{step.title}</h4>
                        <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why us */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="section-label" style={{ marginBottom: 0 }}>Why teams choose us</div>
                {WHY.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="nb-card" style={{ padding: "20px 24px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 36, height: 36, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                        <Icon size={16} color="var(--nb-ink)" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4, letterSpacing: "-0.02em" }}>{item.title}</h4>
                        <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
                <a href={`${BASE}/about/`} className="btn-secondary" style={{ textAlign: "center", justifyContent: "center", marginTop: 8 }}>
                  About Our Team <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR WORK ─────────────────────────────────────────── */}
        <section className="section section--elevated" id="work">
          <div className="container">
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div className="section-label">Featured Work</div>
                <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  Products we{"'"}ve built.
                </h2>
              </div>
              <a href={`${BASE}/work/`} className="btn-secondary">
                View All Work <ArrowRight size={14} />
              </a>
            </div>

            <div className="hub-product-grid">
              {WORK_SAMPLES.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nb-card anim-fade-up delay-${(i % 4 + 1) * 100}`}
                  style={{ padding: 28, textDecoration: "none", color: "var(--nb-ink)", display: "flex", flexDirection: "column", gap: 16, borderTop: `4px solid ${item.color}` }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 4 }}>{item.category}</p>
                      <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em" }}>{item.name}</h3>
                    </div>
                    <ChevronRight size={20} style={{ color: "var(--nb-ink-muted)", flexShrink: 0 }} />
                  </div>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{item.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
                    {item.tags.map(tag => (
                      <span key={tag} style={{ padding: "3px 8px", background: "var(--nb-surface)", border: "1.5px solid var(--nb-border-faint)", fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase" }}>{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label">What Clients Say</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
                Don{"'"}t take our word for it.
              </h2>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 480, margin: "0 auto" }}>
                We let the outcomes speak. Here{"'"}s what clients say after working with us.
              </p>
            </div>
            <div className="hub-platform-grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="nb-card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 24, borderTop: `4px solid ${t.color}` }}>
                  <div style={{ fontSize: 40, lineHeight: 1, color: t.color, fontFamily: "var(--font-fraunces,serif)", fontWeight: 900, opacity: 0.6 }}>&ldquo;</div>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--nb-ink-muted)", marginTop: -20, fontStyle: "italic", flex: 1 }}>
                    {t.quote}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1.5px solid var(--nb-border-faint)" }}>
                    <div style={{ width: 40, height: 40, background: t.color, border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16 }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em" }}>{t.name}</p>
                      <p style={{ fontSize: 12, color: "var(--nb-ink-dim)", fontWeight: 500 }}>{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="section-label">Technology</div>
              <h2 style={{ fontSize: "clamp(24px,3vw,40px)", letterSpacing: "-0.04em" }}>Built with the best tools.</h2>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", marginTop: 12 }}>We pick the right technology for your project — not the trendiest one.</p>
            </div>
            <div className="marquee">
              <div className="marquee-track" style={{ gap: 8 }}>
                {[...TECH, ...TECH].map((t, i) => (
                  <span key={i} style={{ padding: "10px 20px", border: "2px solid var(--nb-border)", background: "var(--nb-bg)", boxShadow: "var(--shadow-brutal-sm)", fontSize: 13, fontWeight: 700, letterSpacing: "-.01em", whiteSpace: "nowrap", flexShrink: 0 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="section section--invert" style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
          <div className="container--tight" style={{ textAlign: "center", position: "relative" }}>
            <div className="eyebrow" style={{ display: "inline-flex", background: "var(--nb-yellow)" }}>
              Let{"'"}s Work Together
            </div>
            <h2 style={{ fontSize: "clamp(32px,4.5vw,60px)", letterSpacing: "-0.045em", marginBottom: 20, color: "var(--nb-bg)", lineHeight: 1 }}>
              Got a project in mind?
            </h2>
            <p style={{ fontSize: 18, color: "rgba(250,248,243,0.7)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.65 }}>
              Tell us what you{"'"}re building. We{"'"}ll get back to you within 24 hours to discuss scope, timeline, and how we can help.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`${BASE}/contact/`} className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
                Start a Project <ArrowRight size={16} />
              </a>
              <a href={`${BASE}/services/`} className="btn-invert" style={{ fontSize: 16, padding: "16px 32px" }}>
                Explore Services
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
              {[
                "No long-term contracts",
                "24hr response time",
                "Fixed-price projects available",
                "Dedicated project manager",
                "Full IP ownership",
                "Post-launch support included",
              ].map((f) => (
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

      <style>{`
        @media(max-width:768px){
          .hero-grid{ grid-template-columns:1fr!important; }
          .hero-visual{ display:none; }
        }
      `}</style>
    </>
  );
}
