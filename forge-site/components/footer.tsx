"use client";

import Link from "next/link";
import { ArrowRight, Wrench, Workflow, Database, Brain, Bot, Building2, HeartPulse, Landmark, Factory, Server, Globe, Mail } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--nb-invert)", color: "#FAF8F3", borderTop: "2px solid var(--nb-border)" }}>
      {/* CTA Strip */}
      <div style={{ borderBottom: "2px solid rgba(255,255,255,0.1)", padding: "40px 0" }}>
        <div className="container" style={{ maxWidth: 1264, margin: "0 auto", padding: "0 24px" }}>
          <div className="fg-footer-cta">
            <div>
              <h2 style={{
                fontFamily: "var(--font-bricolage, sans-serif)", fontSize: "clamp(22px,3vw,32px)",
                fontWeight: 800, letterSpacing: "-0.035em", color: "#FAF8F3", marginBottom: 8,
              }}>
                Ready to build something <span style={{ color: "var(--nb-rose)", fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic" }}>custom</span>?
              </h2>
              <p style={{ color: "rgba(250,248,243,0.65)", fontSize: 15, lineHeight: 1.6 }}>
                Tell us what you need. We&apos;ll engineer exactly that.
              </p>
            </div>
            <Link
              href={`${BASE}/contact`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px",
                background: "var(--nb-rose)", color: "#fff", border: "2px solid var(--nb-rose)",
                boxShadow: "4px 4px 0 rgba(255,255,255,0.2)", fontFamily: "var(--font-bricolage, sans-serif)",
                fontSize: 15, fontWeight: 800, textDecoration: "none", borderRadius: "var(--radius)",
                whiteSpace: "nowrap", transition: "transform 0.12s, box-shadow 0.12s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 rgba(255,255,255,0.2)";
              }}
            >
              Start a Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: "56px 0 0" }}>
        <div style={{ maxWidth: 1264, margin: "0 auto", padding: "0 24px" }}>
          <div className="fg-footer-main">
            {/* Brand column */}
            <div>
              <Link href={`${BASE}/`} style={{
                display: "flex", alignItems: "center", gap: 10,
                textDecoration: "none", marginBottom: 20,
              }}>
                <div style={{
                  width: 36, height: 36, background: "var(--nb-rose)",
                  border: "2px solid rgba(255,255,255,0.3)", boxShadow: "3px 3px 0 rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M4 16 L8 4 L12 4 L16 10 L12 10 L14 16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="8" cy="12" r="2" fill="#fff"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 20, fontWeight: 800,
                  color: "#FAF8F3", letterSpacing: "-0.05em",
                }}>Forge</span>
              </Link>
              <p style={{
                color: "rgba(250,248,243,0.55)", fontSize: 13.5, lineHeight: 1.7,
                marginBottom: 24, maxWidth: 240,
              }}>
                Bespoke AI engineering for the modern enterprise. No templates. No shortcuts. Just solutions built exactly for you.
              </p>

              {/* Stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { val: "500+", label: "Custom solutions" },
                  { val: "60+", label: "Enterprise clients" },
                  { val: "100%", label: "Bespoke delivery" },
                ].map((s) => (
                  <div key={s.val} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{
                      fontFamily: "var(--font-jetbrains, monospace)", fontSize: 16,
                      fontWeight: 700, color: "var(--nb-rose)",
                    }}>{s.val}</span>
                    <span style={{ fontSize: 12, color: "rgba(250,248,243,0.5)" }}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Email */}
              <a href="mailto:contact@forge.ai" style={{
                display: "flex", alignItems: "center", gap: 6, marginTop: 24,
                color: "rgba(250,248,243,0.5)", fontSize: 13, textDecoration: "none",
                transition: "color 0.15s",
              }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#FAF8F3"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.5)"}
              >
                <Mail size={14} /> contact@forge.ai
              </a>
            </div>

            {/* Links */}
            <div className="fg-footer-links">
              {/* Services */}
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "rgba(250,248,243,0.35)",
                  marginBottom: 16,
                }}>Services</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "AI Integration", href: `${BASE}/services/ai-integration`, Icon: Wrench },
                    { label: "Workflow Automation", href: `${BASE}/services/workflow-automation`, Icon: Workflow },
                    { label: "Data & AI Platforms", href: `${BASE}/services/data-ai-platform`, Icon: Database },
                    { label: "AI Consulting", href: `${BASE}/services/ai-consulting`, Icon: Brain },
                    { label: "Custom Agents", href: `${BASE}/services/custom-agents`, Icon: Bot },
                  ].map(({ label, href, Icon }) => (
                    <Link key={href} href={href} style={{
                      display: "flex", alignItems: "center", gap: 7,
                      color: "rgba(250,248,243,0.55)", fontSize: 13.5,
                      textDecoration: "none", transition: "color 0.15s",
                    }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#FAF8F3"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.55)"}
                    >
                      <Icon size={12} style={{ flexShrink: 0, opacity: 0.5 }} /> {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "rgba(250,248,243,0.35)",
                  marginBottom: 16,
                }}>Process</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Our Process", href: `${BASE}/process` },
                    { label: "Engagement Models", href: `${BASE}/process` },
                    { label: "Timeline & Pricing", href: `${BASE}/process` },
                    { label: "Case Studies", href: `${BASE}/case-studies` },
                  ].map(({ label, href }) => (
                    <Link key={href + label} href={href} style={{
                      color: "rgba(250,248,243,0.55)", fontSize: 13.5,
                      textDecoration: "none", transition: "color 0.15s",
                    }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#FAF8F3"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.55)"}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "rgba(250,248,243,0.35)",
                  marginBottom: 16,
                }}>Industries</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Financial Services", Icon: Building2 },
                    { label: "Healthcare", Icon: HeartPulse },
                    { label: "Government", Icon: Landmark },
                    { label: "Manufacturing", Icon: Factory },
                    { label: "Technology", Icon: Server },
                    { label: "Retail", Icon: Globe },
                  ].map(({ label, Icon }) => (
                    <Link key={label} href={`${BASE}/industries`} style={{
                      display: "flex", alignItems: "center", gap: 7,
                      color: "rgba(250,248,243,0.55)", fontSize: 13.5,
                      textDecoration: "none", transition: "color 0.15s",
                    }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#FAF8F3"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.55)"}
                    >
                      <Icon size={12} style={{ flexShrink: 0, opacity: 0.5 }} /> {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "rgba(250,248,243,0.35)",
                  marginBottom: 16,
                }}>Company</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Start a Project", href: `${BASE}/contact` },
                    { label: "Case Studies", href: `${BASE}/case-studies` },
                    { label: "Industries Served", href: `${BASE}/industries` },
                    { label: "Contact Us", href: `${BASE}/contact` },
                  ].map(({ label, href }) => (
                    <Link key={href + label} href={href} style={{
                      color: "rgba(250,248,243,0.55)", fontSize: 13.5,
                      textDecoration: "none", transition: "color 0.15s",
                    }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#FAF8F3"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.55)"}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "20px 0",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 12,
          }}>
            <p style={{ color: "rgba(250,248,243,0.35)", fontSize: 12 }}>
              © {year} Forge AI · Built by <a href="https://aiplatform.io" style={{ color: "var(--nb-yellow)", textDecoration: "none" }}>AI Platform Agency</a>. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {[
                { label: "Privacy Policy", href: `${BASE}/contact` },
                { label: "Terms of Service", href: `${BASE}/contact` },
              ].map(({ label, href }) => (
                <Link key={label} href={href} style={{
                  color: "rgba(250,248,243,0.35)", fontSize: 12, textDecoration: "none",
                  transition: "color 0.15s",
                }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.65)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(250,248,243,0.35)"}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
