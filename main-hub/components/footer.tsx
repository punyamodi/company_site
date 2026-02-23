"use client";

import { ArrowRight, Twitter, Linkedin } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const COLS = [
  {
    title: "Products",
    links: [
      { label: "InferGate — AI Gateway",      href: `${BASE}/infergate/` },
      { label: "Converse — Voice AI",          href: `${BASE}/converse/` },
      { label: "HaloDesk — Support AI",        href: `${BASE}/halodesk/` },
      { label: "Onyx — Knowledge AI",          href: `${BASE}/onyx/` },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "AI Gateway & Routing",         href: `${BASE}/infergate/features` },
      { label: "Voice AI Pipelines",           href: `${BASE}/converse/platform` },
      { label: "Support Automation",           href: `${BASE}/halodesk/features` },
      { label: "Enterprise Search & RAG",      href: `${BASE}/onyx/platform` },
      { label: "MCP Integration",              href: `${BASE}/infergate/features` },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { label: "Enterprise Overview",          href: `${BASE}/enterprise/` },
      { label: "Security & Trust",             href: `${BASE}/enterprise/` },
      { label: "Deployment Options",           href: `${BASE}/enterprise/` },
      { label: "SLA Management",               href: `${BASE}/enterprise/` },
      { label: "Contact Sales",                href: `${BASE}/contact/` },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About AI Platform",            href: `${BASE}/enterprise/` },
      { label: "Enterprise Pricing",           href: `${BASE}/contact/` },
      { label: "Privacy Policy",               href: `${BASE}/enterprise/` },
      { label: "Terms of Service",             href: `${BASE}/enterprise/` },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)", color: "var(--nb-bg)", fontFamily: "var(--font-bricolage,sans-serif)" }}>
      {/* CTA strip */}
      <div style={{ borderBottom: "2px solid rgba(255,255,255,0.08)", padding: "56px 24px", background: "var(--nb-yellow)" }}>
        <div style={{ maxWidth: 1264, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: "clamp(22px,2.8vw,36px)", fontWeight: 800, color: "var(--nb-ink)", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              The complete AI infrastructure suite for the enterprise.
            </p>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", marginTop: 8, fontWeight: 500 }}>
              AI Gateway · Voice AI · Support Intelligence · Enterprise Knowledge — engineered for regulated enterprise.
            </p>
          </div>
          <a
            href={`${BASE}/contact/`}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "var(--nb-invert)", color: "var(--nb-bg)", border: "2px solid var(--nb-invert)", boxShadow: "4px 4px 0px rgba(0,0,0,0.3)", fontWeight: 800, fontSize: 15, fontFamily: "var(--font-bricolage,sans-serif)", textDecoration: "none", letterSpacing: "-0.02em", borderRadius: "var(--radius)", whiteSpace: "nowrap", transition: "transform .12s,box-shadow .12s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px rgba(0,0,0,0.4)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px rgba(0,0,0,0.3)"; }}
          >
            Contact Sales <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1264, margin: "0 auto", padding: "56px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 64, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <a href={`${BASE}/`} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, background: "var(--nb-invert)", border: "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="6" height="6" fill="#F5C518"/>
                  <rect x="9" y="1" width="6" height="6" fill="#7C3AED"/>
                  <rect x="1" y="9" width="6" height="6" fill="#0D9488"/>
                  <rect x="9" y="9" width="6" height="6" fill="#F59E0B"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 20, fontWeight: 800, color: "#FAF8F3", letterSpacing: "-0.04em" }}>AI Platform</span>
            </a>
            <p style={{ fontSize: 14, color: "rgba(250,248,243,0.6)", lineHeight: 1.75, marginBottom: 24, maxWidth: 240 }}>
              Intelligent infrastructure for the AI era. Four enterprise-grade products. One unified platform.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 28 }}>
              {[
                { value: "4", label: "enterprise products" },
                { value: "99.99%", label: "SLA uptime" },
                { value: "SOC 2", label: "Type II certified" },
                { value: "VPC", label: "deployment ready" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 12px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "2px", background: "rgba(255,255,255,0.04)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 14, fontWeight: 700, color: "var(--nb-yellow)" }}>{s.value}</span>
                  <span style={{ fontSize: 12, color: "rgba(250,248,243,0.5)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { Icon: Twitter,  href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, border: "1.5px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(250,248,243,0.6)", textDecoration: "none", transition: "border-color .15s,color .15s", borderRadius: "2px" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--nb-yellow)"; (e.currentTarget as HTMLElement).style.color = "var(--nb-yellow)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.6)"; }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
            {COLS.map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(250,248,243,0.4)", marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.10)", paddingBottom: 10 }}>
                  {col.title}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <a href={link.href}
                        style={{ fontSize: 13.5, color: "rgba(250,248,243,0.65)", textDecoration: "none", fontWeight: 500, transition: "color .15s", display: "block", letterSpacing: "-0.01em" }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-yellow)"}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.65)"}
                      >
                        {link.label}
                      </a>
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
            © {new Date().getFullYear()} AI Platform. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "Privacy",   href: `${BASE}/enterprise/` },
              { label: "Terms",     href: `${BASE}/enterprise/` },
              { label: "Security",  href: `${BASE}/enterprise/` },
              { label: "Contact",   href: `${BASE}/contact/` },
            ].map((link) => (
              <a key={link.href + link.label} href={link.href}
                style={{ fontSize: 12.5, color: "rgba(250,248,243,0.4)", textDecoration: "none", fontWeight: 500, transition: "color .15s" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-yellow)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.4)"}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
