"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Platform",
    links: [
      { label: "Platform Overview",       href: "/platform" },
      { label: "Pipeline Engine",          href: "/platform/pipeline-engine" },
      { label: "Voice AI Core",            href: "/platform/voice-ai" },
      { label: "Multimodal Processing",    href: "/platform/multimodal" },
      { label: "Transport Layer",          href: "/platform/transports" },
      { label: "Observability",            href: "/platform/observability" },
      { label: "Security",                 href: "/platform/security" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "Integrations Hub",         href: "/integrations" },
      { label: "Speech (STT / TTS)",       href: "/integrations/speech" },
      { label: "LLM Providers",            href: "/integrations/llm" },
      { label: "Transport & WebRTC",       href: "/integrations/transport" },
      { label: "Telephony",               href: "/integrations/telephony" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Customer Service AI",      href: "/solutions/customer-service" },
      { label: "Voice Assistants",         href: "/solutions/voice-assistants" },
      { label: "AI Companions",            href: "/solutions/ai-companions" },
      { label: "Business Workflows",       href: "/solutions/business-workflows" },
      { label: "Industries",               href: "/industries" },
      { label: "Enterprise",               href: "/enterprise" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",             href: "/about" },
      { label: "Changelog",        href: "/changelog" },
      { label: "Contact Sales",    href: "/contact" },
      { label: "Enterprise Pricing",href: "/enterprise/pricing" },
      { label: "Privacy Policy",   href: "/enterprise/security" },
      { label: "Terms of Service", href: "/contact" },
    ],
  },
];

const STATS = [
  { value: "<100ms", label: "End-to-end latency" },
  { value: "20+",    label: "AI service providers" },
  { value: "6+",     label: "Transport types" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)", color: "var(--nb-bg)", fontFamily: "var(--font-bricolage, sans-serif)" }}>
      {/* CTA strip */}
      <div style={{ borderBottom: "2px solid rgba(255,255,255,0.12)", padding: "40px 24px", background: "var(--nb-violet)" }}>
        <div className="cv-footer-cta" style={{ maxWidth: 1264, margin: "0 auto" }}>
          <div>
            <p style={{ fontFamily: "var(--font-bricolage, sans-serif)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              Ready to build voice AI that feels human?
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", marginTop: 6, fontWeight: 500 }}>
              Sub-100ms latency · 20+ AI providers · Production-grade WebRTC · Enterprise-ready
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px",
              background: "#fff", color: "var(--nb-violet)", border: "2px solid rgba(255,255,255,0.4)",
              boxShadow: "4px 4px 0px rgba(0,0,0,0.3)", fontWeight: 800, fontSize: 15,
              fontFamily: "var(--font-bricolage, sans-serif)", textDecoration: "none",
              letterSpacing: "-0.02em", borderRadius: "var(--radius)", whiteSpace: "nowrap",
              transition: "transform 0.12s, box-shadow 0.12s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px rgba(0,0,0,0.4)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px rgba(0,0,0,0.3)"; }}
          >
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1264, margin: "0 auto", padding: "56px 24px 32px" }}>
        <div className="cv-footer-main" style={{ display: "grid", marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, background: "var(--nb-violet)", border: "2px solid var(--nb-violet)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <rect x="0"  y="5" width="2.5" height="4"  rx="1" fill="#fff" />
                  <rect x="4"  y="2" width="2.5" height="10" rx="1" fill="#fff" />
                  <rect x="8"  y="0" width="2.5" height="14" rx="1" fill="#fff" />
                  <rect x="12" y="2" width="2.5" height="10" rx="1" fill="#fff" />
                  <rect x="16" y="5" width="2.5" height="4"  rx="1" fill="#fff" />
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 20, fontWeight: 800, color: "#FAF8F3", letterSpacing: "-0.04em" }}>Converse</span>
            </Link>
            <p style={{ fontSize: 14, color: "rgba(250,248,243,0.6)", lineHeight: 1.75, marginBottom: 24, maxWidth: 240 }}>
              Enterprise-grade real-time voice and multimodal AI agent infrastructure. One framework, any provider, production-ready.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
              {STATS.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", background: "rgba(255,255,255,0.04)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 15, fontWeight: 700, color: "#a78bfa" }}>{s.value}</span>
                  <span style={{ fontSize: 12, color: "rgba(250,248,243,0.5)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="cv-footer-links" style={{ display: "grid" }}>
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(250,248,243,0.4)", marginBottom: 16, fontFamily: "var(--font-bricolage, sans-serif)", borderBottom: "1px solid rgba(255,255,255,0.10)", paddingBottom: 10 }}>{col.title}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href}
                        style={{ fontSize: 13.5, color: "rgba(250,248,243,0.65)", textDecoration: "none", fontWeight: 500, fontFamily: "var(--font-bricolage, sans-serif)", transition: "color 0.15s", display: "block", letterSpacing: "-0.01em" }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#a78bfa"}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.65)"}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12.5, color: "rgba(250,248,243,0.4)", fontWeight: 500 }}>
            © {new Date().getFullYear()} Converse · Built by <a href="https://aiplatform.io" style={{ color: "var(--nb-yellow)", textDecoration: "none" }}>AI Platform Agency</a>. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[{ label: "Privacy", href: "/enterprise/security" }, { label: "Terms", href: "/enterprise" }, { label: "Security", href: "/enterprise/security" }].map((link) => (
              <Link key={link.href + link.label} href={link.href}
                style={{ fontSize: 12.5, color: "rgba(250,248,243,0.4)", textDecoration: "none", fontWeight: 500, fontFamily: "var(--font-bricolage, sans-serif)", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#a78bfa"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.4)"}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
