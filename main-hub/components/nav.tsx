"use client";

import { useState, useEffect, useRef } from "react";
import {
  X, Menu, ChevronDown, Monitor, Server, Smartphone, Bot, MessageSquare,
  ShoppingCart, Palette, Zap, ArrowRight, Layers, Brain, Globe, CircleHelp,
  Building2, Code2, Workflow, BarChart2,
} from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SERVICES_COLS = [
  {
    heading: "Development",
    links: [
      { label: "Frontend Development",   href: `${BASE}/services/`, icon: Monitor },
      { label: "Backend Development",    href: `${BASE}/services/`, icon: Server },
      { label: "Mobile App Development", href: `${BASE}/services/`, icon: Smartphone },
      { label: "Full-Stack Development", href: `${BASE}/services/`, icon: Layers },
      { label: "API Development",        href: `${BASE}/services/`, icon: Zap },
    ],
  },
  {
    heading: "AI & Automation",
    links: [
      { label: "AI Agents",            href: `${BASE}/services/`, icon: Bot },
      { label: "Customer Chatbots",    href: `${BASE}/services/`, icon: MessageSquare },
      { label: "AI Integration",       href: `${BASE}/services/`, icon: Brain },
      { label: "Workflow Automation",  href: `${BASE}/services/`, icon: Workflow },
    ],
  },
  {
    heading: "Design & Commerce",
    links: [
      { label: "UI/UX Design",          href: `${BASE}/services/`, icon: Palette },
      { label: "E-commerce Solutions",  href: `${BASE}/services/`, icon: ShoppingCart },
      { label: "Website Development",   href: `${BASE}/services/`, icon: Globe },
      { label: "Analytics & Reporting", href: `${BASE}/services/`, icon: BarChart2 },
    ],
  },
];

const NAV = [
  {
    label: "Services",
    cols: SERVICES_COLS,
  },
  {
    label: "Work",
    simple: [
      { label: "Case Studies",            href: `${BASE}/work/` },
      { label: "InferGate — AI Gateway",  href: `${BASE}/infergate/` },
      { label: "Converse — Voice AI",     href: `${BASE}/converse/` },
      { label: "HaloDesk — Support AI",   href: `${BASE}/halodesk/` },
      { label: "Genie — Knowledge AI",    href: `${BASE}/genie/` },
      { label: "Forge — Enterprise AI",   href: `${BASE}/forge/` },
    ],
  },
  {
    label: "Company",
    simple: [
      { label: "About Us",       href: `${BASE}/about/` },
      { label: "Enterprise",     href: `${BASE}/enterprise/` },
      { label: "FAQ",            href: `${BASE}/faq/` },
      { label: "Contact",        href: `${BASE}/contact/` },
    ],
  },
];

const MOBILE_LINKS = [
  { label: "Services",  href: `${BASE}/services/`,  icon: Code2 },
  { label: "Our Work",  href: `${BASE}/work/`,       icon: Layers },
  { label: "About",     href: `${BASE}/about/`,      icon: Building2 },
  { label: "Enterprise",href: `${BASE}/enterprise/`, icon: Server },
  { label: "FAQ",       href: `${BASE}/faq/`,        icon: CircleHelp },
  { label: "Contact",   href: `${BASE}/contact/`,    icon: MessageSquare },
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
          <a href={`${BASE}/`} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 40, flexShrink: 0 }}>
            <div style={{
              width: 32, height: 32, background: "var(--nb-invert)",
              border: "2px solid var(--nb-border)", boxShadow: "3px 3px 0px var(--nb-border)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
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
          </a>

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
                      minWidth: item.cols ? "min(680px,90vw)" : 220,
                      zIndex: 100,
                      display: "grid",
                      gridTemplateColumns: item.cols ? `repeat(${item.cols.length},1fr)` : "1fr",
                      gap: 24,
                    }}
                    className="nb-nav-dropdown"
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
            <a
              href={`${BASE}/work/`}
              style={{ display: "flex", alignItems: "center", padding: "8px 14px", textDecoration: "none", fontFamily: "var(--font-bricolage,sans-serif)", fontSize: 14, fontWeight: 600, color: "var(--nb-ink-muted)", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink-muted)"}
            >
              Our Work
            </a>
            <a href={`${BASE}/contact/`} className="btn-primary" style={{ padding: "9px 18px", fontSize: 13 }}>
              Book Discovery Call <ArrowRight size={12} />
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
            {MOBILE_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 0", borderBottom: "1px solid var(--nb-border-faint)", textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                  <link.icon size={16} color="var(--nb-ink)" />
                </div>
                <span style={{ fontSize: 16, fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.02em" }}>{link.label}</span>
              </a>
            ))}
            <a href={`${BASE}/contact/`} onClick={() => setMobileOpen(false)} className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: 24, textDecoration: "none" }}>
               Book Discovery Call <ArrowRight size={14} />
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
