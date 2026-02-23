import Link from "next/link";
import {
  Mic,
  Wifi,
  Repeat,
  Zap,
  Accessibility,
  Monitor,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Radio,
  BrainCircuit,
} from "lucide-react";

export const metadata = {
  title: "Voice Assistants | Converse – Hands-Free AI for Every Platform",
  description:
    "Build production-ready voice assistants with Converse: wake-word detection, continuous listening, multi-turn context, WebRTC browser integration, and mobile SDK support.",
};

const businessValues = [
  { icon: Accessibility, title: "Universal Accessibility", description: "Give every user a hands-free interface — essential for users with mobility challenges, eyes-busy tasks, and voice-first environments." },
  { icon: Zap, title: "Instant Productivity", description: "Voice is 3× faster than typing. Reduce friction for power users with always-on assistant invocation." },
  { icon: Repeat, title: "Continuous Context", description: "Multi-turn conversation memory means users never have to repeat themselves across a session." },
  { icon: Wifi, title: "Anywhere Deployment", description: "Run on browsers via WebRTC, iOS and Android via our mobile SDKs, or embedded hardware via WebSocket transport." },
];

const technicalCapabilities = [
  "Wake-word detection with configurable phrases",
  "Continuous listening mode with VAD (Voice Activity Detection)",
  "Multi-turn context window with session memory",
  "Streaming LLM responses for sub-100ms first-token latency",
  "WebRTC browser integration (no plugins required)",
  "React Native, iOS (Swift), and Android (Kotlin) SDKs",
  "Smart turn detection and interruption handling",
  "OpenTelemetry traces for every utterance and response",
];

const useCases = [
  { icon: Monitor, title: "Workplace Assistants", description: "Hands-free control of enterprise software, meeting management, and workflow automation — triggered by voice." },
  { icon: Radio, title: "Device & IoT Control", description: "Embed a natural language interface into any device: kiosks, smart displays, industrial control panels, and home automation." },
  { icon: Accessibility, title: "Accessibility Tools", description: "Power assistive technologies with real-time voice AI — form filling, navigation assistance, and screen reader augmentation." },
  { icon: BrainCircuit, title: "Knowledge Assistants", description: "Connect voice to your knowledge base via MCP tools for instant, spoken answers to enterprise queries." },
];

export default function VoiceAssistantsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Solutions › Voice Assistants</span>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
                Always-on voice AI
                <br />
                <span style={{ color: "#A78BFA" }}>for every platform</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Converse gives you the building blocks for production-grade voice assistants — wake-word detection, streaming responses, and continuous context — deployable on web, mobile, or embedded hardware in days.
              </p>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* Platform badges */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", width: "100%", maxWidth: 320 }}>
                {[
                  { icon: Monitor, label: "Browser (WebRTC)", sub: "Chrome · Firefox · Safari · Edge" },
                  { icon: Smartphone, label: "Mobile SDK", sub: "React Native · iOS · Android" },
                  { icon: Radio, label: "Embedded / IoT", sub: "WebSocket · Custom hardware" },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.label} style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                      <Icon size={22} color="#A78BFA" style={{ flexShrink: 0 }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.label}</div>
                        <div style={{ fontSize: "0.8rem", opacity: 0.65 }}>{p.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waveform SVG ── */}
      <section className="section section--surface" style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Assistant interaction</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Streaming voice with context-aware responses
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 780 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 780, height: "auto" }}
              aria-label="Waveform showing user speech input and assistant response bubbles"
            >
              {/* Waveform bars (user speech) */}
              <text x="60" y="30" fill="#555" fontSize="11" fontFamily="var(--font-bricolage)">User speaking…</text>
              {[20, 32, 48, 60, 52, 36, 44, 56, 40, 28, 50, 62, 46, 34, 54, 42, 30, 52, 44, 38].map((h, i) => (
                <rect key={i} x={40 + i * 14} y={80 - h / 2} width="8" height={h} rx="4" fill="#7C3AED" opacity={0.7 + (i % 3) * 0.1} />
              ))}

              {/* Wake-word badge */}
              <rect x="40" y="95" width="100" height="22" rx="11" fill="#0A0A0A" />
              <text x="90" y="110" textAnchor="middle" fill="#A78BFA" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="700">Wake word detected</text>

              {/* Response bubble 1 */}
              <rect x="320" y="18" width="200" height="52" rx="10" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
              <polygon points="320,44 302,44 316,52" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
              <text x="420" y="42" textAnchor="middle" fill="#4C1D95" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="600">Streaming first token</text>
              <text x="420" y="58" textAnchor="middle" fill="#666" fontSize="10" fontFamily="var(--font-bricolage)">&lt;80ms to first byte</text>

              {/* Response bubble 2 */}
              <rect x="380" y="88" width="240" height="52" rx="10" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <polygon points="380,114 362,114 376,122" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="500" y="110" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="600">"Sure, here's your schedule for today…"</text>
              <text x="500" y="128" textAnchor="middle" fill="#C4B5FD" fontSize="10" fontFamily="var(--font-bricolage)">Multi-turn context maintained</text>

              {/* Follow-up bubble */}
              <rect x="320" y="158" width="260" height="44" rx="10" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="450" y="178" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="600">Turn 3 — context still active</text>
              <text x="450" y="194" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">VAD detects speech end, responds instantly</text>

              {/* Timeline arrow */}
              <line x1="40" y1="200" x2="680" y2="200" stroke="#ccc" strokeWidth="1.5" />
              <polygon points="676,196 684,200 676,204" fill="#ccc" />
              <text x="680" y="216" textAnchor="end" fill="#999" fontSize="10" fontFamily="var(--font-bricolage)">time →</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Business Value ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Why voice</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Business value of hands-free AI
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {businessValues.map((bv) => {
              const Icon = bv.icon;
              return (
                <article key={bv.title} className="nb-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ background: "#2563EB", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", flexShrink: 0 }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.4rem" }}>{bv.title}</h3>
                    <p style={{ color: "#444", lineHeight: 1.65, fontSize: "0.95rem" }}>{bv.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technical Depth ── */}
      <section className="section section--surface" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Technical capabilities</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1.5rem" }}>
                Production-grade from day one
              </h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {technicalCapabilities.map((cap) => (
                  <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle size={16} color="#2563EB" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.5 }}>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="code-block" style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>
                <pre style={{ margin: 0, overflowX: "auto" }}>{`from converse import Pipeline
from converse.transport import WebRTCTransport
from converse.processors import (
    SileroVAD,
    PicovoiceWakeWord,
    DeepgramSTT,
    OpenAILLM,
    CartesiaTTS,
)

pipeline = Pipeline(
    transport=WebRTCTransport(),
    vad=SileroVAD(threshold=0.5),
    wake_word=PicovoiceWakeWord(
        keyword="hey converse"
    ),
    stt=DeepgramSTT(
        model="nova-3",
        language="en-US",
    ),
    llm=OpenAILLM(
        model="gpt-4o",
        context_window=20,        # turns
    ),
    tts=CartesiaTTS(voice="sonic"),
    turn_detection="smart",
)

await pipeline.run()`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Use cases</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Where voice assistants deliver most
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <article key={uc.title} className="nb-card">
                  <div style={{ background: "#0A0A0A", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", display: "inline-flex", marginBottom: "1rem" }}>
                    <Icon size={20} color="#A78BFA" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.5rem" }}>{uc.title}</h3>
                  <p style={{ color: "#444", lineHeight: 1.65, fontSize: "0.95rem" }}>{uc.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--invert" style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="container container--narrow">
          <Mic size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Ship your voice assistant in weeks, not months
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our team will help you select the right STT/LLM/TTS stack, tune wake-word detection, and validate latency benchmarks for your target platforms.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
