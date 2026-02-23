import Link from "next/link";
import {
  Heart,
  Brain,
  RefreshCw,
  UserCheck,
  Sparkles,
  BookOpen,
  Dumbbell,
  Smile,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "AI Companions | Converse – Persistent, Personalized Voice AI",
  description:
    "Build emotionally-aware AI companions with long-term memory, adaptive personality, and multi-session continuity for coaching, wellness, education, and entertainment.",
};

const businessValues = [
  { icon: Heart, title: "Deep User Engagement", description: "Companions that remember preferences, past conversations, and emotional context create stickiness that transactional bots cannot match." },
  { icon: UserCheck, title: "Meaningful Personalization", description: "Adaptive conversation style, personalized recommendations, and proactive check-ins make every interaction feel uniquely tailored." },
  { icon: RefreshCw, title: "Multi-Session Continuity", description: "Memory persists across sessions via mem0, so users pick up exactly where they left off — days or weeks later." },
  { icon: Brain, title: "Emotional Context Awareness", description: "Real-time sentiment analysis shapes tone, pacing, and content selection for empathetic, context-appropriate responses." },
];

const technicalCapabilities = [
  "Persistent long-term memory via mem0 integration",
  "Emotional sentiment detection and tone adaptation",
  "Configurable personality profiles (warmth, assertiveness, humor)",
  "Multi-session continuity with memory summarization",
  "Streaming voice responses with sub-100ms first-token delivery",
  "Video avatar support: HeyGen, Tavus, Simli",
  "Secure per-user memory namespacing and data isolation",
  "OpenTelemetry observability for conversation quality metrics",
];

const useCases = [
  { icon: Dumbbell, title: "Coaching & Mentoring", description: "Productivity coaches, fitness trainers, and executive mentors that track progress, adapt plans, and provide real accountability between human sessions." },
  { icon: Smile, title: "Mental Wellness Support", description: "Supportive wellness companions that provide consistent, non-judgmental conversation, CBT-aligned guidance, and mood tracking — as an adjunct to professional care." },
  { icon: BookOpen, title: "Educational Tutors", description: "Subject-matter tutors that remember what each student has learned, adapt difficulty in real time, and celebrate milestones across a full curriculum." },
  { icon: Sparkles, title: "Entertainment Characters", description: "Fan-facing characters, game NPCs, and interactive fictional personas with rich backstories, consistent voice, and evolving narrative memory." },
];

export default function AICompanionsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section section--invert" style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#C4B5FD" }}>Solutions › AI Companions</span>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontFamily: "var(--font-bricolage)", fontWeight: 800, lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
                Companions that
                <br />
                <span style={{ color: "#A78BFA" }}>remember everything</span>
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.85, marginBottom: "2rem", maxWidth: 520 }}>
                Build emotionally-aware AI companions with persistent memory, adaptive personality, and multi-session continuity. Converse provides the voice AI infrastructure — you define the persona.
              </p>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "0.75rem" }}>
              {/* Memory highlights */}
              {[
                { label: "Remembers your goals from last week", type: "memory" },
                { label: "Adapts tone based on your current mood", type: "emotion" },
                { label: "Picks up mid-conversation after 3 days", type: "continuity" },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(167,139,250,0.4)", borderRadius: 10, padding: "0.9rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: m.type === "memory" ? "#7C3AED" : m.type === "emotion" ? "#DC2626" : "#059669", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>{m.label}</span>
                </div>
              ))}
              <div style={{ marginTop: "0.5rem", padding: "0.875rem 1.25rem", background: "rgba(124,58,237,0.2)", border: "2px solid rgba(167,139,250,0.5)", borderRadius: 8 }}>
                <div style={{ fontSize: "0.8rem", color: "#C4B5FD", fontWeight: 600 }}>Powered by mem0</div>
                <div style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: 2 }}>Persistent, searchable memory across sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conversation + Memory SVG ── */}
      <section className="section section--surface" style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Memory architecture</span>
            <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700 }}>
              Conversation bubbles connected to memory nodes
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 800 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 800, height: "auto" }}
              aria-label="Animated conversation bubbles with memory nodes showing persistent memory connections"
            >
              {/* Session 1 bubbles */}
              <rect x="20" y="20" width="180" height="40" rx="10" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
              <text x="110" y="45" textAnchor="middle" fill="#4C1D95" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">Session 1: "I want to run a 5K"</text>

              <rect x="20" y="74" width="200" height="40" rx="10" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="120" y="99" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">Companion: goal saved, plan created</text>

              {/* Memory node 1 */}
              <circle cx="300" cy="70" r="28" fill="#FAF8F3" stroke="#7C3AED" strokeWidth="2" />
              <text x="300" y="66" textAnchor="middle" fill="#7C3AED" fontSize="9" fontFamily="var(--font-bricolage)" fontWeight="700">Memory</text>
              <text x="300" y="78" textAnchor="middle" fill="#555" fontSize="8" fontFamily="var(--font-bricolage)">5K goal</text>
              <text x="300" y="89" textAnchor="middle" fill="#555" fontSize="8" fontFamily="var(--font-bricolage)">week 1 data</text>
              <line x1="220" y1="74" x2="272" y2="72" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4,3" />

              {/* Session 2 bubbles */}
              <rect x="360" y="20" width="200" height="40" rx="10" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
              <text x="460" y="45" textAnchor="middle" fill="#4C1D95" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">Session 2 (3 days later): "How am I doing?"</text>

              <rect x="360" y="74" width="220" height="40" rx="10" fill="#7C3AED" stroke="#0A0A0A" strokeWidth="2" />
              <text x="470" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="var(--font-bricolage)" fontWeight="600">"You ran twice. On track for your 5K!"</text>
              <text x="470" y="108" textAnchor="middle" fill="#C4B5FD" fontSize="9" fontFamily="var(--font-bricolage)">Recalled from persistent memory</text>

              {/* Memory node 2 */}
              <circle cx="300" cy="170" r="30" fill="#FAF8F3" stroke="#059669" strokeWidth="2" />
              <text x="300" y="163" textAnchor="middle" fill="#059669" fontSize="9" fontFamily="var(--font-bricolage)" fontWeight="700">Emotional</text>
              <text x="300" y="175" textAnchor="middle" fill="#555" fontSize="8" fontFamily="var(--font-bricolage)">Context</text>
              <text x="300" y="186" textAnchor="middle" fill="#555" fontSize="8" fontFamily="var(--font-bricolage)">mood: proud</text>

              {/* Memory node 3 */}
              <circle cx="490" cy="170" r="30" fill="#FAF8F3" stroke="#DC2626" strokeWidth="2" />
              <text x="490" y="163" textAnchor="middle" fill="#DC2626" fontSize="9" fontFamily="var(--font-bricolage)" fontWeight="700">Personality</text>
              <text x="490" y="175" textAnchor="middle" fill="#555" fontSize="8" fontFamily="var(--font-bricolage)">warm, direct</text>
              <text x="490" y="186" textAnchor="middle" fill="#555" fontSize="8" fontFamily="var(--font-bricolage)">humor: med</text>

              <line x1="300" y1="140" x2="300" y2="140" stroke="#059669" strokeWidth="1.5" strokeDasharray="4,3" />
              <line x1="300" y1="98" x2="300" y2="140" stroke="#059669" strokeWidth="1.5" strokeDasharray="4,3" />
              <line x1="460" y1="114" x2="490" y2="140" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4,3" />
              <line x1="328" y1="170" x2="460" y2="170" stroke="#ccc" strokeWidth="1.5" strokeDasharray="4,3" />

              {/* mem0 label */}
              <rect x="320" y="218" width="160" height="28" rx="6" fill="#0A0A0A" />
              <text x="400" y="236" textAnchor="middle" fill="#A78BFA" fontSize="11" fontFamily="var(--font-bricolage)" fontWeight="700">Powered by mem0</text>

              {/* Persistent storage line */}
              <line x1="300" y1="200" x2="370" y2="218" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="490" y1="200" x2="450" y2="218" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="3,3" />
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
              Why companions outperform transactional bots
            </h2>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {businessValues.map((bv) => {
              const Icon = bv.icon;
              return (
                <article key={bv.title} className="nb-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ background: "#DC2626", borderRadius: 4, border: "2px solid #0A0A0A", padding: "10px", flexShrink: 0 }}>
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
              <span className="section-label">Technical architecture</span>
              <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-bricolage)", fontWeight: 700, marginBottom: "1rem" }}>
                Memory, emotion, and personality — by design
              </h2>
              <p style={{ color: "#444", lineHeight: 1.75, marginBottom: "2rem" }}>
                Converse's companion framework combines real-time voice processing with mem0's persistent memory store, giving every companion a coherent identity that evolves with each user interaction.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {technicalCapabilities.map((cap) => (
                  <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle size={16} color="#DC2626" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.5 }}>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="code-block" style={{ fontSize: "0.81rem", lineHeight: 1.7 }}>
                <pre style={{ margin: 0, overflowX: "auto" }}>{`from converse import Pipeline
from converse.memory import Mem0Memory
from converse.transport import WebRTCTransport
from converse.processors import (
    DeepgramSTT,
    OpenAILLM,
    ElevenLabsTTS,
)
from converse.avatar import HeyGenAvatar

memory = Mem0Memory(user_id=user.id)

pipeline = Pipeline(
    transport=WebRTCTransport(),
    stt=DeepgramSTT(),
    llm=OpenAILLM(
        model="gpt-4o",
        system_prompt=COMPANION_PROMPT,
        memory=memory,
        emotion_tracking=True,
    ),
    tts=ElevenLabsTTS(
        voice="nova",
        emotion_modulation=True,
    ),
    avatar=HeyGenAvatar(
        avatar_id=AVATAR_ID,
        streaming=True,
    ),
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
              Where AI companions create the most value
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
          <MessageCircle size={40} color="#A78BFA" style={{ margin: "0 auto 1rem" }} />
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "2.1rem", marginBottom: "1rem" }}>
            Build companions your users come back to
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our team will help you design memory schemas, configure personality profiles, and select the right avatar and voice stack for your audience.
          </p>
          <Link href="/contact" className="btn-invert">
            Contact Sales <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </main>
  );
}
