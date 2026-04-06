import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Zap, ArrowRight, ChevronRight, CheckCircle, RefreshCw, GitBranch, Wrench } from "lucide-react";

const LLM_PROVIDERS = [
  { name: "OpenAI", models: "GPT-4o, GPT-4o-mini, o1, o3", toolCalling: true, streaming: true, notes: "Industry standard. Full tool-calling support." },
  { name: "Anthropic", models: "Claude 3.7, 3.5 Sonnet, Haiku", toolCalling: true, streaming: true, notes: "Best-in-class reasoning and safety." },
  { name: "Azure OpenAI", models: "GPT-4o (regional)", toolCalling: true, streaming: true, notes: "Enterprise compliance, VNet integration." },
  { name: "AWS Bedrock", models: "Claude, Titan, Llama, Mistral", toolCalling: true, streaming: true, notes: "VPC-native. No data leaves your cloud." },
  { name: "Google Gemini", models: "Gemini 2.0 Flash, 1.5 Pro", toolCalling: true, streaming: true, notes: "Multimodal. Long context window." },
  { name: "Groq", models: "Llama-3.1-70B, Mixtral", toolCalling: true, streaming: true, notes: "Lowest latency inference on the market." },
  { name: "Mistral", models: "Mistral Large, Small, Nemo", toolCalling: true, streaming: true, notes: "European data residency option." },
  { name: "DeepSeek", models: "V3, R1", toolCalling: true, streaming: true, notes: "Exceptional cost-performance ratio." },
  { name: "Cerebras", models: "Llama-3.1-70B", toolCalling: false, streaming: true, notes: "Ultra-fast wafer-scale inference." },
  { name: "Fireworks AI", models: "Llama, Mixtral, Qwen", toolCalling: true, streaming: true, notes: "Production-grade hosted inference." },
  { name: "Together AI", models: "70+ models", toolCalling: true, streaming: true, notes: "Broad model catalog, competitive pricing." },
  { name: "SambaNova", models: "Llama-3.1-405B", toolCalling: false, streaming: true, notes: "Enterprise on-premise hardware." },
  { name: "NVIDIA NIM", models: "Llama, Mistral, custom", toolCalling: true, streaming: true, notes: "Deploy on NVIDIA-certified infrastructure." },
  { name: "Ollama", models: "Any GGUF model", toolCalling: true, streaming: true, notes: "100% local inference. No egress." },
  { name: "OpenRouter", models: "200+ models unified", toolCalling: true, streaming: true, notes: "Model routing and fallback API." },
  { name: "Grok", models: "Grok-3, Grok-2", toolCalling: true, streaming: true, notes: "xAI models with realtime knowledge." },
  { name: "Qwen", models: "Qwen2.5-72B, Turbo", toolCalling: true, streaming: true, notes: "Alibaba Cloud multilingual models." },
];

const ADVANCED_FEATURES = [
  {
    icon: RefreshCw,
    title: "Hot-Swap Providers",
    description:
      "Change your LLM backend in a single constructor line. No pipeline refactoring. No context changes. Useful for canary deployments and cost optimization.",
  },
  {
    icon: GitBranch,
    title: "A/B Testing",
    description:
      "Route a percentage of traffic to an alternate provider using Converse's built-in router. Measure response quality, latency, and cost side by side.",
  },
  {
    icon: Zap,
    title: "Streaming by Default",
    description:
      "All providers stream tokens to the TTS stage as they arrive, enabling first-audio latencies as low as 80ms from the moment the LLM begins responding.",
  },
  {
    icon: Wrench,
    title: "Unified Tool Calling",
    description:
      "Define tools once with Converse's schema format. They are automatically translated to each provider's native function-calling protocol.",
  },
];

export const metadata: Metadata = {
  title: "LLM Integrations | Converse",
  description: "Integrate OpenAI, Anthropic, Google, and other leading LLM providers into your Converse voice AI pipelines.",
  openGraph: {
    title: "LLM Integrations | Converse",
    description: "Integrate OpenAI, Anthropic, Google, and other leading LLM providers into your Converse voice AI pipelines.",
    type: "website",
  },
};

export default function LLMIntegrationsPage() {
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
              <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>LLM</span>
            </div>
            <span className="eyebrow">LLM Integrations</span>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}>
              17 language model providers.{" "}
              <span style={{ color: "var(--nb-violet)" }}>One tool-calling interface.</span>
            </h1>
            <p style={{ fontSize: "1.15rem", marginTop: "1.5rem", maxWidth: "640px", lineHeight: 1.7, opacity: 0.8 }}>
              From GPT-4o to on-premise Ollama, Converse wraps every LLM in a unified streaming interface
              with consistent tool-calling semantics, A/B routing, and hot-swap capability.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={16} style={{ marginLeft: "0.4rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Table */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div className="feature-icon" style={{ background: "#2563EB" }}>
              <Brain size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900 }}>Supported LLM Providers</h2>
              <p style={{ opacity: 0.65, marginTop: "0.25rem" }}>17 providers — cloud, on-premise, and edge inference</p>
            </div>
          </div>
          <div style={{ overflowX: "auto", border: "2px solid #000" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", minWidth: "650px" }}>
              <thead>
                <tr style={{ background: "#111", color: "#fff" }}>
                  {["Provider", "Models", "Tool Calling", "Streaming", "Notes"].map((h) => (
                    <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LLM_PROVIDERS.map((p, i) => (
                  <tr key={p.name} style={{ borderBottom: "1.5px solid #000", background: i % 2 === 0 ? "#fff" : "#FAFAF8" }}>
                    <td style={{ padding: "0.7rem 1rem", fontWeight: 800 }}>{p.name}</td>
                    <td style={{ padding: "0.7rem 1rem", fontSize: "0.83rem", opacity: 0.75 }}>{p.models}</td>
                    <td style={{ padding: "0.7rem 1rem" }}>
                      {p.toolCalling ? (
                        <span style={{ color: "#059669", fontWeight: 700, fontSize: "0.85rem" }}>✓ Yes</span>
                      ) : (
                        <span style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: "0.7rem 1rem" }}>
                      {p.streaming ? (
                        <span style={{ background: "#DCFCE7", border: "1.5px solid #000", padding: "0.15rem 0.5rem", fontSize: "0.75rem", fontWeight: 700 }}>✓ Stream</span>
                      ) : (
                        <span style={{ background: "#FEF3C7", border: "1.5px solid #000", padding: "0.15rem 0.5rem", fontSize: "0.75rem", fontWeight: 700 }}>Batch</span>
                      )}
                    </td>
                    <td style={{ padding: "0.7rem 1rem", fontSize: "0.82rem", opacity: 0.7 }}>{p.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900 }}>Advanced LLM orchestration features</h2>
            <p style={{ marginTop: "0.75rem", opacity: 0.65, maxWidth: "520px", margin: "0.75rem auto 0" }}>
              Production voice AI needs more than a provider wrapper. Converse adds orchestration primitives
              that teams need at scale.
            </p>
          </div>
          <div className="cards-2" style={{ gap: "1.5rem" }}>
            {ADVANCED_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="nb-card">
                  <div className="feature-icon" style={{ background: "#2563EB", marginBottom: "1rem" }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p style={{ opacity: 0.75, lineHeight: 1.65 }}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Snippet */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Developer Experience</span>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: "0.5rem", lineHeight: 1.2 }}>
                Swap providers with one line of config
              </h2>
              <p style={{ marginTop: "1rem", lineHeight: 1.7, opacity: 0.75 }}>
                All LLM providers share the same constructor signature. System prompts, tools, context
                windows, and streaming callbacks work identically across providers. A/B test in production
                with zero code changes.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "1.5rem" }}>
                {[
                  "Consistent streaming token events",
                  "Tool call results fed back uniformly",
                  "Context injection via shared memory interface",
                  "Automatic token counting and truncation",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <CheckCircle size={17} color="var(--nb-violet)" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.95rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="code-block" style={{ fontSize: "0.8rem", lineHeight: 1.75 }}>
              <div style={{ color: "#94A3B8", marginBottom: "0.5rem" }}># A/B test OpenAI vs Anthropic</div>
              <div>
                <span style={{ color: "#F472B6" }}>from</span>
                <span style={{ color: "#E2E8F0" }}> converse.llm </span>
                <span style={{ color: "#F472B6" }}>import</span>
                <span style={{ color: "#86EFAC" }}> OpenAILLMService, AnthropicLLMService, LLMRouter</span>
              </div>
              <br />
              <div>
                <span style={{ color: "#E2E8F0" }}>primary </span>
                <span style={{ color: "#F472B6" }}>=</span>
                <span style={{ color: "#86EFAC" }}> OpenAILLMService</span>
                <span style={{ color: "#E2E8F0" }}>(</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>model</span><span style={{ color: "#E2E8F0" }}>=</span>
                <span style={{ color: "#FDE68A" }}>"gpt-4o"</span><span style={{ color: "#E2E8F0" }}>,</span>
              </div>
              <div><span style={{ color: "#E2E8F0" }}>)</span></div>
              <br />
              <div>
                <span style={{ color: "#E2E8F0" }}>challenger </span>
                <span style={{ color: "#F472B6" }}>=</span>
                <span style={{ color: "#86EFAC" }}> AnthropicLLMService</span>
                <span style={{ color: "#E2E8F0" }}>(</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>model</span><span style={{ color: "#E2E8F0" }}>=</span>
                <span style={{ color: "#FDE68A" }}>"claude-3-7-sonnet-latest"</span><span style={{ color: "#E2E8F0" }}>,</span>
              </div>
              <div><span style={{ color: "#E2E8F0" }}>)</span></div>
              <br />
              <div>
                <span style={{ color: "#E2E8F0" }}>router </span>
                <span style={{ color: "#F472B6" }}>=</span>
                <span style={{ color: "#86EFAC" }}> LLMRouter</span>
                <span style={{ color: "#E2E8F0" }}>(</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>primary</span><span style={{ color: "#E2E8F0" }}>=primary,</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>challenger</span><span style={{ color: "#E2E8F0" }}>=challenger,</span>
              </div>
              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#7DD3FC" }}>challenger_pct</span><span style={{ color: "#E2E8F0" }}>=</span><span style={{ color: "#FCA5A5" }}>0.10</span><span style={{ color: "#E2E8F0" }}>,</span>
              </div>
              <div><span style={{ color: "#E2E8F0" }}>)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--invert">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff" }}>
            Bring your own LLM contracts
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", fontSize: "1.05rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            Converse works with your existing provider agreements. Use your Azure OpenAI deployment,
            AWS Bedrock configuration, or private Ollama cluster without new vendor relationships.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
