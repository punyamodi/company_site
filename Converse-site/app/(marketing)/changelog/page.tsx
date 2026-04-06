import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mic, Brain, Wifi, BarChart3, Package, Zap, Shield, Layers } from "lucide-react";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; icon: React.ElementType }> = {
  "New Provider": { bg: "#7C3AED", text: "#fff", icon: Mic },
  "Performance": { bg: "#059669", text: "#fff", icon: Zap },
  "Transport": { bg: "#2563EB", text: "#fff", icon: Wifi },
  "Observability": { bg: "#D97706", text: "#fff", icon: BarChart3 },
  "SDK": { bg: "#374151", text: "#fff", icon: Package },
  "Security": { bg: "#DC2626", text: "#fff", icon: Shield },
  "Core": { bg: "#0891B2", text: "#fff", icon: Layers },
  "LLM": { bg: "#6D28D9", text: "#fff", icon: Brain },
};

const CHANGELOG_ENTRIES = [
  {
    version: "v0.0.58",
    date: "December 2024",
    category: "New Provider",
    title: "AWS Nova Sonic S2S + Grok Voice Agent",
    description:
      "Added support for AWS Nova Sonic (Bedrock speech-to-speech) and Grok Voice Agent (xAI). Both providers integrate into the existing S2S pipeline frame, requiring no changes to downstream pipeline stages. Nova Sonic supports VPC-native inference for enterprise deployments with strict data egress requirements.",
    highlights: [
      "AWS Nova Sonic: sub-250ms TTFA, Bedrock VPC support",
      "Grok Voice Agent: xAI native audio model with Grok-3 reasoning",
      "Unified turn-detection interface for both providers",
    ],
  },
  {
    version: "v0.0.55",
    date: "November 2024",
    category: "Performance",
    title: "Sub-80ms TTFA with Cartesia streaming optimization",
    description:
      "Re-architected the TTS streaming path to begin piping audio to the transport layer as soon as the first sentence boundary is detected by the LLM, rather than waiting for the full sentence to be generated. Combined with Cartesia's low-latency synthesis, time-to-first-audio drops to under 80ms in production benchmarks.",
    highlights: [
      "First-audio latency: 250ms → 80ms (P50 on GPT-4o + Cartesia)",
      "Sentence boundary detection improved for 12 languages",
      "Backpressure-aware audio buffer prevents stuttering under load",
    ],
  },
  {
    version: "v0.0.52",
    date: "October 2024",
    category: "Transport",
    title: "SmallWebRTC transport + WhatsApp Business integration",
    description:
      "SmallWebRTC enables direct peer-to-peer voice sessions without any external transport infrastructure. Ideal for development, edge deployments, and scenarios where operational overhead of Daily or LiveKit is undesirable. WhatsApp Business integration enables async voice note transcription and response pipelines.",
    highlights: [
      "SmallWebRTC: zero infrastructure dependency, P2P sessions",
      "WhatsApp Business: voice note → STT → LLM → text reply pipeline",
      "Both adapters share the standard transport frame interface",
    ],
  },
  {
    version: "v0.0.50",
    date: "September 2024",
    category: "Observability",
    title: "Native OpenTelemetry tracing across all pipeline stages",
    description:
      "Converse now emits full distributed traces covering STT processing time, LLM TTFT (time-to-first-token), TTS synthesis latency, and transport round-trip time. Traces are emitted via standard OTLP and are compatible with Datadog, Grafana Tempo, Honeycomb, and Jaeger.",
    highlights: [
      "Per-stage span attribution: STT, VAD, LLM, TTS, transport",
      "Custom attributes: provider name, model, frame size, session ID",
      "P99 latency dashboards available for Grafana (dashboard JSON included)",
      "Automatic error tagging on provider timeouts and retries",
    ],
  },
  {
    version: "v0.0.47",
    date: "August 2024",
    category: "SDK",
    title: "Python SDK 0.0.47 — MCP tools + memory module",
    description:
      "Major SDK release adding Model Context Protocol (MCP) tool support and a pluggable memory module. MCP allows voice agents to invoke enterprise systems (CRMs, databases, calendars) using a standardized protocol without custom glue code. The memory module supports in-session context and durable cross-session storage backends.",
    highlights: [
      "MCP tool calling: invoke any MCP-compatible server from a voice pipeline",
      "Memory: in-session (default), Redis, and vector store backends",
      "Conversation history injection with configurable window size",
      "Tool result streaming: TTS begins before tool call completes",
    ],
  },
  {
    version: "v0.0.43",
    date: "June 2024",
    category: "New Provider",
    title: "Gemini Multimodal Live + 5 new STT providers",
    description:
      "Google Gemini Multimodal Live added as a speech-to-speech provider. Also added Gladia, Groq Whisper, Soniox, Sarvam, and NVIDIA Riva as STT providers. Sarvam expands coverage to 11 Indian languages. NVIDIA Riva supports on-premise GPU inference for air-gapped deployments.",
    highlights: [
      "Gemini Multimodal Live: audio + vision input, low-latency audio output",
      "Sarvam: Assamese, Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu",
      "NVIDIA Riva: on-premise, GPU-accelerated, sub-70ms latency",
    ],
  },
  {
    version: "v0.0.38",
    date: "April 2024",
    category: "Security",
    title: "Enterprise security suite: SSO, RBAC, audit logging",
    description:
      "Enterprise security controls shipped: SAML 2.0 SSO integration, role-based access control with custom role definitions, and immutable audit logging for all pipeline invocations and administrative actions. Vault-based secret management support added for HashiCorp Vault, AWS Secrets Manager, and Azure Key Vault.",
    highlights: [
      "SAML 2.0: Okta, Azure AD, Ping Identity, OneLogin tested and documented",
      "RBAC: project, pipeline, API key, and billing permission scopes",
      "Audit logs: CEF, JSON, and Parquet export formats",
      "SOC 2 Type II audit initiated",
    ],
  },
  {
    version: "v0.0.30",
    date: "January 2024",
    category: "Core",
    title: "Smart turn detection v2 + VAD improvements",
    description:
      "Second-generation turn detection model reduces false-positive interruptions by 78% compared to energy-based VAD. New model uses acoustic features plus semantic context from the LLM partial output to decide whether a speaker pause indicates end-of-turn or mid-sentence hesitation. Works across all STT providers.",
    highlights: [
      "False-positive interruption rate: -78% vs v1",
      "Hesitation/disfluency handling: 'um', 'uh', filler words no longer trigger EoT",
      "Configurable confidence threshold for sensitivity tuning",
      "Language-specific models for English, Spanish, French, German, Portuguese",
    ],
  },
];

export const metadata: Metadata = {
  title: "Changelog | Converse",
  description: "Track the latest updates, new features, and improvements shipped to the Converse platform.",
  openGraph: {
    title: "Changelog | Converse",
    description: "Track the latest updates, new features, and improvements shipped to the Converse platform.",
    type: "website",
  },
};

export default function ChangelogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative", maxWidth: "680px" }}>
            <span className="eyebrow anim-fade-up">Changelog</span>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}
            >
              What's new in{" "}
              <span style={{ color: "var(--nb-violet)" }}>Converse</span>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.1rem", marginTop: "1.5rem", lineHeight: 1.7, opacity: 0.8 }}
            >
              New providers, performance improvements, transport updates, observability features,
              and SDK releases. All in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Changelog entries */}
      <section className="section section--surface" style={{ paddingTop: "0" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                bottom: "0",
                width: "2px",
                background: "#000",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {CHANGELOG_ENTRIES.map((entry, i) => {
                const categoryMeta = CATEGORY_COLORS[entry.category] || CATEGORY_COLORS["Core"];
                const CategoryIcon = categoryMeta.icon;
                return (
                  <div
                    key={entry.version}
                    className="anim-fade-up"
                    style={{ animationDelay: `${i * 80}ms`, paddingLeft: "2.5rem", paddingBottom: "3rem", position: "relative" }}
                  >
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-7px",
                        top: "6px",
                        width: "16px",
                        height: "16px",
                        background: categoryMeta.bg,
                        border: "3px solid #000",
                        borderRadius: "50%",
                        zIndex: 1,
                      }}
                    />
                    {/* Date + version badge */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          background: "#111",
                          color: "#fff",
                          border: "1.5px solid #000",
                          padding: "0.2rem 0.65rem",
                        }}
                      >
                        {entry.version}
                      </span>
                      <span style={{ fontSize: "0.85rem", opacity: 0.5, fontWeight: 600 }}>{entry.date}</span>
                      <span
                        style={{
                          background: categoryMeta.bg,
                          color: categoryMeta.text,
                          border: "1.5px solid #000",
                          padding: "0.15rem 0.6rem",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <CategoryIcon size={11} />
                        {entry.category}
                      </span>
                    </div>
                    {/* Content card */}
                    <div className="nb-card" style={{ padding: "1.75rem" }}>
                      <h3 style={{ fontWeight: 900, fontSize: "1.15rem", marginBottom: "0.75rem" }}>
                        {entry.title}
                      </h3>
                      <p style={{ opacity: 0.75, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: "1.25rem" }}>
                        {entry.description}
                      </p>
                      <div
                        style={{
                          background: "#FAFAF8",
                          border: "1.5px solid #000",
                          padding: "1rem 1.25rem",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            opacity: 0.5,
                            marginBottom: "0.6rem",
                          }}
                        >
                          Highlights
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                          {entry.highlights.map((h) => (
                            <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                              <span style={{ color: categoryMeta.bg, fontWeight: 900, fontSize: "0.9rem", flexShrink: 0, marginTop: "0px" }}>→</span>
                              <span style={{ fontSize: "0.88rem", lineHeight: 1.55 }}>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff" }}>
            Want early access to upcoming enterprise features?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.05rem", maxWidth: "540px", margin: "1rem auto 0" }}>
            Enterprise customers on dedicated plans receive early access to new integrations, performance
            improvements, and compliance features before general availability.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
