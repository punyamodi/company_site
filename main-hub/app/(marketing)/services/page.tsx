import type { Metadata } from "next";
import {
  ArrowRight, Monitor, Server, Smartphone, Bot, MessageSquare,
  ShoppingCart, Palette, Zap, Layers, Brain, Globe, CheckCircle,
  Code2, Workflow, BarChart2,
} from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Services",
  description: "AI Platform services: product strategy, web and mobile engineering, AI systems, automation, and design delivered by one in-house team.",
};

const SERVICES = [
  {
    id: "frontend",
    icon: Monitor,
    title: "Frontend Development",
    color: "#F5C518",
    textColor: "#0A0A0A",
    tagline: "React · Next.js · TypeScript · Vue",
    desc: "We craft fast, accessible, and visually precise user interfaces. From marketing sites to complex dashboards, our frontend engineers deliver pixel-perfect experiences that perform at scale.",
    deliverables: [
      "React / Next.js / Vue applications",
      "TypeScript codebases, fully typed",
      "Responsive & accessible (WCAG 2.1)",
      "Performance-optimised (Core Web Vitals)",
      "Design system implementation",
      "Component libraries & Storybook",
      "SEO-optimised & server-side rendered",
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    color: "#7C3AED",
    textColor: "#fff",
    tagline: "Node.js · Python · Go · Django · FastAPI",
    desc: "Robust, scalable backend systems engineered for production from day one. We build APIs, microservices, data pipelines, and the infrastructure that powers your product.",
    deliverables: [
      "RESTful & GraphQL APIs",
      "Microservices & monolithic architectures",
      "Database design & optimisation (PostgreSQL, MySQL)",
      "Real-time features with WebSockets",
      "Authentication & authorisation systems",
      "Third-party API integrations",
      "CI/CD pipelines & DevOps setup",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    color: "#0D9488",
    textColor: "#fff",
    tagline: "React Native · Flutter · iOS · Android",
    desc: "Cross-platform mobile apps that feel truly native. We build high-quality iOS and Android applications from a single codebase — faster delivery, lower cost, zero compromise on quality.",
    deliverables: [
      "React Native cross-platform apps",
      "Flutter apps (iOS + Android)",
      "Native iOS (Swift) development",
      "Native Android (Kotlin) development",
      "App Store & Play Store submission",
      "Push notifications & offline support",
      "Deep linking & analytics integration",
    ],
  },
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agents",
    color: "#F59E0B",
    textColor: "#0A0A0A",
    tagline: "Custom Agents · Multi-Agent Systems · Tool Use",
    desc: "Autonomous AI agents designed to work for your business around the clock. From single-purpose tools to complex multi-agent orchestration systems — we build agents that take action.",
    deliverables: [
      "Single-purpose task agents",
      "Multi-agent orchestration systems",
      "Tool use & function calling integration",
      "Agent memory & persistence layers",
      "LLM provider integration (OpenAI, Anthropic, etc.)",
      "Human-in-the-loop workflows",
      "Agent monitoring & observability",
    ],
  },
  {
    id: "chatbots",
    icon: MessageSquare,
    title: "Customer Chatbots",
    color: "#E11D48",
    textColor: "#fff",
    tagline: "AI-powered Support · Sales · Lead Gen",
    desc: "AI chatbots that actually work. We build intelligent, context-aware chatbots deployed across your website, mobile app, or messaging channels — handling support, sales, and lead generation 24/7.",
    deliverables: [
      "AI chatbot design & development",
      "Multi-channel deployment (web, mobile, WhatsApp)",
      "Knowledge base & FAQ integration",
      "Live agent handoff system",
      "Conversation analytics & reporting",
      "CRM integration (HubSpot, Salesforce)",
      "Custom personality & brand voice",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    color: "#2D6A4F",
    textColor: "#fff",
    tagline: "Custom Storefronts · Shopify · Headless Commerce",
    desc: "Online stores built to convert and built to scale. Whether you need a custom storefront, a Shopify theme, or a headless commerce solution — we deliver e-commerce experiences that drive revenue.",
    deliverables: [
      "Custom e-commerce storefront development",
      "Shopify theme & app development",
      "Headless commerce with Next.js",
      "Payment gateway integration",
      "Inventory & order management",
      "Product recommendation engines",
      "Performance & conversion optimisation",
    ],
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    color: "#1D4ED8",
    textColor: "#fff",
    tagline: "User Research · Wireframing · Prototyping",
    desc: "Great products start with great design. Our designers research your users, design intuitive flows, and deliver high-fidelity prototypes ready for development.",
    deliverables: [
      "User research & persona definition",
      "Information architecture & user flows",
      "Wireframing & lo-fi prototyping",
      "High-fidelity UI design (Figma)",
      "Interactive prototypes & user testing",
      "Design system creation",
      "Developer handoff documentation",
    ],
  },
  {
    id: "ai-integration",
    icon: Brain,
    title: "AI Integration & Consulting",
    color: "#FF5A36",
    textColor: "#fff",
    tagline: "OpenAI · Anthropic · Gemini · Fine-tuning",
    desc: "Already have a product? We help you add powerful AI capabilities to it. From API integration to custom model fine-tuning — we make your existing product smarter.",
    deliverables: [
      "LLM API integration (OpenAI, Anthropic, Gemini)",
      "Retrieval-augmented generation (RAG)",
      "Custom model fine-tuning",
      "AI strategy & roadmap consulting",
      "Prompt engineering & optimisation",
      "AI cost reduction & performance tuning",
      "AI readiness assessment",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    name: "Fixed-Price Project",
    desc: "Best for well-defined projects with clear requirements. We scope, price, and deliver — no surprises.",
    forWho: "Startups, SMBs, defined projects",
    color: "#F5C518",
  },
  {
    name: "Time & Materials",
    desc: "Best for evolving projects where requirements change. We work on a sprint-based model with full transparency.",
    forWho: "Scale-ups, product companies, ongoing builds",
    color: "#7C3AED",
  },
  {
    name: "Dedicated Team",
    desc: "A dedicated team of engineers embedded in your product org — available full-time, fully managed.",
    forWho: "Enterprise, long-term partnerships",
    color: "#0D9488",
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 56 }}>
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex" }}>Services</div>
          <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", letterSpacing: "-0.045em", marginBottom: 20, lineHeight: 1, maxWidth: 800 }}>
            Everything you need to build{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>
              exceptional products.
            </span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 640, marginBottom: 40 }}>
            Eight service areas, one integrated team. We take products from strategy and design through engineering, launch, and post-release support.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary">
              Start a Project <ArrowRight size={15} />
            </a>
            <a href={`${BASE}/work/`} className="btn-secondary">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="section section--surface" style={{ paddingTop: 0 }}>
        <div className="container">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 2fr" : "2fr 1fr",
                  gap: 64,
                  alignItems: "start",
                  padding: "64px 0",
                  borderBottom: i < SERVICES.length - 1 ? "2px solid var(--nb-border-faint)" : "none",
                }}
                className="service-row"
              >
                {/* Label side */}
                <div style={{ order: i % 2 === 0 ? 0 : 1 }} className="service-label-col">
                  <div style={{ width: 56, height: 56, background: service.color, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius)", marginBottom: 20 }}>
                    <Icon size={26} color={service.textColor} />
                  </div>
                  <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8 }}>{service.title}</h2>
                  <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 20 }}>{service.tagline}</p>
                  <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{service.desc}</p>
                  <a href={`${BASE}/contact/`} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, fontSize: 14, fontWeight: 700, color: "var(--nb-ink)", textDecoration: "none" }}>
                    Discuss this service <ArrowRight size={14} />
                  </a>
                </div>

                {/* Deliverables side */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }} className="service-deliverables-col">
                  <div className="nb-card" style={{ padding: 32, borderTop: `4px solid ${service.color}` }}>
                    <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 20 }}>What you get</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                      {service.deliverables.map((d) => (
                        <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--nb-ink)", fontWeight: 500, lineHeight: 1.5 }}>
                          <CheckCircle size={14} color={service.color} style={{ flexShrink: 0, marginTop: 2 }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement models */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">How We Engage</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
              Choose the model that fits.
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 520, margin: "0 auto" }}>
              We work with clients in different ways. Whether you need a fixed-scope project or a long-term embedded team, we can accommodate.
            </p>
          </div>

          <div className="hub-platform-grid">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.name}
                className="nb-card"
                style={{ padding: 32, position: "relative", borderTop: model.featured ? `4px solid ${model.color}` : "2px solid var(--nb-border)" }}
              >
                {model.featured && (
                  <div style={{ position: "absolute", top: -1, right: 20, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", padding: "3px 10px", fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ width: 12, height: 12, background: model.color, border: "2px solid var(--nb-border)", marginBottom: 16 }} />
                <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{model.name}</h3>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6, marginBottom: 20 }}>{model.desc}</p>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink-dim)" }}>Best for: {model.forWho}</p>
                <a href={`${BASE}/contact/`} className={model.featured ? "btn-primary" : "btn-secondary"} style={{ width: "100%", justifyContent: "center", marginTop: 24 }}>
                  Get a Quote <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert" style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div className="container--tight" style={{ textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.045em", color: "var(--nb-bg)", marginBottom: 16, lineHeight: 1 }}>
            Not sure what you need?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(250,248,243,0.7)", marginBottom: 36, lineHeight: 1.65 }}>
            Tell us about your project and we{"'"}ll help you figure out the right approach — no pressure, no obligation.
          </p>
          <a href={`${BASE}/contact/`} className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
            Let{"'"}s Talk <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <style>{`
        @media(max-width:768px) {
          .service-row { grid-template-columns: 1fr !important; }
          .service-label-col { order: 0 !important; }
          .service-deliverables-col { order: 1 !important; }
        }
      `}</style>
    </>
  );
}
