"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Mail, Phone, FileText, CheckCircle2, ArrowRight,
  User, Building2, Briefcase, Users, MessageSquare, Send,
} from "lucide-react";

const ROLES = ["CTO", "VP Engineering", "Platform Engineer", "ML Engineer", "Security", "Other"];
const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,000+"];

const EXPECT = [
  "Response within 1 business day",
  "Technical architecture review with our engineering team",
  "Custom pricing proposal based on your usage",
  "Proof-of-concept scoping & timeline",
];

const CONTACT_TILES = [
  {
    icon: Mail,
    title: "Email us directly",
    body: "Our enterprise team monitors this inbox around the clock.",
    cta: "enterprise@getinfergate.ai",
    href: "mailto:enterprise@getinfergate.ai",
    external: true,
  },
  {
    icon: Phone,
    title: "Schedule a call",
    body: "Book a 30-minute technical walkthrough at your convenience.",
    cta: "Book a demo →",
    href: "/book-demo",
    external: false,
  },
  {
    icon: FileText,
    title: "Technical documentation",
    body: "Explore API references, integration guides, and architecture docs.",
    cta: "docs.getinfergate.ai →",
    href: "https://docs.getinfergate.ai",
    external: true,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", role: "", teamSize: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid work email required";
    if (!form.company.trim()) e.company = "Company is required";
    if (!form.role) e.role = "Please select a role";
    if (!form.teamSize) e.teamSize = "Please select team size";
    if (!form.message.trim() || form.message.trim().length < 20) e.message = "Please describe your use case (min 20 chars)";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  }

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "2px solid var(--nb-border)",
    borderRadius: "var(--radius)",
    background: "var(--nb-bg)",
    color: "var(--nb-ink)",
    fontSize: 14,
    fontFamily: "var(--font-bricolage,sans-serif)",
    fontWeight: 500,
    outline: "none",
    transition: "box-shadow .15s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "var(--nb-ink-muted)",
    marginBottom: 8,
    fontFamily: "var(--font-bricolage,sans-serif)",
  };

  const errStyle: React.CSSProperties = {
    fontSize: 12,
    color: "var(--nb-danger)",
    marginTop: 4,
    fontWeight: 600,
  };

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingBottom: 80 }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">Contact Sales</span>
            <h1 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
              Let&apos;s talk about your<br />
              <span style={{ color: "var(--nb-orange)" }}>AI infrastructure.</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontWeight: 400 }}>
              Tell us about your team and use case. Our engineering team will be in touch within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Two-column form + expect ────────────────── */}
      <section className="section section--surface" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
            >
              <div className="nb-card" style={{ padding: "64px 48px" }}>
                <div style={{ width: 72, height: 72, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                  <CheckCircle2 size={36} color="var(--nb-ink)" />
                </div>
                <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 16 }}>Message received.</h2>
                <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 32 }}>
                  Thanks for reaching out, {form.name.split(" ")[0]}. An InferGate engineer will review your request and follow up at <strong>{form.email}</strong> within one business day.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/book-demo" className="btn-primary">Book a demo <ArrowRight size={14} /></Link>
                  <Link href="https://docs.getinfergate.ai" className="btn-secondary" target="_blank" rel="noopener noreferrer">Read docs <ArrowRight size={14} /></Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 32, alignItems: "start" }}>
              {/* Form */}
              <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="nb-card" style={{ padding: "40px 40px", background: "var(--nb-bg)" }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 32 }}>Tell us about your team</h2>
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                      {/* Name */}
                      <div>
                        <label style={labelStyle}><User size={11} />Full Name</label>
                        <input
                          type="text"
                          placeholder="Alex Johnson"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.name ? "var(--nb-danger)" : "var(--nb-border)" }}
                          onFocus={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-brutal-sm)")}
                          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                        />
                        {errors.name && <p style={errStyle}>{errors.name}</p>}
                      </div>
                      {/* Email */}
                      <div>
                        <label style={labelStyle}><Mail size={11} />Work Email</label>
                        <input
                          type="email"
                          placeholder="alex@company.com"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.email ? "var(--nb-danger)" : "var(--nb-border)" }}
                          onFocus={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-brutal-sm)")}
                          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                        />
                        {errors.email && <p style={errStyle}>{errors.email}</p>}
                      </div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}><Building2 size={11} />Company</label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        style={{ ...inputStyle, borderColor: errors.company ? "var(--nb-danger)" : "var(--nb-border)" }}
                        onFocus={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-brutal-sm)")}
                        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                      />
                      {errors.company && <p style={errStyle}>{errors.company}</p>}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                      {/* Role */}
                      <div>
                        <label style={labelStyle}><Briefcase size={11} />Your Role</label>
                        <select
                          value={form.role}
                          onChange={(e) => set("role", e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.role ? "var(--nb-danger)" : "var(--nb-border)", cursor: "pointer", appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230A0A0A' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "calc(100% - 12px) center" }}
                          onFocus={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-brutal-sm)")}
                          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                        >
                          <option value="">Select role…</option>
                          {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                        {errors.role && <p style={errStyle}>{errors.role}</p>}
                      </div>
                      {/* Team size */}
                      <div>
                        <label style={labelStyle}><Users size={11} />Team Size</label>
                        <select
                          value={form.teamSize}
                          onChange={(e) => set("teamSize", e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.teamSize ? "var(--nb-danger)" : "var(--nb-border)", cursor: "pointer", appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230A0A0A' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "calc(100% - 12px) center" }}
                          onFocus={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-brutal-sm)")}
                          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                        >
                          <option value="">Select size…</option>
                          {TEAM_SIZES.map((s) => <option key={s} value={s}>{s} engineers</option>)}
                        </select>
                        {errors.teamSize && <p style={errStyle}>{errors.teamSize}</p>}
                      </div>
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <label style={labelStyle}><MessageSquare size={11} />Tell us about your use case</label>
                      <textarea
                        rows={5}
                        placeholder="Describe your AI infrastructure needs, current pain points, or what you're trying to build…"
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        style={{ ...inputStyle, resize: "vertical", minHeight: 120, borderColor: errors.message ? "var(--nb-danger)" : "var(--nb-border)" }}
                        onFocus={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-brutal-sm)")}
                        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                      />
                      {errors.message && <p style={errStyle}>{errors.message}</p>}
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      <Send size={15} />
                      Send Message
                    </button>

                    <p style={{ fontSize: 12, color: "var(--nb-ink-dim)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                      By submitting you agree to our{" "}
                      <Link href="/legal/privacy" style={{ textDecoration: "underline", color: "var(--nb-ink-muted)" }}>Privacy Policy</Link>
                      {" "}and{" "}
                      <Link href="/legal/terms" style={{ textDecoration: "underline", color: "var(--nb-ink-muted)" }}>Terms of Service</Link>.
                    </p>
                  </form>
                </div>
              </motion.div>

              {/* What to expect */}
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div className="nb-card nb-card--yellow" style={{ padding: "32px 28px" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20 }}>What to expect</h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                      {EXPECT.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                          <div style={{ width: 22, height: 22, background: "var(--nb-invert)", border: "1.5px solid var(--nb-border)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                            <CheckCircle2 size={12} color="var(--nb-yellow)" />
                          </div>
                          <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.55, letterSpacing: "-0.01em" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="nb-card" style={{ padding: "24px 28px", background: "var(--nb-invert)", color: "var(--nb-bg)" }}>
                    <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(250,248,243,0.5)", marginBottom: 10 }}>Response time</p>
                    <p style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 32, fontWeight: 700, color: "var(--nb-yellow)", letterSpacing: "-0.04em", marginBottom: 4 }}>≤ 1 day</p>
                    <p style={{ fontSize: 13, color: "rgba(250,248,243,0.6)", lineHeight: 1.6 }}>
                      Our engineering team responds to every enterprise inquiry — never a sales bot.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* ── Contact Method Tiles ──────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Other ways to reach us</span>
          </div>
          <div className="cards-3">
            {CONTACT_TILES.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <div className="nb-card" style={{ padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div className="feature-icon" style={{ marginBottom: 20 }}>
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 10 }}>{tile.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{tile.body}</p>
                    {tile.external ? (
                      <a
                        href={tile.href}
                        target={tile.href.startsWith("http") ? "_blank" : undefined}
                        rel={tile.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="btn-secondary"
                        style={{ fontSize: 13, padding: "10px 18px" }}
                      >
                        {tile.cta} <ArrowRight size={12} />
                      </a>
                    ) : (
                      <Link href={tile.href} className="btn-secondary" style={{ fontSize: 13, padding: "10px 18px" }}>
                        {tile.cta} <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
