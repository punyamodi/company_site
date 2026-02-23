"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Globe, ArrowRight, Search, Zap, Shield, RefreshCw } from "lucide-react";

export default function WebSearchPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Real-Time Web Search</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Agents that know<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>what's happening now.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Onyx agents can browse the live web — combining your internal knowledge with real-time external information. Configurable web search providers keep agents grounded in current facts.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Request Demo <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-label">Search Providers</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 32 }}>
            Configurable search<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>for every policy.</span>
          </h2>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
            {["Google PSE", "Exa", "Serper", "Firecrawl", "Built-in Scraper"].map((p) => (
              <div key={p} style={{ padding: "12px 20px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-bg)", boxShadow: "var(--shadow-brutal-sm)", fontSize: 14, fontWeight: 700 }}>
                <Globe size={14} style={{ marginRight: 8, verticalAlign: "middle", color: "var(--nb-teal)" }} />
                {p}
              </div>
            ))}
          </div>

          <div className="cards-2">
            {[
              { icon: Search, title: "Grounded Responses", desc: "When your internal knowledge is insufficient or potentially outdated, agents seamlessly supplement with live web retrieval — clearly distinguishing internal vs external sources." },
              { icon: RefreshCw, title: "Up-to-Date Answers", desc: "Markets, regulations, competitor actions, and external events are never stale. Agents retrieve the latest information in real time and incorporate it into answers." },
              { icon: Zap, title: "Configurable by Agent", desc: "Web search can be enabled or disabled on a per-agent basis. Some agents are scoped entirely to internal knowledge; others are permitted to reach the open web." },
              { icon: Shield, title: "Content Filtering", desc: "Built-in content classification screens web results before they reach the agent context, preventing injection of malicious or inappropriate external content." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="nb-card" style={{ padding: 32 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Internal knowledge meets the live web.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
