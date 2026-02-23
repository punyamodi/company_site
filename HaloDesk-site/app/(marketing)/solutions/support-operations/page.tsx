import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  Filter,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support Operations — HaloDesk Solutions",
  description:
    "Ops-level control over your support floor. SLA automation, agent shifts, queue management, and workflow orchestration for high-volume support teams.",
};

const OPERATIONAL_LEVERS = [
  {
    icon: Calendar,
    title: "Agent Shift Scheduling",
    desc: "Define shift windows per agent, per day, with full timezone support. Conversations route only to agents currently on shift — coverage gaps never become SLA breaches.",
    href: "/features/agent-shifts",
    accent: "#0EA5A0",
    tags: ["Per-Agent Scheduling", "Timezone Support", "Shift-Based Routing"],
  },
  {
    icon: Zap,
    title: "Workflow Automation Engine",
    desc: "Build rule-based workflows that trigger on conversation events: auto-assign by skill, escalate on SLA risk, send handoff messages, and update priority in real time.",
    href: "/features/automation",
    accent: "#6366F1",
    tags: ["Rule Builder", "Auto-Assignment", "Escalation Triggers"],
  },
  {
    icon: TrendingUp,
    title: "SLA Management",
    desc: "Define SLA targets per inbox. HaloDesk tracks first-response and resolution timers, fires breach alerts, and generates compliance reports for ops reviews.",
    href: "/enterprise/sla",
    accent: "#F59E0B",
    tags: ["Per-Inbox SLAs", "Breach Alerts", "Compliance Reports"],
  },
];

const FEATURES = [
  {
    icon: Filter,
    title: "Queue Automation",
    desc: "Incoming conversations are tagged, routed, and assigned automatically based on content, language, priority, and customer tier — no manual queue management.",
  },
  {
    icon: TrendingUp,
    title: "SLA Monitoring",
    desc: "Real-time SLA timers per conversation. Breach warnings fire before the window closes, giving agents time to respond and ops visibility to intervene.",
  },
  {
    icon: Calendar,
    title: "Agent Shifts",
    desc: "Structured scheduling with timezone support ensures routing only reaches agents who are actively on shift — keeping SLAs intact 24/7.",
  },
  {
    icon: Zap,
    title: "Conversation Assignment Rules",
    desc: "Define rule priority chains: route by inbox, then by content keyword, then by agent skill tag. Complex logic built without code.",
  },
  {
    icon: ArrowRight,
    title: "Escalation Paths",
    desc: "Multi-step escalation rules trigger when thresholds are crossed: sentiment, wait time, or SLA risk. Escalations fire to the right team automatically.",
  },
  {
    icon: BarChart3,
    title: "Reporting for Ops",
    desc: "First response time, resolution rate, SLA compliance, and agent utilization — exportable reports for weekly ops reviews and executive dashboards.",
  },
];

export default function SupportOperationsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ borderBottom: "2px solid var(--nb-border)", paddingTop: 96, paddingBottom: 80 }}
      >
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <div className="eyebrow anim-fade-up">
              <Users size={12} />
              Support Operations
            </div>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05, marginBottom: 24, letterSpacing: "-0.04em" }}
            >
              Ops-level control over{" "}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)", fontWeight: 700 }}>
                your support floor
              </em>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.125rem", color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}
            >
              Give your ops team full visibility into queue health, SLA compliance,
              agent utilization, and shift coverage \u2014 all wired into real-time
              automation, not dashboards you check too late.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                All Solutions <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 OPERATIONAL LEVERS ─────────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">Operational Levers</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 16 }}>
            Three levers that move{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              the whole floor
            </em>
          </h2>
          <p style={{ color: "var(--nb-ink-muted)", maxWidth: 600, marginBottom: 48, lineHeight: 1.7 }}>
            Agent shifts, workflow automation, and SLA management aren\u2019t separate
            tools in HaloDesk \u2014 they\u2019re three levers in the same engine, wired together.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {OPERATIONAL_LEVERS.map((lever, i) => {
              const Icon = lever.icon;
              return (
                <div
                  key={lever.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 32, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 28, alignItems: "center", animationDelay: `${i * 100}ms` }}
                >
                  <div className="feature-icon" style={{ background: lever.accent, width: 52, height: 52 }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 800, marginBottom: 8 }}>{lever.title}</h3>
                    <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: "0 0 12px" }}>
                      {lever.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {lever.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.6875rem",
                            fontWeight: 700,
                            padding: "3px 8px",
                            border: "1.5px solid var(--nb-border)",
                            borderRadius: 2,
                            background: "var(--nb-bg)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={lever.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: lever.accent,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Deep-dive <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── KPI METRICS SVG DASHBOARD ────────────────────────────── */}
      <section className="section" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="section-label">Ops Metrics</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
                The four numbers{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
                  ops leaders watch
                </em>
              </h2>
              <p style={{ color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                HaloDesk surfaces queue wait time, agent utilization, SLA compliance,
                and resolution rate in a single real-time view \u2014 so ops teams spend
                less time in spreadsheets and more time improving performance.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Queue Wait Time", value: "1m 42s avg", color: "#0EA5A0" },
                  { label: "Agent Utilization", value: "84%", color: "#6366F1" },
                  { label: "First Response SLA %", value: "98.7%", color: "#059669" },
                  { label: "Resolution Rate", value: "94.2%", color: "#F59E0B" },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 16px",
                      border: "2px solid var(--nb-border)",
                      borderRadius: 4,
                      background: "var(--nb-surface)",
                    }}
                  >
                    <span style={{ fontSize: "0.9375rem", fontWeight: 700 }}>{kpi.label}</span>
                    <span style={{ fontSize: "1.125rem", fontWeight: 900, color: kpi.color, fontFamily: "var(--font-mono)" }}>
                      {kpi.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SVG dashboard mockup */}
            <div className="anim-fade-up delay-200">
              <svg
                viewBox="0 0 440 420"
                fill="none"
                style={{ width: "100%", maxWidth: 440, filter: "drop-shadow(6px 6px 0px #0A0A0A)" }}
              >
                <rect x="0" y="0" width="440" height="420" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
                <rect x="0" y="0" width="440" height="44" rx="4" fill="#0A1628" stroke="#0A0A0A" strokeWidth="2" />
                <circle cx="16" cy="16" r="5" fill="#ff5f57" />
                <circle cx="32" cy="16" r="5" fill="#febc2e" />
                <circle cx="48" cy="16" r="5" fill="#28c840" />
                <text x="68" y="27" fill="#FAF8F3" fontSize="11" fontWeight="700" fontFamily="sans-serif">Operations Dashboard \u00b7 Live</text>
                <circle cx="400" cy="22" r="6" fill="#0EA5A0">
                  <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* KPI tiles */}
                {[
                  { x: 16,  label: "Queue Wait",      value: "1m 42s", color: "#0EA5A0",  delta: "\u2193 61%" },
                  { x: 122, label: "Utilization",     value: "84%",    color: "#6366F1",  delta: "\u2191 12%" },
                  { x: 228, label: "SLA Pass Rate",   value: "98.7%",  color: "#059669",  delta: "\u2191 22 pts" },
                  { x: 334, label: "Resolution",      value: "94.2%",  color: "#F59E0B",  delta: "\u2191 18 pts" },
                ].map((tile) => (
                  <g key={tile.label}>
                    <rect x={tile.x} y="56" width="92" height="64" rx="3" fill="#F0EDE4" stroke="#C8C3B5" strokeWidth="1" />
                    <text x={tile.x + 10} y="74" fill="#7A746A" fontSize="8" fontFamily="sans-serif">{tile.label}</text>
                    <text x={tile.x + 10} y="95" fill={tile.color} fontSize="15" fontWeight="800" fontFamily="sans-serif">{tile.value}</text>
                    <text x={tile.x + 10} y="112" fill={tile.color} fontSize="8" fontWeight="700" fontFamily="sans-serif">{tile.delta}</text>
                  </g>
                ))}
                {/* Agent bar chart */}
                <text x="16" y="148" fill="#4A4540" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">RESOLUTION RATE BY AGENT</text>
                {[
                  { x: 24,  h: 110, name: "Sarah C." },
                  { x: 84,  h: 135, name: "James T." },
                  { x: 144, h: 90,  name: "Min L."   },
                  { x: 204, h: 120, name: "Ana P."   },
                  { x: 264, h: 145, name: "Drew K."  },
                  { x: 324, h: 100, name: "Olu M."   },
                  { x: 384, h: 125, name: "Pia N."   },
                ].map((bar, i) => (
                  <g key={bar.name}>
                    <rect x={bar.x} y={300 - bar.h} width="40" height={bar.h} rx="2" fill="#0EA5A0" opacity="0.85">
                      <animate attributeName="height" from="0" to={String(bar.h)} dur="1s" begin={`${i * 0.1}s`} fill="freeze" />
                      <animate attributeName="y" from="300" to={String(300 - bar.h)} dur="1s" begin={`${i * 0.1}s`} fill="freeze" />
                    </rect>
                    <text x={bar.x + 20} y="316" textAnchor="middle" fill="#4A4540" fontSize="7.5" fontFamily="sans-serif">{bar.name}</text>
                  </g>
                ))}
                <line x1="16" y1="300" x2="432" y2="300" stroke="#C8C3B5" strokeWidth="1" />
                {/* SLA bar */}
                <rect x="16" y="332" width="408" height="24" rx="3" fill="#E6E1D4" />
                <rect x="16" y="332" width="402" height="24" rx="3" fill="#059669">
                  <animate attributeName="width" from="0" to="402" dur="1.5s" fill="freeze" />
                </rect>
                <text x="26" y="348" fill="#fff" fontSize="9" fontWeight="800" fontFamily="sans-serif">SLA Compliance: 98.7%</text>
                {/* Online agents */}
                <text x="16" y="378" fill="#4A4540" fontSize="8" fontWeight="700" fontFamily="sans-serif">AGENTS ONLINE</text>
                {[
                  { x: 16,  name: "Sarah", status: "#059669" },
                  { x: 96,  name: "James", status: "#059669" },
                  { x: 176, name: "Min",   status: "#F59E0B" },
                  { x: 256, name: "Ana",   status: "#059669" },
                  { x: 336, name: "Drew",  status: "#059669" },
                ].map((a) => (
                  <g key={a.name}>
                    <circle cx={a.x + 6} cy="397" r="5" fill={a.status} />
                    <text x={a.x + 16} y="401" fill="#4A4540" fontSize="8" fontFamily="sans-serif">{a.name}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">Platform Features</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 48 }}>
            Built for{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              ops at scale
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
            <TrendingUp size={12} />
            Ops Efficiency
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--nb-bg)", marginBottom: 20 }}
          >
            Your support floor,{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              under control
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{ color: "rgba(250,248,243,0.7)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7, fontSize: "1.0625rem" }}
          >
            Shift scheduling, SLA enforcement, and workflow automation in one platform.
            No duct tape. No spreadsheets. Operations the way it should work.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-invert">
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link href="/features/agent-shifts" className="btn-secondary">
              Explore Agent Shifts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
