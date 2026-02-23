import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  Brain,
  ChevronRight,
  MessageSquare,
  Shield,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sentiment Analysis — Real-Time Conversation Emotion Scoring",
  description:
    "HaloDesk's NLP engine scores every incoming message on a 5-level scale using weighted decay and intensifier detection. Escalate before frustration becomes churn.",
};

const LEVELS = [
  {
    label: "Very Negative",
    score: -2,
    float: "≤ -0.6",
    emoji: "😡",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.08)",
    desc: "Immediate escalation triggered — senior agent alerted in real time",
  },
  {
    label: "Negative",
    score: -1,
    float: "-0.6 – -0.2",
    emoji: "😟",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    desc: "Agent notified; conversation flagged for supervisor review",
  },
  {
    label: "Neutral",
    score: 0,
    float: "-0.2 – +0.2",
    emoji: "😐",
    color: "#6B7280",
    bg: "rgba(107,114,128,0.08)",
    desc: "Standard handling; engine continues monitoring for trend shifts",
  },
  {
    label: "Positive",
    score: 1,
    float: "+0.2 – +0.6",
    emoji: "🙂",
    color: "#0EA5A0",
    bg: "rgba(14,165,160,0.08)",
    desc: "Healthy interaction; no intervention needed",
  },
  {
    label: "Very Positive",
    score: 2,
    float: "≥ +0.6",
    emoji: "😊",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    desc: "Opportunity flagged — prompt CSAT survey or referral request",
  },
];

const ALGORITHM_STEPS = [
  {
    step: "01",
    title: "Message Queue",
    desc: "Every inbound message is queued for NLP processing. The engine uses up to the last 20 incoming messages per conversation to preserve conversational context.",
  },
  {
    step: "02",
    title: "1/n Weighted Decay",
    desc: "Messages are weighted by recency using a 1/n decay function. The most recent message carries weight 1.0, the second carries 0.5, the third 0.33 — and so on.",
  },
  {
    step: "03",
    title: "Intensifier Boost",
    desc: 'Words like "very", "really", and "extremely" are detected as intensifiers and multiply the weight of surrounding sentiment tokens by 1.5×.',
  },
  {
    step: "04",
    title: "Score Aggregation",
    desc: "Weighted sentiment values are summed and divided by total weight, producing a float clamped to [-1.0, +1.0]. The level threshold is applied to get the discrete label.",
  },
];

const INTEGRATIONS = [
  {
    icon: AlertTriangle,
    title: "Escalation Triggers",
    desc: "When a conversation hits very_negative, an automatic alert fires to the assigned agent and their supervisor with a direct link to the conversation.",
    accent: "#DC2626",
  },
  {
    icon: Activity,
    title: "Health Score Impact",
    desc: "Each negative sentiment event deducts up to 5 points from the customer health score, building a longitudinal view of relationship quality over time.",
    accent: "#F59E0B",
  },
  {
    icon: BarChart3,
    title: "Distribution Reports",
    desc: "View negative/positive/neutral percentages by date range, team, or inbox. Identify systemic pain points before they compound into churn waves.",
    accent: "#0EA5A0",
  },
  {
    icon: Bell,
    title: "Webhook Notifications",
    desc: "Threshold-crossing events fire webhooks in real time. Wire into Slack, PagerDuty, or any external system to build custom escalation pipelines.",
    accent: "#6366F1",
  },
  {
    icon: MessageSquare,
    title: "Per-Conversation History",
    desc: "Full sentiment timelines stored per conversation in the database. Replay sentiment curves on any resolved ticket to understand what happened and why.",
    accent: "#0EA5A0",
  },
  {
    icon: Brain,
    title: "60+ Keyword Library",
    desc: "30+ positive terms (thank, great, excellent, amazing, helpful, satisfied, fantastic) and 30+ negative terms (terrible, awful, broken, frustrated, error, crash, unusable).",
    accent: "#F59E0B",
  },
];

const STATS = [
  { value: "20", label: "Messages analyzed per conversation" },
  { value: "1.5×", label: "Intensifier weight multiplier" },
  { value: "60+", label: "Sentiment keywords in library" },
  { value: "<50ms", label: "Score computation latency" },
];

export default function SentimentPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          borderBottom: "2px solid var(--nb-border)",
          paddingTop: 96,
          paddingBottom: 80,
        }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}
        />
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left copy */}
            <div>
              <div className="eyebrow anim-fade-up">
                <Activity size={12} />
                Sentiment Analysis
              </div>
              <h1
                className="anim-fade-up delay-100"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  lineHeight: 1,
                  marginBottom: 24,
                  letterSpacing: "-0.04em",
                }}
              >
                Know how customers{" "}
                <em
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--nb-teal)",
                    fontWeight: 700,
                  }}
                >
                  feel
                </em>{" "}
                in real time
              </h1>
              <p
                className="anim-fade-up delay-200"
                style={{
                  fontSize: "1.125rem",
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.7,
                  maxWidth: 500,
                  marginBottom: 40,
                }}
              >
                HaloDesk&apos;s NLP engine scores every incoming message on a 5-level
                scale — from very negative to very positive — using weighted decay,
                intensifier detection, and a 60+ word library. Escalate before
                frustration becomes churn.
              </p>
              <div
                className="anim-fade-up delay-300"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <Link href="/contact" className="btn-primary">
                  Get started <ArrowRight size={16} />
                </Link>
                <Link href="/features" className="btn-secondary">
                  All features <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hero SVG — animated sentiment gauge */}
            <div className="anim-fade-up delay-200">
              <svg
                viewBox="0 0 480 400"
                fill="none"
                style={{
                  width: "100%",
                  maxWidth: 480,
                  filter: "drop-shadow(6px 6px 0px #0A0A0A)",
                }}
              >
                <defs>
                  <linearGradient id="sg-gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="25%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#9CA3AF" />
                    <stop offset="75%" stopColor="#0EA5A0" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>

                {/* Card */}
                <rect x="0" y="0" width="480" height="400" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
                <rect x="0" y="0" width="480" height="44" rx="4" fill="#0A1628" stroke="#0A0A0A" strokeWidth="2" />
                <circle cx="16" cy="16" r="5" fill="#ff5f57" />
                <circle cx="32" cy="16" r="5" fill="#febc2e" />
                <circle cx="48" cy="16" r="5" fill="#28c840" />
                <text x="68" y="27" fill="#FAF8F3" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  Sentiment Monitor · Live
                </text>
                <circle cx="452" cy="22" r="5" fill="#0EA5A0">
                  <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                </circle>

                {/* Gauge track */}
                <path d="M 60 290 A 180 180 0 0 1 420 290" stroke="#E5E7EB" strokeWidth="28" fill="none" strokeLinecap="round" />
                {/* Gauge fill */}
                <path d="M 60 290 A 180 180 0 0 1 420 290" stroke="url(#sg-gaugeGrad)" strokeWidth="28" fill="none" strokeLinecap="round" />

                {/* Zone tick marks */}
                {[
                  { angle: -90, label: "😡", x: 38, y: 298 },
                  { angle: -45, label: "😟", x: 108, y: 158 },
                  { angle: 0, label: "😐", x: 228, y: 118 },
                  { angle: 45, label: "🙂", x: 340, y: 158 },
                  { angle: 90, label: "😊", x: 422, y: 298 },
                ].map((z) => (
                  <text key={z.label} x={z.x} y={z.y} fontSize="18" textAnchor="middle" fontFamily="sans-serif">
                    {z.label}
                  </text>
                ))}

                {/* Animated needle */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-80 240 290;-30 240 290;5 240 290;45 240 290;-15 240 290;-80 240 290"
                    dur="7s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
                  />
                  <line x1="240" y1="290" x2="240" y2="130" stroke="#0A1628" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="240" cy="290" r="12" fill="#0A1628" />
                  <circle cx="240" cy="290" r="6" fill="#FAF8F3" />
                </g>

                {/* Score bubble */}
                <rect x="196" y="308" width="88" height="32" rx="4" fill="#0A1628" stroke="#0A0A0A" strokeWidth="1.5" />
                <text x="240" y="330" textAnchor="middle" fill="#0EA5A0" fontSize="15" fontWeight="800" fontFamily="var(--font-mono, monospace)">
                  +0.62
                  <animate attributeName="textContent" values="+0.62;+0.31;0.00;-0.44;+0.18;+0.62" dur="7s" repeatCount="indefinite" />
                </text>

                {/* Message feed */}
                <rect x="16" y="354" width="440" height="1" fill="#C8C3B5" />
                <text x="16" y="372" fill="#7A746A" fontSize="10" fontFamily="sans-serif">Recent messages:</text>

                {[
                  { x: 16, text: "Msg #18 · 😊 very positive", fill: "#059669" },
                  { x: 168, text: "Msg #19 · 😐 neutral", fill: "#6B7280" },
                  { x: 290, text: "Msg #20 · 😡 escalate!", fill: "#DC2626", pulse: true },
                ].map((m, i) => (
                  <g key={i}>
                    <rect x={m.x} y="376" width={m.x === 16 ? 144 : m.x === 168 ? 114 : 174} height="20" rx="2" fill={m.fill} fillOpacity="0.12" stroke={m.fill} strokeWidth="1" />
                    <text x={m.x + 6} y="390" fill={m.fill} fontSize="9" fontWeight="700" fontFamily="sans-serif">
                      {m.text}
                      {m.pulse && (
                        <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
                      )}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-LEVEL SCALE ────────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">5-Level Scale</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
              maxWidth: 620,
            }}
          >
            Scores mapped to{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              actionable
            </em>{" "}
            levels
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            The raw float score (-1.0 to +1.0) is mapped to five discrete levels. Each
            level triggers a different workflow response — from immediate escalation on
            very_negative to CSAT survey prompts on very_positive.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {LEVELS.map((level, i) => (
              <div
                key={level.label}
                className="nb-card anim-fade-up"
                style={{
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: level.bg,
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    flexShrink: 0,
                    width: 40,
                    textAlign: "center",
                    lineHeight: 1,
                  }}
                >
                  {level.emoji}
                </div>
                <div
                  style={{
                    width: 4,
                    height: 44,
                    background: level.color,
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <strong style={{ fontSize: "0.9375rem" }}>{level.label}</strong>
                    <span
                      style={{
                        background: level.color,
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: 2,
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {level.float}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--nb-ink-muted)",
                      margin: 0,
                    }}
                  >
                    {level.desc}
                  </p>
                </div>
                {/* Proportional bar */}
                <div
                  style={{
                    width: 100,
                    height: 6,
                    background: "var(--nb-border-faint)",
                    borderRadius: 2,
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${((level.score + 2) / 4) * 100}%`,
                      background: level.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALGORITHM ────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
            }}
          >
            Weighted decay +{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-orange)",
              }}
            >
              intensifier
            </em>{" "}
            detection
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            The engine analyzes the last 20 incoming messages, applying a 1/n decay so
            recent messages dominate the score. Intensifiers boost surrounding token
            weight by 1.5×, capturing emphasis that plain keyword matching misses.
          </p>
          <div className="cards-2" style={{ gap: 20, marginBottom: 40 }}>
            {ALGORITHM_STEPS.map((item, i) => (
              <div
                key={item.step}
                className="nb-card anim-fade-up"
                style={{ padding: 28, animationDelay: `${i * 100}ms` }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--nb-teal)",
                    fontWeight: 700,
                    marginBottom: 12,
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{ fontSize: "1.0625rem", marginBottom: 10, fontWeight: 800 }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--nb-ink-muted)",
                    lineHeight: 1.65,
                    fontSize: "0.9375rem",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Code snippet */}
          <div className="code-block anim-fade-up delay-400">
            <div className="code-block__bar">
              <span className="code-dot code-dot--r" />
              <span className="code-dot code-dot--y" />
              <span className="code-dot code-dot--g" />
              <span
                style={{ color: "#6b7280", fontSize: 11, marginLeft: 8 }}
              >
                sentiment_analysis_service.rb
              </span>
            </div>
            <div className="code-block__body">
              <pre>
                <span className="tok-comment"># Weighted scoring: 1/n decay + intensifier 1.5× boost{"\n"}</span>
                <span className="tok-keyword">def </span>
                <span className="tok-func">compute_score</span>
                <span className="tok-var">(messages){"\n"}</span>
                <span className="tok-var">  weighted_sum = </span>
                <span className="tok-number">0.0</span>
                <span className="tok-var">; weight_total = </span>
                <span className="tok-number">0.0{"\n"}</span>
                <span className="tok-var">  messages.last(</span>
                <span className="tok-number">20</span>
                <span className="tok-var">).each_with_index </span>
                <span className="tok-keyword">do </span>
                <span className="tok-var">|msg, idx|{"\n"}</span>
                <span className="tok-var">    w = </span>
                <span className="tok-number">1.0</span>
                <span className="tok-var"> / (idx + </span>
                <span className="tok-number">1</span>
                <span className="tok-var">)</span>
                <span className="tok-comment">                     # recency decay{"\n"}</span>
                <span className="tok-var">    w *= </span>
                <span className="tok-number">1.5 </span>
                <span className="tok-keyword">if </span>
                <span className="tok-func">intensifier?</span>
                <span className="tok-var">(msg.content)</span>
                <span className="tok-comment">  # very / really / extremely{"\n"}</span>
                <span className="tok-var">    weighted_sum += </span>
                <span className="tok-func">word_score</span>
                <span className="tok-var">(msg.content) * w{"\n"}</span>
                <span className="tok-var">    weight_total += w{"\n"}</span>
                <span className="tok-keyword">  end{"\n"}</span>
                <span className="tok-var">  raw = weighted_sum / weight_total{"\n"}</span>
                <span className="tok-var">  raw.clamp(-</span>
                <span className="tok-number">1.0</span>
                <span className="tok-var">, </span>
                <span className="tok-number">1.0</span>
                <span className="tok-var">){"\n"}</span>
                <span className="tok-keyword">end</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">What Sentiment Powers</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
            }}
          >
            Sentiment data flows through{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              every layer
            </em>
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            Sentiment scores don&apos;t live in isolation. They drive escalations, reduce
            health scores, feed distribution reports, and fire webhooks — making
            emotional data actionable across the entire platform.
          </p>
          <div className="cards-3">
            {INTEGRATIONS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 24, animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className="feature-icon"
                    style={{
                      marginBottom: 16,
                      background: item.accent,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--nb-ink-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section
        className="section section--invert"
        style={{
          borderTop: "2px solid var(--nb-border)",
          borderBottom: "2px solid var(--nb-border)",
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 32,
              textAlign: "center",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--nb-teal)",
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.04em",
                    marginBottom: 8,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(250,248,243,0.65)",
                    lineHeight: 1.45,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--nb-invert)",
          borderTop: "2px solid var(--nb-border)",
        }}
      >
        <div
          className="dot-grid"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{ textAlign: "center", position: "relative" }}
        >
          <div
            className="eyebrow anim-fade-up"
            style={{ margin: "0 auto 24px" }}
          >
            <Zap size={12} />
            Start Detecting
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "var(--nb-bg)",
              marginBottom: 20,
            }}
          >
            Catch frustration before it{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              becomes churn
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{
              color: "rgba(250,248,243,0.7)",
              maxWidth: 520,
              margin: "0 auto 40px",
              lineHeight: 1.7,
              fontSize: "1.0625rem",
            }}
          >
            Deploy real-time sentiment monitoring across every inbox. HaloDesk
            scores every message, escalates the right ones, and feeds the data
            into health scores and distribution reports automatically.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-invert">
              Talk to sales <ArrowRight size={16} />
            </Link>
            <Link href="/features" className="btn-secondary">
              Explore all features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
