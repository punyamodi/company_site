import Link from "next/link";
import {
  BookOpen,
  Video,
  Users,
  Zap,
  Layers,
  Gamepad2,
  GraduationCap,
  Film,
  ArrowRight,
  CheckCircle,
  Sparkles,
  GitBranch,
} from "lucide-react";

export const metadata = {
  title: "Interactive Storytelling | Converse – AI-Powered Narrative Experiences",
  description:
    "Create immersive AI-driven narratives with Converse: dynamic character voice, branching story generation, video avatars (HeyGen, Tavus), and multi-character dialogues.",
};

const businessValues = [
  { icon: Zap, title: "Immersive Experiences", description: "Real-time LLM narrative generation and voice synthesis create stories that respond to every user choice, producing genuinely unique sessions." },
  { icon: Users, title: "User Engagement", description: "Interactive characters that remember past interactions and evolve with each session drive return visits and session depth beyond passive media." },
  { icon: Layers, title: "Unlimited Narrative Branching", description: "Move beyond predetermined story trees. Dynamic LLM generation means the narrative adapts to any user input, not just pre-scripted forks." },
  { icon: Film, title: "New Revenue Streams", description: "Character licensing, premium story arcs, and enterprise training simulations open monetization models unavailable to static content." },
];

const technicalCapabilities = [
  "Dynamic narrative generation via streaming LLM with story state",
  "Multi-character voice synthesis with distinct voice profiles",
  "Video avatar integration: HeyGen, Tavus, Simli",
  "Real-time character switching with voice transition management",
  "Persistent memory for character backstory and user history",
  "Branching narrative state machine with LLM-guided decisions",
  "Emotion-driven TTS modulation (fear, joy, tension, calm)",
  "WebRTC streaming for low-latency character video delivery",
  "OpenTelemetry tracing for story path analytics",
];

const useCases = [
  { icon: Gamepad2, title: "Interactive Games", description: "NPCs that converse naturally, remember player history, and improvise responses — creating emergent narrative that static dialog trees cannot deliver." },
  { icon: GraduationCap, title: "Training Simulations", description: "Voice-based scenario training for customer service, medical, and compliance workflows — with AI that responds dynamically to trainee actions." },
  { icon: Film, title: "Interactive Media", description: "Branching TV, podcasts, and short films where viewers direct the narrative in real time through voice commands and choices." },
  { icon: Sparkles, title: "Live Entertainment", description: "AI characters for theme parks, escape rooms, and live events — with video avatars, voice, and contextual memory for each guest." },
];

export default function InteractiveStorytellingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Solutions › Interactive Storytelling</span>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
                Stories that
                <br />
                <span style={{ color: "#A78BFA" }}>respond to you</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Converse powers the next generation of interactive narrative — AI characters with distinct voices, dynamic story generation, and video avatars that react to every user choice in real time.
              </p>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {/* Avatar stack */}
              {[
                { label: "HeyGen", desc: "Photorealistic video avatars", color: "#7C3AED" },
                { label: "Tavus", desc: "Personalized video AI characters", color: "#2563EB" },
                { label: "Simli", desc: "Real-time animated face synthesis", color: "#059669" },
              ].map((av) => (
                <div
                  key={av.label}
                  style={{ background: "rgba(255,255,255,0.07)", border: `2px solid ${av.color}60`, borderRadius: 8, padding: "0.875rem 1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: av.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{av.label}</div>
                    <div style={{ fontSize: "0.8rem", opacity: 0.65 }}>{av.desc}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: "0.25rem", padding: "0.875rem 1.25rem", background: "rgba(124,58,237,0.15)", border: "2px solid rgba(167,139,250,0.4)", borderRadius: 8 }}>
                <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                  <strong style={{ color: "#A78BFA" }}>Multi-character</strong> — switch between characters mid-narrative with distinct voices and video
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Branching Narrative SVG ── */}
      <section className="section section--surface" style={{ padding: "64px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Narrative architecture</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Dynamic branching narrative tree
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 820 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 820, height: "auto" }}
              aria-label="Branching narrative tree: story beginning branches into user-choice paths, each generating unique LLM continuations"
            >
              {/* Root */}
              <rect x="330" y="10" width="160" height="44" rx="8" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="410" y="28" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Story Opening</text>
              <text x="410" y="44" textAnchor="middle" fill="#C4B5FD" fontSize="10" fontFamily="var(--font-bricolage)">LLM narrates scene</text>

              {/* Branch lines from root */}
              <line x1="330" y1="54" x2="200" y2="100" stroke="#7C3AED" strokeWidth="2" />
              <line x1="410" y1="54" x2="410" y2="100" stroke="#7C3AED" strokeWidth="2" />
              <line x1="490" y1="54" x2="620" y2="100" stroke="#7C3AED" strokeWidth="2" />

              {/* User choice badges */}
              <text x="185" y="96" textAnchor="middle" fill="#059669" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">"Go left"</text>
              <text x="410" y="96" textAnchor="middle" fill="#D97706" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">"Stay put"</text>
              <text x="630" y="96" textAnchor="middle" fill="#DC2626" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">"Call for help"</text>

              {/* Level 2 nodes */}
              {[
                { x: 100, color: "#059669", line1: "Path A", line2: "Dynamic scene" },
                { x: 320, color: "#D97706", line1: "Path B", line2: "LLM response" },
                { x: 560, color: "#DC2626", line1: "Path C", line2: "New character" },
              ].map((n) => (
                <g key={n.x}>
                  <rect x={n.x} y="106" width="140" height="44" rx="6" fill="#FAF8F3" stroke={n.color} strokeWidth="2" />
                  <text x={n.x + 70} y="126" textAnchor="middle" fill={n.color} fontSize="12" fontFamily="var(--font-bricolage)" fontWeight="700">{n.line1}</text>
                  <text x={n.x + 70} y="140" textAnchor="middle" fill="#555" fontSize="10" fontFamily="var(--font-bricolage)">{n.line2}</text>
                </g>
              ))}

              {/* Level 2 → 3 branches */}
              {[
                { from: 170, to: [100, 170], color: "#059669" },
                { from: 390, to: [330, 450], color: "#D97706" },
                { from: 630, to: [570, 690], color: "#DC2626" },
              ].map((b, i) => (
                <g key={i}>
                  <line x1={b.from} y1="150" x2={b.to[0] + 60} y2="190" stroke={b.color} strokeWidth="1.5" strokeDasharray="4,3" />
                  <line x1={b.from} y1="150" x2={b.to[1] + 60} y2="190" stroke={b.color} strokeWidth="1.5" strokeDasharray="4,3" />
                </g>
              ))}

              {/* Level 3 — sub-branches */}
              {[40, 120, 270, 380, 510, 640].map((x, i) => (
                <g key={x}>
                  <rect x={x} y="190" width="90" height="36" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" />
                  <text x={x + 45} y="213" textAnchor="middle" fill="#0A0A0A" fontSize="9" fontFamily="var(--font-bricolage)" fontWeight="600">Branch {i + 1}</text>
                </g>
              ))}

              {/* LLM label at bottom */}
              <rect x="290" y="248" width="240" height="26" rx="13" fill="#0A0A0A" />
              <text x="410" y="265" textAnchor="middle" fill="#A78BFA" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Every node: real-time LLM generation</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Business Value ── */}
      <section className="section" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Business value</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Why interactive AI narrative wins
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {businessValues.map((bv) => {
              const Icon = bv.icon;
              return (
                <article key={bv.title} className="nb-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ background: "#059669", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", flexShrink: 0 }}>
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
                Production-grade storytelling infrastructure
              </h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {technicalCapabilities.map((cap) => (
                  <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle size={16} color="#059669" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.5 }}>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="code-block" style={{ fontSize: "0.81rem", lineHeight: 1.7 }}>
                <pre style={{ margin: 0, overflowX: "auto" }}>{`from converse import Pipeline
from converse.storytelling import (
    NarrativeEngine,
    Character,
    StoryState,
)
from converse.avatar import TavusAvatar
from converse.memory import Mem0Memory

narrator = Character(
    name="The Oracle",
    voice_id="oracle-deep",
    avatar=TavusAvatar(replica_id=REPLICA),
    personality="mysterious, wise, cryptic",
)

villain = Character(
    name="Malachar",
    voice_id="villain-harsh",
    personality="menacing, theatrical",
)

engine = NarrativeEngine(
    characters=[narrator, villain],
    state=StoryState(memory=Mem0Memory()),
    llm_model="gpt-4o",
    emotion_driven_tts=True,
)

pipeline = Pipeline(
    transport=WebRTCTransport(),
    engine=engine,
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
              Where interactive storytelling transforms industries
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
          <GitBranch size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Bring your characters to life with AI
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our team will help you design character voice profiles, integrate video avatars, and architect the narrative state machine for your experience.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
