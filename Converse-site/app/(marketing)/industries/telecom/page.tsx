import Link from "next/link";
import {
  Building2,
  Phone,
  Wifi,
  CreditCard,
  Settings,
  AlertTriangle,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Network,
} from "lucide-react";

export const metadata = {
  title: "Telecommunications Voice AI | Converse – IVR Modernization & Scaling",
  description:
    "Modernize IVR, handle high call volumes, and deploy natural voice AI for billing, troubleshooting, and provisioning with Converse's sub-second telephony-native framework.",
};

const businessValues = [
  { icon: Zap, title: "Sub-Second Response Times", description: "Converse's <100ms end-to-end latency meets the real-time expectations of telco customers — no perceptible delay between question and answer." },
  { icon: BarChart3, title: "High Call Volume Scaling", description: "Handle thousands of concurrent calls without infrastructure bottlenecks. Converse's async pipeline architecture scales horizontally on demand." },
  { icon: Phone, title: "SIP/Telephony Native", description: "Built-in support for SIP trunks, Twilio, Plivo, Vonage, Telnyx, and Exotel — no additional telephony middleware required." },
  { icon: Settings, title: "IVR Modernization", description: "Replace brittle DTMF menu trees with natural-language flows that handle the same call paths more efficiently and with far higher completion rates." },
];

const technicalCapabilities = [
  "Native SIP trunk integration for direct carrier connectivity",
  "Twilio · Plivo · Vonage · Telnyx · Exotel telephony support",
  "Sub-100ms end-to-end latency for real-time conversation",
  "High-concurrency async pipeline — thousands of simultaneous calls",
  "DTMF fallback for legacy device compatibility",
  "Smart turn detection and interruption handling",
  "Outbound campaign management for proactive notifications",
  "BSS/OSS integration via MCP tools (billing, provisioning systems)",
  "OpenTelemetry metrics: call volume, completion rate, escalation rate",
  "Call recording and transcription with configurable retention",
];

const useCases = [
  { icon: Phone, title: "IVR Modernization", description: "Replace multi-level DTMF trees with a single natural-language interface. Customers say what they need — Converse understands and routes without numeric menus." },
  { icon: Wifi, title: "Network Troubleshooting Bots", description: "AI agents guide customers through broadband, mobile, and TV troubleshooting flows — running automated diagnostics via BSS APIs and escalating when hardware replacement is needed." },
  { icon: CreditCard, title: "Billing Inquiry Agents", description: "Handle balance inquiries, payment plan setup, dispute initiation, and invoice explanation via voice — with live BSS/billing system lookups via MCP tools." },
  { icon: Settings, title: "Provisioning Assistants", description: "Automate new service activation, feature add/remove, and plan upgrades via conversational voice — writing directly to provisioning systems upon customer confirmation." },
  { icon: AlertTriangle, title: "Outage Notifications", description: "Proactive outbound calls notify affected customers of network outages, estimated resolution times, and restoration confirmation — at scale, automatically." },
  { icon: BarChart3, title: "Upsell & Retention Campaigns", description: "Voice-based outbound campaigns for plan upgrades, contract renewals, and churn prevention — with personalized offers sourced from your CRM via MCP tools." },
];

export default function TelecomPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Industries › Telecommunications</span>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
                IVR modernization
                <br />
                <span style={{ color: "#A78BFA" }}>at telco scale</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Converse replaces aging DTMF IVR infrastructure with natural-language voice AI that handles billing inquiries, network troubleshooting, and provisioning — at thousands of concurrent calls with sub-second response times.
              </p>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {/* Telephony provider logos as text badges */}
              <div style={{ padding: "1rem 1.25rem", background: "rgba(255,255,255,0.07)", border: "2px solid rgba(255,255,255,0.15)", borderRadius: 8 }}>
                <div style={{ fontSize: "0.75rem", opacity: 0.65, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Supported telephony providers</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Twilio", "Plivo", "Vonage", "Telnyx", "Exotel", "SIP Direct"].map((p) => (
                    <span key={p} style={{ background: "rgba(124,58,237,0.3)", border: "1.5px solid rgba(167,139,250,0.4)", borderRadius: 4, padding: "3px 10px", fontSize: "0.8rem", fontWeight: 600 }}>{p}</span>
                  ))}
                </div>
              </div>
              {[
                { label: "Concurrent call capacity", val: "Unlimited (horizontal scale)" },
                { label: "End-to-end latency", val: "<100ms" },
                { label: "DTMF fallback", val: "Built-in compatibility" },
                { label: "BSS/OSS integration", val: "Via MCP tool framework" },
              ].map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "0.75rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.875rem", opacity: 0.8 }}>{s.label}</span>
                  <span style={{ fontSize: "0.8rem", color: "#A78BFA", fontWeight: 600 }}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IVR Modernization SVG ── */}
      <section className="section section--surface" style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Before & after</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              From DTMF trees to natural voice
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 820 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 820, height: "auto" }}
              aria-label="Before/after comparison: legacy DTMF IVR tree vs Converse natural language intent classification"
            >
              {/* BEFORE */}
              <text x="160" y="20" textAnchor="middle" fill="#DC2626" fontSize="13" fontFamily="var(--font-bricolage)" fontWeight="700">BEFORE: Legacy DTMF IVR</text>
              <rect x="80" y="28" width="160" height="36" rx="4" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
              <text x="160" y="51" textAnchor="middle" fill="#DC2626" fontSize="11" fontFamily="var(--font-bricolage)">"Press 1 for billing, 2 for…"</text>
              <line x1="110" y1="64" x2="80" y2="94" stroke="#DC2626" strokeWidth="1.5" />
              <line x1="160" y1="64" x2="160" y2="94" stroke="#DC2626" strokeWidth="1.5" />
              <line x1="210" y1="64" x2="240" y2="94" stroke="#DC2626" strokeWidth="1.5" />
              {[60, 130, 200].map((x) => (
                <g key={x}>
                  <rect x={x} y="94" width="80" height="30" rx="3" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
                  <text x={x + 40} y="114" textAnchor="middle" fill="#DC2626" fontSize="9" fontFamily="var(--font-bricolage)">Sub-menu</text>
                </g>
              ))}
              <text x="160" y="148" textAnchor="middle" fill="#DC2626" fontSize="10" fontFamily="var(--font-bricolage)">3+ levels deep, high abandonment</text>

              {/* Divider */}
              <line x1="360" y1="10" x2="360" y2="210" stroke="#ccc" strokeWidth="1.5" strokeDasharray="6,4" />

              {/* AFTER */}
              <text x="590" y="20" textAnchor="middle" fill="#059669" fontSize="13" fontFamily="var(--font-bricolage)" fontWeight="700">AFTER: Converse Natural Voice</text>
              <rect x="460" y="28" width="260" height="36" rx="8" fill="#DCFCE7" stroke="#059669" strokeWidth="2" />
              <text x="590" y="51" textAnchor="middle" fill="#14532D" fontSize="11" fontFamily="var(--font-bricolage)">"Hi, I need to check my bill for last month"</text>

              <rect x="490" y="80" width="200" height="40" rx="6" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="590" y="97" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Intent: billing_inquiry</text>
              <text x="590" y="111" textAnchor="middle" fill="#C4B5FD" fontSize="9" fontFamily="var(--font-bricolage)">Confidence 0.97 · BSS lookup triggered</text>
              <line x1="590" y1="64" x2="590" y2="80" stroke="#059669" strokeWidth="2" />
              <polygon points="586,76 590,84 594,76" fill="#059669" />

              <rect x="490" y="136" width="200" height="40" rx="6" fill="#DCFCE7" stroke="#059669" strokeWidth="2" />
              <text x="590" y="153" textAnchor="middle" fill="#14532D" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">"Your October bill was $89.40…"</text>
              <text x="590" y="167" textAnchor="middle" fill="#555" fontSize="9" fontFamily="var(--font-bricolage)">Spoken answer in &lt;1 second</text>
              <line x1="590" y1="120" x2="590" y2="136" stroke="#059669" strokeWidth="2" />
              <polygon points="586,132 590,140 594,132" fill="#059669" />

              <text x="590" y="195" textAnchor="middle" fill="#059669" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">Zero menu navigation. Zero hold time.</text>
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
              Why telcos choose Converse
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {businessValues.map((bv) => {
              const Icon = bv.icon;
              return (
                <article key={bv.title} className="nb-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ background: "#7C3AED", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", flexShrink: 0 }}>
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
              <span className="section-label">Technical capabilities</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1.5rem" }}>
                Engineered for telco infrastructure
              </h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {technicalCapabilities.map((cap) => (
                  <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle size={16} color="#7C3AED" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.5 }}>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="code-block" style={{ fontSize: "0.81rem", lineHeight: 1.7 }}>
                <pre style={{ margin: 0, overflowX: "auto" }}>{`from converse import Pipeline
from converse.transport import SIPTransport
from converse.tools import (
    BSSMCPTool,
    ProvisioningMCPTool,
    NetworkDiagMCPTool,
)
from converse.processors import (
    DeepgramSTT,
    OpenAILLM,
    CartesiaTTS,
)

pipeline = Pipeline(
    transport=SIPTransport(
        trunk="sip.carrier.com",
        concurrent_limit=10000,
    ),
    stt=DeepgramSTT(model="nova-3"),
    llm=OpenAILLM(
        model="gpt-4o",
        system_prompt=TELCO_AGENT_PROMPT,
        tools=[
            BSSMCPTool(),         # billing
            ProvisioningMCPTool(), # activation
            NetworkDiagMCPTool(), # troubleshoot
        ],
    ),
    tts=CartesiaTTS(voice="sonic"),
    dtmf_fallback=True,
    turn_detection="smart",
)

await pipeline.run()`}</pre>
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
              Voice AI across telco operations
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
          <Network size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Modernize your IVR. Delight your subscribers.
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our telco solutions team will evaluate your existing IVR topology, map migration paths, and architect a Converse deployment that integrates with your carrier and BSS infrastructure.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
