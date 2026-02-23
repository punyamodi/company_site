import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronRight,
  Heart,
  MessageSquare,
  Star,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Health Scores — Predict Churn Before It Happens",
  description:
    "HaloDesk's weighted health score algorithm combines resolution rate, CSAT, activity, and sentiment into a single 0-100 score. Know which customers need attention before they leave.",
};

const HEALTH_LEVELS = [
  {
    label: "Champion",
    range: "81 – 100",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    emoji: "🏆",
    desc: "Advocates. Candidates for case studies, referrals, and upsell conversations.",
  },
  {
    label: "Healthy",
    range: "61 – 80",
    color: "#0EA5A0",
    bg: "rgba(14,165,160,0.08)",
    emoji: "✅",
    desc: "Strong relationship. Monitor for any dip and engage proactively.",
  },
  {
    label: "Needs Attention",
    range: "41 – 60",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    emoji: "⚠️",
    desc: "Early warning signals. Schedule a proactive check-in or campaign.",
  },
  {
    label: "At Risk",
    range: "21 – 40",
    color: "#F97316",
    bg: "rgba(249,115,22,0.08)",
    emoji: "🔴",
    desc: "Churn risk elevated. Assign dedicated CSM and increase touchpoint frequency.",
  },
  {
    label: "Critical",
    range: "0 – 20",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.08)",
    emoji: "🚨",
    desc: "Immediate intervention required. Escalate to senior CS or executive sponsor.",
  },
];

const SCORE_COMPONENTS = [
  {
    icon: CheckCircle,
    title: "Resolution Rate",
    formula: "resolved / total × 25",
    max: 25,
    color: "#0EA5A0",
    desc: "Measures how often the customer's conversations reach a resolved state. A high resolution rate means their issues are being solved consistently.",
  },
  {
    icon: Star,
    title: "CSAT Component",
    formula: "avg_rating × 25 / 5.0",
    max: 25,
    color: "#F59E0B",
    desc: "Derived from post-conversation satisfaction surveys. Average CSAT rating (1–5) scaled to a 25-point contribution.",
  },
  {
    icon: Activity,
    title: "Activity Component",
    formula: "recent_activity × 5 (capped at 25)",
    max: 25,
    color: "#6366F1",
    desc: "Counts activity events in the last 30 days, rewarding engaged customers. Up to 5 active sessions contribute the full 25 points.",
  },
  {
    icon: TrendingDown,
    title: "Sentiment Penalty",
    formula: "negative_sentiments × 5 (max −25)",
    max: 25,
    color: "#DC2626",
    desc: "Negative sentiment events deduct up to 25 points. A string of frustrated conversations directly pulls down the health score.",
  },
];

const FEATURES = [
  {
    icon: Users,
    title: "at_risk_customers Scope",
    desc: "Built-in query scope returns all contacts with health score between 0 and 40 for immediate prioritization in CS dashboards.",
  },
  {
    icon: TrendingUp,
    title: "healthy_customers Scope",
    desc: "Quickly surface champion and healthy contacts for expansion campaigns, referral programs, and upsell opportunities.",
  },
  {
    icon: BarChart3,
    title: "Stored Factors",
    desc: "Resolution rate, CSAT component, activity component, sentiment penalty, total conversations, and avg resolution time all stored per-contact.",
  },
  {
    icon: MessageSquare,
    title: "Conversation Integration",
    desc: "Health score recomputes automatically after every resolved conversation, CSAT response, or sentiment-scored message — always current.",
  },
  {
    icon: Heart,
    title: "Avg Resolution Time",
    desc: "Time-to-resolve in minutes is tracked per customer and stored in the health score record, surfacing service speed trends.",
  },
  {
    icon: Zap,
    title: "Campaign Targeting",
    desc: "Feed at_risk health segments directly into proactive campaigns — trigger re-engagement sequences the moment a customer drops into at_risk.",
  },
];

export default function HealthScoresPage() {
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
            {/* Copy */}
            <div>
              <div className="eyebrow anim-fade-up">
                <Heart size={12} />
                Customer Health Scores
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
                Predict churn{" "}
                <em
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--nb-teal)",
                    fontWeight: 700,
                  }}
                >
                  before
                </em>{" "}
                it happens
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
                HaloDesk computes a 0–100 health score for every customer by weighing
                resolution rate, CSAT ratings, 30-day activity, and sentiment
                penalties. Five color-coded levels tell your CS team exactly where
                to focus.
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

            {/* Hero SVG — health gauge with customer cards */}
            <div className="anim-fade-up delay-200">
              <svg
                viewBox="0 0 480 420"
                fill="none"
                style={{
                  width: "100%",
                  maxWidth: 480,
                  filter: "drop-shadow(6px 6px 0px #0A0A0A)",
                }}
              >
                {/* Card */}
                <rect x="0" y="0" width="480" height="420" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
                <rect x="0" y="0" width="480" height="44" rx="4" fill="#0A1628" stroke="#0A0A0A" strokeWidth="2" />
                <circle cx="16" cy="16" r="5" fill="#ff5f57" />
                <circle cx="32" cy="16" r="5" fill="#febc2e" />
                <circle cx="48" cy="16" r="5" fill="#28c840" />
                <text x="68" y="27" fill="#FAF8F3" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  Customer Health Dashboard
                </text>

                {/* Central score ring */}
                <circle cx="240" cy="180" r="90" fill="none" stroke="#E5E7EB" strokeWidth="18" />
                {/* Animated score arc */}
                <circle
                  cx="240"
                  cy="180"
                  r="90"
                  fill="none"
                  stroke="#0EA5A0"
                  strokeWidth="18"
                  strokeLinecap="round"
                  strokeDasharray="565"
                  strokeDashoffset="141"
                  transform="rotate(-90 240 180)"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="565;141;282;424;141"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
                  />
                  <animate
                    attributeName="stroke"
                    values="#0EA5A0;#059669;#F59E0B;#DC2626;#0EA5A0"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Score text */}
                <text
                  x="240"
                  y="172"
                  textAnchor="middle"
                  fill="#0A1628"
                  fontSize="38"
                  fontWeight="800"
                  fontFamily="sans-serif"
                >
                  75
                  <animate
                    attributeName="textContent"
                    values="75;88;62;24;75"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </text>
                <text x="240" y="196" textAnchor="middle" fill="#7A746A" fontSize="11" fontFamily="sans-serif">
                  Health Score
                </text>
                <rect x="178" y="208" width="124" height="22" rx="3" fill="#0EA5A0">
                  <animate attributeName="fill" values="#0EA5A0;#059669;#F59E0B;#DC2626;#0EA5A0" dur="6s" repeatCount="indefinite" />
                </rect>
                <text x="240" y="224" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="sans-serif">
                  HEALTHY
                  <animate attributeName="textContent" values="HEALTHY;CHAMPION;NEEDS ATTENTION;CRITICAL;HEALTHY" dur="6s" repeatCount="indefinite" />
                </text>

                {/* Component breakdown */}
                <line x1="20" y1="296" x2="460" y2="296" stroke="#C8C3B5" strokeWidth="1" />
                <text x="20" y="316" fill="#7A746A" fontSize="10" fontFamily="sans-serif" fontWeight="700">
                  SCORE BREAKDOWN
                </text>

                {[
                  { label: "Resolution Rate", pts: 20, max: 25, x: 20, color: "#0EA5A0" },
                  { label: "CSAT", pts: 22, max: 25, x: 20, color: "#F59E0B" },
                  { label: "Activity", pts: 18, max: 25, x: 20, color: "#6366F1" },
                  { label: "Sentiment", pts: -5, max: 25, x: 20, color: "#DC2626" },
                ].map((comp, i) => (
                  <g key={comp.label}>
                    <text x="20" y={336 + i * 22} fill="#4A4540" fontSize="9" fontFamily="sans-serif">
                      {comp.label}
                    </text>
                    <rect x="140" y={324 + i * 22} width="260" height="10" rx="2" fill="#E5E7EB" />
                    <rect
                      x="140"
                      y={324 + i * 22}
                      width={Math.abs(comp.pts) / comp.max * 260}
                      height="10"
                      rx="2"
                      fill={comp.color}
                    />
                    <text x="410" y={336 + i * 22} fill={comp.color} fontSize="9" fontWeight="700" fontFamily="sans-serif">
                      {comp.pts > 0 ? `+${comp.pts}` : comp.pts}
                    </text>
                  </g>
                ))}

                {/* Total */}
                <line x1="20" y1="412" x2="460" y2="412" stroke="#C8C3B5" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALTH LEVELS ────────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">5 Health Levels</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
              maxWidth: 600,
            }}
          >
            Five levels.{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              Crystal-clear
            </em>{" "}
            priorities.
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            Every customer is classified into one of five health levels — from
            Critical (0–20) to Champion (81–100). Each level drives a different
            workflow: escalation, CSM assignment, campaign targeting, or upsell outreach.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {HEALTH_LEVELS.map((level, i) => (
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
                    fontSize: 24,
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
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 4,
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
                      }}
                    >
                      {level.range}
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
                {/* Score bar */}
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
                      width:
                        level.label === "Champion"
                          ? "100%"
                          : level.label === "Healthy"
                          ? "80%"
                          : level.label === "Needs Attention"
                          ? "60%"
                          : level.label === "At Risk"
                          ? "40%"
                          : "20%",
                      background: level.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCORING ALGORITHM ────────────────────────────────────── */}
      <section
        className="section"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">Scoring Algorithm</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
            }}
          >
            Four weighted{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-orange)",
              }}
            >
              components
            </em>{" "}
            = one score
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            The <code style={{ fontFamily: "var(--font-mono)", background: "var(--nb-surface)", padding: "1px 5px", borderRadius: 2 }}>compute_for_contact</code> method
            pulls resolution data, CSAT averages, 30-day activity counts, and sentiment
            penalties from the database, then combines them into a final score out of 100.
          </p>
          <div className="cards-2" style={{ gap: 20, marginBottom: 40 }}>
            {SCORE_COMPONENTS.map((comp, i) => {
              const Icon = comp.icon;
              return (
                <div
                  key={comp.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 28, animationDelay: `${i * 80}ms` }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      className="feature-icon"
                      style={{ background: comp.color, flexShrink: 0 }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 800,
                          marginBottom: 4,
                        }}
                      >
                        {comp.title}
                      </h3>
                      <code
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: comp.color,
                          background: "var(--nb-surface)",
                          padding: "2px 6px",
                          borderRadius: 2,
                          display: "block",
                        }}
                      >
                        {comp.formula}
                      </code>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "var(--nb-ink-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {comp.desc}
                  </p>
                  <div
                    style={{
                      marginTop: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--nb-ink-dim)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      max
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: 4,
                        background: "var(--nb-border-faint)",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "100%",
                          background: comp.color,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: comp.color,
                        fontWeight: 800,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {comp.max} pts
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Formula summary */}
          <div
            className="nb-card anim-fade-up delay-400"
            style={{
              padding: "24px 32px",
              background: "var(--nb-invert)",
              color: "var(--nb-bg)",
              display: "flex",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--nb-teal)",
                  marginBottom: 8,
                }}
              >
                Total Formula
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9375rem",
                  color: "var(--nb-bg)",
                  lineHeight: 1.7,
                }}
              >
                score = resolution_rate + csat_component + activity_component − sentiment_penalty
              </div>
            </div>
            <div
              style={{
                flexShrink: 0,
                textAlign: "center",
                padding: "12px 24px",
                background: "var(--nb-teal)",
                border: "2px solid rgba(255,255,255,0.2)",
                borderRadius: "var(--radius)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                100
              </div>
              <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>max score</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">Platform Features</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 48,
            }}
          >
            Built into every{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              CS workflow
            </em>
          </h2>
          <div className="cards-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 24, animationDelay: `${i * 80}ms` }}
                >
                  <div className="feature-icon" style={{ marginBottom: 16 }}>
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      marginBottom: 8,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--nb-ink-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              );
            })}
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
            <Heart size={12} />
            Reduce Churn
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "var(--nb-bg)",
              marginBottom: 20,
            }}
          >
            Turn health data into{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              retained revenue
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
            HaloDesk computes health scores automatically from your live support data.
            No manual tagging. No spreadsheets. Just real-time signals surfaced to the
            right people at the right moment.
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
