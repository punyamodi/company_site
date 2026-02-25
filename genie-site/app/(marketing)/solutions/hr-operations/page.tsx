"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Users, ArrowRight, FileText, Search, Bot, BookOpen } from "lucide-react";

export default function HROperationsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">HR & People Operations</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Every employee<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>gets an answer.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              HR teams are constantly fielding the same questions about policies, benefits, onboarding, and procedures. Genie HR agents handle Tier-1 queries at scale, freeing your people team to focus on strategic work.
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
              { icon: Search, title: "Policy Self-Service", desc: "Employees ask policy questions in natural language and receive accurate, cited answers from the authoritative HR policy repository." },
              { icon: BookOpen, title: "Onboarding Companion", desc: "New hires have a 24/7 onboarding agent that answers questions about processes, tools, and culture — reducing time-to-productivity significantly." },
              { icon: FileText, title: "Benefits Navigation", desc: "Complex benefits plans become accessible. Agents explain options, eligibility, and procedures in plain language personalized to the employee's tier." },
              { icon: Bot, title: "Leave & Time Off", desc: "Agents guide employees through leave request processes, policy entitlements, and required documentation — without HR involvement for routine cases." },
              { icon: Users, title: "Manager Tooling", desc: "Managers access templates for performance reviews, feedback frameworks, and escalation procedures through targeted agent interfaces." },
              { icon: FileText, title: "Compliance Training", desc: "Agents surface required training materials, track completion status, and answer questions about compliance obligations interactively." },
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
            Scale your people operations without scaling headcount.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
