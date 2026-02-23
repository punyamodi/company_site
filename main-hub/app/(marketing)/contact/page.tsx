import type { Metadata } from "next";
import { ArrowRight, Mail, Phone, Building2, Shield, Server, Layers, Clock } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Contact Sales",
  description: "Speak with the AI Platform enterprise sales team. Custom pricing, deployment options, and dedicated support for regulated enterprises.",
};

const REASONS = [
  { icon: Building2, title: "Custom Enterprise Packaging", desc: "Tailored bundle of one or all four products with negotiated terms." },
  { icon: Server, title: "VPC & On-Premise Deployment", desc: "Deploy entirely within your infrastructure with dedicated support." },
  { icon: Shield, title: "Security & Compliance Review", desc: "Walk through our SOC 2, HIPAA, and GDPR documentation with our team." },
  { icon: Clock, title: "Priority Onboarding & SLA", desc: "Dedicated success manager and custom SLA commitments." },
];

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="grid-bg" />
        <div className="container--narrow" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex" }}>Contact Sales</div>
          <h1 style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.045em", marginBottom: 20, lineHeight: 1 }}>
            Let{"'"}s build your{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>AI infrastructure.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 560, marginBottom: 48 }}>
            Our enterprise team will work with you to architect the right solution — from a single product to the full suite.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container--narrow" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          {/* Contact form */}
          <div className="nb-card" style={{ padding: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8 }}>Request a Demo</h2>
            <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", marginBottom: 28 }}>
              We typically respond within one business day.
            </p>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={(e) => e.preventDefault()}>
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                { id: "email", label: "Work Email", type: "email", placeholder: "jane@company.com" },
                { id: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
                { id: "role", label: "Job Title", type: "text", placeholder: "CTO / VP Engineering / etc." },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 6 }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%", padding: "10px 14px",
                      border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
                      background: "var(--nb-bg)", fontSize: 14, fontFamily: "var(--font-bricolage,sans-serif)",
                      color: "var(--nb-ink)", outline: "none", transition: "box-shadow .15s",
                    }}
                    onFocus={(e) => (e.currentTarget as HTMLInputElement).style.boxShadow = "var(--shadow-brutal-sm)"}
                    onBlur={(e) => (e.currentTarget as HTMLInputElement).style.boxShadow = "none"}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="products" style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 6 }}>
                  Products of Interest
                </label>
                <select
                  id="products"
                  style={{ width: "100%", padding: "10px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-bg)", fontSize: 14, fontFamily: "var(--font-bricolage,sans-serif)", color: "var(--nb-ink)", outline: "none" }}
                >
                  <option value="">Select products...</option>
                  <option value="full-suite">Full Suite (All Four Products)</option>
                  <option value="infergate">InferGate — AI Gateway</option>
                  <option value="converse">Converse — Voice AI</option>
                  <option value="halodesk">HaloDesk — Support Intelligence</option>
                  <option value="onyx">Onyx — Enterprise Knowledge AI</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 6 }}>
                  Tell Us More (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Describe your use case, scale, and any specific requirements..."
                  style={{ width: "100%", padding: "10px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-bg)", fontSize: 14, fontFamily: "var(--font-bricolage,sans-serif)", color: "var(--nb-ink)", outline: "none", resize: "vertical" }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                Request Demo <ArrowRight size={15} />
              </button>
            </form>
          </div>

          {/* Info side */}
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24 }}>Why enterprise teams talk to us</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {REASONS.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                      <Icon size={18} color="var(--nb-ink)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>{r.title}</h4>
                      <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ padding: 24, background: "var(--nb-surface)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)" }}>
              <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink-muted)", marginBottom: 16 }}>Direct Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="mailto:enterprise@aiplatform.io" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", fontSize: 14, fontWeight: 600, color: "var(--nb-ink)" }}>
                  <Mail size={16} color="var(--nb-ink-muted)" /> enterprise@aiplatform.io
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--nb-ink)" }}>
                  <Phone size={16} color="var(--nb-ink-muted)" /> +1 (888) AI-SUITE
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--nb-yellow-subtle)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)" }}>
              <p style={{ fontSize: 13.5, fontWeight: 600, color: "var(--nb-ink)", lineHeight: 1.6 }}>
                <strong>No public pricing.</strong> Enterprise pricing is custom-designed based on your organization{"'"}s scale, deployment requirements, and suite composition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
