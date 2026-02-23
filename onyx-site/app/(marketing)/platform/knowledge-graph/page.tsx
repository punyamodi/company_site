"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Network, ArrowRight, Search, Layers, Cpu, GitBranch } from "lucide-react";

export default function KnowledgeGraphPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="eyebrow">Knowledge Graph</div>
              <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 20 }}>
                Your knowledge,<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>connected.</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 36 }}>
                Onyx builds a knowledge graph across all your indexed documents — extracting entities, relationships, and concepts, then mapping how they connect across sources. Agents reason over the graph, not just individual documents.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <svg viewBox="0 0 400 300" fill="none" width="100%" style={{ border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-lg)", borderRadius: "var(--radius)", background: "var(--nb-surface)", padding: 8 }}>
                {/* Graph nodes */}
                {[
                  { x: 200, y: 140, r: 28, fill: "#F59E0B", stroke: "#0C0C0C", label: "Auth\nService", textColor: "#0C0C0C" },
                  { x: 80, y: 80, r: 20, fill: "#0D9488", stroke: "#0C0C0C", label: "JWT", textColor: "#fff" },
                  { x: 320, y: 80, r: 20, fill: "#7C3AED", stroke: "#0C0C0C", label: "OAuth2", textColor: "#fff" },
                  { x: 80, y: 200, r: 18, fill: "#FAF9F6", stroke: "#0C0C0C", label: "Redis", textColor: "#0C0C0C" },
                  { x: 320, y: 200, r: 18, fill: "#FAF9F6", stroke: "#0C0C0C", label: "Postgres", textColor: "#0C0C0C" },
                  { x: 200, y: 264, r: 16, fill: "#FAF9F6", stroke: "#0C0C0C", label: "Users", textColor: "#0C0C0C" },
                  { x: 60, y: 148, r: 14, fill: "rgba(13,148,136,0.2)", stroke: "#0D9488", label: "OIDC", textColor: "#0D9488" },
                  { x: 340, y: 148, r: 14, fill: "rgba(124,58,237,0.2)", stroke: "#7C3AED", label: "SAML", textColor: "#7C3AED" },
                ].map(({ x, y, r, fill, stroke, label, textColor }) => (
                  <g key={label}>
                    <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth="2" />
                    {label.split('\n').map((line, li) => (
                      <text key={li} x={x} y={y + (li - (label.split('\n').length - 1) / 2) * 11 + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill={textColor} fontFamily="sans-serif">{line}</text>
                    ))}
                  </g>
                ))}
                {/* Edges */}
                {[
                  [200, 140, 80, 80], [200, 140, 320, 80], [200, 140, 80, 200],
                  [200, 140, 320, 200], [200, 140, 200, 264], [80, 80, 60, 148],
                  [320, 80, 340, 148],
                ].map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(12,12,12,0.25)" strokeWidth="1.5"
                    style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: `dash 1.5s ease forwards ${i * 0.15}s` }} />
                ))}
                {/* Source labels */}
                {[
                  { x: 24, y: 24, label: "from: Confluence" },
                  { x: 300, y: 24, label: "from: GitHub" },
                ].map(({ x, y, label }) => (
                  <text key={label} x={x} y={y} fontSize="8" fill="#7A7268" fontFamily="sans-serif" fontWeight="600">{label}</text>
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-label">Capabilities</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            Intelligence beyond<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>keyword matching.</span>
          </h2>
          <div className="cards-2">
            {[
              { icon: Cpu, title: "Entity Extraction", desc: "Named entity recognition across all ingested documents identifies people, systems, products, processes, and concepts — building a shared vocabulary across your organization." },
              { icon: GitBranch, title: "Relationship Mapping", desc: "Extracted entities are linked into a graph structure. An agent searching for 'auth service' surfaces not just documents about auth, but everything connected to it." },
              { icon: Search, title: "Graph-Enhanced Retrieval", desc: "Retrieval queries traverse the knowledge graph before reaching the vector index — expanding query context and surfacing related information a pure semantic search would miss." },
              { icon: Layers, title: "Cross-Source Synthesis", desc: "The graph maps how concepts described differently in Slack, Confluence, and Jira all refer to the same underlying entity — eliminating duplicate and inconsistent answers." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="nb-card" style={{ padding: 32 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-amber)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="var(--nb-ink)" />
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
            See the graph built on your knowledge.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            Schedule a demo and we'll show you the entity graph Onyx builds from a sample of your connected sources.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Request Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
