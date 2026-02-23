import Link from "next/link";
import { Phone, ArrowRight, ChevronRight, CheckCircle, Repeat, PhoneCall, AlertTriangle } from "lucide-react";

const TELEPHONY_PROVIDERS = [
  {
    name: "Twilio",
    region: "Global",
    description:
      "The most widely deployed PSTN platform. Converse integrates via Twilio Media Streams, enabling real-time bidirectional audio over WebSocket. Full DTMF, transfer, and conferencing support.",
    coverage: "180+ countries",
    sla: "99.95% uptime SLA",
    features: ["Media Streams API", "TwiML scripting", "Conference rooms", "Call recording", "SIP trunking"],
    badge: "#DC2626",
    callouts: ["Largest global coverage", "Mature enterprise support", "Rich API ecosystem"],
  },
  {
    name: "Telnyx",
    region: "Global",
    description:
      "Developer-friendly carrier with competitive per-minute pricing and a Mission Control API. WebRTC gateway allows browser-to-PSTN calls through Converse pipelines.",
    coverage: "60+ countries",
    sla: "99.99% uptime SLA",
    features: ["TeXML", "Real-time call control", "SIP trunking", "Fax support", "Number porting"],
    badge: "#7C3AED",
    callouts: ["Competitive pricing", "Low-latency routing", "Developer-first DX"],
  },
  {
    name: "Vonage",
    region: "Global",
    description:
      "Ericsson-backed telecom API platform. Deep enterprise integrations including CRM connectors. Supports WebSocket streaming audio for AI pipeline integration.",
    coverage: "170+ countries",
    sla: "99.9% uptime SLA",
    features: ["Voice API", "WebSocket audio stream", "NCCO scripts", "Call recording", "SIP connect"],
    badge: "#D97706",
    callouts: ["Enterprise integrations", "CRM connector ecosystem", "Compliance-ready"],
  },
  {
    name: "Plivo",
    region: "Americas, APAC, EMEA",
    description:
      "High-throughput carrier with a clean REST API and competitive APAC pricing. Supports XML scripting and WebSocket streaming compatible with Converse's serializer layer.",
    coverage: "200+ countries",
    sla: "99.9% uptime SLA",
    features: ["PHLO scripting", "Real-time call events", "Bulk calling", "Conference", "SIP endpoints"],
    badge: "#059669",
    callouts: ["Competitive APAC rates", "Bulk outbound calling", "Simple REST API"],
  },
  {
    name: "Exotel",
    region: "India, Southeast Asia",
    description:
      "Leading cloud telephony provider for South Asian markets. Mandatory for India TRAI compliance. Supports inbound/outbound IVR flows connected to Converse pipelines.",
    coverage: "India + 10 countries",
    sla: "99.9% uptime SLA",
    features: ["Exotel Applet", "Smart IVR", "Call analytics", "Agent assist", "TRAI compliant"],
    badge: "#2563EB",
    callouts: ["India TRAI compliance", "Regional DID numbers", "Deep India carrier network"],
  },
];

const IVR_CAPABILITIES = [
  {
    icon: PhoneCall,
    title: "Inbound Call Handling",
    description: "Answer inbound PSTN calls, authenticate callers with voice or DTMF PIN, and route to the appropriate Converse pipeline branch.",
  },
  {
    icon: Repeat,
    title: "Outbound Dialing",
    description: "Programmatically place outbound calls for appointment reminders, proactive notifications, and automated collections workflows.",
  },
  {
    icon: AlertTriangle,
    title: "Voicemail Detection",
    description: "Converse's built-in AMD (Answering Machine Detection) identifies voicemail greetings and either leaves a message or retries the call.",
  },
  {
    icon: CheckCircle,
    title: "DTMF Handling",
    description: "Collect keypad input mid-conversation without interrupting the AI turn. Parse digits for PIN entry, menu selection, and numeric data capture.",
  },
];

const ARCHITECTURE_STEPS = [
  { step: "01", label: "PSTN Call", detail: "Caller dials a number managed by Twilio, Telnyx, or another carrier" },
  { step: "02", label: "Carrier Webhook", detail: "Carrier sends HTTP webhook to Converse's telephony endpoint" },
  { step: "03", label: "Serializer", detail: "Converse telephony serializer converts carrier audio format (μ-law/PCMU) to pipeline frames" },
  { step: "04", label: "Pipeline", detail: "STT → LLM → TTS pipeline processes the call in real time" },
  { step: "05", label: "Audio Out", detail: "Synthesized speech is serialized back to carrier format and streamed to the caller" },
];

export default function TelephonyIntegrationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Link href="/integrations" style={{ color: "var(--nb-violet)", fontWeight: 700, fontSize: "0.9rem" }}>Integrations</Link>
              <ChevronRight size={14} />
              <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Telephony</span>
            </div>
            <span className="eyebrow">Telephony Integrations</span>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}>
              AI voice over any phone network.{" "}
              <span style={{ color: "var(--nb-violet)" }}>Five carrier integrations.</span>
            </h1>
            <p style={{ fontSize: "1.15rem", marginTop: "1.5rem", maxWidth: "640px", lineHeight: 1.7, opacity: 0.8 }}>
              Connect Converse pipelines to the global PSTN via Twilio, Telnyx, Vonage, Plivo, or Exotel.
              Replace legacy IVR trees with intelligent voice agents — without replacing your carrier.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: "0.4rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Banner */}
      <section style={{ background: "#7C3AED", padding: "2rem 0", borderTop: "2px solid #000", borderBottom: "2px solid #000" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1.5rem" }}>
            {[
              { value: "Sub-300ms", label: "PSTN audio round-trip" },
              { value: "5 carriers", label: "Global + regional coverage" },
              { value: "DTMF native", label: "Keypad input handling" },
              { value: "IVR → AI", label: "Legacy modernization path" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center", color: "#fff" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 900 }}>{stat.value}</div>
                <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Cards */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>Five telephony carriers</h2>
            <p style={{ marginTop: "0.75rem", opacity: 0.65, maxWidth: "520px", margin: "0.75rem auto 0" }}>
              All carriers connect to the same Converse pipeline through a serializer layer that handles
              codec conversion, silence padding, and DTMF parsing.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {TELEPHONY_PROVIDERS.map((p) => (
              <div key={p.name} className="nb-card">
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "1.5rem", alignItems: "start" }}>
                  <div style={{ minWidth: "90px" }}>
                    <div
                      style={{
                        background: p.badge,
                        color: "#fff",
                        border: "2px solid #000",
                        padding: "0.5rem 0.75rem",
                        fontWeight: 900,
                        fontSize: "1rem",
                        textAlign: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {p.name}
                    </div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, textAlign: "center", opacity: 0.6 }}>{p.region}</div>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9rem", opacity: 0.75, lineHeight: 1.65, marginBottom: "0.75rem" }}>{p.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {p.features.map((f) => (
                        <span key={f} style={{ background: "#fff", border: "1.5px solid #000", padding: "0.15rem 0.6rem", fontSize: "0.75rem", fontWeight: 600 }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ minWidth: "160px" }}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <div style={{ fontSize: "0.7rem", opacity: 0.5, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>Coverage</div>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{p.coverage}</div>
                    </div>
                    <div style={{ marginBottom: "0.75rem" }}>
                      <div style={{ fontSize: "0.7rem", opacity: 0.5, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>SLA</div>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#059669" }}>{p.sla}</div>
                    </div>
                    {p.callouts.map((c) => (
                      <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.2rem" }}>
                        <CheckCircle size={12} color={p.badge} />
                        <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IVR Capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">IVR Automation</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginTop: "0.5rem" }}>
              Replace legacy IVR trees with AI
            </h2>
            <p style={{ marginTop: "0.75rem", opacity: 0.65, maxWidth: "560px", margin: "0.75rem auto 0" }}>
              Converse includes telephony-specific features that production phone systems demand — not just a
              WebSocket wrapper around a chatbot.
            </p>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {IVR_CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="nb-card">
                  <div className="feature-icon" style={{ marginBottom: "1rem" }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{cap.title}</h3>
                  <p style={{ opacity: 0.75, lineHeight: 1.65 }}>{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Architecture</span>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem" }}>How a phone call flows through Converse</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0", flexWrap: "wrap", overflowX: "auto" }}>
            {ARCHITECTURE_STEPS.map((step, i) => (
              <div key={step.step} style={{ display: "flex", alignItems: "center", gap: "0" }}>
                <div className="nb-card" style={{ minWidth: "140px", maxWidth: "160px", textAlign: "center", padding: "1.25rem 0.75rem" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--nb-violet)", marginBottom: "0.25rem" }}>{step.step}</div>
                  <div style={{ fontWeight: 800, fontSize: "0.9rem", marginBottom: "0.35rem" }}>{step.label}</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.65, lineHeight: 1.5 }}>{step.detail}</div>
                </div>
                {i < ARCHITECTURE_STEPS.length - 1 && (
                  <div style={{ padding: "0 0.5rem", color: "var(--nb-violet)", fontSize: "1.2rem", fontWeight: 900 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <Phone size={40} color="var(--nb-violet)" style={{ margin: "0 auto 1.5rem" }} />
          <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff" }}>
            Modernize your phone channel with AI
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.05rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            Keep your existing carrier relationships. Converse connects to any of the five supported
            platforms with no carrier renegotiation required.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
