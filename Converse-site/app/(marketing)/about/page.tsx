import type { Metadata } from "next";
import Link from "next/link";
import { Target, Heart, Lightbulb, ArrowRight, CheckCircle, Users, Zap, Shield } from "lucide-react";

const TIMELINE = [
  {
    year: "2022",
    quarter: "Q3",
    title: "Foundation",
    description:
      "Converse founded to address the gap between research-grade voice AI and production-ready enterprise infrastructure. Initial architecture validated with three design partners in financial services.",
  },
  {
    year: "2022",
    quarter: "Q4",
    title: "First pipeline framework",
    description:
      "Core pipeline engine shipped — the composable frame-based architecture that underlies every Converse deployment. First integrations: Deepgram STT, OpenAI GPT-4, and ElevenLabs TTS.",
  },
  {
    year: "2023",
    quarter: "Q1",
    title: "WebRTC transport layer",
    description:
      "Daily.co and LiveKit transport adapters released, enabling browser-to-agent voice sessions with sub-80ms latency. First production deployments in customer service automation.",
  },
  {
    year: "2023",
    quarter: "Q2",
    title: "Telephony integrations",
    description:
      "Twilio and Telnyx telephony adapters launched. Enterprises began replacing legacy IVR trees with intelligent Converse-powered agents, reporting 40–60% reduction in call handling time.",
  },
  {
    year: "2023",
    quarter: "Q4",
    title: "Smart turn detection",
    description:
      "Proprietary turn-detection model shipped, eliminating the late-interruption problem that plagued early voice AI deployments. Conversation naturalness scores improved significantly in A/B tests.",
  },
  {
    year: "2024",
    quarter: "Q1",
    title: "Enterprise security suite",
    description:
      "SSO/SAML, RBAC, audit logging, and private cloud deployment options launched. SOC 2 Type II audit initiated. First HIPAA BAA agreements signed with healthcare customers.",
  },
  {
    year: "2024",
    quarter: "Q2",
    title: "Memory & MCP tools",
    description:
      "Persistent conversation memory and Model Context Protocol tool support added. Agents can now carry context across sessions and invoke enterprise systems via MCP without custom glue code.",
  },
  {
    year: "2024",
    quarter: "Q4",
    title: "OpenTelemetry observability",
    description:
      "Native OpenTelemetry integration shipped. Full distributed traces across STT, LLM, and TTS stages with p99 latency dashboards. Enterprise customers integrate directly with Datadog, Grafana, and Honeycomb.",
  },
];

const VALUES = [
  {
    icon: Shield,
    title: "Reliability first",
    description:
      "Enterprise voice infrastructure cannot fail in production. Every design decision starts with reliability — correctness, predictability, and graceful degradation under load and failure.",
  },
  {
    icon: Zap,
    title: "Developer experience",
    description:
      "The best infrastructure is the infrastructure teams actually use. We optimize for readable APIs, comprehensive documentation, and fast iteration cycles.",
  },
  {
    icon: Lightbulb,
    title: "Principled innovation",
    description:
      "We integrate new models and providers when they genuinely improve production outcomes — not to chase benchmarks. Every addition is tested against real workloads before shipping.",
  },
  {
    icon: Users,
    title: "Customer partnership",
    description:
      "Our roadmap is shaped by enterprise customers building at scale. We work closely with design partners to ensure Converse solves real infrastructure problems, not hypothetical ones.",
  },
];

export const metadata: Metadata = {
  title: "About | Converse",
  description: "Learn about Converse's mission, team, and vision for the future of AI-powered voice and conversational experiences.",
  openGraph: {
    title: "About | Converse",
    description: "Learn about Converse's mission, team, and vision for the future of AI-powered voice and conversational experiences.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          {/* Waveform SVG background art */}
          <div style={{ position: "absolute", right: 0, top: 0, opacity: 0.06, pointerEvents: "none", overflow: "hidden", height: "100%", width: "50%" }}>
            <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
              {Array.from({ length: 60 }, (_, i) => {
                const height = 20 + Math.sin(i * 0.4) * 60 + Math.cos(i * 0.15) * 40;
                return (
                  <rect
                    key={i}
                    x={i * 9}
                    y={(200 - height / 2)}
                    width="6"
                    height={height}
                    fill="#7C3AED"
                  />
                );
              })}
            </svg>
          </div>
          <div style={{ position: "relative", maxWidth: "780px" }}>
            <span className="eyebrow anim-fade-up">About Converse</span>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}
            >
              Building the infrastructure layer for{" "}
              <span style={{ color: "var(--nb-violet)" }}>enterprise voice AI.</span>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.2rem", marginTop: "1.5rem", maxWidth: "620px", lineHeight: 1.7, opacity: 0.8 }}
            >
              Converse is a Python framework for building production voice pipelines. We handle the hard
              infrastructure problems — latency, reliability, provider abstraction, and security — so
              engineering teams can focus on building voice experiences.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Talk to Our Team <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Target size={28} color="var(--nb-violet)" />
                <span className="section-label" style={{ margin: 0 }}>Mission</span>
              </div>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2 }}>
                Make enterprise voice AI as reliable as the systems enterprises already trust.
              </h2>
              <p style={{ marginTop: "1.25rem", lineHeight: 1.75, opacity: 0.75 }}>
                Voice AI has a production problem. Research demos run in notebooks. Real enterprise
                deployments need carrier-grade reliability, regulated-industry security, and performance
                that customers never notice because it just works.
              </p>
              <p style={{ marginTop: "1rem", lineHeight: 1.75, opacity: 0.75 }}>
                Converse exists to close that gap. We build the infrastructure layer that lets engineering
                teams skip from proof-of-concept to production-ready without rebuilding the same plumbing.
              </p>
            </div>
            {/* Abstract waveform SVG */}
            <div className="nb-card" style={{ padding: "2rem", overflow: "hidden" }}>
              <svg viewBox="0 0 380 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Background grid */}
                {Array.from({ length: 11 }, (_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 22} x2="380" y2={i * 22} stroke="#E5E7EB" strokeWidth="1" />
                ))}
                {Array.from({ length: 19 }, (_, i) => (
                  <line key={`v${i}`} x1={i * 22} y1="0" x2={i * 22} y2="220" stroke="#E5E7EB" strokeWidth="1" />
                ))}
                {/* Waveform bars */}
                {Array.from({ length: 38 }, (_, i) => {
                  const heights = [15, 35, 60, 80, 95, 105, 95, 80, 60, 35, 15, 10, 20, 45, 70, 90, 110, 90, 70, 45, 20, 10, 15, 40, 65, 85, 100, 85, 65, 40, 15, 10, 25, 50, 75, 50, 25, 10];
                  const h = heights[i] || 15;
                  return (
                    <rect
                      key={i}
                      x={i * 10 + 1}
                      y={110 - h / 2}
                      width="7"
                      height={h}
                      fill={i > 10 && i < 28 ? "#7C3AED" : "#D1D5DB"}
                      opacity={i > 10 && i < 28 ? 1 : 0.5}
                    />
                  );
                })}
                {/* Playhead line */}
                <line x1="192" y1="0" x2="192" y2="220" stroke="#7C3AED" strokeWidth="2" />
                <circle cx="192" cy="110" r="5" fill="#7C3AED" />
                {/* Labels */}
                <text x="10" y="215" fontSize="8" fill="#9CA3AF">0:00</text>
                <text x="340" y="215" fontSize="8" fill="#9CA3AF">0:30</text>
                <text x="165" y="12" fontSize="8" fill="#7C3AED" fontWeight="bold">Active pipeline</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center", marginBottom: "0.75rem" }}>
              <Heart size={24} color="var(--nb-violet)" />
              <span className="section-label" style={{ margin: 0 }}>Values</span>
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 900 }}>What we believe</h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="nb-card">
                  <div className="feature-icon" style={{ marginBottom: "1rem" }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.5rem" }}>{v.title}</h3>
                  <p style={{ opacity: 0.75, lineHeight: 1.7 }}>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">History</span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 900, marginTop: "0.5rem" }}>Company milestones</h2>
          </div>
          <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
            {/* Timeline line */}
            <div style={{ position: "absolute", left: "89px", top: "0", bottom: "0", width: "2px", background: "#000" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {TIMELINE.map((event, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: "0", alignItems: "flex-start", marginBottom: "2rem", position: "relative" }}
                >
                  {/* Date column */}
                  <div style={{ minWidth: "90px", textAlign: "right", paddingRight: "1.5rem", paddingTop: "0.25rem" }}>
                    <div style={{ fontWeight: 900, fontSize: "1rem", color: "var(--nb-violet)" }}>{event.year}</div>
                    <div style={{ fontWeight: 700, fontSize: "0.78rem", opacity: 0.6 }}>{event.quarter}</div>
                  </div>
                  {/* Dot */}
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      background: "var(--nb-violet)",
                      border: "3px solid #000",
                      borderRadius: "50%",
                      flexShrink: 0,
                      marginTop: "4px",
                      zIndex: 1,
                    }}
                  />
                  {/* Content */}
                  <div style={{ paddingLeft: "1.5rem", flex: 1 }}>
                    <div className="nb-card" style={{ padding: "1.25rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                        <CheckCircle size={15} color="var(--nb-violet)" />
                        <h3 style={{ fontWeight: 800, fontSize: "1rem" }}>{event.title}</h3>
                      </div>
                      <p style={{ opacity: 0.72, fontSize: "0.9rem", lineHeight: 1.65 }}>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff" }}>
            Join the teams building with Converse
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.1rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            Whether you're modernizing a call center, building a voice assistant, or exploring new
            conversational interfaces — our team is ready to help.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
