import Link from "next/link";
import {
  Stethoscope,
  ShieldCheck,
  Lock,
  FileText,
  CalendarCheck,
  Pill,
  PhoneCall,
  ClipboardList,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title: "Healthcare Voice AI | Converse – HIPAA-Ready Patient Automation",
  description:
    "Deploy HIPAA-aligned voice AI for patient intake, appointment scheduling, medication reminders, and clinical documentation with Converse's secure real-time pipeline.",
};

const complianceChecklist = [
  { item: "End-to-end encrypted transport (TLS/DTLS)", status: "ready" },
  { item: "PHI data handling with configurable retention policies", status: "ready" },
  { item: "Data residency controls — keep PHI in your region", status: "ready" },
  { item: "Comprehensive audit logs via OpenTelemetry", status: "ready" },
  { item: "Role-based access controls for conversation data", status: "ready" },
  { item: "Business Associate Agreement (BAA) support", status: "ready" },
  { item: "On-premises deployment option (no cloud PHI egress)", status: "ready" },
  { item: "De-identification pipeline for analytics datasets", status: "ready" },
];

const useCases = [
  { icon: ClipboardList, title: "Patient Intake Voice Bots", description: "Collect symptoms, medical history, insurance details, and consent via natural voice conversation before the patient even arrives — reducing front-desk burden and wait times." },
  { icon: CalendarCheck, title: "Appointment Scheduling", description: "Patients book, reschedule, and cancel appointments 24/7 via phone or web. Integration with Epic, Cerner, and other EHR scheduling APIs via MCP tools." },
  { icon: Pill, title: "Medication Reminders", description: "Automated outbound calls that confirm medication adherence, field side-effect questions, and escalate concerns to nursing staff — improving outcomes without staff overhead." },
  { icon: FileText, title: "Clinical Documentation Assistance", description: "Ambient voice capture during clinical encounters generates structured SOAP notes via LLM, reducing after-hours documentation burden on care teams." },
  { icon: PhoneCall, title: "Nurse Call Automation", description: "AI agents handle routine nurse call requests (blanket, water, TV remote) and triage urgent requests — freeing nursing staff for high-acuity patient needs." },
  { icon: Stethoscope, title: "Post-Discharge Follow-Up", description: "Automated follow-up calls at 24h, 72h, and 7-day intervals check recovery progress, flag readmission risks, and route concerns to care coordinators." },
];

const technicalHighlights = [
  "DTLS-encrypted WebRTC for browser-based patient interactions",
  "SIP/telephony transport for phone-based patient calls",
  "EHR integration via MCP tools (Epic, Cerner, Athena)",
  "Structured slot-filling dialogs for intake data collection",
  "PHI-excluded logging modes for compliance",
  "Smart turn detection for natural patient conversation flow",
  "Sub-100ms latency for real-time conversational feel",
  "Multi-language STT support for diverse patient populations",
];

export default function HealthcarePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Industries › Healthcare</span>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
                Voice AI that meets
                <br />
                <span style={{ color: "#A78BFA" }}>healthcare's standards</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Converse delivers HIPAA-aligned voice AI for patient-facing and clinical workflows — with encrypted transport, PHI-safe data handling, and EHR integration built in from the start.
              </p>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { icon: Lock, label: "End-to-end encrypted transport", color: "#059669" },
                { icon: ShieldCheck, label: "HIPAA-aligned data handling", color: "#059669" },
                { icon: FileText, label: "Comprehensive audit logging", color: "#059669" },
                { icon: AlertCircle, label: "BAA support available", color: "#059669" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(5,150,105,0.4)", borderRadius: 8, padding: "0.875rem 1.25rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <Icon size={18} color="#34D399" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Compliance Architecture SVG ── */}
      <section className="section section--surface" style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Architecture</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              HIPAA-ready at every layer
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 760 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 760, height: "auto" }}
              aria-label="HIPAA compliance architecture layers: patient transport, PHI processing, audit trail, and EHR integration"
            >
              {/* Patient side */}
              <rect x="20" y="60" width="130" height="80" rx="6" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="85" y="93" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Patient</text>
              <text x="85" y="109" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">Phone / Browser</text>
              <text x="85" y="125" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">/ Mobile App</text>

              {/* Encrypted transport */}
              <rect x="190" y="75" width="120" height="50" rx="4" fill="#DCFCE7" stroke="#059669" strokeWidth="2" />
              <text x="250" y="97" textAnchor="middle" fill="#059669" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Encrypted</text>
              <text x="250" y="111" textAnchor="middle" fill="#059669" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Transport</text>
              <text x="250" y="125" textAnchor="middle" fill="#666" fontSize="9" fontFamily="var(--font-bricolage)">TLS · DTLS · SRTP</text>
              <line x1="150" y1="100" x2="190" y2="100" stroke="#059669" strokeWidth="2" />
              <polygon points="186,96 194,100 186,104" fill="#059669" />

              {/* Converse pipeline */}
              <rect x="350" y="60" width="160" height="80" rx="6" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="430" y="88" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Converse</text>
              <text x="430" y="104" textAnchor="middle" fill="#C4B5FD" fontSize="10" fontFamily="var(--font-bricolage)">STT → LLM → TTS</text>
              <text x="430" y="120" textAnchor="middle" fill="#C4B5FD" fontSize="9" fontFamily="var(--font-bricolage)">PHI-excluded logs</text>
              <text x="430" y="133" textAnchor="middle" fill="#C4B5FD" fontSize="9" fontFamily="var(--font-bricolage)">Data residency control</text>
              <line x1="310" y1="100" x2="350" y2="100" stroke="#059669" strokeWidth="2" />
              <polygon points="346,96 354,100 346,104" fill="#059669" />

              {/* EHR system */}
              <rect x="560" y="60" width="150" height="80" rx="6" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="635" y="88" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">EHR System</text>
              <text x="635" y="104" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">Epic · Cerner · Athena</text>
              <text x="635" y="120" textAnchor="middle" fill="#555" fontSize="9" fontFamily="var(--font-bricolage)">via MCP Tools</text>
              <line x1="510" y1="100" x2="560" y2="100" stroke="#7C3AED" strokeWidth="2" />
              <polygon points="556,96 564,100 556,104" fill="#7C3AED" />

              {/* Audit trail */}
              <rect x="280" y="158" width="220" height="30" rx="4" fill="#FEF9C3" stroke="#D97706" strokeWidth="2" />
              <text x="390" y="177" textAnchor="middle" fill="#D97706" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">OpenTelemetry Audit Trail</text>
              <line x1="430" y1="140" x2="430" y2="158" stroke="#D97706" strokeWidth="1.5" strokeDasharray="4,3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Compliance Checklist ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Regulatory compliance</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.75rem" }}>
                HIPAA compliance checklist
              </h2>
              <p style={{ color: "#444", lineHeight: 1.75, marginBottom: "2rem" }}>
                Converse is designed to support your HIPAA compliance posture. Every item below is addressed at the framework level — not left to your team to figure out post-deployment.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {complianceChecklist.map((c) => (
                  <li key={c.item} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", padding: "0.75rem 1rem", background: "#F0FDF4", border: "1.5px solid #BBF7D0", borderRadius: 6 }}>
                    <CheckCircle size={16} color="#059669" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#14532D", fontSize: "0.9rem", lineHeight: 1.5 }}>{c.item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="section-label">Technical stack</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1.5rem" }}>
                Built for clinical environments
              </h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {technicalHighlights.map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle size={16} color="#059669" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.5 }}>{t}</span>
                  </li>
                ))}
              </ul>
              <div style={{ padding: "1.25rem", background: "#EDE9FE", border: "2px solid #7C3AED", borderRadius: 6 }}>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#4C1D95", lineHeight: 1.65 }}>
                  <strong>On-premises option:</strong> Run the entire Converse pipeline within your hospital network or private cloud. No PHI ever leaves your infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="section section--surface" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Clinical applications</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Voice AI across the care continuum
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <article key={uc.title} className="nb-card">
                  <div style={{ background: "#059669", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", display: "inline-flex", marginBottom: "1rem" }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.5rem" }}>{uc.title}</h3>
                  <p style={{ color: "#444", lineHeight: 1.65, fontSize: "0.95rem" }}>{uc.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--invert" style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="container container--narrow">
          <ShieldCheck size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Deploy voice AI your compliance team will approve
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our healthcare solutions team works with your IT security and compliance officers to design a Converse architecture that meets your HIPAA obligations.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
