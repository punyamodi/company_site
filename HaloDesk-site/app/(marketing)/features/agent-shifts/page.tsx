import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Globe,
  Shield,
  ToggleLeft,
  Users,
  Zap,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agent Shifts — HaloDesk",
  description:
    "Structured scheduling for 24/7 support teams. Define shifts per agent, per day, with timezone support.",
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SHIFT_FEATURES = [
  {
    icon: Calendar,
    title: "Per-Agent Day Scheduling",
    desc: "Define start and end times for each agent on each day of the week. Monday 9–5, Thursday 7–3, Sunday on-call — every agent's schedule is unique.",
    accent: "#0EA5A0",
  },
  {
    icon: Globe,
    title: "Timezone Support",
    desc: "Each shift records the agent's timezone independently. No offset confusion — agents in London, Mumbai, and São Paulo all have shifts in their local time.",
    accent: "#6366F1",
  },
  {
    icon: Shield,
    title: "Uniqueness Enforcement",
    desc: "One shift per agent per day — enforced at the data level. No duplicate entries, no accidental double-scheduling, no routing conflicts.",
    accent: "#F59E0B",
  },
  {
    icon: Clock,
    title: "Queue Coverage Visibility",
    desc: "See at a glance which hours have coverage gaps. HaloDesk surfaces uncovered periods so you can fill them before they affect your SLAs.",
    accent: "#FF5A36",
  },
  {
    icon: Zap,
    title: "Automation Integration",
    desc: "Trigger workflow automations based on shift state. Send a handoff message when an agent goes off-shift, or escalate when no agents are on.",
    accent: "#059669",
  },
  {
    icon: Users,
    title: "Shift-Based Routing",
    desc: "Conversations are automatically routed only to agents currently on shift. No messages land in an offline agent's queue.",
    accent: "#8B5CF6",
  },
];

const AUTO_ASSIGN_BENEFITS = [
  "Conversations never assigned to offline agents",
  "SLA clock pauses when no agents are on shift",
  "Queue depth balanced across available agents",
  "Overflow routing rules kick in for uncovered hours",
  "Agent skills and shift coverage combined in routing logic",
];

export default function AgentShiftsPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--nb-invert)",
          borderBottom: "2px solid var(--nb-border)",
          paddingTop: 96,
          paddingBottom: 80,
        }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}
        />
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Copy */}
            <div>
              <div className="eyebrow anim-fade-up">
                <Calendar size={12} />
                Agent Shifts
              </div>
              <h1
                className="anim-fade-up delay-100"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  lineHeight: 1,
                  marginBottom: 24,
                  letterSpacing: "-0.04em",
                  color: "var(--nb-bg)",
                }}
              >
                Coverage without{" "}
                <em
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--nb-teal)",
                    fontWeight: 700,
                  }}
                >
                  calendar chaos
                </em>
              </h1>
              <p
                className="anim-fade-up delay-200"
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(250,248,243,0.75)",
                  lineHeight: 1.7,
                  maxWidth: 500,
                  marginBottom: 40,
                }}
              >
                Define shift windows per agent, per day, with full timezone support.
                HaloDesk routes conversations only to agents currently on shift —
                so coverage gaps never become SLA breaches.
              </p>
              <div
                className="anim-fade-up delay-300"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <Link href="/contact" className="btn-invert">
                  Contact Sales <ArrowRight size={16} />
                </Link>
                <Link href="/features" className="btn-secondary">
                  View All Features <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hero SVG — weekly shift schedule */}
            <div className="anim-fade-up delay-200">
              <svg
                viewBox="0 0 480 420"
                fill="none"
                style={{
                  width: "100%",
                  maxWidth: 480,
                  filter: "drop-shadow(6px 6px 0px #0A0A0A)",
                }}
              >
                {/* Card */}
                <rect x="0" y="0" width="480" height="420" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
                <rect x="0" y="0" width="480" height="44" rx="4" fill="#0A1628" stroke="#0A0A0A" strokeWidth="2" />
                <circle cx="16" cy="16" r="5" fill="#ff5f57" />
                <circle cx="32" cy="16" r="5" fill="#febc2e" />
                <circle cx="48" cy="16" r="5" fill="#28c840" />
                <text x="68" y="27" fill="#FAF8F3" fontSize="12" fontWeight="700" fontFamily="sans-serif">Shift Schedule · This Week</text>

                {/* Time axis labels */}
                {["8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM"].map((t, i) => (
                  <text key={t} x={80 + i * 56} y={64} fill="#7A746A" fontSize="8" textAnchor="middle" fontFamily="sans-serif">{t}</text>
                ))}
                <line x1="80" y1="68" x2="464" y2="68" stroke="#C8C3B5" strokeWidth="1" />

                {/* Agent rows */}
                {[
                  {
                    name: "Sarah Chen",
                    tz: "EST",
                    shifts: [{ start: 0, end: 4, day: 0 }, { start: 0, end: 4, day: 1 }, { start: 0, end: 4, day: 2 }, { start: 0, end: 4, day: 3 }, { start: 0, end: 4, day: 4 }],
                    color: "#0EA5A0",
                    online: true,
                  },
                  {
                    name: "James Wright",
                    tz: "PST",
                    shifts: [{ start: 2, end: 6, day: 0 }, { start: 2, end: 6, day: 1 }, { start: 2, end: 6, day: 2 }, { start: 2, end: 6, day: 3 }, { start: 2, end: 6, day: 4 }],
                    color: "#6366F1",
                    online: true,
                  },
                  {
                    name: "Priya Sharma",
                    tz: "IST",
                    shifts: [{ start: 0, end: 2, day: 0 }, { start: 0, end: 2, day: 1 }, { start: 0, end: 2, day: 2 }],
                    color: "#F59E0B",
                    online: false,
                  },
                  {
                    name: "Lucas Oliveira",
                    tz: "BRT",
                    shifts: [{ start: 1, end: 5, day: 0 }, { start: 1, end: 5, day: 2 }, { start: 1, end: 5, day: 4 }],
                    color: "#FF5A36",
                    online: false,
                  },
                  {
                    name: "Yuki Tanaka",
                    tz: "JST",
                    shifts: [{ start: 3, end: 6, day: 1 }, { start: 3, end: 6, day: 3 }],
                    color: "#059669",
                    online: false,
                  },
                ].map((agent, agentIdx) => (
                  <g key={agent.name}>
                    {/* Row bg */}
                    <rect
                      x="0"
                      y={78 + agentIdx * 58}
                      width="480"
                      height="56"
                      fill={agentIdx % 2 === 0 ? "transparent" : "rgba(0,0,0,0.018)"}
                    />
                    {/* Agent info */}
                    <circle cx="16" cy={108 + agentIdx * 58} r="4" fill={agent.color}>
                      {agent.online && (
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
                      )}
                    </circle>
                    <text x="26" y={104 + agentIdx * 58} fill="#0A1628" fontSize="10" fontWeight="700" fontFamily="sans-serif">{agent.name}</text>
                    <text x="26" y={116 + agentIdx * 58} fill="#7A746A" fontSize="8" fontFamily="sans-serif">{agent.tz}{agent.online ? " · on shift" : ""}</text>

                    {/* Shift blocks — show Mon-Fri only */}
                    {agent.shifts.map((shift, si) => (
                      <rect
                        key={si}
                        x={80 + shift.start * 56 + shift.day * 2}
                        y={82 + agentIdx * 58}
                        width={(shift.end - shift.start) * 56}
                        height="40"
                        rx="3"
                        fill={agent.color}
                        fillOpacity="0.85"
                        stroke={agent.color}
                        strokeWidth="1"
                      />
                    ))}
                  </g>
                ))}

                {/* Current time indicator */}
                <line x1="220" y1="68" x2="220" y2="408" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3">
                  <animate attributeName="x1" values="180;220;260;220;180" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="180;220;260;220;180" dur="8s" repeatCount="indefinite" />
                </line>
                <rect x="206" y="56" width="28" height="14" rx="2" fill="#DC2626">
                  <animate attributeName="x" values="166;206;246;206;166" dur="8s" repeatCount="indefinite" />
                </rect>
                <text x="220" y="67" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="800" fontFamily="sans-serif">NOW</text>

                {/* Legend */}
                <line x1="16" y1="400" x2="464" y2="400" stroke="#C8C3B5" strokeWidth="1" />
                <circle cx="26" cy="412" r="4" fill="#0EA5A0" />
                <text x="34" y="416" fill="#7A746A" fontSize="8" fontFamily="sans-serif">On shift now</text>
                <circle cx="110" cy="412" r="4" fill="#C8C3B5" />
                <text x="118" y="416" fill="#7A746A" fontSize="8" fontFamily="sans-serif">Offline</text>
                <rect x="170" y="408" width="20" height="8" rx="2" fill="#DC2626" />
                <text x="194" y="416" fill="#7A746A" fontSize="8" fontFamily="sans-serif">Current time</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIFT FEATURES ───────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">Core Features</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
            }}
          >
            Built for{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              global teams
            </em>
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            Agent shifts aren&apos;t just cosmetic status flags — they&apos;re wired into
            routing, auto-assignment, and SLA enforcement. When a shift ends, the
            agent disappears from the routing pool automatically.
          </p>
          <div className="cards-3">
            {SHIFT_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 24, animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className="feature-icon"
                    style={{ marginBottom: 16, background: f.accent }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      marginBottom: 8,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--nb-ink-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DAY GRID VISUAL ──────────────────────────────────────── */}
      <section
        className="section"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div className="section-label">Day-by-Day Coverage</div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  marginBottom: 20,
                  lineHeight: 1.1,
                }}
              >
                One shift per agent{" "}
                <em
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--nb-orange)",
                  }}
                >
                  per day
                </em>
              </h2>
              <p
                style={{
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                The uniqueness constraint ensures clean scheduling — one row per
                agent per day per account. Agents can have completely different
                hours on weekdays versus weekends, stored with independent timezone
                values for distributed teams.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: 6,
                  marginBottom: 24,
                }}
              >
                {DAYS.map((day, i) => (
                  <div
                    key={day}
                    style={{
                      padding: "10px 4px",
                      textAlign: "center",
                      border: "2px solid var(--nb-border)",
                      borderRadius: 4,
                      background: i < 5 ? "var(--nb-teal)" : "var(--nb-surface)",
                      boxShadow: i < 5 ? "var(--shadow-brutal-sm)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 800,
                        color: i < 5 ? "#fff" : "var(--nb-ink-muted)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {day.slice(0, 3).toUpperCase()}
                    </div>
                    <div
                      style={{
                        marginTop: 4,
                        fontSize: "0.625rem",
                        color: i < 5 ? "rgba(255,255,255,0.8)" : "var(--nb-ink-dim)",
                      }}
                    >
                      {i < 5 ? "covered" : "weekend"}
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--nb-ink-dim)",
                  fontStyle: "italic",
                }}
              >
                Weekend shifts fully supported — assign on-call agents with their own
                timezone-aware schedule.
              </p>
            </div>

            {/* Auto-assignment integration */}
            <div>
              <div
                className="nb-card"
                style={{ padding: 28, background: "var(--nb-invert)", color: "var(--nb-bg)" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "var(--nb-teal)",
                      border: "2px solid rgba(255,255,255,0.2)",
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Zap size={16} color="#fff" />
                  </div>
                  <div>
                    <div
                      style={{ fontWeight: 800, fontSize: "0.9375rem" }}
                    >
                      Auto-Assignment Integration
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(250,248,243,0.6)",
                      }}
                    >
                      Routing only routes to agents on shift
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {AUTO_ASSIGN_BENEFITS.map((b) => (
                    <div
                      key={b}
                      style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                    >
                      <CheckCircle
                        size={14}
                        color="var(--nb-teal)"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(250,248,243,0.8)",
                          lineHeight: 1.5,
                        }}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CODE VISUAL ──────────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">Shift Configuration</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
            }}
          >
            Create shifts{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              via API
            </em>
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 40,
              lineHeight: 1.7,
            }}
          >
            The shift creation payload is a simple JSON object — one shift per
            agent per day, with start time, end time, and timezone recorded
            independently for every record.
          </p>
          <div className="code-block anim-fade-up">
            <div className="code-block__bar">
              <span className="code-dot code-dot--r" />
              <span className="code-dot code-dot--y" />
              <span className="code-dot code-dot--g" />
              <span
                style={{ color: "#6b7280", fontSize: 11, marginLeft: 8 }}
              >
                shift_create.json
              </span>
            </div>
            <div className="code-block__body">
              <pre>
                <span className="tok-var">{"{"}{"\n"}</span>
                <span className="tok-string">  "agent_id"</span>
                <span className="tok-var">: </span>
                <span className="tok-string">"agt_01HXYZ234ABC"</span>
                <span className="tok-var">,{"\n"}</span>
                <span className="tok-string">  "day_of_week"</span>
                <span className="tok-var">: </span>
                <span className="tok-string">"monday"</span>
                <span className="tok-var">,{"\n"}</span>
                <span className="tok-string">  "start_time"</span>
                <span className="tok-var">: </span>
                <span className="tok-string">"09:00"</span>
                <span className="tok-var">,{"\n"}</span>
                <span className="tok-string">  "end_time"</span>
                <span className="tok-var">: </span>
                <span className="tok-string">"17:30"</span>
                <span className="tok-var">,{"\n"}</span>
                <span className="tok-string">  "timezone"</span>
                <span className="tok-var">: </span>
                <span className="tok-string">"Europe/London"</span>
                <span className="tok-var">,{"\n"}</span>
                <span className="tok-string">  "active"</span>
                <span className="tok-var">: </span>
                <span className="tok-keyword">true</span>
                {"\n}"}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--nb-invert)",
          borderTop: "2px solid var(--nb-border)",
        }}
      >
        <div
          className="dot-grid"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{ textAlign: "center", position: "relative" }}
        >
          <div
            className="eyebrow anim-fade-up"
            style={{ margin: "0 auto 24px" }}
          >
            <Globe size={12} />
            Global Coverage
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "var(--nb-bg)",
              marginBottom: 20,
            }}
          >
            Always-on support.{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              Zero routing chaos.
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{
              color: "rgba(250,248,243,0.7)",
              maxWidth: 520,
              margin: "0 auto 40px",
              lineHeight: 1.7,
              fontSize: "1.0625rem",
            }}
          >
            Define once. Let HaloDesk handle the routing. Shift schedules feed
            directly into auto-assignment — so no conversation is ever assigned
            to an agent who&apos;s off the clock.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-invert">
              Talk to sales <ArrowRight size={16} />
            </Link>
            <Link href="/features" className="btn-secondary">
              Explore all features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
