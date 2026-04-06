import type { Metadata } from "next";
import { ArrowRight, Shield, Server, Lock, BarChart3, Layers, Users, CheckCircle, Globe, Code2, Smartphone, Bot } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "Enterprise delivery with dedicated teams, legal/compliance readiness, and custom engagement models for complex organisations.",
};

const ENTERPRISE_SERVICES = [
  {
    icon: Users,
    title: "Dedicated Engineering Team",
    desc: "A fully managed team of senior engineers embedded in your organisation — full-time, fully accountable.",
  },
  {
    icon: Code2,
    title: "Multi-Product Development",
    desc: "Running multiple parallel projects simultaneously? We staff and manage multiple dedicated squads for you.",
  },
  {
    icon: Smartphone,
    title: "Full Digital Transformation",
    desc: "End-to-end modernisation of legacy systems — new frontend, backend migration, mobile apps, and AI integration.",
  },
  {
    icon: Bot,
    title: "AI Centre of Excellence",
    desc: "Establish an internal AI capability with our support — tooling, processes, training, and ongoing advisory.",
  },
  {
    icon: Shield,
    title: "White-Label Development",
    desc: "We build and you brand it. Full white-label delivery for agencies and consultancies that need engineering capacity.",
  },
  {
    icon: Lock,
    title: "NDA & IP Protection",
    desc: "Enterprise-grade NDAs, full IP assignment, and legal frameworks designed for sensitive enterprise engagements.",
  },
];

const COMPLIANCE = [
  { name: "NDA on Day One",      desc: "Mutual NDA signed before any scoping discussion begins. Your ideas stay yours." },
  { name: "Full IP Assignment",  desc: "All code, designs, and deliverables are assigned to you. No IP held by us." },
  { name: "GDPR Compliant",      desc: "Data processing agreements available for EU-based clients and data." },
  { name: "SOC 2 Ready Builds",  desc: "We architect solutions that meet SOC 2 requirements from the start." },
];

const TIERS = [
  {
    name: "Project",
    desc: "Fixed-scope delivery for enterprises with well-defined requirements and clear timelines.",
    features: [
      "Fixed price & timeline",
      "Dedicated project manager",
      "Weekly demo cadence",
      "Full IP ownership",
      "3-month post-launch support",
      "Standard NDA",
    ],
    cta: "Discuss a Project",
  },
  {
    name: "Dedicated Team",
    desc: "A full embedded engineering team — senior engineers, designer, and PM — working exclusively on your product.",
    featured: true,
    features: [
      "3–10 engineer dedicated squad",
      "Embedded with your team",
      "Custom SLA & response times",
      "Quarterly strategy reviews",
      "Full IP assignment",
      "Custom NDA & DPA",
      "Minimum 6-month engagement",
    ],
    cta: "Request Dedicated Team",
  },
  {
    name: "Enterprise Partnership",
    desc: "A long-term strategic partnership for enterprises running multiple digital and AI initiatives simultaneously.",
    features: [
      "Multiple parallel workstreams",
      "Executive sponsor relationship",
      "AI strategy & consulting",
      "Priority resource allocation",
      "Custom contracts & billing",
      "On-site visits available",
    ],
    cta: "Speak to Our Team",
  },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex" }}>Enterprise</div>
          <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", letterSpacing: "-0.045em", marginBottom: 20, lineHeight: 1, maxWidth: 800 }}>
            Built for organisations that{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>can{"'"}t afford to get it wrong.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 640, marginBottom: 40 }}>
            Large organisations have different requirements — longer timelines, compliance needs, IP sensitivity, and the need for genuine accountability. We{"'"}ve built our enterprise service around that reality.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary">
              Talk to Our Team <ArrowRight size={15} />
            </a>
            <a href={`${BASE}/services/`} className="btn-secondary">
              All Services
            </a>
          </div>
        </div>
      </section>

      {/* Enterprise services */}
      <section className="section section--surface">
        <div className="container">
          <div className="hub-arch-grid" style={{ gap: 64 }}>
            <div>
              <div className="section-label">Enterprise Services</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-0.04em", marginBottom: 16, lineHeight: 1.05 }}>
                More than a vendor.{" "}
                <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>A partner.</span>
              </h2>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 32 }}>
                Enterprise clients don{"'"}t just need code — they need accountability, consistency, and a team that understands their business. That{"'"}s what we deliver.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {COMPLIANCE.map((item) => (
                  <div key={item.name} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <CheckCircle size={18} color="var(--nb-green)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em" }}>{item.name}</h4>
                      <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", marginTop: 2 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {ENTERPRISE_SERVICES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="nb-card" style={{ padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                      <Icon size={16} color="var(--nb-ink)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 2 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement tiers */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">Engagement Models</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
              Designed for organisations at every scale.
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 520, margin: "0 auto" }}>
              All enterprise engagements are priced on a custom basis. Contact our team to receive a proposal tailored to your requirements.
            </p>
          </div>

          <div className="hub-platform-grid" style={{ marginBottom: 48 }}>
            {TIERS.map((tier) => (
              <div key={tier.name} className="nb-card" style={{ padding: 32, position: "relative", borderTop: tier.featured ? "4px solid var(--nb-yellow)" : "2px solid var(--nb-border)" }}>
                {tier.featured && (
                  <div style={{ position: "absolute", top: -1, right: 20, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", padding: "3px 10px", fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{tier.name}</h3>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6, marginBottom: 24, minHeight: 48 }}>{tier.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, fontWeight: 500, color: "var(--nb-ink)" }}>
                      <CheckCircle size={13} color="var(--nb-green)" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`${BASE}/contact/`}
                  className={tier.featured ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", justifyContent: "center" }}>
                  {tier.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", padding: "28px 32px", background: "var(--nb-surface)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)" }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--nb-ink-muted)" }}>
              All enterprise engagements include a dedicated project manager, weekly reporting, and full IP assignment.{" "}
              <strong style={{ color: "var(--nb-ink)" }}>No template projects. No outsourced teams. Senior engineers only.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert" style={{ position: "relative" }}>
        <div className="container--tight" style={{ textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.045em", color: "var(--nb-bg)", marginBottom: 16, lineHeight: 1 }}>
            Ready to discuss your requirements?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(250,248,243,0.7)", marginBottom: 36, lineHeight: 1.65 }}>
            Our team will take you through a tailored discovery session — aligned to your technical requirements, timeline, and budget.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary">
              Schedule a Call <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


