"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  X, Menu, ChevronDown, Mic, Layers, Globe, Activity, Code, Shield,
  BarChart3, GitBranch, Cpu, Zap, ArrowRight, Headphones, Building2,
  HeartPulse, TrendingUp, ShoppingBag, Phone, Radio, Server, Brain,
  MessageSquare, Tv2, Workflow,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Platform",
    items: [
      {
        col: "CORE ENGINE",
        links: [
          { label: "Platform Overview",     href: "/platform",                    icon: Globe },
          { label: "Pipeline Engine",        href: "/platform/pipeline-engine",    icon: GitBranch },
          { label: "Voice AI Core",          href: "/platform/voice-ai",           icon: Mic },
          { label: "Multimodal Processing",  href: "/platform/multimodal",         icon: Layers },
          { label: "Transport Layer",        href: "/platform/transports",         icon: Radio },
        ],
      },
      {
        col: "ENTERPRISE",
        links: [
          { label: "AI Service Integrations", href: "/platform/integrations",   icon: Zap },
          { label: "Observability & Metrics", href: "/platform/observability",  icon: BarChart3 },
          { label: "Security & Compliance",   href: "/platform/security",       icon: Shield },
        ],
      },
      {
        col: "SOLUTIONS",
        links: [
          { label: "Customer Service AI",     href: "/solutions/customer-service",       icon: Headphones },
          { label: "Voice Assistants",        href: "/solutions/voice-assistants",       icon: Mic },
          { label: "AI Companions",           href: "/solutions/ai-companions",          icon: Brain },
          { label: "Business Workflows",      href: "/solutions/business-workflows",     icon: Workflow },
          { label: "Interactive Storytelling",href: "/solutions/interactive-storytelling",icon: Tv2 },
        ],
      },
    ],
  },
  {
    label: "Industries",
    items: [
      {
        col: "BY INDUSTRY",
        links: [
          { label: "Healthcare",          href: "/industries/healthcare",          icon: HeartPulse },
          { label: "Financial Services",  href: "/industries/financial-services",  icon: TrendingUp },
          { label: "Retail & Commerce",   href: "/industries/retail",              icon: ShoppingBag },
          { label: "Telecommunications",  href: "/industries/telecom",             icon: Phone },
        ],
      },
      {
        col: "ALL INDUSTRIES",
        links: [
          { label: "Industries Overview", href: "/industries", icon: Building2 },
        ],
      },
    ],
  },
  {
    label: "Integrations",
    items: [
      {
        col: "BY CATEGORY",
        links: [
          { label: "Integrations Hub",   href: "/integrations",              icon: Layers },
          { label: "Speech (STT / TTS)", href: "/integrations/speech",       icon: Mic },
          { label: "LLM Providers",      href: "/integrations/llm",          icon: Brain },
          { label: "Transport & WebRTC", href: "/integrations/transport",    icon: Radio },
          { label: "Telephony",          href: "/integrations/telephony",    icon: Phone },
        ],
      },
      {
        col: "DEVELOPER",
        links: [
          { label: "Python SDK",        href: "/platform/integrations", icon: Code },
          { label: "Client SDKs",       href: "/platform/integrations", icon: Globe },
          { label: "API Reference",     href: "/platform/integrations", icon: Server },
          { label: "MCP Integration",   href: "/platform/pipeline-engine", icon: Zap },
        ],
      },
    ],
  },
  {
    label: "Enterprise",
    simple: [
      { label: "Enterprise Overview",    href: "/enterprise" },
      { label: "Enterprise Pricing",     href: "/enterprise/pricing" },
      { label: "Security & Compliance",  href: "/enterprise/security" },
    ],
  },
  {
    label: "Company",
    simple: [
      { label: "About",           href: "/about" },
      { label: "Changelog",       href: "/changelog" },
      { label: "Contact Sales",   href: "/contact" },
    ],
  },
];

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
          background: "var(--nb-bg)",
          borderBottom: "2px solid var(--nb-border)",
          height: 64, display: "flex", alignItems: "center",
          boxShadow: scrolled ? "0 4px 0px var(--nb-border)" : "none",
          transition: "box-shadow 0.2s",
        }}
      >
        <div style={{ maxWidth: 1264, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 0, width: "100%" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 40, flexShrink: 0 }}>
            <div style={{
              width: 32, height: 32, background: "var(--nb-violet)",
              border: "2px solid var(--nb-border)",
              boxShadow: "3px 3px 0px var(--nb-border)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {/* Waveform icon */}
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <rect x="0"  y="5" width="2.5" height="4"  rx="1" fill="#fff" />
                <rect x="4"  y="2" width="2.5" height="10" rx="1" fill="#fff" />
                <rect x="8"  y="0" width="2.5" height="14" rx="1" fill="#fff" />
                <rect x="12" y="2" width="2.5" height="10" rx="1" fill="#fff" />
                <rect x="16" y="5" width="2.5" height="4"  rx="1" fill="#fff" />
              </svg>
            </div>
            <span style={{
              fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 18,
              fontWeight: 800, color: "var(--nb-ink)", letterSpacing: "-0.04em",
            }}>Converse</span>
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
                    background: open === item.label ? "var(--nb-surface)" : "transparent",
                    border: open === item.label ? "2px solid var(--nb-border)" : "2px solid transparent",
                    borderRadius: "var(--radius)", cursor: "pointer",
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    fontSize: 14, fontWeight: 600, color: "var(--nb-ink)",
                    transition: "background 0.15s, border 0.15s", letterSpacing: "-0.01em",
                  }}
                >
                  {item.label}
                  <ChevronDown size={13} style={{ transform: open === item.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: "var(--nb-ink-muted)" }} />
                </button>

                {open === item.label && (
                  <div
                    onMouseLeave={() => setOpen(null)}
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", left: 0,
                      background: "var(--nb-bg)", border: "2px solid var(--nb-border)",
                      boxShadow: "var(--shadow-brutal-lg)", borderRadius: "var(--radius)",
                      padding: 24, minWidth: item.items ? 680 : 220, zIndex: 100,
                      display: "grid",
                      gridTemplateColumns: item.items ? `repeat(${item.items.length}, 1fr)` : "1fr",
                      gap: 24,
                    }}
                  >
                    {item.items?.map((col) => (
                      <div key={col.col}>
                        <p style={{
                          fontSize: 10, fontWeight: 800, letterSpacing: "0.15em",
                          textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 12,
                          fontFamily: "var(--font-bricolage, sans-serif)",
                          borderBottom: "1px solid var(--nb-border-faint)", paddingBottom: 8,
                        }}>{col.col}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          {col.links.map((link) => {
                            const Icon = link.icon;
                            return (
                              <Link
                                key={link.href + link.label} href={link.href} onClick={() => setOpen(null)}
                                style={{
                                  display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
                                  borderRadius: "var(--radius)", color: "var(--nb-ink)",
                                  fontSize: 13.5, fontWeight: 500,
                                  fontFamily: "var(--font-bricolage, sans-serif)",
                                  transition: "background 0.12s", textDecoration: "none",
                                }}
                                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--nb-surface)"}
                                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                              >
                                <div style={{
                                  width: 26, height: 26, background: "var(--nb-violet-subtle)",
                                  border: "1.5px solid var(--nb-border)",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  flexShrink: 0, borderRadius: "2px",
                                }}>
                                  <Icon size={12} color="var(--nb-violet)" />
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
                            key={link.href + link.label} href={link.href} onClick={() => setOpen(null)}
                            style={{
                              display: "block", padding: "10px 12px", borderRadius: "var(--radius)",
                              textDecoration: "none", color: "var(--nb-ink)",
                              fontSize: 14, fontWeight: 600,
                              fontFamily: "var(--font-bricolage, sans-serif)", transition: "background 0.12s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--nb-surface)"}
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
            <a
              href={process.env.NEXT_PUBLIC_PLATFORM_URL || "/"}
              style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 14px", textDecoration: "none", fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 13, fontWeight: 600, color: "var(--nb-ink-muted)", letterSpacing: "-0.01em", borderRight: "1px solid var(--nb-border-faint)", marginRight: 2, whiteSpace: "nowrap" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink-muted)"}
            >
              ← Platform Home
            </a>
            <Link href="/platform/integrations" style={{ display: "flex", alignItems: "center", padding: "8px 16px", textDecoration: "none", fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 13, fontWeight: 600, color: "var(--nb-ink-muted)", letterSpacing: "-0.01em" }}>
              Integrations
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "9px 18px", borderRadius: "var(--radius)",
                fontFamily: "var(--font-bricolage, sans-serif)",
                fontSize: 13, fontWeight: 800, color: "#fff",
                background: "var(--nb-violet)", border: "2px solid var(--nb-border)",
                boxShadow: "var(--shadow-brutal-sm)", textDecoration: "none",
                transition: "transform 0.12s, box-shadow 0.12s", letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-brutal)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-brutal-sm)"; }}
            >
              Contact Sales <ArrowRight size={12} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--nb-ink)", padding: 4 }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "var(--nb-bg)", paddingTop: 64, overflowY: "auto" }}>
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              ...NAV_ITEMS.flatMap((item) => [
                ...(item.items?.flatMap((col) => col.links) ?? []),
                ...(item.simple ?? []),
              ]),
            ].map((link) => (
              <Link
                key={link.href + link.label} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "14px 0", borderBottom: "1px solid var(--nb-border-faint)", textDecoration: "none", fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 16, fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.02em" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 24, textDecoration: "none" }}>
              Contact Sales <ArrowRight size={14} />
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
