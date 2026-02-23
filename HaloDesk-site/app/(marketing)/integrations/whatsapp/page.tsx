import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, CheckCircle, Globe, Smartphone, Image } from "lucide-react";

export const metadata: Metadata = {
  title: "WhatsApp Integration — HaloDesk",
  description: "Handle WhatsApp Business conversations natively in HaloDesk. Templates, media, quick replies, and full conversation management.",
};

export default function WhatsAppPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>
      <section style={{ padding: "80px 24px 72px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <svg style={{ position: "absolute", right: "6%", top: "8%", width: 360, height: 380, pointerEvents: "none" }} viewBox="0 0 360 380" fill="none">
          <rect x="60" y="20" width="240" height="340" rx="24" fill="#0A1628" stroke="#0A0A0A" strokeWidth="2"/>
          <rect x="70" y="30" width="220" height="320" rx="20" fill="#ECE5DD"/>
          <rect x="70" y="30" width="220" height="52" rx="20" fill="#25D366"/>
          <circle cx="98" cy="56" r="14" fill="rgba(255,255,255,0.3)"/>
          <text x="122" y="52" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">WhatsApp</text>
          <text x="122" y="66" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="sans-serif">Support · Online</text>
          {[
            { text: "My order hasn't arrived", from: "customer", y: 104 },
            { text: "Let me check that for you! 🔍", from: "agent", y: 148 },
            { text: "Order #4829 shipped yesterday via DHL", from: "agent", y: 192 },
            { text: "Tracking: DE124829001 ✓", from: "agent", y: 224 },
            { text: "Thank you so much! 🙏", from: "customer", y: 268 },
          ].map((msg, i) => (
            <g key={i} style={{ animation: `messageSlide 0.5s ${0.3 + i * 0.3}s both` }}>
              <rect
                x={msg.from === "customer" ? 82 : 148}
                y={msg.y}
                width={msg.from === "customer" ? 140 : 120}
                height={32}
                rx="8"
                fill={msg.from === "customer" ? "#fff" : "#DCF8C6"}
                stroke="none"
              />
              <text
                x={msg.from === "customer" ? 92 : 158}
                y={msg.y + 15}
                fill="#0A0A0A" fontSize="8.5" fontFamily="sans-serif"
              >{msg.text.substring(0, 28)}</text>
              {msg.text.length > 28 && <text x={msg.from === "customer" ? 92 : 158} y={msg.y + 26} fill="#0A0A0A" fontSize="8.5" fontFamily="sans-serif">{msg.text.substring(28)}</text>}
            </g>
          ))}
        </svg>
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow anim-fade-up" style={{ background: "#25D366" }}>WhatsApp Integration</div>
            <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.93, marginBottom: 24 }}>
              WhatsApp Business,<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "#25D366" }}>natively managed.</span>
            </h1>
            <p className="anim-fade-up delay-200" style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 36 }}>
              Connect your WhatsApp Business number and manage every conversation from the HaloDesk inbox — with full template support, media messages, and Captain AI automation.
            </p>
            <div className="anim-fade-up delay-300" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Get Started <ArrowRight size={15} /></Link>
              <Link href="/integrations" className="btn-secondary">All Integrations</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40 }}>Everything WhatsApp needs.</h2>
          <div className="cards-3" style={{ gap: 16 }}>
            {[
              { icon: MessageSquare, title: "Two-Way Conversations", desc: "Full inbound and outbound messaging with rich media support — images, videos, documents, and voice notes." },
              { icon: CheckCircle, title: "Message Templates", desc: "Send pre-approved WhatsApp templates for order confirmations, appointment reminders, and proactive outreach." },
              { icon: Globe, title: "Quick Replies", desc: "Interactive quick reply buttons and call-to-action templates for streamlined customer journeys." },
              { icon: Smartphone, title: "Multimedia Support", desc: "Images, PDFs, videos, audio messages, and location sharing — all managed in the HaloDesk inbox." },
              { icon: Image, title: "Captain AI on WhatsApp", desc: "Automate responses to common WhatsApp queries. Captain analyzes and replies in under 2 seconds." },
              { icon: Globe, title: "Multi-Number Support", desc: "Connect multiple WhatsApp Business numbers to separate inboxes for different regions or product lines." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ padding: "28px 24px" }}>
                  <div className="feature-icon" style={{ marginBottom: 16, background: "#25D366" }}><Icon size={18} /></div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--invert" style={{ textAlign: "center" }}>
        <div className="container container--tight">
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", marginBottom: 20 }}>
            Ready to connect WhatsApp?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 36 }}>Talk to our team about your WhatsApp Business setup and volume requirements.</p>
          <Link href="/contact" className="btn-invert">Contact Sales <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
