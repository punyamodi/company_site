"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Minus, Circle, ChevronRight } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────── */
type Support = "yes" | "no" | "partial";

interface CapRow {
  feature: string;
  status: Support;
  note?: string;
}

interface IntegrationData {
  name: string;
  tagline: string;
  description: string;
  capabilities: CapRow[];
  configSnippet: string;
  clientSnippet: string;
  highlights: string[];
}

/* ── Syntax highlighter ─────────────────────────────────────── */
function highlight(code: string): string {
  return code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/(#[^\n]*)/g, '<span class="tok-comment">$1</span>')
    .replace(/(\/\/[^\n]*)/g, '<span class="tok-comment">$1</span>')
    .replace(/\b(from|import|const|let|await|async|new|print|console\.log|return|if|else|true|false|null|undefined)\b/g, '<span class="tok-keyword">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="tok-string">$1</span>')
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="tok-string">$1</span>')
    .replace(/\b(\d[\d.]*)\b/g, '<span class="tok-number">$1</span>')
    .replace(/\b(OpenAI|Anthropic|client|os)\b/g, '<span class="tok-func">$1</span>');
}

/* ── All integration data ───────────────────────────────────── */
const INTEGRATIONS_DATA: Record<string, IntegrationData> = {
  openai: {
    name: "OpenAI & Azure OpenAI",
    tagline: "Full API parity — every endpoint, every model.",
    description:
      "InferGate provides complete parity with OpenAI's API surface: /v1/chat/completions, /v1/embeddings, /v1/models, streaming, function calling, and vision. Reasoning models (o1, o1-mini, o3) are fully supported with automatic reasoning_effort mapping. For Azure OpenAI, InferGate handles Entra ID tokens and API key auth, custom .openai.azure.com deployment endpoints, and project/organization ID headers — no client changes required.",
    capabilities: [
      { feature: "Chat Completions (/v1/chat/completions)", status: "yes" },
      { feature: "Streaming (SSE)", status: "yes" },
      { feature: "Embeddings (/v1/embeddings)", status: "yes" },
      { feature: "Vision / Image Input", status: "yes" },
      { feature: "Function Calling / Tool Use", status: "yes" },
      { feature: "Reasoning Models (o1, o1-mini, o3)", status: "yes", note: "reasoning_effort mapped automatically" },
      { feature: "Model listing (/v1/models)", status: "yes" },
      { feature: "Azure Entra ID (Azure AD tokens)", status: "yes" },
      { feature: "Azure Custom Deployments", status: "yes", note: "deployment name routing via config" },
      { feature: "Azure VNET / Private Endpoint", status: "yes" },
      { feature: "OpenAI Project / Org IDs", status: "yes" },
    ],
    highlights: [
      "Reasoning models: o1, o1-mini, o3, o3-mini fully supported",
      "Azure Entra ID or static API key auth — InferGate handles credential exchange",
      "Custom .openai.azure.com deployment names via provider config",
      "Org and Project ID headers forwarded transparently",
      "GPT-4o, GPT-4o-mini, GPT-4-turbo all tested in production",
    ],
    configSnippet: `# infergate.yaml — OpenAI + Azure routing
providers:
  - name: openai-primary
    type: openai
    api_key: "\${OPENAI_API_KEY}"
    weight: 80

  - name: azure-fallback
    type: azure-openai
    api_key: "\${AZURE_OPENAI_KEY}"
    endpoint: "https://my-company.openai.azure.com"
    deployment: "gpt-4o-prod"
    api_version: "2024-06-01"
    weight: 20

routing:
  strategy: weighted
  fallback: true`,
    clientSnippet: `from openai import OpenAI

client = OpenAI(
    api_key="ig-your-virtual-key",
    base_url="https://gateway.infergate.ai/v1",
)

# Routes to OpenAI primary, Azure on fallback
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Explain quantum entanglement."}],
)
print(response.choices[0].message.content)

# Reasoning model — reasoning_effort handled by InferGate
response = client.chat.completions.create(
    model="o3-mini",
    messages=[{"role": "user", "content": "Solve P vs NP."}],
    extra_body={"reasoning_effort": "high"},
)`,
  },

  anthropic: {
    name: "Anthropic Claude",
    tagline: "Schema translation done right — Claude at full power.",
    description:
      "Anthropic's Claude API uses a different message schema from OpenAI. InferGate automatically re-maps system prompts, normalizes alternating human/assistant message sequences, and translates tool-call blocks bidirectionally so your OpenAI-SDK code works with Claude without modification. Extended Thinking (claude-3-5-sonnet, claude-3-7-sonnet) is fully supported. All Claude 3, Claude 3.5, and Claude 3.7 models are available. Note: Claude has no embeddings endpoint — InferGate surfaces this clearly rather than silently failing.",
    capabilities: [
      { feature: "Chat Completions", status: "yes" },
      { feature: "Streaming (SSE)", status: "yes" },
      { feature: "Embeddings", status: "no", note: "Anthropic does not offer an embeddings endpoint" },
      { feature: "Vision / Image Input", status: "yes" },
      { feature: "Function Calling / Tool Use", status: "yes", note: "Bidirectional tool-call block translation" },
      { feature: "System Prompt Re-mapping", status: "yes", note: "Automatic position normalization" },
      { feature: "Extended Thinking", status: "yes", note: "claude-3-5-sonnet, claude-3-7-sonnet" },
      { feature: "Claude 3 / 3.5 / 3.7 Models", status: "yes" },
    ],
    highlights: [
      "Automatic system prompt extraction and re-mapping from OpenAI format",
      "Human/assistant alternation enforced — InferGate inserts required turns",
      "Tool-call blocks translated bidirectionally between OpenAI and Anthropic schemas",
      "Extended Thinking: pass thinking_budget_tokens via standard extra_body",
      "Claude Haiku, Sonnet, Opus — all model tiers supported",
    ],
    configSnippet: `# infergate.yaml — Anthropic Claude
providers:
  - name: claude-primary
    type: anthropic
    api_key: "\${ANTHROPIC_API_KEY}"

routing:
  default_model_map:
    "gpt-4o":       "claude-3-5-sonnet-latest"
    "gpt-4-turbo":  "claude-3-opus-latest"
    "gpt-3.5-turbo": "claude-3-haiku-20240307"`,
    clientSnippet: `from openai import OpenAI

client = OpenAI(
    api_key="ig-your-virtual-key",
    base_url="https://gateway.infergate.ai/v1",
)

# Standard call — schema translated automatically
response = client.chat.completions.create(
    model="claude-3-5-sonnet-latest",
    messages=[{"role": "system", "content": "You are a concise assistant."},
              {"role": "user", "content": "What is InferGate?"}],
)

# Extended Thinking
response = client.chat.completions.create(
    model="claude-3-7-sonnet-latest",
    messages=[{"role": "user", "content": "Design a distributed cache."}],
    extra_body={"thinking": {"type": "enabled", "budget_tokens": 8000}},
)`,
  },

  "aws-bedrock": {
    name: "AWS Bedrock",
    tagline: "SigV4-signed, multi-region, provisioned throughput ready.",
    description:
      "AWS Bedrock requires SigV4 request signing and a region-scoped API — InferGate handles all of this in its Go core with zero latency overhead. Supported model families include Amazon Titan, Anthropic Claude on Bedrock, Mistral on Bedrock, and Meta Llama 3. Provisioned Throughput ARNs are mapped directly in the provider config for guaranteed capacity. Multi-region routing lets InferGate distribute load across us-east-1, us-west-2, and eu-central-1 transparently.",
    capabilities: [
      { feature: "Chat Completions", status: "yes" },
      { feature: "Streaming (SSE)", status: "yes" },
      { feature: "Embeddings (Titan)", status: "yes" },
      { feature: "Vision (Claude on Bedrock)", status: "yes" },
      { feature: "Function / Tool Calling", status: "yes" },
      { feature: "SigV4 Request Signing", status: "yes", note: "Go-native, zero overhead" },
      { feature: "Provisioned Throughput ARNs", status: "yes", note: "Map via provider config" },
      { feature: "Multi-region Distribution", status: "yes" },
      { feature: "Amazon Titan Models", status: "yes" },
      { feature: "Anthropic Claude via Bedrock", status: "yes" },
      { feature: "Meta Llama 3 via Bedrock", status: "yes" },
      { feature: "Mistral via Bedrock", status: "yes" },
    ],
    highlights: [
      "SigV4 signing implemented in Go — fastest possible auth path",
      "Provisioned Throughput ARNs in config replace model IDs for guaranteed capacity",
      "Automatic region affinity: route closest Bedrock region to reduce latency",
      "IAM role-based auth via EC2 instance profiles or ECS task roles",
      "Bedrock Guardrails passthrough for compliance use cases",
    ],
    configSnippet: `# infergate.yaml — AWS Bedrock
providers:
  - name: bedrock-us-east
    type: aws-bedrock
    region: us-east-1
    access_key_id: "\${AWS_ACCESS_KEY_ID}"
    secret_access_key: "\${AWS_SECRET_ACCESS_KEY}"

  - name: bedrock-us-west
    type: aws-bedrock
    region: us-west-2
    weight: 30

  # Provisioned Throughput ARN example
  - name: bedrock-pt
    type: aws-bedrock
    region: us-east-1
    provisioned_model_arn: "arn:aws:bedrock:us-east-1::provisioned-model/abc123"`,
    clientSnippet: `from openai import OpenAI

client = OpenAI(
    api_key="ig-your-virtual-key",
    base_url="https://gateway.infergate.ai/v1",
)

# Claude on Bedrock via InferGate
response = client.chat.completions.create(
    model="anthropic.claude-3-5-sonnet-20241022-v2:0",
    messages=[{"role": "user", "content": "Summarize Q3 earnings."}],
)

# Llama 3 on Bedrock
response = client.chat.completions.create(
    model="meta.llama3-70b-instruct-v1:0",
    messages=[{"role": "user", "content": "Write a SQL query for monthly revenue."}],
)`,
  },

  "google-vertex": {
    name: "Google Vertex AI & Gemini",
    tagline: "ADC, service accounts, grounding — all handled.",
    description:
      "InferGate supports both Google Vertex AI endpoints and Google AI Studio (Gemini API) under a unified configuration. Authentication supports Application Default Credentials (ADC) for GKE/GCE workloads and Service Account JSON for external deployments. Model translation handles Gemini's parts-array message format transparently. Google Search grounding and multi-region Vertex endpoints (us-central1, europe-west4) are fully supported.",
    capabilities: [
      { feature: "Chat Completions", status: "yes" },
      { feature: "Streaming (SSE)", status: "yes" },
      { feature: "Embeddings (text-embedding-004)", status: "yes" },
      { feature: "Vision / Multimodal Input", status: "yes" },
      { feature: "Function Calling / Tool Use", status: "yes" },
      { feature: "Application Default Credentials", status: "yes", note: "GKE, GCE workload identity" },
      { feature: "Service Account JSON Auth", status: "yes" },
      { feature: "Google Search Grounding", status: "yes" },
      { feature: "Multi-region Vertex Endpoints", status: "yes" },
      { feature: "Gemini 1.5 Pro / Flash", status: "yes" },
      { feature: "Gemini 2.0 Flash", status: "yes" },
      { feature: "Parts-array Format Translation", status: "yes", note: "Automatic via InferGate" },
    ],
    highlights: [
      "ADC: works seamlessly on GKE with Workload Identity — no key management",
      "Gemini parts-array format automatically translated from OpenAI messages",
      "Google Search grounding: pass grounding config in extra_body",
      "Unified config: AI Studio key or Vertex endpoint — same client code",
      "Multi-region: InferGate routes to lowest-latency Vertex region automatically",
    ],
    configSnippet: `# infergate.yaml — Google Vertex AI + AI Studio
providers:
  - name: vertex-primary
    type: google-vertex
    project_id: "my-gcp-project"
    region: us-central1
    service_account_json: "\${GOOGLE_SA_JSON}"

  - name: gemini-api-studio
    type: google-gemini
    api_key: "\${GOOGLE_API_KEY}"

routing:
  strategy: latency`,
    clientSnippet: `from openai import OpenAI

client = OpenAI(
    api_key="ig-your-virtual-key",
    base_url="https://gateway.infergate.ai/v1",
)

# Gemini 1.5 Pro via Vertex
response = client.chat.completions.create(
    model="gemini-1.5-pro",
    messages=[{"role": "user", "content": "Analyze this dataset."}],
)

# With Google Search grounding
response = client.chat.completions.create(
    model="gemini-2.0-flash",
    messages=[{"role": "user", "content": "What happened in AI this week?"}],
    extra_body={"google_search_retrieval": {}},
)`,
  },

  azure: {
    name: "Azure OpenAI",
    tagline: "Entra ID, custom deployments, VNET-ready.",
    description:
      "Azure OpenAI requires custom deployment endpoints, API versioning, and supports both Azure API key and Entra ID (Azure AD) token authentication. InferGate abstracts all of this: configure your Azure deployment once, and your standard OpenAI SDK code routes transparently. Private VNET integration is supported for organizations with locked-down Azure networking — InferGate can be deployed inside the same VNET alongside Azure OpenAI private endpoints.",
    capabilities: [
      { feature: "Chat Completions", status: "yes" },
      { feature: "Streaming (SSE)", status: "yes" },
      { feature: "Embeddings", status: "yes", note: "text-embedding-ada-002, text-embedding-3-*" },
      { feature: "Vision (GPT-4o)", status: "yes" },
      { feature: "Function Calling / Tools", status: "yes" },
      { feature: "Entra ID (Azure AD Token Auth)", status: "yes", note: "Bearer token exchange handled" },
      { feature: "Custom Deployment Names", status: "yes", note: "Map model IDs to deployment names" },
      { feature: "Custom .openai.azure.com Endpoints", status: "yes" },
      { feature: "Azure API Versioning", status: "yes", note: "api-version param injected automatically" },
      { feature: "Private VNET / Private Endpoint", status: "yes" },
      { feature: "GPT-4o, GPT-4-turbo, GPT-3.5-turbo", status: "yes" },
    ],
    highlights: [
      "Entra ID: InferGate fetches and refreshes AD tokens on your behalf",
      "Deployment name routing: 'gpt-4o' mapped to your deployment 'gpt-4o-prod'",
      "api-version injected per deployment — no client changes needed",
      "VNET: deploy InferGate in the same Azure VNET as your private endpoints",
      "Multi-deployment load balancing: spread across regions for quota management",
    ],
    configSnippet: `# infergate.yaml — Azure OpenAI
providers:
  - name: azure-eastus
    type: azure-openai
    endpoint: "https://my-company-eastus.openai.azure.com"
    api_version: "2024-06-01"
    entra_id: true
    tenant_id: "\${AZURE_TENANT_ID}"
    client_id: "\${AZURE_CLIENT_ID}"
    client_secret: "\${AZURE_CLIENT_SECRET}"
    deployments:
      "gpt-4o": "gpt-4o-production-eastus"
      "gpt-4-turbo": "gpt-4t-prod"

  - name: azure-westus
    type: azure-openai
    endpoint: "https://my-company-westus.openai.azure.com"
    api_version: "2024-06-01"
    api_key: "\${AZURE_OPENAI_KEY_WUS}"
    weight: 30`,
    clientSnippet: `from openai import OpenAI

client = OpenAI(
    api_key="ig-your-virtual-key",
    base_url="https://gateway.infergate.ai/v1",
)

# InferGate routes to correct Azure deployment
response = client.chat.completions.create(
    model="gpt-4o",  # mapped to "gpt-4o-production-eastus"
    messages=[{"role": "user", "content": "Summarize the contract."}],
)

# Embeddings via Azure
embeddings = client.embeddings.create(
    model="text-embedding-3-large",
    input="Enterprise AI infrastructure at scale.",
)`,
  },

  groq: {
    name: "Groq LPU + Cerebras WSE",
    tagline: "500+ tokens/sec. Zero buffering. Real-time streaming.",
    description:
      "Groq's Language Processing Unit delivers 500+ tokens per second — the fastest inference available. InferGate's zero-copy SSE pipeline is specifically optimized for Groq's speed: tokens are forwarded to clients without internal buffering, ensuring Groq's hardware advantage reaches end users without artificial delay. Cerebras WSE (Wafer Scale Engine) is also supported via the same provider configuration. Best for real-time streaming applications, interactive chat UIs, and latency-sensitive agent pipelines.",
    capabilities: [
      { feature: "Chat Completions", status: "yes" },
      { feature: "Streaming (SSE) — zero-copy", status: "yes", note: "No internal buffering; tokens forwarded instantly" },
      { feature: "Embeddings", status: "no", note: "Groq does not offer embeddings endpoint" },
      { feature: "Vision", status: "yes", note: "Select models only (llava-v1.5-7b)" },
      { feature: "Function Calling", status: "no", note: "Limited tool support; check model docs" },
      { feature: "Cerebras WSE Models", status: "yes" },
      { feature: "Ultra-low Latency Mode", status: "yes", note: "InferGate optimizes routing for latency-first" },
      { feature: "Llama 3.1 / 3.3 (70B, 405B)", status: "yes" },
      { feature: "Mistral / Mixtral via Groq", status: "yes" },
    ],
    highlights: [
      "Zero-copy SSE: InferGate streams Groq tokens directly — no aggregation delay",
      "500+ tokens/sec on Llama 3.1 70B — fastest production inference available",
      "Cerebras WSE: same config block, alternate provider type",
      "Latency-first routing: InferGate can auto-route to Groq when speed is prioritized",
      "Sub-50ms TTFT (time to first token) at scale",
    ],
    configSnippet: `# infergate.yaml — Groq + Cerebras
providers:
  - name: groq-primary
    type: groq
    api_key: "\${GROQ_API_KEY}"
    streaming_mode: zero_copy

  - name: cerebras-compute
    type: cerebras
    api_key: "\${CEREBRAS_API_KEY}"

routing:
  strategy: latency
  latency_threshold_ms: 50`,
    clientSnippet: `from openai import OpenAI

client = OpenAI(
    api_key="ig-your-virtual-key",
    base_url="https://gateway.infergate.ai/v1",
)

# Streaming — tokens arrive at Groq speed (500+ TPS)
stream = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Write a real-time market analysis."}],
    stream=True,
)

for chunk in stream:
    delta = chunk.choices[0].delta.content or ""
    print(delta, end="", flush=True)`,
  },

  ollama: {
    name: "Ollama & vLLM (On-Premises)",
    tagline: "Air-gapped. On-prem. Your data never leaves your VPC.",
    description:
      "InferGate treats Ollama, vLLM, and HuggingFace TGI as first-class upstream providers. Point InferGate at your local Ollama instance (http://localhost:11434) or internal vLLM server, and it becomes part of your provider pool — with all the same routing, fallback, rate limiting, and observability features as cloud providers. Ideal for processing sensitive on-premises data that must not leave your infrastructure. Air-gapped VPC deployments are fully supported: InferGate can run entirely offline.",
    capabilities: [
      { feature: "Chat Completions", status: "yes" },
      { feature: "Streaming (SSE)", status: "yes" },
      { feature: "Embeddings (Ollama model-dependent)", status: "partial", note: "Requires embedding-capable Ollama model" },
      { feature: "Vision (Ollama LLaVA, BakLLaVA)", status: "partial", note: "Model-dependent" },
      { feature: "Function Calling (vLLM with compatible models)", status: "yes" },
      { feature: "Ollama HTTP API (/api/chat)", status: "yes" },
      { feature: "vLLM OpenAI-Compatible Server", status: "yes" },
      { feature: "HuggingFace TGI", status: "yes" },
      { feature: "Air-gapped / Offline Deployment", status: "yes" },
      { feature: "Internal TLS / mTLS to upstream", status: "yes" },
      { feature: "On-prem Model Routing + Fallback", status: "yes" },
    ],
    highlights: [
      "Air-gapped VPC: InferGate + Ollama/vLLM can run fully offline with no external calls",
      "Sensitive data workloads: PII, PHI, financial data never leaves your infrastructure",
      "Same virtual key auth and budget controls as cloud providers",
      "Mix on-prem models with cloud fallback: route to Ollama first, cloud if down",
      "vLLM and HuggingFace TGI: both OpenAI-compatible server formats supported",
    ],
    configSnippet: `# infergate.yaml — Ollama + vLLM on-premises
providers:
  - name: ollama-local
    type: ollama
    base_url: "http://localhost:11434"

  - name: vllm-gpu-cluster
    type: vllm
    base_url: "http://vllm-server.internal:8000"
    api_key: "\${VLLM_API_KEY}"

  # Cloud fallback for non-sensitive queries
  - name: openai-cloud-fallback
    type: openai
    api_key: "\${OPENAI_API_KEY}"
    weight: 0   # only used on fallback

routing:
  strategy: priority
  fallback: true`,
    clientSnippet: `from openai import OpenAI

client = OpenAI(
    api_key="ig-your-virtual-key",
    base_url="https://gateway.internal/v1",  # Your InferGate instance
)

# Routes to Ollama — data stays on-prem
response = client.chat.completions.create(
    model="llama3.2:70b",
    messages=[
        {"role": "system", "content": "You process confidential documents."},
        {"role": "user", "content": "Summarize this contract: ..."},
    ],
)

# Embeddings via Ollama (nomic-embed-text)
embeddings = client.embeddings.create(
    model="nomic-embed-text",
    input="Patient admission record Q3 2024",
)`,
  },
};

/* ── Support icon ────────────────────────────────────────────── */
function SupportIcon({ v }: { v: Support }) {
  if (v === "yes")  return <Check size={15} color="var(--nb-green)" strokeWidth={2.5} />;
  if (v === "no")   return <Minus size={15} color="var(--nb-ink-dim)" strokeWidth={2.5} />;
  return <Circle size={13} color="var(--nb-orange)" strokeWidth={2.5} style={{ opacity: 0.8 }} />;
}

/* ── Client component ───────────────────────────────────────── */
export default function IntegrationContent({ slug }: { slug: string }) {
  const data = INTEGRATIONS_DATA[slug];
  if (!data) notFound();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingBottom: 72 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="breadcrumb" style={{ marginBottom: 32 }}>
            <Link href="/integrations">Integrations</Link>
            <ChevronRight size={13} color="var(--nb-ink-dim)" />
            <span style={{ color: "var(--nb-ink)", fontWeight: 700 }}>{data.name}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
            <span className="eyebrow">Integration</span>
            <h1 style={{ fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1.02, marginBottom: 20 }}>
              {data.name}
              <br />
              <span className="text-serif" style={{ color: "var(--nb-orange)", fontWeight: 400 }}>via InferGate</span>
            </h1>
            <p style={{ fontSize: "clamp(16px,2vw,20px)", color: "var(--nb-ink-muted)", maxWidth: 680, lineHeight: 1.65, marginBottom: 32 }}>
              {data.tagline}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Get Started <ArrowRight size={14} />
              </Link>
              <Link href="/integrations" className="btn-secondary">
                <ArrowLeft size={14} /> All Integrations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Description + highlights ──────────────────────── */}
      <section className="section section--surface">
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 56, alignItems: "start" }}>
            <div>
              <p className="section-label">Overview</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--nb-ink-muted)" }}>{data.description}</p>
            </div>
            <div className="nb-card" style={{ padding: 28 }}>
              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--nb-ink-dim)", marginBottom: 16 }}>Key Highlights</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {data.highlights.map((h) => (
                  <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ width: 18, height: 18, background: "var(--nb-yellow)", border: "2px solid var(--nb-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, borderRadius: "2px" }}>
                      <Check size={10} color="var(--nb-ink)" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: 13.5, color: "var(--nb-ink)", lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities table ────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <p className="section-label">Capabilities</p>
          <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 32 }}>
            What InferGate supports.
          </h2>
          <div style={{ border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            <table className="ig-table">
              <thead>
                <tr>
                  <th style={{ minWidth: 240 }}>Feature / Capability</th>
                  <th style={{ textAlign: "center", width: 100 }}>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {data.capabilities.map((row) => (
                  <tr key={row.feature}>
                    <td className="bold" style={{ fontFamily: "var(--font-jetbrains,monospace)", fontSize: 12.5 }}>{row.feature}</td>
                    <td style={{ textAlign: "center" }}><SupportIcon v={row.status} /></td>
                    <td style={{ fontSize: 13, color: "var(--nb-ink-muted)" }}>{row.note ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }}>
            {[
              { icon: <Check size={13} color="var(--nb-green)" strokeWidth={2.5} />, label: "Fully Supported" },
              { icon: <Circle size={11} color="var(--nb-orange)" strokeWidth={2.5} />, label: "Partial Support" },
              { icon: <Minus size={13} color="var(--nb-ink-dim)" strokeWidth={2.5} />, label: "Not Available" },
            ].map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--nb-ink-muted)", fontWeight: 600 }}>
                {l.icon} {l.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Code snippets ─────────────────────────────────── */}
      <section className="section section--invert">
        <div className="container" style={{ maxWidth: 960 }}>
          <p className="section-label" style={{ color: "rgba(250,248,243,0.5)" }}>Configuration & Usage</p>
          <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 40, color: "var(--nb-bg)" }}>
            Up and running in minutes.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(250,248,243,0.5)", marginBottom: 12 }}>
                infergate.yaml — Provider Config
              </p>
              <div className="code-block">
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" /><span className="code-dot code-dot--y" /><span className="code-dot code-dot--g" />
                  <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-jetbrains,monospace)" }}>infergate.yaml</span>
                </div>
                <div className="code-block__body">
                  <pre style={{ margin: 0 }}>
                    <code dangerouslySetInnerHTML={{ __html: highlight(data.configSnippet) }} />
                  </pre>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(250,248,243,0.5)", marginBottom: 12 }}>
                Python — Drop-in Client Usage
              </p>
              <div className="code-block">
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" /><span className="code-dot code-dot--y" /><span className="code-dot code-dot--g" />
                  <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-jetbrains,monospace)" }}>client.py</span>
                </div>
                <div className="code-block__body">
                  <pre style={{ margin: 0 }}>
                    <code dangerouslySetInnerHTML={{ __html: highlight(data.clientSnippet) }} />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <div className="nb-card nb-card--yellow" style={{ padding: "48px 40px" }}>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 16 }}>
              Ready to connect {data.name.split(" ")[0]}?
            </h2>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", marginBottom: 28, lineHeight: 1.65 }}>
              Talk to our team about integrating {data.name} with your InferGate deployment. We provide concierge onboarding for enterprise customers.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Sales <ArrowRight size={14} />
              </Link>
              <Link href="/integrations" className="btn-secondary">
                <ArrowLeft size={14} /> All Integrations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
