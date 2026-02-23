import Link from "next/link";
import {
  ArrowRight, Mic, ChevronRight, Check, Activity,
  Volume2, Radio, Headphones, Zap, Shield,
} from "lucide-react";

const VAD_FEATURES = [
  {
    icon: Activity,
    title: "ML-Powered VAD",
    desc: "Silero VAD and ai-coustics noise suppression run at the edge of the audio pipeline, classifying speech vs. silence with millisecond precision. No heuristic thresholds — a neural model trained on billions of audio samples.",
  },
  {
    icon: Mic,
    title: "Smart Turn Detection",
    desc: "End-of-utterance detection combines VAD signals with semantic cues. The MinWords strategy prevents premature turn changes by requiring a minimum token count before treating a pause as a completed turn.",
  },
  {
    icon: Zap,
    title: "Interruption Handling",
    desc: "When a user speaks while the agent is responding, Converse detects the interruption mid-stream and immediately cancels the current TTS output. The LLM context is updated to reflect the truncated response.",
  },
  {
    icon: Volume2,
    title: "Streaming Audio Output",
    desc: "TTS output is streamed as incremental audio chunks the moment tokens arrive from the LLM. Users hear the start of the response in under 100ms — critical for conversational naturalness at enterprise scale.",
  },
  {
    icon: Radio,
    title: "Noise Cancellation",
    desc: "Krisp and Koala noise cancellation processors sit between transport input and the STT service, stripping background noise, echo, and room reverb before transcription — improving accuracy in real-world call center environments.",
  },
  {
    icon: Headphones,
    title: "DTMF Keypad Support",
    desc: "Handle IVR-style DTMF input alongside voice. Callers can press keypad digits to navigate menus, confirm actions, or provide numeric input — all within the same Converse pipeline without a separate telephony stack.",
  },
];

function ConversationTimelineSVG() {
  return (
    <svg
      width="100%"
      height="220"
      viewBox="0 0 720 220"
      fill="none"
      style={{ display: "block", maxWidth: 720 }}
    >
      <style>{`
        @keyframes slideInR {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes blinkVAD {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      {/* Timeline axis */}
      <line x1="40" y1="110" x2="690" y2="110" stroke="#C8C3B5" strokeWidth="2" />
      <text x="40" y="130" fontSize="10" fill="#7A746A" fontFamily="inherit">0ms</text>
      <text x="330" y="130" fontSize="10" fill="#7A746A" fontFamily="inherit">1,200ms</text>
      <text x="620" y="130" fontSize="10" fill="#7A746A" fontFamily="inherit">2,400ms</text>

      {/* USER turn 1 */}
      <rect
        x="60" y="72" width="200" height="36" rx="4"
        fill="rgba(6,182,212,0.15)" stroke="#06B6D4" strokeWidth="2"
        style={{ animation: "slideInR 0.4s ease 0.1s both" }}
      />
      <text x="70" y="92" fontSize="11" fontWeight="700" fill="#0A4A54" fontFamily="inherit"
        style={{ animation: "slideInR 0.4s ease 0.1s both" }}>
        👤 User speaking
      </text>
      <text x="70" y="104" fontSize="9" fill="#0A4A54" fontFamily="inherit"
        style={{ animation: "slideInR 0.4s ease 0.1s both" }}>
        VAD: active
      </text>

      {/* VAD end marker */}
      <line x1="260" y1="55" x2="260" y2="125" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4,3" />
      <text x="253" y="50" fontSize="9" fontWeight="800" fill="#7C3AED" fontFamily="inherit">
        Turn end
      </text>
      <text x="253" y="42" fontSize="9" fill="#7C3AED" fontFamily="inherit">
        detected
      </text>

      {/* STT / LLM processing gap */}
      <rect
        x="260" y="82" width="60" height="16" rx="2"
        fill="rgba(249,115,22,0.15)" stroke="#F97316" strokeWidth="1.5"
        style={{ animation: "slideInR 0.4s ease 0.3s both" }}
      />
      <text x="264" y="93" fontSize="8.5" fill="#7C2D12" fontFamily="inherit"
        style={{ animation: "slideInR 0.4s ease 0.3s both" }}>
        STT + LLM
      </text>

      {/* AGENT turn */}
      <rect
        x="320" y="72" width="240" height="36" rx="4"
        fill="rgba(124,58,237,0.12)" stroke="#7C3AED" strokeWidth="2"
        style={{ animation: "slideInR 0.4s ease 0.5s both" }}
      />
      <text x="330" y="92" fontSize="11" fontWeight="700" fill="#4C1D95" fontFamily="inherit"
        style={{ animation: "slideInR 0.4s ease 0.5s both" }}>
        🤖 Agent responding (TTS streaming)
      </text>
      <text x="330" y="104" fontSize="9" fill="#4C1D95" fontFamily="inherit"
        style={{ animation: "slideInR 0.4s ease 0.5s both" }}>
        Incremental audio chunks · TTFB &lt;100ms
      </text>

      {/* Interruption marker */}
      <line x1="490" y1="55" x2="490" y2="125" stroke="#DC2626" strokeWidth="2" strokeDasharray="4,3" />
      <text x="483" y="50" fontSize="9" fontWeight="800" fill="#DC2626" fontFamily="inherit">
        Interrupted
      </text>
      <text x="483" y="42" fontSize="9" fill="#DC2626" fontFamily="inherit">
        by user
      </text>

      {/* USER interruption */}
      <rect
        x="490" y="72" width="170" height="36" rx="4"
        fill="rgba(6,182,212,0.15)" stroke="#06B6D4" strokeWidth="2"
        style={{ animation: "slideInR 0.4s ease 0.7s both" }}
      />
      <text x="500" y="92" fontSize="11" fontWeight="700" fill="#0A4A54" fontFamily="inherit"
        style={{ animation: "slideInR 0.4s ease 0.7s both" }}>
        👤 User interrupts
      </text>
      <text x="500" y="104" fontSize="9" fill="#0A4A54" fontFamily="inherit"
        style={{ animation: "slideInR 0.4s ease 0.7s both" }}>
        Agent TTS cancelled instantly
      </text>

      {/* Legend */}
      <rect x="40" y="155" width="12" height="12" rx="2" fill="rgba(6,182,212,0.4)" stroke="#06B6D4" strokeWidth="1.5" />
      <text x="58" y="165" fontSize="10" fill="#7A746A" fontFamily="inherit">User speaking</text>
      <rect x="140" y="155" width="12" height="12" rx="2" fill="rgba(124,58,237,0.3)" stroke="#7C3AED" strokeWidth="1.5" />
      <text x="158" y="165" fontSize="10" fill="#7A746A" fontFamily="inherit">Agent responding</text>
      <line x1="265" y1="155" x2="277" y2="155" stroke="#7C3AED" strokeWidth="2" strokeDasharray="3,2" />
      <text x="283" y="165" fontSize="10" fill="#7A746A" fontFamily="inherit">Turn boundary</text>
      <line x1="385" y1="155" x2="397" y2="155" stroke="#DC2626" strokeWidth="2" strokeDasharray="3,2" />
      <text x="403" y="165" fontSize="10" fill="#7A746A" fontFamily="inherit">Interruption</text>
    </svg>
  );
}

export default function VoiceAIPage() {
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
            top: "-10%",
            right: "-5%",
            width: 400,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Animated waveform decoration */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: "8%",
            display: "flex",
            alignItems: "center",
            gap: 3,
            opacity: 0.25,
            pointerEvents: "none",
          }}
        >
          {[4, 8, 14, 20, 14, 8, 4, 7, 13, 18, 13, 7, 4, 10, 16, 20, 16, 10, 4].map((h, i) => (
            <div
              key={i}
              className="wave-bar"
              style={{
                height: h * 3,
                animationDelay: `${i * 0.06}s`,
                animationDuration: `${0.7 + (i % 5) * 0.15}s`,
              }}
            />
          ))}
        </div>

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
          <div className="eyebrow anim-fade-up">Voice AI Core</div>
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
            Turn detection that makes AI feel{" "}
            <span style={{ color: "var(--nb-violet)" }}>genuinely natural</span>
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
            The voice AI layer handles the hardest part of real-time conversation:
            knowing exactly when someone is done speaking. ML-powered VAD,
            semantic turn detection, and interruption handling work together to
            deliver conversations that feel human.
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

      {/* ── CONVERSATION TIMELINE ── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              Turn Detection Visualization
            </p>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 12 }}>
              A conversation as Converse sees it
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
              VAD detects speech boundaries, turn detection infers completion, and
              interruption handling fires instantly — all within the same
              sub-100ms pipeline.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <ConversationTimelineSVG />
          </div>
        </div>
      </section>

      {/* ── WHY TURN DETECTION MATTERS ── */}
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
              <p className="section-label">Enterprise Impact</p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", marginBottom: 20 }}>
                Why turn detection is a business-critical capability
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Premature or delayed turn detection breaks conversational flow.
                Premature: the agent cuts off the customer mid-sentence. Delayed:
                awkward silences that increase handle time and reduce CSAT.
                Converse&apos;s ML-based approach adapts to each speaker.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { metric: "Reduced Average Handle Time", desc: "Fewer misdetected turns mean fewer \"sorry, could you repeat that?\" exchanges." },
                  { metric: "Higher CSAT Scores", desc: "Conversations that feel natural drive measurably better customer satisfaction ratings." },
                  { metric: "Better Interruption Recovery", desc: "When customers interrupt, context is preserved and the agent responds coherently." },
                  { metric: "Noise-Resilient in Real Environments", desc: "Krisp and Koala noise cancellation maintains accuracy in call centers and open offices." },
                ].map((item) => (
                  <div key={item.metric} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
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
                      <Check size={10} color="#fff" />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3, color: "var(--nb-ink)" }}>
                        {item.metric}
                      </div>
                      <div style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  label: "Turn Detection Latency",
                  value: "<50ms",
                  sub: "from last phoneme to pipeline trigger",
                  color: "var(--nb-violet)",
                },
                {
                  label: "VAD Accuracy",
                  value: "99.1%",
                  sub: "speech/silence classification on Silero benchmark",
                  color: "#059669",
                },
                {
                  label: "Interruption Response",
                  value: "<20ms",
                  sub: "from detection to TTS cancellation",
                  color: "#06B6D4",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="nb-card nb-card--surface"
                  style={{ padding: "24px 28px" }}
                >
                  <div
                    style={{
                      fontSize: "clamp(28px,3vw,40px)",
                      fontWeight: 800,
                      color: stat.color,
                      lineHeight: 1,
                      marginBottom: 8,
                      fontFamily: "var(--font-jetbrains, monospace)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--nb-ink-dim)" }}>{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Voice AI Capabilities</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 540 }}>
              Every voice interaction layer, production-ready
            </h2>
          </div>
          <div className="cards-3">
            {VAD_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ padding: 32 }}>
                  <div className="feature-icon" style={{ marginBottom: 20 }}>
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      marginBottom: 10,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXTENSIONS ── */}
      <section className="section" style={{ padding: "80px 24px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <p className="section-label">IVR & Telephony Extensions</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 20 }}>
                Voice AI for enterprise telephony
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                Converse ships with extensions for enterprise telephony use cases:
                IVR flows, voicemail detection, and DTMF handling — all integrated
                into the same pipeline architecture as voice conversations.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "IVR menu flows",
                  "Voicemail detection",
                  "DTMF keypad input",
                  "Call transfer logic",
                  "Hold music injection",
                  "Call recording hooks",
                ].map((ext) => (
                  <span
                    key={ext}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      background: "var(--nb-surface)",
                      border: "1.5px solid var(--nb-border)",
                      borderRadius: "var(--radius)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--nb-ink-muted)",
                    }}
                  >
                    <Check size={11} color="var(--nb-violet)" />
                    {ext}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div
                className="nb-card nb-card--surface"
                style={{ padding: 32 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                    paddingBottom: 20,
                    borderBottom: "1px solid var(--nb-border-light)",
                  }}
                >
                  <Shield size={20} color="var(--nb-violet)" />
                  <span style={{ fontSize: 15, fontWeight: 800 }}>
                    Noise Cancellation Providers
                  </span>
                </div>
                {[
                  { name: "Krisp", desc: "Background noise & echo suppression via on-device ML", badge: "Cloud" },
                  { name: "Koala", desc: "High-fidelity voice enhancement and noise removal", badge: "On-device" },
                ].map((nc) => (
                  <div
                    key={nc.name}
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid var(--nb-border-light)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <span style={{ fontSize: 14, fontWeight: 800 }}>{nc.name}</span>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--nb-violet)",
                          background: "var(--nb-violet-subtle)",
                          padding: "2px 8px",
                          borderRadius: "var(--radius)",
                        }}
                      >
                        {nc.badge}
                      </span>
                    </div>
                    <p style={{ fontSize: 12.5, color: "var(--nb-ink-muted)" }}>{nc.desc}</p>
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
            Build voice AI that listens like a person
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
            Connect with our team to understand how Converse&apos;s turn detection
            and voice AI capabilities fit your enterprise deployment requirements.
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
              href="/platform/pipeline-engine"
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
              Pipeline Engine
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
