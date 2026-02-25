import Link from "next/link";
import { ArrowRight, Database, CheckCircle2, Zap, Shield, Server, Network } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INCLUDES = [
  "Custom data ingestion pipeline architecture",
  "Vector database selection & implementation",
  "RAG (Retrieval-Augmented Generation) system design",
  "Embedding pipeline engineering",
  "Real-time data streaming & processing",
  "Data governance & lineage frameworks",
  "Semantic search infrastructure",
  "Multi-modal data handling (text, images, documents)",
  "Data quality monitoring & alerting",
  "Knowledge graph construction",
];

const CAPABILITIES = [
  { icon: Database, title: "Vector Databases", desc: "Pinecone, Weaviate, Qdrant, pgvector — we select and implement the right vector store for your scale, latency requirements, and query patterns." },
  { icon: Network, title: "RAG Systems", desc: "Retrieval-Augmented Generation that actually works at enterprise scale. Hybrid search, re-ranking, context-aware chunking, and query routing." },
  { icon: Zap, title: "Real-time Pipelines", desc: "Kafka, Flink, Spark Streaming — event-driven data architectures that keep your AI models fed with current, accurate information." },
  { icon: Shield, title: "Data Governance", desc: "PII detection, data masking, access controls, audit logging, and lineage tracking built into every pipeline from day one." },
  { icon: Server, title: "Scalable Infrastructure", desc: "Architectures that scale from POC to enterprise load. Auto-scaling, cost optimization, and performance tuning included." },
  { icon: CheckCircle2, title: "Model-Ready Data", desc: "We don't just store your data — we structure it so your AI models can use it effectively. Clean, enriched, semantically indexed." },
];

export default function DataAIPlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 64, position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(var(--nb-border-faint) 1px, transparent 1px), linear-gradient(90deg, var(--nb-border-faint) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container">
          <div style={{ marginBottom: 8 }}>
            <Link href={`${BASE}/services`} style={{ fontSize: 13, color: "var(--nb-ink-muted)", textDecoration: "none" }}>← Services</Link>
          </div>
          <span className="eyebrow" style={{ marginTop: 16 }}>Data & AI Platforms</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 20, maxWidth: 700 }}>
            Build the data foundation your{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              AI actually needs.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 580, marginBottom: 36 }}>
            Most AI projects fail not because of the model — but because of the data layer beneath it. We build the pipelines, vector stores, and retrieval systems that make enterprise AI reliable and accurate.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link href={`${BASE}/process`} className="btn-secondary" style={{ textDecoration: "none" }}>
              Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section section--surface">
        <div className="container">
          <div className="fg-split-2col">
            <div>
              <span className="section-label">What&apos;s Included</span>
              <h2 style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: 16 }}>
                Full-stack data platform engineering
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                A complete data platform engagement covers architecture design, pipeline implementation, storage configuration, and the retrieval systems that connect your data to your AI models.
              </p>
              <div style={{ padding: "20px 24px", background: "var(--nb-rose-subtle)", border: "2px solid var(--nb-rose)", borderRadius: "var(--radius)", marginBottom: 32 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "var(--nb-rose)", marginBottom: 6 }}>Built on proven stack</p>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>
                  We leverage our InferGate and Genie platform components where appropriate, or integrate with your existing data infrastructure.
                </p>
              </div>
              <Link href={`${BASE}/contact`} className="btn-primary" style={{ textDecoration: "none" }}>
                Discuss Your Data Challenge <ArrowRight size={14} />
              </Link>
            </div>
            <div className="nb-card" style={{ padding: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 20 }}>
                Deliverables
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {INCLUDES.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={14} color="var(--nb-rose)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <span className="section-label">Our Capabilities</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>Every layer of the data stack</h2>
          </div>
          <div className="cards-3">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="nb-card" style={{ padding: 28 }}>
                  <div style={{
                    width: 40, height: 40, background: "var(--nb-rose-subtle)", border: "2px solid var(--nb-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "var(--radius)", marginBottom: 16,
                  }}>
                    <Icon size={18} color="var(--nb-rose)" />
                  </div>
                  <h3 style={{ fontSize: 17, marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--rose">
        <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff", marginBottom: 16 }}>
            Ready to build your AI data platform?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 32 }}>
            Tell us about your data sources, volumes, and AI use cases. We&apos;ll design the platform architecture.
          </p>
          <Link href={`${BASE}/contact`} style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
            background: "#fff", color: "var(--nb-rose)", border: "2px solid #fff",
            fontWeight: 800, fontSize: 15, textDecoration: "none", borderRadius: "var(--radius)",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.15)",
          }}>
            Start a Project <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
