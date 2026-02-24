import Link from "next/link";
import { ArrowRight, Building2, HeartPulse, Landmark, Factory, Server, Globe } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INDUSTRIES = [
  {
    icon: Building2,
    title: "Financial Services",
    desc: "Banks, fintechs, insurance companies, and asset managers trust Forge to build AI that handles their most sensitive data and highest-stakes decisions.",
    challenges: [
      "Fraud detection & AML compliance",
      "Document processing (loan apps, claims, KYC)",
      "Regulatory reporting automation",
      "Credit risk model integration",
      "Customer service AI with compliance guardrails",
    ],
    example: "We built a custom document intelligence platform for a top-10 US bank that reduced mortgage processing time by 65%, handling KYC, income verification, and compliance checks through an AI pipeline integrated with their existing LOS.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "From clinical decision support to prior auth automation, we build HIPAA-compliant AI systems that improve patient outcomes and operational efficiency.",
    challenges: [
      "Prior authorization automation",
      "Clinical documentation AI",
      "Patient data intelligence",
      "Care coordination workflows",
      "Coding & revenue cycle AI",
    ],
    example: "A regional health system engaged Forge to build an AI triage assistant for their patient portal, reducing phone-based triage volume by 40% and improving appropriate escalation rates to clinical staff.",
  },
  {
    icon: Landmark,
    title: "Government & Defense",
    desc: "FedRAMP-aligned, air-gap compatible AI systems for civilian agencies and defense contractors. We understand classification requirements and security architecture.",
    challenges: [
      "Document intelligence at scale",
      "Case management automation",
      "Intelligence analysis tools",
      "Procurement & contract AI",
      "HR & workforce analytics",
    ],
    example: "We designed and built a classified document analysis system for a federal agency that reduced analyst processing time on FOIA requests by 70%, with full audit trails and role-based access controls.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Predictive maintenance, quality control, and supply chain intelligence for manufacturers operating at the intersection of physical and digital systems.",
    challenges: [
      "Predictive maintenance systems",
      "Computer vision quality inspection",
      "Supply chain optimization AI",
      "Production scheduling intelligence",
      "Safety monitoring & incident prediction",
    ],
    example: "A global automotive manufacturer deployed Forge-built computer vision systems across 12 production lines, achieving 99.2% defect detection accuracy and eliminating a manual QC bottleneck.",
  },
  {
    icon: Server,
    title: "Technology",
    desc: "From AI-powered product features to internal developer tooling, we help tech companies build the AI capabilities that keep them competitive.",
    challenges: [
      "LLM product feature integration",
      "Internal knowledge systems",
      "Developer productivity tooling",
      "Data platform modernization",
      "AI-powered analytics",
    ],
    example: "A Series B SaaS company engaged Forge to build a custom AI agent that automatically generates context-aware onboarding guides for new enterprise customers, reducing time-to-value by 3 weeks.",
  },
  {
    icon: Globe,
    title: "Retail & E-Commerce",
    desc: "Personalization, demand forecasting, and intelligent customer service for retailers operating in high-volume, fast-moving environments.",
    challenges: [
      "Personalization & recommendation engines",
      "Demand forecasting & inventory AI",
      "Customer service automation",
      "Pricing optimization systems",
      "Catalog intelligence & tagging",
    ],
    example: "An enterprise retailer engaged Forge to rebuild their personalization infrastructure on a custom vector-based recommendation engine, driving a 23% increase in average order value.",
  },
];

export default function IndustriesPage() {
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
          <span className="eyebrow">Industries</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 680 }}>
            Deep domain expertise.{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              Real-world context.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 560, marginBottom: 36 }}>
            We don&apos;t just build AI — we build AI that works in your specific regulatory environment, with your data characteristics, and within your operational constraints. Domain expertise is part of the product.
          </p>
          <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
            Discuss Your Industry <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Industries */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: "40px 40px" }}>
                  <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                    {/* Main content */}
                    <div style={{ flex: "1 1 300px" }}>
                      <div style={{
                        width: 52, height: 52, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                        boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: "var(--radius)", marginBottom: 20,
                      }}>
                        <Icon size={24} color="#fff" />
                      </div>
                      <h2 style={{ fontSize: 24, marginBottom: 12 }}>{ind.title}</h2>
                      <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>{ind.desc}</p>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 12 }}>
                          Key challenges we solve
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          {ind.challenges.map((c, j) => (
                            <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                              <div style={{ width: 6, height: 6, background: "var(--nb-rose)", borderRadius: "50%", marginTop: 7, flexShrink: 0 }} />
                              <span style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Example */}
                    <div style={{ flex: "1 1 280px" }}>
                      <div style={{
                        background: "var(--nb-rose-subtle)", border: "2px solid rgba(225,29,72,0.2)",
                        borderRadius: "var(--radius)", padding: 24, height: "100%",
                        display: "flex", flexDirection: "column",
                      }}>
                        <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--nb-rose)", marginBottom: 12 }}>
                          Client example
                        </p>
                        <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.75, flex: 1 }}>{ind.example}</p>
                        <Link href={`${BASE}/contact`} style={{
                          display: "inline-flex", alignItems: "center", gap: 4, marginTop: 20,
                          fontSize: 13, fontWeight: 700, color: "var(--nb-rose)", textDecoration: "none",
                        }}>
                          Discuss a similar project <ArrowRight size={12} />
                        </Link>
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
            Don&apos;t see your industry?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,248,243,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
            We work across sectors beyond these six. If you have a complex AI challenge, we want to hear it.
          </p>
          <Link href={`${BASE}/contact`} style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
            background: "var(--nb-rose)", color: "#fff", border: "2px solid var(--nb-rose)",
            fontWeight: 800, fontSize: 15, textDecoration: "none", borderRadius: "var(--radius)",
            boxShadow: "4px 4px 0 rgba(255,255,255,0.15)",
          }}>
            Tell Us About Your Challenge <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
