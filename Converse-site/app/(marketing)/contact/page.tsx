import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Building2,
  User,
  MessageSquare,
  ArrowRight,
  Clock,
  Monitor,
  Handshake,
  Newspaper,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const ROLES = [
  "VP / Director of Engineering",
  "CTO / Head of Technology",
  "Product Manager",
  "Solutions Architect",
  "ML / AI Engineer",
  "Software Engineer",
  "Business Development",
  "Other",
];

const USE_CASES = [
  "Customer service voice agent",
  "IVR modernization",
  "Voice assistant / companion",
  "Internal productivity bot",
  "Healthcare voice application",
  "Financial services automation",
  "Contact center AI",
  "Other",
];

const RESPONSE_INFO = [
  { icon: Clock, title: "Response within 1 business day", description: "Sales inquiries receive a response from a human team member within one business day." },
  { icon: Monitor, title: "Live demo available", description: "We offer a 30-minute live demo of a production pipeline tuned to your use case." },
  { icon: CheckCircle, title: "No-obligation evaluation", description: "All initial conversations are exploratory. No commitment required to see the product." },
];

const CONTACT_TYPES = [
  {
    icon: Handshake,
    title: "Enterprise Sales",
    description: "Evaluating Converse for a production deployment? Our solutions engineers are ready to help scope your use case.",
    action: "sales@converse.ai",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "ISV partners, system integrators, and technology alliances. Explore building with Converse in your platform.",
    action: "partnerships@converse.ai",
  },
  {
    icon: Newspaper,
    title: "Press & Analyst Relations",
    description: "Media inquiries, analyst briefings, and speaking engagements. Our comms team responds within 24 hours.",
    action: "press@converse.ai",
  },
];

export const metadata: Metadata = {
  title: "Contact | Converse",
  description: "Get in touch with the Converse team for sales, support, or partnership inquiries.",
  openGraph: {
    title: "Contact | Converse",
    description: "Get in touch with the Converse team for sales, support, or partnership inquiries.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative", maxWidth: "640px" }}>
            <span className="eyebrow anim-fade-up">Contact Sales</span>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}
            >
              Let's talk about your{" "}
              <span style={{ color: "var(--nb-violet)" }}>voice AI infrastructure.</span>
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ fontSize: "1.1rem", marginTop: "1.5rem", lineHeight: 1.7, opacity: 0.8 }}
            >
              Tell us about your use case. A solutions engineer will reach out within one business day
              to schedule a technical conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section section--surface" style={{ paddingTop: "0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", alignItems: "flex-start" }}>

            {/* Contact Form */}
            <div>
              <div className="nb-card" style={{ padding: "2.5rem" }}>
                <h2 style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "0.5rem" }}>Request a conversation</h2>
                <p style={{ opacity: 0.65, fontSize: "0.9rem", marginBottom: "2rem" }}>
                  All fields marked with * are required.
                </p>
                <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} action="/contact" method="POST">
                  {/* Name + Company */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                        <User size={13} style={{ display: "inline", marginRight: "0.4rem" }} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Jane Smith"
                        style={{
                          width: "100%",
                          border: "2px solid #000",
                          padding: "0.65rem 0.85rem",
                          fontSize: "0.95rem",
                          background: "#fff",
                          outline: "none",
                          boxSizing: "border-box",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                        <Building2 size={13} style={{ display: "inline", marginRight: "0.4rem" }} />
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="Acme Corp"
                        style={{
                          width: "100%",
                          border: "2px solid #000",
                          padding: "0.65rem 0.85rem",
                          fontSize: "0.95rem",
                          background: "#fff",
                          outline: "none",
                          boxSizing: "border-box",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                      <Mail size={13} style={{ display: "inline", marginRight: "0.4rem" }} />
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@acmecorp.com"
                      style={{
                        width: "100%",
                        border: "2px solid #000",
                        padding: "0.65rem 0.85rem",
                        fontSize: "0.95rem",
                        background: "#fff",
                        outline: "none",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label style={{ display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                      <User size={13} style={{ display: "inline", marginRight: "0.4rem" }} />
                      Your Role *
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        name="role"
                        required
                        style={{
                          width: "100%",
                          border: "2px solid #000",
                          padding: "0.65rem 2.5rem 0.65rem 0.85rem",
                          fontSize: "0.95rem",
                          background: "#fff",
                          outline: "none",
                          appearance: "none",
                          boxSizing: "border-box",
                          fontFamily: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <option value="">Select your role</option>
                        {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                      <ChevronDown size={16} style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                    </div>
                  </div>

                  {/* Primary Use Case */}
                  <div>
                    <label style={{ display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                      Primary Use Case *
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        name="use_case_type"
                        required
                        style={{
                          width: "100%",
                          border: "2px solid #000",
                          padding: "0.65rem 2.5rem 0.65rem 0.85rem",
                          fontSize: "0.95rem",
                          background: "#fff",
                          outline: "none",
                          appearance: "none",
                          boxSizing: "border-box",
                          fontFamily: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <option value="">Select use case</option>
                        {USE_CASES.map((u) => <option key={u} value={u}>{u}</option>)}
                      </select>
                      <ChevronDown size={16} style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                    </div>
                  </div>

                  {/* Use Case Description */}
                  <div>
                    <label style={{ display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                      <MessageSquare size={13} style={{ display: "inline", marginRight: "0.4rem" }} />
                      Tell us about your use case *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your use case, current architecture, expected call volume, and any specific requirements (latency, compliance, deployment model, etc.)."
                      style={{
                        width: "100%",
                        border: "2px solid #000",
                        padding: "0.65rem 0.85rem",
                        fontSize: "0.95rem",
                        background: "#fff",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                        lineHeight: 1.6,
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "1rem", padding: "0.9rem 1.5rem", cursor: "pointer", border: "none", width: "100%" }}
                  >
                    Send Message
                    <ArrowRight size={16} />
                  </button>

                  <p style={{ fontSize: "0.78rem", opacity: 0.55, textAlign: "center" }}>
                    By submitting this form you agree to our privacy policy. We do not sell your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Right sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Response info */}
              <div className="nb-card">
                <h3 style={{ fontWeight: 900, fontSize: "1.05rem", marginBottom: "1.25rem" }}>What happens next</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {RESPONSE_INFO.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <Icon size={17} color="var(--nb-violet)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>{item.title}</div>
                          <div style={{ opacity: 0.65, fontSize: "0.83rem", lineHeight: 1.55, marginTop: "0.2rem" }}>{item.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Demo options */}
              <div className="nb-card" style={{ background: "#7C3AED", border: "2px solid #000", boxShadow: "4px 4px 0 #000" }}>
                <h3 style={{ fontWeight: 900, fontSize: "1.05rem", color: "#fff", marginBottom: "0.75rem" }}>Request a live demo</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  See a production pipeline running live — STT, LLM, and TTS composing in under 100ms.
                  Tailored to your industry and use case.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {["30-minute technical walkthrough", "Your use case, our pipeline", "Q&A with a solutions engineer"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle size={13} color="#fff" />
                      <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.83rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other contact types */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {CONTACT_TYPES.map((ct) => {
                  const Icon = ct.icon;
                  return (
                    <div key={ct.title} className="nb-card" style={{ padding: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                        <Icon size={15} color="var(--nb-violet)" />
                        <span style={{ fontWeight: 800, fontSize: "0.88rem" }}>{ct.title}</span>
                      </div>
                      <p style={{ opacity: 0.65, fontSize: "0.8rem", lineHeight: 1.55, marginBottom: "0.4rem" }}>{ct.description}</p>
                      <span style={{ fontSize: "0.78rem", color: "var(--nb-violet)", fontWeight: 700 }}>{ct.action}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
