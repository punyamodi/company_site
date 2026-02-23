import Link from "next/link";
import {
  Workflow,
  Clock,
  TrendingUp,
  ShieldCheck,
  GitBranch,
  Database,
  CalendarCheck,
  FileText,
  PhoneCall,
  ArrowRight,
  CheckCircle,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Business Process Automation | Converse Voice AI Solutions",
  description:
    "Automate structured business workflows with Converse voice AI — IVR dialogs, appointment booking, form filling, voicemail screening, and deep system integration via MCP tools.",
};

const businessValues = [
  { icon: TrendingUp, title: "Operational Efficiency", description: "Automate repetitive phone-based processes end-to-end — from data collection to system writes — without human intervention." },
  { icon: ShieldCheck, title: "Error Reduction", description: "Structured dialog flows and validation rules eliminate transcription errors and ensure consistent data capture every time." },
  { icon: Clock, title: "24/7 Process Execution", description: "Appointment booking, form collection, and inquiry handling run continuously without shift constraints or staffing costs." },
  { icon: Database, title: "Deep System Integration", description: "MCP tools let your voice workflow read and write to CRMs, EHRs, scheduling systems, and databases in real time." },
];

const technicalCapabilities = [
  "Structured dialog flow engine with state machine architecture",
  "Conditional branching on intent, slot values, and API responses",
  "MCP tool integration for real-time system reads and writes",
  "Voicemail detection and intelligent screening",
  "DTMF and natural-language hybrid input support",
  "Appointment booking with calendar API integration",
  "Voice form filling with validation and confirmation steps",
  "Inbound and outbound campaign orchestration",
  "OpenTelemetry metrics for every workflow step",
];

const useCases = [
  { icon: CalendarCheck, title: "Appointment Booking", description: "Fully automated scheduling workflows — check availability, confirm slots, send reminders, and handle rescheduling via natural voice." },
  { icon: PhoneCall, title: "Voicemail Screening", description: "AI screens inbound voicemails, extracts structured data, prioritizes urgency, and routes to the right queue or person." },
  { icon: FileText, title: "Voice Form Filling", description: "Collect structured data (name, address, insurance info, preferences) via guided voice dialogs with validation and CRM write-back." },
  { icon: GitBranch, title: "IVR Modernization", description: "Replace legacy DTMF trees with natural-language flows that handle the same paths more efficiently and with higher completion rates." },
];

export default function BusinessWorkflowsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Solutions › Business Workflows</span>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
                Automate every
                <br />
                <span style={{ color: "#A78BFA" }}>voice-driven process</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Replace manual phone workflows with structured voice dialogs that collect data, execute business logic, and write back to your systems — autonomously and at scale.
              </p>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Appointment Booking", val: "End-to-end in voice" },
                { label: "Form Completion Rate", val: "Validated at every step" },
                { label: "MCP Integrations", val: "Any REST or database" },
                { label: "Workflow Branches", val: "Unlimited conditionals" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "0.875rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ fontSize: "0.9rem", opacity: 0.85 }}>{s.label}</span>
                  <span style={{ fontSize: "0.85rem", color: "#A78BFA", fontWeight: 700 }}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow Diagram SVG ── */}
      <section className="section section--surface" style={{ padding: "64px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Workflow architecture</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Conditional branching with system integration
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 820 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 820, height: "auto" }}
              aria-label="Workflow diagram with decision nodes: Inbound Call → Intent Classification → Decision: new/existing → respective paths → MCP tool write → Resolution"
            >
              {/* Start */}
              <rect x="340" y="10" width="140" height="44" rx="22" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
              <text x="410" y="37" textAnchor="middle" fill="#A78BFA" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Inbound Call</text>
              <line x1="410" y1="54" x2="410" y2="74" stroke="#0A0A0A" strokeWidth="2" />

              {/* Intent box */}
              <rect x="310" y="74" width="200" height="44" rx="6" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
              <text x="410" y="96" textAnchor="middle" fill="#4C1D95" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Intent Classification</text>
              <text x="410" y="110" textAnchor="middle" fill="#666" fontSize="9" fontFamily="var(--font-bricolage)">LLM + slot filling</text>
              <line x1="410" y1="118" x2="410" y2="138" stroke="#7C3AED" strokeWidth="2" />

              {/* Decision diamond */}
              <polygon points="410,138 460,168 410,198 360,168" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="410" y="163" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Customer</text>
              <text x="410" y="177" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">type?</text>

              {/* Branch left: New */}
              <line x1="360" y1="168" x2="180" y2="168" stroke="#059669" strokeWidth="2" />
              <text x="270" y="158" textAnchor="middle" fill="#059669" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">New</text>
              <rect x="80" y="148" width="140" height="44" rx="6" fill="#FAF8F3" stroke="#059669" strokeWidth="2" />
              <text x="150" y="168" textAnchor="middle" fill="#059669" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Collect Details</text>
              <text x="150" y="182" textAnchor="middle" fill="#555" fontSize="9" fontFamily="var(--font-bricolage)">Voice form filling</text>
              <line x1="150" y1="192" x2="150" y2="224" stroke="#059669" strokeWidth="2" />
              <rect x="80" y="224" width="140" height="36" rx="6" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="150" y="247" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">CRM Create (MCP)</text>
              <line x1="220" y1="242" x2="340" y2="260" stroke="#ccc" strokeWidth="1.5" strokeDasharray="4,3" />

              {/* Branch right: Existing */}
              <line x1="460" y1="168" x2="620" y2="168" stroke="#2563EB" strokeWidth="2" />
              <text x="540" y="158" textAnchor="middle" fill="#2563EB" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">Existing</text>
              <rect x="600" y="148" width="140" height="44" rx="6" fill="#FAF8F3" stroke="#2563EB" strokeWidth="2" />
              <text x="670" y="168" textAnchor="middle" fill="#2563EB" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Lookup Account</text>
              <text x="670" y="182" textAnchor="middle" fill="#555" fontSize="9" fontFamily="var(--font-bricolage)">CRM read via MCP</text>
              <line x1="670" y1="192" x2="670" y2="224" stroke="#2563EB" strokeWidth="2" />
              <rect x="600" y="224" width="140" height="36" rx="6" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="670" y="247" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Update Record (MCP)</text>
              <line x1="600" y1="242" x2="490" y2="260" stroke="#ccc" strokeWidth="1.5" strokeDasharray="4,3" />

              {/* Resolution */}
              <rect x="340" y="250" width="140" height="30" rx="15" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="410" y="269" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Workflow Complete</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Business Value ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Business impact</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Operational gains from voice automation
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {businessValues.map((bv) => {
              const Icon = bv.icon;
              return (
                <article key={bv.title} className="nb-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ background: "#D97706", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", flexShrink: 0 }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.4rem" }}>{bv.title}</h3>
                    <p style={{ color: "#444", lineHeight: 1.65, fontSize: "0.95rem" }}>{bv.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technical Depth ── */}
      <section className="section section--surface" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Under the hood</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1.5rem" }}>
                Composable workflow building blocks
              </h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {technicalCapabilities.map((cap) => (
                  <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle size={16} color="#D97706" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.5 }}>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="code-block" style={{ fontSize: "0.81rem", lineHeight: 1.7 }}>
                <pre style={{ margin: 0, overflowX: "auto" }}>{`from converse.workflow import DialogFlow, Step
from converse.tools import (
    CalendarMCPTool,
    CRMMCPTool,
    VoicemailDetector,
)

flow = DialogFlow(
    steps=[
        Step("greet", prompt=GREETING),
        Step("collect_name",
             prompt="May I have your full name?",
             slot="name",
             validation=name_validator),
        Step("collect_date",
             prompt="What date works for you?",
             slot="date",
             tool=CalendarMCPTool()),
        Step("confirm",
             prompt=CONFIRMATION_TEMPLATE,
             requires=["name", "date"]),
        Step("book",
             tool=CRMMCPTool(action="create_appointment"),
             final=True),
    ],
    voicemail_screening=VoicemailDetector(),
    dtmf_fallback=True,
)

pipeline = Pipeline(flow=flow, ...)`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Applications</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Common workflow automation scenarios
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <article key={uc.title} className="nb-card">
                  <div style={{ background: "#0A0A0A", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", display: "inline-flex", marginBottom: "1rem" }}>
                    <Icon size={20} color="#A78BFA" />
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
          <Cpu size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Automate your first voice workflow this quarter
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our solutions team will map your existing processes, design the dialog flow, and help you connect Converse to your existing systems via MCP tools.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
