"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { BarChart3, ArrowRight, FileText, Users, Database, Zap } from "lucide-react";

export default function SalesRevenuePage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Sales & Revenue Operations</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Close deals with<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>the right answer,</span> instantly.
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Sales teams burn time hunting for battlecards, product docs, and past deal context. Onyx agents trained on your GTM materials answer prospect questions, draft proposals, and surface competitive intelligence in seconds.
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
              { icon: FileText, title: "Instant Proposal Drafting", desc: "Feed an agent context about the prospect and deal stage. It synthesizes product positioning, pricing framework, and relevant case studies into a draft proposal." },
              { icon: Database, title: "CRM-Aware Answers", desc: "Connected to Salesforce or HubSpot, agents surface account history, past interactions, and deal notes before answering any prospect question." },
              { icon: BarChart3, title: "Competitive Intelligence", desc: "Agents trained on battlecards, win/loss data, and product comparisons handle objections with accurate, up-to-date competitive positioning." },
              { icon: Zap, title: "RFP Acceleration", desc: "For complex RFP responses, Deep Research synthesizes answers from your product docs, security policies, and past responses in a fraction of the time." },
              { icon: Users, title: "Rep Onboarding", desc: "New sales reps get up to speed on product, market positioning, and internal playbooks through conversational agents — without burdening senior reps." },
              { icon: FileText, title: "Call Summary & Follow-Up", desc: "Agents integrated with call recording tools summarize meetings, extract action items, and draft personalized follow-up emails automatically." },
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
            Your best sales rep doesn't sleep.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            Onyx agents are always available, always current, and never forget a battlecard.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
