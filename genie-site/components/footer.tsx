"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Custom AI Agents", href: "/platform/ai-agents" },
      { label: "RAG & Enterprise Search", href: "/platform/rag-search" },
      { label: "Deep Research", href: "/platform/deep-research" },
      { label: "Knowledge Graph", href: "/platform/knowledge-graph" },
      { label: "40+ Connectors", href: "/platform/connectors" },
      { label: "MCP & Actions", href: "/platform/mcp-actions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Engineering Teams", href: "/solutions/engineering" },
      { label: "Sales & Revenue", href: "/solutions/sales-revenue" },
      { label: "Legal & Compliance", href: "/solutions/legal-compliance" },
      { label: "HR & People Ops", href: "/solutions/hr-operations" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Government", href: "/industries/government" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { label: "Enterprise Overview", href: "/enterprise" },
      { label: "Security & Compliance", href: "/enterprise/security" },
      { label: "Deployment Options", href: "/enterprise/deployment" },
      { label: "Integrations", href: "/enterprise/integrations" },
      { label: "All Connectors", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Genie", href: "/about" },
      { label: "Documentation", href: "/docs" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "AI Platform", href: process.env.NEXT_PUBLIC_PLATFORM_URL || "/", external: true },
    ],
  },
];

const STATS = [
  { value: "40+", label: "connectors" },
  { value: "10M+", label: "docs indexed" },
  { value: "Air-gap", label: "ready" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)", color: "var(--nb-bg)", fontFamily: "var(--font-bricolage, sans-serif)" }}>
      {/* CTA strip */}
      <div style={{ borderBottom: "2px solid rgba(255,255,255,0.12)", padding: "40px 24px", background: "var(--nb-amber)" }}>
        <div className="ox-footer-cta">
          <div>
            <p style={{ fontFamily: "var(--font-bricolage, sans-serif)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: "var(--nb-ink)", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              Your enterprise knowledge, finally searchable.
            </p>
            <p style={{ fontSize: 15, color: "var(--nb-ink)", marginTop: 6, fontWeight: 500 }}>
              40+ connectors · Custom Agents · Deep Research · Air-gap ready
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px",
              background: "var(--nb-invert)", color: "var(--nb-bg)",
              border: "2px solid var(--nb-invert)", boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
              fontWeight: 800, fontSize: 15, fontFamily: "var(--font-bricolage, sans-serif)",
              textDecoration: "none", letterSpacing: "-0.02em",
              borderRadius: "var(--radius)", whiteSpace: "nowrap",
              transition: "transform 0.12s, box-shadow 0.12s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px rgba(0,0,0,0.3)";
            }}
          >
            Talk to Sales <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1264, margin: "0 auto", padding: "56px 24px 32px" }}>
        <div className="ox-footer-main">
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, background: "var(--nb-amber)", border: "2px solid var(--nb-amber)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <polygon points="10,2 18,10 10,18 2,10" fill="none" stroke="#0C0C0C" strokeWidth="2.2"/>
                  <polygon points="10,6 14,10 10,14 6,10" fill="#0C0C0C"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 20, fontWeight: 800, color: "#FAF9F6", letterSpacing: "-0.05em" }}>Genie</span>
            </Link>
            <p style={{ fontSize: 14, color: "rgba(250,249,246,0.6)", lineHeight: 1.75, marginBottom: 24, maxWidth: 240 }}>
              The enterprise AI platform that unifies your knowledge. Agents, RAG, Deep Research — on your infrastructure.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
              {STATS.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", background: "rgba(255,255,255,0.04)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: 15, fontWeight: 700, color: "var(--nb-amber)" }}>{s.value}</span>
                  <span style={{ fontSize: 12, color: "rgba(250,249,246,0.5)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="ox-footer-links">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(250,249,246,0.4)", marginBottom: 16, fontFamily: "var(--font-bricolage, sans-serif)", borderBottom: "1px solid rgba(255,255,255,0.10)", paddingBottom: 10 }}>{col.title}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      {'external' in link && link.external ? (
                        <a href={link.href} style={{ fontSize: 13.5, color: "rgba(250,249,246,0.65)", textDecoration: "none", fontWeight: 500, fontFamily: "var(--font-bricolage, sans-serif)", transition: "color 0.15s", display: "block", letterSpacing: "-0.01em" }}
                          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-amber)"}
                          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,249,246,0.65)"}
                        >{link.label}</a>
                      ) : (
                        <Link href={link.href} style={{ fontSize: 13.5, color: "rgba(250,249,246,0.65)", textDecoration: "none", fontWeight: 500, fontFamily: "var(--font-bricolage, sans-serif)", transition: "color 0.15s", display: "block", letterSpacing: "-0.01em" }}
                          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-amber)"}
                          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,249,246,0.65)"}
                        >{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12.5, color: "rgba(250,249,246,0.4)", fontWeight: 500 }}>
            © {new Date().getFullYear()} Genie AI. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "Privacy", href: "/legal/privacy" },
              { label: "Terms", href: "/legal/terms" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                style={{ fontSize: 12.5, color: "rgba(250,249,246,0.4)", textDecoration: "none", fontWeight: 500, fontFamily: "var(--font-bricolage, sans-serif)", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-amber)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,249,246,0.4)"}
              >{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
