import Link from "next/link";
import {
  Mic,
  Brain,
  Wifi,
  Phone,
  BarChart3,
  Puzzle,
  ArrowRight,
  Zap,
  RefreshCw,
  Layers,
  CheckCircle,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: Mic,
    title: "Speech",
    slug: "speech",
    description:
      "12 STT providers, 13 TTS engines, and 4 speech-to-speech models. Swap acoustic backends without touching application logic.",
    count: "29 providers",
    color: "#7C3AED",
  },
  {
    icon: Brain,
    title: "LLM",
    slug: "llm",
    description:
      "17 language model providers from OpenAI to local Ollama instances. Unified tool-calling interface across all backends.",
    count: "17 providers",
    color: "#2563EB",
  },
  {
    icon: Wifi,
    title: "Transport",
    slug: "transport",
    description:
      "WebRTC, WebSocket, and messaging transports. Pick the protocol that matches your latency budget and infrastructure.",
    count: "6 transports",
    color: "#059669",
  },
  {
    icon: Phone,
    title: "Telephony",
    slug: "telephony",
    description:
      "PSTN-grade voice via Twilio, Telnyx, Vonage, Plivo, and Exotel. DTMF handling, voicemail detection, and IVR automation built in.",
    count: "5 carriers",
    color: "#D97706",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    slug: "transport",
    description:
      "OpenTelemetry-native observability. Emit traces, metrics, and logs to Grafana, Datadog, Honeycomb, or any OTLP endpoint.",
    count: "OpenTelemetry",
    color: "#DC2626",
  },
];

const ALL_PROVIDERS = [
  "Deepgram", "AssemblyAI", "Azure Speech", "Google Speech", "OpenAI Whisper",
  "ElevenLabs", "Speechmatics", "Gladia", "Groq Whisper", "Soniox", "Sarvam",
  "NVIDIA Riva", "Cartesia", "PlayHT", "Fish Audio", "LMNT", "Rime", "Kokoro",
  "MiniMax", "Neuphonic", "OpenAI Realtime", "Gemini Live", "AWS Nova Sonic",
  "Grok Voice", "OpenAI GPT-4o", "Anthropic Claude", "Azure OpenAI",
  "AWS Bedrock", "Google Gemini", "Groq", "Mistral", "DeepSeek", "Cerebras",
  "Fireworks AI", "Together AI", "SambaNova", "NVIDIA NIM", "Ollama",
  "OpenRouter", "Daily WebRTC", "LiveKit", "SmallWebRTC", "FastAPI WS",
  "WhatsApp Business", "Twilio", "Telnyx", "Vonage", "Plivo", "Exotel",
];

const PLUGIN_FEATURES = [
  {
    icon: Puzzle,
    title: "Unified Interface",
    description:
      "Every provider implements the same abstract base class. Your pipeline code never changes when you swap backends.",
  },
  {
    icon: RefreshCw,
    title: "Hot-Swap at Runtime",
    description:
      "Switch providers mid-session or between deployments with a single configuration change. No code changes required.",
  },
  {
    icon: Layers,
    title: "Composable Stages",
    description:
      "Mix providers across pipeline stages. Use Deepgram for STT, Claude for reasoning, and Cartesia for synthesis independently.",
  },
  {
    icon: Zap,
    title: "Zero Overhead Abstraction",
    description:
      "Adapter layer adds sub-millisecond overhead. Raw provider performance is preserved end-to-end.",
  },
];

export default function IntegrationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative", maxWidth: "780px" }}>
            <span className="eyebrow anim-fade-up">Integrations</span>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}
            >
              Every provider you need.{" "}
              <span style={{ color: "var(--nb-violet)" }}>One pipeline framework.</span>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.2rem", marginTop: "1.5rem", maxWidth: "600px", lineHeight: 1.7 }}
            >
              Converse ships with 20+ production-ready integrations across speech, language, transport,
              telephony, and observability. Drop in, swap out, compose freely.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Talk to Sales <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Marquee */}
      <section
        style={{
          background: "#111",
          padding: "1rem 0",
          overflow: "hidden",
          borderTop: "2px solid #000",
          borderBottom: "2px solid #000",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            whiteSpace: "nowrap",
            animation: "marquee 35s linear infinite",
          }}
        >
          {[...ALL_PROVIDERS, ...ALL_PROVIDERS].map((p, i) => (
            <span
              key={i}
              style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase", opacity: 0.8 }}
            >
              {p}
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* Category Cards */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Categories</span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 900, marginTop: "0.5rem" }}>Five integration categories</h2>
            <p style={{ marginTop: "0.75rem", opacity: 0.7, maxWidth: "520px", margin: "0.75rem auto 0" }}>
              Each category is a distinct plugin family with a shared interface, tested for production reliability.
            </p>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={`/integrations/${cat.slug}`}
                  className="nb-card"
                  style={{ display: "block", textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div
                      className="feature-icon"
                      style={{ background: cat.color, color: "#fff", flexShrink: 0 }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                        <h3 style={{ fontWeight: 800, fontSize: "1.2rem" }}>{cat.title}</h3>
                        <span
                          style={{
                            background: cat.color,
                            color: "#fff",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            padding: "0.2rem 0.6rem",
                            border: "1.5px solid #000",
                          }}
                        >
                          {cat.count}
                        </span>
                      </div>
                      <p style={{ opacity: 0.75, lineHeight: 1.65, fontSize: "0.95rem" }}>{cat.description}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "1rem", color: cat.color, fontWeight: 700, fontSize: "0.9rem" }}>
                        Explore <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plugin Architecture */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Architecture</span>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, marginTop: "0.5rem", lineHeight: 1.2 }}>
                A plugin architecture built for production
              </h2>
              <p style={{ marginTop: "1rem", lineHeight: 1.7, opacity: 0.75 }}>
                Every integration in Converse implements a strict abstract interface. This means your
                application code is completely decoupled from vendor specifics. Swap providers in
                configuration, not code.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.5rem" }}>
                {["Vendor lock-in eliminated", "Config-driven provider selection", "Unified error handling across all providers", "Automatic retry and fallback logic"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <CheckCircle size={18} color="var(--nb-violet)" />
                    <span style={{ fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/contact" className="btn-primary">Request Architecture Review</Link>
              </div>
            </div>
            {/* Ecosystem SVG */}
            <div className="nb-card" style={{ padding: "2rem" }}>
              <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Center node */}
                <rect x="155" y="135" width="110" height="50" rx="0" fill="#7C3AED" stroke="#000" strokeWidth="2.5" />
                <text x="210" y="155" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">CONVERSE</text>
                <text x="210" y="170" textAnchor="middle" fill="#fff" fontSize="9">CORE</text>
                {/* Speech */}
                <rect x="20" y="20" width="90" height="36" fill="#F5F0FF" stroke="#000" strokeWidth="2" />
                <text x="65" y="40" textAnchor="middle" fontSize="9" fontWeight="bold">STT / TTS</text>
                <text x="65" y="51" textAnchor="middle" fontSize="8" fill="#7C3AED">12 + 13 providers</text>
                <line x1="110" y1="38" x2="155" y2="148" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3" />
                {/* LLM */}
                <rect x="310" y="20" width="90" height="36" fill="#EFF6FF" stroke="#000" strokeWidth="2" />
                <text x="355" y="40" textAnchor="middle" fontSize="9" fontWeight="bold">LLM</text>
                <text x="355" y="51" textAnchor="middle" fontSize="8" fill="#2563EB">17 providers</text>
                <line x1="310" y1="38" x2="265" y2="148" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 3" />
                {/* Transport */}
                <rect x="20" y="280" width="90" height="36" fill="#ECFDF5" stroke="#000" strokeWidth="2" />
                <text x="65" y="300" textAnchor="middle" fontSize="9" fontWeight="bold">Transport</text>
                <text x="65" y="311" textAnchor="middle" fontSize="8" fill="#059669">6 adapters</text>
                <line x1="110" y1="298" x2="155" y2="175" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 3" />
                {/* Telephony */}
                <rect x="310" y="280" width="90" height="36" fill="#FFFBEB" stroke="#000" strokeWidth="2" />
                <text x="355" y="300" textAnchor="middle" fontSize="9" fontWeight="bold">Telephony</text>
                <text x="355" y="311" textAnchor="middle" fontSize="8" fill="#D97706">5 carriers</text>
                <line x1="310" y1="298" x2="265" y2="175" stroke="#D97706" strokeWidth="1.5" strokeDasharray="4 3" />
                {/* Observability */}
                <rect x="165" y="285" width="90" height="36" fill="#FEF2F2" stroke="#000" strokeWidth="2" />
                <text x="210" y="305" textAnchor="middle" fontSize="9" fontWeight="bold">Observability</text>
                <text x="210" y="316" textAnchor="middle" fontSize="8" fill="#DC2626">OpenTelemetry</text>
                <line x1="210" y1="285" x2="210" y2="185" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 3" />
                {/* Memory */}
                <rect x="165" y="10" width="90" height="36" fill="#F5F0FF" stroke="#000" strokeWidth="2" />
                <text x="210" y="30" textAnchor="middle" fontSize="9" fontWeight="bold">Memory</text>
                <text x="210" y="41" textAnchor="middle" fontSize="8" fill="#7C3AED">MCP + Storage</text>
                <line x1="210" y1="46" x2="210" y2="135" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Plugin Feature Grid */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>How the plugin system works</h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {PLUGIN_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card">
                  <div className="feature-icon" style={{ marginBottom: "1rem" }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p style={{ opacity: 0.75, lineHeight: 1.65 }}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff" }}>
            Ready to integrate with your existing stack?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.1rem" }}>
            Our solutions team maps your current vendors to the right Converse integration set.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
