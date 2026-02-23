import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Archive,
  Building2,
  Database,
  Eye,
  Globe,
  Key,
  Lock,
  Server,
  Shield,
  Users,
  Webhook,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise IT — HaloDesk Solutions",
  description:
    "Internal helpdesk with enterprise controls. IP access control, department routing, SLA by ticket priority, and role-based permissions.",
};

const FEATURES = [
  {
    icon: Globe,
    title: "IP Access Control",
    desc: "Restrict portal access to approved IP ranges or CIDR blocks. Prevent external access to your internal helpdesk with network-level enforcement.",
  },
  {
    icon: Shield,
    title: "SLA by Ticket Priority",
    desc: "Define independent SLA targets for P1, P2, and P3 tickets. Critical incidents get 30-minute response windows; standard requests follow a relaxed schedule.",
  },
  {
    icon: Building2,
    title: "Department-Level Routing",
    desc: "Route service requests to the right team automatically: IT Infrastructure, HR, Facilities, Security. Rules chain by category and keyword.",
  },
  {
    icon: Key,
    title: "Role-Based Permissions",
    desc: "Agents see only the conversations assigned to their team. Admins configure what each role can view, reassign, and close.",
  },
  {
    icon: Webhook,
    title: "Webhook Audit Logs",
    desc: "Every action — assignment, status change, escalation — fires a webhook payload for your SIEM or audit trail. Full accountability, no gaps.",
  },
  {
    icon: Archive,
    title: "Data Retention Policies",
    desc: "Configure how long conversation data is retained per department. IT conversations can follow a 7-year retention policy while others auto-delete after 90 days.",
  },
];

const USE_CASES = [
  {
    icon: Server,
    title: "IT Service Requests",
    desc: "Hardware requests, software access, VPN issues, and infrastructure incidents — all routed to the right IT sub-team with priority-based SLAs.",
    accent: "#0EA5A0",
  },
  {
    icon: Users,
    title: "HR Helpdesk",
    desc: "Onboarding, offboarding, benefits questions, and policy requests handled in a confidential queue with role-scoped agent access.",
    accent: "#6366F1",
  },
  {
    icon: Building2,
    title: "Facilities Management",
    desc: "Office maintenance, room bookings, equipment requests, and building access issues \u2014 categorized and routed to facilities on their own SLA.",
    accent: "#F59E0B",
  },
];

export default function EnterpriseITPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--nb-invert)",
          borderBottom: "2px solid var(--nb-border)",
          paddingTop: 96,
          paddingBottom: 80,
        }}
      >
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }} />
        <div className="container">
          <div style={{ maxWidth: 680, position: "relative" }}>
            <div className="eyebrow anim-fade-up" style={{ marginBottom: 24 }}>
              <Lock size={12} />
              Enterprise IT
            </div>
            <h1
              className="anim-fade-up delay-100"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                lineHeight: 1.05,
                marginBottom: 24,
                letterSpacing: "-0.04em",
                color: "var(--nb-bg)",
              }}
            >
              Internal helpdesk.{" "}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)", fontWeight: 700 }}>
                Enterprise-grade.
              </em>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{
                fontSize: "1.125rem",
                color: "rgba(250,248,243,0.75)",
                lineHeight: 1.7,
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              HaloDesk gives IT and shared services teams the access controls,
              department routing, and priority-based SLAs they need to run a
              professional internal helpdesk \u2014 without enterprise complexity.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                All Solutions <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── IP WHITELISTING DETAIL ───────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="section-label">Network Security</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
                IP whitelisting{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
                  out of the box
                </em>
              </h2>
              <p style={{ color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                Lock your helpdesk to your corporate network with CIDR-based IP
                whitelisting. Employees on approved networks get seamless access;
                everyone else is blocked at the perimeter.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Define multiple CIDR ranges per account",
                  "Separate rules for agent portal and customer-facing channels",
                  "Violation attempts logged for audit trail",
                  "Works alongside SSO and role-based access control",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Shield size={14} color="var(--nb-teal)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: "0.9375rem", color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code block: CIDR rules */}
            <div className="anim-fade-up delay-200">
              <div className="code-block">
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" />
                  <span className="code-dot code-dot--y" />
                  <span className="code-dot code-dot--g" />
                  <span style={{ color: "#6b7280", fontSize: 11, marginLeft: 8 }}>ip_whitelist_config.json</span>
                </div>
                <div className="code-block__body">
                  <pre>
                    <span className="tok-var">{"{"}{"\n"}</span>
                    <span className="tok-string">  "ip_whitelist"</span>
                    <span className="tok-var">: {"{"}{"\n"}</span>
                    <span className="tok-string">    "enabled"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-keyword">true</span>
                    <span className="tok-var">,{"\n"}</span>
                    <span className="tok-string">    "rules"</span>
                    <span className="tok-var">: [{"\n"}</span>
                    <span className="tok-var">      {"{"}{"\n"}</span>
                    <span className="tok-string">        "label"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"Corporate HQ"</span>
                    <span className="tok-var">,{"\n"}</span>
                    <span className="tok-string">        "cidr"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"10.0.0.0/8"</span>
                    <span className="tok-var">{"\n"}      {"}"},</span>
                    <span className="tok-var">{"\n"}      {"{"}{"\n"}</span>
                    <span className="tok-string">        "label"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"Remote VPN"</span>
                    <span className="tok-var">,{"\n"}</span>
                    <span className="tok-string">        "cidr"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"172.16.0.0/12"</span>
                    <span className="tok-var">{"\n"}      {"}"},</span>
                    <span className="tok-var">{"\n"}      {"{"}{"\n"}</span>
                    <span className="tok-string">        "label"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"London Office"</span>
                    <span className="tok-var">,{"\n"}</span>
                    <span className="tok-string">        "cidr"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"192.168.10.0/24"</span>
                    <span className="tok-var">{"\n"}      {"}"}{"\n"}    ],{"\n"}</span>
                    <span className="tok-string">    "block_action"</span>
                    <span className="tok-var">: </span>
                    <span className="tok-string">"log_and_reject"</span>
                    <span className="tok-var">{"\n"}  {"}"}{"\n"}{"}"}</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────── */}
      <section className="section" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">Enterprise Controls</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 48 }}>
            Built for{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              internal IT teams
            </em>
          </h2>
          <div className="cards-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card anim-fade-up" style={{ padding: 24, animationDelay: `${i * 80}ms` }}>
                  <div className="feature-icon" style={{ marginBottom: 16 }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── USE CASE CARDS ───────────────────────────────────────── */}
      <section className="section section--surface" style={{ borderBottom: "2px solid var(--nb-border)" }}>
        <div className="container">
          <div className="section-label">Use Cases</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: 48 }}>
            One platform for{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              every internal team
            </em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {USE_CASES.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 32, animationDelay: `${i * 100}ms` }}
                >
                  <div className="feature-icon" style={{ background: uc.accent, marginBottom: 20, width: 52, height: 52 }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, marginBottom: 12 }}>{uc.title}</h3>
                  <p style={{ color: "var(--nb-ink-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                    {uc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--nb-invert)", borderTop: "2px solid var(--nb-border)" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <div className="eyebrow anim-fade-up" style={{ margin: "0 auto 24px" }}>
            <Lock size={12} />
            Enterprise IT
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--nb-bg)", marginBottom: 20 }}
          >
            Your internal helpdesk,{" "}
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--nb-teal)" }}>
              properly controlled
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{ color: "rgba(250,248,243,0.7)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7, fontSize: "1.0625rem" }}
          >
            IP whitelisting, department routing, SLA by priority, and role-scoped access.
            Everything your IT team needs \u2014 in one platform.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-invert">
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link href="/enterprise" className="btn-secondary">
              Enterprise overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
