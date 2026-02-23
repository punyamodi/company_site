"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Mic, Layers, GitBranch, Shield, BarChart3, Zap, Radio, Brain,
  ArrowRight, Check, Phone, Headphones, MessageSquare,
  ChevronRight, Play,
} from "lucide-react";

/* ── Animated waveform SVG ── */
function WaveformHero() {
  const bars = [3, 6, 10, 14, 10, 6, 3, 5, 9, 13, 9, 5, 3, 7, 11, 14, 11, 7, 3];
  return (
    <svg width="320" height="80" viewBox="0 0 320 80" fill="none" style={{ display: "block" }}>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 17 + 1}
          y={(80 - h * 5) / 2}
          width="13"
          height={h * 5}
          rx="3"
          fill="var(--nb-violet)"
          opacity={0.15 + (h / 14) * 0.85}
          style={{ transformOrigin: "center", animation: `waveBar ${0.6 + (i % 4) * 0.15}s ease-in-out ${i * 0.05}s infinite alternate` }}
        />
      ))}
    </svg>
  );
}

/* ── Pipeline flow diagram ── */
function PipelineDiagram() {
  const steps = [
    { label: "Voice Input", sublabel: "WebRTC / Phone", color: "#7C3AED", icon: "🎤" },
    { label: "STT Engine", sublabel: "Deepgram / Azure", color: "#06B6D4", icon: "📝" },
    { label: "LLM Core", sublabel: "GPT / Claude / Gemini", color: "#7C3AED", icon: "🧠" },
    { label: "TTS Engine", sublabel: "ElevenLabs / Cartesia", color: "#06B6D4", icon: "🔊" },
    { label: "Voice Output", sublabel: "WebRTC / Phone", color: "#7C3AED", icon: "📡" },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % steps.length), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 0, overflowX: "auto", padding: "8px 0" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            padding: "14px 18px",
            background: active === i ? s.color : "var(--nb-bg)",
            border: "2px solid var(--nb-border)",
            boxShadow: active === i ? `4px 4px 0px ${s.color === "#7C3AED" ? "#4C1D95" : "#0E7490"}` : "var(--shadow-brutal-sm)",
            borderRadius: "var(--radius)",
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            transform: active === i ? "translate(-2px,-2px) scale(1.04)" : "none",
            minWidth: 110, textAlign: "center",
          }}>
            <span style={{ fontSize: 22 }}>{s.icon}</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: active === i ? "#fff" : "var(--nb-ink)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{s.label}</span>
            <span style={{ fontSize: 10, color: active === i ? "rgba(255,255,255,0.7)" : "var(--nb-ink-dim)", fontWeight: 500 }}>{s.sublabel}</span>
          </div>
          {i < steps.length - 1 && (
            <div style={{ display: "flex", alignItems: "center", gap: 2, padding: "0 4px" }}>
              <div style={{ width: 24, height: 2, background: active >= i ? "var(--nb-violet)" : "var(--nb-border-light)", transition: "background 0.3s" }} />
              <div style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: `6px solid ${active >= i ? "var(--nb-violet)" : "var(--nb-border-light)"}`, transition: "border-color 0.3s" }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Counter ticker ── */
function Counter({ target, prefix = "", suffix = "", decimals = 0 }: { target: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - start) / 1800, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(target * ease);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const STATS = [
  { prefix: "<", value: 100, suffix: "ms", label: "End-to-End Latency", sub: "voice pipeline" },
  { value: 20, suffix: "+",  label: "AI Service Providers", sub: "natively integrated" },
  { value: 6,  suffix: "+",  label: "Transport Types", sub: "WebRTC, WS, Phone" },
  { value: 100, suffix: "+", label: "Countries Supported", sub: "multi-language STT/TTS" },
];

const FEATURES = [
  {
    icon: GitBranch,
    title: "Composable Pipeline Engine",
    desc: "Assemble voice agents from modular processors. Swap any STT, LLM, or TTS without changing surrounding logic. Add parallel branches, conditional routing, and real-time transformations.",
    accent: "var(--nb-violet)",
    wide: true,
    href: "/platform/pipeline-engine",
  },
  {
    icon: Mic,
    title: "Smart Turn Detection",
    desc: "ML-powered voice activity detection knows exactly when a user finishes speaking — enabling fluid, interruption-aware conversations.",
    accent: "var(--nb-surface)",
    wide: false,
    href: "/platform/voice-ai",
  },
  {
    icon: Zap,
    title: "Sub-100ms Latency",
    desc: "Streaming-first architecture delivers incremental audio chunks the moment tokens are generated. Users hear the response as it's built.",
    accent: "var(--nb-surface)",
    wide: false,
    href: "/platform/voice-ai",
  },
  {
    icon: Radio,
    title: "Production WebRTC",
    desc: "Enterprise-grade audio transport with noise cancellation, automatic gain, and adaptive bitrate. Deploy globally with one-command scaling.",
    accent: "var(--nb-surface)",
    wide: false,
    href: "/platform/transports",
  },
  {
    icon: Brain,
    title: "Any LLM, Any Moment",
    desc: "Switch between OpenAI, Anthropic, Gemini, and 15+ other providers at runtime. A/B test models without redeploying agents.",
    accent: "var(--nb-cyan)",
    wide: false,
    href: "/integrations/llm",
  },
];

const USE_CASES = [
  { icon: Headphones, title: "Customer Service AI", desc: "Deploy AI agents that handle inbound calls, resolve issues, and escalate seamlessly — 24/7 without wait times.", href: "/solutions/customer-service" },
  { icon: MessageSquare, title: "AI Companions", desc: "Build persistent, personalized voice companions with memory, emotional awareness, and natural multi-turn dialogue.", href: "/solutions/ai-companions" },
  { icon: Phone, title: "Telephony Automation", desc: "Connect to Twilio, Plivo, and Vonage to automate IVR flows, voicemail screening, and intelligent call routing.", href: "/integrations/telephony" },
  { icon: Layers, title: "Multimodal Agents", desc: "Combine voice, video, image understanding, and text in a single coherent pipeline. Build agents that see and speak.", href: "/platform/multimodal" },
  { icon: Shield, title: "Enterprise Deployments", desc: "Private cloud, on-premise, and air-gapped deployments with SSO, audit logs, and enterprise SLAs.", href: "/enterprise" },
  { icon: BarChart3, title: "Real-Time Observability", desc: "Full OpenTelemetry integration with per-turn metrics, TTFB tracking, latency breakdowns, and Sentry error capture.", href: "/platform/observability" },
];

const PROVIDERS = [
  "OpenAI", "Anthropic", "Google Gemini", "AWS Bedrock", "Azure AI",
  "Deepgram", "ElevenLabs", "Cartesia", "Daily WebRTC", "LiveKit",
  "Groq", "Mistral", "Twilio", "Plivo", "AssemblyAI",
  "HeyGen", "Tavus", "mem0", "Sentry", "OpenTelemetry",
];

const CODE_SAMPLE = `from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.task import PipelineTask
from pipecat.services.deepgram import DeepgramSTTService
from pipecat.services.openai import OpenAILLMService
from pipecat.services.elevenlabs import ElevenLabsTTSService
from pipecat.transports.daily import DailyTransport

# Assemble your voice agent in minutes
pipeline = Pipeline([
    transport.input(),          # WebRTC audio in
    DeepgramSTTService(),       # Speech → Text
    OpenAILLMService(           # LLM reasoning
        model="gpt-4o",
        system="You are a helpful agent."
    ),
    ElevenLabsTTSService(),     # Text → Speech
    transport.output(),         # WebRTC audio out
])

task = PipelineTask(pipeline)
await task.run()`;

export default function HomePage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", fontFamily: "var(--font-bricolage, sans-serif)", color: "var(--nb-ink)", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 24px 64px", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />

        {/* Decorative: giant blurred violet glow */}
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "55%", height: "80%", background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Brutalist geometric accent */}
        <div style={{ position: "absolute", top: 80, right: "8%", width: 200, height: 200, background: "var(--nb-violet)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-xl)", opacity: 0.12, borderRadius: "var(--radius)", pointerEvents: "none", animation: "float 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: 120, right: "calc(8% + 44px)", width: 200, height: 200, border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", pointerEvents: "none", opacity: 0.3 }} />

        <div className="container">
          <div style={{ maxWidth: 800 }}>
            {/* Eyebrow */}
            <div className="eyebrow anim-fade-up" style={{ marginBottom: 28 }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="var(--nb-violet)" /></svg>
              Enterprise Voice AI Infrastructure
            </div>

            {/* Headline */}
            <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(40px,6vw,80px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.045em", marginBottom: 24, color: "var(--nb-ink)" }}>
              Build voice AI
              <br />
              <span style={{ color: "var(--nb-violet)" }}>that feels</span>
              <br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(42px,6.5vw,86px)" }}>genuinely human.</span>
            </h1>

            <p className="anim-fade-up delay-200" style={{ fontSize: "clamp(16px,1.8vw,20px)", color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 600, marginBottom: 40, fontWeight: 400 }}>
              Converse is the enterprise framework for orchestrating real-time voice and multimodal AI agents. Composable pipelines, any AI provider, sub-100ms latency — production-ready from day one.
            </p>

            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "15px 32px" }}>
                Contact Sales <ArrowRight size={16} />
              </Link>
              <Link href="/platform" className="btn-secondary" style={{ fontSize: 16, padding: "15px 32px" }}>
                <Play size={15} style={{ fill: "var(--nb-ink)" }} /> See Platform
              </Link>
            </div>

            {/* Waveform visual */}
            <div className="anim-fade-up delay-400" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ position: "relative", width: 48, height: 48 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--nb-violet-subtle)", border: "2px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mic size={20} color="var(--nb-violet)" />
                </div>
                <div className="pulse-ring" />
                <div className="pulse-ring" style={{ animationDelay: "0.5s" }} />
              </div>
              <div>
                <WaveformHero />
              </div>
              <span style={{ fontSize: 13, color: "var(--nb-ink-dim)", fontWeight: 500 }}>Live voice pipeline · {`<`}100ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)", borderBottom: "2px solid var(--nb-border)", padding: "0 24px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderLeft: "2px solid rgba(255,255,255,0.1)" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: "32px 28px", borderRight: "2px solid rgba(255,255,255,0.1)", borderBottom: "none" }}>
                <div style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, color: "#a78bfa", lineHeight: 1, marginBottom: 8 }}>
                  <Counter target={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#FAF8F3", marginBottom: 3, letterSpacing: "-0.02em" }}>{s.label}</div>
                <div style={{ fontSize: 12, color: "rgba(250,248,243,0.45)", fontWeight: 500 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PIPELINE DIAGRAM ── */}
      <section className="section section--surface" style={{ padding: "80px 24px" }}>
        <div className="container container--narrow">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="section-label" style={{ justifyContent: "center" }}>How It Works</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 16 }}>
              A pipeline that processes voice<br />at the speed of conversation
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Each stage of the pipeline is hot-swappable. Swap providers, add processors, run parallel branches — all without touching the rest of your logic.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <PipelineDiagram />
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {[
              "Smart Turn Detection",
              "Interruption Handling",
              "Parallel Pipelines",
              "Service Switcher",
              "Context Aggregation",
              "DTMF Support",
            ].map((f) => (
              <span key={f} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", background: "var(--nb-bg)", border: "1.5px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 13, fontWeight: 600, color: "var(--nb-ink-muted)" }}>
                <Check size={12} color="var(--nb-violet)" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Platform Capabilities</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,52px)", maxWidth: 620 }}>
              Every layer of voice AI, engineered for production
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {/* Wide card */}
            <div className="nb-card" style={{ gridColumn: "1 / 3", padding: 40, background: "var(--nb-violet)", color: "#fff", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, border: "2px solid rgba(255,255,255,0.1)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, border: "2px solid rgba(255,255,255,0.08)", borderRadius: "50%" }} />
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, position: "relative", zIndex: 1 }}>
                <div style={{ width: 52, height: 52, background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <GitBranch size={24} color="#fff" />
                </div>
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 12 }}>Composable Pipeline Engine</h3>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 480 }}>
                    Assemble voice agents from modular processors. Swap any STT, LLM, or TTS without rewriting surrounding logic. Add parallel branches, conditional routing, and real-time transformations. The framework handles frame routing, backpressure, and lifecycle automatically.
                  </p>
                  <Link href="/platform/pipeline-engine" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", opacity: 0.9 }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
                  >
                    Explore Pipeline Engine <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular cards */}
            {FEATURES.slice(1).map((f) => {
              const Icon = f.icon;
              return (
                <Link key={f.title} href={f.href} style={{ textDecoration: "none" }}>
                  <div className="nb-card" style={{ padding: 32, height: "100%", cursor: "pointer" }}>
                    <div className="feature-icon" style={{ marginBottom: 20 }}>
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10, letterSpacing: "-0.03em" }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{f.desc}</p>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 16, color: "var(--nb-violet)", fontWeight: 700, fontSize: 13 }}>
                      Learn more <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CODE SAMPLE ── */}
      <section className="section section--invert" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div className="cv-split-2col" style={{ display: "grid", gap: 64, alignItems: "center" }}>
            <div>
              <p className="section-label" style={{ color: "rgba(250,248,243,0.5)" }}>Developer Experience</p>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", color: "#FAF8F3", marginBottom: 20 }}>
                From idea to production voice agent in minutes
              </h2>
              <p style={{ fontSize: 16, color: "rgba(250,248,243,0.65)", lineHeight: 1.75, marginBottom: 32 }}>
                Converse&apos;s Python SDK is designed for engineers who want maximum control with minimum boilerplate. Async-native, type-safe, and production-tested at enterprise scale.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {[
                  "Async-first Python SDK with full type annotations",
                  "Hot-swap any AI provider without changing pipeline logic",
                  "Built-in context aggregation and conversation memory",
                  "Real-time streaming with automatic backpressure handling",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ width: 20, height: 20, background: "var(--nb-violet)", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <Check size={11} color="#fff" />
                    </div>
                    <span style={{ fontSize: 14, color: "rgba(250,248,243,0.75)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/platform/pipeline-engine" className="btn-invert">
                View Platform Docs <ArrowRight size={15} />
              </Link>
            </div>
            <div className="code-block" style={{ fontSize: 12.5 }}>
              <div className="code-block__bar">
                <span className="code-dot code-dot--r" />
                <span className="code-dot code-dot--y" />
                <span className="code-dot code-dot--g" />
                <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-jetbrains, monospace)" }}>agent.py</span>
              </div>
              <div className="code-block__body">
                <pre style={{ fontSize: 12.5, lineHeight: 1.8 }}>
                  {CODE_SAMPLE.split("\n").map((line, i) => {
                    const colored = line
                      .replace(/(from|import|await|async def|class)/g, '<kw>$1</kw>')
                      .replace(/(".*?")/g, '<str>$1</str>')
                      .replace(/(#.*$)/g, '<cm>$1</cm>');
                    return (
                      <div key={i} style={{ color: "#e8e2d0" }}>
                        {line.startsWith("#") ? (
                          <span className="tok-comment">{line}</span>
                        ) : line.match(/^from |^import /) ? (
                          <>
                            <span className="tok-keyword">{line.split(" ")[0]} </span>
                            <span className="tok-var">{line.split(" ").slice(1).join(" ")}</span>
                          </>
                        ) : line.includes("=") && !line.includes("==") ? (
                          <span>{line}</span>
                        ) : (
                          <span style={{ color: "#e8e2d0" }}>{line}</span>
                        )}
                      </div>
                    );
                  })}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="section-label" style={{ justifyContent: "center" }}>What You Can Build</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,52px)", marginBottom: 16 }}>
              One platform, infinite conversations
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 540, margin: "0 auto" }}>
              From enterprise customer service to immersive interactive experiences — Converse powers voice AI at every scale.
            </p>
          </div>
          <div className="cards-3">
            {USE_CASES.map((uc) => {
              const Icon = uc.icon;
              return (
                <Link key={uc.title} href={uc.href} style={{ textDecoration: "none" }}>
                  <div className="nb-card nb-card--surface" style={{ padding: 32, height: "100%", cursor: "pointer" }}>
                    <div style={{ width: 44, height: 44, background: "var(--nb-violet)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <Icon size={20} color="#fff" />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>{uc.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{uc.desc}</p>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 16, color: "var(--nb-violet)", fontWeight: 700, fontSize: 13 }}>
                      Explore <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROVIDER MARQUEE ── */}
      <section className="section section--surface" style={{ padding: "64px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32, padding: "0 24px" }}>
          <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--nb-ink-dim)" }}>
            Natively integrated with the best AI services
          </p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...PROVIDERS, ...PROVIDERS].map((p, i) => (
              <div key={i} style={{ padding: "10px 24px", margin: "0 8px", background: "var(--nb-bg)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", fontSize: 13, fontWeight: 700, color: "var(--nb-ink-muted)", whiteSpace: "nowrap" }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE CTA ── */}
      <section className="section section--invert" style={{ padding: "96px 24px" }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <div style={{ width: 60, height: 60, background: "var(--nb-violet)", border: "2px solid rgba(255,255,255,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
            <Mic size={26} color="#fff" />
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", color: "#FAF8F3", marginBottom: 20 }}>
            Ready to build voice AI<br />that your customers will love?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(250,248,243,0.65)", marginBottom: 40, lineHeight: 1.75, maxWidth: 520, margin: "0 auto 40px" }}>
            Converse powers mission-critical voice deployments for global enterprises. Connect with our team to architect a solution for your scale.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-invert" style={{ fontSize: 16, padding: "16px 36px" }}>
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link href="/enterprise" className="btn-secondary" style={{ fontSize: 16, padding: "16px 36px", background: "rgba(255,255,255,0.06)", color: "#FAF8F3", border: "2px solid rgba(255,255,255,0.2)", boxShadow: "none" }}>
              Enterprise Overview
            </Link>
          </div>
          <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 56, flexWrap: "wrap" }}>
            {["SOC 2 Type II", "HIPAA Ready", "GDPR Compliant", "On-Premise Available"].map((badge) => (
              <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(250,248,243,0.5)", fontWeight: 600 }}>
                <Shield size={14} color="#a78bfa" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="gridColumn: 1 / 3"] { grid-column: 1 / 2 !important; }
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
