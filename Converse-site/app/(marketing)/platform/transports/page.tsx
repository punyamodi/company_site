import Link from "next/link";
import {
  ArrowRight, Radio, Wifi, Phone, Globe, Server,
  ChevronRight, Check, Network, Zap, Shield,
} from "lucide-react";

const TRANSPORTS = [
  {
    category: "WebRTC",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    items: [
      {
        name: "Daily",
        desc: "Enterprise-grade WebRTC infrastructure. Global network with automatic codec selection, noise cancellation, and sub-100ms audio delivery. Battle-tested in production at scale.",
        strengths: ["Global PoPs", "SFU architecture", "Built-in noise cancellation"],
      },
      {
        name: "LiveKit",
        desc: "Open-standard WebRTC with self-hosting flexibility. Supports room-based sessions, multi-party calls, and screen sharing alongside voice AI pipelines.",
        strengths: ["Self-hostable", "Multi-party rooms", "Selective forwarding"],
      },
      {
        name: "SmallWebRTC",
        desc: "Lightweight peer-to-peer WebRTC implementation for lean deployments. Ideal for direct client-server connections where infrastructure overhead matters.",
        strengths: ["Minimal overhead", "P2P direct", "Simple integration"],
      },
    ],
  },
  {
    category: "WebSocket",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    items: [
      {
        name: "FastAPI WebSocket",
        desc: "High-performance async WebSocket server built on FastAPI and Starlette. Handles thousands of concurrent connections with Python's asyncio event loop.",
        strengths: ["Async-native", "High concurrency", "Easy deployment"],
      },
      {
        name: "WebSocket Server",
        desc: "Generic WebSocket transport for custom server implementations. Supports any WebSocket-capable backend, enabling integration with existing infrastructure.",
        strengths: ["Protocol-agnostic", "Custom backends", "Flexible routing"],
      },
    ],
  },
  {
    category: "Messaging",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    items: [
      {
        name: "WhatsApp",
        desc: "Native WhatsApp Business API integration via Twilio. Voice messages, text, and media over the world&apos;s most-used messaging platform — without a separate integration layer.",
        strengths: ["WhatsApp Business API", "Voice message support", "Media handling"],
      },
    ],
  },
];

const TELEPHONY = [
  { name: "Twilio", desc: "Leading cloud communications platform. Full support for voice calls, SMS, and SIP trunking at global scale." },
  { name: "Plivo", desc: "Cost-effective voice and SMS APIs with global carrier coverage and reliable call quality." },
  { name: "Exotel", desc: "Enterprise telephony for Asia-Pacific markets. Strong coverage in India, Southeast Asia, and ANZ regions." },
  { name: "Telnyx", desc: "Carrier-grade telephony with multi-cloud redundancy, BYOC SIP trunking, and competitive per-minute pricing." },
  { name: "Vonage", desc: "Ericsson-backed enterprise voice APIs with strong European presence and advanced call management features." },
];

function NetworkTopologySVG() {
  const spokes = [
    { x: 340, y: 30, label: "Daily WebRTC", color: "#06B6D4", angle: -90 },
    { x: 560, y: 80, label: "LiveKit", color: "#06B6D4", angle: -30 },
    { x: 620, y: 160, label: "SmallWebRTC", color: "#06B6D4", angle: 10 },
    { x: 540, y: 250, label: "WhatsApp", color: "#059669", angle: 45 },
    { x: 380, y: 290, label: "WebSocket", color: "#7C3AED", angle: 80 },
    { x: 200, y: 270, label: "FastAPI WS", color: "#7C3AED", angle: 120 },
    { x: 90, y: 180, label: "Twilio", color: "#F97316", angle: 170 },
    { x: 120, y: 80, label: "Vonage", color: "#F97316", angle: -150 },
  ];
  const cx = 340;
  const cy = 160;

  return (
    <svg
      width="100%"
      height="340"
      viewBox="0 0 700 340"
      fill="none"
      style={{ display: "block", maxWidth: 700 }}
    >
      <style>{`
        @keyframes spokePulse {
          0%, 100% { stroke-opacity: 0.4; }
          50% { stroke-opacity: 1; }
        }
        @keyframes hubGlow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(124,58,237,0.5)); }
          50% { filter: drop-shadow(0 0 14px rgba(124,58,237,0.8)); }
        }
      `}</style>

      {/* Spokes */}
      {spokes.map((spoke, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={spoke.x}
          y2={spoke.y}
          stroke={spoke.color}
          strokeWidth="2"
          strokeDasharray="6,4"
          style={{ animation: `spokePulse 2s ease ${i * 0.25}s infinite` }}
        />
      ))}

      {/* Center hub */}
      <circle
        cx={cx}
        cy={cy}
        r="52"
        fill="var(--nb-violet)"
        stroke="#0A0A0A"
        strokeWidth="2"
        style={{ animation: "hubGlow 3s ease infinite" }}
      />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="inherit">
        Converse
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="inherit">
        Pipeline Hub
      </text>
      <text x={cx} y={cy + 22} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="inherit">
        &lt;100ms
      </text>

      {/* Spoke nodes */}
      {spokes.map((spoke, i) => (
        <g key={i}>
          <circle
            cx={spoke.x}
            cy={spoke.y}
            r="28"
            fill="var(--nb-bg)"
            stroke={spoke.color}
            strokeWidth="2"
          />
          <text
            x={spoke.x}
            y={spoke.y + 4}
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="#0A0A0A"
            fontFamily="inherit"
          >
            {spoke.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function TransportsPage() {
  return (
    <div
      style={{
        background: "var(--nb-bg)",
        minHeight: "100vh",
        fontFamily: "var(--font-bricolage, sans-serif)",
        color: "var(--nb-ink)",
        overflowX: "hidden",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{ position: "relative", padding: "96px 24px 80px", overflow: "hidden" }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "absolute",
            top: "-5%",
            right: "-5%",
            width: 420,
            height: 420,
            background:
              "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container container--narrow">
          <Link
            href="/platform"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "var(--nb-ink-muted)",
              textDecoration: "none",
              marginBottom: 24,
            }}
          >
            <ChevronRight size={12} style={{ transform: "rotate(180deg)" }} /> Platform
          </Link>
          <div className="eyebrow anim-fade-up">Transport Layer</div>
          <h1
            className="anim-fade-up delay-100"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              marginBottom: 24,
              maxWidth: 720,
            }}
          >
            Deploy over any network,{" "}
            <span style={{ color: "var(--nb-violet)" }}>any protocol</span>
          </h1>
          <p
            className="anim-fade-up delay-200"
            style={{
              fontSize: "clamp(15px,1.7vw,19px)",
              color: "var(--nb-ink-muted)",
              lineHeight: 1.75,
              marginBottom: 40,
              maxWidth: 600,
            }}
          >
            Converse decouples the pipeline logic from the transport layer.
            Use WebRTC for low-latency browser calls, WebSocket for custom
            backends, WhatsApp for consumer messaging, or telephony for phone
            infrastructure — all with the same pipeline code.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-primary">
              Contact Sales <ArrowRight size={15} />
            </Link>
            <Link href="/platform" className="btn-secondary">
              View Platform <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NETWORK TOPOLOGY SVG ── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              Transport Ecosystem
            </p>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 12 }}>
              One pipeline hub, every transport type
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--nb-ink-muted)",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              The Converse pipeline connects to any transport via a uniform
              input/output interface. Swap transports without changing a line of
              business logic.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <NetworkTopologySVG />
          </div>
        </div>
      </section>

      {/* ── TRANSPORT COMPARISON TABLE ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="section-label">Choosing a Transport</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 560, marginBottom: 16 }}>
              Match the transport to your deployment context
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", maxWidth: 560, lineHeight: 1.75 }}>
              Transport choice affects latency, infrastructure complexity, security
              posture, and cost. Use this table to make the right call for your
              deployment scenario.
            </p>
          </div>
          <div
            style={{
              border: "2px solid var(--nb-border)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              boxShadow: "var(--shadow-brutal)",
            }}
          >
            <table className="cv-table" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Transport</th>
                  <th>Best For</th>
                  <th>Latency</th>
                  <th>Setup Complexity</th>
                  <th>Scale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "Daily WebRTC", best: "Browser / mobile apps", latency: "< 50ms", setup: "Managed", scale: "Global" },
                  { t: "LiveKit WebRTC", best: "Self-hosted / multi-party", latency: "< 50ms", setup: "Medium", scale: "Enterprise" },
                  { t: "SmallWebRTC", best: "Direct P2P connections", latency: "< 30ms", setup: "Low", scale: "Single sessions" },
                  { t: "FastAPI WebSocket", best: "Custom backends", latency: "< 80ms", setup: "Low", scale: "High concurrency" },
                  { t: "WebSocket Server", best: "Existing WS infrastructure", latency: "< 80ms", setup: "Low", scale: "Flexible" },
                  { t: "WhatsApp", best: "Consumer messaging apps", latency: "< 500ms", setup: "Medium", scale: "Global" },
                  { t: "Twilio / Plivo", best: "PSTN phone calls", latency: "< 300ms", setup: "Medium", scale: "Global telephony" },
                  { t: "Vonage / Telnyx", best: "Enterprise voice / SIP", latency: "< 200ms", setup: "Medium", scale: "Enterprise" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700 }}>{row.t}</td>
                    <td style={{ color: "var(--nb-ink-muted)" }}>{row.best}</td>
                    <td>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "var(--nb-violet)",
                          fontFamily: "var(--font-jetbrains, monospace)",
                        }}
                      >
                        {row.latency}
                      </span>
                    </td>
                    <td style={{ color: "var(--nb-ink-muted)" }}>{row.setup}</td>
                    <td style={{ color: "var(--nb-ink-muted)" }}>{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TRANSPORT DETAIL CARDS ── */}
      <section className="section section--surface" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-label">Transport Details</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", maxWidth: 480 }}>
              Every transport, first-class support
            </h2>
          </div>
          {TRANSPORTS.map((group) => (
            <div key={group.category} style={{ marginBottom: 48 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  background: group.bg,
                  border: `2px solid ${group.color}`,
                  borderRadius: "var(--radius)",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: group.color,
                  }}
                >
                  {group.category}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${group.items.length}, 1fr)`,
                  gap: 20,
                }}
              >
                {group.items.map((item) => (
                  <div key={item.name} className="nb-card" style={{ padding: 32 }}>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        marginBottom: 12,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--nb-ink-muted)",
                        lineHeight: 1.7,
                        marginBottom: 16,
                      }}
                    >
                      {item.desc}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {item.strengths.map((s) => (
                        <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <Check size={11} color={group.color} />
                          <span style={{ fontSize: 12.5, color: "var(--nb-ink-muted)", fontWeight: 600 }}>
                            {s}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TELEPHONY SERIALIZERS ── */}
      <section className="section" style={{ padding: "96px 24px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "flex-start",
            }}
          >
            <div>
              <p className="section-label">Telephony Serializers</p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", marginBottom: 20 }}>
                Every major carrier, one integration
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Telephony serializers in Converse handle the protocol translation
                between PSTN audio formats (μ-law, A-law, G.711) and the pipeline&apos;s
                internal frame model. Connect any carrier without custom codec code.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
                {[
                  "G.711 μ-law / A-law",
                  "RTP audio framing",
                  "SIP INVITE support",
                  "DTMF pass-through",
                  "Call transfer hooks",
                  "Voicemail detection",
                ].map((cap) => (
                  <span
                    key={cap}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 11px",
                      background: "var(--nb-surface)",
                      border: "1.5px solid var(--nb-border)",
                      borderRadius: "var(--radius)",
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "var(--nb-ink-muted)",
                    }}
                  >
                    <Check size={10} color="var(--nb-violet)" />
                    {cap}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {TELEPHONY.map((t) => (
                <div
                  key={t.name}
                  className="nb-card nb-card--surface"
                  style={{ padding: "20px 24px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 6,
                    }}
                  >
                    <Phone size={14} color="var(--nb-violet)" />
                    <span style={{ fontSize: 15, fontWeight: 800 }}>{t.name}</span>
                  </div>
                  <p style={{ fontSize: 12.5, color: "var(--nb-ink-muted)", lineHeight: 1.6 }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="section section--invert" style={{ padding: "80px 24px" }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,44px)",
              color: "#FAF8F3",
              marginBottom: 20,
            }}
          >
            Connect your infrastructure to Converse
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(250,248,243,0.65)",
              marginBottom: 40,
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto 40px",
            }}
          >
            Our solutions team will help you select and configure the right
            transport stack for your latency, security, and scale requirements.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              className="btn-invert"
              style={{ fontSize: 16, padding: "16px 36px" }}
            >
              Contact Sales <ArrowRight size={16} />
            </Link>
            <Link
              href="/platform/security"
              className="btn-secondary"
              style={{
                fontSize: 16,
                padding: "16px 36px",
                background: "rgba(255,255,255,0.06)",
                color: "#FAF8F3",
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: "none",
              }}
            >
              Security Overview
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
