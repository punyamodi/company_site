"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Building2, Mail, User, MessageSquare, ChevronDown } from "lucide-react";

const USE_CASES = ["Enterprise AI deployment", "Security & compliance review", "Specific team solution", "Custom integration requirements", "Technical evaluation / POC", "Partnership inquiry"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", useCase: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="eyebrow">Contact Sales</div>
              <h1 style={{ fontSize: "clamp(36px,4.5vw,64px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 24 }}>
                Let's talk about<br /><span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>your deployment.</span>
              </h1>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 40 }}>
                Our team works with enterprise organizations to design deployments that match your security requirements, data architecture, and team workflows.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { icon: Building2, title: "What to expect", desc: "An initial 30-minute call with a solutions engineer to understand your requirements and share a deployment recommendation." },
                  { icon: Mail, title: "Response time", desc: "Our enterprise team responds to all inquiries within one business day." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-amber)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={20} color="var(--nb-ink)" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {submitted ? (
                <div className="nb-card" style={{ padding: 48, textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "var(--radius)", background: "var(--nb-teal)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <ArrowRight size={28} color="#fff" />
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 12 }}>Message received.</h2>
                  <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                    Our enterprise team will be in touch within one business day. Thank you for your interest in Onyx.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="nb-card" style={{ padding: 40, display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.03em" }}>Tell us about your organization</div>

                  {[
                    { id: "name", label: "Full Name", icon: User, placeholder: "Jane Smith", type: "text" },
                    { id: "company", label: "Company", icon: Building2, placeholder: "Acme Corporation", type: "text" },
                    { id: "email", label: "Work Email", icon: Mail, placeholder: "jane@acme.com", type: "email" },
                  ].map((field) => {
                    const Icon = field.icon;
                    return (
                      <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 13, fontWeight: 700 }}>{field.label}</label>
                        <div style={{ position: "relative" }}>
                          <Icon size={15} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--nb-ink-muted)" }} />
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            value={(formData as Record<string, string>)[field.id]}
                            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                            style={{ width: "100%", padding: "10px 12px 10px 36px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, background: "var(--nb-bg)", boxSizing: "border-box", fontFamily: "inherit" }}
                          />
                        </div>
                      </div>
                    );
                  })}

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 700 }}>Primary Use Case</label>
                    <div style={{ position: "relative" }}>
                      <select
                        required
                        value={formData.useCase}
                        onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                        style={{ width: "100%", padding: "10px 36px 10px 12px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, background: "var(--nb-bg)", appearance: "none", fontFamily: "inherit", boxSizing: "border-box" }}>
                        <option value="">Select a use case</option>
                        {USE_CASES.map((uc) => <option key={uc} value={uc}>{uc}</option>)}
                      </select>
                      <ChevronDown size={14} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 700 }}>
                      <MessageSquare size={13} style={{ marginRight: 6, verticalAlign: "middle" }} />
                      Tell us more (optional)
                    </label>
                    <textarea
                      placeholder="Describe your deployment requirements, team size, or specific questions..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, background: "var(--nb-bg)", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", border: "none", cursor: "pointer" }}>
                    Submit <ArrowRight size={15} />
                  </button>

                  <p style={{ fontSize: 11.5, color: "var(--nb-ink-muted)", textAlign: "center", lineHeight: 1.6 }}>
                    By submitting, you agree to our <a href="/legal/privacy" style={{ color: "var(--nb-teal)" }}>Privacy Policy</a> and <a href="/legal/terms" style={{ color: "var(--nb-teal)" }}>Terms of Service</a>.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
