import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Heart,
  Mail,
  MessageCircle,
  MessageSquare,
  Package,
  Send,
  ShoppingCart,
  Tag,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce — HaloDesk Solutions",
  description:
    "Support that scales with your orders. Order automation, returns routing, AI deflection, and post-purchase campaigns at any volume.",
};

const SCENARIOS = [
  {
    icon: Package,
    title: "Order Inquiries",
    badge: "AI Deflection",
    desc: "Captain AI handles \u201cWhere is my order?\u201d and \u201cWhat is my tracking number?\u201d automatically \u2014 pulling order status from your connected systems and replying instantly. Human agents only see escalations.",
    accent: "#0EA5A0",
    stat: "72% deflection rate on order status queries",
  },
  {
    icon: Tag,
    title: "Returns & Exchanges",
    badge: "Routing Automation",
    desc: "Return requests trigger a dedicated routing workflow: category tagged as \u201cReturn\u201d, routed to the returns team, SLA clock set to 4 hours. No inbox confusion, no misrouting.",
    accent: "#6366F1",
    stat: "4-hour SLA on all return requests",
  },
  {
    icon: ShoppingCart,
    title: "Delivery Issues",
    badge: "Escalation Workflows",
    desc: "When sentiment on a delivery complaint tips negative, an escalation workflow triggers immediately \u2014 tagging the conversation as high priority, notifying a senior agent, and firing a carrier webhook.",
    accent: "#FF5A36",
    stat: "Escalation fires within 60 seconds of detection",
  },
];

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Meet customers where they shop. WhatsApp is the primary post-purchase channel for mobile-first buyers \u2014 Captain AI handles order queries, agents handle exceptions.",
    accent: "#25D366",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    desc: "Real-time chat embedded in your store. Proactive triggers fire when customers linger on checkout or returns pages \u2014 AI engages first, escalates when needed.",
    accent: "#0EA5A0",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "High-volume order confirmation inboxes routed and deflected automatically. Returns, complaints, and post-purchase campaigns all handled from one unified view.",
    accent: "#6366F1",
  },
];

const FEATURES = [
  {
    icon: Bot,
    title: "Captain AI Order Deflection",
    desc: "AI handles order status, tracking, and delivery queries end-to-end. Customers get instant answers; agents handle the exceptions that matter.",
  },
  {
    icon: Send,
    title: "Post-Purchase Campaigns",
    desc: "Schedule review requests, reorder reminders, and loyalty messages at optimal intervals post-purchase \u2014 automated, segmented, and channel-native.",
  },
  {
    icon: Tag,
    title: "Returns Routing Automation",
    desc: "Return and exchange requests auto-tagged, auto-routed to your returns team, and tracked under a dedicated SLA with no manual sorting.",
  },
  {
    icon: BarChart3,
    title: "Sentiment Monitoring",
    desc: "Negative sentiment on post-delivery conversations triggers escalation automatically \u2014 before a frustrated customer posts a review.",
  },
  {
    icon: Heart,
    title: "Health Score for Repeat Customers",
    desc: "Repeat customers are scored on purchase frequency, satisfaction, and support history. High-value customers flag for proactive outreach when health dips.",
  },
  {
    icon: Zap,
    title: "Multi-Channel Unified View",
    desc: "WhatsApp, email, and live chat conversations unified in one inbox per agent. No tab-switching, no missed messages, no duplicated handling.",
  },
];

export default function EcommercePage() {
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
              <ShoppingCart size={12} />
              E-Commerce
            </div>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05, marginBottom: 24, letterSpacing: "-0.04em" }}
            >
              Support that scales{" "}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)", fontWeight: 700 }}>
                with your orders
              </em>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.125rem", color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}
            >
              Peak season or steady volume \u2014 HaloDesk deflects repetitive order
              queries with AI, automates returns routing, and keeps sentiment
              escalations firing before a bad review lands.
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

      {/* ── 3 HIGH-VOLUME SCENARIOS ──────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">High-Volume Scenarios</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 16 }}>
            The three conversations{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              that eat your queue
            </em>
          </h2>
          <p style={{ color: "var(--nb-ink-muted)", maxWidth: 600, marginBottom: 48, lineHeight: 1.7 }}>
            Order inquiries, returns, and delivery complaints make up 70%+ of
            e-commerce support volume. HaloDesk automates the entire triage layer for all three.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {SCENARIOS.map((scenario, i) => {
              const Icon = scenario.icon;
              return (
                <div
                  key={scenario.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 32, display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "start", animationDelay: `${i * 100}ms` }}
                >
                  <div>
                    <div className="feature-icon" style={{ background: scenario.accent, width: 52, height: 52, marginBottom: 12 }}>
                      <Icon size={24} />
                    </div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.6875rem",
                        fontWeight: 800,
                        padding: "3px 8px",
                        background: scenario.accent,
                        color: "#fff",
                        borderRadius: 2,
                        textAlign: "center",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {scenario.badge}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 800, marginBottom: 10 }}>{scenario.title}</h3>
                    <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: 16 }}>
                      {scenario.desc}
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 12px",
                        background: "rgba(14,165,160,0.08)",
                        border: "1.5px solid rgba(14,165,160,0.3)",
                        borderRadius: 2,
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "var(--nb-teal)",
                      }}
                    >
                      {scenario.stat}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CHANNELS SECTION ─────────────────────────────────────── */}
      <section className="section" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">Primary Channels</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 16 }}>
            Where e-commerce customers{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-orange)" }}>
              reach out
            </em>
          </h2>
          <p style={{ color: "var(--nb-ink-muted)", maxWidth: 600, marginBottom: 48, lineHeight: 1.7 }}>
            WhatsApp, live chat, and email are the three channels that matter most for
            post-purchase support. HaloDesk unifies all three under a single agent inbox.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {CHANNELS.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <div
                  key={ch.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 28, animationDelay: `${i * 100}ms` }}
                >
                  <div className="feature-icon" style={{ background: ch.accent, marginBottom: 16 }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 10 }}>{ch.title}</h3>
                  <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                    {ch.desc}
                  </p>
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
            Built for{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              e-commerce teams
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
            <ShoppingCart size={12} />
            Scale Support
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--nb-bg)", marginBottom: 20 }}
          >
            Handle peak volume{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              without extra headcount
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{ color: "rgba(250,248,243,0.7)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7, fontSize: "1.0625rem" }}
          >
            AI deflection, automated routing, and sentiment escalation work together
            to absorb volume spikes \u2014 so your team can focus on the conversations
            that actually need a human.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-invert">
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link href="/features/ai-captain" className="btn-secondary">
              Explore Captain AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
