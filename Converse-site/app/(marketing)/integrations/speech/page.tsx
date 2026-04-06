import type { Metadata } from "next";
import Link from "next/link";
import { Mic, Volume2, Zap, ArrowRight, CheckCircle, RefreshCw, ChevronRight } from "lucide-react";

const STT_PROVIDERS = [
  { name: "Deepgram", latency: "~80ms", models: "Nova-3, Nova-2", streaming: true, languages: "30+", notes: "Recommended for production" },
  { name: "AssemblyAI", latency: "~120ms", models: "Nano, Best", streaming: true, languages: "20+", notes: "Strong accuracy on noisy audio" },
  { name: "Azure Speech", latency: "~100ms", models: "Custom, Standard", streaming: true, languages: "100+", notes: "Enterprise compliance" },
  { name: "Google Speech", latency: "~110ms", models: "Latest Long", streaming: true, languages: "125+", notes: "Broad language support" },
  { name: "OpenAI Whisper", latency: "~200ms", models: "Whisper-1", streaming: false, languages: "57", notes: "Transcription-only" },
  { name: "Speechmatics", latency: "~95ms", models: "Enhanced", streaming: true, languages: "50+", notes: "Accented speech strength" },
  { name: "Gladia", latency: "~90ms", models: "Whisper-large", streaming: true, languages: "40+", notes: "Code-switching support" },
  { name: "Groq Whisper", latency: "~50ms", models: "Distil-v3", streaming: false, languages: "57", notes: "Fastest batch transcription" },
  { name: "Soniox", latency: "~85ms", models: "Default", streaming: true, languages: "15+", notes: "Financial terminology" },
  { name: "Sarvam", latency: "~100ms", models: "Saarika", streaming: true, languages: "11 (Indic)", notes: "South Asian languages" },
  { name: "NVIDIA Riva", latency: "~70ms", models: "Citrinet", streaming: true, languages: "10+", notes: "On-premise GPU deployment" },
  { name: "ElevenLabs STT", latency: "~90ms", models: "Scribe v1", streaming: true, languages: "30+", notes: "New in 2025" },
];

const TTS_PROVIDERS = [
  { name: "ElevenLabs", latency: "~90ms", voices: "1000+", streaming: true, notes: "Ultra-realistic, industry-leading voice cloning" },
  { name: "Cartesia", latency: "~65ms", voices: "50+", streaming: true, notes: "Lowest latency TTS in production" },
  { name: "Deepgram Aura", latency: "~80ms", voices: "10+", streaming: true, notes: "Integrated STT+TTS workflow" },
  { name: "PlayHT", latency: "~120ms", voices: "900+", streaming: true, notes: "Voice cloning and fine-tuning" },
  { name: "Fish Audio", latency: "~100ms", voices: "50+", streaming: true, notes: "Open-weight, self-hostable" },
  { name: "LMNT", latency: "~85ms", voices: "30+", streaming: true, notes: "Low-latency conversational TTS" },
  { name: "Rime", latency: "~95ms", voices: "20+", streaming: true, notes: "American English specialist" },
  { name: "Azure TTS", latency: "~110ms", voices: "400+", streaming: true, notes: "Enterprise SLA, 140+ languages" },
  { name: "Google TTS", latency: "~120ms", voices: "380+", streaming: true, notes: "WaveNet and Studio voices" },
  { name: "Kokoro", latency: "~75ms", voices: "15+", streaming: true, notes: "Lightweight local inference" },
  { name: "MiniMax", latency: "~95ms", voices: "50+", streaming: true, notes: "Chinese and multilingual" },
  { name: "Neuphonic", latency: "~80ms", voices: "20+", streaming: true, notes: "European language coverage" },
];

const S2S_PROVIDERS = [
  {
    name: "OpenAI Realtime",
    type: "S2S",
    description: "GPT-4o native audio model. Direct speech-to-speech with built-in turn detection and interruption handling.",
    latency: "~200ms round-trip",
    badge: "#7C3AED",
  },
  {
    name: "Gemini Multimodal Live",
    type: "S2S",
    description: "Google's multimodal live API. Audio + vision input, low-latency streaming audio output.",
    latency: "~250ms round-trip",
    badge: "#2563EB",
  },
  {
    name: "AWS Nova Sonic",
    type: "S2S",
    description: "Amazon Bedrock speech model. Enterprise-grade, VPC-compatible, low latency inference.",
    latency: "~220ms round-trip",
    badge: "#D97706",
  },
  {
    name: "Grok Voice Agent",
    type: "S2S",
    description: "xAI Grok native voice mode. Direct audio pipeline with Grok's reasoning capabilities.",
    latency: "~230ms round-trip",
    badge: "#059669",
  },
];

export const metadata: Metadata = {
  title: "Speech Integrations | Converse",
  description: "Connect Converse with top STT and TTS providers for low-latency, high-quality voice AI experiences.",
  openGraph: {
    title: "Speech Integrations | Converse",
    description: "Connect Converse with top STT and TTS providers for low-latency, high-quality voice AI experiences.",
    type: "website",
  },
};

export default function SpeechIntegrationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Link href="/integrations" style={{ color: "var(--nb-violet)", fontWeight: 700, fontSize: "0.9rem" }}>Integrations</Link>
              <ChevronRight size={14} />
              <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Speech</span>
            </div>
            <span className="eyebrow">Speech Integrations</span>
            <h1
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}
            >
              Every speech provider.{" "}
              <span style={{ color: "var(--nb-violet)" }}>One unified interface.</span>
            </h1>
            <p style={{ fontSize: "1.15rem", marginTop: "1.5rem", maxWidth: "620px", lineHeight: 1.7, opacity: 0.8 }}>
              12 STT providers, 13 TTS engines, and 4 speech-to-speech models. Configure your acoustic
              stack in one place and swap providers without changing a single line of application code.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: "0.4rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STT Section */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div className="feature-icon">
              <Mic size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900 }}>Speech-to-Text (STT)</h2>
              <p style={{ opacity: 0.65, marginTop: "0.25rem" }}>12 providers — real-time streaming and batch transcription</p>
            </div>
          </div>
          <div style={{ overflowX: "auto", border: "2px solid #000" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", minWidth: "700px" }}>
              <thead>
                <tr style={{ background: "#111", color: "#fff" }}>
                  {["Provider", "Latency (P50)", "Models", "Streaming", "Languages", "Notes"].map((h) => (
                    <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STT_PROVIDERS.map((p, i) => (
                  <tr key={p.name} style={{ borderBottom: "1.5px solid #000", background: i % 2 === 0 ? "#fff" : "#FAFAF8" }}>
                    <td style={{ padding: "0.7rem 1rem", fontWeight: 700 }}>{p.name}</td>
                    <td style={{ padding: "0.7rem 1rem", fontFamily: "monospace", color: "var(--nb-violet)", fontWeight: 700 }}>{p.latency}</td>
                    <td style={{ padding: "0.7rem 1rem", fontSize: "0.85rem", opacity: 0.75 }}>{p.models}</td>
                    <td style={{ padding: "0.7rem 1rem" }}>
                      {p.streaming ? (
                        <span style={{ background: "#DCFCE7", border: "1.5px solid #000", padding: "0.15rem 0.5rem", fontSize: "0.75rem", fontWeight: 700 }}>✓ Live</span>
                      ) : (
                        <span style={{ background: "#FEF3C7", border: "1.5px solid #000", padding: "0.15rem 0.5rem", fontSize: "0.75rem", fontWeight: 700 }}>Batch</span>
                      )}
                    </td>
                    <td style={{ padding: "0.7rem 1rem", fontSize: "0.85rem" }}>{p.languages}</td>
                    <td style={{ padding: "0.7rem 1rem", fontSize: "0.82rem", opacity: 0.7 }}>{p.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TTS Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div className="feature-icon" style={{ background: "#059669" }}>
              <Volume2 size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900 }}>Text-to-Speech (TTS)</h2>
              <p style={{ opacity: 0.65, marginTop: "0.25rem" }}>13 engines — streaming synthesis with sub-100ms first-byte latency</p>
            </div>
          </div>
          <div className="cards-3" style={{ gap: "1rem" }}>
            {TTS_PROVIDERS.map((p) => (
              <div key={p.name} className="nb-card" style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1rem" }}>{p.name}</h3>
                  {p.streaming && (
                    <span style={{ background: "#DCFCE7", border: "1.5px solid #000", padding: "0.1rem 0.45rem", fontSize: "0.7rem", fontWeight: 700, flexShrink: 0 }}>Stream</span>
                  )}
                </div>
                <div style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "var(--nb-violet)", fontWeight: 700, marginBottom: "0.4rem" }}>{p.latency}</div>
                <div style={{ fontSize: "0.82rem", opacity: 0.6, marginBottom: "0.4rem" }}>{p.voices} voices</div>
                <p style={{ fontSize: "0.85rem", opacity: 0.75, lineHeight: 1.55 }}>{p.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S2S Section */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <span className="section-label">Speech-to-Speech</span>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem" }}>Native audio models (S2S)</h2>
            <p style={{ marginTop: "0.5rem", opacity: 0.7, maxWidth: "560px" }}>
              Bypass the STT→LLM→TTS chain entirely. These models accept raw audio input and emit audio output,
              enabling ultra-low-latency conversational experiences.
            </p>
          </div>
          <div className="cards-2" style={{ gap: "1.25rem" }}>
            {S2S_PROVIDERS.map((p) => (
              <div key={p.name} className="nb-card">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>{p.name}</h3>
                  <span style={{ background: p.badge, color: "#fff", border: "1.5px solid #000", padding: "0.15rem 0.5rem", fontSize: "0.7rem", fontWeight: 700 }}>
                    {p.type}
                  </span>
                </div>
                <p style={{ opacity: 0.75, lineHeight: 1.65, fontSize: "0.95rem", marginBottom: "0.75rem" }}>{p.description}</p>
                <div style={{ fontFamily: "monospace", fontSize: "0.85rem", color: p.badge, fontWeight: 700 }}>{p.latency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Swap Providers */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Provider Swapping</span>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem", lineHeight: 1.2 }}>
                Change your STT or TTS in one line
              </h2>
              <p style={{ marginTop: "1rem", lineHeight: 1.7, opacity: 0.75 }}>
                Every speech provider is configured through a single constructor call. Your pipeline frame
                graph never changes. Move from Deepgram to Azure Speech, or from ElevenLabs to Cartesia,
                with a configuration change — not a refactor.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginTop: "1.5rem" }}>
                {[
                  "All providers emit the same event types",
                  "Identical buffer and chunk semantics",
                  "Unified VAD and silence detection hooks",
                  "Provider-specific options via kwargs passthrough",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <CheckCircle size={17} color="var(--nb-violet)" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.95rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="code-block" style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>
              <div style={{ color: "#94A3B8", marginBottom: "0.5rem" }}># Switch STT from Deepgram → Azure</div>
              <div>
                <span style={{ color: "#F472B6" }}>from</span>
                <span style={{ color: "#E2E8F0" }}> converse.stt </span>
                <span style={{ color: "#F472B6" }}>import</span>
                <span style={{ color: "#86EFAC" }}> AzureSTTService</span>
              </div>
              <div style={{ marginTop: "0.75rem" }}>
                <span style={{ color: "#E2E8F0" }}>stt </span>
                <span style={{ color: "#F472B6" }}>=</span>
                <span style={{ color: "#86EFAC" }}> AzureSTTService</span>
                <span style={{ color: "#E2E8F0" }}>(</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>api_key</span>
                <span style={{ color: "#E2E8F0" }}>=os.getenv(</span>
                <span style={{ color: "#FDE68A" }}>"AZURE_KEY"</span>
                <span style={{ color: "#E2E8F0" }}>),</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>region</span>
                <span style={{ color: "#E2E8F0" }}>=</span>
                <span style={{ color: "#FDE68A" }}>"eastus"</span>
                <span style={{ color: "#E2E8F0" }}>,</span>
              </div>
              <div>
                <span style={{ color: "#E2E8F0" }}>)</span>
              </div>
              <div style={{ marginTop: "0.75rem", color: "#94A3B8" }}># TTS: ElevenLabs → Cartesia (lower latency)</div>
              <div>
                <span style={{ color: "#F472B6" }}>from</span>
                <span style={{ color: "#E2E8F0" }}> converse.tts </span>
                <span style={{ color: "#F472B6" }}>import</span>
                <span style={{ color: "#86EFAC" }}> CartesiaTTSService</span>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <span style={{ color: "#E2E8F0" }}>tts </span>
                <span style={{ color: "#F472B6" }}>=</span>
                <span style={{ color: "#86EFAC" }}> CartesiaTTSService</span>
                <span style={{ color: "#E2E8F0" }}>(</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>api_key</span>
                <span style={{ color: "#E2E8F0" }}>=os.getenv(</span>
                <span style={{ color: "#FDE68A" }}>"CARTESIA_KEY"</span>
                <span style={{ color: "#E2E8F0" }}>),</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>voice_id</span>
                <span style={{ color: "#E2E8F0" }}>=</span>
                <span style={{ color: "#FDE68A" }}>"your-voice-id"</span>
              </div>
              <div><span style={{ color: "#E2E8F0" }}>)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <RefreshCw size={40} color="var(--nb-violet)" />
          </div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff" }}>
            Not sure which speech provider fits your use case?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.05rem", maxWidth: "540px", margin: "1rem auto 0" }}>
            Our team can run a benchmark across providers using your audio data to find the optimal
            accuracy/latency tradeoff for your application.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
