"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const COLS = [
  {
    title: "Services",
    links: [
      { label: "Frontend Development",    href: `${BASE}/services/` },
      { label: "Backend Development",     href: `${BASE}/services/` },
      { label: "Mobile App Development",  href: `${BASE}/services/` },
      { label: "AI Agents",               href: `${BASE}/services/` },
      { label: "Customer Chatbots",       href: `${BASE}/services/` },
      { label: "E-commerce Solutions",    href: `${BASE}/services/` },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "All Projects",             href: `${BASE}/work/` },
      { label: "InferGate — AI Gateway",   href: `${BASE}/infergate/` },
      { label: "Converse — Voice AI",      href: `${BASE}/converse/` },
      { label: "HaloDesk — Support AI",    href: `${BASE}/halodesk/` },
      { label: "Genie — Knowledge AI",     href: `${BASE}/genie/` },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",         href: `${BASE}/about/` },
      { label: "Enterprise",       href: `${BASE}/enterprise/` },
      { label: "Contact Us",       href: `${BASE}/contact/` },
      { label: "Privacy Policy",   href: `${BASE}/contact/` },
      { label: "Terms of Service", href: `${BASE}/contact/` },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { label: "Start a Project",    href: `${BASE}/contact/` },
      { label: "General Enquiries",  href: `${BASE}/contact/` },
      { label: "hello@aiplatform.io", href: "mailto:hello@aiplatform.io" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)", color: "var(--nb-bg)", fontFamily: "var(--font-bricolage,sans-serif)" }}>
      {/* CTA strip */}
      <div style={{ background: "var(--nb-yellow)", borderBottom: "2px solid var(--nb-border)", padding: "56px 24px" }}>
        <div className="hub-footer-cta" style={{ padding: "0 24px" }}>
          <div>
            <p style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: "clamp(22px,2.8vw,36px)", fontWeight: 800, color: "var(--nb-ink)", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              Ready to build something great?
            </p>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", marginTop: 8, fontWeight: 500 }}>
              Frontend · Backend · Mobile · AI Agents · Chatbots · E-commerce — all in-house.
            </p>
          </div>
          <a
            href={`${BASE}/contact/`}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "var(--nb-invert)", color: "var(--nb-bg)", border: "2px solid var(--nb-invert)", boxShadow: "4px 4px 0px rgba(0,0,0,0.3)", fontWeight: 800, fontSize: 15, fontFamily: "var(--font-bricolage,sans-serif)", textDecoration: "none", letterSpacing: "-0.02em", borderRadius: "var(--radius)", whiteSpace: "nowrap", transition: "transform .12s,box-shadow .12s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px rgba(0,0,0,0.4)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px rgba(0,0,0,0.3)"; }}
          >
            Start a Project <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1264, margin: "0 auto", padding: "56px 24px 32px" }}>
        <div className="hub-footer-main">
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
              A full-service digital agency. We design and build websites, apps, AI agents, and everything in between.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(250,248,243,0.55)", fontWeight: 500 }}>
                <Mail size={13} color="var(--nb-yellow)" />
                hello@aiplatform.io
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(250,248,243,0.55)", fontWeight: 500 }}>
                <MapPin size={13} color="var(--nb-yellow)" />
                Available Worldwide · Remote-first
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="hub-footer-links">
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
            © {new Date().getFullYear()} AI Platform Agency. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "Privacy",  href: `${BASE}/contact/` },
              { label: "Terms",    href: `${BASE}/contact/` },
              { label: "Contact",  href: `${BASE}/contact/` },
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
