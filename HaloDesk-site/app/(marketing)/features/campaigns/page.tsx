import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  MessageSquare,
  Send,
  Target,
  Users,
  XCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Campaigns & Proactive Outreach — Reach Customers Before They Churn",
  description:
    "Schedule targeted messages to contact segments with exact delivery timestamps. HaloDesk campaigns power onboarding sequences, renewal reminders, re-engagement flows, and product announcements.",
};

const USE_CASES = [
  {
    icon: Users,
    title: "Onboarding Sequences",
    desc: "Automatically guide new customers through product setup with a scheduled series of helpful messages — timed to match their first week experience.",
    accent: "#0EA5A0",
    badge: "Activation",
  },
  {
    icon: Bell,
    title: "Renewal Reminders",
    desc: "Queue renewal notices 30, 14, and 7 days before subscription expiry. Personalized per customer with exact timestamp delivery.",
    accent: "#F59E0B",
    badge: "Retention",
  },
  {
    icon: Target,
    title: "Re-engagement Campaigns",
    desc: "Identify dormant contacts and schedule re-engagement messages at the optimal time — before their health score hits at_risk.",
    accent: "#FF5A36",
    badge: "Winback",
  },
  {
    icon: MessageSquare,
    title: "Product Announcements",
    desc: "Broadcast feature launches and changelog updates to specific customer segments through their preferred conversation channel.",
    accent: "#6366F1",
    badge: "Growth",
  },
  {
    icon: CheckCircle,
    title: "Health Check-ins",
    desc: "Trigger proactive outreach when a customer's health score drops — schedule a personal message from their CSM before they submit a complaint.",
    accent: "#059669",
    badge: "CS",
  },
  {
    icon: Calendar,
    title: "Event Follow-ups",
    desc: "Schedule post-webinar or post-onboarding-call messages to reinforce key takeaways and drive next steps at exactly the right moment.",
    accent: "#8B5CF6",
    badge: "Engagement",
  },
];

const STATUS_STATES = [
  { status: "pending", color: "#F59E0B", bg: "rgba(245,158,11,0.1)", desc: "Message is queued and waiting for its scheduled delivery timestamp." },
  { status: "sent", color: "#059669", bg: "rgba(5,150,105,0.1)", desc: "Message delivered successfully to the target conversation or inbox." },
  { status: "failed", color: "#DC2626", bg: "rgba(220,38,38,0.1)", desc: "Delivery failed. Error message stored for debugging and retry logic." },
  { status: "cancelled", color: "#6B7280", bg: "rgba(107,114,128,0.1)", desc: "Message was manually cancelled before the scheduled delivery time." },
];

export default function CampaignsPage() {
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
                <Send size={12} />
                Campaigns
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
                Reach customers{" "}
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
                they churn
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
                HaloDesk campaigns let you queue targeted messages for exact future
                timestamps — delivered to any conversation or inbox, attributed to
                any agent. Run onboarding sequences, renewal reminders, and
                re-engagement flows without leaving your support workspace.
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

            {/* Hero SVG — animated campaign timeline */}
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
                <text x="68" y="27" fill="#FAF8F3" fontSize="12" fontWeight="700" fontFamily="sans-serif">Campaigns · Upcoming Messages</text>

                {/* Timeline line */}
                <line x1="52" y1="68" x2="52" y2="408" stroke="#C8C3B5" strokeWidth="2" strokeDasharray="4 4" />

                {/* Campaign messages with animation */}
                {[
                  {
                    y: 72,
                    time: "Today  9:00 AM",
                    title: "Onboarding Day 1",
                    target: "New Signups (47 contacts)",
                    status: "sent",
                    color: "#059669",
                    delay: "0s",
                  },
                  {
                    y: 148,
                    time: "Today  2:00 PM",
                    title: "Feature Spotlight: Inbox",
                    target: "Trial Users (23 contacts)",
                    status: "pending",
                    color: "#F59E0B",
                    delay: "0.4s",
                  },
                  {
                    y: 224,
                    time: "Tomorrow  10:00 AM",
                    title: "Renewal Reminder — 7 days",
                    target: "Expiring Accounts (12)",
                    status: "pending",
                    color: "#F59E0B",
                    delay: "0.8s",
                  },
                  {
                    y: 300,
                    time: "Fri  3:00 PM",
                    title: "Re-engagement Campaign",
                    target: "Inactive 30d (89 contacts)",
                    status: "pending",
                    color: "#F59E0B",
                    delay: "1.2s",
                  },
                  {
                    y: 376,
                    time: "Next Mon  9:00 AM",
                    title: "Product Update Newsletter",
                    target: "All Customers (312)",
                    status: "pending",
                    color: "#6366F1",
                    delay: "1.6s",
                  },
                ].map((msg) => (
                  <g key={msg.title}>
                    {/* Timeline dot */}
                    <circle cx="52" cy={msg.y + 28} r="6" fill={msg.color} stroke="#0A0A0A" strokeWidth="1.5">
                      {msg.status === "pending" && (
                        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" begin={msg.delay} />
                      )}
                    </circle>
                    {/* Message card */}
                    <rect
                      x="72"
                      y={msg.y}
                      width="392"
                      height="62"
                      rx="3"
                      fill={msg.status === "sent" ? "rgba(5,150,105,0.06)" : "#F0EDE4"}
                      stroke={msg.color}
                      strokeWidth="1.5"
                    >
                      {msg.status === "pending" && (
                        <animate
                          attributeName="opacity"
                          values="1;0.85;1"
                          dur="3s"
                          repeatCount="indefinite"
                          begin={msg.delay}
                        />
                      )}
                    </rect>
                    <text x="88" y={msg.y + 18} fill="#7A746A" fontSize="9" fontFamily="sans-serif">{msg.time}</text>
                    <text x="88" y={msg.y + 34} fill="#0A1628" fontSize="11" fontWeight="700" fontFamily="sans-serif">{msg.title}</text>
                    <text x="88" y={msg.y + 50} fill="#4A4540" fontSize="9" fontFamily="sans-serif">{msg.target}</text>
                    {/* Status badge */}
                    <rect x="400" y={msg.y + 20} width={52} height="18" rx="2" fill={msg.color} />
                    <text x="426" y={msg.y + 33} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800" fontFamily="sans-serif">{msg.status.toUpperCase()}</text>
                    {/* Send arrow animation */}
                    {msg.status === "pending" && (
                      <g>
                        <animateTransform
                          attributeName="transform"
                          type="translate"
                          values="0 0;8 0;0 0"
                          dur="1.5s"
                          repeatCount="indefinite"
                          begin={msg.delay}
                        />
                        <path d={`M ${458} ${msg.y + 28} L ${468} ${msg.y + 28}`} stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                        <path d={`M ${464} ${msg.y + 24} L ${468} ${msg.y + 28} L ${464} ${msg.y + 32}`} stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">Use Cases</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
            }}
          >
            Proactive outreach for every{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              customer moment
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
            From the moment a customer signs up to their annual renewal, campaigns
            let you reach them with the right message at exactly the right time —
            without manual effort from your team.
          </p>
          <div className="cards-3">
            {USE_CASES.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 24, animationDelay: `${i * 80}ms` }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <div
                      className="feature-icon"
                      style={{ background: uc.accent }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "3px 8px",
                        background: uc.accent,
                        color: "#fff",
                        borderRadius: 2,
                        border: "1.5px solid var(--nb-border)",
                        boxShadow: "2px 2px 0 var(--nb-border)",
                      }}
                    >
                      {uc.badge}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      marginBottom: 8,
                    }}
                  >
                    {uc.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--nb-ink-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {uc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DELIVERY & STATUS TRACKING ───────────────────────────── */}
      <section
        className="section"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div>
              <div className="section-label">Delivery Engine</div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  marginBottom: 20,
                  lineHeight: 1.1,
                }}
              >
                Precise scheduling.{" "}
                <em
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--nb-orange)",
                  }}
                >
                  Full visibility.
                </em>
              </h2>
              <p
                style={{
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Every scheduled message is queued with an exact future timestamp.
                The delivery engine processes the queue continuously — attributing
                each message to the configured sender agent and targeting the
                correct conversation or inbox.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {[
                  { icon: Clock, text: "Exact timestamp delivery — queued messages fire on the second" },
                  { icon: Users, text: "Sender attribution — choose which agent name customers see" },
                  { icon: Target, text: "Target specific conversations, inboxes, or contact segments" },
                  { icon: XCircle, text: "Failed delivery logging with error message storage for debugging" },
                  { icon: CheckCircle, text: "\"Upcoming messages\" view in every agent inbox" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.text}
                      style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          background: "var(--nb-teal)",
                          border: "1.5px solid var(--nb-border)",
                          borderRadius: 4,
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 1,
                        }}
                      >
                        <Icon size={14} color="#fff" />
                      </div>
                      <span
                        style={{
                          color: "var(--nb-ink-muted)",
                          fontSize: "0.9375rem",
                          lineHeight: 1.55,
                          paddingTop: 4,
                        }}
                      >
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Status tracking */}
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  marginBottom: 20,
                }}
              >
                Status Tracking
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {STATUS_STATES.map((s) => (
                  <div
                    key={s.status}
                    className="nb-card"
                    style={{
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      background: s.bg,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "3px 10px",
                        background: s.color,
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        borderRadius: 2,
                        fontFamily: "var(--font-mono)",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {s.status}
                    </span>
                    <p
                      style={{
                        color: "var(--nb-ink-muted)",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
            {[
              { value: "4", label: "Message delivery statuses tracked" },
              { value: "∞", label: "Contacts per campaign batch" },
              { value: "1s", label: "Timestamp delivery precision" },
              { value: "100%", label: "Error auditability on failures" },
            ].map((s) => (
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
            <Send size={12} />
            Launch a Campaign
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "var(--nb-bg)",
              marginBottom: 20,
            }}
          >
            Stop reacting.{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              Start reaching out.
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
            Queue targeted messages for every customer lifecycle moment. From first
            login to renewal — HaloDesk campaigns keep your team one step ahead.
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
