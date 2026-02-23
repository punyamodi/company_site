import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle,
  Clock,
  Heart,
  MessageSquare,
  Send,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Success — HaloDesk Solutions",
  description:
    "Use health scores and sentiment signals to intervene before customers leave. HaloDesk turns every support interaction into a retention signal.",
};

const HEALTH_LEVELS = [
  { label: "Critical",        range: "0 – 20",   color: "#DC2626", bg: "rgba(220,38,38,0.08)",    desc: "Immediate intervention. Escalate to senior CS or executive sponsor." },
  { label: "At Risk",         range: "21 – 40",  color: "#F97316", bg: "rgba(249,115,22,0.08)",   desc: "Churn risk elevated. Assign dedicated CSM, increase touchpoint frequency." },
  { label: "Needs Attention", range: "41 – 60",  color: "#F59E0B", bg: "rgba(245,158,11,0.08)",   desc: "Early warning signals. Schedule a proactive check-in or campaign." },
  { label: "Healthy",         range: "61 – 80",  color: "#0EA5A0", bg: "rgba(14,165,160,0.08)",   desc: "Strong relationship. Monitor for any dip and engage proactively." },
  { label: "Champion",        range: "81 – 100", color: "#059669", bg: "rgba(5,150,105,0.08)",    desc: "Advocate. Candidate for case studies, referrals, and upsell conversations." },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    icon: TrendingDown,
    title: "Health score dips",
    desc: "Resolution rate drops or negative sentiment events accumulate — the customer\u2019s health score falls into At Risk or Critical territory.",
    color: "#DC2626",
  },
  {
    step: "02",
    icon: Bell,
    title: "CS team auto-alerted",
    desc: "HaloDesk fires a workflow that notifies the assigned CSM via conversation or internal note the moment the threshold is crossed.",
    color: "#F59E0B",
  },
  {
    step: "03",
    icon: Send,
    title: "Automated check-in or escalation",
    desc: "A proactive campaign message is dispatched, or the conversation is escalated to a senior agent based on the severity level.",
    color: "#0EA5A0",
  },
];

const FEATURES = [
  {
    icon: Heart,
    title: "Health Scoring",
    desc: "0\u2013100 scores computed from resolution rate, CSAT, 30-day activity, and sentiment penalties. Updated after every resolved conversation.",
  },
  {
    icon: TrendingDown,
    title: "Sentiment-Triggered Escalation",
    desc: "When negative sentiment breaches a threshold, HaloDesk auto-escalates the conversation and fires a CSM alert workflow.",
  },
  {
    icon: Send,
    title: "Proactive Outreach Campaigns",
    desc: "Target At Risk and Critical segments with scheduled check-in messages \u2014 before customers decide to churn.",
  },
  {
    icon: MessageSquare,
    title: "Conversation Summaries for CS Context",
    desc: "AI-generated summaries give your CS team instant context on any customer\u2019s history, reducing time-to-understand on new cases.",
  },
  {
    icon: Clock,
    title: "Customer History Timeline",
    desc: "A full chronological timeline of every conversation, CSAT rating, and sentiment event per contact \u2014 all in one view.",
  },
  {
    icon: BarChart3,
    title: "Health Trend Reporting",
    desc: "Track how health scores shift over time across your customer base. Spot declining cohorts before they become a retention problem.",
  },
];

export default function CustomerSuccessPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--nb-invert)",
          borderBottom: "2px solid var(--nb-border)",
          paddingTop: 96,
          paddingBottom: 80,
        }}
      >
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }} />
        <div className="container">
          <div style={{ maxWidth: 680, position: "relative" }}>
            <div className="eyebrow anim-fade-up" style={{ marginBottom: 24 }}>
              <Heart size={12} />
              Customer Success
            </div>
            <h1
              className="anim-fade-up delay-100"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                lineHeight: 1.05,
                marginBottom: 24,
                letterSpacing: "-0.04em",
                color: "var(--nb-bg)",
              }}
            >
              Support that prevents{" "}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)", fontWeight: 700 }}>
                churn
              </em>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{
                fontSize: "1.125rem",
                color: "rgba(250,248,243,0.75)",
                lineHeight: 1.7,
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              HaloDesk uses health scores and real-time sentiment signals to surface
              at-risk customers before they leave. Your CS team gets actionable alerts
              \u2014 not retrospective reports.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                All Solutions <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALTH SCORE SPOTLIGHT ───────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Left: 5 levels */}
            <div>
              <div className="section-label">Customer Health Score</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
                Five levels.{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
                  Crystal-clear
                </em>{" "}
                priorities.
              </h2>
              <p style={{ color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                Every customer is classified into one of five health tiers \u2014 from
                Critical (0\u201320) to Champion (81\u2013100). Each tier drives a different CS workflow.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {HEALTH_LEVELS.map((level) => (
                  <div
                    key={level.label}
                    className="nb-card"
                    style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 14, background: level.bg }}
                  >
                    <div style={{ width: 4, height: 40, background: level.color, borderRadius: 2, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                        <strong style={{ fontSize: "0.875rem" }}>{level.label}</strong>
                        <span
                          style={{
                            background: level.color,
                            color: "#fff",
                            fontSize: 9,
                            fontWeight: 800,
                            padding: "2px 6px",
                            borderRadius: 2,
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {level.range}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.8125rem", color: "var(--nb-ink-muted)", margin: 0 }}>{level.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SVG bar chart distribution */}
            <div className="anim-fade-up delay-200">
              <svg
                viewBox="0 0 420 400"
                fill="none"
                style={{ width: "100%", maxWidth: 420, filter: "drop-shadow(6px 6px 0px #0A0A0A)" }}
              >
                <rect x="0" y="0" width="420" height="400" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
                <rect x="0" y="0" width="420" height="44" rx="4" fill="#0A1628" stroke="#0A0A0A" strokeWidth="2" />
                <circle cx="16" cy="16" r="5" fill="#ff5f57" />
                <circle cx="32" cy="16" r="5" fill="#febc2e" />
                <circle cx="48" cy="16" r="5" fill="#28c840" />
                <text x="68" y="27" fill="#FAF8F3" fontSize="11" fontWeight="700" fontFamily="sans-serif">Health Score Distribution</text>
                <text x="28" y="76" fill="#7A746A" fontSize="8" fontFamily="sans-serif">Customers</text>
                {/* Bars */}
                {[
                  { label: "Critical",    pct: 8,  color: "#DC2626", count: "12", x: 44 },
                  { label: "At Risk",     pct: 15, color: "#F97316", count: "23", x: 112 },
                  { label: "Needs Att.",  pct: 22, color: "#F59E0B", count: "34", x: 180 },
                  { label: "Healthy",     pct: 38, color: "#0EA5A0", count: "58", x: 248 },
                  { label: "Champion",    pct: 17, color: "#059669", count: "26", x: 316 },
                ].map((bar) => {
                  const barH = (bar.pct / 42) * 190;
                  const y = 290 - barH;
                  return (
                    <g key={bar.label}>
                      <rect x={bar.x} y={y} width="52" height={barH} rx="3" fill={bar.color} fillOpacity="0.85" />
                      <text x={bar.x + 26} y={y - 6} textAnchor="middle" fill={bar.color} fontSize="9" fontWeight="800" fontFamily="sans-serif">{bar.count}</text>
                      <text x={bar.x + 26} y="308" textAnchor="middle" fill="#4A4540" fontSize="7.5" fontFamily="sans-serif">{bar.label}</text>
                    </g>
                  );
                })}
                <line x1="36" y1="290" x2="390" y2="290" stroke="#C8C3B5" strokeWidth="1.5" />
                {/* Summary strip */}
                <rect x="20" y="324" width="380" height="52" rx="3" fill="rgba(14,165,160,0.08)" stroke="#0EA5A0" strokeWidth="1.5" />
                <text x="36" y="345" fill="#0A1628" fontSize="9" fontWeight="700" fontFamily="sans-serif">23% of customers at risk of churn</text>
                <text x="36" y="362" fill="#7A746A" fontSize="8" fontFamily="sans-serif">35 contacts in Critical or At Risk \u2014 actionable this week</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CS WORKFLOW ──────────────────────────────────────────── */}
      <section className="section" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">CS Automation Workflow</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 16 }}>
            Catch at-risk customers{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-orange)" }}>
              automatically
            </em>
          </h2>
          <p style={{ color: "var(--nb-ink-muted)", maxWidth: 600, marginBottom: 48, lineHeight: 1.7 }}>
            HaloDesk connects health score drops to real action \u2014 not just a dashboard
            notification. Three steps from signal to intervention.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {WORKFLOW_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="nb-card anim-fade-up"
                  style={{ padding: 28, animationDelay: `${i * 100}ms`, position: "relative" }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      fontWeight: 900,
                      color: "var(--nb-border-faint)",
                      lineHeight: 1,
                      marginBottom: 16,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="feature-icon" style={{ background: step.color, marginBottom: 16 }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                    {step.desc}
                  </p>
                  {i < 2 && (
                    <div
                      style={{
                        position: "absolute",
                        right: -13,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 26,
                        height: 26,
                        background: "var(--nb-teal)",
                        border: "2px solid var(--nb-border)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                        color: "#fff",
                      }}
                    >
                      <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">Platform Features</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 48 }}>
            Built into every{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              CS workflow
            </em>
          </h2>
          <div className="cards-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card anim-fade-up" style={{ padding: 24, animationDelay: `${i * 80}ms` }}>
                  <div className="feature-icon" style={{ marginBottom: 16 }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <div className="eyebrow anim-fade-up" style={{ margin: "0 auto 24px" }}>
            <Users size={12} />
            Reduce Churn
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--nb-bg)", marginBottom: 20 }}
          >
            Turn health data into{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              retained revenue
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{ color: "rgba(250,248,243,0.7)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7, fontSize: "1.0625rem" }}
          >
            HaloDesk computes health scores from your live support data automatically.
            No manual tagging. No spreadsheets. Real-time signals surfaced to the right
            people at the right moment.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-invert">
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link href="/features/health-scores" className="btn-secondary">
              Health Scores deep-dive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
