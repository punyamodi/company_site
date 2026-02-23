import Link from "next/link";
import {
  ArrowRight, GitBranch, Zap, Check, ChevronRight,
  Code2, GitMerge, Shuffle, Activity,
} from "lucide-react";

const PIPELINE_FEATURES = [
  {
    icon: GitBranch,
    title: "Frame-Based Data Model",
    desc: "Every piece of data in Converse is a typed Frame: AudioRawFrame, TextFrame, LLMMessagesFrame. Processors consume and emit frames through async queues, enabling backpressure-aware streaming with no polling or polling overhead.",
  },
  {
    icon: GitMerge,
    title: "Parallel Pipelines",
    desc: "Run multiple pipeline branches simultaneously. Parallel processors fan out work to concurrent sub-pipelines and merge results. Use this to run a safety classifier alongside the main LLM response without blocking.",
  },
  {
    icon: Shuffle,
    title: "Service Switcher",
    desc: "Hot-swap any AI provider at runtime without restarting the pipeline. Switch from OpenAI to Claude mid-conversation, A/B test latency across providers, or gracefully failover when a service degrades.",
  },
  {
    icon: Activity,
    title: "LLM Context Aggregation",
    desc: "Built-in context managers accumulate conversation history, compress long contexts, and inject dynamic system prompts. Support for multi-turn memory via mem0 integration and MCP tool responses.",
  },
  {
    icon: Code2,
    title: "RTVI Protocol",
    desc: "Real-Time Voice Interaction protocol standardizes the client-server contract. Any RTVI-compatible client (JS, React, React Native, Swift, Kotlin, C++) communicates with any Converse server pipeline.",
  },
  {
    icon: Zap,
    title: "Async Python SDK",
    desc: "Built on asyncio for maximum throughput. Processors run as coroutines, input/output queues are non-blocking, and the pipeline task manages lifecycle, health, and graceful shutdown automatically.",
  },
];

const CODE_SEQUENTIAL = `from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.task import PipelineTask
from pipecat.services.deepgram import DeepgramSTTService
from pipecat.services.openai import OpenAILLMService
from pipecat.services.elevenlabs import ElevenLabsTTSService

# Sequential: audio → text → LLM → audio
pipeline = Pipeline([
    transport.input(),          # WebRTC audio in
    DeepgramSTTService(),       # Speech → Text
    context_aggregator.user(),  # Accumulate context
    OpenAILLMService(
        model="gpt-4o",
        system="You are a helpful assistant.",
    ),
    context_aggregator.assistant(),
    ElevenLabsTTSService(),     # Text → Speech
    transport.output(),         # WebRTC audio out
])

task = PipelineTask(pipeline, params=PipelineParams(
    allow_interruptions=True,
    enable_metrics=True,
))
await task.run()`;

const CODE_PARALLEL = `from pipecat.processors.aggregators.parallel import ParallelPipeline
from pipecat.services.openai import OpenAILLMService
from pipecat.services.anthropic import AnthropicLLMService

# Parallel: run two LLM branches simultaneously
parallel = ParallelPipeline([
    # Branch A: primary response
    [OpenAILLMService(model="gpt-4o")],
    # Branch B: safety check (runs concurrently)
    [AnthropicLLMService(model="claude-3-haiku-20240307",
                         system="Check: is this safe?")],
])

pipeline = Pipeline([
    transport.input(),
    DeepgramSTTService(),
    parallel,       # Both branches execute simultaneously
    ResponseMerger(),
    ElevenLabsTTSService(),
    transport.output(),
])`;

function DataFlowSVG() {
  const nodes = [
    { x: 30, label: "Input", sub: "WebRTC" },
    { x: 170, label: "STT", sub: "Deepgram" },
    { x: 310, label: "LLM", sub: "GPT-4o" },
    { x: 450, label: "TTS", sub: "ElevenLabs" },
    { x: 590, label: "Output", sub: "WebRTC" },
  ];
  const nodeWidth = 100;
  const nodeHeight = 52;
  const nodeY = 54;
  const dotY = nodeY + nodeHeight / 2;

  // Path segments between nodes
  const segments = nodes.slice(0, -1).map((n, i) => ({
    x1: n.x + nodeWidth,
    x2: nodes[i + 1].x,
    y: dotY,
    pathD: `M ${n.x + nodeWidth} ${dotY} L ${nodes[i + 1].x} ${dotY}`,
    delay: i * 0.5,
  }));

  return (
    <svg
      width="730"
      height="160"
      viewBox="0 0 730 160"
      fill="none"
      style={{ display: "block", width: "100%", maxWidth: 730 }}
    >
      <style>{`
        @keyframes dotFlow {
          0%   { offset-distance: 0%;  opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>

      {/* Connection lines */}
      {segments.map((seg, i) => (
        <line
          key={i}
          x1={seg.x1}
          y1={seg.y}
          x2={seg.x2}
          y2={seg.y}
          stroke="#C8C3B5"
          strokeWidth="2"
        />
      ))}

      {/* Arrow heads */}
      {segments.map((seg, i) => (
        <polygon
          key={i}
          points={`${seg.x2},${seg.y} ${seg.x2 - 8},${seg.y - 5} ${seg.x2 - 8},${seg.y + 5}`}
          fill="#C8C3B5"
        />
      ))}

      {/* Animated dots */}
      {segments.map((seg, i) => (
        <circle
          key={i}
          r="5"
          fill="var(--nb-violet)"
          style={{
            offsetPath: `path("${seg.pathD}")`,
            animation: `dotFlow 1.4s ease-in-out ${i * 0.28}s infinite`,
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <rect
            x={node.x}
            y={nodeY}
            width={nodeWidth}
            height={nodeHeight}
            rx="4"
            fill={i === 0 || i === nodes.length - 1 ? "var(--nb-surface)" : "var(--nb-violet)"}
            stroke="#0A0A0A"
            strokeWidth="2"
          />
          <text
            x={node.x + nodeWidth / 2}
            y={nodeY + 20}
            textAnchor="middle"
            fontSize="12"
            fontWeight="800"
            fill={i === 0 || i === nodes.length - 1 ? "#0A0A0A" : "#fff"}
            fontFamily="inherit"
          >
            {node.label}
          </text>
          <text
            x={node.x + nodeWidth / 2}
            y={nodeY + 35}
            textAnchor="middle"
            fontSize="9.5"
            fill={i === 0 || i === nodes.length - 1 ? "#4A4540" : "rgba(255,255,255,0.75)"}
            fontFamily="inherit"
          >
            {node.sub}
          </text>
        </g>
      ))}

      {/* Labels below */}
      <text x="365" y="140" textAnchor="middle" fontSize="11" fill="#7A746A" fontFamily="inherit">
        Sub-100ms end-to-end · Each stage streams incrementally · Any processor is hot-swappable
      </text>
    </svg>
  );
}

export default function PipelineEnginePage() {
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
            background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container container--narrow">
          <div style={{ marginBottom: 8 }}>
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
          </div>
          <div className="eyebrow anim-fade-up">Pipeline Engine</div>
          <h1
            className="anim-fade-up delay-100"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              marginBottom: 24,
              maxWidth: 760,
            }}
          >
            Composable pipelines for{" "}
            <span style={{ color: "var(--nb-violet)" }}>any voice workflow</span>
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
            The Converse pipeline engine gives you a frame-based data model and
            composable processor graph. Chain processors, run parallel branches,
            hot-swap any service — all with sub-100ms end-to-end latency and zero
            polling overhead.
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

      {/* ── DATA FLOW DIAGRAM ── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              How Frames Flow
            </p>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 12 }}>
              A pipeline that processes voice at conversation speed
            </h2>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Each processor receives typed Frames, transforms them, and emits new
              Frames downstream. The engine handles backpressure, lifecycle, and
              metrics automatically.
            </p>
          </div>
          <div style={{ overflowX: "auto", paddingBottom: 8 }}>
            <DataFlowSVG />
          </div>
        </div>
      </section>

      {/* ── CODE COMPARISON ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="section-label">Pipeline Patterns</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", marginBottom: 16, maxWidth: 560 }}>
              Sequential and parallel — your architecture, your choice
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 560, lineHeight: 1.75 }}>
              Build a simple sequential pipeline in minutes. When requirements grow,
              add parallel branches without touching the existing logic.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <GitBranch size={16} color="var(--nb-violet)" />
                <span style={{ fontSize: 14, fontWeight: 800, color: "var(--nb-ink)" }}>
                  Sequential Pipeline
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#059669",
                    background: "rgba(5,150,105,0.1)",
                    padding: "2px 8px",
                    border: "1px solid rgba(5,150,105,0.2)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  Standard
                </span>
              </div>
              <div className="code-block" style={{ fontSize: 12 }}>
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" />
                  <span className="code-dot code-dot--y" />
                  <span className="code-dot code-dot--g" />
                  <span
                    style={{
                      marginLeft: 8,
                      fontSize: 11,
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "var(--font-jetbrains, monospace)",
                    }}
                  >
                    sequential.py
                  </span>
                </div>
                <div className="code-block__body">
                  <pre style={{ fontSize: 12, lineHeight: 1.7 }}>
                    {CODE_SEQUENTIAL.split("\n").map((line, i) => (
                      <div key={i}>
                        {line.startsWith("#") ? (
                          <span className="tok-comment">{line}</span>
                        ) : line.match(/^from |^import /) ? (
                          <>
                            <span className="tok-keyword">{line.split(" ")[0]} </span>
                            <span className="tok-var">{line.split(" ").slice(1).join(" ")}</span>
                          </>
                        ) : (
                          <span style={{ color: "#e8e2d0" }}>{line}</span>
                        )}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <GitMerge size={16} color="var(--nb-violet)" />
                <span style={{ fontSize: 14, fontWeight: 800, color: "var(--nb-ink)" }}>
                  Parallel Pipeline
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--nb-violet)",
                    background: "var(--nb-violet-subtle)",
                    padding: "2px 8px",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  Advanced
                </span>
              </div>
              <div className="code-block" style={{ fontSize: 12 }}>
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" />
                  <span className="code-dot code-dot--y" />
                  <span className="code-dot code-dot--g" />
                  <span
                    style={{
                      marginLeft: 8,
                      fontSize: 11,
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "var(--font-jetbrains, monospace)",
                    }}
                  >
                    parallel.py
                  </span>
                </div>
                <div className="code-block__body">
                  <pre style={{ fontSize: 12, lineHeight: 1.7 }}>
                    {CODE_PARALLEL.split("\n").map((line, i) => (
                      <div key={i}>
                        {line.startsWith("#") ? (
                          <span className="tok-comment">{line}</span>
                        ) : line.match(/^from |^import /) ? (
                          <>
                            <span className="tok-keyword">{line.split(" ")[0]} </span>
                            <span className="tok-var">{line.split(" ").slice(1).join(" ")}</span>
                          </>
                        ) : (
                          <span style={{ color: "#e8e2d0" }}>{line}</span>
                        )}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Core Capabilities</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 540 }}>
              Everything a production voice pipeline needs
            </h2>
          </div>
          <div className="cards-3">
            {PIPELINE_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ padding: 32 }}>
                  <div className="feature-icon" style={{ marginBottom: 20 }}>
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{ fontSize: 17, fontWeight: 800, marginBottom: 10, letterSpacing: "-0.03em" }}
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

      {/* ── RTVI PROTOCOL ── */}
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
              <p className="section-label">RTVI Protocol</p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", marginBottom: 20 }}>
                Standardized client-server contract
              </h2>
              <p
                style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 28 }}
              >
                The Real-Time Voice Interaction (RTVI) protocol standardizes how
                client applications communicate with Converse pipelines. Any
                RTVI-compatible client can connect to any Converse server — across
                web, mobile, and native platforms.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  "Client SDKs: JS, React, React Native, Swift, Kotlin, C++",
                  "Bidirectional: real-time audio, text, and control messages",
                  "Transport-agnostic: works over WebRTC, WebSocket, and more",
                  "Versioned protocol with backward compatibility guarantees",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
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
                    <span style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>
                      {item}
                    </span>
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
                {[
                  { platform: "JavaScript", tag: "Web", color: "#F97316" },
                  { platform: "React", tag: "Web", color: "#06B6D4" },
                  { platform: "React Native", tag: "Mobile", color: "#7C3AED" },
                  { platform: "Swift", tag: "iOS", color: "#059669" },
                  { platform: "Kotlin", tag: "Android", color: "#7C3AED" },
                  { platform: "C++", tag: "Native", color: "#0A0A0A" },
                ].map((sdk) => (
                  <div
                    key={sdk.platform}
                    className="nb-card nb-card--surface"
                    style={{ padding: "18px 20px" }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        marginBottom: 4,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {sdk.platform}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: sdk.color,
                      }}
                    >
                      {sdk.tag}
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
            style={{ fontSize: "clamp(26px,3.5vw,44px)", color: "#FAF8F3", marginBottom: 20 }}
          >
            Ready to build your first pipeline?
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
            Our solutions engineers will help you design the right pipeline
            architecture for your voice AI use case.
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
