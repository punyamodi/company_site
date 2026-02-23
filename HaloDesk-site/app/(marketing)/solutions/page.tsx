import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cpu,
  Globe,
  HeartHandshake,
  LayoutGrid,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — HaloDesk",
  description:
    "HaloDesk solutions for customer success, support operations, enterprise IT, e-commerce, SaaS, and financial services.",
};

const SOLUTIONS = [
  {
    icon: HeartHandshake,
    title: "Customer Success",
    href: "/solutions/customer-success",
    tagline: "Turn support into retention.",
    desc: "Proactive health scores, conversation intelligence, and churn prevention workflows built into every support interaction.",
    accent: "#0EA5A0",
    tags: ["Health Scores", "Churn Prevention", "CS Automation"],
  },
  {
    icon: LayoutGrid,
    title: "Support Operations",
    href: "/solutions/support-operations",
    tagline: "Operations at scale.",
    desc: "SLA automation, agent shifts, queue management, and workflow orchestration for high-volume support floors.",
    accent: "#6366F1",
    tags: ["SLA Automation", "Agent Shifts", "Queue Management"],
  },
  {
    icon: Building2,
    title: "Enterprise IT",
    href: "/solutions/enterprise-it",
    tagline: "Internal helpdesk with enterprise controls.",
    desc: "IP access control, department routing, SLA by ticket priority, and role-based permissions for internal teams.",
    accent: "#F59E0B",
    tags: ["IP Whitelisting", "Department Routing", "Role Permissions"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    href: "/solutions/ecommerce",
    tagline: "Handle volume without adding headcount.",
    desc: "Order automation, returns routing, AI deflection, and post-purchase campaigns at any order volume.",
    accent: "#FF5A36",
    tags: ["Order Automation", "Returns Routing", "AI Deflection"],
  },
  {
    icon: Cpu,
    title: "SaaS & Technology",
    href: "/solutions/saas",
    tagline: "Support that matches your product tier.",
    desc: "Health scores, developer channels, billing routing, and tier-based escalation paths for product-led companies.",
    accent: "#059669",
    tags: ["Tier Routing", "Health Scores", "API Channel"],
  },
  {
    icon: ShieldCheck,
    title: "Financial Services",
    href: "/solutions/financial-services",
    tagline: "Compliance-ready customer service.",
    desc: "Data retention policies, audit logs, IP whitelisting, and regulated channel support built for financial compliance.",
    accent: "#8B5CF6",
    tags: ["Data Retention", "Audit Logs", "GDPR Exports"],
  },
];

const FEATURE_TAGS = [
  "Health Scores", "Agent Shifts", "SLA Automation", "AI Deflection",
  "Sentiment Analysis", "Workflow Builder", "Campaign Engine", "Queue Management",
  "IP Whitelisting", "Data Retention", "Audit Logs", "Multi-Channel",
  "Tier-Based Routing", "Contact Timeline", "CSAT Tracking", "Webhook Support",
  "Role Permissions", "Auto-Assignment", "Escalation Paths", "GDPR Exports",
];

export default function SolutionsPage() {
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
              <Globe size={12} />
              Solutions
            </div>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05, marginBottom: 24, letterSpacing: "-0.04em" }}
            >
              Support built for{" "}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)", fontWeight: 700 }}>
                your use case
              </em>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.125rem", color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}
            >
              HaloDesk is one platform — configured per context. Whether you&apos;re
              preventing churn, routing IT tickets by priority, or deflecting order
              inquiries at scale, there&apos;s a solution built for your team.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION CARDS ───────────────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">All Solutions</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 48 }}>
            Choose your{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              configuration
            </em>
          </h2>
          <div className="cards-3">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="nb-card anim-fade-up"
                  style={{
                    padding: 28,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    animationDelay: `${i * 80}ms`,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div className="feature-icon" style={{ background: s.accent }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: s.accent,
                        marginBottom: 6,
                      }}
                    >
                      {s.tagline}
                    </div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 800, marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {s.tags.map((tag) => (
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: s.accent,
                      marginTop: "auto",
                    }}
                  >
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURE TAGS ─────────────────────────────────────────── */}
      <section className="section" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">One Platform</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 16 }}>
            One platform,{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              configured to your context
            </em>
          </h2>
          <p style={{ color: "var(--nb-ink-muted)", maxWidth: 600, marginBottom: 40, lineHeight: 1.7 }}>
            Every HaloDesk solution draws from the same feature set — health scores,
            automation, sentiment, AI deflection, campaigns, and shifts. The difference
            is how they&apos;re configured for your team&apos;s priorities.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {FEATURE_TAGS.map((tag) => (
              <span
                key={tag}
                className="nb-card"
                style={{ padding: "8px 16px", fontSize: "0.875rem", fontWeight: 700, background: "var(--nb-surface)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <div className="eyebrow anim-fade-up" style={{ margin: "0 auto 24px" }}>
            <Users size={12} />
            Talk to Sales
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--nb-bg)", marginBottom: 20 }}
          >
            Tell us about{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              your team
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{ color: "rgba(250,248,243,0.7)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7, fontSize: "1.0625rem" }}
          >
            We&apos;ll show you how HaloDesk is configured for teams like yours — with
            the features, automations, and integrations that matter to your use case.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-invert">
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
