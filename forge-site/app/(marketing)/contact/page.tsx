"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, CheckCircle2 } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PROJECT_TYPES = [
  "Custom AI Integration",
  "Workflow Automation",
  "Data & AI Platform",
  "Custom AI Agents",
  "AI Consulting & Strategy",
  "Model Fine-tuning",
  "Not sure yet",
];

const BUDGET_RANGES = [
  "Under $50K",
  "$50K – $150K",
  "$150K – $500K",
  "$500K – $1M",
  "$1M+",
  "Prefer to discuss",
];

const TIMELINES = [
  "ASAP (within 4 weeks)",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Exploring options",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", role: "",
    projectType: "", budget: "", timeline: "", description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%", padding: "11px 14px",
    border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
    fontFamily: "var(--font-bricolage, sans-serif)", fontSize: 14,
    color: "var(--nb-ink)", background: "#fff",
    outline: "none", boxSizing: "border-box" as const,
    transition: "border-color 0.15s",
  };

  const labelStyle = {
    display: "block", fontSize: 13, fontWeight: 700,
    color: "var(--nb-ink)", marginBottom: 6,
    fontFamily: "var(--font-bricolage, sans-serif)",
  };

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 64, position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(var(--nb-border-faint) 1px, transparent 1px), linear-gradient(90deg, var(--nb-border-faint) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container">
          <span className="eyebrow">Start a Project</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 20, maxWidth: 640 }}>
            Tell us what you need.{" "}
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", color: "var(--nb-rose)" }}>
              We&apos;ll build it.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 520 }}>
            Fill out the form below and a Forge solutions architect will reach out within one business day to schedule your discovery call.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="section section--surface" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="fg-split-2col" style={{ alignItems: "flex-start" }}>
            {/* Form */}
            <div>
              {submitted ? (
                <div style={{
                  border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow-brutal)", background: "#fff",
                  padding: "48px 40px", textAlign: "center",
                }}>
                  <div style={{
                    width: 56, height: 56, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                    boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "var(--radius)", margin: "0 auto 24px",
                  }}>
                    <CheckCircle2 size={26} color="#fff" />
                  </div>
                  <h2 style={{ fontSize: 26, marginBottom: 12 }}>We&apos;ll be in touch soon</h2>
                  <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 380, margin: "0 auto 32px" }}>
                    Thanks for reaching out. A Forge solutions architect will contact you within one business day to schedule your discovery call.
                  </p>
                  <Link href={`${BASE}/`} className="btn-secondary" style={{ textDecoration: "none" }}>
                    ← Back to home
                  </Link>
                </div>
              ) : (
                <div className="nb-card" style={{ padding: "36px 36px" }}>
                  <h2 style={{ fontSize: 20, marginBottom: 28 }}>Project inquiry</h2>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>Full name *</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Jane Smith"
                          style={inputStyle}
                          onFocus={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-rose)"}
                          onBlur={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-border)"}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Work email *</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          placeholder="jane@company.com"
                          style={inputStyle}
                          onFocus={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-rose)"}
                          onBlur={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-border)"}
                        />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>Company *</label>
                        <input
                          type="text" name="company" required value={form.company} onChange={handleChange}
                          placeholder="Acme Corp"
                          style={inputStyle}
                          onFocus={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-rose)"}
                          onBlur={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-border)"}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Your role</label>
                        <input
                          type="text" name="role" value={form.role} onChange={handleChange}
                          placeholder="CTO, VP Engineering, etc."
                          style={inputStyle}
                          onFocus={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-rose)"}
                          onBlur={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-border)"}
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>Project type *</label>
                      <select
                        name="projectType" required value={form.projectType} onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-rose)"}
                        onBlur={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-border)"}
                      >
                        <option value="">Select project type</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>Budget range</label>
                        <select
                          name="budget" value={form.budget} onChange={handleChange}
                          style={{ ...inputStyle, cursor: "pointer" }}
                          onFocus={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-rose)"}
                          onBlur={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-border)"}
                        >
                          <option value="">Select budget</option>
                          {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Timeline</label>
                        <select
                          name="timeline" value={form.timeline} onChange={handleChange}
                          style={{ ...inputStyle, cursor: "pointer" }}
                          onFocus={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-rose)"}
                          onBlur={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-border)"}
                        >
                          <option value="">Select timeline</option>
                          {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <label style={labelStyle}>Project description *</label>
                      <textarea
                        name="description" required value={form.description} onChange={handleChange}
                        placeholder="Tell us about your challenge, what you've tried, and what success looks like for you..."
                        rows={5}
                        style={{
                          ...inputStyle, resize: "vertical" as const, lineHeight: 1.6,
                          minHeight: 120,
                        }}
                        onFocus={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-rose)"}
                        onBlur={(e) => (e.target as HTMLElement).style.borderColor = "var(--nb-border)"}
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15 }}>
                      Submit Inquiry <ArrowRight size={15} />
                    </button>
                    <p style={{ fontSize: 12, color: "var(--nb-ink-dim)", textAlign: "center", marginTop: 12 }}>
                      We respond within 1 business day. No spam, ever.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="nb-card" style={{ padding: 28 }}>
                <div style={{
                  width: 40, height: 40, background: "var(--nb-rose)", border: "2px solid var(--nb-border)",
                  boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "var(--radius)", marginBottom: 16,
                }}>
                  <Mail size={18} color="#fff" />
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 8 }}>Email us directly</h3>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", marginBottom: 12, lineHeight: 1.6 }}>
                  For project inquiries, RFPs, or general questions.
                </p>
                <a href="mailto:contact@forge.ai" style={{
                  fontSize: 15, fontWeight: 700, color: "var(--nb-rose)", textDecoration: "none",
                }}>contact@forge.ai</a>
              </div>

              <div className="nb-card" style={{ padding: 28 }}>
                <div style={{
                  width: 40, height: 40, background: "var(--nb-rose-subtle)", border: "2px solid var(--nb-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "var(--radius)", marginBottom: 16,
                }}>
                  <Phone size={18} color="var(--nb-rose)" />
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 8 }}>Book a discovery call</h3>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", marginBottom: 12, lineHeight: 1.6 }}>
                  A 45-minute call with a Forge solutions architect. No pitch — just a genuine exploration of your challenge and whether we&apos;re the right fit.
                </p>
                <p style={{ fontSize: 13, color: "var(--nb-ink-dim)" }}>Available Monday–Friday, 9am–6pm EST</p>
              </div>

              <div style={{ padding: "24px 24px", background: "var(--nb-invert)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-brutal)" }}>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--nb-rose)", marginBottom: 16 }}>
                  What happens next
                </p>
                {[
                  { num: "1", text: "We review your inquiry (same business day)" },
                  { num: "2", text: "A solutions architect reaches out to schedule a call" },
                  { num: "3", text: "45-minute discovery call — no pitch" },
                  { num: "4", text: "We send a proposal within 5 business days" },
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < 3 ? 12 : 0 }}>
                    <div style={{
                      width: 22, height: 22, background: "var(--nb-rose)", display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0,
                      fontSize: 11, fontWeight: 800, color: "#fff", borderRadius: "var(--radius)",
                    }}>{step.num}</div>
                    <p style={{ fontSize: 13.5, color: "rgba(250,248,243,0.7)", lineHeight: 1.6 }}>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
