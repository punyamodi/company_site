import Link from "next/link";
import { ArrowRight, Search, Map, Wrench, TestTube, Rocket, HeartPulse } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PHASES = [
  {
    num: "01",
    title: "Discovery & Assessment",
    duration: "Week 1–2",
    icon: Search,
    desc: "We embed with your team to deeply understand your business. We map current systems, data sources, processes, and pain points. We interview stakeholders across departments and document requirements with precision.",
    deliverables: [
      "Stakeholder interview synthesis",
      "Current-state system map",
      "Requirements document",
      "Opportunity prioritization matrix",
      "Risk & dependency register",
    ],
  },
  {
    num: "02",
    title: "Solution Architecture",
    duration: "Week 2–3",
    icon: Map,
    desc: "Using the discovery outputs, we design the full technical architecture of your solution. Tech stack decisions are made and documented. Security model, integration points, data flows, and deployment strategy are all defined before engineering starts.",
    deliverables: [
      "Architecture decision record (ADR)",
      "Component diagram & data flow",
      "Security & compliance design",
      "Infrastructure & deployment plan",
      "Tech stack rationale document",
    ],
  },
  {
    num: "03",
    title: "Engineering & Build",
    duration: "Week 3–N",
    icon: Wrench,
    desc: "Senior engineers build your solution iteratively. We run weekly demos so you see real progress. You have a dedicated Slack channel and a project lead who answers questions within 4 hours. No 3-month black boxes.",
    deliverables: [
      "Weekly demo sessions",
      "Sprint reports",
      "Test coverage reports",
      "Integration documentation",
      "Codebase with full test suite",
    ],
  },
  {
    num: "04",
    title: "Testing & Integration",
    duration: "Final 2 weeks",
    icon: TestTube,
    desc: "End-to-end testing, performance validation, security review, and integration testing with your existing systems. We stress-test, load-test, and run adversarial tests on any AI components. Bugs are fixed before we hand over.",
    deliverables: [
      "Test results & coverage report",
      "Performance benchmark results",
      "Security review findings",
      "Integration test suite",
      "Known issue register (should be empty)",
    ],
  },
  {
    num: "05",
    title: "Deploy & Support",
    duration: "Ongoing",
    icon: Rocket,
    desc: "We deploy to your production environment with a documented runbook. Post-launch, we provide a 30-day hypercare period with enhanced support. After that, we offer flexible support retainers for ongoing monitoring, optimization, and feature development.",
    deliverables: [
      "Production deployment",
      "Operations runbook",
      "Monitoring & alerting setup",
      "30-day hypercare support",
      "Optional: ongoing retainer",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based",
    desc: "A defined scope, timeline, and fixed fee. Best for well-defined AI integrations, agent builds, or platform deployments where requirements are clear.",
    best: "Custom integrations, defined agent builds, platform implementations",
  },
  {
    title: "Discovery + Build",
    desc: "A structured discovery phase followed by a build engagement. Best when you know the outcome you want but aren't sure of the exact approach.",
    best: "Complex transformations, organizations new to AI, multi-system projects",
  },
  {
    title: "Strategy Retainer",
    desc: "Ongoing access to Forge architects and strategists for architecture reviews, vendor selection, team coaching, and escalation support.",
    best: "AI-mature organizations managing complex internal programs",
  },
  {
    title: "Embedded Team",
    desc: "Forge engineers embedded within your organization for a fixed term. We work alongside your team, transfer knowledge, and build internal capability.",
    best: "Transformation programs requiring knowledge transfer and team uplift",
  },
];

export default function ProcessPage() {
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
          <span className="eyebrow">Our Process</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 680 }}>
            How we turn your brief into a{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              production system.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 560, marginBottom: 36 }}>
            Our five-phase engagement process gives every client full visibility, regular demos, and predictable delivery. No surprises. No black boxes. Just methodical, expert engineering.
          </p>
          <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
            Start a Project <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Process phases */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <span className="section-label">Five Phases</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>From brief to production</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PHASES.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: "36px 40px", display: "flex", gap: 48, flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 300px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <div style={{
                        width: 44, height: 44, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                        boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: "var(--radius)", flexShrink: 0,
                      }}>
                        <Icon size={20} color="#fff" />
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 10, color: "var(--nb-rose)", fontWeight: 700, marginBottom: 2 }}>
                          Phase {phase.num} · {phase.duration}
                        </p>
                        <h3 style={{ fontSize: 20 }}>{phase.title}</h3>
                      </div>
                    </div>
                    <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>{phase.desc}</p>
                  </div>
                  <div style={{ flex: "1 1 240px" }}>
                    <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 16 }}>
                      Deliverables
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {phase.deliverables.map((d, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <div style={{ width: 6, height: 6, background: "var(--nb-rose)", borderRadius: "50%", marginTop: 6, flexShrink: 0 }} />
                          <span style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline visualization */}
      <section className="section">
        <div className="container container--narrow">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Typical Timeline</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>What to expect, when</h2>
          </div>
          <div style={{ border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-brutal)", overflow: "hidden" }}>
            <div style={{ background: "var(--nb-invert)", padding: "16px 24px" }}>
              <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 12, color: "var(--nb-rose)" }}>
                // typical_timeline.forge — project_type: "custom_ai_integration"
              </p>
            </div>
            <div style={{ padding: "32px 32px" }}>
              {[
                { weeks: "Weeks 1–2", phase: "Discovery & Assessment", color: "var(--nb-rose)", width: "20%" },
                { weeks: "Weeks 2–3", phase: "Solution Architecture", color: "#7C3AED", width: "15%" },
                { weeks: "Weeks 3–8", phase: "Engineering & Build", color: "#0D9488", width: "50%" },
                { weeks: "Weeks 7–9", phase: "Testing & Integration", color: "#D97706", width: "20%" },
                { weeks: "Week 9+", phase: "Deploy & Support", color: "#059669", width: "15%" },
              ].map((t, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 700 }}>{t.phase}</span>
                    <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 11, color: "var(--nb-ink-muted)" }}>{t.weeks}</span>
                  </div>
                  <div style={{ height: 8, background: "var(--nb-border-faint)", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: t.width, background: t.color, minWidth: 48 }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: 12, color: "var(--nb-ink-dim)", marginTop: 24 }}>
                * Timeline varies by project scope. Complex multi-system projects may run 4–6 months. We provide a detailed project plan during architecture phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <span className="section-label">Engagement Models</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>Flexible formats for every situation</h2>
          </div>
          <div className="cards-2">
            {ENGAGEMENT_MODELS.map((m, i) => (
              <div key={i} className="nb-card" style={{ padding: 28 }}>
                <h3 style={{ fontSize: 18, marginBottom: 10 }}>{m.title}</h3>
                <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 16 }}>{m.desc}</p>
                <div style={{ padding: "12px 16px", background: "var(--nb-rose-subtle)", borderLeft: "3px solid var(--nb-rose)" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "var(--nb-rose)", marginBottom: 4 }}>Best for</p>
                  <p style={{ fontSize: 13, color: "var(--nb-ink-muted)" }}>{m.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section">
        <div className="container container--narrow">
          <div style={{
            border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
            boxShadow: "var(--shadow-brutal-xl)", padding: "48px 48px",
            background: "#fff", textAlign: "center",
          }}>
            <div style={{
              width: 56, height: 56, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
              boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "var(--radius)", margin: "0 auto 24px",
            }}>
              <HeartPulse size={26} color="#fff" />
            </div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", marginBottom: 16 }}>Our commitment to you</h2>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 32px" }}>
              We don&apos;t ship broken software. Every engagement includes a 30-day post-launch support period where we fix any defects at no charge. If we can&apos;t get it right, we refund the build cost.
            </p>
            <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
              Start a Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
