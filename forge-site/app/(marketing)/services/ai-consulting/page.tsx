import Link from "next/link";
import { ArrowRight, Brain, CheckCircle2, Map, BarChart3, Users, Shield } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INCLUDES = [
  "AI readiness assessment across people, process, and technology",
  "Strategic AI roadmap (12–24 month horizon)",
  "Current-state architecture review & gap analysis",
  "Model & vendor selection framework",
  "Build vs. buy analysis for AI components",
  "ROI modeling and business case development",
  "Team capability assessment & upskilling plan",
  "AI governance & ethics framework",
  "Pilot project identification & scoping",
  "Board & executive briefing materials",
];

const OFFERINGS = [
  { icon: Map, title: "AI Readiness Assessment", desc: "A structured 2-week engagement to assess your organization's data quality, infrastructure maturity, team capability, and change readiness for AI adoption." },
  { icon: BarChart3, title: "Strategic AI Roadmap", desc: "A 4-week deep-dive that produces a prioritized, resourced roadmap of AI initiatives tied directly to your business objectives and measurable outcomes." },
  { icon: Shield, title: "Architecture Review", desc: "An expert review of your current or proposed AI architecture — identifying risks, gaps, over-engineering, and optimization opportunities." },
  { icon: Users, title: "Team Training & Enablement", desc: "Customized training programs for engineering, product, and leadership teams — from AI fundamentals to hands-on LLM integration workshops." },
];

export default function AIConsultingPage() {
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
            <Link href={`${BASE}/services`} style={{ fontSize: 13, color: "var(--nb-ink-muted)", textDecoration: "none" }}>← Services</Link>
          </div>
          <span className="eyebrow" style={{ marginTop: 16 }}>AI Consulting & Strategy</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 700 }}>
            Get the strategy right before{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              you start building.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 580, marginBottom: 36 }}>
            AI transformation without strategy is expensive and slow. We help enterprises define the right AI investments, design the right architecture, and build the organizational capability to execute.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
              Book a Strategy Session <ArrowRight size={15} />
            </Link>
            <Link href={`${BASE}/process`} className="btn-secondary" style={{ textDecoration: "none" }}>
              Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Consulting offerings */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <span className="section-label">Consulting Engagements</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>Four focused engagement types</h2>
          </div>
          <div className="cards-2">
            {OFFERINGS.map((o, i) => {
              const Icon = o.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: 32 }}>
                  <div style={{
                    width: 44, height: 44, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                    boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "var(--radius)", marginBottom: 20,
                  }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 19, marginBottom: 10 }}>{o.title}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{o.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="container">
          <div className="fg-split-2col">
            <div>
              <span className="section-label">What&apos;s Included</span>
              <h2 style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: 16 }}>
                Strategy that leads to execution
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                Our consulting engagements aren&apos;t reports that gather dust. Every deliverable is designed to feed directly into execution — whether that&apos;s a Forge build engagement or an internal team initiative.
              </p>
              <div style={{ padding: "20px 24px", background: "var(--nb-rose-subtle)", border: "2px solid var(--nb-rose)", borderRadius: "var(--radius)", marginBottom: 32 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "var(--nb-rose)", marginBottom: 6 }}>Often leads to build</p>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>
                  70% of our consulting clients proceed to a build engagement. Strategy and engineering fees are seamlessly connected.
                </p>
              </div>
              <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
                Start with Strategy <ArrowRight size={14} />
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

      {/* Who we work with */}
      <section className="section section--surface">
        <div className="container container--narrow">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Who Engages Us</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>Right for organizations at every AI stage</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { stage: "AI-Naive", desc: "You know AI is important but don&apos;t know where to start. We conduct an assessment, identify your highest-value opportunities, and build a sequenced roadmap." },
              { stage: "AI-Experimenting", desc: "You&apos;ve run some pilots but they haven&apos;t scaled. We identify why, redesign the approach, and create the architecture for production-grade AI." },
              { stage: "AI-Scaling", desc: "You&apos;re deploying AI but costs are growing faster than value. We optimize your architecture, rationalize your vendor stack, and build efficiency into your systems." },
              { stage: "AI-Transforming", desc: "AI is becoming core to your competitive strategy. We work at the board level to ensure the organizational model, governance, and technical architecture are aligned." },
            ].map((s, i) => (
              <div key={i} style={{
                display: "flex", gap: 24, padding: "24px 0",
                borderBottom: "2px solid var(--nb-border-faint)", alignItems: "flex-start",
              }}>
                <div style={{
                  width: 120, flexShrink: 0,
                  padding: "4px 10px", background: "var(--nb-rose-subtle)",
                  border: "2px solid var(--nb-rose)", borderRadius: "var(--radius)",
                  fontSize: 12, fontWeight: 800, color: "var(--nb-rose)",
                  textAlign: "center",
                }}>{s.stage}</div>
                <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}
                   dangerouslySetInnerHTML={{ __html: s.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--rose">
        <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff", marginBottom: 16 }}>
            Start with a strategy session
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 32 }}>
            A 90-minute executive briefing to assess where you are and where the highest-value AI opportunities lie.
          </p>
          <Link href={`${BASE}/contact`} style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
            background: "#fff", color: "var(--nb-rose)", border: "2px solid #fff",
            fontWeight: 800, fontSize: 15, textDecoration: "none", borderRadius: "var(--radius)",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.15)",
          }}>
            Book a Session <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
