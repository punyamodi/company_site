"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Bot, Search, Microscope, Plug, Zap, Network, Code2, Globe,
  ArrowRight, Shield, Lock, Users, CheckCircle2, ChevronRight,
  Database, BarChart3, Server,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */
const CONNECTORS = [
  "Slack", "Confluence", "Jira", "Google Drive", "Notion", "Salesforce",
  "GitHub", "GitLab", "Zendesk", "SharePoint", "HubSpot", "Dropbox",
  "Gmail", "Teams", "Asana", "Linear", "Guru", "Coda", "Outline",
  "Productboard", "Freshdesk", "Discourse", "Slab", "Loopio",
];

const CAPABILITIES = [
  {
    icon: Bot, title: "Custom AI Agents",
    desc: "Build specialized AI agents with unique system prompts, curated knowledge sets, and tool access. Deploy them for engineering, sales, support, or any team workflow.",
    href: "/platform/ai-agents", accent: "var(--nb-amber)",
  },
  {
    icon: Search, title: "RAG & Enterprise Search",
    desc: "Best-in-class hybrid search combining dense vector retrieval with BM25 keyword search. Scales to tens of millions of documents without compromising precision.",
    href: "/platform/rag-search", accent: "var(--nb-teal)",
  },
  {
    icon: Microscope, title: "Deep Research",
    desc: "Multi-step agentic research that decomposes complex questions, iteratively gathers evidence from your knowledge base, and synthesizes comprehensive answers.",
    href: "/platform/deep-research", accent: "var(--nb-violet)",
  },
  {
    icon: Network, title: "Knowledge Graph",
    desc: "Entity extraction and graph-based relationship mapping transforms siloed documents into a connected intelligence layer your agents can reason over.",
    href: "/platform/knowledge-graph", accent: "var(--nb-amber)",
  },
  {
    icon: Zap, title: "MCP & Actions",
    desc: "Give agents the ability to take action — not just answer. Native Model Context Protocol support lets agents interact with any external system.",
    href: "/platform/mcp-actions", accent: "var(--nb-teal)",
  },
  {
    icon: Code2, title: "Code Interpreter",
    desc: "Execute Python, analyze datasets, render charts, and generate files — all within a secure sandboxed environment your agents can use on demand.",
    href: "/platform/code-interpreter", accent: "var(--nb-violet)",
  },
];

const STATS = [
  { value: "40+", label: "Data Connectors", sub: "natively supported" },
  { value: "10M+", label: "Documents Indexed", sub: "at peak scale" },
  { value: "Any LLM", label: "Model Flexibility", sub: "OpenAI, Anthropic, local" },
  { value: "Air-gap", label: "Deployment Ready", sub: "fully on-premises" },
];

const ENTERPRISE_FEATURES = [
  { icon: Shield, label: "SSO · OIDC / SAML / OAuth2" },
  { icon: Lock, label: "Role-based access control (RBAC)" },
  { icon: Database, label: "Document-level permissioning" },
  { icon: Server, label: "Air-gapped & VPC deployment" },
  { icon: Users, label: "SCIM user provisioning" },
  { icon: BarChart3, label: "Usage analytics & audit logs" },
];

/* ─── Number Ticker ─────────────────────────────────────── */
function useIntersection(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ─── SVG Animations ─────────────────────────────────────── */
function AgentFlowSVG() {
  return (
    <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Grid background */}
      <defs>
        <pattern id="sg" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#C5C0B2" />
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0C0C0C" />
        </marker>
      </defs>
      <rect width="440" height="260" fill="url(#sg)" />

      {/* Central agent node */}
      <rect x="170" y="100" width="100" height="60" rx="4" fill="#F59E0B" stroke="#0C0C0C" strokeWidth="2" style={{ filter: "drop-shadow(4px 4px 0px #0C0C0C)" }} />
      <text x="220" y="126" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0C0C0C" fontFamily="sans-serif">AI AGENT</text>
      <text x="220" y="144" textAnchor="middle" fontSize="9" fill="#453F37" fontFamily="sans-serif">reasoning loop</text>

      {/* Connector nodes */}
      {[
        { x: 20, y: 30, label: "Confluence", color: "#E5E0D4" },
        { x: 340, y: 30, label: "Salesforce", color: "#E5E0D4" },
        { x: 20, y: 190, label: "Slack", color: "#E5E0D4" },
        { x: 340, y: 190, label: "GitHub", color: "#E5E0D4" },
        { x: 180, y: 10, label: "Google Drive", color: "#0D9488", textColor: "#fff" },
      ].map(({ x, y, label, color, textColor }) => (
        <g key={label}>
          <rect x={x} y={y} width="80" height="36" rx="4" fill={color} stroke="#0C0C0C" strokeWidth="1.5" />
          <text x={x + 40} y={y + 22} textAnchor="middle" fontSize="9" fontWeight="700" fill={textColor || "#0C0C0C"} fontFamily="sans-serif">{label}</text>
        </g>
      ))}

      {/* Tool nodes */}
      {[
        { x: 60, y: 110, label: "Web Search" },
        { x: 310, y: 110, label: "Code Exec" },
      ].map(({ x, y, label }) => (
        <g key={label}>
          <rect x={x} y={y} width="75" height="30" rx="2" fill="#FAF9F6" stroke="#0C0C0C" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x={x + 37} y={y + 19} textAnchor="middle" fontSize="9" fontWeight="600" fill="#453F37" fontFamily="sans-serif">{label}</text>
        </g>
      ))}

      {/* Animated flow lines */}
      <line x1="100" y1="48" x2="170" y2="110" stroke="#0C0C0C" strokeWidth="1.5" markerEnd="url(#arrow)"
        style={{ strokeDasharray: 150, strokeDashoffset: 150, animation: "dash 1.8s ease forwards 0.3s" }} />
      <line x1="340" y1="48" x2="270" y2="110" stroke="#0C0C0C" strokeWidth="1.5" markerEnd="url(#arrow)"
        style={{ strokeDasharray: 150, strokeDashoffset: 150, animation: "dash 1.8s ease forwards 0.5s" }} />
      <line x1="100" y1="208" x2="170" y2="148" stroke="#0C0C0C" strokeWidth="1.5" markerEnd="url(#arrow)"
        style={{ strokeDasharray: 150, strokeDashoffset: 150, animation: "dash 1.8s ease forwards 0.7s" }} />
      <line x1="340" y1="208" x2="270" y2="148" stroke="#0C0C0C" strokeWidth="1.5" markerEnd="url(#arrow)"
        style={{ strokeDasharray: 150, strokeDashoffset: 150, animation: "dash 1.8s ease forwards 0.9s" }} />
      <line x1="220" y1="46" x2="220" y2="100" stroke="#0D9488" strokeWidth="2" markerEnd="url(#arrow)"
        style={{ strokeDasharray: 60, strokeDashoffset: 60, animation: "dash 1.2s ease forwards 0.2s" }} />
      <line x1="135" y1="125" x2="170" y2="125" stroke="#0C0C0C" strokeWidth="1.5" markerEnd="url(#arrow)"
        style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: "dash 1.0s ease forwards 1.1s" }} />
      <line x1="270" y1="125" x2="310" y2="125" stroke="#0C0C0C" strokeWidth="1.5" markerEnd="url(#arrow)"
        style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: "dash 1.0s ease forwards 1.1s" }} />

      {/* Deep research label */}
      <rect x="156" y="228" width="128" height="22" rx="2" fill="#7C3AED" stroke="#0C0C0C" strokeWidth="1.5" />
      <text x="220" y="243" textAnchor="middle" fontSize="9" fontWeight="800" fill="white" fontFamily="sans-serif">DEEP RESEARCH MODE</text>
    </svg>
  );
}

/* ─── Page ─────────────────────────────────────────────── */
export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)", overflowX: "hidden" }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 24px 64px", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />

        {/* Decorative amber rectangle */}
        <div style={{ position: "absolute", top: 100, right: "8%", width: 200, height: 200, background: "var(--nb-amber)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-xl)", opacity: 0.65, borderRadius: "var(--radius)", pointerEvents: "none", animation: "float 7s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: 140, right: "calc(8% + 44px)", width: 200, height: 200, border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", pointerEvents: "none" }} />

        {/* Teal circle */}
        <div style={{ position: "absolute", bottom: 80, left: "5%", width: 130, height: 130, borderRadius: "50%", border: "2px solid var(--nb-teal)", pointerEvents: "none", animation: "floatSlow 8s ease-in-out infinite", opacity: 0.6 }} />

        <div className="ox-hero-grid" style={{ maxWidth: 1264, margin: "0 auto", width: "100%", position: "relative", display: "grid", gap: 64, alignItems: "center" }}>

          <div>
            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "var(--nb-amber)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 28 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--nb-ink)", flexShrink: 0 }} />
                Enterprise AI Platform
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "var(--font-bricolage, sans-serif)", fontSize: "clamp(48px,7vw,88px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, color: "var(--nb-ink)", maxWidth: 700, marginBottom: 8 }}>
              Your company<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>knowledge,</span>{" "}
              <span style={{ background: "var(--nb-amber)", padding: "0 6px", display: "inline", borderRadius: 2 }}>weaponized.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(16px,1.6vw,20px)", color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 540, marginBottom: 40, fontWeight: 400 }}>
              Onyx connects to every tool your team uses, indexes it with best-in-class hybrid RAG, and puts custom AI agents to work — with full enterprise security and on-premises deployment.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginBottom: 48 }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link href="/platform" className="btn-secondary" style={{ textDecoration: "none" }}>
                Explore Platform <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Social proof mini-chips */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}
              style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { icon: Shield, label: "SOC 2 Ready" },
                { icon: Lock, label: "Air-gap Deployable" },
                { icon: CheckCircle2, label: "OIDC / SAML SSO" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", border: "1.5px solid var(--nb-border-light)", borderRadius: "var(--radius)", background: "var(--nb-surface)", fontSize: 12, fontWeight: 600, color: "var(--nb-ink-muted)" }}>
                  <Icon size={12} color="var(--nb-teal)" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero SVG */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%", maxWidth: 480, height: 300, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-xl)", borderRadius: "var(--radius)", background: "var(--nb-surface)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
            <AgentFlowSVG />
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
            section > div > div > div:last-child { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── CONNECTORS MARQUEE ───────────────────────────── */}
      <div style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)", borderBottom: "2px solid var(--nb-border)", padding: "18px 0", overflow: "hidden" }}>
        <div className="marquee">
          <div className="marquee-track" style={{ gap: 0 }}>
            {[...CONNECTORS, ...CONNECTORS].map((c, i) => (
              <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "0 24px", whiteSpace: "nowrap", borderRight: "1px solid rgba(255,255,255,0.15)" }}>
                <Plug size={12} color="var(--nb-amber)" />
                <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(250,249,246,0.75)", fontFamily: "var(--font-bricolage, sans-serif)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container" ref={statsRef}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {STATS.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="nb-card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-fraunces, serif)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.03em", marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "var(--nb-ink)", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: "var(--nb-ink-dim)", fontWeight: 500 }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="eyebrow">Core Capabilities</div>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, maxWidth: 640, marginBottom: 16 }}>
              Everything intelligence<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>demands.</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 540, lineHeight: 1.7, marginBottom: 64 }}>
              From custom agents that know your codebase to deep research that synthesizes thousands of documents — Onyx turns your fragmented knowledge into actionable intelligence.
            </p>
          </motion.div>

          <div className="cards-3">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={cap.title}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Link href={cap.href} className="nb-card" style={{ display: "block", padding: 28, textDecoration: "none", height: "100%" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: cap.accent, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, flexShrink: 0 }}>
                      <Icon size={20} color={cap.accent === "var(--nb-amber)" ? "var(--nb-ink)" : "#fff"} />
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 10, color: "var(--nb-ink)" }}>{cap.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 16 }}>{cap.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)" }}>
                      Learn more <ArrowRight size={13} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="section section--invert">
        <div className="line-grid" style={{ position: "absolute", inset: 0, opacity: 0.12, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="eyebrow" style={{ background: "var(--nb-amber)", color: "var(--nb-ink)" }}>How It Works</div>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 600, marginBottom: 64, color: "var(--nb-bg)" }}>
              From raw data to<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>intelligent answers</span> — in three steps.
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
            {[
              { step: "01", title: "Connect", desc: "Configure any of 40+ connectors to ingest documents, tickets, chats, wikis, and code from across your entire software stack.", icon: Plug },
              { step: "02", title: "Index", desc: "Onyx runs hybrid search indexing — dense vector embeddings plus BM25 — building a knowledge graph that maps entity relationships across all your sources.", icon: Network },
              { step: "03", title: "Deploy Agents", desc: "Stand up custom AI agents with specific knowledge scopes, system instructions, and tool access. Set document permissions that mirror your existing ACLs.", icon: Bot },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.step}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                  style={{ padding: "40px 32px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius)", background: "rgba(255,255,255,0.03)" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 11, fontWeight: 700, color: "var(--nb-amber)", letterSpacing: "0.12em", marginBottom: 24 }}>STEP {item.step}</div>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "rgba(245,158,11,0.15)", border: "1.5px solid rgba(245,158,11,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="var(--nb-amber)" />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--nb-bg)", letterSpacing: "-0.03em", marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 14.5, color: "rgba(250,249,246,0.6)", lineHeight: 1.75 }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONNECTORS GRID ───────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <div className="ox-split-2col" style={{ display: "grid", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <div className="eyebrow">40+ Connectors</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>
                Connect every<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>tool in your stack.</span>
              </h2>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 28 }}>
                Onyx natively connects to 40+ knowledge sources — from Slack and Confluence to Salesforce and GitHub — keeping your agents informed and up-to-date automatically.
              </p>
              <Link href="/platform/connectors" className="btn-primary" style={{ textDecoration: "none" }}>
                See All Connectors <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
              {CONNECTORS.slice(0, 16).map((name) => (
                <div key={name} className="nb-card nb-card--surface" style={{ padding: "12px 8px", textAlign: "center", cursor: "default" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "var(--radius)", background: "var(--nb-amber)", border: "1.5px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                    <Plug size={12} color="var(--nb-ink)" />
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "var(--nb-ink-muted)", letterSpacing: "-0.01em" }}>{name}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE SECURITY ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="ox-split-2col" style={{ display: "grid", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
              {/* Security SVG */}
              <div style={{ border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-xl)", borderRadius: "var(--radius)", background: "var(--nb-invert)", padding: 32, position: "relative", overflow: "hidden" }}>
                <svg viewBox="0 0 360 240" fill="none" width="100%" height="180">
                  <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="360" height="240" fill="url(#glow)" />
                  {/* Concentric rings */}
                  {[100, 75, 50, 30].map((r, i) => (
                    <circle key={r} cx="180" cy="120" r={r} stroke="rgba(245,158,11,0.3)" strokeWidth={i === 0 ? 1 : 1.5} fill="none"
                      style={{ animation: `pulse-ring ${2 + i * 0.5}s ease-out infinite ${i * 0.4}s` }} />
                  ))}
                  {/* Shield center */}
                  <path d="M180 88 L204 100 L204 124 C204 136 180 148 180 148 C180 148 156 136 156 124 L156 100 Z" fill="#F59E0B" stroke="#0C0C0C" strokeWidth="2" />
                  <path d="M173 118 L178 123 L188 113" stroke="#0C0C0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Labels */}
                  {[
                    { x: 44, y: 60, label: "RBAC" },
                    { x: 270, y: 60, label: "SSO" },
                    { x: 28, y: 160, label: "SCIM" },
                    { x: 272, y: 160, label: "Audit" },
                    { x: 140, y: 26, label: "TLS" },
                    { x: 138, y: 210, label: "Air-gap" },
                  ].map(({ x, y, label }) => (
                    <g key={label}>
                      <rect x={x} y={y - 14} width={label.length * 7 + 10} height={20} rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
                      <text x={x + (label.length * 7 + 10) / 2} y={y} textAnchor="middle" fontSize="9" fontWeight="700" fill="#F59E0B" fontFamily="sans-serif">{label}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <div className="eyebrow">Enterprise Security</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>
                Zero compromise<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>on security.</span>
              </h2>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 28 }}>
                Onyx was built for organizations where data governance isn't optional. From document-level permissioning to fully air-gapped deployments, every security requirement is met out of the box.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {ENTERPRISE_FEATURES.map(({ icon: Icon, label }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 32, height: 32, background: "var(--nb-teal-subtle)", border: "1.5px solid var(--nb-teal)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={14} color="var(--nb-teal)" />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--nb-ink)" }}>{label}</span>
                  </div>
                ))}
              </div>
              <Link href="/enterprise/security" className="btn-secondary" style={{ textDecoration: "none" }}>
                Security Overview <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES / USE CASES ────────────────────────── */}
      <section className="section section--stripe">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="eyebrow">Built for Every Team</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 56 }}>
              Solutions for every<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>function.</span>
            </h2>
          </motion.div>

          <div className="cards-2">
            {[
              { title: "Engineering Teams", desc: "Instant answers from Jira, GitHub, Confluence, and internal wikis. Agents that debug issues, generate tickets, and surface related PRs automatically.", href: "/solutions/engineering", icon: Code2, accent: "var(--nb-teal)" },
              { title: "Sales & Revenue Operations", desc: "Agents trained on your product docs, battlecards, and CRM data answer prospect questions, draft proposals, and summarize account history instantly.", href: "/solutions/sales-revenue", icon: BarChart3, accent: "var(--nb-amber)" },
              { title: "Legal & Compliance", desc: "Surface relevant contracts, policy documents, and regulation guidelines. Onyx respects document-level ACLs so sensitive materials stay protected.", href: "/solutions/legal-compliance", icon: Shield, accent: "var(--nb-violet)" },
              { title: "HR & People Operations", desc: "Self-service HR agents help employees navigate policies, onboarding docs, and benefits information — reducing support ticket volume significantly.", href: "/solutions/hr-operations", icon: Users, accent: "var(--nb-teal)" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Link href={item.href} className="nb-card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, padding: 28, textDecoration: "none" }}>
                    <div style={{ width: 48, height: 48, borderRadius: "var(--radius)", background: item.accent, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={22} color={item.accent === "var(--nb-amber)" ? "var(--nb-ink)" : "#fff"} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8, color: "var(--nb-ink)" }}>{item.title}</h3>
                      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: "var(--nb-teal)" }}>
                        Explore <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DEPLOYMENT ────────────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="eyebrow">Deployment Flexibility</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>
              Deploy on your<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>terms.</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 540, lineHeight: 1.75, marginBottom: 48 }}>
              From Kubernetes clusters to fully air-gapped on-premises environments — Onyx deploys wherever your data governance requirements demand.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { title: "Kubernetes", desc: "Production-grade deployment with Helm charts, horizontal scaling, and HA configuration for large enterprise teams.", icon: Server, tag: "Most Popular" },
              { title: "Docker Compose", desc: "Streamlined deployment for teams getting started. Full-featured, configurable, ready for production with the right infrastructure.", icon: Code2, tag: null },
              { title: "Air-Gapped / On-Prem", desc: "Fully isolated deployments within your VPC or data center with local LLMs (Ollama, vLLM) and zero external data egress.", icon: Lock, tag: "Enterprise" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="nb-card" style={{ padding: 28 }}>
                  {item.tag && (
                    <div style={{ display: "inline-block", padding: "3px 10px", background: "var(--nb-amber)", border: "1.5px solid var(--nb-border)", fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                      {item.tag}
                    </div>
                  )}
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 10, color: "var(--nb-ink)" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/enterprise/deployment" className="btn-secondary" style={{ textDecoration: "none" }}>
              View All Deployment Options <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="section section--invert">
        <div className="line-grid" style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }} />
        <div className="container container--tight" style={{ textAlign: "center", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "var(--nb-amber)", border: "2px solid var(--nb-amber)", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 28, borderRadius: "var(--radius)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--nb-ink)" }} />
              Enterprise Ready
            </div>
            <h2 style={{ fontSize: "clamp(36px,5vw,68px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, color: "var(--nb-bg)", marginBottom: 20 }}>
              Ready to put your<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>knowledge</span> to work?
            </h2>
            <p style={{ fontSize: 18, color: "rgba(250,249,246,0.65)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
              Our team will scope your deployment, walk through your security requirements, and set up a proof-of-concept on your own infrastructure.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link href="/enterprise" className="btn-invert" style={{ textDecoration: "none" }}>
                Enterprise Overview
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
