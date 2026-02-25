"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Shield, ArrowRight, Lock, FileText, Users, Database, Search } from "lucide-react";

export default function HealthcarePage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Healthcare & Life Sciences</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Clinical intelligence<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>with privacy at its core.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
              Health systems, life sciences organizations, and payers operate in the most heavily regulated data environments in the world. Genie's architecture supports HIPAA-aligned deployments with PHI isolation, granular access control, and audit trails that satisfy compliance teams.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Request a Compliance Review <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-3">
            {[
              { icon: Lock, title: "HIPAA-Aligned Architecture", desc: "PHI is never used for model training. Tenant isolation ensures protected health information is strictly scoped to authorized users and systems." },
              { icon: Search, title: "Clinical Protocol Access", desc: "Clinicians and administrators access care protocols, formulary information, and clinical guidelines through conversational agents — with document-level citations." },
              { icon: FileText, title: "Regulatory Submissions Support", desc: "Life sciences teams use Deep Research to synthesize clinical trial data, regulatory precedent, and internal study documentation for FDA submission support." },
              { icon: Users, title: "Payer Intelligence", desc: "Payer teams access coverage policies, claims procedures, and compliance documentation through targeted agent interfaces with full audit trails." },
              { icon: Database, title: "Research Knowledge Management", desc: "Research organizations index internal studies, literature reviews, and experimental protocols — making institutional knowledge searchable across teams." },
              { icon: Shield, title: "Audit & eDiscovery", desc: "Complete logging of all AI interactions for HIPAA audit requirements, legal hold, and internal compliance reviews." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-amber)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="var(--nb-ink)" />
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
            AI that your compliance officer can approve.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
