"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, Check, Minus, Circle, Code2, Zap, Globe, Package,
  ChevronRight,
} from "lucide-react";

/* ── Provider matrix data ──────────────────────────────────── */
type Support = "yes" | "no" | "partial";

interface Provider {
  name: string;
  slug?: string;
  chat: Support;
  streaming: Support;
  embeddings: Support;
  vision: Support;
  tools: Support;
  notes: string;
  featured?: boolean;
}

const PROVIDERS: Provider[] = [
  { name: "OpenAI",         slug: "openai",        chat: "yes", streaming: "yes", embeddings: "yes", vision: "yes", tools: "yes", notes: "Full API parity incl. o1, o3 reasoning models", featured: true },
  { name: "Anthropic",      slug: "anthropic",     chat: "yes", streaming: "yes", embeddings: "no",  vision: "yes", tools: "yes", notes: "Extended Thinking, Claude 3 / 3.5 / 3.7 all models", featured: true },
  { name: "AWS Bedrock",    slug: "aws-bedrock",   chat: "yes", streaming: "yes", embeddings: "yes", vision: "yes", tools: "yes", notes: "SigV4 signing, Provisioned Throughput ARNs, multi-region", featured: true },
  { name: "Google Vertex AI", slug: "google-vertex", chat: "yes", streaming: "yes", embeddings: "yes", vision: "yes", tools: "yes", notes: "ADC + Service Account, Gemini 1.5, Search grounding", featured: true },
  { name: "Azure OpenAI",   slug: "azure",         chat: "yes", streaming: "yes", embeddings: "yes", vision: "yes", tools: "yes", notes: "Entra ID, custom deployments, private VNET", featured: true },
  { name: "Google Gemini",  chat: "yes", streaming: "yes", embeddings: "yes", vision: "yes", tools: "yes", notes: "AI Studio key + Vertex unified under one config" },
  { name: "Mistral AI",     chat: "yes", streaming: "yes", embeddings: "no",  vision: "yes", tools: "yes", notes: "Mistral-large, Codestral, Pixtral" },
  { name: "Groq",           slug: "groq",          chat: "yes", streaming: "yes", embeddings: "no",  vision: "yes", tools: "no",  notes: "LPU inference, 500+ TPS zero-copy SSE pipeline", featured: true },
  { name: "Cerebras",       chat: "yes", streaming: "yes", embeddings: "no",  vision: "partial", tools: "no",  notes: "WSE architecture, partial vision on select models" },
  { name: "Ollama",         slug: "ollama",        chat: "yes", streaming: "yes", embeddings: "partial", vision: "partial", tools: "yes", notes: "Local / air-gapped, vLLM + HuggingFace TGI compatible", featured: true },
  { name: "OpenRouter",     chat: "yes", streaming: "yes", embeddings: "no",  vision: "partial", tools: "yes", notes: "Multi-provider aggregator passthrough" },
  { name: "xAI / Grok",    chat: "yes", streaming: "yes", embeddings: "no",  vision: "yes", tools: "yes", notes: "Grok-1.5 / Grok-2 models" },
  { name: "Perplexity",     chat: "yes", streaming: "yes", embeddings: "no",  vision: "no",  tools: "no",  notes: "Online models with web grounding" },
  { name: "HuggingFace",    chat: "yes", streaming: "yes", embeddings: "yes", vision: "no",  tools: "no",  notes: "Inference Endpoints + Hub models" },
  { name: "ElevenLabs",     chat: "no",  streaming: "yes", embeddings: "no",  vision: "no",  tools: "no",  notes: "Audio TTS streaming only" },
  { name: "Nebius AI",      chat: "yes", streaming: "yes", embeddings: "yes", vision: "no",  tools: "no",  notes: "OpenAI-compatible Nebius cloud endpoints" },
  { name: "Together AI",    chat: "yes", streaming: "yes", embeddings: "yes", vision: "yes", tools: "yes", notes: "Open-weight model hosting at scale" },
  { name: "Fireworks AI",   chat: "yes", streaming: "yes", embeddings: "yes", vision: "yes", tools: "yes", notes: "FireFunction, FireLLaVA, ultra-fast inference" },
  { name: "DeepSeek",       chat: "yes", streaming: "yes", embeddings: "no",  vision: "no",  tools: "yes", notes: "DeepSeek-V2, Coder, R1 reasoning series" },
];

const SDK_COMPAT = [
  { name: "OpenAI Python / JS SDK",  note: "Drop-in: change base_url only" },
  { name: "Anthropic SDK",            note: "Automatic schema translation" },
  { name: "AWS Bedrock SDK",          note: "SigV4 transparent proxy" },
  { name: "Google GenAI SDK",         note: "Parts-array format handled" },
  { name: "LiteLLM",                  note: "All providers via litellm/ prefix" },
  { name: "LangChain",                note: "ChatOpenAI with custom base_url" },
  { name: "PydanticAI",               note: "OpenAIModel(base_url=...) pattern" },
];

const FEATURED_CARDS = PROVIDERS.filter((p) => p.featured && p.slug);

function SupportIcon({ v }: { v: Support }) {
  if (v === "yes")     return <Check size={15} color="var(--nb-green)" strokeWidth={2.5} />;
  if (v === "no")      return <Minus size={15} color="var(--nb-ink-dim)" strokeWidth={2.5} />;
  return <Circle size={13} color="var(--nb-orange)" strokeWidth={2.5} style={{ opacity: 0.8 }} />;
}

const PY_SNIPPET = `from openai import OpenAI

# ✦ Drop-in replacement — change base_url, keep the rest
client = OpenAI(
    api_key="ig-your-virtual-key",
    base_url="https://gateway.infergate.ai/v1",
)

response = client.chat.completions.create(
    model="gpt-4o",          # or "claude-3-5-sonnet-latest"
    messages=[{"role": "user", "content": "Hello from InferGate!"}],
)
print(response.choices[0].message.content)`;

const TS_SNIPPET = `import OpenAI from "openai";

// ✦ TypeScript / Node — identical pattern
const client = new OpenAI({
  apiKey: "ig-your-virtual-key",
  baseURL: "https://gateway.infergate.ai/v1",
});

const res = await client.chat.completions.create({
  model: "claude-3-5-sonnet-latest",  // switch any provider
  messages: [{ role: "user", content: "Hello from InferGate!" }],
});
console.log(res.choices[0].message.content);`;

export default function IntegrationsPage() {
  const [tab, setTab] = useState<"python" | "typescript">("python");

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingBottom: 72 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
            <span className="eyebrow"><Globe size={12} /> Integrations</span>
            <h1 style={{ fontSize: "clamp(40px,6vw,76px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1, marginBottom: 24 }}>
              25+ providers.{" "}
              <span className="text-serif" style={{ color: "var(--nb-orange)" }}>One</span>{" "}
              standard API.
            </h1>
            <p style={{ fontSize: "clamp(16px,2vw,20px)", color: "var(--nb-ink-muted)", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.65 }}>
              InferGate speaks every AI provider&apos;s language fluently — so you never have to rewrite your code when you switch models.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Get Started <ArrowRight size={14} />
              </Link>
              <Link href="#matrix" className="btn-secondary">
                View Provider Matrix <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ display: "flex", justifyContent: "center", gap: 0, marginTop: 64, flexWrap: "wrap", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", borderRadius: "var(--radius)", maxWidth: 720, margin: "64px auto 0", overflow: "hidden" }}
          >
            {[
              { v: "25+",    l: "LLM Providers" },
              { v: "10,400", l: "req/s throughput" },
              { v: "0.3ms",  l: "P50 latency" },
              { v: "100µs",  l: "CEL routing" },
            ].map((s, i) => (
              <div key={s.l} style={{ flex: 1, minWidth: 140, padding: "20px 24px", borderRight: i < 3 ? "2px solid var(--nb-border)" : "none", textAlign: "center", background: i % 2 === 0 ? "var(--nb-bg)" : "var(--nb-surface)" }}>
                <div style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 24, fontWeight: 700, color: "var(--nb-ink)", letterSpacing: "-0.04em" }}>{s.v}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--nb-ink-dim)", textTransform: "uppercase", letterSpacing: ".08em", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured provider cards ────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <p className="section-label">Featured Providers</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40 }}>
            First-class integrations, zero compromise.
          </h2>
          <div className="cards-4" style={{ gap: 16 }}>
            {FEATURED_CARDS.map((p, i) => (
              <motion.div
                key={p.slug}
                className="nb-card"
                style={{ padding: 28 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <div style={{ width: 40, height: 40, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontWeight: 800, fontSize: 13, letterSpacing: "-0.03em" }}>
                  {p.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.03em" }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.6, marginBottom: 16 }}>{p.notes}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                  {(["chat","streaming","embeddings","vision","tools"] as const).map((cap) => p[cap] === "yes" && (
                    <span key={cap} style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", background: "var(--nb-green-subtle)", color: "var(--nb-green)", border: "1px solid var(--nb-green)", borderRadius: 2, textTransform: "uppercase", letterSpacing: ".06em" }}>{cap}</span>
                  ))}
                </div>
                <Link href={`/integrations/${p.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--nb-ink)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-orange)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"}
                >
                  View docs <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Provider matrix ───────────────────────────────── */}
      <section id="matrix" className="section">
        <div className="container">
          <p className="section-label">Provider Matrix</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8 }}>
            Complete capability coverage.
          </h2>
          <p style={{ color: "var(--nb-ink-muted)", marginBottom: 40, fontSize: 16 }}>
            Every provider, every capability — at a glance.
          </p>

          {/* Legend */}
          <div style={{ display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              { icon: <Check size={13} color="var(--nb-green)" strokeWidth={2.5} />, label: "Supported" },
              { icon: <Circle size={11} color="var(--nb-orange)" strokeWidth={2.5} />, label: "Partial" },
              { icon: <Minus size={13} color="var(--nb-ink-dim)" strokeWidth={2.5} />, label: "Not available" },
            ].map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--nb-ink-muted)", fontWeight: 600 }}>
                {l.icon} {l.label}
              </div>
            ))}
          </div>

          <div style={{ border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table className="ig-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: 160 }}>Provider</th>
                    <th style={{ textAlign: "center" }}>Chat</th>
                    <th style={{ textAlign: "center" }}>Streaming</th>
                    <th style={{ textAlign: "center" }}>Embeddings</th>
                    <th style={{ textAlign: "center" }}>Vision</th>
                    <th style={{ textAlign: "center" }}>Tools</th>
                    <th style={{ minWidth: 280 }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {PROVIDERS.map((p) => (
                    <tr key={p.name}>
                      <td className="bold">
                        {p.slug ? (
                          <Link href={`/integrations/${p.slug}`} style={{ textDecoration: "none", color: "var(--nb-ink)", display: "inline-flex", alignItems: "center", gap: 6 }}
                            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-orange)"}
                            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--nb-ink)"}
                          >
                            {p.name} {p.featured && <ArrowRight size={11} />}
                          </Link>
                        ) : p.name}
                      </td>
                      {(["chat","streaming","embeddings","vision","tools"] as const).map((cap) => (
                        <td key={cap} style={{ textAlign: "center" }}><SupportIcon v={p[cap]} /></td>
                      ))}
                      <td style={{ fontSize: 13, color: "var(--nb-ink-muted)" }}>{p.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Drop-in SDK replacement ────────────────────────── */}
      <section className="section section--invert">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p className="section-label" style={{ color: "rgba(250,248,243,0.5)" }}>Drop-In Replacement</p>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20, color: "var(--nb-bg)" }}>
                One line of code.{" "}
                <span className="text-serif" style={{ color: "var(--nb-yellow)" }}>Every provider.</span>
              </h2>
              <p style={{ color: "rgba(250,248,243,0.65)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                Change your <code style={{ fontFamily: "var(--font-jetbrains,monospace)", background: "rgba(245,197,24,0.15)", padding: "2px 6px", borderRadius: 2, color: "var(--nb-yellow)", fontSize: 14 }}>base_url</code> to InferGate&apos;s endpoint. That&apos;s it. Your existing OpenAI SDK code routes to any of 25+ providers, with unified auth, rate limiting, and observability.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Existing OpenAI SDK code — unchanged",
                  "Virtual keys replace per-provider credentials",
                  "Automatic schema translation per provider",
                  "Full request/response observability built-in",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ width: 20, height: 20, background: "var(--nb-yellow)", border: "2px solid var(--nb-yellow)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, borderRadius: "2px" }}>
                      <Check size={11} color="var(--nb-ink)" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: 14.5, color: "rgba(250,248,243,0.8)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Tab bar */}
              <div style={{ display: "flex", gap: 0, marginBottom: 0, border: "2px solid var(--nb-border)", borderBottom: "none", borderRadius: "4px 4px 0 0", overflow: "hidden" }}>
                {(["python","typescript"] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)}
                    style={{ flex: 1, padding: "10px 16px", background: tab === t ? "var(--nb-invert)" : "rgba(255,255,255,0.06)", border: "none", cursor: "pointer", fontFamily: "var(--font-jetbrains,monospace)", fontSize: 12, fontWeight: 700, color: tab === t ? "var(--nb-yellow)" : "rgba(250,248,243,0.5)", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: tab === t ? "2px solid var(--nb-yellow)" : "2px solid transparent" }}>
                    {t === "python" ? "Python" : "TypeScript"}
                  </button>
                ))}
              </div>
              <div className="code-block" style={{ borderRadius: "0 0 4px 4px" }}>
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" /><span className="code-dot code-dot--y" /><span className="code-dot code-dot--g" />
                  <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-jetbrains,monospace)" }}>
                    {tab === "python" ? "infergate_example.py" : "infergate_example.ts"}
                  </span>
                </div>
                <div className="code-block__body">
                  <pre style={{ margin: 0 }}>
                    <code dangerouslySetInnerHTML={{ __html: highlight(tab === "python" ? PY_SNIPPET : TS_SNIPPET) }} />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SDK Compatibility ──────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <p className="section-label">SDK Compatibility</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40 }}>
            Works with your existing stack.
          </h2>
          <div className="cards-3" style={{ gap: 16 }}>
            {SDK_COMPAT.map((sdk, i) => (
              <motion.div
                key={sdk.name}
                className="nb-card"
                style={{ padding: "24px 28px", display: "flex", alignItems: "center", gap: 16 }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div style={{ width: 36, height: 36, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "var(--radius)" }}>
                  <Package size={16} color="var(--nb-ink)" />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 3 }}>{sdk.name}</div>
                  <div style={{ fontSize: 12.5, color: "var(--nb-ink-muted)" }}>{sdk.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <div className="nb-card nb-card--yellow" style={{ padding: "56px 48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16 }}>
              <Zap size={18} />
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" }}>Get Connected</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 16 }}>
              Ready to unify your AI infrastructure?
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", marginBottom: 32, lineHeight: 1.65 }}>
              Talk to our team about connecting your stack to InferGate — from day-one setup to enterprise onboarding.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={14} />
              </Link>
              <Link href="/enterprise" className="btn-secondary">
                Enterprise Overview <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .providers-grid { grid-template-columns: 1fr !important; }
          .drop-in-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

/* ── Minimal syntax highlighter ────────────────────────────── */
function highlight(code: string): string {
  return code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/(#[^\n]*)/g, '<span class="tok-comment">$1</span>')
    .replace(/\b(from|import|const|let|await|async|new|print|console\.log)\b/g, '<span class="tok-keyword">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="tok-string">$1</span>')
    .replace(/\b(OpenAI|client)\b/g, '<span class="tok-func">$1</span>');
}
