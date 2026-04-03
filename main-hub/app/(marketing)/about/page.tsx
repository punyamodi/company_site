import type { Metadata } from "next";
import {
  ArrowRight, CheckCircle, Code2, Brain, Zap, Layers,
  Globe, Heart, Shield, Users,
} from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "About Us",
  description: "AI Platform is a full-service digital agency. Learn about who we are, how we work, and what drives us.",
};

const VALUES = [
  {
    icon: Code2,
    title: "Craft over shortcuts",
    desc: "We write code we're proud of. No copy-paste solutions, no technical debt shipped as a feature. Quality is non-negotiable.",
    color: "#F5C518",
  },
  {
    icon: Brain,
    title: "AI-native by default",
    desc: "We don't bolt AI on. We design products with AI as a core building block — from architecture to user experience.",
    color: "#7C3AED",
  },
  {
    icon: Heart,
    title: "Honest partnership",
    desc: "We tell you the truth even when it's uncomfortable. Good client relationships are built on transparency, not pleasantries.",
    color: "#E11D48",
  },
  {
    icon: Zap,
    title: "Speed with depth",
    desc: "We move fast. But fast doesn't mean reckless — it means experienced engineers who've solved these problems before.",
    color: "#0D9488",
  },
  {
    icon: Layers,
    title: "Full-stack ownership",
    desc: "We own the full picture. Frontend, backend, mobile, AI — one team, one codebase, one point of contact.",
    color: "#F59E0B",
  },
  {
    icon: Globe,
    title: "Built to last",
    desc: "We build products designed to scale. What we ship in month one should still be running smoothly in year five.",
    color: "#1D4ED8",
  },
];

const CAPABILITIES = [
  "React & Next.js development",
  "Node.js & Python backends",
  "Mobile apps (React Native, Flutter)",
  "AI agent development",
  "Customer chatbot engineering",
  "E-commerce & headless commerce",
  "UI/UX design & prototyping",
  "API design & integration",
  "DevOps & cloud infrastructure",
  "LLM integration & fine-tuning",
  "RAG & vector search systems",
  "Real-time & WebSocket systems",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "You tell us what you're building",
    desc: "We start with a free scoping call. Tell us your goals, timeline, and budget — we'll tell you if we're the right fit.",
    color: "#F5C518",
  },
  {
    num: "02",
    title: "We scope and propose",
    desc: "We put together a detailed proposal — technology choices, architecture, timeline, and fixed price or time-and-materials estimate.",
    color: "#7C3AED",
  },
  {
    num: "03",
    title: "We build it, iteratively",
    desc: "Weekly demos. Constant communication. You see progress every single week and can give feedback in real time.",
    color: "#0D9488",
  },
  {
    num: "04",
    title: "We launch and stick around",
    desc: "Production deployment, monitoring setup, and ongoing support. We don't disappear after launch day.",
    color: "#F59E0B",
  },
];

const TEAM_PLACEHOLDERS = [
  { role: "Founder & Lead Engineer", skills: "Full-stack, AI, System Architecture" },
  { role: "Senior Frontend Engineer", skills: "React, Next.js, TypeScript" },
  { role: "Senior Backend Engineer", skills: "Node.js, Python, Go, Databases" },
  { role: "AI/ML Engineer", skills: "LLMs, RAG, Agents, Fine-tuning" },
  { role: "Mobile Engineer", skills: "React Native, Flutter, iOS, Android" },
  { role: "UI/UX Designer", skills: "Figma, User Research, Design Systems" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex" }}>About Us</div>
          <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", letterSpacing: "-0.045em", marginBottom: 20, lineHeight: 1, maxWidth: 800 }}>
            We{"'"}re a digital agency that{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>
              actually builds things.
            </span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--nb-ink-muted)", lineHeight: 1.65, maxWidth: 640, marginBottom: 40 }}>
            AI Platform is a full-service digital agency. We design and build websites, web apps, mobile apps, AI agents, customer chatbots, and everything in between. Our team is small by design — senior engineers and designers who care deeply about the work.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary">
              Work With Us <ArrowRight size={15} />
            </a>
            <a href={`${BASE}/work/`} className="btn-secondary">
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section section--surface">
        <div className="container">
          <div className="hub-arch-grid">
            <div>
              <div className="section-label">What We Do</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-0.04em", marginBottom: 20, lineHeight: 1.05 }}>
                The full stack,{" "}
                <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>in-house.</span>
              </h2>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                Most agencies claim they do everything. We actually do. Our team has genuine depth across the entire digital stack — frontend, backend, mobile, AI, and design. No subcontracting, no freelancers filling gaps.
              </p>
              <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>
                We{"'"}re AI-native in the truest sense — not an agency that added an "AI" page to their website, but a team that has been building AI-powered products since the early days of LLMs. That thinking influences everything we build.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {CAPABILITIES.map((cap) => (
                <div key={cap} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "var(--nb-bg)", border: "1.5px solid var(--nb-border-faint)", fontSize: 13.5, fontWeight: 500, color: "var(--nb-ink)" }}>
                  <CheckCircle size={12} color="var(--nb-green)" style={{ flexShrink: 0 }} />
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">Our Values</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
              How we think about work.
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 500, margin: "0 auto" }}>
              These aren{"'"}t buzzwords on a wall. They{"'"}re the actual principles that guide how we work with clients and each other.
            </p>
          </div>

          <div className="hub-platform-grid">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="nb-card" style={{ padding: 28 }}>
                  <div style={{ width: 44, height: 44, background: value.color, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius)", marginBottom: 16 }}>
                    <Icon size={20} color="#0A0A0A" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{value.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", lineHeight: 1.65 }}>{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--elevated">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">The Team</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em", marginBottom: 16 }}>
              Small team. Big output.
            </h2>
            <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", maxWidth: 520, margin: "0 auto" }}>
              We{"'"}re a lean, senior team. Every person here has shipped real products — not just pushed code. No juniors running client work.
            </p>
          </div>
          <div className="hub-platform-grid">
            {TEAM_PLACEHOLDERS.map((member, i) => (
              <div key={i} className="nb-card" style={{ padding: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, background: "var(--nb-surface)", border: "2px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)", fontSize: 18, fontWeight: 800, color: "var(--nb-ink-dim)", fontFamily: "var(--font-bricolage,sans-serif)" }}>
                  {member.role[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>{member.role}</h4>
                  <p style={{ fontSize: 12.5, color: "var(--nb-ink-muted)", lineHeight: 1.5 }}>{member.skills}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32, padding: "20px 32px", background: "var(--nb-surface)", border: "2px solid var(--nb-border-faint)" }}>
            <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", fontWeight: 500 }}>
              We{"'"}re always looking for exceptional engineers and designers.{" "}
              <a href={`${BASE}/contact/`} style={{ color: "var(--nb-ink)", fontWeight: 700, textDecoration: "underline" }}>Get in touch</a> if you{"'"}d like to work with us.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section">
        <div className="container--narrow">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">Our Process</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.04em" }}>
              How we work with clients.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, alignItems: "start",
                  padding: "36px 0", borderBottom: i < PROCESS_STEPS.length - 1 ? "2px solid var(--nb-border-faint)" : "none",
                }}
              >
                <div style={{ width: 56, height: 56, background: step.color, border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius)", fontFamily: "var(--font-jetbrains,monospace)", fontSize: 14, fontWeight: 700 }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert" style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div className="container--tight" style={{ textAlign: "center", position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex", background: "var(--nb-yellow)" }}>Let{"'"}s Build Together</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.045em", color: "var(--nb-bg)", marginBottom: 16, lineHeight: 1 }}>
            Think we{"'"}d be a good fit?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(250,248,243,0.7)", marginBottom: 36, lineHeight: 1.65 }}>
            We{"'"}re selective about who we work with — not because we{"'"}re exclusive, but because we do our best work when we{"'"}re genuinely invested in what you{"'"}re building.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`${BASE}/contact/`} className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
              Start a Conversation <ArrowRight size={16} />
            </a>
            <a href={`${BASE}/services/`} className="btn-invert" style={{ fontSize: 16, padding: "16px 32px" }}>
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
