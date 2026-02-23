"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, Check, ChevronDown, Shield, Zap, Globe, HeartHandshake,
  Headphones, FileText, Building2, Users, Server, BarChart3,
} from "lucide-react";

/* ── FAQ data ───────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: "How is InferGate priced?",
    a: "InferGate is an enterprise product with pricing tailored to your organization. Factors include your expected traffic volume, number of LLM providers, deployment model (self-hosted vs. managed), team size, and support tier. There are no per-seat fees for developers — we price at the infrastructure level. Contact our team for a proposal scoped to your environment.",
  },
  {
    q: "Is there a free trial or proof of concept period?",
    a: "Yes — we offer a structured proof-of-concept program for qualified enterprise opportunities. This includes a 2–4 week guided evaluation with a dedicated solutions engineer, a pre-configured sandbox environment, and a defined success criteria checklist. Reach out to our sales team to start the process.",
  },
  {
    q: "What deployment options are included?",
    a: "All InferGate enterprise engagements include your choice of deployment model: Kubernetes/Helm self-hosted in your cloud (AWS, GCP, Azure), private cloud or bare-metal VPC deployment, air-gapped deployment with no external network requirements, or InferGate-managed hosted deployment. The Helm chart, runbooks, and deployment scripts are included regardless of tier.",
  },
  {
    q: "How does support work?",
    a: "Enterprise support includes a dedicated onboarding engineer for your initial deployment, a private Slack or Microsoft Teams channel for async engineering support, defined SLA response times (configurable by tier), and quarterly business reviews with our product and engineering teams. Critical production incidents have a direct escalation path to our on-call engineers.",
  },
  {
    q: "Can pricing scale with our usage?",
    a: "Yes. InferGate pricing is designed to grow with your AI usage without cliff edges. Volume-based pricing means your per-unit cost decreases as throughput increases. We structure agreements with growth bands so you never face sudden step-up costs. Contact sales to discuss a volume-based pricing model that aligns with your expected growth trajectory.",
  },
  {
    q: "What compliance documentation is provided?",
    a: "We provide architecture documentation, data flow diagrams, security questionnaire responses (standard CAIQ/SIG formats), encryption key management documentation, and pen test summaries under NDA. For air-gapped deployments, we document that zero data leaves your perimeter. Contact sales for your specific compliance requirements (SOC 2, HIPAA, FedRAMP alignment, etc.).",
  },
  {
    q: "How does InferGate handle provider credentials?",
    a: "All provider API keys and credentials are encrypted with AES-256-GCM before storage. HashiCorp Vault integration is available for secrets management and automatic credential rotation. Your credentials never leave your deployment perimeter in self-hosted configurations — InferGate acts as a proxy within your VPC and all provider calls originate from your own network.",
  },
  {
    q: "What's the typical time-to-value?",
    a: "Most enterprise teams are routing live production traffic through InferGate within 2 weeks of signed agreement. Our onboarding program is a 5-step process: architecture review → deployment → SDK migration → observability setup → go-live with hypercare. The SDK migration is typically a single base_url change in your existing code.",
  },
];

const INCLUDED_FEATURES = [
  { icon: Globe,         label: "Full platform access",                   sub: "All features, all providers, all capabilities" },
  { icon: HeartHandshake,label: "Dedicated onboarding & implementation", sub: "4-week structured program with assigned engineer" },
  { icon: Shield,        label: "Custom SLA",                             sub: "Response time SLAs configured to your requirements" },
  { icon: Headphones,    label: "Priority engineering support",           sub: "Direct escalation path to InferGate engineers" },
  { icon: Users,         label: "Private Slack or Teams channel",         sub: "Async support with < 4-hour business day response" },
  { icon: FileText,      label: "Compliance documentation",               sub: "Architecture docs, data flow diagrams, security Q&A" },
  { icon: BarChart3,     label: "Volume-based pricing",                   sub: "Per-unit cost decreases as traffic scales" },
  { icon: Server,        label: "Deployment flexibility",                 sub: "Helm, VPC, air-gapped, or managed — your choice" },
  { icon: Zap,           label: "Unlimited provider integrations",        sub: "All 25+ providers included in every engagement" },
  { icon: Building2,     label: "Quarterly business reviews",             sub: "Product roadmap access and usage optimization" },
];

/* ── Accordion item ─────────────────────────────────────────── */
function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span style={{ paddingRight: 24 }}>{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={18} color="var(--nb-ink-muted)" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={`answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="accordion-content">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function PricingPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingBottom: 72 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow"><Building2 size={12} /> Enterprise Pricing</span>
            <h1 style={{ fontSize: "clamp(40px,6vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1.0, marginBottom: 24 }}>
              Priced for the scale
              <br />
              <span className="text-serif" style={{ color: "var(--nb-orange)", fontWeight: 400 }}>of your ambition.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px,2vw,20px)", color: "var(--nb-ink-muted)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              InferGate is an enterprise product. Pricing is tailored to your team size, traffic volume, and support requirements. Contact our team to get a proposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main CTA card ─────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-xl)", borderRadius: "var(--radius)", padding: "64px 56px", textAlign: "center" }}>
              {/* Lock-up */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                {[
                  { v: "10,400 req/s", l: "Throughput" },
                  { v: "25+",          l: "Providers" },
                  { v: "0.3ms",        l: "P50 Latency" },
                ].map((s, i) => (
                  <div key={s.l} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 18px", background: "var(--nb-ink)", border: "2px solid var(--nb-ink)", borderRadius: "var(--radius)", boxShadow: "3px 3px 0px rgba(0,0,0,0.5)" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 18, fontWeight: 700, color: "var(--nb-yellow)", letterSpacing: "-0.03em" }}>{s.v}</span>
                    <span style={{ fontSize: 9, fontWeight: 800, color: "rgba(250,248,243,0.6)", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 2 }}>{s.l}</span>
                  </div>
                ))}
              </div>

              <h2 style={{ fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
                Get a tailored enterprise proposal
              </h2>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.65 }}>
                Share your traffic estimates, provider requirements, and deployment preferences — we&apos;ll send back a pricing proposal scoped to your environment within one business day.
              </p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 17, padding: "16px 36px" }}>
                Contact Sales to Get a Proposal <ArrowRight size={16} />
              </Link>
              <p style={{ marginTop: 20, fontSize: 13, color: "var(--nb-ink-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <Check size={13} strokeWidth={2.5} /> No commitment required · Response within 1 business day
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What's included ───────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <p className="section-label">What&apos;s Included</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 12 }}>
            What&apos;s included in every enterprise engagement.
          </h2>
          <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", marginBottom: 48, maxWidth: 600, lineHeight: 1.65 }}>
            Every InferGate enterprise contract includes the full platform — no feature gating, no add-on module pricing.
          </p>
          <div className="cards-3" style={{ gap: 16 }}>
            {INCLUDED_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  className="nb-card"
                  style={{ padding: "24px 28px", display: "flex", alignItems: "flex-start", gap: 16 }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.055 }}
                >
                  <div style={{ width: 40, height: 40, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)", marginTop: 2 }}>
                    <Icon size={18} color="var(--nb-ink)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>{feature.label}</div>
                    <div style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.55 }}>{feature.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">Process</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            How the pricing process works.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { step: "01", title: "Reach out",       desc: "Fill in the contact form or email our sales team. Tell us about your AI stack, traffic estimates, and deployment requirements." },
              { step: "02", title: "Discovery call",  desc: "A 30-minute call with a solutions engineer to understand your architecture, security requirements, and success criteria." },
              { step: "03", title: "Receive proposal", desc: "We send a tailored pricing proposal within one business day. No boilerplate — scoped to your actual environment and needs." },
              { step: "04", title: "Evaluate & sign", desc: "A proof-of-concept period if desired, legal review, and contract signature. Typical sales cycle is 2–4 weeks for enterprise." },
              { step: "05", title: "Deploy & grow",   desc: "Dedicated onboarding begins the week of contract signature. Most teams route production traffic within 2 weeks." },
            ].map((step, i, arr) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ display: "flex", gap: 0, position: "relative" }}
              >
                {i < arr.length - 1 && (
                  <div style={{ position: "absolute", left: 27, top: 56, height: 24, width: 2, background: "var(--nb-border-light)" }} />
                )}
                <div style={{ width: 56, height: 56, background: i === 0 ? "var(--nb-invert)" : "var(--nb-bg)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)", zIndex: 1 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 12, fontWeight: 700, color: i === 0 ? "var(--nb-yellow)" : "var(--nb-ink-muted)" }}>{step.step}</span>
                </div>
                <div style={{ flex: 1, padding: "12px 24px 32px" }}>
                  <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 6 }}>{step.title}</div>
                  <div style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">FAQ</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            Frequently asked questions.
          </h2>
          <div>
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
          <div style={{ marginTop: 40, padding: 28, background: "var(--nb-bg)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>Still have questions?</div>
              <div style={{ fontSize: 14, color: "var(--nb-ink-muted)" }}>Our sales team answers within one business day.</div>
            </div>
            <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
              Contact Sales <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="section section--invert">
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow" style={{ background: "var(--nb-yellow)" }}>Enterprise Sales</span>
            <h2 style={{ fontSize: "clamp(30px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20, color: "var(--nb-bg)" }}>
              Let&apos;s build your AI infrastructure together.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(250,248,243,0.65)", marginBottom: 36, lineHeight: 1.65 }}>
              InferGate is trusted by enterprise teams who need reliability, security, and performance at scale. Talk to us about yours.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Get a Proposal <ArrowRight size={14} />
              </Link>
              <Link href="/enterprise" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: "var(--radius)", fontSize: 15, fontWeight: 700, cursor: "pointer", border: "2px solid rgba(250,248,243,0.3)", background: "transparent", color: "var(--nb-bg)", transition: "border-color .15s,background .15s", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(250,248,243,0.6)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(250,248,243,0.3)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                Enterprise Overview <Building2 size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
