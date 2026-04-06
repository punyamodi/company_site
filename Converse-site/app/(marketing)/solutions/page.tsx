import Link from "next/link";
import {
  Phone,
  Globe,
  Smartphone,
  HeadphonesIcon,
  Bot,
  Heart,
  Workflow,
  BookOpen,
  ArrowRight,
  Building2,
  ShoppingBag,
  Stethoscope,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "Solutions | Converse – Voice AI for Every Business Challenge",
  description:
    "Explore Converse voice AI solutions across customer service, voice assistants, AI companions, business workflows, and interactive storytelling.",
};

const solutions = [
  {
    icon: HeadphonesIcon,
    title: "Customer Service AI",
    tagline: "24/7 intelligent inbound & outbound voice agents",
    description:
      "Replace legacy IVR with natural-language agents that resolve inquiries, route calls intelligently, and escalate seamlessly — at any call volume.",
    href: "/solutions/customer-service",
    color: "#7C3AED",
  },
  {
    icon: Bot,
    title: "Voice Assistants",
    tagline: "Hands-free AI built for the workplace and beyond",
    description:
      "Deploy always-on voice interfaces with wake-word detection, continuous listening, and multi-turn context across browsers, mobile, and embedded devices.",
    href: "/solutions/voice-assistants",
    color: "#2563EB",
  },
  {
    icon: Heart,
    title: "AI Companions",
    tagline: "Persistent, personalized conversational AI",
    description:
      "Build emotionally-aware companions with long-term memory, adaptive personality, and multi-session continuity for coaching, wellness, and education.",
    href: "/solutions/ai-companions",
    color: "#DC2626",
  },
  {
    icon: Workflow,
    title: "Business Workflows",
    tagline: "Voice-driven process automation at scale",
    description:
      "Automate structured dialogs — appointment booking, form filling, voicemail screening — with conditional branching and deep system integration via MCP tools.",
    href: "/solutions/business-workflows",
    color: "#D97706",
  },
  {
    icon: BookOpen,
    title: "Interactive Storytelling",
    tagline: "Immersive AI-powered narrative experiences",
    description:
      "Create dynamic characters, branching narratives, and video avatars for games, training simulations, and interactive media with real-time LLM generation.",
    href: "/solutions/interactive-storytelling",
    color: "#059669",
  },
];

const industryHighlights = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "HIPAA-ready patient intake, scheduling, and clinical documentation bots.",
    href: "/industries/healthcare",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    description: "SOC 2-aligned account inquiry, fraud alert, and KYC voice verification.",
    href: "/industries/financial-services",
  },
  {
    icon: ShoppingBag,
    name: "Retail & Commerce",
    description: "Order status, returns processing, and loyalty enrollment at scale.",
    href: "/industries/retail",
  },
  {
    icon: Building2,
    name: "Telecommunications",
    description: "IVR modernization with natural voice, SIP integration, and high call volume scaling.",
    href: "/industries/telecom",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="section section--invert"
        style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}
      >
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container container--narrow" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="eyebrow" style={{ color: "#C4B5FD" }}>Solutions</span>
          <h1
            className="anim-fade-up"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.25rem" }}
          >
            Voice AI for every
            <br />
            <span style={{ color: "#A78BFA" }}>business challenge</span>
          </h1>
          <p className="anim-fade-up delay-100" style={{ fontSize: "1.2rem", maxWidth: 580, margin: "0 auto 2.5rem", opacity: 0.85, lineHeight: 1.7 }}>
            From customer service automation to immersive AI companions, Converse provides
            composable voice AI pipelines that deploy wherever your users are.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-invert">
              Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </Link>
            <Link href="/platform" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* ── Deployment Scenarios SVG ── */}
      <section className="section section--surface" style={{ padding: "56px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="section-label">Deploy anywhere</span>
            <h2 style={{ fontSize: "1.75rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              One framework. Every channel.
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 820 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 820, height: "auto" }}
              aria-label="Deployment scenarios: phone, browser, and mobile app all connecting to the Converse AI engine"
            >
              {/* Center engine */}
              <rect x="310" y="90" width="200" height="80" rx="8" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="410" y="126" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="var(--font-bricolage)" fontWeight="700">Converse</text>
              <text x="410" y="144" textAnchor="middle" fill="#C4B5FD" fontSize="11" fontFamily="var(--font-bricolage)">AI Engine</text>

              {/* Phone channel */}
              <rect x="40" y="80" width="160" height="100" rx="8" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <Phone x="100" y="96" size={28} color="#7C3AED" />
              <text x="120" y="148" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Telephony</text>
              <text x="120" y="164" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">Twilio · Plivo · Vonage</text>
              <line x1="200" y1="130" x2="310" y2="130" stroke="#7C3AED" strokeWidth="2" strokeDasharray="6,4" />
              <polygon points="306,126 314,130 306,134" fill="#7C3AED" />

              {/* Web channel */}
              <rect x="310" y="188" width="200" height="52" rx="8" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <text x="410" y="209" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">WebRTC / WebSocket</text>
              <text x="410" y="225" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">Browser · Embedded · SDK</text>
              <line x1="410" y1="188" x2="410" y2="170" stroke="#7C3AED" strokeWidth="2" strokeDasharray="6,4" />
              <polygon points="406,174 410,166 414,174" fill="#7C3AED" />

              {/* Mobile channel */}
              <rect x="620" y="80" width="160" height="100" rx="8" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
              <Smartphone x="680" y="96" size={28} color="#7C3AED" />
              <text x="700" y="148" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">Mobile Apps</text>
              <text x="700" y="164" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">React Native · iOS · Android</text>
              <line x1="620" y1="130" x2="510" y2="130" stroke="#7C3AED" strokeWidth="2" strokeDasharray="6,4" />
              <polygon points="514,126 506,130 514,134" fill="#7C3AED" />

              {/* Latency badge */}
              <rect x="362" y="20" width="96" height="30" rx="15" fill="#0A0A0A" />
              <text x="410" y="40" textAnchor="middle" fill="#A78BFA" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">&lt;100ms latency</text>
              <line x1="410" y1="50" x2="410" y2="90" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4,3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Solution Cards ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">What we solve</span>
            <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Purpose-built for your use case
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <Link key={sol.href} href={sol.href} style={{ textDecoration: "none" }}>
                  <article
                    className="nb-card"
                    style={{ height: "100%", display: "flex", flexDirection: "column", transition: "transform 0.15s", cursor: "pointer" }}
                  >
                    <div
                      className="feature-icon"
                      style={{ background: sol.color, marginBottom: "1.25rem", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4, border: "2px solid #0A0A0A" }}
                    >
                      <Icon size={22} color="#fff" />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.35rem" }}>
                      {sol.title}
                    </h3>
                    <p style={{ color: sol.color, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                      {sol.tagline}
                    </p>
                    <p style={{ color: "#444", lineHeight: 1.65, fontSize: "0.95rem", flexGrow: 1 }}>
                      {sol.description}
                    </p>
                    <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: 6, color: sol.color, fontWeight: 600, fontSize: "0.9rem" }}>
                      Learn more <ArrowRight size={14} />
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industry Highlights ── */}
      <section className="section section--surface" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">By industry</span>
            <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Tailored for regulated & high-volume sectors
            </h2>
            <p style={{ maxWidth: 560, margin: "0.75rem auto 0", color: "#555", lineHeight: 1.7 }}>
              Converse ships with compliance-ready patterns and industry-specific integrations so your team can move from pilot to production without reinventing the wheel.
            </p>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {industryHighlights.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link key={ind.href} href={ind.href} style={{ textDecoration: "none" }}>
                  <article className="nb-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", cursor: "pointer" }}>
                    <div style={{ background: "#7C3AED", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", flexShrink: 0 }}>
                      <Icon size={22} color="#fff" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "0.4rem" }}>{ind.name}</h3>
                      <p style={{ color: "#444", lineHeight: 1.6, fontSize: "0.95rem", marginBottom: "0.75rem" }}>{ind.description}</p>
                      <span style={{ color: "#7C3AED", fontWeight: 600, fontSize: "0.875rem", display: "flex", alignItems: "center", gap: 4 }}>
                        Explore industry <ArrowRight size={13} />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section section--invert" style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="container container--narrow">
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.25rem", marginBottom: "1rem" }}>
            Ready to deploy your first voice AI agent?
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.1rem", marginBottom: "2rem", lineHeight: 1.7 }}>
            Our solutions team will help you identify the right pattern, estimate call volumes, and architect your integration.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
