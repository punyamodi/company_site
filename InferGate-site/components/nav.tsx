"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  X, Menu, ChevronDown, Zap, Shield, Globe, Activity, Code, Lock,
  BarChart3, Layers, GitBranch, Database, Server, Eye, Cpu, Brain,
  ArrowRight, Network, Building2, DollarSign, Factory, HeartPulse, Landmark,
} from "lucide-react";

const NAV = [
  {
    label: "Product",
    cols: [
      {
        heading: "Gateway Core",
        links: [
          { label: "AI Gateway Overview",       href: "/features",                         icon: Globe },
          { label: "Intelligent Routing",       href: "/features/routing",                 icon: GitBranch },
          { label: "Provider Fallback",         href: "/features/fallback",                icon: Shield },
          { label: "Semantic Caching",          href: "/features/caching",                 icon: Database },
          { label: "Observability & Tracing",   href: "/features/observability",           icon: Eye },
          { label: "Rate Limiting & Budgets",   href: "/features/rate-limiting",           icon: BarChart3 },
          { label: "Virtual Keys & Access",     href: "/features/access-control",          icon: Lock },
        ],
      },
      {
        heading: "Enterprise",
        links: [
          { label: "Guardrails & Safety",       href: "/features/guardrails",              icon: Shield },
          { label: "Adaptive Load Balancing",   href: "/features/adaptive-load-balancing", icon: Activity },
          { label: "Clustering & HA",           href: "/features/clustering",              icon: Server },
          { label: "Audit Logs & Compliance",   href: "/features/audit-logs",              icon: Layers },
          { label: "Vault Integration",         href: "/features/vault",                   icon: Lock },
          { label: "Plugin System",             href: "/features/plugins",                 icon: Zap },
        ],
      },
      {
        heading: "Agents & Integrations",
        links: [
          { label: "MCP Gateway",               href: "/features/mcp-gateway",             icon: Brain },
          { label: "SDK Integrations",          href: "/integrations",                     icon: Code },
          { label: "OpenTelemetry",             href: "/features/observability",           icon: Eye },
          { label: "Custom Plugins",            href: "/features/plugins",                 icon: Layers },
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
          { label: "Platform / ML Engineers",  href: "/solutions/platform-engineers",     icon: Code },
          { label: "CTO & IT Leaders",         href: "/solutions/cto-it-leaders",         icon: Building2 },
          { label: "Security & Compliance",    href: "/solutions/security-compliance",    icon: Shield },
        ],
      },
      {
        heading: "By Use Case",
        links: [
          { label: "Cost Control",             href: "/solutions/cost-control",           icon: DollarSign },
          { label: "High-Throughput Apps",     href: "/solutions/high-throughput",        icon: Zap },
          { label: "Agent Orchestration",      href: "/solutions/agent-orchestration",    icon: Network },
          { label: "Self-Hosted / VPC",        href: "/solutions/self-hosted",            icon: Server },
        ],
      },
      {
        heading: "Industries",
        links: [
          { label: "Financial Services",       href: "/industries/financial-services",    icon: Landmark },
          { label: "Healthcare",               href: "/industries/healthcare",            icon: HeartPulse },
          { label: "Technology",               href: "/industries/technology",            icon: Cpu },
          { label: "Government",               href: "/industries/government",            icon: Factory },
        ],
      },
    ],
  },
  {
    label: "Integrations",
    simple: [
      { label: "All Integrations",             href: "/integrations" },
      { label: "OpenAI",                       href: "/integrations/openai" },
      { label: "Anthropic",                    href: "/integrations/anthropic" },
      { label: "AWS Bedrock",                  href: "/integrations/aws-bedrock" },
      { label: "Google Vertex AI",             href: "/integrations/google-vertex" },
      { label: "Azure OpenAI",                 href: "/integrations/azure" },
      { label: "Groq",                         href: "/integrations/groq" },
      { label: "Ollama (On-Prem)",             href: "/integrations/ollama" },
    ],
  },
  {
    label: "Enterprise",
    simple: [
      { label: "Enterprise Overview",          href: "/enterprise" },
      { label: "Security & Trust",             href: "/trust" },
      { label: "Pricing",                      href: "/pricing" },
      { label: "About",                        href: "/about" },
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
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 40, flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, background: "var(--nb-invert)", border: "2px solid var(--nb-border)", boxShadow: "3px 3px 0px var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M2 9h5l2-6 2 12 2-6h3" stroke="#F5C518" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 18, fontWeight: 800, color: "var(--nb-ink)", letterSpacing: "-0.04em" }}>InferGate</span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }} className="desktop-nav">
            {NAV.map((item) => (
              <div key={item.label} style={{ position: "relative" }}>
                <button
                  onMouseEnter={() => setOpen(item.label)}
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  style={{
                    display: "flex", alignItems: "center", gap: 4,
                    padding: "8px 14px",
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
                      padding: 24, minWidth: item.cols ? 680 : 220, zIndex: 100,
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
                              <Link
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
                            key={link.href + link.label}
                            href={link.href}
                            onClick={() => setOpen(null)}
                            style={{ display: "block", padding: "10px 12px", borderRadius: "var(--radius)", textDecoration: "none", color: "var(--nb-ink)", fontSize: 14, fontWeight: 600, transition: "background .12s" }}
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
              style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 14px", textDecoration: "none", fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 13, fontWeight: 600, color: "var(--nb-ink-muted)", letterSpacing: "-0.01em", borderRight: "1px solid var(--nb-border-faint)", marginRight: 2, whiteSpace: "nowrap" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink-muted)"}
            >
              ← Platform Home
            </a>
            <Link href="/pricing" style={{ display: "flex", alignItems: "center", padding: "8px 14px", textDecoration: "none", fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 14, fontWeight: 600, color: "var(--nb-ink-muted)", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink-muted)"}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: "9px 18px", fontSize: 13 }}
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
              ...NAV.flatMap((item) => [
                ...(item.cols?.flatMap((col) => col.links) ?? []),
                ...(item.simple ?? []),
              ]),
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link key={link.href + link.label} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "14px 0", borderBottom: "1px solid var(--nb-border-faint)", textDecoration: "none", fontSize: 16, fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.02em" }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: 24, textDecoration: "none" }}>
              Contact Sales <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}

      {/* Spacer */}
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
