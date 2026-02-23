import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Inbox, GitBranch, FileText, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Email Integration — HaloDesk",
  description: "Turn any email address into a powerful support inbox. Full threading, HTML templates, IMAP/SMTP, and AI automation.",
};

export default function EmailPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>
      <section style={{ padding: "80px 24px 72px", borderBottom: "2px solid var(--nb-border)", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1264, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow anim-fade-up" style={{ background: "var(--nb-amber)", color: "var(--nb-ink)" }}>Email Integration</div>
            <h1 className="anim-fade-up delay-100" style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, letterSpacing: "-0.048em", lineHeight: 0.93, marginBottom: 24 }}>
              Email support,<br />
              <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300, color: "var(--nb-teal)" }}>reimagined.</span>
            </h1>
            <p className="anim-fade-up delay-200" style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.72, marginBottom: 36 }}>
              Connect any email address and transform your inbox into a collaborative support workspace. Shared inbox, conversation threading, HTML templates, and full automation — no shared passwords, no chaos.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Sales <ArrowRight size={15} /></Link>
              <Link href="/integrations" className="btn-secondary">All Integrations</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-3" style={{ gap: 16 }}>
            {[
              { icon: Inbox, title: "Shared Team Inbox", desc: "Multiple agents collaborate on the same email inbox. See who's viewing, replying, or assigned to each email." },
              { icon: GitBranch, title: "Email Threading", desc: "Full thread management. Reply-all, CC/BCC, and inline quoting — exactly as customers expect." },
              { icon: FileText, title: "HTML Email Templates", desc: "Design branded email templates with dynamic fields. Use canned responses for faster, consistent replies." },
              { icon: Mail, title: "IMAP / SMTP Support", desc: "Connect your own IMAP/SMTP server or use HaloDesk's built-in email infrastructure with custom domains." },
              { icon: Users, title: "Auto-Assignment", desc: "Route emails automatically by sender domain, subject keywords, or custom rules to the right team or agent." },
              { icon: GitBranch, title: "Email Transcripts", desc: "Send automated conversation transcripts at resolution. Automation action: send_email_transcript." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card" style={{ padding: "28px 24px" }}>
                  <div className="feature-icon" style={{ marginBottom: 16, background: "var(--nb-amber)" }}><Icon size={18} /></div>
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
            Transform your email support.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 36 }}>Set up your email inbox in minutes. Talk to our team to get started.</p>
          <Link href="/contact" className="btn-invert">Contact Sales <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
