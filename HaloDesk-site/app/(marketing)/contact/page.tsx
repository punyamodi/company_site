import type { Metadata } from "next";
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Sales — HaloDesk",
  description: "Get in touch with the HaloDesk enterprise sales team. We'll scope a deployment matched to your organization's requirements.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "88px 24px 72px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }}/>
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "flex-start" }}>
            <div>
              <div className="eyebrow anim-fade-up">Contact Sales</div>
              <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(44px,5.5vw,80px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.92, marginBottom: 28 }}>
                Let&apos;s talk about<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>your support ops.</span>
              </h1>
              <p className="anim-fade-up delay-200" style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginBottom: 40 }}>
                No automated sequences. A real conversation with our enterprise team about your workflows, requirements, and how HaloDesk fits.
              </p>
              <div className="anim-fade-up delay-300" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", background: "var(--nb-surface)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)" }}>
                  <div className="feature-icon"><Mail size={16}/></div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--nb-ink-muted)", marginBottom: 2 }}>EMAIL</div>
                    <div style={{ fontSize: 14, fontWeight: 800 }}>enterprise@halodesk.io</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", background: "var(--nb-surface)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)" }}>
                  <div className="feature-icon"><MessageSquare size={16}/></div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--nb-ink-muted)", marginBottom: 2 }}>LIVE CHAT</div>
                    <div style={{ fontSize: 14, fontWeight: 800 }}>Available weekdays, 09:00–18:00 UTC</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", background: "var(--nb-surface)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)" }}>
                  <div className="feature-icon"><Phone size={16}/></div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--nb-ink-muted)", marginBottom: 2 }}>SCHEDULE A CALL</div>
                    <div style={{ fontSize: 14, fontWeight: 800 }}>30-min discovery call — no pitch deck</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div style={{ background: "var(--nb-surface)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", padding: "40px 36px" }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 8 }}>Get in touch</h2>
              <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.6, marginBottom: 28 }}>We respond to all enterprise enquiries within one business day.</p>

              <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 11.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6, color: "var(--nb-ink)" }}>First Name</label>
                    <input type="text" placeholder="Jane" style={{ width: "100%", padding: "11px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, fontFamily: "inherit", background: "var(--nb-bg)", color: "var(--nb-ink)", outline: "none", boxSizing: "border-box" }}/>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Last Name</label>
                    <input type="text" placeholder="Smith" style={{ width: "100%", padding: "11px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, fontFamily: "inherit", background: "var(--nb-bg)", color: "var(--nb-ink)", outline: "none", boxSizing: "border-box" }}/>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Work Email</label>
                  <input type="email" placeholder="jane@company.com" style={{ width: "100%", padding: "11px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, fontFamily: "inherit", background: "var(--nb-bg)", color: "var(--nb-ink)", outline: "none", boxSizing: "border-box" }}/>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Company</label>
                  <input type="text" placeholder="Acme Corp" style={{ width: "100%", padding: "11px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, fontFamily: "inherit", background: "var(--nb-bg)", color: "var(--nb-ink)", outline: "none", boxSizing: "border-box" }}/>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Team Size</label>
                  <select style={{ width: "100%", padding: "11px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, fontFamily: "inherit", background: "var(--nb-bg)", color: "var(--nb-ink)", outline: "none", appearance: "none" }}>
                    <option value="">Select team size</option>
                    <option value="1-10">1–10 agents</option>
                    <option value="11-50">11–50 agents</option>
                    <option value="51-200">51–200 agents</option>
                    <option value="200+">200+ agents</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Primary Use Case</label>
                  <select style={{ width: "100%", padding: "11px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, fontFamily: "inherit", background: "var(--nb-bg)", color: "var(--nb-ink)", outline: "none", appearance: "none" }}>
                    <option value="">Select use case</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="customer-success">Customer Success</option>
                    <option value="internal-helpdesk">Internal Helpdesk</option>
                    <option value="ecommerce">E-Commerce Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>What Are You Looking to Solve?</label>
                  <textarea placeholder="Tell us about your current support setup and what you'd like to improve..." rows={4} style={{ width: "100%", padding: "11px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 14, fontFamily: "inherit", background: "var(--nb-bg)", color: "var(--nb-ink)", outline: "none", resize: "vertical", boxSizing: "border-box" }}/>
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", cursor: "pointer" }}>
                  Send to Enterprise Sales <ArrowRight size={16} />
                </button>

                <p style={{ fontSize: 11.5, color: "var(--nb-ink-muted)", textAlign: "center", lineHeight: 1.6 }}>
                  By submitting this form you agree to our Privacy Policy. We won&apos;t add you to marketing lists without your explicit consent.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section">
        <div className="container">
          <p className="section-label" style={{ textAlign: "center" }}>What Happens Next</p>
          <h2 style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", textAlign: "center", marginBottom: 48, lineHeight: 1.05 }}>
            From first contact to<br />
            <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>live deployment.</span>
          </h2>
          <div className="cards-4" style={{ gap: 16 }}>
            {[
              { step: "01", title: "Discovery Call", desc: "A 30-minute conversation with an enterprise sales engineer to understand your team structure, channels, and current pain points." },
              { step: "02", title: "Requirements Mapping", desc: "We document your routing logic, compliance requirements, integration needs, and SLA expectations — no assumptions." },
              { step: "03", title: "Scoped Proposal", desc: "A proposal tailored to your requirements: features, implementation support, SLA commitments, and data processing terms." },
              { step: "04", title: "Guided Onboarding", desc: "A dedicated implementation engineer configures HaloDesk to match your workflows before you go live." },
            ].map((s) => (
              <div key={s.step} className="nb-card" style={{ padding: "28px 24px" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "var(--nb-teal)", opacity: 0.4, lineHeight: 1, marginBottom: 16, fontFamily: "var(--font-fraunces, serif)" }}>{s.step}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.72 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--surface">
        <div className="container container--tight">
          <p className="section-label" style={{ textAlign: "center" }}>Common Questions</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", textAlign: "center", marginBottom: 48 }}>Before you reach out.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { q: "How long does implementation typically take?", a: "Most enterprise deployments are live within 2–4 weeks. Complex multi-region setups or deep CRM integrations may take 6–8 weeks. Your implementation engineer will give you a realistic timeline based on your specific requirements." },
              { q: "Can we trial HaloDesk before committing?", a: "Enterprise pilots are available on request. We'll configure a sandboxed environment with your actual channels and routing rules so your team can evaluate the platform under real conditions." },
              { q: "What channels are available on day one?", a: "All 11 channels are available in the standard platform: Live Chat, Email, WhatsApp, Facebook Messenger, Instagram, X (formerly Twitter), Telegram, Line, SMS, Voice, and API. Custom channels can be added via the API integration." },
              { q: "Is there a minimum contract term?", a: "Enterprise contracts are typically structured as annual agreements. Multi-year options are available and may include additional commitments around implementation support and product roadmap access." },
              { q: "What data residency options are available?", a: "HaloDesk supports regional data residency for enterprise contracts. Talk to our sales team about your specific data sovereignty or residency requirements." },
            ].map((faq, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--nb-border-faint)", padding: "20px 0" }}>
                <summary style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <span style={{ fontSize: 20, color: "var(--nb-teal)", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.75, marginTop: 12, maxWidth: 700 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
