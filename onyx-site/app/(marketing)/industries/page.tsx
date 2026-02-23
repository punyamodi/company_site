"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Building2, Shield, Factory, Globe, ArrowRight } from "lucide-react";

const INDUSTRIES = [
  { icon: Building2, title: "Financial Services", desc: "Deploy with the controls, auditability, and data isolation that financial regulators and risk committees require.", href: "/industries/financial-services", accent: "var(--nb-teal)" },
  { icon: Shield, title: "Healthcare & Life Sciences", desc: "HIPAA-aligned architecture, PHI isolation, and clinical workflow integrations for health systems and research organizations.", href: "/industries/healthcare", accent: "var(--nb-amber)" },
  { icon: Globe, title: "Government & Defense", desc: "Air-gapped deployment, FedRAMP-aligned controls, and classification-aware access for public sector organizations.", href: "/industries/government", accent: "var(--nb-violet)" },
  { icon: Factory, title: "Technology Companies", desc: "The most sophisticated internal AI platform built for technology-forward companies that demand customization and scale.", href: "/industries/technology", accent: "var(--nb-teal)" },
];

export default function IndustriesPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Industries</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Built for regulated,<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>complex enterprises.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Onyx was designed from the ground up for organizations where data security, access control, and compliance aren't optional — they're the starting line.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-2">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Link href={ind.href} className="nb-card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, padding: 32, textDecoration: "none" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "var(--radius)", background: ind.accent, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={26} color={ind.accent === "var(--nb-amber)" ? "var(--nb-ink)" : "#fff"} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{ind.title}</h2>
                      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 12 }}>{ind.desc}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)" }}>Learn more <ArrowRight size={13} /></div>
                    </div>
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
