import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  BarChart3,
  Shield,
  GitBranch,
  CheckCircle,
  ArrowRight,
  Layers,
  Zap,
  Lock,
  Database,
  Activity,
  Users,
  Heart,
  ShoppingCart,
  Building2,
  Truck,
  Cpu,
  Clock,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Customer Support Platform | HaloDesk",
  description:
    "HaloDesk unifies every customer conversation into one intelligent workspace. Omnichannel inbox, Captain AI, workflow automation, and real-time analytics — built for enterprise scale.",
  openGraph: {
    title: "HaloDesk — Enterprise Customer Support Platform",
    description:
      "Unify every customer conversation. Automate intelligently. Retain customers at scale.",
    type: "website",
  },
};

/* ── Data ──────────────────────────────────────────────────────────────────── */

const CAPTAIN_AI_CODE = `{
  "conversation_id": "CONV-4829",
  "incoming_message": "Can't login, password reset not working",
  "captain_analysis": {
    "intent": "account_access_issue",
    "confidence": 0.94,
    "sentiment": "neutral",
    "priority": "medium"
  },
  "action": "auto_resolve",
  "response_sent": "Reset email dispatched. ETA: 2 min.",
  "kb_articles_used": ["password-reset-guide"],
  "resolved_in_ms": 1240
}`;

const CHANNELS = [
  "Live Chat",
  "Email",
  "WhatsApp",
  "Facebook Messenger",
  "Instagram",
  "X / Twitter",
  "Telegram",
  "Line",
  "SMS",
  "Voice",
  "API Channel",
];

const FEATURES = [
  {
    Icon: Layers,
    title: "Omnichannel Inbox",
    desc: "Centralize conversations from 11+ channels in one unified workspace. No more app-switching or missed messages.",
    href: "/features/omnichannel-inbox",
  },
  {
    Icon: Bot,
    title: "Captain AI Agent",
    desc: "Autonomous AI that reads context, searches your knowledge base, and resolves tickets without human intervention.",
    href: "/features/captain-ai",
  },
  {
    Icon: GitBranch,
    title: "Workflow Automation",
    desc: "Build powerful routing rules, auto-assignments, and escalation paths with a no-code visual builder.",
    href: "/features/workflow-automation",
  },
  {
    Icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Real-time dashboards, CSAT tracking, agent performance metrics, and custom report exports.",
    href: "/features/analytics",
  },
  {
    Icon: Activity,
    title: "Sentiment Analysis",
    desc: "Detect customer emotion in real time. Prioritize urgent conversations before they become costly escalations.",
    href: "/features/sentiment-analysis",
  },
  {
    Icon: TrendingUp,
    title: "Customer Health Scores",
    desc: "Track engagement, satisfaction, and churn risk across your entire customer base automatically.",
    href: "/features/health-scores",
  },
];

const PILLARS = [
  {
    Icon: Lock,
    title: "Security",
    desc: "IP whitelisting, SSO/SAML, encrypted data at rest and in transit, and full audit logs for all team actions.",
  },
  {
    Icon: Shield,
    title: "Compliance",
    desc: "GDPR-compliant data handling, configurable retention policies, and right-to-erasure request management.",
  },
  {
    Icon: Clock,
    title: "SLA Management",
    desc: "Define SLA policies per team, channel, or priority. Automatic breach alerts and escalation triggers.",
  },
  {
    Icon: Database,
    title: "Data Governance",
    desc: "Full data ownership, regional hosting options, custom data purge schedules, and HIPAA-ready infrastructure.",
  },
];

const INDUSTRIES = [
  { name: "E-Commerce", Icon: ShoppingCart },
  { name: "SaaS", Icon: Cpu },
  { name: "Financial Services", Icon: TrendingUp },
  { name: "Healthcare", Icon: Heart },
  { name: "Logistics", Icon: Truck },
  { name: "Enterprise IT", Icon: Building2 },
];

const OMNI_BULLETS = [
  {
    Icon: Zap,
    title: "Unified Routing Engine",
    desc: "Automatically route conversations to the right team based on channel, language, sentiment, and agent load.",
  },
  {
    Icon: Users,
    title: "Full Agent Context",
    desc: "Agents see complete customer history, previous interactions, and AI summaries across every touchpoint.",
  },
  {
    Icon: RefreshCw,
    title: "Persistent Conversation History",
    desc: "No conversation is ever lost. Access full thread history regardless of channel or time elapsed.",
  },
];

/* ── Sub-components ─────────────────────────────────────────────────────────── */

function InboxMockup() {
  return (
    <svg
      viewBox="0 0 480 460"
      width="480"
      height="460"
      style={{
        maxWidth: "100%",
        height: "auto",
        filter: "drop-shadow(8px 8px 0px rgba(0,0,0,0.45))",
      }}
      aria-hidden="true"
    >
      {/* Panel background */}
      <rect
        width="480"
        height="460"
        rx="6"
        fill="#0f1e35"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="2"
      />

      {/* Header */}
      <rect width="480" height="52" rx="6" fill="#152236" />
      <rect y="40" width="480" height="12" fill="#152236" />
      <text
        x="20"
        y="32"
        fill="#e8e2d0"
        fontSize="14"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        Unified Inbox
      </text>
      <text
        x="128"
        y="32"
        fill="rgba(232,226,208,0.36)"
        fontSize="12"
        fontFamily="system-ui, sans-serif"
      >
        — HaloDesk
      </text>
      <rect x="394" y="16" width="26" height="20" rx="3" fill="#0EA5A0" />
      <text
        x="407"
        y="30"
        fill="#fff"
        fontSize="11"
        fontWeight="700"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
      >
        24
      </text>

      {/* Search bar */}
      <rect
        x="16"
        y="64"
        width="448"
        height="30"
        rx="3"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      <text
        x="34"
        y="83"
        fill="rgba(232,226,208,0.28)"
        fontSize="12"
        fontFamily="system-ui, sans-serif"
      >
        Search conversations...
      </text>

      {/* ── Conversation 1: WhatsApp / Positive ── */}
      <g opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.35s"
          begin="0.2s"
          fill="freeze"
        />
        <rect x="0" y="102" width="480" height="74" fill="rgba(14,165,160,0.07)" />
        <rect x="0" y="175" width="480" height="1" fill="rgba(255,255,255,0.05)" />
        <circle cx="36" cy="139" r="18" fill="#1a3550" />
        <text
          x="36"
          y="145"
          fill="#0EA5A0"
          fontSize="11"
          fontWeight="800"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          JL
        </text>
        <rect
          x="62"
          y="106"
          width="70"
          height="17"
          rx="2"
          fill="rgba(37,211,102,0.18)"
          stroke="rgba(37,211,102,0.35)"
          strokeWidth="1"
        />
        <text
          x="97"
          y="118"
          fill="#25d366"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          WhatsApp
        </text>
        <rect
          x="138"
          y="106"
          width="68"
          height="17"
          rx="2"
          fill="rgba(14,165,160,0.15)"
          stroke="rgba(14,165,160,0.3)"
          strokeWidth="1"
        />
        <text
          x="172"
          y="118"
          fill="#0EA5A0"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          😊 Positive
        </text>
        <text
          x="62"
          y="139"
          fill="#e8e2d0"
          fontSize="12.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Sarah Chen
        </text>
        <text
          x="62"
          y="158"
          fill="rgba(232,226,208,0.5)"
          fontSize="11.5"
          fontFamily="system-ui, sans-serif"
        >
          Can&apos;t access my account after the update
        </text>
        <text
          x="458"
          y="139"
          fill="rgba(232,226,208,0.35)"
          fontSize="11"
          textAnchor="end"
          fontFamily="system-ui, sans-serif"
        >
          2m ago
        </text>
        <circle cx="466" cy="155" r="4" fill="#0EA5A0" />
      </g>

      {/* ── Conversation 2: Email / Neutral ── */}
      <g opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.35s"
          begin="0.5s"
          fill="freeze"
        />
        <rect x="0" y="176" width="480" height="74" fill="transparent" />
        <rect x="0" y="249" width="480" height="1" fill="rgba(255,255,255,0.05)" />
        <circle cx="36" cy="213" r="18" fill="#1a3550" />
        <text
          x="36"
          y="219"
          fill="#6c86a0"
          fontSize="11"
          fontWeight="800"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          SM
        </text>
        <rect
          x="62"
          y="180"
          width="42"
          height="17"
          rx="2"
          fill="rgba(108,130,165,0.18)"
          stroke="rgba(108,130,165,0.3)"
          strokeWidth="1"
        />
        <text
          x="83"
          y="192"
          fill="#8fa8c8"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Email
        </text>
        <rect
          x="110"
          y="180"
          width="62"
          height="17"
          rx="2"
          fill="rgba(245,197,24,0.12)"
          stroke="rgba(245,197,24,0.28)"
          strokeWidth="1"
        />
        <text
          x="141"
          y="192"
          fill="#f5c518"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          😐 Neutral
        </text>
        <text
          x="62"
          y="212"
          fill="#e8e2d0"
          fontSize="12.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Marcus Rodriguez
        </text>
        <text
          x="62"
          y="231"
          fill="rgba(232,226,208,0.5)"
          fontSize="11.5"
          fontFamily="system-ui, sans-serif"
        >
          Invoice request for March billing cycle
        </text>
        <text
          x="458"
          y="212"
          fill="rgba(232,226,208,0.35)"
          fontSize="11"
          textAnchor="end"
          fontFamily="system-ui, sans-serif"
        >
          8m ago
        </text>
      </g>

      {/* ── Conversation 3: Chat / Positive ── */}
      <g opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.35s"
          begin="0.8s"
          fill="freeze"
        />
        <rect x="0" y="250" width="480" height="74" fill="transparent" />
        <rect x="0" y="323" width="480" height="1" fill="rgba(255,255,255,0.05)" />
        <circle cx="36" cy="287" r="18" fill="#1a3550" />
        <text
          x="36"
          y="293"
          fill="#f59e0b"
          fontSize="11"
          fontWeight="800"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          PT
        </text>
        <rect
          x="62"
          y="254"
          width="38"
          height="17"
          rx="2"
          fill="rgba(14,165,160,0.15)"
          stroke="rgba(14,165,160,0.3)"
          strokeWidth="1"
        />
        <text
          x="81"
          y="266"
          fill="#0EA5A0"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Chat
        </text>
        <rect
          x="106"
          y="254"
          width="68"
          height="17"
          rx="2"
          fill="rgba(14,165,160,0.15)"
          stroke="rgba(14,165,160,0.3)"
          strokeWidth="1"
        />
        <text
          x="140"
          y="266"
          fill="#0EA5A0"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          😊 Positive
        </text>
        <text
          x="62"
          y="286"
          fill="#e8e2d0"
          fontSize="12.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Priya Tanaka
        </text>
        <text
          x="62"
          y="305"
          fill="rgba(232,226,208,0.5)"
          fontSize="11.5"
          fontFamily="system-ui, sans-serif"
        >
          Love the new features! Quick question about...
        </text>
        <text
          x="458"
          y="286"
          fill="rgba(232,226,208,0.35)"
          fontSize="11"
          textAnchor="end"
          fontFamily="system-ui, sans-serif"
        >
          15m ago
        </text>
      </g>

      {/* ── Conversation 4: Email / Captain AI thinking ── */}
      <g opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.35s"
          begin="1.1s"
          fill="freeze"
        />
        <rect x="0" y="324" width="480" height="92" fill="rgba(196,181,253,0.04)" />
        <circle cx="36" cy="365" r="18" fill="#1a1a3a" />
        <text
          x="36"
          y="371"
          fill="#c4b5fd"
          fontSize="14"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          🤖
        </text>
        <rect
          x="62"
          y="328"
          width="42"
          height="17"
          rx="2"
          fill="rgba(108,130,165,0.18)"
          stroke="rgba(108,130,165,0.3)"
          strokeWidth="1"
        />
        <text
          x="83"
          y="340"
          fill="#8fa8c8"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Email
        </text>
        <rect
          x="110"
          y="328"
          width="84"
          height="17"
          rx="2"
          fill="rgba(196,181,253,0.12)"
          stroke="rgba(196,181,253,0.28)"
          strokeWidth="1"
        />
        <text
          x="152"
          y="340"
          fill="#c4b5fd"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          ⚡ Captain AI
        </text>
        <text
          x="62"
          y="364"
          fill="#e8e2d0"
          fontSize="12.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Delivery delayed again — urgent
        </text>
        {/* Thinking dots */}
        <circle cx="66" cy="385" r="3.5" fill="#c4b5fd">
          <animate
            attributeName="opacity"
            values="1;0.2;1"
            dur="1.4s"
            begin="1.3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="79" cy="385" r="3.5" fill="#c4b5fd">
          <animate
            attributeName="opacity"
            values="1;0.2;1"
            dur="1.4s"
            begin="1.55s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="92" cy="385" r="3.5" fill="#c4b5fd">
          <animate
            attributeName="opacity"
            values="1;0.2;1"
            dur="1.4s"
            begin="1.8s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="104"
          y="390"
          fill="rgba(196,181,253,0.55)"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
        >
          Captain AI is analyzing...
        </text>
        <text
          x="458"
          y="364"
          fill="rgba(232,226,208,0.35)"
          fontSize="11"
          textAnchor="end"
          fontFamily="system-ui, sans-serif"
        >
          Just now
        </text>
      </g>

      {/* Status bar */}
      <rect x="0" y="420" width="480" height="40" fill="#152236" />
      <rect x="0" y="420" width="480" height="2" fill="rgba(255,255,255,0.06)" />
      <circle cx="24" cy="440" r="4" fill="#0EA5A0">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="35"
        y="444"
        fill="rgba(232,226,208,0.55)"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
      >
        4 agents online · 3 active conversations
      </text>
      <rect
        x="404"
        y="428"
        width="60"
        height="22"
        rx="3"
        fill="rgba(14,165,160,0.15)"
        stroke="rgba(14,165,160,0.3)"
        strokeWidth="1"
      />
      <text
        x="434"
        y="443"
        fill="#0EA5A0"
        fontSize="10"
        fontWeight="700"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
      >
        Open App
      </text>
    </svg>
  );
}

function OmnichannelSVG() {
  const nodes = [
    { x: 300, y: 55,  label: "Live Chat",  color: "#0EA5A0" },
    { x: 403, y: 97,  label: "Email",      color: "#6c86a0" },
    { x: 445, y: 200, label: "WhatsApp",   color: "#25d366" },
    { x: 403, y: 303, label: "Facebook",   color: "#3b82f6" },
    { x: 300, y: 345, label: "Instagram",  color: "#ec4899" },
    { x: 197, y: 303, label: "X/Twitter",  color: "#94a3b8" },
    { x: 155, y: 200, label: "Telegram",   color: "#38bdf8" },
    { x: 197, y: 97,  label: "SMS",        color: "#f59e0b" },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      width="600"
      height="400"
      style={{ maxWidth: "100%", height: "auto" }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="omni-dot-bg"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="1" fill="rgba(10,10,10,0.1)" />
        </pattern>
      </defs>
      <rect
        width="600"
        height="400"
        rx="4"
        fill="var(--nb-surface, #F0EDE4)"
        stroke="var(--nb-border-faint, #DDD8CC)"
        strokeWidth="2"
      />
      <rect width="600" height="400" rx="4" fill="url(#omni-dot-bg)" />

      {/* Animated dashed connection lines */}
      {nodes.map((node, i) => (
        <line
          key={`line-${i}`}
          x1="300"
          y1="200"
          x2={node.x}
          y2={node.y}
          stroke={node.color}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.55"
        >
          <animate
            attributeName="stroke-dashoffset"
            values={`${(i + 1) * 12};0`}
            dur={`${1.8 + i * 0.18}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Center HaloDesk circle */}
      <circle cx="300" cy="200" r="52" fill="#0A1628" stroke="#0EA5A0" strokeWidth="2.5" />
      <circle
        cx="300"
        cy="200"
        r="58"
        fill="none"
        stroke="rgba(14,165,160,0.18)"
        strokeWidth="1.5"
      >
        <animate
          attributeName="r"
          values="58;66;58"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.7;0.1;0.7"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="300"
        y="196"
        fill="#FAF8F3"
        fontSize="13"
        fontWeight="800"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
      >
        HaloDesk
      </text>
      <text
        x="300"
        y="213"
        fill="rgba(250,248,243,0.5)"
        fontSize="9.5"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
      >
        Unified Core
      </text>

      {/* Channel nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r="30"
            fill="#FAF8F3"
            stroke="rgba(10,10,10,0.12)"
            strokeWidth="1.5"
          />
          <circle cx={node.x} cy={node.y} r="30" fill="none" stroke={node.color} strokeWidth="2">
            <animate
              attributeName="opacity"
              values="0.35;1;0.35"
              dur={`${2.4 + i * 0.22}s`}
              repeatCount="indefinite"
            />
          </circle>
          <text
            x={node.x}
            y={node.y + 5}
            fill="#0A1628"
            fontSize="8.5"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main>

      {/* ════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════ */}
      <section
        className="section section--invert"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated SVG dot-grid background */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="hero-dot-pattern"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="14" cy="14" r="1.5" fill="rgba(14,165,160,0.18)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dot-pattern)" />
          <circle cx="78%" cy="28%" r="280" fill="none" stroke="rgba(14,165,160,0.05)" strokeWidth="80">
            <animate attributeName="r" values="280;340;280" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.15;0.8" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="18%" cy="72%" r="180" fill="none" stroke="rgba(14,165,160,0.04)" strokeWidth="60">
            <animate attributeName="r" values="180;240;180" dur="11s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="11s" repeatCount="indefinite" />
          </circle>
        </svg>

        <div className="container">
          <div
            className="hd-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Left: Copy */}
            <div className="anim-fade-up">
              <div className="eyebrow">Enterprise Customer Support Platform</div>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                  lineHeight: 1.05,
                  color: "#FAF8F3",
                  marginBottom: "24px",
                }}
              >
                Every conversation.{" "}
                <span style={{ display: "block" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif, 'Fraunces', serif)",
                      fontStyle: "italic",
                      color: "var(--nb-teal)",
                    }}
                  >
                    One unified inbox.
                  </span>
                </span>
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "rgba(250,248,243,0.7)",
                  marginBottom: "36px",
                  maxWidth: "460px",
                }}
              >
                HaloDesk consolidates every channel — chat, email, social, voice
                — into one intelligent workspace. Captain AI resolves issues
                instantly so your team focuses on what matters most.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
                <Link href="/contact" className="btn-invert">
                  Talk to Sales
                </Link>
                <Link
                  href="/features"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "14px 24px",
                    border: "2px solid rgba(250,248,243,0.22)",
                    color: "rgba(250,248,243,0.88)",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderRadius: "var(--radius)",
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                >
                  See all features <ArrowRight size={15} />
                </Link>
              </div>

              {/* Stat pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  "11 Channels",
                  "Captain AI",
                  "Workflow Automation",
                  "Real-time Analytics",
                ].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      border: "1.5px solid rgba(14,165,160,0.42)",
                      borderRadius: "var(--radius)",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--nb-teal)",
                      background: "rgba(14,165,160,0.08)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--nb-teal)",
                        flexShrink: 0,
                      }}
                    />
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Inbox SVG mockup */}
            <div
              className="anim-fade-up delay-200"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <InboxMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. CHANNEL MARQUEE
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#152236",
          padding: "0",
          borderTop: "2px solid rgba(255,255,255,0.07)",
          borderBottom: "2px solid rgba(255,255,255,0.07)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "18px 24px 10px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            className="section-label"
            style={{ color: "rgba(250,248,243,0.42)", margin: 0, whiteSpace: "nowrap" }}
          >
            Channels we support
          </span>
        </div>
        <div className="marquee" style={{ paddingBottom: "22px" }}>
          <div className="marquee-track">
            {[...CHANNELS, ...CHANNELS, ...CHANNELS].map((ch, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 20px",
                  margin: "0 8px",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(250,248,243,0.82)",
                  background: "rgba(255,255,255,0.04)",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--nb-teal)",
                    flexShrink: 0,
                  }}
                />
                {ch}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. CORE FEATURES GRID
      ════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Core Platform
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
                marginTop: "14px",
              }}
            >
              The full stack for support excellence.
            </h2>
          </div>
          <div className="cards-3">
            {FEATURES.map((feature) => {
              const FeatureIcon = feature.Icon;
              return (
                <div key={feature.title} className="nb-card" style={{ padding: "28px" }}>
                  <div className="feature-icon" style={{ marginBottom: "16px" }}>
                    <FeatureIcon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      marginBottom: "8px",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "var(--nb-ink-muted)",
                      marginBottom: "18px",
                    }}
                  >
                    {feature.desc}
                  </p>
                  <Link
                    href={feature.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "var(--nb-teal)",
                      textDecoration: "none",
                    }}
                  >
                    Explore <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. CAPTAIN AI SPOTLIGHT
      ════════════════════════════════════════════════════ */}
      <section className="section section--invert" style={{ position: "relative" }}>
        {/* Subtle line-grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(14,165,160,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,160,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div
            className="hd-split-2col"
            style={{
              display: "grid",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Left: Copy */}
            <div>
              <div className="eyebrow">Captain AI</div>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.6rem)",
                  color: "#FAF8F3",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                }}
              >
                The AI agent that resolves,{" "}
                <span
                  style={{
                    fontFamily: "var(--font-serif, 'Fraunces', serif)",
                    fontStyle: "italic",
                    color: "var(--nb-teal)",
                  }}
                >
                  not just suggests.
                </span>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(250,248,243,0.68)",
                  marginBottom: "28px",
                }}
              >
                Captain AI understands context, searches your knowledge base,
                and takes autonomous action — escalating only when human
                judgment is truly needed.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "32px" }}>
                {[
                  "Knowledge Base Integration",
                  "Escalation Intelligence",
                  "Confidence Scoring",
                  "Multi-language Support",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "rgba(250,248,243,0.82)",
                      marginBottom: "10px",
                    }}
                  >
                    <CheckCircle size={16} color="var(--nb-teal)" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/captain-ai" className="btn-invert">
                Explore Captain AI <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right: Code block */}
            <div className="code-block anim-fade-up delay-200">
              <div className="code-block__bar">
                <span className="code-dot code-dot--r" />
                <span className="code-dot code-dot--y" />
                <span className="code-dot code-dot--g" />
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "11px",
                    color: "rgba(232,226,208,0.42)",
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  }}
                >
                  captain_response.json
                </span>
              </div>
              <div className="code-block__body">
                <pre>{CAPTAIN_AI_CODE}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          5. OMNICHANNEL HUB SVG
      ════════════════════════════════════════════════════ */}
      <section className="section section--surface">
        <div className="container">
          <div
            className="hd-split-2col"
            style={{
              display: "grid",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Left: SVG diagram */}
            <OmnichannelSVG />

            {/* Right: Copy */}
            <div>
              <div className="section-label">Omnichannel Architecture</div>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  marginTop: "14px",
                  marginBottom: "32px",
                  lineHeight: 1.1,
                }}
              >
                One platform.{" "}
                <span
                  style={{
                    fontFamily: "var(--font-serif, 'Fraunces', serif)",
                    fontStyle: "italic",
                    color: "var(--nb-teal)",
                  }}
                >
                  Every channel.
                </span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {OMNI_BULLETS.map((bullet) => {
                  const BulletIcon = bullet.Icon;
                  return (
                    <div
                      key={bullet.title}
                      style={{
                        display: "flex",
                        gap: "16px",
                        padding: "18px",
                        border: "2px solid var(--nb-border-faint)",
                        borderRadius: "var(--radius)",
                        background: "var(--nb-bg)",
                      }}
                    >
                      <div className="feature-icon" style={{ flexShrink: 0 }}>
                        <BulletIcon size={18} />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 800,
                            marginBottom: "4px",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {bullet.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--nb-ink-muted)",
                            lineHeight: 1.65,
                          }}
                        >
                          {bullet.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6. ENTERPRISE PILLARS
      ════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Enterprise Ready
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
                marginTop: "14px",
                maxWidth: "600px",
                margin: "14px auto 0",
              }}
            >
              Built for organizations that can&apos;t afford downtime.
            </h2>
          </div>
          <div className="cards-4">
            {PILLARS.map((pillar) => {
              const PillarIcon = pillar.Icon;
              return (
                <div key={pillar.title} className="nb-card" style={{ padding: "28px" }}>
                  <div className="feature-icon" style={{ marginBottom: "16px" }}>
                    <PillarIcon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      marginBottom: "8px",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "var(--nb-ink-muted)",
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7. INDUSTRIES TEASER
      ════════════════════════════════════════════════════ */}
      <section
        className="section"
        style={{
          background: "rgba(14,165,160,0.06)",
          borderTop: "2px solid var(--nb-border-faint)",
          borderBottom: "2px solid var(--nb-border-faint)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Industries
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)",
                marginTop: "14px",
              }}
            >
              Whatever your industry, HaloDesk adapts.
            </h2>
          </div>
          <div className="cards-3">
            {INDUSTRIES.map((industry) => {
              const IndustryIcon = industry.Icon;
              return (
                <Link
                  key={industry.name}
                  href="/industries"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="nb-card push-hover"
                    style={{
                      padding: "22px 28px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div className="feature-icon" style={{ flexShrink: 0 }}>
                      <IndustryIcon size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: 800,
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {industry.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          8. FINAL CTA
      ════════════════════════════════════════════════════ */}
      <section className="section section--invert" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 50% 60%, rgba(14,165,160,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container--tight container"
          style={{ textAlign: "center", position: "relative" }}
        >
          <div
            className="eyebrow"
            style={{ margin: "0 auto 24px", display: "inline-flex" }}
          >
            Get Started Today
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#FAF8F3",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Ready to unify your{" "}
            <span
              style={{
                fontFamily: "var(--font-serif, 'Fraunces', serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              customer support?
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(250,248,243,0.65)",
              maxWidth: "480px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Join hundreds of enterprise teams already delivering faster, smarter
            support with HaloDesk.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-invert">
              Talk to Enterprise Sales
            </Link>
            <Link
              href="/pricing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "14px 24px",
                border: "2px solid rgba(250,248,243,0.22)",
                color: "rgba(250,248,243,0.88)",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "var(--radius)",
                transition: "border-color 0.15s, color 0.15s",
              }}
            >
              View Pricing <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}