"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  X, Menu, ChevronDown, MessageSquare, Bot, Zap, BarChart3,
  Heart, BookOpen, Bell, Users, Globe, Shield, Lock, Database,
  Puzzle, Mail, Slack, Phone, ArrowRight, Headphones, TrendingUp,
  Building2, ShoppingCart, Cpu, FileText, Activity
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Product",
    items: [
      {
        col: "CORE PLATFORM",
        links: [
          { label: "Omnichannel Inbox", href: "/features/omnichannel", icon: MessageSquare },
          { label: "Captain AI Agent", href: "/features/ai-captain", icon: Bot },
          { label: "Workflow Automation", href: "/features/automation", icon: Zap },
          { label: "Advanced Analytics", href: "/features/analytics", icon: BarChart3 },
          { label: "Knowledge Base", href: "/features/knowledge-base", icon: BookOpen },
          { label: "Campaigns", href: "/features/campaigns", icon: Bell },
        ],
      },
      {
        col: "INTELLIGENCE",
        links: [
          { label: "Sentiment Analysis", href: "/features/sentiment", icon: Activity },
          { label: "Customer Health Scores", href: "/features/health-scores", icon: Heart },
          { label: "Agent Shift Management", href: "/features/agent-shifts", icon: Users },
          { label: "All Features", href: "/features", icon: Globe },
        ],
      },
      {
        col: "ENTERPRISE",
        links: [
          { label: "Security & Compliance", href: "/enterprise/security", icon: Shield },
          { label: "SLA Management", href: "/enterprise/sla", icon: FileText },
          { label: "Data Governance", href: "/enterprise/data-governance", icon: Database },
          { label: "Enterprise Overview", href: "/enterprise", icon: Building2 },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        col: "BY TEAM",
        links: [
          { label: "Customer Success", href: "/solutions/customer-success", icon: Heart },
          { label: "Support Operations", href: "/solutions/support-operations", icon: Headphones },
          { label: "IT & Enterprise", href: "/solutions/enterprise-it", icon: Cpu },
        ],
      },
      {
        col: "BY INDUSTRY",
        links: [
          { label: "SaaS Companies", href: "/solutions/saas", icon: TrendingUp },
          { label: "E-Commerce", href: "/solutions/ecommerce", icon: ShoppingCart },
          { label: "Financial Services", href: "/solutions/financial-services", icon: Lock },
          { label: "All Industries", href: "/industries", icon: Globe },
        ],
      },
    ],
  },
  {
    label: "Integrations",
    simple: [
      { label: "All Integrations", href: "/integrations" },
      { label: "Slack", href: "/integrations/slack" },
      { label: "WhatsApp", href: "/integrations/whatsapp" },
      { label: "Email", href: "/integrations/email" },
      { label: "API & Webhooks", href: "/integrations/api" },
    ],
  },
  {
    label: "Company",
    simple: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Industries", href: "/industries" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Sales", href: "/contact" },
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
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
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
        <div style={{ maxWidth: 1264, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", width: "100%" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 40, flexShrink: 0 }}>
            <div style={{
              width: 34, height: 34, background: "var(--nb-teal)",
              border: "2px solid var(--nb-border)", boxShadow: "3px 3px 0px var(--nb-border)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="2"/>
                <path d="M6 10h4m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="14" cy="10" r="1.5" fill="#fff"/>
              </svg>
            </div>
            <span style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              fontSize: 19, fontWeight: 800, color: "var(--nb-ink)",
              letterSpacing: "-0.045em",
            }}>HaloDesk</span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
            {NAV_ITEMS.map((item) => (
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
                    fontFamily: "var(--font-bricolage, sans-serif)",
                    fontSize: 14, fontWeight: 600, color: "var(--nb-ink)",
                    transition: "background 0.15s, border 0.15s",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    style={{
                      transform: open === item.label ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s", color: "var(--nb-ink-muted)",
                    }}
                  />
                </button>

                {open === item.label && (
                  <div
                    onMouseLeave={() => setOpen(null)}
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", left: 0,
                      background: "var(--nb-bg)", border: "2px solid var(--nb-border)",
                      boxShadow: "var(--shadow-brutal-lg)", borderRadius: "var(--radius)",
                      padding: 24, minWidth: item.items ? 640 : 200, zIndex: 100,
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
                                key={link.href + link.label}
                                href={link.href}
                                onClick={() => setOpen(null)}
                                style={{
                                  display: "flex", alignItems: "center", gap: 8,
                                  padding: "8px 10px", borderRadius: "var(--radius)",
                                  color: "var(--nb-ink)", fontSize: 13.5, fontWeight: 500,
                                  fontFamily: "var(--font-bricolage, sans-serif)",
                                  transition: "background 0.12s", textDecoration: "none",
                                }}
                                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--nb-surface)"}
                                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                              >
                                <div style={{
                                  width: 26, height: 26, background: "var(--nb-teal)",
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
                            key={link.href + link.label}
                            href={link.href}
                            onClick={() => setOpen(null)}
                            style={{
                              display: "block", padding: "10px 12px",
                              borderRadius: "var(--radius)", textDecoration: "none",
                              color: "var(--nb-ink)", fontSize: 14, fontWeight: 600,
                              fontFamily: "var(--font-bricolage, sans-serif)",
                              transition: "background 0.12s",
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

            <Link href="/pricing" style={{
              display: "flex", alignItems: "center", padding: "8px 14px",
              textDecoration: "none", fontFamily: "var(--font-bricolage, sans-serif)",
              fontSize: 14, fontWeight: 600, color: "var(--nb-ink)", letterSpacing: "-0.01em",
            }}>
              Pricing
            </Link>
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
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "9px 18px", borderRadius: "var(--radius)",
                fontFamily: "var(--font-bricolage, sans-serif)",
                fontSize: 13, fontWeight: 800, color: "#fff",
                background: "var(--nb-teal)", border: "2px solid var(--nb-border)",
                boxShadow: "var(--shadow-brutal-sm)", textDecoration: "none",
                transition: "transform 0.12s, box-shadow 0.12s",
                letterSpacing: "-0.01em",
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
              Contact Sales <ArrowRight size={12} />
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

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999, background: "var(--nb-bg)",
          paddingTop: 64, overflowY: "auto",
        }}>
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              ...NAV_ITEMS.flatMap((item) => [
                ...(item.items?.flatMap((col) => col.links) ?? []),
                ...(item.simple ?? []),
              ]),
              { label: "Pricing", href: "/pricing" },
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
                  fontSize: 16, fontWeight: 700, color: "var(--nb-ink)",
                  letterSpacing: "-0.02em",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: 24, textDecoration: "none" }}
            >
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
