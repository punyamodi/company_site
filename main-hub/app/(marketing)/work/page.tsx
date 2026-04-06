import type { Metadata } from "next";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Case studies and delivery outcomes from AI Platform Agency across web, mobile, AI, and product engineering.",
};

const PROJECTS = [
  {
    name: "InferGate",
    category: "AI Infrastructure",
    type: "Web Application",
    color: "#F5C518",
    href: `${BASE}/infergate/`,
    desc: "An enterprise-grade AI gateway that routes, caches, and governs every AI call across an organisation. Built to handle 10,400+ requests per second with semantic caching and full observability.",
    outcomes: [
      "10,400+ req/s throughput",
      "0.3ms P50 overhead latency",
      "65% average cost reduction",
      "25+ LLM provider integrations",
    ],
    tags: ["AI Infrastructure", "API Gateway", "React", "TypeScript", "Go"],
    featured: true,
  },
  {
    name: "Converse",
    category: "Voice AI Platform",
    type: "SaaS Platform",
    color: "#7C3AED",
    href: `${BASE}/converse/`,
    desc: "A production voice AI infrastructure platform with real-time speech processing, multimodal pipelines, and enterprise-scale WebRTC transport supporting 50+ languages.",
    outcomes: [
      "Sub-100ms voice latency",
      "50+ language support",
      "99.9% uptime SLA",
      "10M+ minutes/month capacity",
    ],
    tags: ["Voice AI", "Real-time", "WebRTC", "React", "Python"],
    featured: true,
  },
  {
    name: "HaloDesk",
    category: "Customer Support AI",
    type: "SaaS Platform",
    color: "#0D9488",
    href: `${BASE}/halodesk/`,
    desc: "An AI-native customer support platform unifying 12+ channels — email, chat, SMS, and voice — with autonomous ticket resolution, advanced analytics, and a powerful AI agent called Captain.",
    outcomes: [
      "60% auto-resolution rate",
      "3× agent productivity increase",
      "12+ channels unified",
      "Sub-1hr mean resolution time",
    ],
    tags: ["AI Chatbot", "Omnichannel", "Support", "React", "Node.js"],
    featured: true,
  },
  {
    name: "Genie",
    category: "Enterprise Knowledge AI",
    type: "AI Agent Platform",
    color: "#F59E0B",
    href: `${BASE}/genie/`,
    desc: "A custom AI agent platform for enterprise knowledge management — connecting to 40+ data sources, powering retrieval-augmented generation, deep research, and intelligent document understanding.",
    outcomes: [
      "40+ native integrations",
      "Sub-2s average query time",
      "SOC 2 certified",
      "VPC deployment options",
    ],
    tags: ["AI Agents", "RAG", "Knowledge Graph", "Python", "React"],
    featured: true,
  },
  {
    name: "Custom E-commerce Platform",
    category: "E-commerce",
    type: "Web Application",
    color: "#2D6A4F",
    href: `${BASE}/contact/`,
    desc: "A bespoke headless e-commerce solution built for a high-growth consumer brand — custom storefront, dynamic personalisation, and a streamlined checkout flow.",
    outcomes: [
      "32% conversion rate increase",
      "4× faster page load times",
      "Custom recommendation engine",
      "Integrated inventory management",
    ],
    tags: ["E-commerce", "Next.js", "Headless", "Node.js"],
    featured: false,
  },
  {
    name: "Mobile Banking App",
    category: "Mobile Development",
    type: "Mobile Application",
    color: "#1D4ED8",
    href: `${BASE}/contact/`,
    desc: "A cross-platform mobile banking application built with React Native — real-time transactions, biometric authentication, and integrated financial insights for 50,000+ users.",
    outcomes: [
      "50,000+ active users",
      "4.8★ App Store rating",
      "Real-time push notifications",
      "Biometric auth & 2FA",
    ],
    tags: ["Mobile", "React Native", "iOS", "Android", "FinTech"],
    featured: false,
  },
  {
    name: "AI Sales Assistant",
    category: "AI Agents",
    type: "AI Agent",
    color: "#FF5A36",
    href: `${BASE}/contact/`,
    desc: "An autonomous sales assistant AI agent that qualifies leads, books meetings, and handles inbound queries — integrated directly into a SaaS company's CRM.",
    outcomes: [
      "4× lead qualification speed",
      "38% more meetings booked",
      "24/7 availability",
      "CRM + calendar integration",
    ],
    tags: ["AI Agent", "LangChain", "OpenAI", "CRM", "Python"],
    featured: false,
  },
  {
    name: "Healthcare Dashboard",
    category: "Web Application",
    type: "Internal Tool",
    color: "#7C3AED",
    href: `${BASE}/contact/`,
    desc: "A clinical operations dashboard for a healthcare provider — real-time patient data visualisation, staff scheduling, and AI-assisted anomaly detection for critical metrics.",
    outcomes: [
      "40% reduction in manual reporting",
      "Real-time data from 6 sources",
      "HIPAA-compliant architecture",
      "Role-based access controls",
    ],
    tags: ["Dashboard", "React", "PostgreSQL", "Healthcare", "AI"],
    featured: false,
  },
];

export default function WorkPage() {
  const featured = PROJECTS.filter(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex" }}>Our Work</div>
          <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", letterSpacing: "-0.045em", marginBottom: 20, lineHeight: 1, maxWidth: 700 }}>
            Products we{"'"}ve designed{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>and built.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
            From AI infrastructure to customer-facing products, this is a selection of work delivered by our in-house team. Each case reflects measurable business outcomes and production-grade engineering.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary">
              Start Your Project <ArrowRight size={15} />
            </a>
            <a href={`${BASE}/services/`} className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section section--surface" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 40 }}>Featured Projects</div>
          <div className="hub-product-grid">
            {featured.map((project, i) => (
              <a
                key={project.name}
                href={project.href}
                className={`nb-card anim-fade-up delay-${(i % 4 + 1) * 100}`}
                style={{
                  padding: 32, textDecoration: "none", color: "var(--nb-ink)",
                  display: "flex", flexDirection: "column", gap: 20,
                  borderTop: `4px solid ${project.color}`,
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 4 }}>{project.category} · {project.type}</p>
                      <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.04em" }}>{project.name}</h3>
                    </div>
                    <ExternalLink size={18} style={{ color: "var(--nb-ink-muted)", flexShrink: 0 }} />
                  </div>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{project.desc}</p>
                </div>

                {/* Outcomes */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} style={{ padding: "10px 12px", background: "var(--nb-surface)", border: "1.5px solid var(--nb-border-faint)", fontSize: 12, fontWeight: 600, color: "var(--nb-ink-muted)", lineHeight: 1.4 }}>
                      {outcome}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ padding: "3px 8px", background: "var(--nb-elevated)", border: "1.5px solid var(--nb-border-faint)", fontSize: 11, fontWeight: 700, letterSpacing: ".04em" }}>{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="section">
        <div className="container">
          <div className="section-label" style={{ marginBottom: 40 }}>More Work</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="more-work-grid">
            {rest.map((project, i) => (
              <a
                key={project.name}
                href={project.href}
                className="nb-card"
                style={{
                  padding: 28, textDecoration: "none", color: "var(--nb-ink)",
                  display: "flex", gap: 20, alignItems: "flex-start",
                  borderLeft: `4px solid ${project.color}`,
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 4 }}>{project.category}</p>
                  <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{project.name}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.6, marginBottom: 12 }}>{project.desc}</p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} style={{ padding: "2px 7px", background: "var(--nb-surface)", border: "1.5px solid var(--nb-border-faint)", fontSize: 10, fontWeight: 700, letterSpacing: ".04em" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: "var(--nb-ink-muted)", flexShrink: 0, marginTop: 4 }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert" style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div className="container--tight" style={{ textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.045em", color: "var(--nb-bg)", marginBottom: 16, lineHeight: 1 }}>
            Ready to be our next project?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(250,248,243,0.7)", marginBottom: 36, lineHeight: 1.65 }}>
            We{"'"}d love to hear what you{"'"}re building and map the right execution plan.
          </p>
          <a href={`${BASE}/contact/`} className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
            Start a Project <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .more-work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
