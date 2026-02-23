"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

const LAST_UPDATED = "June 15, 2025";
const EFFECTIVE_DATE = "June 15, 2025";

const TOC = [
  { id: "acceptance-of-terms", label: "Acceptance of Terms" },
  { id: "license-grant", label: "License Grant" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "data-and-privacy", label: "Data & Privacy" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section dot-grid" style={{ paddingBottom: 64 }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">Legal</span>
            <h1 style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", marginBottom: 8 }}>
              Last updated: <strong>{LAST_UPDATED}</strong> · Effective: <strong>{EFFECTIVE_DATE}</strong>
            </p>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              These terms govern your use of InferGate software and services. Please read them carefully.
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
              {/* Agreement callout */}
              <div style={{ padding: "20px 24px", background: "var(--nb-surface)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", marginBottom: 40 }}>
                <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.7, color: "var(--nb-ink-muted)" }}>
                  These Terms of Service (&quot;Terms&quot;) constitute a binding legal agreement between you and InferGate (&quot;InferGate,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of InferGate software, services, and website. By accessing or using InferGate, you agree to be bound by these Terms.
                </p>
              </div>

              {/* ── Section 1 ── */}
              <div id="acceptance-of-terms" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  1. Acceptance of Terms
                </h2>
                <p style={{ marginBottom: 16 }}>
                  By creating an account, downloading InferGate software, or using any InferGate service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated by reference.
                </p>
                <p style={{ marginBottom: 16 }}>
                  If you are accepting these Terms on behalf of an organization, company, or other legal entity (collectively, &quot;Organization&quot;), you represent and warrant that you have the authority to bind that Organization to these Terms. In that case, &quot;you&quot; and &quot;your&quot; will refer to that Organization.
                </p>
                <p style={{ marginBottom: 16 }}>
                  If you do not agree to these Terms, you may not access or use InferGate. If you are under 18 years of age, you may not use InferGate.
                </p>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  <strong>Changes to Terms:</strong> We reserve the right to modify these Terms at any time. Material changes will be communicated by email to registered account holders at least 14 days before taking effect. Your continued use after the effective date of changes constitutes your acceptance of the revised Terms. If you do not agree to modified Terms, you must stop using InferGate before the effective date.
                </p>
              </div>

              {/* ── Section 2 ── */}
              <div id="license-grant" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  2. License Grant
                </h2>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Software license</h3>
                <p style={{ marginBottom: 16 }}>
                  Subject to your compliance with these Terms and payment of applicable fees, InferGate grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install, access, and use the InferGate software and services solely for your internal business purposes during the applicable subscription term.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>License restrictions</h3>
                <p style={{ marginBottom: 12 }}>You may not:</p>
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                  <li>Copy, modify, distribute, sell, or sublicense InferGate software except as expressly permitted by these Terms or a separate written agreement with InferGate.</li>
                  <li>Reverse engineer, decompile, disassemble, or attempt to extract source code from InferGate, except where such restriction is prohibited by applicable law.</li>
                  <li>Remove, obscure, or alter any proprietary notices (including copyright and trademark notices) in or on InferGate.</li>
                  <li>Use InferGate to develop a product or service that competes with InferGate without prior written consent.</li>
                  <li>Transfer, assign, or sublicense your rights under these Terms without InferGate&apos;s prior written approval, except as part of a merger, acquisition, or sale of all or substantially all of your assets.</li>
                </ul>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Open source components</h3>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  InferGate may incorporate open source software components, each subject to its own license terms. Nothing in these Terms limits your rights under applicable open source licenses, nor grants you rights that supersede those licenses.
                </p>
              </div>

              {/* ── Section 3 ── */}
              <div id="acceptable-use" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  3. Acceptable Use
                </h2>
                <p style={{ marginBottom: 16 }}>
                  InferGate is designed for legitimate enterprise use of AI services. You agree to use InferGate only for lawful purposes and in a manner consistent with these Terms.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>You agree not to use InferGate to:</h3>
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  <li>Violate any applicable local, state, national, or international law or regulation.</li>
                  <li>Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
                  <li>Generate or distribute malware, viruses, worms, spyware, or any other malicious code.</li>
                  <li>Engage in unauthorized access to computer systems, networks, or data (including but not limited to hacking, phishing, or credential stuffing).</li>
                  <li>Conduct denial-of-service attacks, network flooding, or other activities intended to disrupt service availability.</li>
                  <li>Circumvent, disable, or interfere with security-related features of InferGate or the AI providers it connects to.</li>
                  <li>Use InferGate to automate the generation of spam, unsolicited communications, or content designed to mislead or defraud.</li>
                  <li>Violate the terms of service of any AI provider accessed through InferGate (including OpenAI, Anthropic, Google, Amazon, and others).</li>
                  <li>Use InferGate to process data in violation of applicable privacy laws, including GDPR, HIPAA, CCPA, or equivalent regulations, without appropriate safeguards and agreements.</li>
                </ul>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  InferGate reserves the right to investigate and, where appropriate, suspend or terminate accounts that are in violation of these acceptable use provisions. We may also report violations to appropriate law enforcement authorities.
                </p>
              </div>

              {/* ── Section 4 ── */}
              <div id="data-and-privacy" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  4. Data &amp; Privacy
                </h2>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Your data ownership</h3>
                <p style={{ marginBottom: 16 }}>
                  You retain all right, title, and interest in and to the data you process through InferGate (&quot;Customer Data&quot;). We do not claim any ownership over Customer Data. You are solely responsible for ensuring that your use of InferGate to process Customer Data complies with all applicable laws.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Infrastructure architecture</h3>
                <p style={{ marginBottom: 16 }}>
                  InferGate operates as a self-hosted gateway within your own infrastructure. Your LLM request and response payloads are not transmitted to or stored on InferGate&apos;s servers. InferGate&apos;s servers process only account management, billing, and product analytics data as described in our Privacy Policy.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>AI provider terms</h3>
                <p style={{ marginBottom: 16 }}>
                  When you use InferGate to connect to third-party AI providers (such as OpenAI, Anthropic, Google, or Amazon), your use of those providers is also subject to their respective terms of service and privacy policies. InferGate is not responsible for the practices or policies of third-party AI providers.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Data Processing Agreement</h3>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  Enterprise customers who require a Data Processing Agreement (DPA) for GDPR compliance may request one by contacting <a href="mailto:privacy@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>privacy@getinfergate.ai</a>. Our Privacy Policy governs the collection and use of account-level personal data.
                </p>
              </div>

              {/* ── Section 5 ── */}
              <div id="intellectual-property" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  5. Intellectual Property
                </h2>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>InferGate intellectual property</h3>
                <p style={{ marginBottom: 16 }}>
                  InferGate and its licensors retain all right, title, and interest in and to InferGate software, services, website, trademarks, logos, and all related intellectual property. These Terms do not grant you any rights in InferGate&apos;s intellectual property except for the limited license expressly set forth in Section 2.
                </p>
                <p style={{ marginBottom: 16 }}>
                  &quot;InferGate,&quot; the InferGate logo, and related marks are trademarks of InferGate. You may not use these marks without our prior written permission, except as necessary to truthfully identify InferGate as the provider of the software you are using (e.g., in internal documentation).
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Feedback</h3>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  If you provide InferGate with any feedback, suggestions, or ideas regarding InferGate (&quot;Feedback&quot;), you grant InferGate a worldwide, perpetual, irrevocable, royalty-free license to use, incorporate, and commercialize that Feedback in any manner without restriction and without obligation to you. We are not obligated to implement any Feedback.
                </p>
              </div>

              {/* ── Section 6 ── */}
              <div id="limitation-of-liability" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  6. Limitation of Liability
                </h2>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Disclaimer of warranties</h3>
                <p style={{ marginBottom: 16, color: "var(--nb-ink-muted)" }}>
                  INFERGATE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INFERGATE EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE IN TRADE.
                </p>
                <p style={{ marginBottom: 16, color: "var(--nb-ink-muted)" }}>
                  WE DO NOT WARRANT THAT INFERGATE WILL BE UNINTERRUPTED, ERROR-FREE, COMPLETELY SECURE, OR THAT ANY DEFECTS WILL BE CORRECTED. YOU USE INFERGATE AT YOUR OWN RISK.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Limitation of liability</h3>
                <p style={{ marginBottom: 16, color: "var(--nb-ink-muted)" }}>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL INFERGATE, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF DATA, LOSS OF GOODWILL, BUSINESS INTERRUPTION, OR COST OF SUBSTITUTE GOODS OR SERVICES.
                </p>
                <p style={{ color: "var(--nb-ink-muted)" }}>
                  IN ANY CASE, INFERGATE&apos;S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF INFERGATE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO INFERGATE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100). THE EXISTENCE OF MORE THAN ONE CLAIM WILL NOT ENLARGE THIS LIMIT.
                </p>
                <p style={{ marginTop: 16, fontSize: 14, color: "var(--nb-ink-muted)" }}>
                  Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, the above limitations may not apply to you to the extent prohibited by law.
                </p>
              </div>

              {/* ── Section 7 ── */}
              <div id="governing-law" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  7. Governing Law
                </h2>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Governing law and jurisdiction</h3>
                <p style={{ marginBottom: 16 }}>
                  These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles. You and InferGate agree to submit to the exclusive personal jurisdiction of the state and federal courts located in Delaware for the resolution of any disputes arising out of or relating to these Terms or your use of InferGate.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Dispute resolution</h3>
                <p style={{ marginBottom: 16 }}>
                  Before filing a formal legal claim, you agree to contact InferGate at <a href="mailto:legal@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>legal@getinfergate.ai</a> and attempt to resolve the dispute informally for at least 30 days.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, marginTop: 20 }}>Miscellaneous</h3>
                <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li><strong>Entire agreement:</strong> These Terms, together with the Privacy Policy and any applicable Order Form or Enterprise Agreement, constitute the entire agreement between you and InferGate regarding InferGate.</li>
                  <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will remain in full force.</li>
                  <li><strong>Waiver:</strong> InferGate&apos;s failure to exercise or enforce any right or provision of these Terms does not constitute a waiver of that right or provision.</li>
                  <li><strong>Assignment:</strong> You may not assign your rights or obligations under these Terms without our prior written consent. InferGate may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets.</li>
                  <li><strong>Force majeure:</strong> Neither party will be liable for delays or failures in performance resulting from causes beyond their reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or Internet outages.</li>
                </ul>
              </div>

              {/* ── Section 8 ── */}
              <div id="contact" style={{ marginBottom: 48, scrollMarginTop: 88 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid var(--nb-border-faint)" }}>
                  8. Contact
                </h2>
                <p style={{ marginBottom: 20 }}>
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="nb-card" style={{ padding: "28px 28px", display: "inline-block", minWidth: 320 }}>
                  <p style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>InferGate Legal</p>
                  <p style={{ color: "var(--nb-ink-muted)", marginBottom: 6 }}>
                    General inquiries: <a href="mailto:legal@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>legal@getinfergate.ai</a>
                  </p>
                  <p style={{ color: "var(--nb-ink-muted)", marginBottom: 6 }}>
                    Enterprise &amp; sales: <a href="mailto:enterprise@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>enterprise@getinfergate.ai</a>
                  </p>
                  <p style={{ color: "var(--nb-ink-muted)" }}>
                    Privacy matters: <a href="mailto:privacy@getinfergate.ai" style={{ color: "var(--nb-ink)", fontWeight: 700 }}>privacy@getinfergate.ai</a>
                  </p>
                </div>
              </div>

              {/* Related links */}
              <div style={{ paddingTop: 32, borderTop: "2px solid var(--nb-border-faint)", display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/legal/privacy" className="btn-secondary" style={{ fontSize: 13, padding: "10px 18px" }}>
                  Privacy Policy <ArrowRight size={12} />
                </Link>
                <Link href="/trust" className="btn-secondary" style={{ fontSize: 13, padding: "10px 18px" }}>
                  Trust &amp; Security <ArrowRight size={12} />
                </Link>
                <a href="mailto:legal@getinfergate.ai" className="btn-secondary" style={{ fontSize: 13, padding: "10px 18px" }}>
                  <Mail size={12} /> Legal questions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
