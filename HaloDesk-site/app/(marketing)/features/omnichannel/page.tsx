import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Eye,
  Filter,
  GitBranch,
  Inbox,
  Layers,
  MessageCircle,
  RefreshCw,
  Shuffle,
  Smartphone,
  Tag,
  UserCheck,
  Users,
  Bot,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Omnichannel Inbox — HaloDesk",
  description:
    "Manage all 11 support channels — live chat, email, WhatsApp, Instagram, Facebook, Twitter/X, Telegram, Line, SMS, TikTok, and API — in one unified intelligent workspace.",
};

const channels = [
  { emoji: "💬", name: "Live Chat", desc: "Embeddable web widget with pre-chat forms, file sharing, canned responses, and live typing indicators." },
  { emoji: "📧", name: "Email", desc: "Full thread management with HTML compose, CC/BCC, inline attachments, and email signature support." },
  { emoji: "📱", name: "WhatsApp", desc: "Official Business API integration with template messages, rich media, and 24-hour session windows." },
  { emoji: "📸", name: "Instagram", desc: "DMs, story mentions, and comment replies all converted into trackable support conversations." },
  { emoji: "👥", name: "Facebook", desc: "Messenger conversations, page post comments, and visitor messages handled in a single inbox." },
  { emoji: "🐦", name: "Twitter / X", desc: "Inbound DMs and @mention replies captured as support tickets with full public context." },
  { emoji: "✈️", name: "Telegram", desc: "Bot-based messaging with group chat support, media forwarding, and notification channel integration." },
  { emoji: "🟢", name: "Line", desc: "LINE official account integration for Japan and Southeast Asia customer bases." },
  { emoji: "📟", name: "SMS", desc: "Two-way SMS via Twilio, Vonage, MessageBird, and other major SMS gateways." },
  { emoji: "🎵", name: "TikTok", desc: "TikTok DMs and comment-to-conversation routing for brand and creator support teams." },
  { emoji: "🔌", name: "API Channel", desc: "Build custom channel adapters via the HaloDesk REST API — connect any messaging platform in hours." },
];

type RoutingType = { title: string; icon: LucideIcon; desc: string };

const routingTypes: RoutingType[] = [
  { title: "Round Robin", icon: Shuffle, desc: "Distribute new conversations evenly across all online agents in a team, ensuring balanced workloads." },
  { title: "Agent Availability", icon: UserCheck, desc: "Route to the agent with the fewest active conversations who matches the required skill or language." },
  { title: "Team Assignment", icon: Users, desc: "Direct conversations to a specific team based on inbox, label, or customer segment rules." },
  { title: "AI Assignment", icon: Bot, desc: "Captain analyzes intent, customer history, and agent skill tags to route to the best-fit agent automatically." },
];

type Capability = { icon: LucideIcon; title: string; desc: string };

const capabilities: Capability[] = [
  { icon: Layers, title: "Unified Contact Timeline", desc: "Every message from every channel appears in a single chronological timeline per customer — no duplicate profiles." },
  { icon: Filter, title: "Custom Views & Filters", desc: "Build saved views by inbox, label, priority, assignee, or any combination. Pin them for your team." },
  { icon: Tag, title: "Conversation Labels", desc: "Multi-label tagging system with color codes. Use labels to trigger automations or segment analytics reports." },
  { icon: MessageCircle, title: "Pre-Chat Forms", desc: "Collect name, email, account ID, or custom fields before a live chat begins — auto-populates the contact profile." },
  { icon: Clock, title: "Business Hours & Auto-Responders", desc: "Set per-inbox business hours and custom away messages. Outside hours? Captain routes to email follow-up." },
  { icon: Eye, title: "Real-Time Live View", desc: "Monitor every active conversation across all channels in real time. Jump in, assign, or escalate with one click." },
  { icon: Bell, title: "Priority Queuing", desc: "Assign Priority 1–4 to conversations manually or via automation. High-priority items surface to the top of queues." },
  { icon: Smartphone, title: "Mobile App", desc: "Full-featured iOS and Android apps let agents manage conversations, respond, and monitor from anywhere." },
];

export default function OmnichannelPage() {
  return (
    <>
      <style>{`
        @keyframes omni-dot {
          0%   { opacity: 0; transform: translate(0, 0); }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes omni-dash {
          to { stroke-dashoffset: -20; }
        }
        @keyframes omni-pulse {
          0%, 100% { opacity: 0.1; r: 46; }
          50%       { opacity: 0.22; r: 58; }
        }
        @keyframes omni-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }
        .od  { stroke-dasharray: 7 5; animation: omni-dash 1.4s linear infinite; }
        .od2 { animation-delay: 0.3s; }
        .od3 { animation-delay: 0.6s; }
        .od4 { animation-delay: 0.9s; }
        .od5 { animation-delay: 1.2s; }
        .od6 { animation-delay: 1.5s; }
        .od7 { animation-delay: 1.8s; }
        .od8 { animation-delay: 2.1s; }
        .opr { animation: omni-pulse 2.4s ease-in-out infinite; }
        .ofl { animation: omni-float 3s ease-in-out infinite; }
        .ofl2 { animation: omni-float 3s ease-in-out infinite 1s; }
        .ofl3 { animation: omni-float 3s ease-in-out infinite 2s; }

        /* Moving dots along spokes */
        @keyframes dot-top    { 0%{cy:66;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{cy:210;opacity:0} }
        @keyframes dot-tr     { 0%{cx:362;cy:104;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{cx:260;cy:210;opacity:0} }
        @keyframes dot-right  { 0%{cx:408;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{cx:260;opacity:0} }
        @keyframes dot-br     { 0%{cx:362;cy:316;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{cx:260;cy:210;opacity:0} }
        @keyframes dot-bot    { 0%{cy:354;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{cy:210;opacity:0} }
        @keyframes dot-bl     { 0%{cx:158;cy:316;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{cx:260;cy:210;opacity:0} }
        @keyframes dot-left   { 0%{cx:112;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{cx:260;opacity:0} }
        @keyframes dot-tl     { 0%{cx:158;cy:104;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{cx:260;cy:210;opacity:0} }

        .dot-top   { animation: dot-top   2.8s ease-in-out infinite; }
        .dot-tr    { animation: dot-tr    2.8s ease-in-out infinite 0.35s; }
        .dot-right { animation: dot-right 2.8s ease-in-out infinite 0.7s; }
        .dot-br    { animation: dot-br    2.8s ease-in-out infinite 1.05s; }
        .dot-bot   { animation: dot-bot   2.8s ease-in-out infinite 1.4s; }
        .dot-bl    { animation: dot-bl    2.8s ease-in-out infinite 1.75s; }
        .dot-left  { animation: dot-left  2.8s ease-in-out infinite 2.1s; }
        .dot-tl    { animation: dot-tl    2.8s ease-in-out infinite 2.45s; }
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
            <span className="eyebrow">Omnichannel Inbox</span>
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
              All 11 channels.{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
                One inbox.
              </em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#4B5563", maxWidth: "40ch", lineHeight: 1.75, marginBottom: "2rem" }}>
              Live chat, email, WhatsApp, Instagram, Facebook, Twitter/X, Telegram, Line, SMS, TikTok, and API channels —
              all unified into a single intelligent workspace with shared contact timelines.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Get a Demo <ArrowRight size={16} />
              </Link>
              <a href="#channels" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                See All Channels
              </a>
            </div>
          </div>

          {/* Hero SVG — Hub and spoke with moving dots */}
          <div className="anim-slide-r">
            <svg
              viewBox="0 0 520 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 520, display: "block" }}
            >
              <rect x="8" y="8" width="504" height="404" rx="16" fill="var(--nb-surface)" stroke="var(--nb-border)" strokeWidth="2.5" />
              {/* Pulse rings on hub */}
              <circle cx="260" cy="210" r="58" fill="var(--nb-teal)" className="opr" />
              <circle cx="260" cy="210" r="42" fill="var(--nb-teal)" opacity="0.22" />
              {/* Hub */}
              <rect x="228" y="180" width="64" height="60" rx="12" fill="var(--nb-teal)" stroke="var(--nb-border)" strokeWidth="2.5" />
              <text x="260" y="206" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" fontWeight="700">INBOX</text>
              <text x="260" y="221" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="7" fontFamily="monospace">11 channels</text>

              {/* Spoke lines (dashed, animated) */}
              {/* Top */}
              <line x1="260" y1="66" x2="260" y2="180" stroke="var(--nb-teal)" strokeWidth="1.5" className="od" />
              {/* Top-Right */}
              <line x1="362" y1="104" x2="292" y2="186" stroke="var(--nb-teal)" strokeWidth="1.5" className="od od2" />
              {/* Right */}
              <line x1="408" y1="210" x2="292" y2="210" stroke="var(--nb-teal)" strokeWidth="1.5" className="od od3" />
              {/* Bottom-Right */}
              <line x1="362" y1="316" x2="292" y2="232" stroke="var(--nb-teal)" strokeWidth="1.5" className="od od4" />
              {/* Bottom */}
              <line x1="260" y1="354" x2="260" y2="240" stroke="var(--nb-teal)" strokeWidth="1.5" className="od od5" />
              {/* Bottom-Left */}
              <line x1="158" y1="316" x2="228" y2="232" stroke="var(--nb-teal)" strokeWidth="1.5" className="od od6" />
              {/* Left */}
              <line x1="112" y1="210" x2="228" y2="210" stroke="var(--nb-teal)" strokeWidth="1.5" className="od od7" />
              {/* Top-Left */}
              <line x1="158" y1="104" x2="228" y2="186" stroke="var(--nb-teal)" strokeWidth="1.5" className="od od8" />

              {/* Moving dots */}
              <circle cx="260" cy="66" r="5" fill="var(--nb-teal)" className="dot-top" />
              <circle cx="362" cy="104" r="5" fill="var(--nb-teal)" className="dot-tr" />
              <circle cx="408" cy="210" r="5" fill="var(--nb-teal)" className="dot-right" />
              <circle cx="362" cy="316" r="5" fill="var(--nb-teal)" className="dot-br" />
              <circle cx="260" cy="354" r="5" fill="var(--nb-teal)" className="dot-bot" />
              <circle cx="158" cy="316" r="5" fill="var(--nb-teal)" className="dot-bl" />
              <circle cx="112" cy="210" r="5" fill="var(--nb-teal)" className="dot-left" />
              <circle cx="158" cy="104" r="5" fill="var(--nb-teal)" className="dot-tl" />

              {/* Channel node labels */}
              <g className="ofl">
                <rect x="222" y="38" width="76" height="28" rx="7" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="260" y="57" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">💬 Live Chat</text>
              </g>
              <g className="ofl2">
                <rect x="330" y="76" width="74" height="28" rx="7" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="367" y="95" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">📧 Email</text>
              </g>
              <g className="ofl">
                <rect x="416" y="196" width="82" height="28" rx="7" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="457" y="215" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">📱 WhatsApp</text>
              </g>
              <g className="ofl3">
                <rect x="332" y="302" width="74" height="28" rx="7" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="369" y="321" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">📸 Instagram</text>
              </g>
              <g className="ofl2">
                <rect x="220" y="362" width="80" height="28" rx="7" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="260" y="381" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">👥 Facebook</text>
              </g>
              <g className="ofl">
                <rect x="110" y="302" width="74" height="28" rx="7" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="147" y="321" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">🐦 Twitter</text>
              </g>
              <g className="ofl3">
                <rect x="24" y="196" width="76" height="28" rx="7" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="62" y="215" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">✈️ Telegram</text>
              </g>
              <g className="ofl2">
                <rect x="110" y="76" width="70" height="28" rx="7" fill="white" stroke="var(--nb-border)" strokeWidth="1.5" />
                <text x="145" y="95" textAnchor="middle" fill="var(--nb-invert)" fontSize="8.5" fontFamily="monospace">📟 SMS</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ── 11 CHANNELS ──────────────────────────────────────── */}
      <section id="channels" className="section--surface">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Channel Coverage</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              Every channel your customers use
            </h2>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", maxWidth: "54ch", lineHeight: 1.65 }}>
              Connect all 11 channels in minutes. Each inbox is independently configurable with its own routing, hours, and auto-responders.
            </p>
          </div>
          <div className="cards-3">
            {channels.map((ch, i) => (
              <div
                key={ch.name}
                className={`nb-card anim-fade-up delay-${Math.min((i % 6 + 1) * 100, 600)}`}
                style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>{ch.emoji}</span>
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--nb-invert)",
                    }}
                  >
                    {ch.name}
                  </h3>
                </div>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SMART ROUTING ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
            }}
          >
            <div className="anim-slide-l">
              <span className="section-label">Smart Routing</span>
              <h2
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--nb-invert)",
                  margin: "0.5rem 0 1rem",
                }}
              >
                The right conversation to the right agent, automatically
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Four routing strategies — use one per inbox or mix them across teams. Captain AI assignment learns
                skill tags and historical resolution rates to continuously improve routing accuracy.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {["Conversations routed within 3 seconds", "Manual override always available", "Routing rules per inbox", "Supports language-based routing"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <CheckCircle2 size={16} color="var(--nb-teal)" />
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.84rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="anim-slide-r" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {routingTypes.map((rt) => {
                const Icon = rt.icon;
                return (
                  <div
                    key={rt.title}
                    className="nb-card"
                    style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}
                  >
                    <div className="feature-icon" style={{ flexShrink: 0 }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-bricolage)",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--nb-invert)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {rt.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6 }}>{rt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE CAPABILITIES ────────────────────────────────── */}
      <section className="section--surface">
        <div className="container">
          <div className="anim-fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Workspace Capabilities</span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--nb-invert)",
                marginTop: "0.5rem",
              }}
            >
              Built for the entire support workflow
            </h2>
          </div>
          <div className="cards-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`nb-card anim-fade-up delay-${Math.min((i % 4 + 1) * 100, 400)}`}
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
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.65 }}>{cap.desc}</p>
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
            One inbox to rule them all
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
            Stop switching tabs.{" "}
            <em style={{ fontFamily: "var(--font-fraunces)", color: "var(--nb-teal)", fontStyle: "italic" }}>
              Start delivering.
            </em>
          </h2>
          <p style={{ color: "#9CA3AF", maxWidth: "44ch", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            See the omnichannel inbox live with your own channels connected. Setup takes under 10 minutes.
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
