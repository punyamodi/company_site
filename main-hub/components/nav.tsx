"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  X, Menu, ChevronDown, Zap, Shield, Globe, Activity,
  BarChart3, Layers, Database, Server, Brain, Mic, MessageSquare,
  Search, Network, Building2, ArrowRight, Cpu, HeartPulse, Landmark,
  Bot, Lock,
} from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PRODUCTS = [
  {
    name: "InferGate",
    color: "#F5C518",
    textColor: "#0A0A0A",
    href: `${BASE}/infergate/`,
    icon: Zap,
    tagline: "Enterprise AI Gateway",
    desc: "Route, cache, and govern every AI call across 25+ providers at 10,400 req/s.",
    features: ["Intelligent Routing", "Semantic Caching", "Observability & Tracing", "Rate Limiting & Budgets"],
  },
  {
    name: "Converse",
    color: "#7C3AED",
    textColor: "#fff",
    href: `${BASE}/converse/`,
    icon: Mic,
    tagline: "Voice AI Platform",
    desc: "Production voice AI pipelines with real-time STT, TTS, and multimodal processing.",
    features: ["Pipeline Engine", "Voice AI Core", "Transport Layer", "AI Service Integrations"],
  },
  {
    name: "HaloDesk",
    color: "#0D9488",
    textColor: "#fff",
    href: `${BASE}/halodesk/`,
    icon: MessageSquare,
    tagline: "Customer Support Intelligence",
    desc: "Omnichannel support powered by AI — inbox, automation, analytics, and Captain AI Agent.",
    features: ["Omnichannel Inbox", "Captain AI Agent", "Workflow Automation", "Advanced Analytics"],
  },
  {
    name: "Onyx",
    color: "#F59E0B",
    textColor: "#0A0A0A",
    href: `${BASE}/onyx/`,
    icon: Search,
    tagline: "Enterprise Knowledge AI",
    desc: "Custom AI agents, RAG search, and deep research across your entire knowledge base.",
    features: ["Custom AI Agents", "RAG & Enterprise Search", "Deep Research", "40+ Connectors"],
  },
];

const NAV = [
  {
    label: "Products",
    cols: [
      {
        heading: "AI Infrastructure",
        links: [
          { label: "InferGate — AI Gateway",     href: `${BASE}/infergate/`,          icon: Zap },
          { label: "Converse — Voice AI",         href: `${BASE}/converse/`,           icon: Mic },
          { label: "HaloDesk — Support AI",       href: `${BASE}/halodesk/`,           icon: MessageSquare },
          { label: "Onyx — Knowledge AI",         href: `${BASE}/onyx/`,               icon: Search },
        ],
      },
      {
        heading: "Platform Capabilities",
        links: [
          { label: "AI Gateway & Routing",        href: `${BASE}/infergate/features`,  icon: Network },
          { label: "Voice Pipelines",             href: `${BASE}/converse/platform`,   icon: Activity },
          { label: "Intelligent Automation",      href: `${BASE}/halodesk/features`,   icon: Brain },
          { label: "Enterprise Search & RAG",     href: `${BASE}/onyx/platform`,       icon: Database },
        ],
      },
      {
        heading: "Enterprise",
        links: [
          { label: "Security & Compliance",       href: `${BASE}/enterprise/`,         icon: Shield },
          { label: "Deployment Options",          href: `${BASE}/enterprise/`,         icon: Server },
          { label: "SLA & Support",               href: `${BASE}/enterprise/`,         icon: Layers },
          { label: "Contact Sales",               href: `${BASE}/contact/`,            icon: Building2 },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    cols: [
      {
        heading: "By Team",
        links: [
          { label: "Engineering & DevOps",        href: `${BASE}/enterprise/`,         icon: Cpu },
          { label: "CTO & IT Leadership",         href: `${BASE}/enterprise/`,         icon: Building2 },
          { label: "Customer Operations",         href: `${BASE}/halodesk/solutions`,  icon: MessageSquare },
          { label: "Security & Compliance",       href: `${BASE}/enterprise/`,         icon: Lock },
        ],
      },
      {
        heading: "By Industry",
        links: [
          { label: "Financial Services",          href: `${BASE}/enterprise/`,         icon: Landmark },
          { label: "Healthcare",                  href: `${BASE}/enterprise/`,         icon: HeartPulse },
          { label: "Technology",                  href: `${BASE}/enterprise/`,         icon: Zap },
          { label: "Government & Defense",        href: `${BASE}/enterprise/`,         icon: Globe },
        ],
      },
    ],
  },
  {
    label: "Enterprise",
    simple: [
      { label: "Enterprise Overview",             href: `${BASE}/enterprise/` },
      { label: "Security & Trust",                href: `${BASE}/enterprise/` },
      { label: "Contact Sales",                   href: `${BASE}/contact/` },
    ],
  },
];

export function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <>
      <header
        ref={ref}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: "var(--nb-bg)", borderBottom: "2px solid var(--nb-border)",
          height: 64, display: "flex", alignItems: "center",
          boxShadow: scrolled ? "0 4px 0px var(--nb-border)" : "none",
          transition: "box-shadow 0.2s",
        }}
      >
        <div style={{ maxWidth: 1264, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", width: "100%" }}>
          {/* Logo */}
          <Link href={`${BASE}/`} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 40, flexShrink: 0 }}>
            <div style={{
              width: 32, height: 32, background: "var(--nb-invert)",
              border: "2px solid var(--nb-border)", boxShadow: "3px 3px 0px var(--nb-border)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {/* Platform icon — 4 dots in quadrant */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="6" height="6" fill="#F5C518"/>
                <rect x="9" y="1" width="6" height="6" fill="#7C3AED"/>
                <rect x="1" y="9" width="6" height="6" fill="#0D9488"/>
                <rect x="9" y="9" width="6" height="6" fill="#F59E0B"/>
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 18, fontWeight: 800, color: "var(--nb-ink)", letterSpacing: "-0.04em" }}>
              AI Platform
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }} className="desktop-nav">
            {NAV.map((item) => (
              <div key={item.label} style={{ position: "relative" }}>
                <button
                  onMouseEnter={() => setOpen(item.label)}
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  style={{
                    display: "flex", alignItems: "center", gap: 4, padding: "8px 14px",
                    background: open === item.label ? "var(--nb-surface)" : "transparent",
                    border: open === item.label ? "2px solid var(--nb-border)" : "2px solid transparent",
                    borderRadius: "var(--radius)", cursor: "pointer",
                    fontFamily: "var(--font-bricolage,sans-serif)",
                    fontSize: 14, fontWeight: 600, color: "var(--nb-ink)",
                    transition: "background .15s,border .15s", letterSpacing: "-0.01em",
                  }}
                >
                  {item.label}
                  <ChevronDown size={13} style={{ transform: open === item.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s", color: "var(--nb-ink-muted)" }} />
                </button>

                {open === item.label && (
                  <div
                    onMouseLeave={() => setOpen(null)}
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", left: 0,
                      background: "var(--nb-bg)", border: "2px solid var(--nb-border)",
                      boxShadow: "var(--shadow-brutal-lg)", borderRadius: "var(--radius)",
                      padding: 24,
                      minWidth: item.cols ? (item.cols.length >= 3 ? "min(720px,90vw)" : "min(480px,90vw)") : 220,
                      zIndex: 100,
                      display: "grid",
                      gridTemplateColumns: item.cols ? `repeat(${item.cols.length},1fr)` : "1fr",
                      gap: 24,
                    }}
                  >
                    {item.cols?.map((col) => (
                      <div key={col.heading}>
                        <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 12, borderBottom: "1px solid var(--nb-border-faint)", paddingBottom: 8 }}>
                          {col.heading}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          {col.links.map((link) => {
                            const Icon = link.icon;
                            return (
                              <a
                                key={link.href + link.label}
                                href={link.href}
                                onClick={() => setOpen(null)}
                                style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: "var(--radius)", color: "var(--nb-ink)", fontSize: 13.5, fontWeight: 500, transition: "background .12s", textDecoration: "none" }}
                                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--nb-surface)"}
                                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                              >
                                <div style={{ width: 26, height: 26, background: "var(--nb-yellow)", border: "1.5px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "2px" }}>
                                  <Icon size={12} color="var(--nb-ink)" />
                                </div>
                                {link.label}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    {item.simple && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {item.simple.map((link) => (
                          <a
                            key={link.href + link.label}
                            href={link.href}
                            onClick={() => setOpen(null)}
                            style={{ display: "block", padding: "10px 12px", borderRadius: "var(--radius)", textDecoration: "none", color: "var(--nb-ink)", fontSize: 14, fontWeight: 600, transition: "background .12s" }}
                            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--nb-surface)"}
                            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                          >
                            {link.label}
                          </a>
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
            <a href={`${BASE}/enterprise/`} style={{ display: "flex", alignItems: "center", padding: "8px 14px", textDecoration: "none", fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 14, fontWeight: 600, color: "var(--nb-ink-muted)", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink-muted)"}
            >
              Enterprise
            </a>
            <a href={`${BASE}/contact/`} className="btn-primary" style={{ padding: "9px 18px", fontSize: 13 }}>
              Contact Sales <ArrowRight size={12} />
            </a>
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
            {PRODUCTS.map((p) => (
              <a key={p.href} href={p.href} onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 0", borderBottom: "1px solid var(--nb-border-faint)", textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, background: p.color, border: "2px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                  <p.icon size={16} color={p.textColor} />
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 800, color: "var(--nb-ink)", letterSpacing: "-0.02em" }}>{p.name}</p>
                  <p style={{ fontSize: 12, color: "var(--nb-ink-muted)", fontWeight: 500 }}>{p.tagline}</p>
                </div>
              </a>
            ))}
            {[
              { label: "Enterprise", href: `${BASE}/enterprise/` },
              { label: "Contact Sales", href: `${BASE}/contact/` },
            ].map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "14px 0", borderBottom: "1px solid var(--nb-border-faint)", textDecoration: "none", fontSize: 16, fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.02em" }}>
                {link.label}
              </a>
            ))}
            <a href={`${BASE}/contact/`} onClick={() => setMobileOpen(false)} className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: 24, textDecoration: "none" }}>
              Contact Sales <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}

      <div style={{ height: 64 }} />

      <style>{`
        @media(max-width:960px){
          .desktop-nav{display:none!important;}
          .mobile-menu-btn{display:flex!important;}
        }
      `}</style>
    </>
  );
}

export { PRODUCTS };
