"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Building2, ArrowRight, Lock, FileText, BarChart3, Shield, Zap, Database } from "lucide-react";

export default function FinancialServicesPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Financial Services</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              AI for finance.<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>Audit-ready by design.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
              Banks, asset managers, and financial institutions require AI systems that meet the bar set by regulators, risk committees, and compliance officers. Genie delivers — with full auditability, tenant isolation, and deployment options that satisfy the strictest security requirements.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Schedule a Security Review <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-3">
            {[
              { icon: Lock, title: "Tenant Isolation", desc: "Strict per-business-unit data isolation prevents cross-contamination of sensitive portfolio, client, and trading data across divisions." },
              { icon: FileText, title: "Regulatory Research", desc: "Agents synthesize SEC filings, regulatory guidance, internal risk policies, and compliance procedures into actionable briefs — in minutes." },
              { icon: BarChart3, title: "Financial Data Analysis", desc: "The Code Interpreter allows analysts to upload structured datasets and have agents compute metrics, produce visualizations, and surface anomalies." },
              { icon: Shield, title: "Full Audit Logging", desc: "Every interaction is logged with user identity, query content, documents retrieved, and model response — meeting eDiscovery and regulatory audit requirements." },
              { icon: Database, title: "Air-Gapped Deployment", desc: "For trading desks and sensitive operations, Genie can be deployed completely air-gapped — no data ever reaches the public internet." },
              { icon: Zap, title: "Deal Intelligence", desc: "M&A, lending, and advisory teams use Deep Research to synthesize due diligence documents, public filings, and internal analyses at research-grade depth." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Enterprise AI that passes the risk committee.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
