"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Globe, ArrowRight, Lock, Shield, Database, FileText, Server, AlertTriangle } from "lucide-react";

export default function GovernmentPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="eyebrow">Government & Defense</div>
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: 760, marginBottom: 20 }}>
              Enterprise AI<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>cleared for mission.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
              Government agencies and defense organizations operate in environments where air-gap deployment, classification-aware access control, and data sovereignty are non-negotiable. Genie supports fully isolated deployments that never touch the public internet.
            </p>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Request Briefing <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-3">
            {[
              { icon: Server, title: "Air-Gapped Deployment", desc: "Genie runs entirely within your secure enclave. Via Ollama or vLLM, LLM inferencing stays on-premises with zero data egress." },
              { icon: Lock, title: "Classification-Aware ACL", desc: "Document-level permissions mirror your existing classification system. Users only see documents at or below their clearance level." },
              { icon: Shield, title: "FedRAMP-Aligned Controls", desc: "Architecture designed to support FedRAMP Moderate and High control families including access management, audit logging, and continuous monitoring." },
              { icon: AlertTriangle, title: "STIG Hardening Support", desc: "Deployment configurations supporting DISA STIG compliance for container and host-level hardening requirements." },
              { icon: Database, title: "Data Sovereignty", desc: "All processing occurs within your jurisdiction. No vendor telemetry, no model training on your data, no external dependencies in air-gapped mode." },
              { icon: FileText, title: "Intelligence Synthesis", desc: "Analysts use Deep Research to synthesize reports, briefings, and situational analysis from classified and unclassified sources with full provenance." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-violet)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="#fff" />
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
            Sovereign AI for public sector missions.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Request a Briefing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
