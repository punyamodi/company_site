import Link from "next/link";
import {
  Phone,
  Clock,
  TrendingDown,
  Star,
  GitBranch,
  Database,
  ArrowRight,
  CheckCircle,
  Headphones,
  Activity,
  Building2,
  ShoppingBag,
  Stethoscope,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "Customer Service AI | Converse Voice AI Solutions",
  description:
    "Automate inbound and outbound customer service with Converse — 24/7 AI voice agents with smart routing, escalation logic, CRM integration, and sub-100ms response times.",
};

const businessValues = [
  { icon: Clock, title: "24/7 Availability", description: "Never miss a call. AI agents handle inquiries around the clock without staffing overhead." },
  { icon: Activity, title: "Zero Wait Times", description: "Every caller is answered instantly. Eliminate hold queues and reduce abandonment rates." },
  { icon: Star, title: "Consistent Quality", description: "Every interaction follows best-practice scripts with measurable, repeatable outcomes." },
  { icon: TrendingDown, title: "Cost Reduction", description: "Deflect high-volume routine inquiries to AI, freeing human agents for complex cases." },
];

const technicalCapabilities = [
  "Inbound call handling with natural-language understanding",
  "Smart call routing by intent, sentiment, and customer tier",
  "Escalation logic with live agent handoff and context transfer",
  "CRM read/write integration via MCP tool framework",
  "Real-time voice sentiment analysis for priority routing",
  "DTMF fallback menus for legacy telephony compatibility",
  "Outbound campaign automation (reminders, follow-ups)",
  "Call recording, transcription, and OpenTelemetry observability",
];

const industries = [
  { icon: Building2, name: "Telecommunications", detail: "Billing inquiries, plan changes, network troubleshooting" },
  { icon: ShoppingBag, name: "Retail", detail: "Order status, returns, loyalty redemption" },
  { icon: Stethoscope, name: "Healthcare", detail: "Appointment scheduling, prescription refills, nurse triage" },
  { icon: Landmark, name: "Banking", detail: "Balance inquiries, fraud alerts, loan application guidance" },
];

export default function CustomerServicePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Solutions › Customer Service AI</span>
              <h1
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}
              >
                Intelligent voice agents
                <br />
                <span style={{ color: "#A78BFA" }}>for every customer call</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Converse turns your contact center into a 24/7 AI-powered operation — handling inbound inquiries, routing to the right team, and resolving issues without hold times or script failures.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-invert">
                  Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* Stats block */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", width: "100%", maxWidth: 360 }}>
                {[
                  { val: "<100ms", label: "End-to-end latency" },
                  { val: "24/7", label: "Always available" },
                  { val: "20+", label: "AI integrations" },
                  { val: "∞", label: "Concurrent calls" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "1.25rem", textAlign: "center" }}
                  >
                    <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#A78BFA", fontFamily: "var(--font-bricolage)" }}>{s.val}</div>
                    <div style={{ fontSize: "0.8rem", opacity: 0.75, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call Flow SVG ── */}
      <section className="section section--surface" style={{ padding: "64px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">How it works</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              From inbound call to resolved inquiry
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 860 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 860, height: "auto" }}
              aria-label="Call flow diagram: Customer Call → STT → LLM Reasoning → TTS Response, with escalation trigger branch"
            >
              {/* Step boxes */}
              {[
                { x: 20, label: "Customer\nCall", sub: "Telephony / SIP", color: "#FAF8F3" },
                { x: 190, label: "STT", sub: "Speech-to-Text", color: "#EDE9FE" },
                { x: 360, label: "LLM\nReasoning", sub: "Intent + Context", color: "#7C3AED", textColor: "#fff", subColor: "#C4B5FD" },
                { x: 530, label: "TTS", sub: "Voice Response", color: "#EDE9FE" },
                { x: 700, label: "Resolution\nor Handoff", sub: "CRM Updated", color: "#FAF8F3" },
              ].map((step) => (
                <g key={step.x}>
                  <rect x={step.x} y="60" width="140" height="80" rx="6" fill={step.color} stroke="#0A0A0A" strokeWidth="2" />
                  <text x={step.x + 70} y={step.label.includes("\n") ? 98 : 104} textAnchor="middle" fill={step.textColor ?? "#0A0A0A"} fontSize="13" fontFamily="var(--font-bricolage)" fontWeight="700">
                    {step.label.split("\n")[0]}
                  </text>
                  {step.label.includes("\n") && (
                    <text x={step.x + 70} y="114" textAnchor="middle" fill={step.textColor ?? "#0A0A0A"} fontSize="13" fontFamily="var(--font-bricolage)" fontWeight="700">
                      {step.label.split("\n")[1]}
                    </text>
                  )}
                  <text x={step.x + 70} y="130" textAnchor="middle" fill={step.subColor ?? "#666"} fontSize="10" fontFamily="var(--font-bricolage)">{step.sub}</text>
                </g>
              ))}

              {/* Arrows */}
              {[160, 330, 500, 670].map((ax) => (
                <g key={ax}>
                  <line x1={ax} y1="100" x2={ax + 25} y2="100" stroke="#7C3AED" strokeWidth="2" />
                  <polygon points={`${ax + 21},96 ${ax + 29},100 ${ax + 21},104`} fill="#7C3AED" />
                </g>
              ))}

              {/* Escalation branch */}
              <line x1="430" y1="140" x2="430" y2="170" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,3" />
              <rect x="330" y="170" width="200" height="28" rx="4" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
              <text x="430" y="189" textAnchor="middle" fill="#DC2626" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Escalation Trigger → Live Agent</text>

              {/* Latency label */}
              <rect x="295" y="12" width="130" height="22" rx="11" fill="#0A0A0A" />
              <text x="360" y="27" textAnchor="middle" fill="#A78BFA" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="700">&lt;100ms end-to-end</text>
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
              Real outcomes for contact center leaders
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

      {/* ── Technical Capabilities ── */}
      <section className="section section--surface" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Technical depth</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1rem" }}>
                Built for enterprise contact centers
              </h2>
              <p style={{ color: "#444", lineHeight: 1.75, marginBottom: "2rem" }}>
                Converse abstracts the complexity of real-time voice AI — STT, LLM orchestration, TTS, telephony transport — into a composable Python pipeline that your engineering team can deploy, test, and extend.
              </p>
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
              <div className="code-block" style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>
                <pre style={{ margin: 0, overflowX: "auto" }}>{`from converse import Pipeline, Phone
from converse.processors import (
    DeepgramSTT,
    OpenAILLM,
    ElevenLabsTTS,
)
from converse.tools import CRMMCPTool

pipeline = Pipeline(
    transport=Phone(provider="twilio"),
    stt=DeepgramSTT(model="nova-3"),
    llm=OpenAILLM(
        model="gpt-4o",
        system_prompt=AGENT_PROMPT,
        tools=[CRMMCPTool(crm="salesforce")],
    ),
    tts=ElevenLabsTTS(voice="en-US-Aria"),
    turn_detection="smart",
    escalation_handler=LiveAgentBridge(),
)

await pipeline.run()`}</pre>
              </div>
              <div style={{ marginTop: "1.25rem", padding: "1rem 1.25rem", background: "#EDE9FE", border: "2px solid #7C3AED", borderRadius: 6 }}>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#4C1D95", lineHeight: 1.6 }}>
                  <strong>MCP Tools</strong> let your LLM read from and write to CRMs, ticketing systems, and databases in real time — no middleware required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Industries served</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Proven across high-volume sectors
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.25rem" }}>
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <article key={ind.name} className="nb-card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: "#0A0A0A", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", flexShrink: 0 }}>
                    <Icon size={18} color="#A78BFA" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.3rem", fontSize: "1rem" }}>{ind.name}</h3>
                    <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.6 }}>{ind.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--invert" style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="container container--narrow">
          <Headphones size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Transform your contact center with voice AI
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our solutions team will scope your call volume, map your existing telephony stack, and design a Converse pipeline tailored to your business.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
