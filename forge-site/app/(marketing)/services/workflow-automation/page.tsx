import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workflow Automation | Forge",
  description:
    "Replace manual, error-prone processes with intelligent AI-driven automation. Decision engines, RPA hybrid workflows, and smart orchestration for enterprise.",
  openGraph: {
    title: "Workflow Automation | Forge",
    description:
      "AI-driven automation that eliminates repetitive work and scales across your enterprise.",
  },
};
import { ArrowRight, Workflow, CheckCircle2, Zap, Clock, BarChart3, Settings } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INCLUDES = [
  "Process discovery & automation opportunity mapping",
  "AI-driven decision engine design & build",
  "RPA + AI hybrid workflow implementation",
  "Document ingestion & extraction pipelines",
  "Conditional logic & escalation workflows",
  "Cross-system orchestration layers",
  "Human-in-the-loop workflow design",
  "Approval routing & notification systems",
  "Workflow monitoring dashboards",
  "Audit logging & compliance trails",
];

const BENEFITS = [
  { icon: Clock, title: "Reclaim thousands of hours", desc: "Automate the repetitive work that consumes your team. Free them for higher-value decisions and customer-facing work." },
  { icon: Zap, title: "AI that makes decisions", desc: "Beyond simple rule-based automation — our workflows use AI to handle ambiguous cases, extract meaning from documents, and route intelligently." },
  { icon: BarChart3, title: "Full visibility", desc: "Every workflow run is logged, traceable, and auditable. Managers get dashboards; compliance gets trails." },
  { icon: Settings, title: "Evolves with you", desc: "Workflows we build are maintainable and extensible. As your processes evolve, your automation evolves with them." },
];

export default function WorkflowAutomationPage() {
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
          <span className="eyebrow" style={{ marginTop: 16 }}>Workflow Automation</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 680 }}>
            Automate the work that shouldn&apos;t{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              require a human.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 580, marginBottom: 36 }}>
            Intelligent process automation that combines the precision of RPA with the judgment of AI. We map your workflows, identify automation opportunities, and build systems that run reliably in production.
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
                End-to-end automation delivery
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                We don&apos;t just automate what you have — we redesign your processes for the AI era. Discovery, architecture, build, and ongoing support are all part of every engagement.
              </p>
              <div style={{ padding: "20px 24px", background: "var(--nb-rose-subtle)", border: "2px solid var(--nb-rose)", borderRadius: "var(--radius)", marginBottom: 32 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "var(--nb-rose)", marginBottom: 6 }}>Typical outcome</p>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>
                  Enterprise clients typically see 60–80% reduction in manual processing time within the first 90 days of deployment.
                </p>
              </div>
              <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
                Discuss Automation <ArrowRight size={14} />
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
            <span className="section-label">Why AI-Powered Automation</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>Beyond rule-based automation</h2>
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

      {/* Use cases */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <span className="section-label">Common Use Cases</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>What we automate</h2>
          </div>
          <div className="cards-3">
            {[
              { title: "Document Processing", desc: "Invoices, contracts, claims, applications — extracted, classified, and routed automatically." },
              { title: "Approval Workflows", desc: "Multi-step approvals with conditional routing, delegation, and escalation paths." },
              { title: "Customer Onboarding", desc: "KYC, document verification, account provisioning — end-to-end with human review gates." },
              { title: "Report Generation", desc: "Scheduled intelligence reports compiled from multiple data sources and delivered automatically." },
              { title: "Compliance Monitoring", desc: "Continuous scanning against policy rules with automated flagging and case creation." },
              { title: "Data Reconciliation", desc: "Cross-system data validation, discrepancy detection, and automated correction workflows." },
            ].map((uc, i) => (
              <div key={i} className="nb-card" style={{ padding: 24 }}>
                <div style={{ width: 6, height: 6, background: "var(--nb-rose)", borderRadius: "50%", marginBottom: 12 }} />
                <h3 style={{ fontSize: 16, marginBottom: 8 }}>{uc.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--rose">
        <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff", marginBottom: 16 }}>
            Ready to automate your workflows?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 32 }}>
            Tell us which processes consume the most manual effort. We&apos;ll identify the highest-impact automation opportunities.
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
