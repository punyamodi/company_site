"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Search, ArrowRight, Database, Zap, Network, CheckCircle2, BarChart3 } from "lucide-react";

export default function RAGPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="eyebrow">RAG & Enterprise Search</div>
              <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 20 }}>
                Search that<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>actually finds</span><br />
                the answer.
              </h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 36 }}>
                Onyx combines dense vector embeddings with BM25 keyword search in a custom hybrid retrieval pipeline. The result: precise, context-aware answers that scale to tens of millions of documents without degrading in quality.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
                <Link href="/platform" className="btn-secondary" style={{ textDecoration: "none" }}>View Platform</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <svg viewBox="0 0 420 280" fill="none" width="100%" style={{ border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-lg)", borderRadius: "var(--radius)", background: "var(--nb-surface)" }}>
                <defs>
                  <pattern id="dg2" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="#C5C0B2" />
                  </pattern>
                </defs>
                <rect width="420" height="280" fill="url(#dg2)" />

                {/* Query box */}
                <rect x="20" y="20" width="380" height="40" rx="4" fill="#FAF9F6" stroke="#0C0C0C" strokeWidth="2" />
                <text x="36" y="45" fontSize="12" fontWeight="600" fill="#453F37" fontFamily="sans-serif">"How do we handle GDPR deletion requests?"</text>
                <rect x="364" y="28" width="28" height="24" rx="2" fill="#F59E0B" stroke="#0C0C0C" strokeWidth="1.5" />
                <text x="378" y="44" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0C0C0C" fontFamily="sans-serif">⌘</text>

                {/* Two retrieval paths */}
                <text x="56" y="90" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0D9488" fontFamily="sans-serif">VECTOR</text>
                <text x="56" y="102" textAnchor="middle" fontSize="9" fill="#453F37" fontFamily="sans-serif">semantic</text>
                <rect x="20" y="80" width="72" height="28" rx="2" fill="rgba(13,148,136,0.12)" stroke="#0D9488" strokeWidth="1.5" />

                <text x="194" y="90" textAnchor="middle" fontSize="10" fontWeight="800" fill="#7C3AED" fontFamily="sans-serif">BM25</text>
                <text x="194" y="102" textAnchor="middle" fontSize="9" fill="#453F37" fontFamily="sans-serif">keyword</text>
                <rect x="158" y="80" width="72" height="28" rx="2" fill="rgba(124,58,237,0.12)" stroke="#7C3AED" strokeWidth="1.5" />

                {/* Lines from query to retrievers */}
                <line x1="210" y1="60" x2="56" y2="80" stroke="#0C0C0C" strokeWidth="1.2" strokeDasharray="4 2" />
                <line x1="210" y1="60" x2="194" y2="80" stroke="#0C0C0C" strokeWidth="1.2" strokeDasharray="4 2" />

                {/* Reranker */}
                <rect x="120" y="130" width="180" height="34" rx="4" fill="#F59E0B" stroke="#0C0C0C" strokeWidth="2" style={{ filter: "drop-shadow(3px 3px 0 #0C0C0C)" }} />
                <text x="210" y="152" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0C0C0C" fontFamily="sans-serif">CROSS-ENCODER RERANKER</text>
                <line x1="56" y1="108" x2="156" y2="130" stroke="#0C0C0C" strokeWidth="1.2" />
                <line x1="194" y1="108" x2="210" y2="130" stroke="#0C0C0C" strokeWidth="1.2" />

                {/* Result chunks */}
                {[0, 1, 2].map((i) => (
                  <g key={i}>
                    <rect x={20 + i * 128} y={194} width={112} height={50} rx="2" fill="#FAF9F6" stroke="#0C0C0C" strokeWidth="1.5" />
                    <rect x={20 + i * 128} y={194} width={i === 0 ? 112 : i === 1 ? 80 : 50} height={4} rx="1" fill={i === 0 ? "#F59E0B" : i === 1 ? "#0D9488" : "#7C3AED"} />
                    <text x={76 + i * 128} y={218} textAnchor="middle" fontSize="9" fill="#453F37" fontFamily="sans-serif">Chunk {i + 1}</text>
                    <text x={76 + i * 128} y={231} textAnchor="middle" fontSize="8" fill="#7A7268" fontFamily="sans-serif">score: {(0.97 - i * 0.06).toFixed(2)}</text>
                    <line x1={76 + i * 128} y1={164} x2={76 + i * 128} y2={194} stroke="#0C0C0C" strokeWidth="1" strokeDasharray="3 2" />
                  </g>
                ))}

                <text x="210" y="265" textAnchor="middle" fontSize="10" fontWeight="700" fill="#453F37" fontFamily="sans-serif">Top-K chunks → LLM context window → synthesized answer</text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-label">Technical Architecture</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 48 }}>
            How Onyx retrieval<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>outperforms standard RAG.</span>
          </h2>
          <div className="cards-3">
            {[
              { icon: Database, title: "Custom Indexing Pipeline", desc: "Multi-stage document processing with intelligent chunking strategies, metadata extraction, and configurable embedding models tailored to your content types.", accent: "var(--nb-amber)" },
              { icon: Network, title: "Knowledge Graph Layer", desc: "Beyond vector similarity — Onyx builds entity-relationship graphs across your corpus so agents can reason about connected information, not just similar text.", accent: "var(--nb-teal)" },
              { icon: BarChart3, title: "Document Permissioning", desc: "Access control mirrored directly from source systems. Users only see documents they're authorized to access — enforced at query time, not just ingestion.", accent: "var(--nb-violet)" },
              { icon: Zap, title: "Real-Time Sync", desc: "Continuous connector polling keeps your index current. New documents, updates, and deletions propagate automatically with configurable sync intervals.", accent: "var(--nb-amber)" },
              { icon: Search, title: "Hybrid Scoring", desc: "Reciprocal rank fusion combines dense and sparse retrieval scores, then a cross-encoder reranker re-scores the top candidates for maximum precision.", accent: "var(--nb-teal)" },
              { icon: CheckCircle2, title: "Scalable Architecture", desc: "Built on Vespa vector database with proven horizontal scaling. Organizations have indexed tens of millions of documents without degradation in retrieval quality.", accent: "var(--nb-violet)" },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: f.accent, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color={f.accent === "var(--nb-amber)" ? "var(--nb-ink)" : "#fff"} />
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
            See it search your documents.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,249,246,0.65)", marginBottom: 32 }}>
            We'll run a proof-of-concept connecting Onyx to your most critical knowledge sources and demonstrate retrieval quality on your real data.
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            Request a Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
