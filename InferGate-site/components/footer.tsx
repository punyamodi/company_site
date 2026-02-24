"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "AI Gateway Overview",      href: "/features" },
      { label: "Intelligent Routing",      href: "/features/routing" },
      { label: "Semantic Caching",         href: "/features/caching" },
      { label: "Observability",            href: "/features/observability" },
      { label: "Rate Limiting & Budgets",  href: "/features/rate-limiting" },
      { label: "MCP Gateway",              href: "/features/mcp-gateway" },
      { label: "Plugin System",            href: "/features/plugins" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Platform Engineers",       href: "/solutions/platform-engineers" },
      { label: "CTO & IT Leaders",         href: "/solutions/cto-it-leaders" },
      { label: "Security & Compliance",    href: "/solutions/security-compliance" },
      { label: "Cost Control",             href: "/solutions/cost-control" },
      { label: "High-Throughput Apps",     href: "/solutions/high-throughput" },
      { label: "Agent Orchestration",      href: "/solutions/agent-orchestration" },
      { label: "Self-Hosted / VPC",        href: "/solutions/self-hosted" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "All Integrations",         href: "/integrations" },
      { label: "OpenAI",                   href: "/integrations/openai" },
      { label: "Anthropic",                href: "/integrations/anthropic" },
      { label: "AWS Bedrock",              href: "/integrations/aws-bedrock" },
      { label: "Google Vertex AI",         href: "/integrations/google-vertex" },
      { label: "Groq",                     href: "/integrations/groq" },
      { label: "Ollama",                   href: "/integrations/ollama" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Enterprise",               href: "/enterprise" },
      { label: "Pricing",                  href: "/pricing" },
      { label: "About",                    href: "/about" },
      { label: "Trust & Security",         href: "/trust" },
      { label: "Contact Sales",            href: "/contact" },
      { label: "Privacy Policy",           href: "/legal/privacy" },
      { label: "Terms of Service",         href: "/legal/terms" },
    ],
  },
];

const STATS = [
  { value: "10,400+", label: "req/s" },
  { value: "25+",     label: "providers" },
  { value: "0.3ms",   label: "P50 overhead" },
  { value: "65%",     label: "cost reduction" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)", color: "var(--nb-bg)", fontFamily: "var(--font-bricolage,sans-serif)" }}>
      {/* CTA strip */}
      <div style={{ borderBottom: "2px solid rgba(255,255,255,0.12)", padding: "48px 24px", background: "var(--nb-yellow)" }}>
        <div className="ig-footer-cta">
          <div>
            <p style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: "clamp(22px,2.8vw,34px)", fontWeight: 800, color: "var(--nb-ink)", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              The fastest AI gateway your enterprise will ever run.
            </p>
            <p style={{ fontSize: 15, color: "var(--nb-ink)", marginTop: 6, fontWeight: 500 }}>
              10,400 req/s · 25+ providers · 0.3ms P50 · Built in Go · Runs in your VPC
            </p>
          </div>
          <Link
            href="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "var(--nb-invert)", color: "var(--nb-bg)", border: "2px solid var(--nb-invert)", boxShadow: "4px 4px 0px rgba(0,0,0,0.3)", fontWeight: 800, fontSize: 15, fontFamily: "var(--font-bricolage,sans-serif)", textDecoration: "none", letterSpacing: "-0.02em", borderRadius: "var(--radius)", whiteSpace: "nowrap", transition: "transform .12s,box-shadow .12s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px rgba(0,0,0,0.4)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px rgba(0,0,0,0.3)"; }}
          >
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1264, margin: "0 auto", padding: "56px 24px 32px" }}>
        <div className="ig-footer-main">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, background: "var(--nb-yellow)", border: "2px solid var(--nb-yellow)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9h5l2-6 2 12 2-6h3" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 20, fontWeight: 800, color: "#FAF8F3", letterSpacing: "-0.04em" }}>InferGate</span>
            </Link>
            <p style={{ fontSize: 14, color: "rgba(250,248,243,0.6)", lineHeight: 1.75, marginBottom: 24, maxWidth: 220 }}>
              Enterprise AI gateway. Unify every provider. Govern costs. Scale with confidence.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
              {STATS.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", background: "rgba(255,255,255,0.04)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 15, fontWeight: 700, color: "var(--nb-yellow)" }}>{s.value}</span>
                  <span style={{ fontSize: 12, color: "rgba(250,248,243,0.5)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="ig-footer-links">
            {COLS.map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(250,248,243,0.4)", marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.10)", paddingBottom: 10 }}>
                  {col.title}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href}
                        style={{ fontSize: 13.5, color: "rgba(250,248,243,0.65)", textDecoration: "none", fontWeight: 500, transition: "color .15s", display: "block", letterSpacing: "-0.01em" }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-yellow)"}
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
            © {new Date().getFullYear()} InferGate. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "Privacy", href: "/legal/privacy" },
              { label: "Terms",   href: "/legal/terms" },
              { label: "Trust",   href: "/trust" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                style={{ fontSize: 12.5, color: "rgba(250,248,243,0.4)", textDecoration: "none", fontWeight: 500, transition: "color .15s" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-yellow)"}
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
