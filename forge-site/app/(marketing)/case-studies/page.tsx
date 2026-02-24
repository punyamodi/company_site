import Link from "next/link";
import { ArrowRight, Building2, HeartPulse, Factory, Server } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const CASE_STUDIES = [
  {
    client: "Fortune 500 Bank",
    industry: "Financial Services",
    icon: Building2,
    tag: "Custom AI Integration",
    challenge: "A major US bank needed to modernize their commercial loan underwriting process. Manual document review was taking 14+ days per application and was error-prone, creating compliance risk and competitive disadvantage.",
    solution: "We built a custom document intelligence pipeline that extracts, classifies, and validates data from financial statements, tax returns, and legal documents. The system integrates directly with their existing LOS and core banking platform, feeding a custom risk scoring model.",
    tech: ["Custom NLP pipeline", "Document extraction API", "Core banking integration", "Risk model API", "Audit logging system"],
    outcomes: [
      { metric: "65%", label: "Reduction in processing time" },
      { metric: "14 days → 5 days", label: "Average application turnaround" },
      { metric: "99.1%", label: "Document extraction accuracy" },
      { metric: "40%", label: "Reduction in compliance exceptions" },
    ],
  },
  {
    client: "Global Healthcare Provider",
    industry: "Healthcare",
    icon: HeartPulse,
    tag: "Workflow Automation",
    challenge: "A national healthcare system with 40 hospitals was spending $12M annually on prior authorization processing. Manual review of 180,000 monthly PA requests required 200+ FTEs and had a 22% denial rate requiring rework.",
    solution: "We designed and built an end-to-end prior authorization automation system. The AI classifies request type, retrieves relevant clinical guidelines, checks against payer rules, and routes appropriately — automatically approving straightforward cases and escalating complex ones to clinical reviewers.",
    tech: ["Clinical NLP models", "Payer rules engine", "EHR integration (Epic)", "Human review workflow", "Outcome tracking system"],
    outcomes: [
      { metric: "73%", label: "Requests auto-adjudicated" },
      { metric: "$8.4M", label: "Annual cost savings" },
      { metric: "4 hours", label: "Average turnaround (was 3 days)" },
      { metric: "18%", label: "Denial rate reduction" },
    ],
  },
  {
    client: "Government Agency",
    industry: "Government & Defense",
    icon: Building2,
    tag: "Data & AI Platform",
    challenge: "A civilian federal agency needed to build an AI-powered knowledge management system for 12,000 employees. Documents across 20+ siloed systems were inaccessible, resulting in duplicated work, compliance gaps, and institutional knowledge loss.",
    solution: "We architected and built a custom enterprise knowledge platform on top of our Onyx AI infrastructure. The system ingests from all 20 source systems, applies classification and access controls at the document level, and provides semantic search and AI-powered Q&A — all deployed on-premises with FedRAMP-aligned security.",
    tech: ["Custom RAG architecture", "20-system ingestion pipeline", "Role-based access control", "On-premises deployment", "FedRAMP security controls"],
    outcomes: [
      { metric: "12,000", label: "Active users in year one" },
      { metric: "2.1M", label: "Documents indexed" },
      { metric: "340ms", label: "Average query response time" },
      { metric: "87%", label: "User satisfaction score" },
    ],
  },
  {
    client: "Manufacturing Leader",
    industry: "Manufacturing",
    icon: Factory,
    tag: "Custom AI Agents",
    challenge: "A global manufacturing conglomerate with 24 production facilities was experiencing $30M annually in unplanned downtime. Equipment failures were being detected reactively, and maintenance schedules were calendar-based rather than condition-based.",
    solution: "We built a predictive maintenance platform consisting of a multi-agent system: a sensor data analysis agent, an anomaly detection agent, a maintenance scheduling agent, and an inventory agent that ensures parts are available when needed. The system integrates with their CMMS and ERP.",
    tech: ["Multi-agent orchestration", "Time-series anomaly detection", "CMMS integration", "ERP parts API", "Mobile field app"],
    outcomes: [
      { metric: "68%", label: "Reduction in unplanned downtime" },
      { metric: "$20M+", label: "Annual savings in year one" },
      { metric: "24 facilities", label: "Deployed across" },
      { metric: "2.3 weeks", label: "Average time to ROI" },
    ],
  },
];

export default function CaseStudiesPage() {
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
          <span className="eyebrow">Case Studies</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 680 }}>
            Real problems.{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              Measurable results.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}>
            We let outcomes speak for us. Every engagement is measured against the business objectives we define together at the start of the project.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { val: "500+", label: "Solutions delivered" },
              { val: "60+", label: "Enterprise clients" },
              { val: "$500M+", label: "Client value created" },
            ].map((s, i) => (
              <div key={i} style={{
                border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
                boxShadow: "var(--shadow-brutal-sm)", padding: "16px 24px", background: "#fff",
              }}>
                <div style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 22, fontWeight: 700, color: "var(--nb-rose)" }}>{s.val}</div>
                <div style={{ fontSize: 12, color: "var(--nb-ink-muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {CASE_STUDIES.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: "40px 40px" }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 32, borderBottom: "2px solid var(--nb-border-faint)", paddingBottom: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{
                        width: 48, height: 48, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                        boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: "var(--radius)",
                      }}>
                        <Icon size={22} color="#fff" />
                      </div>
                      <div>
                        <h2 style={{ fontSize: 22 }}>{cs.client}</h2>
                        <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", marginTop: 2 }}>{cs.industry}</p>
                      </div>
                    </div>
                    <span style={{
                      padding: "5px 12px", background: "var(--nb-rose)", color: "#fff",
                      fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                      border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)",
                    }}>{cs.tag}</span>
                  </div>

                  {/* Content */}
                  <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 24 }}>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 10 }}>
                          The Challenge
                        </p>
                        <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>{cs.challenge}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 10 }}>
                          The Solution
                        </p>
                        <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>{cs.solution}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 10 }}>
                          Technologies Built
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {cs.tech.map((t, j) => (
                            <span key={j} style={{
                              padding: "4px 10px", border: "1.5px solid var(--nb-border)",
                              fontSize: 12, fontFamily: "var(--font-jetbrains, monospace)",
                              background: "var(--nb-bg)", color: "var(--nb-ink-muted)",
                            }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div style={{ flex: "1 1 240px" }}>
                      <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 16 }}>
                        Outcomes
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {cs.outcomes.map((o, j) => (
                          <div key={j} style={{
                            border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
                            boxShadow: "var(--shadow-brutal-sm)", padding: "16px 20px",
                            background: j === 0 ? "var(--nb-rose)" : "#fff",
                          }}>
                            <div style={{
                              fontFamily: "var(--font-jetbrains, monospace)", fontSize: 22, fontWeight: 700,
                              color: j === 0 ? "#fff" : "var(--nb-rose)", marginBottom: 4,
                            }}>{o.metric}</div>
                            <div style={{ fontSize: 13, color: j === 0 ? "rgba(255,255,255,0.8)" : "var(--nb-ink-muted)" }}>{o.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", color: "#FAF8F3", marginBottom: 16 }}>
            Your case study starts here
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,248,243,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
            Tell us your challenge. In 12 months, it could be featured alongside these.
          </p>
          <Link href={`${BASE}/contact`} style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
            background: "var(--nb-rose)", color: "#fff", border: "2px solid var(--nb-rose)",
            fontWeight: 800, fontSize: 15, textDecoration: "none", borderRadius: "var(--radius)",
            boxShadow: "4px 4px 0 rgba(255,255,255,0.15)",
          }}>
            Start a Project <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

// Silence unused import warning
void Server;
