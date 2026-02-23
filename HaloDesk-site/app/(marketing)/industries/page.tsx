import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Code2, Landmark, Stethoscope, Truck, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — HaloDesk",
  description: "HaloDesk adapts to the customer support requirements of every industry — from e-commerce and SaaS to financial services and healthcare.",
};

const INDUSTRIES = [
  {
    icon: ShoppingBag,
    name: "E-Commerce & Retail",
    tagline: "From cart to delivery — and every return in between.",
    desc: "Handle order status queries, return authorizations, and logistics escalations across WhatsApp, live chat, and email. Captain AI resolves routine order lookups instantly, freeing agents for complex exceptions.",
    metrics: ["Order inquiry deflection", "Post-purchase NPS recovery", "Multi-channel returns handling"],
    href: "/solutions/ecommerce",
    color: "#F59E0B",
  },
  {
    icon: Code2,
    name: "SaaS & Technology",
    tagline: "Support that scales with your user base.",
    desc: "Intelligent routing sends billing questions to finance-trained agents and technical issues to engineering-adjacent support. Customer health scores surface churn risk before it becomes churn.",
    metrics: ["Health score churn prediction", "Tier-based routing", "Developer channel support"],
    href: "/solutions/saas",
    color: "var(--nb-teal)",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    tagline: "Compliance-ready support for regulated products.",
    desc: "IP whitelisting, data retention policies, GDPR tooling, and full audit trails. HaloDesk gives financial services teams the controls they need to operate under regulatory scrutiny.",
    metrics: ["IP access control", "Data retention compliance", "Audit-ready conversation logs"],
    href: "/solutions/financial-services",
    color: "#8B5CF6",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    tagline: "Sensitive conversations managed with care.",
    desc: "Sentiment analysis flags distressed patients for immediate human escalation. Contact anonymization and configurable data retention support data minimization obligations.",
    metrics: ["Sentiment-driven escalation", "PII anonymization", "Data minimization controls"],
    href: "/solutions/customer-success",
    color: "#059669",
  },
  {
    icon: Truck,
    name: "Logistics & Delivery",
    tagline: "High-volume, time-critical support at scale.",
    desc: "Automated workflows handle shipment status, re-delivery booking, and damage claims. Agent shifts ensure 24/7 coverage without manual scheduling overhead.",
    metrics: ["Automated shipment status", "24/7 shift management", "Escalation path automation"],
    href: "/solutions/support-operations",
    color: "#EF4444",
  },
  {
    icon: Building2,
    name: "Enterprise IT & Internal",
    tagline: "Internal helpdesk with enterprise-grade controls.",
    desc: "Route IT service requests across hardware, software, and facilities teams with precision automation rules. IP whitelisting ensures your internal tool stays internal.",
    metrics: ["Department-level routing", "SLA by ticket priority", "IP-locked internal access"],
    href: "/solutions/enterprise-it",
    color: "#6366F1",
  },
];

export default function IndustriesPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "88px 24px 80px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }}/>
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative", textAlign: "center" }}>
          <div className="eyebrow anim-fade-up">Industries</div>
          <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(48px,7vw,96px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.9, marginBottom: 28, maxWidth: 800, margin: "0 auto 28px" }}>
            Built for your<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>industry&apos;s realities.</span>
          </h1>
          <p className="anim-fade-up delay-200" style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.72, maxWidth: 560, margin: "0 auto 40px" }}>
            HaloDesk adapts to the workflows, compliance requirements, and customer expectations of each vertical — not the other way around.
          </p>
          <Link href="/contact" className="btn-primary anim-fade-up delay-300">Get Industry-Specific Demo <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Industry cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link key={ind.name} href={ind.href} style={{ textDecoration: "none" }}>
                  <div className="nb-card" style={{ padding: "36px 32px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                      <div style={{ width: 44, height: 44, background: ind.color + "15", border: `2px solid ${ind.color}`, borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={20} color={ind.color} />
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.025em" }}>{ind.name}</h3>
                    </div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: ind.color, marginBottom: 12, fontStyle: "italic", fontFamily: "var(--font-fraunces, serif)" }}>{ind.tagline}</p>
                    <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.72, flex: 1, marginBottom: 20 }}>{ind.desc}</p>
                    <div style={{ borderTop: "1px solid var(--nb-border-faint)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                      {ind.metrics.map((m) => (
                        <div key={m} style={{ fontSize: 11.5, fontWeight: 700, color: "var(--nb-ink-muted)", display: "flex", alignItems: "center", gap: 6 }}>
                          <div style={{ width: 4, height: 4, background: ind.color, borderRadius: "50%" }}/>
                          {m}
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 16, fontSize: 12, fontWeight: 800, color: ind.color, display: "flex", alignItems: "center", gap: 4 }}>
                      View solutions <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-industry proof */}
      <section className="section section--surface">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label">Common Ground</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24 }}>
            Whatever your industry,<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>the fundamentals apply.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.72, maxWidth: 600, margin: "0 auto 48px" }}>
            Every HaloDesk deployment includes the full omnichannel inbox, Captain AI, workflow automation, and analytics platform — configured for your specific use case.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", maxWidth: 700, margin: "0 auto 48px" }}>
            {["Omnichannel Inbox", "Captain AI Agent", "Workflow Automation", "Sentiment Analysis", "Customer Health Scores", "SLA Management", "Agent Shifts", "Analytics & Reporting", "Data Governance", "Enterprise Security"].map((tag) => (
              <span key={tag} style={{ padding: "7px 14px", background: "var(--nb-bg)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 12.5, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <Link href="/contact" className="btn-primary">Request an Industry Demo <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
