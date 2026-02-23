import Link from "next/link";
import { Wifi, Server, MessageSquare, ArrowRight, ChevronRight, CheckCircle, Gauge, Shield } from "lucide-react";

const TRANSPORTS = [
  {
    name: "Daily WebRTC",
    icon: Wifi,
    category: "WebRTC",
    latency: "30–80ms",
    scalability: "Global CDN edge nodes",
    bestFor: "Browser-based voice agents, real-time conferencing agents, customer-facing bots",
    features: [
      "Built-in STUN/TURN negotiation",
      "Automatic codec negotiation (Opus, VP8)",
      "Room-based multi-participant support",
      "Native echo cancellation and noise suppression",
    ],
    badge: "#7C3AED",
  },
  {
    name: "LiveKit",
    icon: Wifi,
    category: "WebRTC",
    latency: "25–70ms",
    scalability: "Self-hostable or managed cloud",
    bestFor: "High-scale voice deployments, multi-room architectures, hybrid cloud/on-premise",
    features: [
      "SFU-based scaling to thousands of participants",
      "Kubernetes-native deployment",
      "E2E encryption option",
      "Server-side recording and transcription hooks",
    ],
    badge: "#2563EB",
  },
  {
    name: "SmallWebRTC",
    icon: Wifi,
    category: "WebRTC",
    latency: "20–60ms",
    scalability: "Peer-to-peer, no infra",
    bestFor: "Development environments, edge deployments, minimal-infrastructure scenarios",
    features: [
      "Zero infrastructure dependency",
      "Direct peer-to-peer sessions",
      "Ideal for local and edge inference",
      "Minimal configuration required",
    ],
    badge: "#059669",
  },
  {
    name: "FastAPI WebSocket",
    icon: Server,
    category: "WebSocket",
    latency: "10–40ms",
    scalability: "Horizontal with load balancer",
    bestFor: "Internal APIs, server-to-server voice pipelines, backend bots",
    features: [
      "Native async Python integration",
      "Binary audio frame streaming",
      "Session state via dependency injection",
      "Compatible with any WebSocket client",
    ],
    badge: "#D97706",
  },
  {
    name: "WebSocket Server",
    icon: Server,
    category: "WebSocket",
    latency: "10–45ms",
    scalability: "Horizontal with sticky sessions",
    bestFor: "Custom protocol integrations, legacy system bridges, server-to-server pipelines",
    features: [
      "Protocol-agnostic binary frame transport",
      "Custom serializer support",
      "Backpressure-aware buffering",
      "Connection multiplexing",
    ],
    badge: "#DC2626",
  },
  {
    name: "WhatsApp Business",
    icon: MessageSquare,
    category: "Messaging",
    latency: "N/A (async messaging)",
    scalability: "Meta-managed delivery",
    bestFor: "Async customer engagement, notification bots, multi-turn text + voice hybrid flows",
    features: [
      "Official WhatsApp Business API",
      "Voice note transcription pipeline",
      "Template message support",
      "CRM webhook integration",
    ],
    badge: "#16A34A",
  },
];

const SELECTION_CRITERIA = [
  {
    scenario: "Public-facing customer voice bot",
    recommendation: "Daily WebRTC or LiveKit",
    reason: "Browser compatibility, global edge, NAT traversal handled automatically",
  },
  {
    scenario: "Internal call center backend",
    recommendation: "FastAPI WebSocket",
    reason: "Lowest overhead, direct server integration, full control of session lifecycle",
  },
  {
    scenario: "On-premise air-gapped deployment",
    recommendation: "LiveKit (self-hosted) or SmallWebRTC",
    reason: "No external service dependencies, all traffic stays within your infrastructure",
  },
  {
    scenario: "WhatsApp customer engagement",
    recommendation: "WhatsApp Business",
    reason: "Direct API integration with Meta-managed delivery and compliance",
  },
  {
    scenario: "Telco PSTN integration",
    recommendation: "Telephony (Twilio/Telnyx) + WebSocket",
    reason: "PSTN audio arrives via serializer, WebSocket bridges to Converse pipeline",
  },
];

export default function TransportIntegrationsPage() {
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
              <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Transport</span>
            </div>
            <span className="eyebrow">Transport Integrations</span>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}>
              WebRTC, WebSocket, Messaging.{" "}
              <span style={{ color: "var(--nb-violet)" }}>Pick your protocol.</span>
            </h1>
            <p style={{ fontSize: "1.15rem", marginTop: "1.5rem", maxWidth: "640px", lineHeight: 1.7, opacity: 0.8 }}>
              Converse supports 6 transport adapters across three protocol families. Your pipeline
              code is identical regardless of how audio arrives — swap transports without rewiring
              your pipeline graph.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: "0.4rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Cards */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>6 transport integrations</h2>
            <p style={{ marginTop: "0.75rem", opacity: 0.65, maxWidth: "520px", margin: "0.75rem auto 0" }}>
              Each transport adapter exposes the same frame-based audio interface to your pipeline.
              Latency profiles and scalability characteristics differ — choose accordingly.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {TRANSPORTS.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.name} className="nb-card" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "1.5rem", alignItems: "start" }}>
                  <div>
                    <div className="feature-icon" style={{ background: t.badge, color: "#fff", marginBottom: "0.5rem" }}>
                      <Icon size={20} />
                    </div>
                    <span style={{ background: t.badge, color: "#fff", border: "1.5px solid #000", padding: "0.15rem 0.5rem", fontSize: "0.7rem", fontWeight: 700, display: "block", textAlign: "center" }}>
                      {t.category}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.4rem" }}>{t.name}</h3>
                    <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: "0.75rem" }}><strong>Best for:</strong> {t.bestFor}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {t.features.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.83rem" }}>
                          <CheckCircle size={13} color={t.badge} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ minWidth: "140px", textAlign: "right" }}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <div style={{ fontSize: "0.7rem", opacity: 0.5, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.15rem" }}>Latency</div>
                      <div style={{ fontFamily: "monospace", fontWeight: 700, color: t.badge }}>{t.latency}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", opacity: 0.5, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.15rem" }}>Scale</div>
                      <div style={{ fontSize: "0.8rem", fontWeight: 600 }}>{t.scalability}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topology SVG */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Architecture</span>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem", lineHeight: 1.2 }}>
                Transport-agnostic pipeline topology
              </h2>
              <p style={{ marginTop: "1rem", lineHeight: 1.7, opacity: 0.75 }}>
                All transports deliver audio frames to the same pipeline entry point. The pipeline
                has no awareness of the transport layer — making your voice agent portable across
                WebRTC, WebSocket, and telephony channels without code changes.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginTop: "1.5rem" }}>
                {[
                  { icon: Gauge, text: "Adaptive jitter buffer per transport" },
                  { icon: Shield, text: "TLS 1.3 enforced at transport boundary" },
                  { icon: CheckCircle, text: "Automatic reconnect and session resume" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Icon size={17} color="var(--nb-violet)" />
                    <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Topology SVG */}
            <div className="nb-card" style={{ padding: "2rem" }}>
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Transport inputs */}
                <rect x="10" y="20" width="80" height="28" fill="#F5F0FF" stroke="#000" strokeWidth="2" />
                <text x="50" y="38" textAnchor="middle" fontSize="9" fontWeight="bold">Daily WebRTC</text>
                <rect x="10" y="64" width="80" height="28" fill="#F5F0FF" stroke="#000" strokeWidth="2" />
                <text x="50" y="82" textAnchor="middle" fontSize="9" fontWeight="bold">LiveKit</text>
                <rect x="10" y="108" width="80" height="28" fill="#F5F0FF" stroke="#000" strokeWidth="2" />
                <text x="50" y="126" textAnchor="middle" fontSize="9" fontWeight="bold">FastAPI WS</text>
                <rect x="10" y="152" width="80" height="28" fill="#F5F0FF" stroke="#000" strokeWidth="2" />
                <text x="50" y="170" textAnchor="middle" fontSize="9" fontWeight="bold">WebSocket</text>
                <rect x="10" y="196" width="80" height="28" fill="#F5F0FF" stroke="#000" strokeWidth="2" />
                <text x="50" y="214" textAnchor="middle" fontSize="9" fontWeight="bold">WhatsApp</text>
                <rect x="10" y="240" width="80" height="28" fill="#F5F0FF" stroke="#000" strokeWidth="2" />
                <text x="50" y="258" textAnchor="middle" fontSize="9" fontWeight="bold">Telephony</text>
                {/* Lines to Transport Adapter */}
                {[34, 78, 122, 166, 210, 254].map((y) => (
                  <line key={y} x1="90" y1={y} x2="155" y2="150" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="3 2" />
                ))}
                {/* Transport Adapter box */}
                <rect x="155" y="120" width="90" height="60" fill="#7C3AED" stroke="#000" strokeWidth="2.5" />
                <text x="200" y="145" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">TRANSPORT</text>
                <text x="200" y="158" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">ADAPTER</text>
                <text x="200" y="171" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Frame Interface</text>
                {/* Arrow to Pipeline */}
                <line x1="245" y1="150" x2="295" y2="150" stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />
                <defs>
                  <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill="#000" />
                  </marker>
                </defs>
                {/* Pipeline box */}
                <rect x="295" y="110" width="90" height="80" fill="#111" stroke="#000" strokeWidth="2.5" />
                <text x="340" y="140" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">CONVERSE</text>
                <text x="340" y="153" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">PIPELINE</text>
                <text x="340" y="168" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">STT→LLM→TTS</text>
                <text x="340" y="183" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Sub-100ms</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Guide */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <span className="section-label">Selection Guide</span>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem" }}>Which transport for your use case?</h2>
          </div>
          <div style={{ border: "2px solid #000", background: "#fff" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#111", color: "#fff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>Scenario</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>Recommended</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>Reason</th>
                </tr>
              </thead>
              <tbody>
                {SELECTION_CRITERIA.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1.5px solid #000", background: i % 2 === 0 ? "#fff" : "#FAFAF8" }}>
                    <td style={{ padding: "0.8rem 1rem", fontWeight: 700, fontSize: "0.9rem" }}>{row.scenario}</td>
                    <td style={{ padding: "0.8rem 1rem" }}>
                      <span style={{ background: "var(--nb-violet)", color: "#fff", border: "1.5px solid #000", padding: "0.15rem 0.6rem", fontSize: "0.78rem", fontWeight: 700, whiteSpace: "nowrap" }}>
                        {row.recommendation}
                      </span>
                    </td>
                    <td style={{ padding: "0.8rem 1rem", fontSize: "0.85rem", opacity: 0.7 }}>{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff" }}>
            Need help selecting the right transport?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.05rem" }}>
            Our solutions engineers will assess your infrastructure, latency requirements, and scale targets.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
