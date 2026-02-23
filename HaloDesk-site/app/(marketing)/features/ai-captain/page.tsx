import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  CheckCircle2,
  Globe,
  MessageCircle,
  RefreshCw,
  Shield,
  Sparkles,
  Star,
  UserCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Captain AI — HaloDesk",
  description:
    "The AI agent that resolves conversations autonomously. Trained on your knowledge base, guided by your guardrails.",
};

type Step = { num: string; title: string; desc: string };

const howItWorks: Step[] = [
  {
    num: "01",
    title: "Classify intent with confidence scoring",
    desc: "Every inbound message is run through Captain's intent classifier, which outputs an intent label and a confidence score from 0.0 to 1.0. The model is fine-tuned on your conversation history and improves with each agent correction.",
  },
  {
    num: "02",
    title: "Generate a grounded response",
    desc: "When confidence exceeds your configured threshold, Captain queries your Knowledge Base articles and drafts a response grounded in verified content — never hallucinating. Answers cite the source article and include direct links.",
  },
  {
    num: "03",
    title: "Resolve or route with full context",
    desc: "High-confidence requests are resolved automatically. Below-threshold requests are routed to the best available agent with the intent label, confidence score, conversation summary, and relevant KB articles pre-attached — eliminating ramp-up time.",
  },
];

type AutoResolve = { title: string; icon: LucideIcon; examples: string[] };

const autoResolves: AutoResolve[] = [
  {
    title: "Account & Access",
    icon: Shield,
    examples: ["Password reset instructions", "Account unlock steps", "2FA setup guides", "Login troubleshooting"],
  },
  {
    title: "Order & Status",
    icon: Zap,
    examples: ["Order status lookups", "Shipment tracking", "Return policy queries", "Refund status"],
  },
  {
    title: "FAQs & How-To",
    icon: BookOpen,
    examples: ["Product feature questions", "Pricing & plan info", "Integration setup", "Billing inquiries"],
  },
  {
    title: "Self-Service Flows",
    icon: RefreshCw,
    examples: ["Plan upgrade / downgrade", "Subscription cancellation", "Data export requests", "Profile update guidance"],
  },
];

type Integration = { icon: LucideIcon; title: string; desc: string };

const integrations: Integration[] = [
  {
    icon: Brain,
    title: "Dialogflow Advanced Bots",
    desc: "Connect Google Dialogflow CX or ES for complex multi-turn bot scenarios. Captain handles initial classification and hands off to Dialogflow for structured decision trees.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    desc: "Captain detects conversation language automatically and responds in the customer's language. Supports 50+ languages with per-language confidence threshold configuration.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Grounding",
    desc: "Every AI response is grounded in your published KB articles. Captain references article IDs, pulls relevant snippets, and links customers directly to the full article.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    desc: "When an agent corrects or overrides Captain's response, the correction is queued for model fine-tuning. Accuracy improves automatically with every human feedback signal.",
  },
  {
    icon: Sparkles,
    title: "Conversation Summaries",
    desc: "Captain generates a concise natural-language summary at the end of every AI-handled conversation — useful for QA, reporting, and handoff context.",
  },
  {
    icon: Star,
    title: "AI CSAT Tracking",
    desc: "CSAT surveys are automatically sent after AI-resolved conversations. Captain's satisfaction scores are tracked separately so you can measure AI performance independently.",
  },
];

const stats = [
  { value: "94%", label: "Classification accuracy" },
  { value: "< 1.2s", label: "Median response time" },
  { value: "68%", label: "Avg auto-resolution rate" },
  { value: "50+", label: "Supported languages" },
];

export default function AICaptainPage() {
  return (
    <>
      <style>{`
        @keyframes ai-node-pulse {
          0%, 100% { opacity: 0.15; r: 18; }
          50%       { opacity: 0.35; r: 26; }
        }
        @keyframes ai-dash {
          to { stroke-dashoffset: -20; }
        }
        @keyframes ai-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes ai-score-blink {
          0%, 100% { opacity: 1; }
          45%, 55% { opacity: 0.4; }
        }
        @keyframes ai-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .ai-dash  { stroke-dasharray: 6 4; animation: ai-dash 1.2s linear infinite; }
        .ai-dash2 { animation-delay: 0.4s; }
        .ai-dash3 { animation-delay: 0.8s; }
        .ai-dash4 { animation-delay: 1.2s; }
        .ai-fl    { animation: ai-float 3.2s ease-in-out infinite; }
        .ai-fl2   { animation: ai-float 3.2s ease-in-out infinite 1.1s; }
        .ai-fl3   { animation: ai-float 3.2s ease-in-out infinite 2.2s; }
        .ai-score { animation: ai-score-blink 2.8s ease-in-out infinite; }
        .ai-spin  { transform-origin: 240px 190px; animation: ai-spin 20s linear infinite; }
        .ai-np    { animation: ai-node-pulse 2s ease-in-out infinite; }
        .ai-np2   { animation: ai-node-pulse 2s ease-in-out infinite 0.5s; }
        .ai-np3   { animation: ai-node-pulse 2s ease-in-out infinite 1s; }
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
            <span className="eyebrow">Captain AI Agent</span>
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
              AI that{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
                resolves,
              </em>{" "}
              not just routes
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#4B5563", maxWidth: "40ch", lineHeight: 1.75, marginBottom: "2rem" }}>
              Captain classifies intent with a confidence score from 0.0 to 1.0, drafts grounded responses from your
              knowledge base, auto-resolves 68% of tickets, and routes the rest to the best available agent with full
              context attached.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                See Captain Live <ArrowRight size={16} />
              </Link>
              <a href="#how-it-works" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                How It Works
              </a>
            </div>
          </div>

          {/* Hero SVG — Decision tree / neural flow */}
          <div className="anim-slide-r">
            <svg
              viewBox="0 0 480 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 480, display: "block" }}
            >
              <rect x="10" y="10" width="460" height="380" rx="16" fill="var(--nb-surface)" stroke="var(--nb-border)" strokeWidth="2.5" />

              {/* Step 1: Incoming message (left) */}
              <g className="ai-fl">
                <rect x="28" y="60" width="118" height="44" rx="10" fill="white" stroke="var(--nb-border)" strokeWidth="2" />
                <text x="87" y="79" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace" fontWeight="600">💬 Message</text>
                <text x="87" y="94" textAnchor="middle" fill="#6B7280" fontSize="7.5" fontFamily="monospace">Inbound request</text>
              </g>

              {/* Arrow: message → captain */}
              <line x1="146" y1="82" x2="188" y2="150" stroke="var(--nb-teal)" strokeWidth="1.5" className="ai-dash" />

              {/* Captain AI node (center) */}
              <circle cx="240" cy="190" r="30" fill="var(--nb-teal)" className="ai-np" style={{ opacity: 0 }} />
              <circle cx="240" cy="190" r="22" fill="var(--nb-teal)" style={{ opacity: 0.18 }} />
              {/* outer ring */}
              <circle cx="240" cy="190" r="38" stroke="var(--nb-teal)" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" className="ai-spin" />
              <rect x="210" y="164" width="60" height="52" rx="10" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="2" />
              <text x="240" y="187" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="700">Captain</text>
              <text x="240" y="201" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="7" fontFamily="monospace">AI Agent</text>

              {/* Confidence badge */}
              <g className="ai-score">
                <rect x="188" y="228" width="104" height="24" rx="6" fill="var(--nb-amber)" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="240" y="244" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace" fontWeight="700">Confidence: 0.91</text>
              </g>

              {/* Arrow: captain → high confidence */}
              <line x1="270" y1="172" x2="328" y2="110" stroke="var(--nb-teal)" strokeWidth="1.5" className="ai-dash ai-dash2" />
              {/* Arrow: captain → low confidence */}
              <line x1="270" y1="210" x2="328" y2="290" stroke="var(--nb-orange)" strokeWidth="1.5" className="ai-dash ai-dash3" />

              {/* High confidence output */}
              <g className="ai-fl2">
                <rect x="334" y="78" width="118" height="52" rx="10" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="2" />
                <text x="393" y="97" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="600">✓ Auto-Resolved</text>
                <text x="393" y="111" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="7" fontFamily="monospace">from Knowledge Base</text>
                <text x="393" y="123" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7" fontFamily="monospace">CSAT survey sent</text>
              </g>

              {/* Low confidence output */}
              <g className="ai-fl3">
                <rect x="334" y="264" width="118" height="52" rx="10" fill="var(--nb-orange)" stroke="var(--nb-border)" strokeWidth="2" />
                <text x="393" y="283" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="monospace" fontWeight="600">→ Agent Assigned</text>
                <text x="393" y="297" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="7" fontFamily="monospace">Intent + context</text>
                <text x="393" y="309" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7" fontFamily="monospace">pre-attached</text>
              </g>

              {/* Labels */}
              <rect x="280" y="132" width="44" height="18" rx="4" fill="white" stroke="var(--nb-border)" strokeWidth="1" />
              <text x="302" y="145" textAnchor="middle" fill="var(--nb-teal)" fontSize="7" fontFamily="monospace" fontWeight="700">≥ 0.80</text>
              <rect x="280" y="236" width="44" height="18" rx="4" fill="white" stroke="var(--nb-border)" strokeWidth="1" />
              <text x="302" y="249" textAnchor="middle" fill="var(--nb-orange)" fontSize="7" fontFamily="monospace" fontWeight="700">{"< 0.80"}</text>

              {/* Learning loop arrow */}
              <path d="M 393 316 Q 420 370 260 370 Q 130 370 87 260 Q 80 200 87 140" stroke="var(--nb-invert)" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.35" />
              <text x="260" y="385" textAnchor="middle" fill="var(--nb-invert)" fontSize="7" fontFamily="monospace" opacity="0.5">← learns from corrections</text>
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
              <div
                key={s.label}
                className="nb-card anim-fade-up"
                style={{ padding: "1.75rem 1.5rem", textAlign: "center" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-bricolage)",
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
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

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">How Captain Works</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              Three steps from message to resolution
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {howItWorks.map((step, i) => (
              <div
                key={step.num}
                className={`nb-card anim-fade-up delay-${(i + 1) * 100}`}
                style={{
                  padding: "2rem",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    background: "var(--nb-teal)",
                    border: "2px solid var(--nb-border)",
                    boxShadow: "var(--shadow-brutal-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--nb-invert)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "#6B7280", lineHeight: 1.7, fontSize: "0.9rem" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTO-RESOLVE USE CASES ───────────────────────────── */}
      <section className="section--surface">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Auto-Resolution</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              What Captain handles autonomously
            </h2>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", maxWidth: "52ch", lineHeight: 1.65 }}>
              Captain resolves the highest-volume, lowest-complexity ticket categories with zero agent involvement.
            </p>
          </div>
          <div className="cards-4">
            {autoResolves.map((ar, i) => {
              const Icon = ar.icon;
              return (
                <div
                  key={ar.title}
                  className={`nb-card anim-fade-up delay-${(i + 1) * 100}`}
                  style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <div className="feature-icon">
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--nb-invert)",
                    }}
                  >
                    {ar.title}
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {ar.examples.map((ex) => (
                      <li key={ex} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <CheckCircle2 size={13} color="var(--nb-teal)" style={{ flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.78rem", color: "#4B5563" }}>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS & LEARNING ──────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Capabilities</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              Built to learn, integrate, and scale
            </h2>
          </div>
          <div className="cards-3">
            {integrations.map((integ, i) => {
              const Icon = integ.icon;
              return (
                <div
                  key={integ.title}
                  className={`nb-card anim-fade-up delay-${Math.min((i % 3 + 1) * 100, 300)}`}
                  style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
                >
                  <div className="feature-icon">
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--nb-invert)",
                    }}
                  >
                    {integ.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{integ.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HANDOFF DETAILS ──────────────────────────────────── */}
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
              <span className="section-label">Intelligent Handoff</span>
              <h2
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--nb-invert)",
                  margin: "0.5rem 0 1rem",
                }}
              >
                When Captain routes, agents hit the ground running
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Every agent handoff includes a full context package — no re-reading the thread, no asking repeat questions.
                Customers experience seamless continuity even when switching from AI to human.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "Intent label + confidence score",
                  "Auto-generated conversation summary",
                  "Suggested KB articles",
                  "Customer sentiment score",
                  "Previous conversation history",
                  "Recommended response snippets",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <CheckCircle2 size={15} color="var(--nb-teal)" />
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.83rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="anim-slide-r">
              <div
                className="nb-card"
                style={{
                  padding: "2rem",
                  background: "var(--nb-invert)",
                  border: "2px solid var(--nb-border)",
                }}
              >
                <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.72rem", color: "var(--nb-teal)", marginBottom: "1rem", letterSpacing: "0.05em" }}>
                  CAPTAIN HANDOFF CONTEXT
                </p>
                {[
                  { label: "Intent", value: "password_reset" },
                  { label: "Confidence", value: "0.54 (below threshold)" },
                  { label: "Language", value: "English" },
                  { label: "Sentiment", value: "Neutral (0.1)" },
                  { label: "Suggested KB", value: "Reset password guide" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      padding: "0.55rem 0",
                      gap: "1rem",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{label}</span>
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", color: "white", textAlign: "right" }}>{value}</span>
                  </div>
                ))}
                <div
                  style={{
                    marginTop: "1.25rem",
                    padding: "0.875rem",
                    background: "rgba(14,165,160,0.12)",
                    borderRadius: 8,
                    border: "1px solid rgba(14,165,160,0.3)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.72rem", color: "var(--nb-teal)", marginBottom: "0.3rem" }}>Summary</p>
                  <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                    Customer cannot log in after password change. Attempted reset twice. MFA not configured.
                  </p>
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
            AI that actually works
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
            Watch Captain resolve a ticket{" "}
            <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
              live
            </em>
          </h2>
          <p style={{ color: "#9CA3AF", maxWidth: "44ch", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Book a demo and we&apos;ll run Captain against a live conversation from your own channel. See real accuracy
            numbers, not synthetic benchmarks.
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
