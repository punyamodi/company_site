import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Mic, Camera, Monitor, Layers, ChevronRight,
  Check, Video, Eye, MessageSquare,
} from "lucide-react";

const S2S_MODELS = [
  {
    name: "OpenAI Realtime",
    desc: "GPT-4o native speech-to-speech model. Understands tone, emotion, and speaking style. No separate STT/TTS stages — one model handles the full audio pipeline.",
    tag: "Speech-to-Speech",
  },
  {
    name: "Gemini Multimodal Live",
    desc: "Google's multimodal live API processes audio, video, and text simultaneously. Enables video-grounded conversations where the agent can see what the user is showing.",
    tag: "Multimodal Live",
  },
  {
    name: "AWS Nova Sonic",
    desc: "Amazon's speech-to-speech model optimized for low-latency enterprise deployments on AWS infrastructure. Tight integration with AWS Bedrock and Connect.",
    tag: "Enterprise",
  },
  {
    name: "Grok Voice Agent",
    desc: "xAI's voice-native model for natural, unconstrained conversations. Particularly strong on technical and coding-adjacent enterprise support workflows.",
    tag: "Voice-Native",
  },
];

const VIDEO_AVATARS = [
  {
    name: "HeyGen",
    desc: "Real-time streaming avatar with photorealistic lip sync and expressive facial animations. Supports custom avatars trained on client-provided video.",
  },
  {
    name: "Tavus",
    desc: "Personalized video avatar platform. Clone any person's voice and likeness for branded AI representative experiences at enterprise scale.",
  },
  {
    name: "Simli",
    desc: "Low-latency streaming avatar optimized for interactive voice applications. Sub-200ms visual response latency synchronized with Converse audio output.",
  },
];

const VISION_SERVICES = [
  { name: "Moondream", desc: "Lightweight on-device vision model for real-time image description and VQA." },
  { name: "Google Imagen", desc: "High-fidelity image analysis and generation within multimodal pipelines." },
  { name: "fal.ai", desc: "Fast inference platform for vision models including SDXL, Flux, and custom fine-tunes." },
];

function MultimodalSVG() {
  return (
    <svg
      width="100%"
      height="260"
      viewBox="0 0 680 260"
      fill="none"
      style={{ display: "block", maxWidth: 680 }}
    >
      <style>{`
        @keyframes inputPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.96); }
        }
        @keyframes arrowFlow {
          0% { stroke-dashoffset: 40; opacity: 0.4; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes outputGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(124,58,237,0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(124,58,237,0.7)); }
        }
      `}</style>

      {/* Input nodes */}
      {/* Mic */}
      <rect x="20" y="30" width="110" height="50" rx="4" fill="rgba(6,182,212,0.12)" stroke="#06B6D4" strokeWidth="2"
        style={{ animation: "inputPulse 2s ease 0s infinite" }} />
      <text x="75" y="52" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0A4A54" fontFamily="inherit">🎤 Voice Input</text>
      <text x="75" y="67" textAnchor="middle" fontSize="9.5" fill="#0A4A54" fontFamily="inherit">WebRTC / Phone</text>

      {/* Camera */}
      <rect x="20" y="105" width="110" height="50" rx="4" fill="rgba(249,115,22,0.12)" stroke="#F97316" strokeWidth="2"
        style={{ animation: "inputPulse 2s ease 0.4s infinite" }} />
      <text x="75" y="127" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7C2D12" fontFamily="inherit">📷 Video Input</text>
      <text x="75" y="142" textAnchor="middle" fontSize="9.5" fill="#7C2D12" fontFamily="inherit">Camera / Screen</text>

      {/* Text */}
      <rect x="20" y="180" width="110" height="50" rx="4" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="2"
        style={{ animation: "inputPulse 2s ease 0.8s infinite" }} />
      <text x="75" y="202" textAnchor="middle" fontSize="11" fontWeight="800" fill="#065F46" fontFamily="inherit">💬 Text Input</text>
      <text x="75" y="217" textAnchor="middle" fontSize="9.5" fill="#065F46" fontFamily="inherit">Chat / API</text>

      {/* Arrows in */}
      {[55, 130, 205].map((y, i) => (
        <g key={i}>
          <line x1="130" y1={y} x2="220" y2="130" stroke="#C8C3B5" strokeWidth="2"
            strokeDasharray="6,4" style={{ animation: `arrowFlow 1.5s ease ${i * 0.3}s infinite` }} />
          <polygon
            points={`220,130 212,126 212,134`}
            fill="#C8C3B5"
          />
        </g>
      ))}

      {/* Central pipeline */}
      <rect x="220" y="95" width="160" height="70" rx="6"
        fill="var(--nb-violet)" stroke="#0A0A0A" strokeWidth="2"
        style={{ animation: "outputGlow 2.5s ease 0s infinite" }}
      />
      <text x="300" y="124" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="inherit">Converse</text>
      <text x="300" y="140" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="inherit">Multimodal Pipeline</text>
      <text x="300" y="155" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="inherit">STT · LLM · TTS · Vision</text>

      {/* Arrows out */}
      {[75, 130, 185].map((y, i) => (
        <g key={i}>
          <line x1="380" y1="130" x2="460" y2={y} stroke="#C8C3B5" strokeWidth="2"
            strokeDasharray="6,4" style={{ animation: `arrowFlow 1.5s ease ${i * 0.25}s infinite` }} />
          <polygon
            points={`460,${y} 452,${y - 4} 452,${y + 4}`}
            fill="#C8C3B5"
          />
        </g>
      ))}

      {/* Output nodes */}
      <rect x="460" y="50" width="120" height="50" rx="4" fill="rgba(124,58,237,0.12)" stroke="#7C3AED" strokeWidth="2" />
      <text x="520" y="72" textAnchor="middle" fontSize="11" fontWeight="800" fill="#4C1D95" fontFamily="inherit">🔊 Voice Output</text>
      <text x="520" y="87" textAnchor="middle" fontSize="9.5" fill="#4C1D95" fontFamily="inherit">TTS streaming</text>

      <rect x="460" y="105" width="120" height="50" rx="4" fill="rgba(249,115,22,0.12)" stroke="#F97316" strokeWidth="2" />
      <text x="520" y="127" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7C2D12" fontFamily="inherit">🎭 Video Avatar</text>
      <text x="520" y="142" textAnchor="middle" fontSize="9.5" fill="#7C2D12" fontFamily="inherit">HeyGen / Tavus</text>

      <rect x="460" y="160" width="120" height="50" rx="4" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="2" />
      <text x="520" y="182" textAnchor="middle" fontSize="11" fontWeight="800" fill="#065F46" fontFamily="inherit">💬 Text Output</text>
      <text x="520" y="197" textAnchor="middle" fontSize="9.5" fill="#065F46" fontFamily="inherit">LLM response</text>
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Multimodal AI | Converse",
  description: "Build multimodal AI experiences with Converse — combining voice, vision, and text in unified real-time pipelines.",
  openGraph: {
    title: "Multimodal AI | Converse",
    description: "Build multimodal AI experiences with Converse — combining voice, vision, and text in unified real-time pipelines.",
    type: "website",
  },
};

export default function MultimodalPage() {
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
              "radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)",
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
          <div className="eyebrow anim-fade-up">Multimodal Processing</div>
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
            Voice, video, and vision —{" "}
            <span style={{ color: "var(--nb-violet)" }}>one pipeline</span>
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
            Converse goes beyond voice-only pipelines. Process audio, video frames,
            and images in a single coherent pipeline. Integrate video avatars for
            visual presence, speech-to-speech models for native audio intelligence,
            and vision services for image-grounded conversations.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-primary">
              Contact Sales <ArrowRight size={15} />
            </Link>
            <Link href="/platform/integrations" className="btn-secondary">
              View Integrations <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MULTIMODAL DIAGRAM ── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              Multimodal Data Flow
            </p>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 12 }}>
              Any input modality, any output format
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
              Voice, video, and text inputs all converge into a unified Converse
              pipeline. The pipeline routes each modality to the right service and
              produces synchronized outputs.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <MultimodalSVG />
          </div>
        </div>
      </section>

      {/* ── SPEECH-TO-SPEECH MODELS ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Speech-to-Speech</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 560, marginBottom: 16 }}>
              Native audio models — no STT/TTS pipeline required
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--nb-ink-muted)",
                maxWidth: 560,
                lineHeight: 1.75,
              }}
            >
              Speech-to-speech models process audio end-to-end without converting
              to text first. They understand prosody, emotion, and speaking style —
              producing responses that match the human caller&apos;s energy.
            </p>
          </div>
          <div className="cards-2">
            {S2S_MODELS.map((model) => (
              <div key={model.name} className="nb-card" style={{ padding: 32 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em" }}>
                    {model.name}
                  </h3>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--nb-violet)",
                      background: "var(--nb-violet-subtle)",
                      padding: "3px 10px",
                      border: "1px solid rgba(124,58,237,0.2)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    {model.tag}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO AVATARS ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Video Avatars</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 540, marginBottom: 16 }}>
              Give your AI agent a face
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--nb-ink-muted)",
                maxWidth: 540,
                lineHeight: 1.75,
              }}
            >
              Video avatar integrations connect Converse&apos;s audio output directly
              to photorealistic or custom avatars. The result: a visually present AI
              agent that speaks, reacts, and represents your brand.
            </p>
          </div>
          <div className="cards-3">
            {VIDEO_AVATARS.map((avatar) => (
              <div key={avatar.name} className="nb-card" style={{ padding: 32 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "var(--nb-violet-subtle)",
                    border: "2px solid var(--nb-border)",
                    borderRadius: "var(--radius)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Video size={20} color="var(--nb-violet)" />
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    marginBottom: 10,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {avatar.name}
                </h3>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                  {avatar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION SERVICES ── */}
      <section className="section" style={{ padding: "80px 24px" }}>
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
              <p className="section-label">Vision Services</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,40px)", marginBottom: 20 }}>
                Agents that see, not just hear
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Integrate vision models into any Converse pipeline. Agents can
                analyze screen shares, interpret documents held up to a camera,
                or process images sent via chat — all within the same real-time
                conversation flow.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Image captioning and description",
                  "Visual question answering (VQA)",
                  "Document and chart understanding",
                  "Real-time screen share analysis",
                ].map((cap) => (
                  <div key={cap} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Eye size={14} color="var(--nb-violet)" />
                    <span style={{ fontSize: 14, color: "var(--nb-ink-muted)" }}>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {VISION_SERVICES.map((vs) => (
                <div
                  key={vs.name}
                  className="nb-card nb-card--surface"
                  style={{ padding: "20px 24px" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <Eye size={16} color="var(--nb-violet)" />
                    <span style={{ fontSize: 15, fontWeight: 800 }}>{vs.name}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>
                    {vs.desc}
                  </p>
                </div>
              ))}
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
            Build agents that see, hear, and speak
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
            Connect with our team to architect a multimodal AI agent solution
            that meets your enterprise requirements.
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
              href="/platform/integrations"
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
        }
      `}</style>
    </div>
  );
}
