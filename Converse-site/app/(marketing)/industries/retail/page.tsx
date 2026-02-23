import Link from "next/link";
import {
  ShoppingBag,
  Package,
  RotateCcw,
  Star,
  MessageCircle,
  TrendingDown,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "Retail & E-Commerce Voice AI | Converse – 24/7 Customer Support",
  description:
    "Reduce support costs and improve CSAT with Converse voice AI — order status bots, returns processing, product recommendation assistants, and loyalty enrollment for retail and e-commerce.",
};

const businessValues = [
  { icon: TrendingDown, title: "Reduced Support Costs", description: "Deflect high-volume routine contacts — order status, WISMO, return initiation — to AI agents, freeing your team for complex customer needs." },
  { icon: Star, title: "Improved Customer Satisfaction", description: "Zero hold times, instant answers, and consistent quality across every interaction — regardless of time zone, season, or call volume." },
  { icon: Clock, title: "24/7 Coverage", description: "AI agents handle customer contacts around the clock during peak seasons, product launches, and promotional events without additional staffing." },
  { icon: Users, title: "Personalized at Scale", description: "Converse integrates with your customer data platform to deliver personalized recommendations, loyalty status, and account-specific responses to every caller." },
];

const technicalCapabilities = [
  "OMS / ERP integration via MCP tools (order lookups, updates)",
  "CRM integration for customer profile and purchase history",
  "Real-time product catalog queries via MCP tool framework",
  "Returns initiation with warehouse management system write-back",
  "Loyalty program API integration (enroll, redeem, check balance)",
  "Smart turn detection for natural back-and-forth shopping queries",
  "Multilingual STT support for global customer bases",
  "WebRTC in-app voice for web and mobile shopping experiences",
  "Telephony support: Twilio, Plivo, Vonage for phone channels",
];

const useCases = [
  { icon: Package, title: "Order Status & WISMO", description: "\"Where is my order?\" is the most common retail contact. Converse retrieves live order status from your OMS and delivers a natural spoken response in under 2 seconds." },
  { icon: RotateCcw, title: "Returns Processing", description: "Guide customers through return initiation, label generation, and refund timeline via voice — initiating the return in your WMS via MCP tools without human intervention." },
  { icon: MessageCircle, title: "Product Recommendation", description: "Conversational shopping assistants understand context, budget, and preferences to recommend products from your live catalog — with real-time inventory awareness." },
  { icon: ShoppingBag, title: "Voice-Powered Customer Support", description: "Handle billing disputes, delivery exceptions, damaged goods, and account issues with AI agents that access your full customer service knowledge base." },
  { icon: Star, title: "Loyalty Program Enrollment", description: "Enroll customers in loyalty programs during support calls or via outbound campaigns — capturing consent, writing to your CRM, and confirming enrollment by voice." },
  { icon: BarChart3, title: "Post-Purchase Follow-Up", description: "Automated outbound calls collect purchase feedback, prompt reviews, offer complementary products, and identify dissatisfied customers before they churn." },
];

export default function RetailPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Industries › Retail & Commerce</span>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
                Voice AI that
                <br />
                <span style={{ color: "#A78BFA" }}>delights shoppers</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Converse powers retail voice AI that handles order inquiries, processes returns, recommends products, and enrolls loyalty members — at any call volume, any time of day.
              </p>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { label: "Order Status Queries", detail: "Live OMS lookup in &lt;2s" },
                { label: "Returns Initiated", detail: "End-to-end without human agent" },
                { label: "Loyalty Enrollments", detail: "Voice consent + CRM write" },
                { label: "CSAT Impact", detail: "Zero hold times, instant answers" },
              ].map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "0.875rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.875rem", opacity: 0.85 }}>{s.label}</span>
                  <span
                    style={{ fontSize: "0.8rem", color: "#A78BFA", fontWeight: 600, textAlign: "right", maxWidth: 160 }}
                    dangerouslySetInnerHTML={{ __html: s.detail }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Order Flow SVG ── */}
      <section className="section section--surface" style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">How it works</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              From "Where's my order?" to resolved — in seconds
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 840 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 840, height: "auto" }}
              aria-label="Retail voice AI flow: Customer call → STT → LLM with OMS MCP tool → order lookup → TTS response → resolved"
            >
              {[
                { x: 20, label: "Customer\nCall", sub: "Phone / Web", color: "#FAF8F3" },
                { x: 188, label: "STT", sub: "Speech-to-Text", color: "#EDE9FE" },
                { x: 356, label: "LLM +\nMCP Tool", sub: "OMS lookup", color: "#7C3AED", tc: "#fff", sc: "#C4B5FD" },
                { x: 524, label: "TTS", sub: "Voice response", color: "#EDE9FE" },
                { x: 692, label: "Resolved /\nEscalate", sub: "CRM updated", color: "#FAF8F3" },
              ].map((step) => (
                <g key={step.x}>
                  <rect x={step.x} y="50" width="148" height="80" rx="6" fill={step.color} stroke="#0A0A0A" strokeWidth="2" />
                  <text x={step.x + 74} y={step.label.includes("\n") ? 84 : 94} textAnchor="middle" fill={step.tc ?? "#0A0A0A"} fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">{step.label.split("\n")[0]}</text>
                  {step.label.includes("\n") && (
                    <text x={step.x + 74} y="100" textAnchor="middle" fill={step.tc ?? "#0A0A0A"} fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">{step.label.split("\n")[1]}</text>
                  )}
                  <text x={step.x + 74} y="118" textAnchor="middle" fill={step.sc ?? "#666"} fontSize="10" fontFamily="var(--font-bricolage)">{step.sub}</text>
                </g>
              ))}
              {/* Arrows */}
              {[168, 336, 504, 672].map((ax) => (
                <g key={ax}>
                  <line x1={ax} y1="90" x2={ax + 16} y2="90" stroke="#D97706" strokeWidth="2" />
                  <polygon points={`${ax + 12},86 ${ax + 20},90 ${ax + 12},94`} fill="#D97706" />
                </g>
              ))}
              {/* Latency label */}
              <rect x="280" y="10" width="140" height="22" rx="11" fill="#0A0A0A" />
              <text x="350" y="25" textAnchor="middle" fill="#A78BFA" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="700">&lt;2s end-to-end</text>
              <line x1="350" y1="32" x2="430" y2="50" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="3,3" />

              {/* Commerce systems */}
              <rect x="300" y="148" width="200" height="26" rx="4" fill="#FAF8F3" stroke="#D97706" strokeWidth="2" />
              <text x="400" y="165" textAnchor="middle" fill="#D97706" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="700">OMS · CRM · Loyalty Platform</text>
              <line x1="400" y1="148" x2="430" y2="130" stroke="#D97706" strokeWidth="1.5" strokeDasharray="4,3" />
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
              Measurable outcomes for retail operations
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

      {/* ── Use Cases ── */}
      <section className="section section--surface" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Applications</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Voice AI across the retail customer journey
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

      {/* ── Technical ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Integration depth</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1.5rem" }}>
                Connects to your commerce stack
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
                <pre style={{ margin: 0, overflowX: "auto" }}>{`from converse import Pipeline
from converse.transport import TwilioPhone
from converse.tools import (
    OMSMCPTool,
    CRMMCPTool,
    LoyaltyMCPTool,
)
from converse.processors import (
    DeepgramSTT,
    OpenAILLM,
    CartesiaTTS,
)

pipeline = Pipeline(
    transport=TwilioPhone(),
    stt=DeepgramSTT(model="nova-3"),
    llm=OpenAILLM(
        model="gpt-4o",
        system_prompt=RETAIL_AGENT_PROMPT,
        tools=[
            OMSMCPTool(),       # order lookup
            CRMMCPTool(),       # customer profile
            LoyaltyMCPTool(),   # points, rewards
        ],
    ),
    tts=CartesiaTTS(),
    turn_detection="smart",
)

await pipeline.run()`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--invert" style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="container container--narrow">
          <ShoppingBag size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Give every shopper a 24/7 voice concierge
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our retail solutions team will map your customer journey, identify the highest-value automation opportunities, and design a Converse pipeline around your commerce stack.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
