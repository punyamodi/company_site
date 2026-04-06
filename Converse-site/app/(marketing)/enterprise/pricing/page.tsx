import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Users,
  Headphones,
  Wrench,
  BarChart3,
} from "lucide-react";

const TIERS = [
  {
    name: "Professional",
    tagline: "For growing teams scaling production voice workloads",
    description:
      "Designed for product and engineering teams that have moved past proof-of-concept and are scaling voice agents to serve real users. Includes the full Converse feature set with self-serve onboarding and standard support.",
    included: [
      "Full access to all 20+ integrations",
      "Up to 5 team members",
      "Standard RBAC permissions",
      "99.9% uptime SLA",
      "Business-hours support",
      "Managed cloud deployment",
      "Basic usage dashboards",
      "Community + documentation access",
    ],
    cta: "Contact Sales",
    featured: false,
    badge: "#374151",
  },
  {
    name: "Enterprise",
    tagline: "For organizations with security, compliance, and scale requirements",
    description:
      "Purpose-built for enterprise engineering and operations teams. Adds SSO, audit logging, private deployment options, dedicated success management, and custom contractual terms.",
    included: [
      "Everything in Professional",
      "SSO / SAML 2.0 integration",
      "Full audit log access and export",
      "Custom RBAC role definitions",
      "Private cloud or on-premise deployment",
      "Data residency controls",
      "99.95%+ uptime SLA",
      "24×7 dedicated support",
      "Dedicated Customer Success Manager",
      "Professional services hours",
      "Custom contract and DPA",
      "HIPAA BAA available",
      "Volume discount negotiation",
    ],
    cta: "Contact Sales",
    featured: true,
    badge: "#7C3AED",
  },
];

const PRICING_PRINCIPLES = [
  {
    icon: BarChart3,
    title: "Usage-based metering",
    description:
      "Core consumption is metered on pipeline minutes — the actual time your voice agents are actively processing conversations. You pay for what your product uses.",
  },
  {
    icon: Users,
    title: "Seat licensing",
    description:
      "Team member seats are licensed separately from usage. Developer and admin seats have distinct pricing, so you're not paying for full seats for ops-only accounts.",
  },
  {
    icon: DollarSign,
    title: "Volume discounts",
    description:
      "Organizations committing to predictable usage volumes receive negotiated discount tiers. Annual commitments yield the deepest discounts.",
  },
  {
    icon: Wrench,
    title: "Professional services",
    description:
      "Architecture reviews, custom integration development, and dedicated onboarding are available as statement-of-work engagements with fixed or T&M pricing.",
  },
];

const FAQS = [
  {
    q: "How is usage measured?",
    a: "Usage is measured in pipeline-minutes — the wall-clock duration of active voice sessions passing through a Converse pipeline. Idle time between sessions is not metered.",
  },
  {
    q: "Are provider API costs included?",
    a: "Converse licensing does not include third-party provider costs (e.g., Deepgram, OpenAI, ElevenLabs). Those are billed directly through your own provider accounts. This keeps you in full control of your AI spend and avoids markup.",
  },
  {
    q: "Can we start on Professional and upgrade to Enterprise?",
    a: "Yes. The upgrade path is seamless. Enterprise features are activated on your existing account. Data, configurations, and integrations carry over without any migration work.",
  },
  {
    q: "What does 'dedicated support' mean at the Enterprise tier?",
    a: "Enterprise customers get a named support engineer, a Slack-based support channel with a guaranteed first-response SLA, and a dedicated Customer Success Manager who understands your architecture and use cases.",
  },
  {
    q: "Is there a free trial or proof-of-concept period?",
    a: "We offer a structured proof-of-concept engagement for enterprise evaluations, scoped with your team and guided by a solutions engineer. Contact sales to initiate a PoC.",
  },
  {
    q: "How are volume discounts structured?",
    a: "Volume discounts are negotiated based on committed annual pipeline-minutes and seat count. Tiers are customized per engagement rather than published publicly — reach out to sales for a custom quote.",
  },
];

export const metadata: Metadata = {
  title: "Enterprise Pricing | Converse",
  description: "Flexible, transparent enterprise pricing for Converse. Scale your AI voice platform with predictable costs.",
  openGraph: {
    title: "Enterprise Pricing | Converse",
    description: "Flexible, transparent enterprise pricing for Converse. Scale your AI voice platform with predictable costs.",
    type: "website",
  },
};

export default function EnterprisePricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative", textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
            <span className="eyebrow anim-fade-up">Pricing</span>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}
            >
              Pricing built for{" "}
              <span style={{ color: "var(--nb-violet)" }}>enterprise scale</span>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.15rem", marginTop: "1.5rem", lineHeight: 1.7, opacity: 0.8 }}
            >
              Usage-based metering. Volume discounts. Custom contracts. No artificial feature gates.
              Pricing is tailored to your organization's scale and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Pricing Philosophy</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginTop: "0.5rem" }}>How Converse pricing works</h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {PRICING_PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="nb-card">
                  <div className="feature-icon" style={{ marginBottom: "1rem" }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ opacity: 0.75, lineHeight: 1.65 }}>{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>Two tiers, custom pricing</h2>
            <p style={{ marginTop: "0.75rem", opacity: 0.65, maxWidth: "520px", margin: "0.75rem auto 0" }}>
              All pricing is quote-based. Contact sales for a proposal tailored to your usage profile.
            </p>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem", maxWidth: "900px", margin: "0 auto" }}>
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="nb-card"
                style={{
                  position: "relative",
                  border: tier.featured ? "3px solid var(--nb-violet)" : "2px solid #000",
                  boxShadow: tier.featured ? "6px 6px 0 var(--nb-violet)" : "4px 4px 0 #000",
                }}
              >
                {tier.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--nb-violet)",
                      color: "#fff",
                      border: "2px solid #000",
                      padding: "0.2rem 1rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div style={{ marginBottom: "0.5rem" }}>
                  <span
                    style={{
                      background: tier.badge,
                      color: "#fff",
                      border: "1.5px solid #000",
                      padding: "0.2rem 0.75rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {tier.name}
                  </span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "1.3rem", marginTop: "0.75rem", marginBottom: "0.25rem" }}>{tier.tagline}</h3>
                <p style={{ opacity: 0.7, fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>{tier.description}</p>
                <div
                  style={{
                    background: tier.featured ? "#F5F0FF" : "#FAFAFA",
                    border: "1.5px solid #000",
                    padding: "1.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.75rem", opacity: 0.6 }}>
                    What's included
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {tier.included.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                        <CheckCircle size={15} color={tier.badge} style={{ marginTop: "2px", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.88rem", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    background: "#111",
                    padding: "1rem",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 900 }}>Custom Quote</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", marginTop: "0.2rem" }}>
                    Contact sales for pricing
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                    background: tier.featured ? "var(--nb-violet)" : "#111",
                  }}
                >
                  {tier.cta} <ArrowRight size={15} style={{ marginLeft: "0.4rem", display: "inline" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Add-ons</span>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem" }}>Additional services</h2>
          </div>
          <div className="cards-3" style={{ gap: "1.25rem" }}>
            {[
              {
                icon: Headphones,
                title: "Dedicated Support",
                description: "Named support engineer, private Slack channel, guaranteed SLA response times, and quarterly business reviews.",
              },
              {
                icon: Wrench,
                title: "Professional Services",
                description: "Architecture review, custom integration development, and pipeline optimization by Converse solutions engineers.",
              },
              {
                icon: Users,
                title: "Training & Onboarding",
                description: "Hands-on workshops, team onboarding sessions, and certification preparation for your engineering org.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="nb-card">
                  <div className="feature-icon" style={{ marginBottom: "1rem" }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ opacity: 0.75, lineHeight: 1.65, fontSize: "0.9rem" }}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">FAQ</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginTop: "0.5rem" }}>Pricing FAQ</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQS.map((faq) => (
              <div key={faq.q} className="nb-card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <HelpCircle size={18} color="var(--nb-violet)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <h3 style={{ fontWeight: 800, fontSize: "1rem" }}>{faq.q}</h3>
                </div>
                <p style={{ opacity: 0.75, lineHeight: 1.7, fontSize: "0.92rem", paddingLeft: "1.75rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff" }}>
            Get a custom pricing proposal
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.1rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            Share your expected usage, team size, and deployment requirements.
            We'll put together a proposal within one business day.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
            Contact Sales for Pricing <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
