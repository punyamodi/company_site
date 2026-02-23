"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

const LAST_UPDATED = "June 15, 2025";

const TOC = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "data-storage-security", label: "Data Storage & Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "your-rights", label: "Your Rights" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section dot-grid" style={{ paddingBottom: 64 }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">Legal</span>
            <h1 style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", marginBottom: 12 }}>
              Last updated: <strong>{LAST_UPDATED}</strong>
            </p>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              We believe privacy should be simple and honest. This policy explains exactly what data we collect, why we collect it, and how you can control it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section section--surface" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 64, alignItems: "start" }}>
            {/* TOC sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ position: "sticky", top: 88 }}
            >
              <div className="nb-card" style={{ padding: "24px 20px" }}>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--nb-ink-muted)", marginBottom: 16 }}>Contents</p>
                <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {TOC.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      style={{ fontSize: 13, fontWeight: 600, color: "var(--nb-ink-muted)", textDecoration: "none", padding: "6px 10px", borderRadius: "2px", transition: "background .12s, color .12s", letterSpacing: "-0.01em" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--nb-surface)"; (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--nb-ink-muted)"; }}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ fontSize: 15, lineHeight: 1.8, color: "var(--nb-ink)", maxWidth: 760 }}
            >
              {/* Intro note */}
              <div style={{ padding: "20px 24px", background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", marginBottom: 40 }}>
                <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.7, color: "var(--nb-ink)" }}>
                  <strong>Important architectural note:</strong> InferGate is a self-hosted infrastructure product. Your LLM request payloads — prompts and completions — are processed entirely within your own infrastructure. InferGate&apos;s servers do not receive, store, or process your LLM query content.
                </p>
              </div>

              {/* ── Section 1 ── */}
              <div id="information-we-collect" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  1. Information We Collect
                </h2>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 24 }}>Information you provide to us</h3>
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  <li><strong>Account information:</strong> When you sign up for InferGate or contact us, we collect your name, work email address, company name, job title, and any other information you choose to provide.</li>
                  <li><strong>Communications:</strong> If you contact us by email or through our contact form, we retain the content of those communications and your contact details.</li>
                  <li><strong>Payment information:</strong> For paid plans, billing information is processed by our payment processor (Stripe). We store only a tokenized reference — never raw card numbers.</li>
                </ul>

                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 24 }}>Information collected automatically</h3>
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  <li><strong>Usage data:</strong> When you use our marketing website, we collect standard web analytics data including pages visited, time on site, referring URLs, browser type, and device type.</li>
                  <li><strong>Log data:</strong> Our web servers generate access logs containing IP addresses, request timestamps, HTTP methods, and response codes. These logs are retained for security and debugging purposes.</li>
                  <li><strong>Cookies and tracking:</strong> We use strictly necessary cookies for session management and, with your consent, analytics cookies (Plausible Analytics — privacy-first, no cross-site tracking). We do not use advertising cookies or cross-site tracking pixels.</li>
                </ul>

                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 24 }}>What we do NOT collect</h3>
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li>We do <strong>not</strong> collect or receive the content of your AI requests (prompts, completions, embeddings). These are processed within your own infrastructure.</li>
                  <li>We do <strong>not</strong> collect API keys or credentials stored in your InferGate deployment — these live exclusively in your environment.</li>
                  <li>We do <strong>not</strong> sell, share, or rent your personal information to third parties for their marketing purposes.</li>
                </ul>
              </div>

              {/* ── Section 2 ── */}
              <div id="how-we-use-information" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  2. How We Use Information
                </h2>
                <p style={{ marginBottom: 16 }}>We use the information we collect to:</p>
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  <li><strong>Provide and operate our services:</strong> Process your account registration, handle support requests, send transactional communications (invoices, security alerts, service status updates).</li>
                  <li><strong>Improve our product:</strong> Understand how our website is used so we can make it better. We use aggregated, anonymized analytics for this purpose — never individual behavioral profiling.</li>
                  <li><strong>Communicate with you:</strong> Respond to inquiries, send product updates you have opted in to receive, and notify you of important changes to our terms or security posture.</li>
                  <li><strong>Enforce our policies:</strong> Investigate and act on violations of our Terms of Service and acceptable use policies.</li>
                  <li><strong>Comply with legal obligations:</strong> Respond to lawful requests from authorities where required by applicable law.</li>
                </ul>
                <p style={{ marginTop: 20, color: "var(--nb-ink-muted)" }}>
                  We process your personal data under the following legal bases (GDPR Article 6): performance of a contract (account and service delivery), legitimate interests (product improvement, security), consent (marketing communications, analytics cookies), and legal obligation (compliance with law).
                </p>
              </div>

              {/* ── Section 3 ── */}
              <div id="data-storage-security" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  3. Data Storage &amp; Security
                </h2>
                <p style={{ marginBottom: 16 }}>
                  Personal data collected through our website and communications is stored in the European Union and/or United States, depending on the service provider. We use the following safeguards:
                </p>
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  <li><strong>Encryption in transit:</strong> All data is transmitted over HTTPS/TLS 1.2+. We enforce HSTS and do not allow plaintext connections.</li>
                  <li><strong>Encryption at rest:</strong> Databases containing personal information are encrypted at rest using AES-256.</li>
                  <li><strong>Access controls:</strong> Access to systems containing personal data is restricted by role, requires multi-factor authentication, and is logged for audit purposes.</li>
                  <li><strong>Vendor security:</strong> We evaluate all sub-processors for security posture and require Data Processing Agreements (DPAs) from all vendors handling EU personal data.</li>
                </ul>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  No method of transmission or storage is 100% secure. If you believe your account security has been compromised, contact us immediately at <a href="mailto:security@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>security@getinfergate.ai</a>.
                </p>
              </div>

              {/* ── Section 4 ── */}
              <div id="data-retention" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  4. Data Retention
                </h2>
                <p style={{ marginBottom: 16 }}>
                  We retain personal data for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required by law.
                </p>
                <div style={{ border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", overflow: "hidden", marginBottom: 20 }}>
                  <table className="ig-table">
                    <thead>
                      <tr>
                        <th>Data Type</th>
                        <th>Retention Period</th>
                        <th>Basis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Account information", "Duration of account + 3 years", "Contract performance"],
                        ["Support communications", "3 years from last interaction", "Legitimate interest"],
                        ["Payment records", "7 years", "Legal obligation (tax)"],
                        ["Web analytics (aggregated)", "24 months", "Legitimate interest"],
                        ["Server access logs", "90 days", "Security / debugging"],
                        ["Marketing email opt-in", "Until unsubscribe + 3 years", "Consent"],
                      ].map(([type, period, basis]) => (
                        <tr key={type}>
                          <td style={{ fontWeight: 600 }}>{type}</td>
                          <td>{period}</td>
                          <td style={{ color: "var(--nb-ink-muted)", fontSize: 13 }}>{basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  Upon account deletion, we will delete or anonymize your personal data within 30 days, except where retention is required by law.
                </p>
              </div>

              {/* ── Section 5 ── */}
              <div id="third-party-services" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  5. Third-Party Services
                </h2>
                <p style={{ marginBottom: 20 }}>
                  We work with a limited set of trusted third-party service providers. We only share the minimum data necessary for each service to function.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { name: "Stripe", purpose: "Payment processing", data: "Billing details, transaction records", link: "https://stripe.com/privacy" },
                    { name: "Plausible Analytics", purpose: "Privacy-first web analytics", data: "Aggregated page views, no personal identifiers", link: "https://plausible.io/privacy" },
                    { name: "Vercel", purpose: "Website hosting", data: "IP addresses in access logs (90-day retention)", link: "https://vercel.com/legal/privacy-policy" },
                    { name: "Postmark", purpose: "Transactional email delivery", data: "Email address, email content", link: "https://postmarkapp.com/privacy-policy" },
                  ].map((sp) => (
                    <div key={sp.name} style={{ padding: "16px 20px", border: "2px solid var(--nb-border-faint)", borderRadius: "var(--radius)", background: "var(--nb-bg)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                        <strong style={{ fontSize: 15 }}>{sp.name}</strong>
                        <a href={sp.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "var(--nb-ink-muted)", textDecoration: "underline" }}>Privacy Policy ↗</a>
                      </div>
                      <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", marginBottom: 4 }}><strong>Purpose:</strong> {sp.purpose}</p>
                      <p style={{ fontSize: 13, color: "var(--nb-ink-muted)" }}><strong>Data shared:</strong> {sp.data}</p>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: 20, color: "var(--nb-ink-muted)" }}>
                  We do not use advertising networks, social media tracking pixels, or any third-party behavioral analytics. We do not sell or broker your personal data.
                </p>
              </div>

              {/* ── Section 6 ── */}
              <div id="your-rights" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  6. Your Rights
                </h2>
                <p style={{ marginBottom: 16 }}>
                  Depending on your location, you may have the following rights regarding your personal data. We will respond to all verifiable requests within 30 days.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                  {[
                    { right: "Access", desc: "Request a copy of the personal data we hold about you." },
                    { right: "Rectification", desc: "Request correction of inaccurate or incomplete personal data." },
                    { right: "Erasure", desc: "Request deletion of your personal data (subject to legal retention obligations)." },
                    { right: "Portability", desc: "Receive your data in a structured, machine-readable format." },
                    { right: "Restriction", desc: "Request that we limit processing of your data under certain circumstances." },
                    { right: "Objection", desc: "Object to processing based on legitimate interests or for direct marketing." },
                    { right: "Withdraw consent", desc: "Where processing is based on consent, withdraw it at any time without affecting prior lawful processing." },
                    { right: "Lodge a complaint", desc: "File a complaint with your local data protection authority (e.g., the ICO in the UK, your EU supervisory authority)." },
                  ].map((item) => (
                    <div key={item.right} style={{ padding: "16px", border: "2px solid var(--nb-border-faint)", borderRadius: "var(--radius)", background: "var(--nb-bg)" }}>
                      <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 6, color: "var(--nb-ink)" }}>{item.right}</p>
                      <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  To exercise any of these rights, email us at <a href="mailto:privacy@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>privacy@getinfergate.ai</a>. We may ask you to verify your identity before acting on your request.
                </p>
                <p style={{ marginTop: 16, color: "var(--nb-ink-muted)" }}>
                  <strong>California residents:</strong> Under the CCPA, you have additional rights including the right to know what personal information is collected, the right to know whether it is sold or disclosed (we do not sell personal information), the right to opt out of the sale of personal information (not applicable — we do not sell), and the right to non-discrimination for exercising your CCPA rights.
                </p>
              </div>

              {/* ── Section 7 ── */}
              <div id="contact" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  7. Contact
                </h2>
                <p style={{ marginBottom: 20 }}>
                  Questions, concerns, or requests about this Privacy Policy should be directed to:
                </p>
                <div className="nb-card" style={{ padding: "28px 28px", display: "inline-block", minWidth: 320 }}>
                  <p style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>InferGate Privacy Team</p>
                  <p style={{ color: "var(--nb-ink-muted)", marginBottom: 6 }}>
                    Email: <a href="mailto:privacy@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>privacy@getinfergate.ai</a>
                  </p>
                  <p style={{ color: "var(--nb-ink-muted)" }}>
                    Security issues: <a href="mailto:security@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>security@getinfergate.ai</a>
                  </p>
                </div>
                <p style={{ marginTop: 24, color: "var(--nb-ink-muted)", fontSize: 14 }}>
                  We may update this Privacy Policy from time to time. Material changes will be communicated to registered account holders by email at least 14 days before taking effect. Continued use of InferGate after the effective date constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Related links */}
              <div style={{ paddingTop: 32, borderTop: "2px solid var(--nb-border-faint)", display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/legal/terms" className="btn-secondary" style={{ fontSize: 13, padding: "10px 18px" }}>
                  Terms of Service <ArrowRight size={12} />
                </Link>
                <Link href="/trust" className="btn-secondary" style={{ fontSize: 13, padding: "10px 18px" }}>
                  Trust &amp; Security <ArrowRight size={12} />
                </Link>
                <a href="mailto:privacy@getinfergate.ai" className="btn-secondary" style={{ fontSize: 13, padding: "10px 18px" }}>
                  <Mail size={12} /> Privacy questions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
