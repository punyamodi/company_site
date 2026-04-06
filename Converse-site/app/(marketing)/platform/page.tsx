import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, GitBranch, Mic, Layers, Radio, LayoutGrid,
  BarChart3, Shield, Zap, ChevronRight, Check, Network, Server,
} from "lucide-react";

const PLATFORM_AREAS = [
  {
    icon: GitBranch,
    title: "Pipeline Engine",
    tag: "Core",
    desc: "Composable frame-based architecture with hot-swappable processors, parallel branches, and service switcher for zero-downtime provider changes.",
    href: "/platform/pipeline-engine",
    color: "var(--nb-violet)",
  },
  {
    icon: Mic,
    title: "Voice AI",
    tag: "Voice",
    desc: "ML-powered turn detection, VAD, interruption handling, streaming audio output, and noise cancellation for natural enterprise conversations.",
    href: "/platform/voice-ai",
    color: "#06B6D4",
  },
  {
    icon: Layers,
    title: "Multimodal",
    tag: "Multimodal",
    desc: "Process voice, video, and images in a single coherent pipeline. Native video avatar support and speech-to-speech model integration.",
    href: "/platform/multimodal",
    color: "#F97316",
  },
  {
    icon: Radio,
    title: "Transports",
    tag: "Transport",
    desc: "WebRTC (Daily, LiveKit), WebSocket, WhatsApp, and full telephony (Twilio, Plivo, Vonage) with enterprise-grade reliability.",
    href: "/platform/transports",
    color: "#059669",
  },
  {
    icon: LayoutGrid,
    title: "Integrations",
    tag: "AI",
    desc: "20+ AI service providers: OpenAI, Anthropic, Gemini, Deepgram, ElevenLabs, and more. Plug-and-play with your existing stack.",
    href: "/platform/integrations",
    color: "#7C3AED",
  },
  {
    icon: BarChart3,
    title: "Observability",
    tag: "Ops",
    desc: "OpenTelemetry traces, per-turn latency metrics, TTFB tracking, and Sentry error capture for production-grade monitoring.",
    href: "/platform/observability",
    color: "#06B6D4",
  },
  {
    icon: Shield,
    title: "Security",
    tag: "Security",
    desc: "SOC 2 Type II, HIPAA readiness, GDPR compliance, private cloud deployments, and end-to-end encryption at every layer.",
    href: "/platform/security",
    color: "#059669",
  },
];

function ArchitectureSVG() {
  const layers = [
    { label: "Security & Compliance", sub: "SOC2 · HIPAA · GDPR · Private Cloud", color: "#059669", bg: "rgba(5,150,105,0.08)" },
    { label: "Observability Layer", sub: "OpenTelemetry · Sentry · TTFB · Per-turn Metrics", color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
    { label: "AI Integrations (20+)", sub: "STT · LLM · TTS · Speech-to-Speech Services", color: "#06B6D4", bg: "rgba(6,182,212,0.08)" },
    { label: "Multimodal Processing", sub: "Voice · Video · Vision · Video Avatars", color: "#F97316", bg: "rgba(249,115,22,0.08)" },
    { label: "Voice AI Core", sub: "VAD · Smart Turn Detection · Streaming Audio", color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
    { label: "Transport Layer", sub: "WebRTC · WebSocket · Telephony · WhatsApp", color: "#06B6D4", bg: "rgba(6,182,212,0.08)" },
    { label: "Pipeline Engine", sub: "Frame-based · Composable · Parallel Branches", color: "#0A0A0A", bg: "rgba(10,10,10,0.06)" },
  ];
  return (
    <svg
      width="480"
      height="340"
      viewBox="0 0 480 340"
      fill="none"
      style={{ display: "block", width: "100%", maxWidth: 480 }}
    >
      {layers.map((l, i) => (
        <g key={i} style={{ animation: `fadeIn 0.45s ease ${i * 0.07}s both` }}>
          <rect
            x={i * 5}
            y={i * 46}
            width={480 - i * 10}
            height={40}
            rx="3"
            fill={l.bg}
            stroke="#0A0A0A"
            strokeWidth="2"
          />
          <rect x={i * 5} y={i * 46} width="5" height="40" rx="0" fill={l.color} />
          <text
            x={i * 5 + 18}
            y={i * 46 + 16}
            fontSize="12"
            fontWeight="800"
            fill="#0A0A0A"
            fontFamily="inherit"
          >
            {l.label}
          </text>
          <text
            x={i * 5 + 18}
            y={i * 46 + 30}
            fontSize="9.5"
            fill="#4A4540"
            fontFamily="inherit"
          >
            {l.sub}
          </text>
          {i < layers.length - 1 && (
            <line
              x1={(i * 5 + 480 - i * 10) / 2 + i * 5}
              y1={i * 46 + 40}
              x2={(i * 5 + 480 - i * 10) / 2 + i * 5}
              y2={i * 46 + 46}
              stroke="#C8C3B5"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Platform | Converse",
  description: "Explore the Converse platform — a complete, production-grade stack for building voice AI applications.",
  openGraph: {
    title: "Platform | Converse",
    description: "Explore the Converse platform — a complete, production-grade stack for building voice AI applications.",
    type: "website",
  },
};

export default function PlatformPage() {
  return (
    <div
      style={{
        background: "var(--nb-bg)",
        minHeight: "100vh",
        fontFamily: "var(--font-bricolage, sans-serif)",
        color: "var(--nb-ink)",
        overflowX: "hidden",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          padding: "96px 24px 80px",
          overflow: "hidden",
        }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            width: 380,
            height: 380,
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow anim-fade-up">Platform Overview</div>
              <h1
                className="anim-fade-up delay-100"
                style={{
                  fontSize: "clamp(36px,5vw,64px)",
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                  marginBottom: 24,
                }}
              >
                Every layer of{" "}
                <span style={{ color: "var(--nb-violet)" }}>voice AI</span>
                <br />
                <span
                  style={{
                    fontFamily: "var(--font-fraunces, serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(38px,5.5vw,68px)",
                  }}
                >
                  built for enterprise.
                </span>
              </h1>
              <p
                className="anim-fade-up delay-200"
                style={{
                  fontSize: "clamp(15px,1.6vw,18px)",
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 40,
                  maxWidth: 480,
                }}
              >
                Converse is a unified platform for building, deploying, and scaling
                real-time voice AI agents. Seven tightly integrated layers handle
                everything from transport to compliance — so your team ships faster.
              </p>
              <div
                className="anim-fade-up delay-300"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ fontSize: 16, padding: "15px 32px" }}
                >
                  Contact Sales <ArrowRight size={15} />
                </Link>
                <Link
                  href="/platform/integrations"
                  className="btn-secondary"
                  style={{ fontSize: 16, padding: "15px 32px" }}
                >
                  View Integrations <LayoutGrid size={15} />
                </Link>
              </div>
            </div>
            <div className="anim-fade-up delay-200">
              <ArchitectureSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM AREAS GRID ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Platform Areas</p>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,48px)",
                marginBottom: 16,
                maxWidth: 560,
              }}
            >
              Seven layers. One coherent system.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--nb-ink-muted)",
                maxWidth: 540,
                lineHeight: 1.75,
              }}
            >
              Each platform layer is independently powerful and deeply composable.
              Enterprise teams can adopt incrementally — starting with the pipeline
              engine and adding layers as requirements grow.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {PLATFORM_AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <Link key={area.title} href={area.href} style={{ textDecoration: "none" }}>
                  <div
                    className="nb-card"
                    style={{ padding: 32, height: "100%", cursor: "pointer" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 20,
                      }}
                    >
                      <div className="feature-icon">
                        <Icon size={20} />
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--nb-ink-dim)",
                          background: "var(--nb-surface)",
                          padding: "3px 8px",
                          border: "1px solid var(--nb-border-light)",
                          borderRadius: "var(--radius)",
                        }}
                      >
                        {area.tag}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        marginBottom: 10,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {area.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                      {area.desc}
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        marginTop: 16,
                        color: "var(--nb-violet)",
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      Explore <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CONVERSE ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
          >
            <div>
              <p className="section-label">Why Converse</p>
              <h2
                style={{ fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 20 }}
              >
                Built for production voice workloads
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                Most voice AI tools are built for prototyping. Converse is
                engineered from first principles for enterprise-scale deployments:
                global latency requirements, multi-tenant isolation, provider
                resilience, and compliance mandates.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  {
                    title: "Sub-100ms end-to-end latency",
                    desc: "Streaming-first architecture minimizes TTFB at every pipeline stage, so conversations feel instant.",
                  },
                  {
                    title: "Provider redundancy & failover",
                    desc: "Service switcher enables hot-swap of any AI provider at runtime — zero downtime, zero code change.",
                  },
                  {
                    title: "Enterprise compliance built-in",
                    desc: "SOC 2 Type II, HIPAA, and GDPR compliance are architectural properties, not add-ons.",
                  },
                  {
                    title: "Any scale, any region",
                    desc: "From 100 concurrent calls to millions — the same pipeline code handles it all.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        background: "var(--nb-violet)",
                        border: "2px solid var(--nb-border)",
                        borderRadius: "var(--radius)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Check size={11} color="#fff" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          marginBottom: 4,
                          color: "var(--nb-ink)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: "var(--nb-ink-muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                {[
                  { value: "<100ms", label: "End-to-end latency", sub: "voice pipeline" },
                  { value: "20+", label: "AI service integrations", sub: "natively supported" },
                  { value: "6+", label: "Transport types", sub: "WebRTC, WS, Phone" },
                  { value: "100+", label: "Countries supported", sub: "multi-language" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="nb-card"
                    style={{ padding: "28px 24px", background: "var(--nb-surface)" }}
                  >
                    <div
                      style={{
                        fontSize: "clamp(24px,2.5vw,36px)",
                        fontWeight: 800,
                        color: "var(--nb-violet)",
                        lineHeight: 1,
                        marginBottom: 8,
                        fontFamily: "var(--font-jetbrains, monospace)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--nb-ink)",
                        fontWeight: 700,
                        marginBottom: 3,
                      }}
                    >
                      {stat.label}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--nb-ink-dim)", fontWeight: 500 }}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPLOYMENT MODEL ── */}
      <section className="section section--invert" style={{ padding: "96px 24px" }}>
        <div className="container container--narrow">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              className="section-label"
              style={{ color: "rgba(250,248,243,0.5)", justifyContent: "center" }}
            >
              Deployment Model
            </p>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,48px)",
                color: "#FAF8F3",
                marginBottom: 20,
              }}
            >
              Deploy on your terms
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(250,248,243,0.65)",
                lineHeight: 1.75,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              Converse fits into your existing infrastructure. Bring your own AI
              providers, your own cloud, your own observability stack — or use our
              fully managed platform.
            </p>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
          >
            {[
              {
                icon: Server,
                title: "Self-Hosted",
                desc: "Deploy on any cloud or on-premise. Full control over data residency, network topology, and scaling policies.",
              },
              {
                icon: Zap,
                title: "Managed Cloud",
                desc: "Our team manages infrastructure, scaling, and reliability. Focus on building products, not operations.",
              },
              {
                icon: Network,
                title: "Hybrid",
                desc: "Keep sensitive workloads on-premise while scaling burst compute in the cloud during peak demand periods.",
              },
            ].map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.title}
                  style={{
                    padding: 32,
                    border: "2px solid rgba(255,255,255,0.12)",
                    borderRadius: "var(--radius)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#FAF8F3",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "var(--nb-violet)",
                      border: "2px solid rgba(255,255,255,0.2)",
                      borderRadius: "var(--radius)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={20} color="#fff" />
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      marginBottom: 10,
                      color: "#FAF8F3",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {opt.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "rgba(250,248,243,0.65)",
                      lineHeight: 1.7,
                    }}
                  >
                    {opt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="section section--surface" style={{ padding: "80px 24px" }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2
            style={{ fontSize: "clamp(26px,3.5vw,44px)", marginBottom: 20 }}
          >
            Ready to explore the full platform?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--nb-ink-muted)",
              marginBottom: 40,
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto 40px",
            }}
          >
            Connect with our solutions team for a tailored platform walkthrough
            and architecture review for your use case.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: 16, padding: "16px 36px" }}
            >
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link
              href="/platform/integrations"
              className="btn-secondary"
              style={{ fontSize: 16, padding: "16px 36px" }}
            >
              View Integrations
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          section > div > div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="repeat(3,1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
