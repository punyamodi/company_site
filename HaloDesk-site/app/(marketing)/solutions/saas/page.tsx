import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Cpu,
  Heart,
  Key,
  MessageSquare,
  TrendingDown,
  Users,
  Webhook,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS & Technology — HaloDesk Solutions",
  description:
    "Support at every product tier. Health scores, developer channels, billing routing, and tier-based escalation paths for product-led companies.",
};

const FEATURES = [
  {
    icon: Users,
    title: "Tier-Based Routing",
    desc: "Route Enterprise customers to senior agents, Growth tier to standard support, and Free tier to self-serve resources \u2014 automatically based on plan tag.",
  },
  {
    icon: Heart,
    title: "Health Score Churn Prediction",
    desc: "Product engagement signals, support sentiment, and CSAT combine into a single health score per account. At-risk customers surface before renewal.",
  },
  {
    icon: Key,
    title: "Developer API Channel",
    desc: "A dedicated API channel for technical integrations and developer support conversations \u2014 routed to your developer experience team with code-friendly context.",
  },
  {
    icon: Zap,
    title: "Billing Inquiry Automation",
    desc: "Billing, upgrade, and downgrade requests auto-tagged and routed to your billing team with a dedicated SLA, separate from product support queues.",
  },
  {
    icon: ArrowRight,
    title: "Technical Escalation Paths",
    desc: "Multi-step escalation rules trigger when technical conversations stall: sentiment negative, wait time exceeded, or P1 tag applied \u2014 escalate to engineering.",
  },
  {
    icon: BarChart3,
    title: "SaaS Metrics Reporting",
    desc: "Support volume by product tier, churn correlation with CSAT, and health score cohort trends \u2014 reports built for SaaS product and CS teams.",
  },
];

export default function SaasPage() {
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
              <Cpu size={12} />
              SaaS &amp; Technology
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
              Support at every{" "}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)", fontWeight: 700 }}>
                product tier
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
              HaloDesk routes Enterprise, Growth, and Free tier customers differently,
              tracks health against product engagement, and fires churn alerts before
              a renewal conversation becomes a cancellation.
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

      {/* ── HEALTH SCORE FOR SAAS ────────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Left: explanation */}
            <div>
              <div className="section-label">Health Score for SaaS</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
                Engagement + support ={" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
                  churn signal
                </em>
              </h2>
              <p style={{ color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                For SaaS companies, health scores connect the dots between product
                engagement and support sentiment. An account that\u2019s logging in less
                AND opening more tickets is your highest churn risk \u2014 HaloDesk
                surfaces them automatically.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "30-day activity score", desc: "Login frequency and feature usage events tracked per account.", color: "#0EA5A0" },
                  { label: "Support sentiment trend", desc: "Negative sentiment events accumulate into a penalty on the health score.", color: "#F59E0B" },
                  { label: "CSAT component", desc: "Average satisfaction rating scaled into the 0\u2013100 health calculation.", color: "#6366F1" },
                  { label: "Resolution rate", desc: "How often support issues reach a resolved state \u2014 proxy for product reliability.", color: "#059669" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 12, height: 12, background: item.color, borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
                    <div>
                      <strong style={{ fontSize: "0.9375rem", display: "block", marginBottom: 2 }}>{item.label}</strong>
                      <span style={{ fontSize: "0.875rem", color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SVG health gauge */}
            <div className="anim-fade-up delay-200">
              <svg
                viewBox="0 0 400 380"
                fill="none"
                style={{ width: "100%", maxWidth: 400, filter: "drop-shadow(6px 6px 0px #0A0A0A)" }}
              >
                <rect x="0" y="0" width="400" height="380" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
                <rect x="0" y="0" width="400" height="44" rx="4" fill="#0A1628" stroke="#0A0A0A" strokeWidth="2" />
                <circle cx="16" cy="16" r="5" fill="#ff5f57" />
                <circle cx="32" cy="16" r="5" fill="#febc2e" />
                <circle cx="48" cy="16" r="5" fill="#28c840" />
                <text x="68" y="27" fill="#FAF8F3" fontSize="11" fontWeight="700" fontFamily="sans-serif">Account Health \u00b7 Acme SaaS Co.</text>

                {/* Gauge arc background */}
                <path d="M 60 280 A 140 140 0 0 1 340 280" stroke="#E5E7EB" strokeWidth="22" strokeLinecap="round" fill="none" />
                {/* Animated fill */}
                <path d="M 60 280 A 140 140 0 0 1 340 280" stroke="#0EA5A0" strokeWidth="22" strokeLinecap="round" fill="none"
                  strokeDasharray="440" strokeDashoffset="110">
                  <animate attributeName="stroke-dashoffset" values="440;110;220;330;110" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                  <animate attributeName="stroke" values="#0EA5A0;#059669;#F59E0B;#DC2626;#0EA5A0" dur="6s" repeatCount="indefinite" />
                </path>
                {/* Needle */}
                <line x1="200" y1="280" x2="90" y2="176" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" values="-50 200 280;16 200 280;-16 200 280;-38 200 280;-50 200 280" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                </line>
                <circle cx="200" cy="280" r="12" fill="#0A1628" />

                {/* Score label */}
                <text x="200" y="318" textAnchor="middle" fill="#0A0A0A" fontSize="36" fontWeight="900" fontFamily="sans-serif">74</text>
                <text x="200" y="338" textAnchor="middle" fill="#7A746A" fontSize="10" fontFamily="sans-serif" letterSpacing="2">HEALTH SCORE</text>

                {/* Tier badges */}
                <text x="56" y="302" fill="#DC2626" fontSize="8" fontWeight="700" fontFamily="sans-serif">CRITICAL</text>
                <text x="346" y="302" fill="#059669" fontSize="8" fontWeight="700" fontFamily="sans-serif" textAnchor="end">CHAMPION</text>

                {/* Status badge */}
                <rect x="136" y="350" width="128" height="22" rx="3" fill="#0EA5A0">
                  <animate attributeName="fill" values="#0EA5A0;#059669;#F59E0B;#DC2626;#0EA5A0" dur="6s" repeatCount="indefinite" />
                </rect>
                <text x="200" y="365" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800" fontFamily="sans-serif">HEALTHY
                  <animate attributeName="textContent" values="HEALTHY;CHAMPION;NEEDS ATTENTION;CRITICAL;HEALTHY" dur="6s" repeatCount="indefinite" />
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPER CHANNEL SECTION ────────────────────────────── */}
      <section className="section" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <div className="section-label">Developer Channel</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
                A dedicated channel{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
                  for technical users
                </em>
              </h2>
              <p style={{ color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                Technical customers \u2014 developers integrating your API or debugging
                webhooks \u2014 get a dedicated support channel with routing to your
                developer experience team.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: Key,         text: "API channel routes to developer-specialist agents" },
                  { icon: Webhook,     text: "Webhook support context passed in conversation metadata" },
                  { icon: BookOpen,    text: "Knowledge base articles surfaced automatically by Captain AI" },
                  { icon: MessageSquare, text: "Technical escalations path to engineering Slack channels" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 28, height: 28, background: "var(--nb-teal)", border: "2px solid var(--nb-border)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={14} color="#fff" />
                      </div>
                      <span style={{ fontSize: "0.9375rem", color: "var(--nb-ink-muted)", lineHeight: 1.5, paddingTop: 4 }}>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Code snippet */}
            <div className="anim-fade-up delay-200">
              <div className="code-block">
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" />
                  <span className="code-dot code-dot--y" />
                  <span className="code-dot code-dot--g" />
                  <span style={{ color: "#6b7280", fontSize: 11, marginLeft: 8 }}>developer_channel.json</span>
                </div>
                <div className="code-block__body">
                  <pre>
                    <span className="tok-var">{"{"}{"\n"}</span>
                    <span className="tok-string">  "channel"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"api"</span>
                    <span className="tok-var">,{"\n"}</span>
                    <span className="tok-string">  "routing"</span>
                    <span className="tok-var">: {"{"}{"\n"}</span>
                    <span className="tok-string">    "team"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"developer-experience"</span>
                    <span className="tok-var">,{"\n"}</span>
                    <span className="tok-string">    "priority"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"high"</span>
                    <span className="tok-var">,{"\n"}</span>
                    <span className="tok-string">    "sla_minutes"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-keyword">60</span>
                    {"\n  },"}{"\n"}
                    <span className="tok-string">  "auto_tag"</span>
                    <span className="tok-var">: [</span>
                    <span className="tok-string">"technical"</span>
                    <span className="tok-var">, </span>
                    <span className="tok-string">"api"</span>
                    <span className="tok-var">, </span>
                    <span className="tok-string">"developer"</span>
                    <span className="tok-var">],{"\n"}</span>
                    <span className="tok-string">  "kb_suggest"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-keyword">true</span>
                    {"\n}"}
                  </pre>
                </div>
              </div>
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
              SaaS teams
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
            <Cpu size={12} />
            SaaS Support
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--nb-bg)", marginBottom: 20 }}
          >
            Support that grows{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              with your product
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{ color: "rgba(250,248,243,0.7)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7, fontSize: "1.0625rem" }}
          >
            Tier-based routing, health score churn prediction, and developer channels
            configured for how SaaS companies actually work.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-invert">
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link href="/features/health-scores" className="btn-secondary">
              Explore Health Scores
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
