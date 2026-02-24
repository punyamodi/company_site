import Link from "next/link";
import { ArrowRight, Code2, CheckCircle2, Zap, Shield, Server } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INCLUDES = [
  "REST & GraphQL API integration layers",
  "Custom middleware engineering",
  "Streaming data pipeline design",
  "AI provider migration (OpenAI, Anthropic, Azure AI, AWS Bedrock)",
  "Authentication, auth proxy, and secrets management",
  "Rate limiting, retry logic & circuit breakers",
  "Observability, logging & alerting setup",
  "Legacy system AI augmentation",
  "Webhook & event-driven architectures",
  "Performance testing & load validation",
];

const BENEFITS = [
  { icon: Zap, title: "Faster time to value", desc: "Purpose-built integrations deploy faster than generic platforms. No abstraction layers you don't need." },
  { icon: Shield, title: "Security-first design", desc: "Every integration is designed with least-privilege access, audit logging, and enterprise security standards." },
  { icon: Server, title: "Fits your stack", desc: "We integrate with whatever you already have — no rip-and-replace required. AI enhances your existing systems." },
  { icon: Code2, title: "Fully maintained", desc: "We document everything, write tests, and provide ongoing support. Your team inherits maintainable, production-grade code." },
];

export default function AIIntegrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 64, position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(var(--nb-border-faint) 1px, transparent 1px), linear-gradient(90deg, var(--nb-border-faint) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container">
          <div style={{ marginBottom: 8 }}>
            <Link href={`${BASE}/services`} style={{ fontSize: 13, color: "var(--nb-ink-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
              ← Services
            </Link>
          </div>
          <span className="eyebrow" style={{ marginTop: 16 }}>Custom AI Integration</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 700 }}>
            Connect AI to the systems{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              you already use.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
            Your enterprise has years of investment in existing systems. We build the integration layer that brings AI capabilities into your workflow without replacing what works.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link href={`${BASE}/process`} className="btn-secondary" style={{ textDecoration: "none" }}>
              Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section section--surface">
        <div className="container">
          <div className="fg-split-2col">
            <div>
              <span className="section-label">What&apos;s Included</span>
              <h2 style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: 16 }}>
                A complete integration, not just a plugin
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 32 }}>
                Every AI integration engagement includes full-stack engineering from API design to production deployment. We handle the complexity so your team can focus on using the capability.
              </p>
              <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
                Discuss Your Integration <ArrowRight size={14} />
              </Link>
            </div>
            <div className="nb-card" style={{ padding: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 20 }}>
                Deliverables
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {INCLUDES.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={14} color="var(--nb-rose)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <span className="section-label">Why Custom Integration</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>Built for your context, not everyone&apos;s</h2>
          </div>
          <div className="cards-2">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: 28 }}>
                  <div style={{
                    width: 40, height: 40, background: "var(--nb-rose-subtle)", border: "2px solid var(--nb-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "var(--radius)", marginBottom: 16,
                  }}>
                    <Icon size={18} color="var(--nb-rose)" />
                  </div>
                  <h3 style={{ fontSize: 17, marginBottom: 8 }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="section section--surface">
        <div className="container container--narrow">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">How We Engage</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>From brief to production</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { week: "Week 1–2", phase: "Discovery", desc: "We audit your existing systems, APIs, data flows, and security posture. We document exactly what needs to connect." },
              { week: "Week 2–3", phase: "Architecture", desc: "We design the full integration architecture — component diagram, data flow, security model, and tech stack decision." },
              { week: "Week 3–N", phase: "Engineering", desc: "We build iteratively with weekly demos. You see real progress, not a 3-month black box." },
              { week: "Final 2 weeks", phase: "Testing & Deploy", desc: "Comprehensive testing, load validation, security review, and production deployment with full documentation." },
            ].map((p, i) => (
              <div key={i} style={{
                display: "flex", gap: 24, padding: "24px 0",
                borderBottom: "2px solid var(--nb-border-faint)", alignItems: "flex-start",
              }}>
                <div style={{ width: 80, flexShrink: 0 }}>
                  <span style={{
                    fontFamily: "var(--font-jetbrains, monospace)", fontSize: 11,
                    color: "var(--nb-rose)", fontWeight: 700,
                  }}>{p.week}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: 16, marginBottom: 6 }}>{p.phase}</h4>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--rose">
        <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff", marginBottom: 16 }}>
            Ready to connect AI to your enterprise?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 32 }}>
            Tell us about your systems and your goals. We&apos;ll design the integration architecture.
          </p>
          <Link href={`${BASE}/contact`} style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
            background: "#fff", color: "var(--nb-rose)", border: "2px solid #fff",
            fontWeight: 800, fontSize: 15, textDecoration: "none", borderRadius: "var(--radius)",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.15)",
          }}>
            Start a Project <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
