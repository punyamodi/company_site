"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Shield, ArrowRight, Lock, FileText, Search, AlertTriangle } from "lucide-react";

export default function LegalCompliancePage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Legal & Compliance</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Legal intelligence,<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>without the risk.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Legal and compliance teams handle the most sensitive documents in the enterprise. Genie delivers AI-powered contract search, policy retrieval, and regulatory analysis — with document-level access control that ensures only authorized users see sensitive materials.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Request Demo <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-3">
            {[
              { icon: Search, title: "Contract Search", desc: "Search your entire executed agreements library by party, obligation, clause type, or term. Surface relevant precedent language in seconds." },
              { icon: FileText, title: "Policy Retrieval", desc: "Employees get instant, cited answers to policy questions from the authoritative policy repository — not a colleague's memory." },
              { icon: AlertTriangle, title: "Regulatory Change Analysis", desc: "Deep Research maps how new regulations impact your existing contracts, policies, and operations across every business unit." },
              { icon: Lock, title: "Document-Level ACLs", desc: "Genie mirrors your existing document permissions from SharePoint, Google Drive, or your DMS. Confidential contracts are never exposed to unauthorized users." },
              { icon: Shield, title: "Audit Trail", desc: "Every query, every document retrieved, every response generated is logged for compliance audit. Full traceability baked in." },
              { icon: FileText, title: "Due Diligence Support", desc: "M&A due diligence teams use Deep Research to synthesize findings across thousands of documents in hours, not weeks." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-violet)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
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
            AI for legal teams that takes compliance seriously.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
