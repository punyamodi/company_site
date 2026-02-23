import Link from "next/link";
import {
  ArrowRight, LayoutGrid, Code2, ChevronRight,
  Check, Layers, Puzzle, Globe,
} from "lucide-react";

const STT_PROVIDERS = [
  { name: "Deepgram", note: "Streaming STT, Nova-2 model" },
  { name: "AssemblyAI", note: "Real-time transcription" },
  { name: "Azure Speech", note: "Microsoft cognitive services" },
  { name: "Google STT", note: "Google Cloud Speech-to-Text" },
  { name: "OpenAI Whisper", note: "Large-v3 via API" },
  { name: "ElevenLabs STT", note: "Scribe multilingual model" },
  { name: "Speechmatics", note: "Accuracy-first enterprise STT" },
];

const LLM_PROVIDERS = [
  { name: "OpenAI", note: "GPT-4o, o1, o3 series" },
  { name: "Anthropic", note: "Claude 3 & 3.5 series" },
  { name: "Azure OpenAI", note: "Managed GPT on Azure" },
  { name: "AWS Bedrock", note: "Multi-model managed API" },
  { name: "Google Gemini", note: "Gemini 1.5 Pro & Flash" },
  { name: "Groq", note: "Ultra-low latency inference" },
  { name: "Mistral", note: "Mistral-Large, Mixtral" },
  { name: "DeepSeek", note: "DeepSeek-V3 / R1 reasoning" },
  { name: "Cerebras", note: "Wafer-scale chip inference" },
];

const TTS_PROVIDERS = [
  { name: "ElevenLabs", note: "Ultra-realistic voice cloning" },
  { name: "Cartesia", note: "Sub-90ms streaming TTS" },
  { name: "Deepgram Aura", note: "Low-latency voice synthesis" },
  { name: "PlayHT", note: "High-fidelity voice library" },
  { name: "Fish Audio", note: "Multilingual voice synthesis" },
  { name: "LMNT", note: "Expressive voice generation" },
  { name: "Rime", note: "Enterprise voice AI platform" },
  { name: "MiniMax", note: "Chinese & multilingual TTS" },
];

const S2S_PROVIDERS = [
  { name: "OpenAI Realtime", note: "GPT-4o native audio model" },
  { name: "Gemini Multimodal Live", note: "Google live audio API" },
  { name: "AWS Nova Sonic", note: "Amazon speech-to-speech model" },
  { name: "Grok Voice Agent", note: "xAI voice-native LLM" },
];

const CLIENT_SDKS = [
  { name: "JavaScript", platform: "Web", color: "#F97316" },
  { name: "React", platform: "Web / Next.js", color: "#06B6D4" },
  { name: "React Native", platform: "iOS / Android", color: "#7C3AED" },
  { name: "Swift", platform: "iOS / macOS", color: "#059669" },
  { name: "Kotlin", platform: "Android", color: "#7C3AED" },
  { name: "C++", platform: "Native / Embedded", color: "#0A0A0A" },
];

function EcosystemRadialSVG() {
  const categories = [
    { label: "STT", count: 7, color: "#06B6D4", angle: -90 },
    { label: "LLM", count: 9, color: "#7C3AED", angle: -20 },
    { label: "TTS", count: 8, color: "#059669", angle: 50 },
    { label: "S2S", count: 4, color: "#F97316", angle: 120 },
    { label: "Transport", count: 6, color: "#06B6D4", angle: 190 },
    { label: "Telephony", count: 5, color: "#DC2626", angle: 250 },
  ];

  const cx = 300;
  const cy = 165;
  const r = 110;

  return (
    <svg
      width="100%"
      height="330"
      viewBox="0 0 600 330"
      fill="none"
      style={{ display: "block", maxWidth: 600 }}
    >
      <style>{`
        @keyframes radialPulse {
          0%, 100% { r: 52; opacity: 1; }
          50% { r: 56; opacity: 0.85; }
        }
        @keyframes orbitPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Outer orbit ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="#C8C3B5"
        strokeWidth="1.5"
        strokeDasharray="6,5"
        fill="none"
        style={{ animation: "orbitPulse 3s ease infinite" }}
      />

      {/* Inner orbit */}
      <circle
        cx={cx}
        cy={cy}
        r="65"
        stroke="rgba(124,58,237,0.15)"
        strokeWidth="1"
        fill="none"
      />

      {/* Spokes */}
      {categories.map((cat, i) => {
        const rad = (cat.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke={cat.color}
            strokeWidth="2"
            strokeDasharray="5,4"
            opacity="0.6"
          />
        );
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r="52" fill="var(--nb-violet)" stroke="#0A0A0A" strokeWidth="2" />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="inherit">
        Converse
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="inherit">
        Integration Hub
      </text>
      <text x={cx} y={cy + 22} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="inherit">
        20+ services
      </text>

      {/* Category nodes */}
      {categories.map((cat, i) => {
        const rad = (cat.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="28" fill={cat.color} stroke="#0A0A0A" strokeWidth="2" opacity="0.9" />
            <text x={x} y={y - 5} textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" fontFamily="inherit">
              {cat.label}
            </text>
            <text x={x} y={y + 8} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="inherit">
              {cat.count} providers
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function IntegrationsPage() {
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
            width: 420,
            height: 420,
            background:
              "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
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
          <div className="eyebrow anim-fade-up">AI Integrations</div>
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
            Every AI service you need,{" "}
            <span style={{ color: "var(--nb-violet)" }}>natively integrated</span>
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
            Converse ships with 20+ natively integrated AI service providers
            across STT, LLM, TTS, and speech-to-speech categories. Plug any
            combination into your pipeline — no custom adapters, no glue code.
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

      {/* ── ECOSYSTEM RADIAL SVG ── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              Integration Ecosystem
            </p>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 12 }}>
              20+ providers across 6 categories
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
              All providers connect to the same pipeline interface. Switch between
              them at runtime without modifying your application logic.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <EcosystemRadialSVG />
          </div>
        </div>
      </section>

      {/* ── PROVIDER GRIDS ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">All Providers</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 540 }}>
              The full integration catalog
            </h2>
          </div>

          {/* STT */}
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 14px",
                background: "rgba(6,182,212,0.1)",
                border: "2px solid #06B6D4",
                borderRadius: "var(--radius)",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0891B2" }}>
                Speech-to-Text (STT)
              </span>
            </div>
            <div className="cards-4">
              {STT_PROVIDERS.map((p) => (
                <div key={p.name} className="nb-card nb-card--surface" style={{ padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "var(--nb-ink-dim)" }}>{p.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* LLM */}
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 14px",
                background: "var(--nb-violet-subtle)",
                border: "2px solid var(--nb-violet)",
                borderRadius: "var(--radius)",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-violet)" }}>
                Large Language Models (LLM)
              </span>
            </div>
            <div className="cards-4">
              {LLM_PROVIDERS.map((p) => (
                <div key={p.name} className="nb-card nb-card--surface" style={{ padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "var(--nb-ink-dim)" }}>{p.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TTS */}
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 14px",
                background: "rgba(5,150,105,0.1)",
                border: "2px solid #059669",
                borderRadius: "var(--radius)",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#059669" }}>
                Text-to-Speech (TTS)
              </span>
            </div>
            <div className="cards-4">
              {TTS_PROVIDERS.map((p) => (
                <div key={p.name} className="nb-card nb-card--surface" style={{ padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "var(--nb-ink-dim)" }}>{p.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* S2S */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 14px",
                background: "rgba(249,115,22,0.1)",
                border: "2px solid #F97316",
                borderRadius: "var(--radius)",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C2410C" }}>
                Speech-to-Speech (S2S)
              </span>
            </div>
            <div className="cards-4">
              {S2S_PROVIDERS.map((p) => (
                <div key={p.name} className="nb-card nb-card--surface" style={{ padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "var(--nb-ink-dim)" }}>{p.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT SDKS ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
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
              <p className="section-label">Client SDKs</p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", marginBottom: 20 }}>
                RTVI clients for every platform
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Official RTVI-compatible client SDKs ship for web, mobile, and
                native platforms. Each SDK provides real-time audio I/O, session
                management, and event-driven APIs for building rich voice
                interfaces.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Bidirectional audio streaming over WebRTC or WebSocket",
                  "Session lifecycle management (connect, disconnect, reconnect)",
                  "Real-time event system (speech start, speech end, transcript)",
                  "Type-safe message protocol with full TypeScript support",
                  "Adaptive audio quality based on network conditions",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Check size={13} color="var(--nb-violet)" style={{ marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{item}</span>
                  </div>
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
                {CLIENT_SDKS.map((sdk) => (
                  <div
                    key={sdk.name}
                    className="nb-card"
                    style={{ padding: "20px 22px" }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: sdk.color,
                        marginBottom: 12,
                      }}
                    />
                    <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>
                      {sdk.name}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--nb-ink-dim)", fontWeight: 600 }}>
                      {sdk.platform}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK INTEGRATIONS ── */}
      <section className="section" style={{ padding: "80px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="section-label">Framework Integrations</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", maxWidth: 540, marginBottom: 16 }}>
              Works with your AI framework of choice
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 560, lineHeight: 1.75 }}>
              Converse pipelines integrate with leading AI orchestration frameworks,
              enabling complex agentic workflows alongside real-time voice.
            </p>
          </div>
          <div className="cards-3">
            {[
              {
                icon: Layers,
                name: "LangChain",
                desc: "Use LangChain chains, agents, and tool-calling within a Converse pipeline. Bring your existing LangChain logic into real-time voice workflows.",
                tag: "Orchestration",
              },
              {
                icon: Puzzle,
                name: "Strands Agents",
                desc: "AWS Strands agents integration for enterprise multi-agent orchestration. Connect Strands agent workflows to voice interfaces via Converse.",
                tag: "Multi-Agent",
              },
              {
                icon: Globe,
                name: "MCP Protocol",
                desc: "Model Context Protocol (MCP) tool integration allows agents to call external tools and APIs mid-conversation with full context preservation.",
                tag: "Tool Use",
              },
              {
                icon: Code2,
                name: "mem0 Memory",
                desc: "Persistent memory layer for voice agents. Agents remember user preferences, past conversations, and context across sessions — powered by mem0.",
                tag: "Memory",
              },
            ].map((fw) => {
              const Icon = fw.icon;
              return (
                <div key={fw.name} className="nb-card" style={{ padding: 32 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <div className="feature-icon">
                      <Icon size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--nb-violet)",
                        background: "var(--nb-violet-subtle)",
                        padding: "2px 8px",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      {fw.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 10 }}>{fw.name}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{fw.desc}</p>
                </div>
              );
            })}
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
            Connect the AI services your product needs
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
            Our integrations team will help you select the optimal provider
            combination for your latency, quality, and cost requirements.
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
              href="/platform"
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
              Back to Platform
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
