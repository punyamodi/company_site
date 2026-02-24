"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Platform",
    links: [
      { label: "Omnichannel Inbox", href: "/features/omnichannel" },
      { label: "Captain AI Agent", href: "/features/ai-captain" },
      { label: "Workflow Automation", href: "/features/automation" },
      { label: "Advanced Analytics", href: "/features/analytics" },
      { label: "Sentiment Analysis", href: "/features/sentiment" },
      { label: "Customer Health Scores", href: "/features/health-scores" },
      { label: "All Features", href: "/features" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Customer Success", href: "/solutions/customer-success" },
      { label: "Support Operations", href: "/solutions/support-operations" },
      { label: "Enterprise IT", href: "/solutions/enterprise-it" },
      { label: "SaaS Companies", href: "/solutions/saas" },
      { label: "E-Commerce", href: "/solutions/ecommerce" },
      { label: "Financial Services", href: "/solutions/financial-services" },
      { label: "All Industries", href: "/industries" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "All Integrations", href: "/integrations" },
      { label: "Slack", href: "/integrations/slack" },
      { label: "WhatsApp", href: "/integrations/whatsapp" },
      { label: "Email", href: "/integrations/email" },
      { label: "API & Webhooks", href: "/integrations/api" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { label: "Enterprise Overview", href: "/enterprise" },
      { label: "Security & Compliance", href: "/enterprise/security" },
      { label: "SLA Management", href: "/enterprise/sla" },
      { label: "Data Governance", href: "/enterprise/data-governance" },
      { label: "Enterprise Pricing", href: "/pricing" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{
      background: "var(--nb-invert)",
      borderTop: "2px solid var(--nb-border)",
      color: "var(--nb-bg)",
      fontFamily: "var(--font-bricolage, sans-serif)",
    }}>
      {/* CTA strip */}
      <div style={{
        borderBottom: "2px solid rgba(255,255,255,0.1)",
        padding: "48px 24px",
        background: "var(--nb-teal)",
      }}>
        <div className="hd-footer-cta">
          <div>
            <p style={{
              fontFamily: "var(--font-bricolage, sans-serif)",
              fontSize: "clamp(22px,3vw,34px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.04em", marginBottom: 8,
            }}>
              Ready to transform your support operations?
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
              Talk to our team and see HaloDesk in action — tailored to your organization.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", background: "#fff", color: "var(--nb-teal)",
                border: "2px solid rgba(255,255,255,0.3)", borderRadius: "var(--radius)",
                fontWeight: 800, fontSize: 14, textDecoration: "none",
                boxShadow: "4px 4px 0px rgba(0,0,0,0.2)",
                transition: "transform 0.12s, box-shadow 0.12s",
                letterSpacing: "-0.02em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px rgba(0,0,0,0.2)";
              }}
            >
              Contact Sales <ArrowRight size={14} />
            </Link>
            <Link
              href="/enterprise"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", background: "transparent", color: "#fff",
                border: "2px solid rgba(255,255,255,0.4)", borderRadius: "var(--radius)",
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                transition: "background 0.12s",
                letterSpacing: "-0.02em",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: "56px 24px 40px", borderBottom: "2px solid rgba(255,255,255,0.08)" }}>
        <div className="hd-footer-main" style={{ maxWidth: 1264, margin: "0 auto" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 34, height: 34, background: "var(--nb-teal)",
                border: "2px solid rgba(255,255,255,0.2)", boxShadow: "3px 3px 0px rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="2"/>
                  <path d="M6 10h4m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="14" cy="10" r="1.5" fill="#fff"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.04em", color: "#fff" }}>HaloDesk</span>
            </div>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 24 }}>
              The enterprise customer support platform that unifies every conversation, automates intelligently, and keeps your customers for life.
            </p>
          </div>

          {/* Link columns */}
          <div className="hd-footer-links">
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                marginBottom: 16,
              }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.65)", fontSize: 13.5, fontWeight: 500,
                      textDecoration: "none", transition: "color 0.12s",
                      letterSpacing: "-0.01em",
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "20px 24px" }}>
        <div style={{ maxWidth: 1264, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", letterSpacing: "-0.01em" }}>
            © {new Date().getFullYear()} HaloDesk. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Security"].map((t) => (
              <Link
                key={t}
                href={t === "Security" ? "/enterprise/security" : t === "Privacy Policy" ? "/enterprise/security" : "/contact"}
                style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
