"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  GitBranch, Database, ShieldCheck, Brain,
  ArrowRight, CalendarCheck, Clock, Mail,
  CheckCircle2,
} from "lucide-react";

const DEMO_ITEMS = [
  {
    icon: GitBranch,
    title: "Live routing demo across 3+ providers",
    body: "Watch InferGate route requests intelligently across OpenAI, Anthropic, and Groq in real time — with automatic fallback and latency-based selection.",
  },
  {
    icon: Database,
    title: "Semantic caching in action",
    body: "See equivalent prompts resolved from cache within microseconds. Watch cost counters drop 40–65% live on screen.",
  },
  {
    icon: ShieldCheck,
    title: "6-level budget governance walkthrough",
    body: "From organization → workspace → project → virtual key → model → request. Full spend control with real-time enforcement and alerts.",
  },
  {
    icon: Brain,
    title: "MCP agent orchestration demo",
    body: "Watch multi-agent workflows execute through the InferGate MCP gateway — tool calls, memory, parallel execution, all governed and observed.",
  },
];

/* ── Animated calendar SVG ── */
function CalendarSVG() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 400); return () => clearTimeout(t); }, []);

  return (
    <svg width="320" height="260" viewBox="0 0 320 260" fill="none" aria-hidden="true">
      {/* Card body */}
      <rect x="20" y="32" width="280" height="212" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
      <rect x="20" y="32" width="280" height="48" rx="4" fill="#0A0A0A" />
      <rect x="20" y="60" width="280" height="20" fill="#0A0A0A" />

      {/* Header pins */}
      <rect x="80" y="20" width="12" height="24" rx="3" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2" />
      <rect x="228" y="20" width="12" height="24" rx="3" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2" />

      {/* Month label */}
      <text x="160" y="63" textAnchor="middle" fill="#FAF8F3" fontSize="14" fontWeight="800" fontFamily="'Bricolage Grotesque',sans-serif" letterSpacing="-0.04em">
        DEMO SESSION
      </text>

      {/* Day labels */}
      {["M","T","W","T","F","S","S"].map((d, i) => (
        <text key={i} x={52 + i * 33} y="101" textAnchor="middle" fill="#7A746A" fontSize="10" fontWeight="700" fontFamily="'Bricolage Grotesque',sans-serif" letterSpacing=".1em">
          {d}
        </text>
      ))}

      {/* Grid cells */}
      {Array.from({ length: 28 }).map((_, i) => {
        const col = i % 7;
        const row = Math.floor(i / 7);
        const x = 36 + col * 33;
        const y = 112 + row * 38;
        const day = i + 1;
        const isHighlight = day === 15;
        const isCheck = visible && [8, 12, 15, 22].includes(day);
        return (
          <g key={i}>
            {isHighlight && (
              <rect x={x - 13} y={y - 12} width={26} height={26} rx="2" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2" />
            )}
            {isCheck ? (
              <motion.g
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * [8,12,15,22].indexOf(day) }}
              >
                <CheckCircle2
                  size={16}
                  color={isHighlight ? "#0A0A0A" : "#2D6A4F"}
                  style={{ transform: `translate(${x - 8}px, ${y - 8}px)` }}
                  x={x - 8} y={y - 8}
                />
              </motion.g>
            ) : (
              <text x={x} y={y + 5} textAnchor="middle" fill={isHighlight ? "#0A0A0A" : "#4A4540"} fontSize="12" fontWeight={isHighlight ? "800" : "500"} fontFamily="'Bricolage Grotesque',sans-serif">
                {day}
              </text>
            )}
          </g>
        );
      })}

      {/* Clock icon strip */}
      <rect x="20" y="226" width="280" height="18" rx="2" fill="#F5C518" opacity="0.15" />
      <text x="160" y="239" textAnchor="middle" fill="#4A4540" fontSize="11" fontWeight="700" fontFamily="'Bricolage Grotesque',sans-serif" letterSpacing=".04em">
        30 min · Engineering walkthrough
      </text>
    </svg>
  );
}

export default function BookDemoPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────── */}
      <section className="section dot-grid">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">Book a Demo</span>
            <h1 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
              See InferGate<br />
              <span style={{ color: "var(--nb-orange)" }}>in action.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontWeight: 400, marginBottom: 40 }}>
              Schedule a 30-minute technical walkthrough with our engineering team. We&apos;ll show you routing, caching, governance, and MCP live.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--nb-ink-muted)", fontWeight: 600 }}>
                <Clock size={14} color="var(--nb-ink-dim)" /> 30 minutes
              </div>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--nb-border-light)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--nb-ink-muted)", fontWeight: 600 }}>
                <CalendarCheck size={14} color="var(--nb-ink-dim)" /> Engineering team
              </div>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--nb-border-light)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--nb-ink-muted)", fontWeight: 600 }}>
                <ShieldCheck size={14} color="var(--nb-ink-dim)" /> No pitch, all technical
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main CTA + SVG ─────────────────── */}
      <section className="section section--surface" style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 48, alignItems: "center" }}>
            {/* CTA card */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <div className="nb-card nb-card--yellow" style={{ padding: "52px 48px" }}>
                <span className="section-label" style={{ marginBottom: 20 }}>Ready to see it live?</span>
                <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
                  Schedule your 30-minute technical walkthrough
                </h2>
                <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
                  Pick a time that works for you. Our engineers will walk you through a live InferGate deployment — no slides, just real infrastructure.
                </p>
                <a
                  href="https://calendly.com/maximai/infergate-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 17, padding: "16px 36px", display: "inline-flex", textDecoration: "none" }}
                >
                  <CalendarCheck size={18} />
                  Schedule via Calendly →
                </a>
                <p style={{ fontSize: 12, color: "var(--nb-ink-muted)", marginTop: 16, fontWeight: 500 }}>
                  Opens Calendly in a new tab · Free · No credit card required
                </p>
              </div>
            </motion.div>

            {/* Animated SVG */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CalendarSVG />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What you'll see ────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">What you&apos;ll see</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              A complete engineering walkthrough
            </h2>
          </div>

          <div className="cards-2">
            {DEMO_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <div className="nb-card" style={{ padding: "32px 32px", height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div className="feature-icon">
                        <Icon size={20} />
                      </div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.3 }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Prefer email fallback ──────────── */}
      <section className="section section--invert" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Mail size={28} color="var(--nb-yellow)" style={{ marginBottom: 16, display: "inline-block" }} />
            <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 12 }}>
              Prefer email instead?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(250,248,243,0.65)", lineHeight: 1.7, marginBottom: 28 }}>
              Fill out our contact form and our engineering team will get back to you within one business day.
            </p>
            <Link href="/contact" className="btn-invert" style={{ display: "inline-flex" }}>
              Contact Sales <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
