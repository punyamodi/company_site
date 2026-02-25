"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Code2, BarChart3, Shield, Users, ArrowRight, Building2, Globe, Factory } from "lucide-react";

const SOLUTIONS = [
  { icon: Code2, title: "Engineering Teams", desc: "Answers from Jira, GitHub, Confluence, and runbooks. Agents that surface related code, tickets, and docs instantly.", href: "/solutions/engineering", accent: "var(--nb-teal)" },
  { icon: BarChart3, title: "Sales & Revenue Operations", desc: "Deal assistants trained on CRM data, product docs, and battlecards. Answers faster, proposals quicker.", href: "/solutions/sales-revenue", accent: "var(--nb-amber)" },
  { icon: Shield, title: "Legal & Compliance", desc: "Contract search, policy surfacing, and compliance Q&A — with strict document-level access control.", href: "/solutions/legal-compliance", accent: "var(--nb-violet)" },
  { icon: Users, title: "HR & People Operations", desc: "Self-service HR agents that reduce support ticket volume by 60%+ for benefits, policies, and onboarding queries.", href: "/solutions/hr-operations", accent: "var(--nb-teal)" },
];

const INDUSTRIES = [
  { icon: Building2, title: "Financial Services", href: "/industries/financial-services" },
  { icon: Shield, title: "Healthcare & Life Sciences", href: "/industries/healthcare" },
  { icon: Globe, title: "Government & Defense", href: "/industries/government" },
  { icon: Factory, title: "Technology Companies", href: "/industries/technology" },
];

export default function SolutionsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Solutions</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Built for how<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>your teams work.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Every team has unique workflows, data sources, and compliance requirements. Genie adapts — delivering targeted AI capabilities precisely where each function needs them most.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-label">By Team Function</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>Solutions by team</h2>
          <div className="cards-2">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Link href={s.href} className="nb-card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, padding: 28, textDecoration: "none" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "var(--radius)", background: s.accent, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={24} color={s.accent === "var(--nb-amber)" ? "var(--nb-ink)" : "#fff"} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{s.title}</h2>
                      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 12 }}>{s.desc}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)" }}>Explore <ArrowRight size={13} /></div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">By Industry</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40 }}>Solutions by industry</h2>
          <div className="cards-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <Link href={ind.href} className="nb-card" style={{ display: "block", padding: 24, textDecoration: "none", textAlign: "center" }}>
                    <div style={{ width: 48, height: 48, borderRadius: "var(--radius)", background: "var(--nb-amber)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                      <Icon size={22} color="var(--nb-ink)" />
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em" }}>{ind.title}</h3>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
