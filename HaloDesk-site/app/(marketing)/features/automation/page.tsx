import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Bot,
  CheckCircle2,
  Clock,
  FileText,
  GitBranch,
  Mail,
  MessageCircle,
  RefreshCw,
  Send,
  Tag,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Workflow Automation — HaloDesk",
  description:
    "Automate your support workflows with 20+ trigger conditions and 15+ actions. Build if-this-then-that rules, macros, and scheduled messages without writing a single line of code.",
};

const triggers = [
  "Conversation content (keyword / phrase match)",
  "Email subject line",
  "Sender country code",
  "Conversation status change",
  "Message type (incoming / outgoing)",
  "Browser language of customer",
  "Assigned agent ID",
  "Assigned team ID",
  "Referrer URL",
  "Customer city",
  "Company name",
  "Inbox ID",
  "Mail subject",
  "Phone number match",
  "Conversation priority",
  "Detected conversation language",
  "Conversation labels",
  "Customer account type",
  "CSAT score received",
  "Time since last message",
];

type ActionItem = { icon: LucideIcon; title: string; desc: string };

const actions: ActionItem[] = [
  { icon: Send, title: "Send Message", desc: "Auto-send a canned response, greeting, or escalation message to the customer." },
  { icon: Tag, title: "Add / Remove Label", desc: "Tag conversations for segmentation, reporting, or downstream automation." },
  { icon: Mail, title: "Send Email to Team", desc: "Notify a team or supervisor via email when a critical trigger fires." },
  { icon: Users, title: "Assign Team", desc: "Route the conversation to a specific team based on any trigger condition." },
  { icon: UserCheck, title: "Assign Agent", desc: "Directly assign the conversation to a named agent or the first available." },
  { icon: Bell, title: "Send Webhook Event", desc: "Fire an HTTP webhook to any external system — CRM, PagerDuty, Slack, or your own API." },
  { icon: MessageCircle, title: "Mute Conversation", desc: "Suppress notifications for low-priority or monitoring-only conversations." },
  { icon: FileText, title: "Send Attachment", desc: "Automatically attach a file, guide, or document to the reply." },
  { icon: CheckCircle2, title: "Resolve / Reopen", desc: "Auto-resolve conversations matching completion criteria or reopen on new reply." },
  { icon: Clock, title: "Snooze Conversation", desc: "Park the conversation for a specified duration — surfaces again on timer expiry." },
  { icon: AlertTriangle, title: "Change Priority", desc: "Escalate or de-escalate conversation priority based on content or SLA triggers." },
  { icon: Mail, title: "Send Email Transcript", desc: "Email a full conversation transcript to the customer or an internal address." },
  { icon: FileText, title: "Add Private Note", desc: "Automatically insert an internal note with context for the assigned agent." },
  { icon: RefreshCw, title: "Pending Conversation", desc: "Move a conversation to Pending status while waiting for a customer reply." },
  { icon: GitBranch, title: "Change Status", desc: "Set conversation status to Open, Resolved, Pending, or Snoozed via rule." },
];

const autoTagCategories = [
  { label: "billing", color: "#0EA5A0" },
  { label: "support", color: "#0EA5A0" },
  { label: "technical_issue", color: "#DC2626" },
  { label: "feature_request", color: "#7C3AED" },
  { label: "complaint", color: "#DC2626" },
  { label: "feedback", color: "#059669" },
  { label: "inquiry", color: "#0EA5A0" },
  { label: "onboarding", color: "#059669" },
  { label: "cancellation", color: "#F59E0B" },
  { label: "refund", color: "#F59E0B" },
  { label: "bug_report", color: "#DC2626" },
  { label: "account_issue", color: "#7C3AED" },
  { label: "security", color: "#DC2626" },
  { label: "general", color: "#6B7280" },
];

type AdvancedFeature = { icon: LucideIcon; title: string; desc: string; badge?: string };

const advancedFeatures: AdvancedFeature[] = [
  {
    icon: Zap,
    title: "Macros",
    badge: "Multi-Action",
    desc: "Pre-built action sequences that agents trigger with one click. A single macro can send a message, add a label, assign a team, and change priority simultaneously.",
  },
  {
    icon: Bot,
    title: "Auto-Tagging",
    badge: "AI Powered",
    desc: "Captain classifies every conversation into one of 14 categories automatically. Tags fire in real time, enabling downstream automations and analytics segmentation.",
  },
  {
    icon: Clock,
    title: "Scheduled Messages",
    badge: "Time-Based",
    desc: "Queue outgoing messages for precise future delivery — follow-up reminders, business-hours responses, or onboarding sequences triggered at set intervals after conversation creation.",
  },
  {
    icon: GitBranch,
    title: "AND / OR Logic",
    badge: "Compound Rules",
    desc: "Combine multiple trigger conditions with AND (all must match) or OR (any must match) operators. Build compound, multi-condition rules without writing code.",
  },
];

export default function AutomationPage() {
  return (
    <>
      <style>{`
        @keyframes auto-dash {
          to { stroke-dashoffset: -20; }
        }
        @keyframes auto-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes auto-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.45; }
        }
        @keyframes auto-pulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50%       { transform: scale(1.12); opacity: 0.3; }
        }
        .atd  { stroke-dasharray: 7 4; animation: auto-dash 1.3s linear infinite; }
        .atd2 { animation-delay: 0.35s; }
        .atd3 { animation-delay: 0.7s; }
        .atd4 { animation-delay: 1.05s; }
        .atd5 { animation-delay: 1.4s; }
        .atfl  { animation: auto-float 3s ease-in-out infinite; }
        .atfl2 { animation: auto-float 3s ease-in-out infinite 1s; }
        .atfl3 { animation: auto-float 3s ease-in-out infinite 2s; }
        .atbl  { animation: auto-blink 2.5s ease-in-out infinite; }
        .atpu  { transform-origin: center; animation: auto-pulse 2.2s ease-in-out infinite; }
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
            <span className="eyebrow">Workflow Automation</span>
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
              If this, then that.{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
                At scale.
              </em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#4B5563", maxWidth: "40ch", lineHeight: 1.75, marginBottom: "2rem" }}>
              Build powerful automation rules with 20+ trigger conditions and 15+ actions. Combine AND/OR logic, run
              multi-step macros, and auto-tag conversations with AI — no engineering required.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                See it in Action <ArrowRight size={16} />
              </Link>
              <a href="#triggers" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Browse Triggers
              </a>
            </div>
          </div>

          {/* Hero SVG — Animated flowchart */}
          <div className="anim-slide-r">
            <svg
              viewBox="0 0 480 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 480, display: "block" }}
            >
              <rect x="10" y="10" width="460" height="400" rx="16" fill="var(--nb-surface)" stroke="var(--nb-border)" strokeWidth="2.5" />

              {/* TRIGGER box */}
              <g className="atfl">
                <rect x="165" y="28" width="150" height="44" rx="10" fill="var(--nb-amber)" stroke="var(--nb-border)" strokeWidth="2" />
                <text x="240" y="47" textAnchor="middle" fill="var(--nb-invert)" fontSize="9" fontFamily="monospace" fontWeight="700">⚡ TRIGGER</text>
                <text x="240" y="62" textAnchor="middle" fill="rgba(10,22,40,0.65)" fontSize="7.5" fontFamily="monospace">Conversation content</text>
              </g>

              {/* Arrow down */}
              <line x1="240" y1="72" x2="240" y2="110" stroke="var(--nb-border)" strokeWidth="1.5" className="atd" />
              <polygon points="235,108 245,108 240,116" fill="var(--nb-border)" />

              {/* IF / CONDITION diamond */}
              <polygon points="240,120 290,158 240,196 190,158" fill="white" stroke="var(--nb-border)" strokeWidth="2" />
              <text x="240" y="154" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace" fontWeight="700">IF</text>
              <text x="240" y="168" textAnchor="middle" fill="var(--nb-teal)" fontSize="7.5" fontFamily="monospace">condition met?</text>

              {/* YES arrow right */}
              <line x1="290" y1="158" x2="340" y2="158" stroke="var(--nb-teal)" strokeWidth="1.5" className="atd atd2" />
              <polygon points="338,153 348,158 338,163" fill="var(--nb-teal)" />
              <text x="314" y="150" textAnchor="middle" fill="var(--nb-teal)" fontSize="7" fontFamily="monospace" fontWeight="700">YES</text>

              {/* NO arrow down */}
              <line x1="240" y1="196" x2="240" y2="238" stroke="var(--nb-orange)" strokeWidth="1.5" className="atd atd3" />
              <polygon points="235,236 245,236 240,244" fill="var(--nb-orange)" />
              <text x="254" y="222" textAnchor="middle" fill="var(--nb-orange)" fontSize="7" fontFamily="monospace" fontWeight="700">NO</text>

              {/* AND/OR logic block */}
              <g className="atfl2">
                <rect x="350" y="136" width="102" height="44" rx="8" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="401" y="155" textAnchor="middle" fill="var(--nb-invert)" fontSize="8" fontFamily="monospace" fontWeight="700">AND / OR</text>
                <text x="401" y="170" textAnchor="middle" fill="#6B7280" fontSize="7" fontFamily="monospace">multi-condition</text>
              </g>

              {/* Arrow to actions */}
              <line x1="401" y1="180" x2="401" y2="216" stroke="var(--nb-border)" strokeWidth="1.5" className="atd atd2" />
              <polygon points="396,214 406,214 401,222" fill="var(--nb-border)" />

              {/* ACTION boxes (right column) */}
              <g className="atfl3">
                <rect x="350" y="222" width="102" height="34" rx="8" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="401" y="244" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="600">→ Assign Agent</text>
              </g>
              <line x1="401" y1="256" x2="401" y2="272" stroke="var(--nb-teal)" strokeWidth="1.5" className="atd atd4" />
              <g className="atfl">
                <rect x="350" y="272" width="102" height="34" rx="8" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="401" y="294" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="600">+ Add Label</text>
              </g>
              <line x1="401" y1="306" x2="401" y2="322" stroke="var(--nb-teal)" strokeWidth="1.5" className="atd atd5" />
              <g className="atfl2">
                <rect x="350" y="322" width="102" height="34" rx="8" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="401" y="344" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="600">✓ Resolve</text>
              </g>

              {/* SKIP / pass-through box (bottom center) */}
              <g className="atfl">
                <rect x="166" y="244" width="148" height="40" rx="8" fill="var(--nb-surface)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="240" y="260" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">No action</text>
                <text x="240" y="276" textAnchor="middle" fill="#9CA3AF" fontSize="7.5" fontFamily="monospace">Continue to next rule</text>
              </g>

              {/* Badge: 20+ conditions */}
              <rect x="28" y="140" width="112" height="36" rx="8" fill="var(--nb-invert)" stroke="var(--nb-border)" strokeWidth="1.5" />
              <text x="84" y="155" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="700">20+ Conditions</text>
              <text x="84" y="169" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">trigger types</text>

              {/* Badge: 15+ actions */}
              <rect x="28" y="194" width="112" height="36" rx="8" fill="var(--nb-invert)" stroke="var(--nb-border)" strokeWidth="1.5" />
              <text x="84" y="209" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="700">15+ Actions</text>
              <text x="84" y="223" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">per rule</text>

              {/* Macro badge bottom */}
              <rect x="28" y="300" width="112" height="60" rx="8" fill="var(--nb-orange)" stroke="var(--nb-border)" strokeWidth="1.5" />
              <text x="84" y="322" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="700">⚡ Macros</text>
              <text x="84" y="337" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="monospace">Multi-action</text>
              <text x="84" y="351" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="monospace">sequences</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── TRIGGERS ─────────────────────────────────────────── */}
      <section id="triggers" className="section--surface">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Trigger Conditions</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              20+ conditions to trigger any rule
            </h2>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", maxWidth: "52ch", lineHeight: 1.65 }}>
              Match on virtually any attribute of a conversation, customer, or message. Combine with AND/OR logic for precision targeting.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {triggers.map((trigger, i) => (
              <div
                key={trigger}
                className={`anim-fade-up delay-${Math.min(Math.floor(i / 4 + 1) * 100, 500)}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.875rem 1rem",
                  background: "white",
                  border: "1.5px solid var(--nb-border)",
                  borderRadius: 8,
                  boxShadow: "var(--shadow-brutal-sm)",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--nb-teal)",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.8rem", color: "#374151" }}>{trigger}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIONS ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Rule Actions</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              15+ actions per rule
            </h2>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", maxWidth: "52ch", lineHeight: 1.65 }}>
              Every action executes immediately when triggers match. Chain multiple actions in a single rule to build sophisticated workflows.
            </p>
          </div>
          <div className="cards-3">
            {actions.map((action, i) => {
              const Icon = action.icon;
              return (
                <div
                  key={action.title}
                  className={`nb-card anim-fade-up delay-${Math.min((i % 6 + 1) * 100, 600)}`}
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
                      {action.title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.6 }}>{action.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AUTO-TAGGING ─────────────────────────────────────── */}
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
              <span className="section-label">AI Auto-Tagging</span>
              <h2
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--nb-invert)",
                  margin: "0.5rem 0 1rem",
                }}
              >
                14 categories, tagged automatically
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Captain classifies every inbound conversation into one of 14 intent categories in real time — no
                manual tagging required. Auto-tags unlock downstream automations, routing rules, and analytics
                segmentation out of the box.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {["Tags applied within 300ms of first message", "Category confidence scores exposed via API", "Custom categories on Enterprise plan", "Tags trigger automation rules automatically"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <CheckCircle2 size={15} color="var(--nb-teal)" />
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.82rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="anim-slide-r">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                }}
              >
                {autoTagCategories.map((cat) => (
                  <span
                    key={cat.label}
                    className="atbl"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "0.35rem 0.8rem",
                      borderRadius: 6,
                      border: "2px solid var(--nb-border)",
                      boxShadow: "var(--shadow-brutal-sm)",
                      background: "white",
                      color: cat.color,
                      letterSpacing: "0.04em",
                      animationDelay: `${autoTagCategories.indexOf(cat) * 0.2}s`,
                    }}
                  >
                    {cat.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANCED FEATURES ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Advanced Automation</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              Beyond basic rules
            </h2>
          </div>
          <div className="cards-4">
            {advancedFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className={`nb-card anim-fade-up delay-${(i + 1) * 100}`}
                  style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="feature-icon">
                      <Icon size={20} />
                    </div>
                    {feat.badge && (
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          fontSize: "0.62rem",
                          fontWeight: 700,
                          background: "var(--nb-amber)",
                          color: "var(--nb-invert)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: 4,
                          border: "1.5px solid var(--nb-border)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--nb-invert)",
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ color: "var(--nb-teal)" }}>
            Build your first rule in minutes
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
            Automate the{" "}
            <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
              repetitive,
            </em>{" "}
            focus on the complex
          </h2>
          <p style={{ color: "#9CA3AF", maxWidth: "44ch", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            See workflow automation running live across a real support scenario. We&apos;ll tailor the demo to your team&apos;s
            highest-volume ticket categories.
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
