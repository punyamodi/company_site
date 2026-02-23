import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Inbox,
  Bot,
  Zap,
  BarChart2,
  BookOpen,
  Send,
  Brain,
  TrendingUp,
  Clock,
  Tag,
  Database,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — HaloDesk Customer Support Platform",
  description:
    "Explore all 11 HaloDesk features: omnichannel inbox, AI automation, advanced analytics, knowledge base, campaigns, and enterprise compliance tools.",
};

type Feature = {
  num: string;
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  delay: string;
};

const coreFeatures: Feature[] = [
  {
    num: "01",
    title: "Omnichannel Inbox",
    href: "/features/omnichannel",
    icon: Inbox,
    description:
      "All 11 channels in one intelligent workspace — live chat, email, WhatsApp, Instagram, and more unified into a single contact timeline.",
    delay: "delay-100",
  },
  {
    num: "02",
    title: "Captain AI Agent",
    href: "/features/ai-captain",
    icon: Bot,
    description:
      "Autonomous AI that classifies, responds, and routes conversations with 94% accuracy, learning from every agent correction over time.",
    delay: "delay-200",
  },
  {
    num: "03",
    title: "Workflow Automation",
    href: "/features/automation",
    icon: Zap,
    description:
      "If-this-then-that automation across 20+ trigger conditions and 15+ actions — no code required, macros, and auto-tagging included.",
    delay: "delay-300",
  },
  {
    num: "04",
    title: "Advanced Analytics",
    href: "/features/analytics",
    icon: BarChart2,
    description:
      "Agent performance, SLA compliance, response trends, and CSAT dashboards with date-range and inbox filtering plus downloadable reports.",
    delay: "delay-400",
  },
  {
    num: "05",
    title: "Knowledge Base",
    href: "/features/knowledge-base",
    icon: BookOpen,
    description:
      "Built-in help center portal with article management, full-text search, and self-service for customers 24/7 across all channels.",
    delay: "delay-500",
  },
  {
    num: "06",
    title: "Campaigns",
    href: "/features/campaigns",
    icon: Send,
    description:
      "Proactive outreach and scheduled message delivery to customer segments — triggered by behavior or calendar-based schedules.",
    delay: "delay-600",
  },
];

const enterpriseFeatures: Feature[] = [
  {
    num: "07",
    title: "Sentiment Analysis",
    href: "/features/sentiment",
    icon: Brain,
    description:
      "Real-time NLP scoring on every message with configurable escalation triggers when customer sentiment turns negative.",
    delay: "delay-100",
  },
  {
    num: "08",
    title: "Customer Health Scores",
    href: "/features/health-scores",
    icon: TrendingUp,
    description:
      "Predictive churn detection with weighted scoring across engagement, resolution time, and sentiment signals.",
    delay: "delay-200",
  },
  {
    num: "09",
    title: "Agent Shift Management",
    href: "/features/agent-shifts",
    icon: Clock,
    description:
      "Schedule-based availability with timezone support, auto-away routing, and workload balancing across shifts.",
    delay: "delay-300",
  },
  {
    num: "10",
    title: "Auto-Tagging",
    href: "/features/automation",
    icon: Tag,
    description:
      "AI-powered conversation categorization across 14 categories: billing, support, technical issues, feature requests, and more.",
    delay: "delay-400",
  },
  {
    num: "11",
    title: "Data Governance",
    href: "/enterprise/data-governance",
    icon: Database,
    description:
      "Retention policies, GDPR exports, conversation anonymization, and full audit logs for compliance-first organizations.",
    delay: "delay-500",
  },
];

const comparison: [string, boolean, boolean][] = [
  ["Omnichannel Inbox (11 channels)", true, true],
  ["Captain AI Agent", true, true],
  ["Workflow Automation", true, true],
  ["Advanced Analytics", true, true],
  ["Knowledge Base", true, true],
  ["Campaigns", true, true],
  ["Sentiment Analysis", false, true],
  ["Customer Health Scores", false, true],
  ["Agent Shift Management", false, true],
  ["Auto-Tagging (AI)", false, true],
  ["Data Governance & GDPR", false, true],
];

export default function FeaturesPage() {
  return (
    <>
      <style>{`
        @keyframes feat-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        @keyframes feat-dash {
          to { stroke-dashoffset: -24; }
        }
        @keyframes feat-pulse-ring {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.28; }
        }
        @keyframes feat-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .ff1 { animation: feat-float 3.2s ease-in-out infinite; }
        .ff2 { animation: feat-float 3.2s ease-in-out infinite 1.05s; }
        .ff3 { animation: feat-float 3.2s ease-in-out infinite 2.1s; }
        .fd  { stroke-dasharray: 8 5; animation: feat-dash 1.3s linear infinite; }
        .fd2 { animation-delay: 0.45s; }
        .fd3 { animation-delay: 0.9s; }
        .fd4 { animation-delay: 1.35s; }
        .fpr { animation: feat-pulse-ring 2.2s ease-in-out infinite; }
        .fpr2 { animation: feat-pulse-ring 2.2s ease-in-out infinite 0.7s; }
        .fspin { transform-origin: 240px 185px; animation: feat-spin-slow 18s linear infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ paddingTop: "5rem", paddingBottom: "4rem", overflow: "hidden", position: "relative" }}
      >
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
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
            <span className="eyebrow">Platform Features</span>
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
              Everything your team needs to{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
                delight customers
              </em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#4B5563", maxWidth: "40ch", lineHeight: 1.75, marginBottom: "2rem" }}>
              11 powerful features spanning omnichannel messaging, AI automation, analytics, and enterprise compliance —
              all in one unified platform.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Book a Demo <ArrowRight size={16} />
              </Link>
              <a href="#core" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Explore Features
              </a>
            </div>
          </div>

          {/* Hero SVG — Conversation routing flow */}
          <div className="anim-slide-r">
            <svg
              viewBox="0 0 480 370"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 480, display: "block" }}
            >
              <rect x="10" y="10" width="460" height="350" rx="16" fill="var(--nb-surface)" stroke="var(--nb-border)" strokeWidth="2.5" />
              {/* Pulse rings */}
              <circle cx="240" cy="185" r="70" fill="var(--nb-teal)" className="fpr" />
              <circle cx="240" cy="185" r="52" fill="var(--nb-teal)" className="fpr2" style={{ opacity: 0.18 }} />
              {/* Orbit ring */}
              <circle cx="240" cy="185" r="62" stroke="var(--nb-teal)" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" className="fspin" />
              {/* Central inbox */}
              <rect x="210" y="158" width="60" height="54" rx="10" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="2" />
              <text x="240" y="181" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="700">INBOX</text>
              <text x="240" y="196" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="7" fontFamily="monospace">11 channels</text>
              {/* Left channel bubbles */}
              <g className="ff1">
                <rect x="28" y="58" width="112" height="34" rx="8" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="84" y="80" textAnchor="middle" fill="var(--nb-invert)" fontSize="9" fontFamily="monospace">💬 Live Chat</text>
              </g>
              <g className="ff2">
                <rect x="28" y="152" width="112" height="34" rx="8" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="84" y="174" textAnchor="middle" fill="var(--nb-invert)" fontSize="9" fontFamily="monospace">📧 Email</text>
              </g>
              <g className="ff3">
                <rect x="28" y="246" width="112" height="34" rx="8" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="84" y="268" textAnchor="middle" fill="var(--nb-invert)" fontSize="9" fontFamily="monospace">📱 WhatsApp</text>
              </g>
              {/* Lines: channels → inbox */}
              <line x1="140" y1="75" x2="210" y2="168" stroke="var(--nb-teal)" strokeWidth="1.5" className="fd" />
              <line x1="140" y1="169" x2="210" y2="185" stroke="var(--nb-teal)" strokeWidth="1.5" className="fd fd2" />
              <line x1="140" y1="263" x2="210" y2="200" stroke="var(--nb-teal)" strokeWidth="1.5" className="fd fd3" />
              {/* Right output bubbles */}
              <g className="ff2">
                <rect x="340" y="78" width="112" height="40" rx="8" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="396" y="95" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="600">✓ AI Resolved</text>
                <text x="396" y="109" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="7.5" fontFamily="monospace">94% accuracy</text>
              </g>
              <g className="ff1">
                <rect x="340" y="242" width="112" height="40" rx="8" fill="var(--nb-orange)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="396" y="259" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="600">→ Routed Agent</text>
                <text x="396" y="273" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="7.5" fontFamily="monospace">Best available</text>
              </g>
              {/* Lines: inbox → output */}
              <line x1="270" y1="168" x2="340" y2="98" stroke="var(--nb-invert)" strokeWidth="1.5" className="fd fd2" />
              <line x1="270" y1="200" x2="340" y2="262" stroke="var(--nb-invert)" strokeWidth="1.5" className="fd fd4" />
              {/* Stat chip */}
              <rect x="185" y="228" width="110" height="24" rx="6" fill="var(--nb-amber)" stroke="var(--nb-border)" strokeWidth="1.5" />
              <text x="240" y="244" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace" fontWeight="700">⚡ 94% First-Contact</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES ────────────────────────────────────── */}
      <section id="core" className="section--surface">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Core Plan</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              Included in every plan
            </h2>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", maxWidth: "52ch", lineHeight: 1.65 }}>
              Six foundational capabilities that power modern customer support at any scale.
            </p>
          </div>
          <div className="cards-3">
            {coreFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <Link
                  key={feat.num}
                  href={feat.href}
                  className={`nb-card anim-fade-up ${feat.delay}`}
                  style={{ textDecoration: "none", display: "flex", flexDirection: "column", padding: "1.75rem", gap: "0.75rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="feature-icon">
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        background: "var(--nb-teal)",
                        color: "white",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "4px",
                        border: "1.5px solid var(--nb-border)",
                        letterSpacing: "0.07em",
                      }}
                    >
                      CORE
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.68rem", color: "var(--nb-teal)", marginBottom: "0.3rem" }}>
                      {feat.num}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-bricolage)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--nb-invert)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{feat.description}</p>
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "var(--nb-teal)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    Learn more <ArrowRight size={13} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE FEATURES ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ background: "var(--nb-orange)", color: "white" }}>
              Enterprise Plan
            </span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              Advanced capabilities for scale
            </h2>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", maxWidth: "52ch", lineHeight: 1.65 }}>
              Predictive intelligence, compliance tooling, and operational control for high-volume teams.
            </p>
          </div>
          <div className="cards-3">
            {enterpriseFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <Link
                  key={feat.num}
                  href={feat.href}
                  className={`nb-card anim-fade-up ${feat.delay}`}
                  style={{ textDecoration: "none", display: "flex", flexDirection: "column", padding: "1.75rem", gap: "0.75rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="feature-icon" style={{ background: "rgba(255,90,54,0.12)", color: "var(--nb-orange)" }}>
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        background: "var(--nb-orange)",
                        color: "white",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "4px",
                        border: "1.5px solid var(--nb-border)",
                        letterSpacing: "0.07em",
                      }}
                    >
                      ENTERPRISE
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.68rem", color: "var(--nb-orange)", marginBottom: "0.3rem" }}>
                      {feat.num}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-bricolage)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--nb-invert)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{feat.description}</p>
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "var(--nb-orange)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    Learn more <ArrowRight size={13} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
      <section className="section--surface">
        <div className="container">
          <div className="anim-fade-up" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
              }}
            >
              Feature comparison at a glance
            </h2>
            <p style={{ color: "#6B7280", marginTop: "0.5rem" }}>Every plan includes the core six. Upgrade for AI intelligence and compliance.</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "2px solid var(--nb-border)",
                background: "white",
                boxShadow: "var(--shadow-brutal)",
              }}
            >
              <thead>
                <tr style={{ background: "var(--nb-invert)" }}>
                  <th
                    style={{
                      padding: "1rem 1.5rem",
                      textAlign: "left",
                      color: "white",
                      fontFamily: "var(--font-bricolage)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    Feature
                  </th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center", color: "white", fontFamily: "var(--font-jetbrains)", fontSize: "0.8rem" }}>
                    Core
                  </th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center", color: "white", fontFamily: "var(--font-jetbrains)", fontSize: "0.8rem" }}>
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([name, core, ent], i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--nb-border)", background: i % 2 === 0 ? "white" : "var(--nb-surface)" }}>
                    <td style={{ padding: "0.875rem 1.5rem", fontFamily: "var(--font-jetbrains)", fontSize: "0.84rem", color: "var(--nb-invert)" }}>
                      {name}
                    </td>
                    <td style={{ padding: "0.875rem 1.5rem", textAlign: "center" }}>
                      {core ? (
                        <CheckCircle2 size={18} color="var(--nb-teal)" />
                      ) : (
                        <span style={{ color: "#D1D5DB", fontFamily: "var(--font-jetbrains)" }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: "0.875rem 1.5rem", textAlign: "center" }}>
                      {ent ? (
                        <CheckCircle2 size={18} color="var(--nb-teal)" />
                      ) : (
                        <span style={{ color: "#D1D5DB", fontFamily: "var(--font-jetbrains)" }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ color: "var(--nb-teal)" }}>
            Ready to get started?
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
            See every feature{" "}
            <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>live</em>
          </h2>
          <p style={{ color: "#9CA3AF", maxWidth: "44ch", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Book a personalized demo and we&apos;ll walk through every feature relevant to your team&apos;s workflow and customer journey.
          </p>
          <Link href="/contact" className="btn-invert" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Book a Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
