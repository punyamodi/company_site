import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Activity, AlertCircle, Clock,
  ChevronRight, Check, LineChart, Eye, Zap,
} from "lucide-react";

const METRICS = [
  {
    icon: Clock,
    title: "Time-to-First-Byte (TTFB)",
    desc: "Track the time from when the user finishes speaking to when the first audio byte is delivered to the client. TTFB is the primary driver of perceived conversation latency and is measured per-turn, per-stage.",
  },
  {
    icon: Activity,
    title: "Per-Turn Processing Metrics",
    desc: "Each pipeline stage emits processing time metrics: STT transcription time, LLM token generation rate, TTS synthesis time, and transport serialization overhead. Identify bottlenecks at the stage level.",
  },
  {
    icon: LineChart,
    title: "Turn Tracking Observer",
    desc: "The TurnTrackingObserver records every user turn: start time, end time, VAD classification confidence, and transcript accuracy score. Use these to tune turn detection parameters for your user population.",
  },
  {
    icon: Zap,
    title: "User–Bot Latency Observer",
    desc: "End-to-end measurement from last user phoneme to first agent audio. Broken down into transport, STT, LLM, and TTS contributions so you can target optimizations precisely.",
  },
  {
    icon: AlertCircle,
    title: "Sentry Error Capture",
    desc: "Native Sentry integration captures pipeline errors, provider timeouts, and unexpected frame types with full context: pipeline state, active providers, conversation ID, and recent frames.",
  },
  {
    icon: Eye,
    title: "OpenTelemetry Traces",
    desc: "Every pipeline run produces an OTEL trace spanning input, each processor, and output. Traces include span attributes for frame type, provider, token count, and audio duration.",
  },
];

function DashboardSVG() {
  const bars = [45, 62, 38, 80, 55, 70, 48, 90, 62, 75, 58, 82];
  const ttfbBars = [88, 72, 94, 65, 88, 76, 92, 68, 85, 78, 90, 72];

  return (
    <svg
      width="100%"
      height="300"
      viewBox="0 0 680 300"
      fill="none"
      style={{ display: "block", maxWidth: 680 }}
    >
      <style>{`
        @keyframes barGrow {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
        @keyframes metricCount {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}</style>

      {/* Dashboard panel background */}
      <rect x="0" y="0" width="680" height="300" rx="4" fill="var(--nb-invert)" stroke="#0A0A0A" strokeWidth="2" />

      {/* Header */}
      <rect x="0" y="0" width="680" height="36" rx="4" fill="rgba(255,255,255,0.04)" />
      <text x="16" y="23" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.8)" fontFamily="inherit">
        Converse — Observability Dashboard
      </text>
      <rect x="580" y="11" width="8" height="8" rx="4" fill="#28c840" />
      <text x="594" y="21" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="inherit">LIVE</text>

      {/* Metric cards */}
      {[
        { label: "Avg TTFB", value: "87ms", sub: "↓ 12% from last week", x: 16, color: "#a78bfa" },
        { label: "STT Latency", value: "32ms", sub: "P95: 48ms", x: 176, color: "#67e8f9" },
        { label: "LLM TTFT", value: "340ms", sub: "P95: 520ms", x: 336, color: "#86efac" },
        { label: "TTS Latency", value: "65ms", sub: "streaming: 18ms", x: 496, color: "#fbbf24" },
      ].map((m, i) => (
        <g key={i} style={{ animation: `metricCount 3s ease ${i * 0.5}s infinite` }}>
          <rect x={m.x} y="46" width="148" height="58" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x={m.x + 12} y="68" fontSize="9.5" fill="rgba(255,255,255,0.5)" fontFamily="inherit">{m.label}</text>
          <text x={m.x + 12} y="86" fontSize="18" fontWeight="800" fill={m.color} fontFamily="inherit">{m.value}</text>
          <text x={m.x + 12} y="98" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="inherit">{m.sub}</text>
        </g>
      ))}

      {/* TTFB bar chart */}
      <text x="16" y="122" fontSize="9.5" fontWeight="700" fill="rgba(255,255,255,0.5)" fontFamily="inherit">TTFB per turn (ms)</text>
      {ttfbBars.map((h, i) => {
        const barH = (h / 100) * 70;
        const barX = 16 + i * 28;
        return (
          <g key={i}>
            <rect
              x={barX}
              y={200 - barH}
              width="20"
              height={barH}
              rx="2"
              fill={h > 85 ? "#a78bfa" : "#6d28d9"}
              opacity="0.8"
              style={{ animation: `barGrow 0.6s ease ${i * 0.05}s both` }}
            />
            <text
              x={barX + 10}
              y="210"
              textAnchor="middle"
              fontSize="8"
              fill="rgba(255,255,255,0.3)"
              fontFamily="inherit"
            >
              {i + 1}
            </text>
          </g>
        );
      })}
      <text x="356" y="210" fontSize="9" fill="rgba(255,255,255,0.35)" fontFamily="inherit">turn #</text>

      {/* Throughput line chart */}
      <text x="380" y="122" fontSize="9.5" fontWeight="700" fill="rgba(255,255,255,0.5)" fontFamily="inherit">Concurrent sessions</text>
      {bars.map((h, i) => {
        const lineX = 380 + i * 24;
        const lineY = 200 - (h / 100) * 70;
        const nextX = 380 + (i + 1) * 24;
        const nextY = 200 - ((bars[i + 1] ?? h) / 100) * 70;
        return i < bars.length - 1 ? (
          <line
            key={i}
            x1={lineX}
            y1={lineY}
            x2={nextX}
            y2={nextY}
            stroke="#67e8f9"
            strokeWidth="2"
          />
        ) : null;
      })}
      {bars.map((h, i) => (
        <circle key={i} cx={380 + i * 24} cy={200 - (h / 100) * 70} r="3" fill="#67e8f9" />
      ))}

      {/* X-axis */}
      <line x1="16" y1="202" x2="660" y2="202" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Footer */}
      <text x="16" y="228" fontSize="9" fill="rgba(255,255,255,0.35)" fontFamily="inherit">
        OpenTelemetry traces · Sentry error capture · Real-time metrics · 30-day retention
      </text>

      {/* Sentry indicator */}
      <rect x="580" y="238" width="84" height="44" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="622" y="256" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.5)" fontFamily="inherit">Sentry</text>
      <text x="622" y="272" textAnchor="middle" fontSize="12" fontWeight="800" fill="#86efac" fontFamily="inherit">0 errors</text>

      <rect x="460" y="238" width="108" height="44" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="514" y="256" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.5)" fontFamily="inherit">Error Rate</text>
      <text x="514" y="272" textAnchor="middle" fontSize="12" fontWeight="800" fill="#86efac" fontFamily="inherit">0.02%</text>

      <rect x="340" y="238" width="108" height="44" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="394" y="256" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.5)" fontFamily="inherit">Active Agents</text>
      <text x="394" y="272" textAnchor="middle" fontSize="12" fontWeight="800" fill="#a78bfa" fontFamily="inherit">2,847</text>
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Observability | Converse",
  description: "Monitor, debug, and optimize your Converse AI pipelines with built-in tracing, metrics, and analytics tools.",
  openGraph: {
    title: "Observability | Converse",
    description: "Monitor, debug, and optimize your Converse AI pipelines with built-in tracing, metrics, and analytics tools.",
    type: "website",
  },
};

export default function ObservabilityPage() {
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
        style={{ position: "relative", padding: "96px 24px 80px", overflow: "hidden" }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "absolute",
            top: "-5%",
            right: "-5%",
            width: 400,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container container--narrow">
          <Link
            href="/platform"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "var(--nb-ink-muted)",
              textDecoration: "none",
              marginBottom: 24,
            }}
          >
            <ChevronRight size={12} style={{ transform: "rotate(180deg)" }} /> Platform
          </Link>
          <div className="eyebrow anim-fade-up">Observability</div>
          <h1
            className="anim-fade-up delay-100"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              marginBottom: 24,
              maxWidth: 720,
            }}
          >
            Full-stack observability for{" "}
            <span style={{ color: "var(--nb-violet)" }}>every voice pipeline</span>
          </h1>
          <p
            className="anim-fade-up delay-200"
            style={{
              fontSize: "clamp(15px,1.7vw,19px)",
              color: "var(--nb-ink-muted)",
              lineHeight: 1.75,
              marginBottom: 40,
              maxWidth: 600,
            }}
          >
            Voice AI systems fail silently without proper observability. Converse
            ships with OpenTelemetry integration, Sentry error capture, and
            purpose-built voice metrics — so you know the exact latency breakdown
            for every turn, every conversation, every deployment.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-primary">
              Contact Sales <ArrowRight size={15} />
            </Link>
            <Link href="/platform" className="btn-secondary">
              View Platform <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DASHBOARD SVG ── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              Live Metrics View
            </p>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 12 }}>
              Real-time visibility into every pipeline
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--nb-ink-muted)",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Per-turn TTFB breakdowns, latency histograms, error rates, and
              session counts — all in real time, all queryable via OTEL.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <DashboardSVG />
          </div>
        </div>
      </section>

      {/* ── OPENTELEMETRY ── */}
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
              <p className="section-label">OpenTelemetry</p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", marginBottom: 20 }}>
                Industry-standard traces and metrics
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Converse emits OpenTelemetry spans for every pipeline stage.
                Traces are compatible with any OTEL-capable backend: Jaeger,
                Grafana Tempo, Datadog, Honeycomb, New Relic, or your own
                OTEL collector.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { item: "Pipeline-level parent span covering full turn duration" },
                  { item: "Child spans per processor: STT, LLM, TTS, transport" },
                  { item: "Span attributes: provider name, model, token count, audio ms" },
                  { item: "Custom span events for turn start, turn end, interruptions" },
                  { item: "OTEL metrics: TTFB histogram, error counter, session gauge" },
                  { item: "Sampling support: head-based and tail-based samplers" },
                ].map(({ item }) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Check size={13} color="var(--nb-violet)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div
                style={{
                  padding: "20px 24px",
                  background: "var(--nb-surface)",
                  border: "2px solid var(--nb-border)",
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow-brutal)",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--nb-ink-dim)", marginBottom: 12, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Compatible OTEL Backends
                </div>
                {["Grafana Tempo", "Jaeger", "Datadog APM", "Honeycomb", "New Relic", "AWS X-Ray", "Google Cloud Trace", "Azure Monitor"].map((b) => (
                  <div
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "9px 0",
                      borderBottom: "1px solid var(--nb-border-faint)",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--nb-violet)",
                      }}
                    />
                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS FEATURES ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Voice-Specific Metrics</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 540 }}>
              Metrics built for voice AI, not generic APIs
            </h2>
          </div>
          <div className="cards-3">
            {METRICS.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="nb-card" style={{ padding: 32 }}>
                  <div className="feature-icon" style={{ marginBottom: 20 }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 10, letterSpacing: "-0.03em" }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SENTRY SECTION ── */}
      <section className="section" style={{ padding: "80px 24px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <p className="section-label">Sentry Integration</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 20 }}>
                Errors captured with full pipeline context
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                The Sentry integration adds pipeline-aware context to every error
                report. Know exactly which provider timed out, which frame caused
                the error, and what state the pipeline was in when it failed.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "Pipeline ID in error context",
                  "Active providers at error time",
                  "Recent frame trace",
                  "Turn number & conversation ID",
                  "Provider response times",
                  "Breadcrumb trail",
                ].map((cap) => (
                  <span
                    key={cap}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 10px",
                      background: "var(--nb-surface)",
                      border: "1.5px solid var(--nb-border)",
                      borderRadius: "var(--radius)",
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "var(--nb-ink-muted)",
                    }}
                  >
                    <Check size={10} color="var(--nb-violet)" />
                    {cap}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {[
                  { label: "Error Detection", value: "Real-time", color: "#059669" },
                  { label: "Context Depth", value: "Full stack", color: "var(--nb-violet)" },
                  { label: "Alert Latency", value: "<5 seconds", color: "#06B6D4" },
                  { label: "Retention", value: "90 days", color: "#F97316" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="nb-card nb-card--surface"
                    style={{ padding: "22px 20px" }}
                  >
                    <div
                      style={{
                        fontSize: "clamp(18px,2vw,24px)",
                        fontWeight: 800,
                        color: stat.color,
                        marginBottom: 6,
                        fontFamily: "var(--font-jetbrains, monospace)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--nb-ink-muted)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="section section--invert" style={{ padding: "80px 24px" }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,44px)",
              color: "#FAF8F3",
              marginBottom: 20,
            }}
          >
            Ship voice AI you can actually monitor
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(250,248,243,0.65)",
              marginBottom: 40,
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto 40px",
            }}
          >
            Our platform team will walk you through the observability stack
            and help configure dashboards for your production requirements.
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
              className="btn-invert"
              style={{ fontSize: 16, padding: "16px 36px" }}
            >
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link
              href="/platform/security"
              className="btn-secondary"
              style={{
                fontSize: 16,
                padding: "16px 36px",
                background: "rgba(255,255,255,0.06)",
                color: "#FAF8F3",
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: "none",
              }}
            >
              Security Overview
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
