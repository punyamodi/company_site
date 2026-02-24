"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Wrench, Workflow, Database, Brain, Bot, Zap,
  Building2, HeartPulse, Landmark, Factory, Server, Globe,
  ChevronDown, Menu, X, ArrowRight, Users, Clock, Code2, Network, Shield,
} from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const NAV_ITEMS = [
  {
    label: "Services",
    items: [
      {
        col: "WHAT WE BUILD",
        links: [
          { label: "Custom AI Development", href: `${BASE}/services/ai-integration`, icon: Code2 },
          { label: "Workflow Automation", href: `${BASE}/services/workflow-automation`, icon: Workflow },
          { label: "Data & AI Platforms", href: `${BASE}/services/data-ai-platform`, icon: Database },
          { label: "AI Consulting", href: `${BASE}/services/ai-consulting`, icon: Brain },
          { label: "Custom Agent Builds", href: `${BASE}/services/custom-agents`, icon: Bot },
          { label: "Model Fine-tuning", href: `${BASE}/services/ai-consulting`, icon: Zap },
        ],
      },
      {
        col: "BY SCALE",
        links: [
          { label: "Startup", href: `${BASE}/services`, icon: Zap },
          { label: "Growth", href: `${BASE}/services`, icon: Network },
          { label: "Enterprise", href: `${BASE}/services`, icon: Building2 },
        ],
      },
      {
        col: "QUICK LINKS",
        links: [
          { label: "View All Services", href: `${BASE}/services`, icon: Wrench },
          { label: "Start a Project", href: `${BASE}/contact`, icon: ArrowRight },
        ],
      },
    ],
  },
  {
    label: "How We Work",
    simple: [
      { label: "Our Process", href: `${BASE}/process` },
      { label: "Engagement Models", href: `${BASE}/process` },
      { label: "Timeline & Pricing", href: `${BASE}/process` },
    ],
  },
  {
    label: "Industries",
    simple: [
      { label: "Financial Services", href: `${BASE}/industries` },
      { label: "Healthcare", href: `${BASE}/industries` },
      { label: "Government", href: `${BASE}/industries` },
      { label: "Manufacturing", href: `${BASE}/industries` },
      { label: "Technology", href: `${BASE}/industries` },
      { label: "Retail", href: `${BASE}/industries` },
    ],
  },
];

const INDUSTRIES_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  "Financial Services": Building2,
  "Healthcare": HeartPulse,
  "Government": Landmark,
  "Manufacturing": Factory,
  "Technology": Server,
  "Retail": Globe,
};

export function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: "var(--nb-bg)", borderBottom: "2px solid var(--nb-border)",
          height: 64, display: "flex", alignItems: "center",
          boxShadow: scrolled ? "0 4px 0px var(--nb-border)" : "none",
          transition: "box-shadow 0.2s",
        }}
      >
        <div style={{
          maxWidth: 1264, margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", gap: 0, width: "100%",
        }}>
          {/* Logo */}
          <Link href={`${BASE}/`} style={{
            display: "flex", alignItems: "center", gap: 10,
            textDecoration: "none", marginRight: 40, flexShrink: 0,
          }}>
            <div style={{
              width: 34, height: 34, background: "var(--nb-rose)",
              border: "2px solid var(--nb-border)", boxShadow: "3px 3px 0 var(--nb-border)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 16 L8 4 L12 4 L16 10 L12 10 L14 16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="8" cy="12" r="2" fill="#fff"/>
              </svg>
            </div>
            <span style={{
              fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 19, fontWeight: 800,
              color: "var(--nb-ink)", letterSpacing: "-0.05em",
            }}>Forge</span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} style={{ position: "relative" }}>
                <button
                  onMouseEnter={() => setOpen(item.label)}
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  style={{
                    display: "flex", alignItems: "center", gap: 4, padding: "8px 14px",
                    background: open === item.label ? "var(--nb-rose-subtle)" : "transparent",
                    border: open === item.label ? "2px solid var(--nb-border)" : "2px solid transparent",
                    borderRadius: "var(--radius)", cursor: "pointer",
                    fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 14, fontWeight: 600,
                    color: "var(--nb-ink)", transition: "background 0.15s, border 0.15s",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.label}
                  <ChevronDown size={13} style={{
                    transform: open === item.label ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s", color: "var(--nb-ink-muted)",
                  }} />
                </button>

                {open === item.label && (
                  <div
                    onMouseLeave={() => setOpen(null)}
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", left: 0,
                      background: "var(--nb-bg)", border: "2px solid var(--nb-border)",
                      boxShadow: "var(--shadow-brutal-lg)", borderRadius: "var(--radius)",
                      padding: 24, minWidth: item.items ? 680 : 200, zIndex: 100,
                      display: "grid",
                      gridTemplateColumns: item.items ? `repeat(${item.items.length}, 1fr)` : "1fr",
                      gap: 24,
                    }}
                  >
                    {item.items?.map((col) => (
                      <div key={col.col}>
                        <p style={{
                          fontSize: 10, fontWeight: 800, letterSpacing: "0.15em",
                          textTransform: "uppercase", color: "var(--nb-ink-dim)",
                          marginBottom: 12, fontFamily: "var(--font-bricolage, sans-serif)",
                          borderBottom: "1px solid var(--nb-border-faint)", paddingBottom: 8,
                        }}>{col.col}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          {col.links.map((link) => {
                            const Icon = link.icon;
                            return (
                              <Link
                                key={link.href + link.label} href={link.href}
                                onClick={() => setOpen(null)}
                                style={{
                                  display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
                                  borderRadius: "var(--radius)", color: "var(--nb-ink)",
                                  fontSize: 13.5, fontWeight: 500,
                                  fontFamily: "var(--font-bricolage, sans-serif)",
                                  transition: "background 0.12s", textDecoration: "none",
                                }}
                                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--nb-rose-subtle)"}
                                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                              >
                                <div style={{
                                  width: 26, height: 26, background: "var(--nb-rose)",
                                  border: "1.5px solid var(--nb-border)",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  flexShrink: 0, borderRadius: "2px",
                                }}>
                                  <Icon size={12} color="#fff" />
                                </div>
                                {link.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    {item.simple && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {item.simple.map((link) => (
                          <Link
                            key={link.href + link.label} href={link.href}
                            onClick={() => setOpen(null)}
                            style={{
                              display: "block", padding: "10px 12px",
                              borderRadius: "var(--radius)", textDecoration: "none",
                              color: "var(--nb-ink)", fontSize: 14, fontWeight: 600,
                              fontFamily: "var(--font-bricolage, sans-serif)",
                              transition: "background 0.12s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--nb-rose-subtle)"}
                            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <Link href={`${BASE}/case-studies`} style={{
              display: "flex", alignItems: "center", padding: "8px 16px",
              textDecoration: "none", fontFamily: "var(--font-bricolage, sans-serif)",
              fontSize: 13, fontWeight: 600, color: "var(--nb-ink-muted)", letterSpacing: "-0.01em",
              transition: "color 0.15s",
            }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink-muted)"}
            >
              Case Studies
            </Link>
            <Link
              href={`${BASE}/contact`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px",
                borderRadius: "var(--radius)", fontFamily: "var(--font-bricolage, sans-serif)",
                fontSize: 13, fontWeight: 800, color: "#fff",
                background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                boxShadow: "var(--shadow-brutal-sm)", textDecoration: "none",
                transition: "transform 0.12s, box-shadow 0.12s", letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-brutal)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-brutal-sm)";
              }}
            >
              Start a Project <ArrowRight size={12} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "none", background: "none", border: "none",
                cursor: "pointer", color: "var(--nb-ink)", padding: 4,
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999, background: "var(--nb-bg)",
          paddingTop: 64, overflowY: "auto",
        }}>
          <div style={{ padding: "24px 24px", display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              ...NAV_ITEMS.flatMap((item) => [
                ...(item.items?.flatMap((col) => col.links) ?? []),
                ...(item.simple ?? []),
              ]),
              { label: "Case Studies", href: `${BASE}/case-studies` },
            ].map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "14px 0",
                  borderBottom: "1px solid var(--nb-border-faint)",
                  textDecoration: "none",
                  fontFamily: "var(--font-bricolage, sans-serif)",
                  fontSize: 16, fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.02em",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`${BASE}/contact`}
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: 24, textDecoration: "none" }}
            >
              Start a Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}

      <div style={{ height: 64 }} />

      <style>{`
        @media (max-width: 900px) {
          nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

// silence unused import warnings for INDUSTRIES_ICONS
void INDUSTRIES_ICONS;
void Users;
void Clock;
void Shield;
