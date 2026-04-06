import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageSquare, Lightbulb, Users, Zap, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start your project with AI Platform Agency - web apps, mobile, AI agents, e-commerce, and more. We respond within one business day.",
};

const REASONS = [
  { icon: Lightbulb, title: "Project Scoping & Consultation", desc: "Not sure what you need? We'll help you define the right scope, tech stack, and approach." },
  { icon: Zap,       title: "Custom AI Agent or Chatbot",     desc: "Need an intelligent assistant or automated workflow built for your specific business." },
  { icon: Users,     title: "Dedicated Engineering Team",     desc: "Scale up with a full dedicated team — developers, designer, and PM — embedded in your org." },
  { icon: MessageSquare, title: "Partnership or Reselling",  desc: "White-label delivery or referral partnerships for agencies and consultancies." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="grid-bg" />
        <div className="container--narrow" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex" }}>Contact</div>
          <h1 style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.045em", marginBottom: 20, lineHeight: 1 }}>
            Let{"'"}s build something{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>great together.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 560, marginBottom: 48 }}>
            Whether you have a complete brief or an early concept, reach out. We respond within one business day with recommended next steps.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container--narrow hub-arch-grid" style={{ gap: 64, alignItems: "start" }}>
          <ContactForm />

          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24 }}>Why people reach out</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {REASONS.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                      <Icon size={18} color="var(--nb-ink)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>{r.title}</h4>
                      <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ padding: 24, background: "var(--nb-surface)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", marginBottom: 16 }}>
              <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink-muted)", marginBottom: 16 }}>Get In Touch</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="mailto:hello@aiplatform.io" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", fontSize: 14, fontWeight: 600, color: "var(--nb-ink)" }}>
                  <Mail size={15} color="var(--nb-ink-muted)" /> hello@aiplatform.io
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>
                  <Phone size={15} color="var(--nb-ink-muted)" /> Discovery calls available by appointment
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--nb-ink-muted)" }}>
                  <MapPin size={15} color="var(--nb-ink-muted)" /> Remote-first agency
                </div>
              </div>
            </div>

            <div style={{ padding: "14px 18px", background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", marginBottom: 12 }}>
              <p style={{ fontSize: 13.5, fontWeight: 700, color: "var(--nb-ink)", lineHeight: 1.55 }}>
                ⚡ For enterprise or dedicated team enquiries, see our{" "}
                <a href={`${BASE}/enterprise/`} style={{ textDecoration: "underline", color: "var(--nb-ink)" }}>Enterprise page</a> for more details.
              </p>
            </div>
            <p style={{ fontSize: 13, color: "var(--nb-ink-dim)", lineHeight: 1.6 }}>
              Need fast answers first? See our{" "}
              <a href={`${BASE}/faq/`} style={{ color: "var(--nb-ink)", textDecoration: "underline", fontWeight: 700 }}>FAQ</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

