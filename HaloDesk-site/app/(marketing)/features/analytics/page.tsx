import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart2,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Filter,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Analytics & Reporting — HaloDesk",
  description:
    "Real-time dashboards, agent performance reports, SLA compliance tracking, and sentiment distribution analytics.",
};

const agentMetrics = [
  { label: "Total Conversations", desc: "All conversations assigned in the selected period, by agent or team." },
  { label: "Resolved Conversations", desc: "Count of conversations the agent moved to Resolved status." },
  { label: "Avg First Response Time", desc: "Median time from conversation creation to agent's first reply." },
  { label: "Avg Resolution Time", desc: "Median time from creation to resolution across all closed tickets." },
  { label: "CSAT Average", desc: "Mean satisfaction score from post-resolution surveys (1–5 scale)." },
  { label: "Messages Sent", desc: "Total outbound messages, including AI-generated and agent replies." },
  { label: "Conversations / Day", desc: "Daily throughput rolling average over the selected date range." },
  { label: "Busiest Hour", desc: "The clock hour with the highest inbound conversation volume." },
  { label: "Resolution Rate", desc: "Resolved conversations as a percentage of all assigned conversations." },
];

type ReportCard = { icon: LucideIcon; title: string; desc: string; metrics: string[] };

const reportCards: ReportCard[] = [
  {
    icon: Users,
    title: "Agent Performance Report",
    desc: "Track every agent's workload, speed, and quality metrics side-by-side. Export to CSV for HR reviews or coaching sessions.",
    metrics: ["First response time", "Resolution time", "Resolution rate", "CSAT scores"],
  },
  {
    icon: TrendingUp,
    title: "Response Time Trends",
    desc: "Daily rolling averages for first response and resolution time. Identify spikes, measure improvement after process changes.",
    metrics: ["Daily rolling average", "7-day & 30-day trends", "Breakdown by inbox", "Hour-of-day heatmap"],
  },
  {
    icon: Shield,
    title: "SLA Compliance Report",
    desc: "Per-policy compliance rates, total violations, and at-risk conversations. Set SLA policies by priority and inbox.",
    metrics: ["Compliance rate %", "Total violations", "At-risk count", "Per-policy breakdown"],
  },
  {
    icon: BarChart2,
    title: "Conversation Volume",
    desc: "Understand demand patterns across status, priority, inbox, day, and hour. Plan staffing based on real data.",
    metrics: ["By status / priority", "By inbox", "Peak hour detection", "Daily volume average"],
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    desc: "CSAT average, score distribution histogram, NPS, and trend over time. Filter by agent, team, or inbox.",
    metrics: ["CSAT average (1–5)", "Score distribution", "NPS score", "Trend over time"],
  },
  {
    icon: Activity,
    title: "Full Analytics Dashboard",
    desc: "A single endpoint combining all five reports. Shareable via link, embeddable, or exported as a scheduled PDF digest.",
    metrics: ["Combined view", "Date range filter", "Agent / inbox filter", "Downloadable reports"],
  },
];

const slaFeatures = [
  { icon: Shield, title: "Per-Policy Compliance Rate", desc: "Set first-response and resolution SLA targets per priority tier. Track compliance % in real time and over time." },
  { icon: AlertTriangle, title: "Violation Tracking", desc: "Automatically flag and log every SLA breach with agent, inbox, priority, and time-over-SLA details." },
  { icon: Clock, title: "At-Risk Conversations", desc: "Surface conversations approaching their SLA deadline in the live dashboard before they breach." },
  { icon: Calendar, title: "Historical Compliance Trends", desc: "30, 60, and 90-day SLA compliance trends with drill-down by team, agent, and priority level." },
];

const filterOptions = [
  "Date range (custom, 7d, 30d, 90d)",
  "Agent or agent group",
  "Team",
  "Inbox",
  "Conversation priority",
  "Conversation label",
  "Customer segment",
  "Resolution status",
];

const stats = [
  { value: "9", label: "Agent performance metrics" },
  { value: "5", label: "Report types in one dashboard" },
  { value: "Real-time", label: "Live conversation view" },
  { value: "CSV / PDF", label: "Export formats" },
];

export default function AnalyticsPage() {
  return (
    <>
      <style>{`
        @keyframes bar-grow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes line-draw {
          from { stroke-dashoffset: 400; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes an-pulse {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.28; }
        }
        @keyframes an-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes an-count {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .an-bar1 { transform-origin: bottom; animation: bar-grow 1s ease-out forwards 0.3s; transform: scaleY(0); }
        .an-bar2 { transform-origin: bottom; animation: bar-grow 1s ease-out forwards 0.5s; transform: scaleY(0); }
        .an-bar3 { transform-origin: bottom; animation: bar-grow 1s ease-out forwards 0.7s; transform: scaleY(0); }
        .an-bar4 { transform-origin: bottom; animation: bar-grow 1s ease-out forwards 0.9s; transform: scaleY(0); }
        .an-bar5 { transform-origin: bottom; animation: bar-grow 1s ease-out forwards 1.1s; transform: scaleY(0); }
        .an-line { stroke-dasharray: 400; animation: line-draw 2s ease-out forwards 1.3s; }
        .an-fl   { animation: an-float 3s ease-in-out infinite; }
        .an-fl2  { animation: an-float 3s ease-in-out infinite 1s; }
        .an-fl3  { animation: an-float 3s ease-in-out infinite 2s; }
        .an-pu   { animation: an-pulse 2.2s ease-in-out infinite; }
        .an-cnt  { animation: an-count 0.6s ease-out forwards; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ paddingTop: "5rem", paddingBottom: "4rem", overflow: "hidden", position: "relative" }}
      >
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.45, pointerEvents: "none" }} />
        <div
          className="container"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div className="anim-fade-up">
            <span className="eyebrow">Advanced Analytics</span>
            <h1
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "var(--nb-invert)",
                margin: "0.75rem 0 1.5rem",
              }}
            >
              Metrics that drive{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
                better decisions
              </em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#4B5563", maxWidth: "40ch", lineHeight: 1.75, marginBottom: "2rem" }}>
              Agent performance, SLA compliance, response time trends, conversation volume analysis, and CSAT — all in one
              filterable, downloadable dashboard updated in real time.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                See the Dashboard <ArrowRight size={16} />
              </Link>
              <a href="#reports" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Explore Reports
              </a>
            </div>
          </div>

          {/* Hero SVG — Animated bar chart + line graph */}
          <div className="anim-slide-r">
            <svg
              viewBox="0 0 480 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 480, display: "block" }}
            >
              <rect x="10" y="10" width="460" height="360" rx="16" fill="var(--nb-surface)" stroke="var(--nb-border)" strokeWidth="2.5" />

              {/* Chart title */}
              <text x="30" y="44" fill="var(--nb-invert)" fontSize="9.5" fontFamily="monospace" fontWeight="700">Agent Performance — Last 7 Days</text>

              {/* Grid lines */}
              {[80, 120, 160, 200, 240].map((y) => (
                <line key={y} x1="60" y1={y} x2="450" y2={y} stroke="var(--nb-border)" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" />
              ))}

              {/* Y-axis labels */}
              {[["100", 243], ["75", 203], ["50", 163], ["25", 123], ["0", 83]].map(([val, y]) => (
                <text key={val} x="50" y={y} textAnchor="end" fill="#9CA3AF" fontSize="7" fontFamily="monospace">{val}</text>
              ))}

              {/* Bars — 5 agents */}
              {/* Agent 1 */}
              <rect x="84" y="110" width="36" height="130" rx="4" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" className="an-bar1" />
              {/* Agent 2 */}
              <rect x="148" y="130" width="36" height="110" rx="4" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" className="an-bar2" />
              {/* Agent 3 */}
              <rect x="212" y="90" width="36" height="150" rx="4" fill="var(--nb-amber)" stroke="var(--nb-border)" strokeWidth="1.5" className="an-bar3" />
              {/* Agent 4 */}
              <rect x="276" y="150" width="36" height="90" rx="4" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" className="an-bar4" />
              {/* Agent 5 */}
              <rect x="340" y="100" width="36" height="140" rx="4" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" className="an-bar5" />

              {/* Bar value labels */}
              <text x="102" y="105" textAnchor="middle" fill="var(--nb-invert)" fontSize="7.5" fontFamily="monospace" fontWeight="700" className="an-cnt">87</text>
              <text x="166" y="125" textAnchor="middle" fill="var(--nb-invert)" fontSize="7.5" fontFamily="monospace" fontWeight="700" className="an-cnt">73</text>
              <text x="230" y="85" textAnchor="middle" fill="var(--nb-invert)" fontSize="7.5" fontFamily="monospace" fontWeight="700" className="an-cnt" style={{ animationDelay: "0.2s" }}>100</text>
              <text x="294" y="145" textAnchor="middle" fill="var(--nb-invert)" fontSize="7.5" fontFamily="monospace" fontWeight="700" className="an-cnt">60</text>
              <text x="358" y="95" textAnchor="middle" fill="var(--nb-invert)" fontSize="7.5" fontFamily="monospace" fontWeight="700" className="an-cnt">93</text>

              {/* X-axis labels */}
              <text x="102" y="258" textAnchor="middle" fill="#6B7280" fontSize="7" fontFamily="monospace">Agent A</text>
              <text x="166" y="258" textAnchor="middle" fill="#6B7280" fontSize="7" fontFamily="monospace">Agent B</text>
              <text x="230" y="258" textAnchor="middle" fill="var(--nb-amber)" fontSize="7" fontFamily="monospace" fontWeight="700">Agent C</text>
              <text x="294" y="258" textAnchor="middle" fill="#6B7280" fontSize="7" fontFamily="monospace">Agent D</text>
              <text x="358" y="258" textAnchor="middle" fill="#6B7280" fontSize="7" fontFamily="monospace">Agent E</text>

              {/* X axis line */}
              <line x1="60" y1="244" x2="450" y2="244" stroke="var(--nb-border)" strokeWidth="1.5" />
              {/* Y axis line */}
              <line x1="60" y1="60" x2="60" y2="244" stroke="var(--nb-border)" strokeWidth="1.5" />

              {/* CSAT trend line overlay */}
              <polyline
                points="102,180 166,190 230,165 294,200 358,172"
                stroke="var(--nb-orange)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="an-line"
              />
              {/* CSAT dots */}
              {[[102,180],[166,190],[230,165],[294,200],[358,172]].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="var(--nb-orange)" stroke="white" strokeWidth="1.5" />
              ))}

              {/* Legend */}
              <rect x="30" y="278" width="10" height="10" rx="2" fill="var(--nb-teal)" />
              <text x="44" y="288" fill="#6B7280" fontSize="7.5" fontFamily="monospace">Resolved tickets</text>
              <rect x="140" y="278" width="10" height="3" rx="1" fill="var(--nb-orange)" />
              <text x="154" y="288" fill="#6B7280" fontSize="7.5" fontFamily="monospace">CSAT trend</text>

              {/* Stat chips */}
              <g className="an-fl">
                <rect x="30" y="306" width="118" height="34" rx="8" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="89" y="320" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="700">Avg Resolution</text>
                <text x="89" y="333" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8.5" fontFamily="monospace">4.2 hrs</text>
              </g>
              <g className="an-fl2">
                <rect x="162" y="306" width="118" height="34" rx="8" fill="var(--nb-amber)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="221" y="320" textAnchor="middle" fill="var(--nb-invert)" fontSize="8" fontFamily="monospace" fontWeight="700">CSAT Average</text>
                <text x="221" y="333" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">4.7 / 5.0</text>
              </g>
              <g className="an-fl3">
                <rect x="294" y="306" width="130" height="34" rx="8" fill="var(--nb-invert)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="359" y="320" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="700">SLA Compliance</text>
                <text x="359" y="333" textAnchor="middle" fill="var(--nb-teal)" fontSize="8.5" fontFamily="monospace">96.2%</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="section--surface">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} className="nb-card anim-fade-up" style={{ padding: "1.75rem 1.5rem", textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-bricolage)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                    fontWeight: 800,
                    color: "var(--nb-teal)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.value}
                </p>
                <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.78rem", color: "#6B7280" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPORT CARDS ─────────────────────────────────────── */}
      <section id="reports" className="section">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Report Suite</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              Five reports, one dashboard
            </h2>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", maxWidth: "52ch", lineHeight: 1.65 }}>
              Every report is filterable by date range, agent, team, and inbox. Export any report as CSV or schedule PDF digests.
            </p>
          </div>
          <div className="cards-3">
            {reportCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`nb-card anim-fade-up delay-${Math.min((i % 3 + 1) * 100, 300)}`}
                  style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-bricolage)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--nb-invert)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{card.desc}</p>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {card.metrics.map((m) => (
                      <li key={m} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <CheckCircle2 size={13} color="var(--nb-teal)" style={{ flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.78rem", color: "#4B5563" }}>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AGENT METRICS ────────────────────────────────────── */}
      <section className="section--surface">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Agent Performance</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              9 metrics per agent, tracked automatically
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {agentMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`nb-card anim-fade-up delay-${Math.min((i % 4 + 1) * 100, 400)}`}
                style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "flex-start", gap: "0.875rem" }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    background: "rgba(14,165,160,0.1)",
                    border: "1.5px solid var(--nb-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--nb-teal)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "var(--nb-invert)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {metric.label}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.55 }}>{metric.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLA COMPLIANCE ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div className="anim-slide-l">
              <span className="section-label">SLA Compliance</span>
              <h2
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--nb-invert)",
                  margin: "0.5rem 0 1rem",
                }}
              >
                Never miss an SLA commitment again
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Define SLA policies by priority tier and inbox. HaloDesk tracks every conversation against its
                applicable policy, surfaces at-risk tickets in real time, and logs every breach with full attribution.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {["Set first-response & resolution targets per priority", "Real-time at-risk conversation alerts", "Historical compliance trends by team", "SLA breach audit log with agent attribution", "Export violations for client SLA reporting"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <CheckCircle2 size={15} color="var(--nb-teal)" />
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.82rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="anim-slide-r" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {slaFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="nb-card"
                    style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}
                  >
                    <div className="feature-icon" style={{ flexShrink: 0 }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-bricolage)",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--nb-invert)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {feat.title}
                      </h3>
                      <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.6 }}>{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTERS & EXPORTS ────────────────────────────────── */}
      <section className="section--surface">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div className="anim-slide-l">
              <span className="section-label">Filtering & Exports</span>
              <h2
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--nb-invert)",
                  margin: "0.5rem 0 1rem",
                }}
              >
                Slice the data any way you need
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Every report in HaloDesk supports multi-dimensional filtering. Combine dimensions to answer precise
                operational questions — and export the result in one click.
              </p>
              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 1rem",
                    background: "white",
                    border: "2px solid var(--nb-border)",
                    borderRadius: 8,
                    boxShadow: "var(--shadow-brutal-sm)",
                  }}
                >
                  <Download size={16} color="var(--nb-teal)" />
                  <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.82rem", color: "var(--nb-invert)", fontWeight: 600 }}>Export CSV</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 1rem",
                    background: "white",
                    border: "2px solid var(--nb-border)",
                    borderRadius: 8,
                    boxShadow: "var(--shadow-brutal-sm)",
                  }}
                >
                  <Download size={16} color="var(--nb-orange)" />
                  <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.82rem", color: "var(--nb-invert)", fontWeight: 600 }}>Export PDF</span>
                </div>
              </div>
            </div>
            <div className="anim-slide-r">
              <div
                className="nb-card"
                style={{ padding: "1.75rem", background: "var(--nb-invert)", border: "2px solid var(--nb-border)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <Filter size={14} color="var(--nb-teal)" />
                  <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.72rem", color: "var(--nb-teal)", letterSpacing: "0.05em" }}>AVAILABLE FILTERS</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {filterOptions.map((opt, i) => (
                    <div
                      key={opt}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.55rem 0",
                        borderBottom: i < filterOptions.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}>{opt}</span>
                      <CheckCircle2 size={13} color="var(--nb-teal)" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ color: "var(--nb-teal)" }}>
            Data-driven support starts here
          </span>
          <h2
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "white",
              margin: "1rem 0 1.25rem",
            }}
          >
            See your team&apos;s real{" "}
            <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
              performance data
            </em>
          </h2>
          <p style={{ color: "#9CA3AF", maxWidth: "44ch", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Book a demo and we&apos;ll walk through the analytics dashboard with a live data set matched to your support team&apos;s structure.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-invert" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Book a Demo <ArrowRight size={16} />
            </Link>
            <Link href="/features" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              All Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
