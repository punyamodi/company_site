"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Zap, Shield, GitBranch, BarChart3, Lock, Code2,
  Network, Server, ArrowRight, Check, Database,
  Eye, Key, Bot, Activity, Cpu, RefreshCw,
  DollarSign, AlertTriangle, Building2, Landmark,
  ChevronRight, ShieldCheck, Workflow, LineChart,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────── */

const PROVIDERS = [
  "OpenAI","Anthropic","AWS Bedrock","Google Vertex AI","Azure OpenAI",
  "Gemini","Mistral","Groq","Cerebras","Cohere","Ollama","xAI / Grok",
  "OpenRouter","Perplexity","HuggingFace","ElevenLabs","Nebius",
  "Together AI","Fireworks","DeepSeek","LiteLLM","Bedrock","Vertex AI",
  "Claude","GPT-4o",
];

const FEATURES = [
  {
    icon: Workflow,
    title: "Intelligent Routing",
    body: "CEL-based rule engine evaluates routing decisions in <100µs. Route by cost, latency, region, model capability, or any custom attribute you define.",
  },
  {
    icon: RefreshCw,
    title: "Zero-Downtime Failover",
    body: "Priority chains, automatic retry on failure, round-robin and weighted distribution. Every request completes even through complete provider outages.",
  },
  {
    icon: Database,
    title: "Semantic Caching",
    body: "Vector-similarity deduplication collapses near-identical prompts into a single upstream call. Achieve 30–65% cost reduction automatically — no code changes.",
  },
  {
    icon: BarChart3,
    title: "6-Level Budget Governance",
    body: "Real-time enforcement from org → customer → team → virtual key → provider → model. Virtual keys embed budgets, rate limits, and TTLs in a single token.",
  },
  {
    icon: Bot,
    title: "Native MCP Gateway",
    body: "Model Context Protocol (2024-11-05) support: tool registry, iterative agent mode, Starlark code execution. 10× fewer LLM round trips for agentic workloads.",
  },
  {
    icon: Eye,
    title: "Full Observability",
    body: "Prometheus metrics, OpenTelemetry tracing to Jaeger/Tempo/Datadog, WebSocket log streaming, immutable audit trail, and Maxim integration out of the box.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    body: "AES-256-GCM at rest, TLS 1.2+, RBAC with three permission tiers, SCIM 2.0 for Okta/Azure AD, HashiCorp Vault key management, PII guardrails on all traffic.",
  },
  {
    icon: Code2,
    title: "Drop-in SDK Compatibility",
    body: "Change one URL. Works with Python, TypeScript, Go, Rust, Java, Ruby, C#, the OpenAI SDK, Anthropic SDK, LangChain, PydanticAI, and LiteLLM.",
  },
];

const SECURITY_POINTS = [
  "AES-256-GCM encryption at rest",
  "TLS 1.2+ on all connections",
  "HashiCorp Vault key management",
  "RBAC with three permission tiers",
  "SCIM 2.0 — Okta & Azure AD",
  "Air-gapped VPC deployment",
  "PII guardrails on all traffic",
  "SIEM-ready immutable audit logs",
  "SigV4 signing for AWS Bedrock",
  "SSO via Google & GitHub OAuth2",
];

const INDUSTRIES = [
  { title: "Financial Services", icon: Building2, slug: "financial-services", desc: "SOC 2 Type II ready. Meets FCA, SEC, and FINRA data-handling requirements." },
  { title: "Healthcare", icon: ShieldCheck, slug: "healthcare", desc: "HIPAA-compliant inference pipelines with PHI redaction and full audit trails." },
  { title: "Technology", icon: Cpu, slug: "technology", desc: "Multi-tenant SaaS with per-customer budget enforcement and white-label routing." },
  { title: "Government", icon: Landmark, slug: "government", desc: "Air-gapped deployment, full audit logs, and FedRAMP alignment in progress." },
];

/* ─── Code blocks (HTML strings for dangerouslySetInnerHTML) ── */

const CODE_PY_BEFORE = `<span class="tok-keyword">from</span> <span class="tok-var">openai</span> <span class="tok-keyword">import</span> <span class="tok-func">OpenAI</span>

<span class="tok-var">client</span> <span class="tok-op">=</span> <span class="tok-func">OpenAI</span><span class="tok-op">(</span>
    <span class="tok-var">api_key</span><span class="tok-op">=</span><span class="tok-string">"sk-..."</span>
<span class="tok-op">)</span>

<span class="tok-var">response</span> <span class="tok-op">=</span> <span class="tok-var">client</span><span class="tok-op">.</span><span class="tok-var">chat</span><span class="tok-op">.</span>
    <span class="tok-var">completions</span><span class="tok-op">.</span><span class="tok-func">create</span><span class="tok-op">(</span>
    <span class="tok-var">model</span><span class="tok-op">=</span><span class="tok-string">"gpt-4o"</span><span class="tok-op">,</span>
    <span class="tok-var">messages</span><span class="tok-op">=[{</span>
        <span class="tok-string">"role"</span><span class="tok-op">:</span> <span class="tok-string">"user"</span><span class="tok-op">,</span>
        <span class="tok-string">"content"</span><span class="tok-op">:</span> <span class="tok-string">"Hello!"</span>
    <span class="tok-op">}]</span>
<span class="tok-op">)</span>`;

const CODE_PY_AFTER = `<span class="tok-keyword">from</span> <span class="tok-var">openai</span> <span class="tok-keyword">import</span> <span class="tok-func">OpenAI</span>

<span class="tok-var">client</span> <span class="tok-op">=</span> <span class="tok-func">OpenAI</span><span class="tok-op">(</span>
    <span class="tok-var">api_key</span><span class="tok-op">=</span><span class="tok-string">"ig-..."</span><span class="tok-op">,</span>  <span class="tok-comment"># ← InferGate key</span>
    <span class="tok-var">base_url</span><span class="tok-op">=</span><span class="tok-string">"https://api.infergate.ai/v1"</span>
<span class="tok-op">)</span>

<span class="tok-var">response</span> <span class="tok-op">=</span> <span class="tok-var">client</span><span class="tok-op">.</span><span class="tok-var">chat</span><span class="tok-op">.</span>
    <span class="tok-var">completions</span><span class="tok-op">.</span><span class="tok-func">create</span><span class="tok-op">(</span>
    <span class="tok-var">model</span><span class="tok-op">=</span><span class="tok-string">"gpt-4o"</span><span class="tok-op">,</span>   <span class="tok-comment"># any provider</span>
    <span class="tok-var">messages</span><span class="tok-op">=[{</span>
        <span class="tok-string">"role"</span><span class="tok-op">:</span> <span class="tok-string">"user"</span><span class="tok-op">,</span>
        <span class="tok-string">"content"</span><span class="tok-op">:</span> <span class="tok-string">"Hello!"</span>
    <span class="tok-op">}]</span>
<span class="tok-op">)</span>`;

const CODE_TS_BEFORE = `<span class="tok-keyword">import</span> <span class="tok-func">OpenAI</span> <span class="tok-keyword">from</span> <span class="tok-string">'openai'</span><span class="tok-op">;</span>

<span class="tok-keyword">const</span> <span class="tok-var">client</span> <span class="tok-op">=</span> <span class="tok-keyword">new</span> <span class="tok-func">OpenAI</span><span class="tok-op">({</span>
  <span class="tok-var">apiKey</span><span class="tok-op">:</span> <span class="tok-string">'sk-...'</span><span class="tok-op">,</span>
<span class="tok-op">});</span>

<span class="tok-keyword">const</span> <span class="tok-var">res</span> <span class="tok-op">=</span> <span class="tok-keyword">await</span> <span class="tok-var">client</span><span class="tok-op">.</span><span class="tok-var">chat</span><span class="tok-op">.</span>
  <span class="tok-var">completions</span><span class="tok-op">.</span><span class="tok-func">create</span><span class="tok-op">({</span>
  <span class="tok-var">model</span><span class="tok-op">:</span> <span class="tok-string">'gpt-4o'</span><span class="tok-op">,</span>
  <span class="tok-var">messages</span><span class="tok-op">: [{</span>
    <span class="tok-var">role</span><span class="tok-op">:</span> <span class="tok-string">'user'</span><span class="tok-op">,</span>
    <span class="tok-var">content</span><span class="tok-op">:</span> <span class="tok-string">'Hello!'</span>
  <span class="tok-op">}],</span>
<span class="tok-op">});</span>`;

const CODE_TS_AFTER = `<span class="tok-keyword">import</span> <span class="tok-func">OpenAI</span> <span class="tok-keyword">from</span> <span class="tok-string">'openai'</span><span class="tok-op">;</span>

<span class="tok-keyword">const</span> <span class="tok-var">client</span> <span class="tok-op">=</span> <span class="tok-keyword">new</span> <span class="tok-func">OpenAI</span><span class="tok-op">({</span>
  <span class="tok-var">apiKey</span><span class="tok-op">:</span> <span class="tok-string">'ig-...'</span><span class="tok-op">,</span>   <span class="tok-comment">// ← InferGate key</span>
  <span class="tok-var">baseURL</span><span class="tok-op">:</span> <span class="tok-string">'https://api.infergate.ai/v1'</span><span class="tok-op">,</span>
<span class="tok-op">});</span>

<span class="tok-keyword">const</span> <span class="tok-var">res</span> <span class="tok-op">=</span> <span class="tok-keyword">await</span> <span class="tok-var">client</span><span class="tok-op">.</span><span class="tok-var">chat</span><span class="tok-op">.</span>
  <span class="tok-var">completions</span><span class="tok-op">.</span><span class="tok-func">create</span><span class="tok-op">({</span>
  <span class="tok-var">model</span><span class="tok-op">:</span> <span class="tok-string">'gpt-4o'</span><span class="tok-op">,</span>   <span class="tok-comment">// any provider</span>
  <span class="tok-var">messages</span><span class="tok-op">: [{</span>
    <span class="tok-var">role</span><span class="tok-op">:</span> <span class="tok-string">'user'</span><span class="tok-op">,</span>
    <span class="tok-var">content</span><span class="tok-op">:</span> <span class="tok-string">'Hello!'</span>
  <span class="tok-op">}],</span>
<span class="tok-op">});</span>`;

/* ─── Hook ───────────────────────────────────────────────── */

function useCountUp(target: number, duration: number, active: boolean): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return val;
}

/* ─── Animation variants ─────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── GatewayDiagram ─────────────────────────────────────── */

function GatewayDiagram() {
  const appLabels = ["App 1", "App 2", "App 3"];
  const providerLabels = ["OpenAI", "Anthropic", "AWS Bedrock", "+ 22 more"];
  const appY = [68, 148, 228];
  const provY = [56, 124, 192, 260];

  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 480, filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.08))" }}>
      <defs>
        <pattern id="hgrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0L0 0 0 24" fill="none" stroke="rgba(10,10,10,0.05)" strokeWidth="0.5" />
        </pattern>
        <marker id="arrowBlk" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill="#0A0A0A" />
        </marker>
        <marker id="arrowYlw" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill="#F5C518" />
        </marker>
      </defs>
      <rect width="480" height="320" fill="url(#hgrid)" rx="4" />

      {/* App nodes */}
      {appLabels.map((label, i) => (
        <motion.g key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.14, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <rect x={16} y={appY[i] - 22} width={88} height={44} rx={4}
            fill="var(--nb-bg)" stroke="#0A0A0A" strokeWidth={2}
            style={{ filter: "drop-shadow(2px 2px 0px #0A0A0A)" }} />
          <text x={60} y={appY[i] + 6} textAnchor="middle"
            style={{ fontSize: 12, fontWeight: 700, fill: "#0A0A0A", fontFamily: "'Bricolage Grotesque',sans-serif" }}>
            {label}
          </text>
        </motion.g>
      ))}

      {/* Connector lines: apps → gateway */}
      {appY.map((y, i) => (
        <motion.path key={i}
          d={`M104 ${y} C150 ${y} 160 ${162} 184 162`}
          stroke="#0A0A0A" strokeWidth={1.5} strokeDasharray="5 3"
          markerEnd="url(#arrowBlk)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: "easeInOut" }} />
      ))}

      {/* InferGate gateway box */}
      <motion.rect x={186} y={112} width={120} height={100} rx={4}
        fill="var(--nb-yellow)" stroke="#0A0A0A" strokeWidth={2.5}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.85, type: "spring", stiffness: 180 }}
        style={{ filter: "drop-shadow(4px 4px 0px #0A0A0A)", transformOrigin: "246px 162px" }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
        <text x={246} y={153} textAnchor="middle"
          style={{ fontSize: 14, fontWeight: 900, fill: "#0A0A0A", fontFamily: "'Bricolage Grotesque',sans-serif", letterSpacing: "-0.03em" }}>
          InferGate
        </text>
        <text x={246} y={170} textAnchor="middle"
          style={{ fontSize: 10, fontWeight: 700, fill: "rgba(10,10,10,0.55)", fontFamily: "'Bricolage Grotesque',sans-serif", letterSpacing: "0.08em" }}>
          AI GATEWAY
        </text>
        <rect x={202} y={180} width={88} height={14} rx={2} fill="rgba(10,10,10,0.1)" />
        <text x={246} y={191} textAnchor="middle"
          style={{ fontSize: 9, fontWeight: 700, fill: "#0A0A0A", fontFamily: "'JetBrains Mono',monospace" }}>
          Go · 10,400 req/s
        </text>
      </motion.g>

      {/* Connector lines: gateway → providers */}
      {provY.map((y, i) => (
        <motion.path key={i}
          d={`M306 162 C340 162 346 ${y} 368 ${y}`}
          stroke="var(--nb-yellow)" strokeWidth={2} strokeDasharray="6 3"
          markerEnd="url(#arrowYlw)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 1.3 + i * 0.1, ease: "easeInOut" }} />
      ))}

      {/* Provider nodes */}
      {providerLabels.map((name, i) => (
        <motion.g key={i}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 + i * 0.1, duration: 0.45 }}>
          <rect x={368} y={provY[i] - 18} width={96} height={36} rx={4}
            fill={i === 3 ? "transparent" : "var(--nb-bg)"}
            stroke={i === 3 ? "rgba(10,10,10,0.25)" : "#0A0A0A"}
            strokeWidth={i === 3 ? 1.5 : 2}
            strokeDasharray={i === 3 ? "4 2" : "0"}
            style={i < 3 ? { filter: "drop-shadow(2px 2px 0px #0A0A0A)" } : {}} />
          <text x={416} y={provY[i] + 5} textAnchor="middle"
            style={{
              fontSize: i === 3 ? 10 : 11,
              fontWeight: i === 3 ? 600 : 700,
              fill: i === 3 ? "rgba(10,10,10,0.4)" : "#0A0A0A",
              fontFamily: "'Bricolage Grotesque',sans-serif",
            }}>
            {name}
          </text>
        </motion.g>
      ))}

      {/* Animated data packet */}
      <motion.circle r={5} cy={162} fill="var(--nb-yellow)" stroke="#0A0A0A" strokeWidth={1.5}
        initial={{ cx: 104, opacity: 0 }}
        animate={{ cx: [104, 246, 416], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.2, delay: 1.8, repeat: Infinity, repeatDelay: 1.4, ease: "linear" }} />
    </svg>
  );
}

/* ─── ArchDiagram ────────────────────────────────────────── */

function ArchDiagram() {
  const sdks = ["Python SDK", "TypeScript", "Go / Rust", "REST / cURL"];
  const internals = ["CEL Router  <100µs", "Semantic Cache", "Budget Engine", "MCP Gateway"];
  const clouds = ["OpenAI · Anthropic", "AWS Bedrock · Azure", "Google Vertex · Groq", "Mistral · + 18 more"];

  return (
    <div style={{
      border: "2px solid var(--nb-border)",
      borderRadius: "var(--radius)",
      boxShadow: "var(--shadow-brutal-lg)",
      overflow: "hidden",
      background: "var(--nb-bg)",
    }}>
      <div style={{
        background: "var(--nb-invert)", color: "var(--nb-bg)",
        padding: "10px 16px", borderBottom: "2px solid var(--nb-border)",
        display: "flex", alignItems: "center", gap: 8,
        fontSize: 12, fontWeight: 700, fontFamily: "'Bricolage Grotesque',sans-serif",
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
        InferGate — Architecture Overview
      </div>
      <svg viewBox="0 0 720 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        <defs>
          <marker id="aArr" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
            <polygon points="0 0, 7 2.5, 0 5" fill="#0A0A0A" />
          </marker>
          <marker id="aArrY" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
            <polygon points="0 0, 7 2.5, 0 5" fill="#F5C518" />
          </marker>
        </defs>

        {/* Column headers */}
        <text x={70} y={20} textAnchor="middle" style={{ fontSize: 9, fontWeight: 800, fill: "rgba(10,10,10,0.4)", letterSpacing: "0.12em", fontFamily: "'Bricolage Grotesque',sans-serif" }}>YOUR APPS</text>
        <text x={360} y={20} textAnchor="middle" style={{ fontSize: 9, fontWeight: 800, fill: "rgba(10,10,10,0.4)", letterSpacing: "0.12em", fontFamily: "'Bricolage Grotesque',sans-serif" }}>INFERGATE GATEWAY</text>
        <text x={620} y={20} textAnchor="middle" style={{ fontSize: 9, fontWeight: 800, fill: "rgba(10,10,10,0.4)", letterSpacing: "0.12em", fontFamily: "'Bricolage Grotesque',sans-serif" }}>PROVIDER CLOUD</text>

        {/* SDK boxes */}
        {sdks.map((sdk, i) => (
          <motion.g key={i}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}>
            <rect x={14} y={30 + i * 52} width={112} height={36} rx={4}
              fill="var(--nb-surface)" stroke="#0A0A0A" strokeWidth={1.5} />
            <text x={70} y={53 + i * 52} textAnchor="middle"
              style={{ fontSize: 11, fontWeight: 700, fill: "#0A0A0A", fontFamily: "'Bricolage Grotesque',sans-serif" }}>
              {sdk}
            </text>
          </motion.g>
        ))}

        {/* Arrow left → center */}
        <motion.path d="M126 130 L218 130" stroke="#0A0A0A" strokeWidth={1.5} strokeDasharray="5 3" markerEnd="url(#aArr)"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }} />

        {/* Gateway box */}
        <motion.rect x={222} y={28} width={276} height={204} rx={4}
          fill="var(--nb-yellow)" stroke="#0A0A0A" strokeWidth={2.5}
          initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ filter: "drop-shadow(4px 4px 0px #0A0A0A)", transformOrigin: "360px 130px" }} />
        <text x={360} y={60} textAnchor="middle"
          style={{ fontSize: 18, fontWeight: 900, fill: "#0A0A0A", fontFamily: "'Bricolage Grotesque',sans-serif", letterSpacing: "-0.03em" }}>
          InferGate
        </text>
        {internals.map((item, i) => (
          <g key={i}>
            <rect x={240} y={74 + i * 38} width={240} height={28} rx={3} fill="rgba(10,10,10,0.1)" />
            <text x={360} y={92 + i * 38} textAnchor="middle"
              style={{ fontSize: 11, fontWeight: 700, fill: "#0A0A0A", fontFamily: "'JetBrains Mono',monospace" }}>
              {item}
            </text>
          </g>
        ))}

        {/* Arrow center → right */}
        <motion.path d="M498 130 L558 130" stroke="#0A0A0A" strokeWidth={1.5} strokeDasharray="5 3" markerEnd="url(#aArr)"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }} />

        {/* Provider cloud box */}
        <motion.rect x={562} y={28} width={144} height={204} rx={4}
          fill="var(--nb-bg)" stroke="#0A0A0A" strokeWidth={2}
          initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.85 }}
          style={{ filter: "drop-shadow(4px 4px 0px #0A0A0A)" }} />
        {clouds.map((p, i) => (
          <text key={i} x={634} y={74 + i * 44} textAnchor="middle"
            style={{ fontSize: i === 3 ? 10 : 11, fontWeight: i === 3 ? 600 : 700, fill: i === 3 ? "rgba(10,10,10,0.45)" : "#0A0A0A", fontFamily: "'Bricolage Grotesque',sans-serif" }}>
            {p}
          </text>
        ))}

        {/* Animated request packet */}
        <motion.circle r={6} cy={130} fill="var(--nb-yellow)" stroke="#0A0A0A" strokeWidth={1.5}
          initial={{ cx: 126, opacity: 0 }}
          animate={{ cx: [126, 360, 634], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, delay: 1.2, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }} />
      </svg>
    </div>
  );
}

/* ─── PerfBars ───────────────────────────────────────────── */

function PerfBars() {
  const bars = [
    { name: "InferGate", lang: "Go", rps: 10400, highlight: true },
    { name: "Kong AI", lang: "Lua", rps: 5000, highlight: false },
    { name: "Portkey", lang: "Node.js", rps: 2100, highlight: false },
    { name: "LiteLLM", lang: "Python", rps: 850, highlight: false },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {bars.map((bar, i) => (
        <div key={i}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: bar.highlight ? "var(--nb-yellow)" : "rgba(250,248,243,0.75)" }}>
              {bar.name}
              <span style={{ marginLeft: 8, fontSize: 11, fontFamily: "'JetBrains Mono',monospace", opacity: 0.6 }}>({bar.lang})</span>
            </span>
            <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, color: bar.highlight ? "var(--nb-yellow)" : "rgba(250,248,243,0.5)" }}>
              {bar.rps.toLocaleString()} req/s
            </span>
          </div>
          <div style={{
            height: 32, background: "rgba(255,255,255,0.07)",
            borderRadius: 3, overflow: "hidden", position: "relative",
            border: bar.highlight ? "2px solid var(--nb-yellow)" : "1px solid rgba(255,255,255,0.1)",
          }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(bar.rps / 10400) * 100}%` }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.9, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: "100%",
                background: bar.highlight
                  ? "linear-gradient(90deg, #F5C518 0%, #FFD84D 100%)"
                  : "rgba(255,255,255,0.14)",
              }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── SecurityShield ─────────────────────────────────────── */

function SecurityShield() {
  return (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 260 }}>
      <motion.path
        d="M140 18L262 60L262 158C262 232 202 280 140 300C78 280 18 232 18 158L18 60Z"
        fill="var(--nb-yellow)" stroke="#0A0A0A" strokeWidth={3}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, type: "spring", stiffness: 130 }}
        style={{ filter: "drop-shadow(5px 5px 0px #0A0A0A)", transformOrigin: "140px 160px" }} />

      <motion.path
        d="M140 50L232 82L232 158C232 210 190 250 140 266C90 250 48 210 48 158L48 82Z"
        fill="rgba(255,255,255,0.4)" stroke="#0A0A0A" strokeWidth={1.5}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ delay: 0.3 }} />

      {/* Lock body */}
      <motion.g
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}>
        <rect x={112} y={148} width={56} height={44} rx={5} fill="#0A0A0A" />
        <path d="M125 148L125 134 A15 15 0 0 1 155 134 L155 148"
          stroke="#0A0A0A" strokeWidth={6} strokeLinecap="round" fill="none" />
        <circle cx={140} cy={170} r={8} fill="var(--nb-yellow)" />
        <rect x={137} y={170} width={6} height={10} rx={2} fill="var(--nb-yellow)" />
      </motion.g>

      {/* Corner check badges */}
      {[
        { cx: 76, cy: 108 }, { cx: 204, cy: 108 },
        { cx: 76, cy: 212 }, { cx: 204, cy: 212 },
      ].map((pos, i) => (
        <motion.g key={i}
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 + i * 0.1, type: "spring", stiffness: 300 }}
          style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}>
          <circle cx={pos.cx} cy={pos.cy} r={14} fill="#0A0A0A" />
          <path d={`M${pos.cx - 7} ${pos.cy} L${pos.cx - 2} ${pos.cy + 5} L${pos.cx + 7} ${pos.cy - 6}`}
            stroke="var(--nb-yellow)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>
      ))}
    </svg>
  );
}

/* ─── HomePage ───────────────────────────────────────────── */

export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  const [codeTab, setCodeTab] = useState<"python" | "typescript">("python");

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsActive(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const reqCount = useCountUp(10400, 2200, statsActive);

  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="section dot-grid" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", paddingTop: 80, paddingBottom: 0,
        position: "relative", overflow: "hidden",
      }}>
        {/* Oversized watermark */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none", overflow: "hidden", zIndex: 0,
        }}>
          <span style={{
            fontSize: "clamp(180px, 42vw, 520px)", fontWeight: 900,
            color: "rgba(10,10,10,0.028)",
            fontFamily: "'Bricolage Grotesque',sans-serif",
            lineHeight: 1, letterSpacing: "-0.08em",
            userSelect: "none", whiteSpace: "nowrap",
          }}>IG</span>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="ig-hero-grid">

            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>
                <span className="eyebrow">⚡ Enterprise AI Gateway</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{
                  fontSize: "clamp(50px, 7.5vw, 112px)",
                  lineHeight: 1, letterSpacing: "-0.045em", fontWeight: 900,
                  marginTop: 12, marginBottom: 24,
                }}>
                One API.
                <br />
                <em style={{
                  fontFamily: "'Fraunces',Georgia,serif",
                  fontStyle: "italic", fontWeight: 700,
                }}>Every</em>{" "}Provider.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                style={{
                  fontSize: 18, color: "var(--nb-ink-muted)",
                  lineHeight: 1.7, marginBottom: 36, maxWidth: 500,
                }}>
                InferGate sits between your applications and every AI provider.
                Route intelligently. Govern costs. Scale without limits.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.32 }}
                style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
                <Link href="/contact" className="btn-primary">
                  Contact Sales <ArrowRight size={16} />
                </Link>
                <Link href="/features" className="btn-secondary">
                  See Performance Benchmarks
                </Link>
              </motion.div>

              {/* Stats row */}
              <div ref={statsRef}>
                <div className="ig-stats-grid">
                  {[
                    { value: statsActive ? reqCount.toLocaleString() : "—", suffix: " req/s", label: "Peak Throughput", hl: true, dc: "10400" },
                    { value: "<0.3", suffix: "ms P50", label: "Gateway Overhead", hl: false, dc: "0.3", dcd: "1" },
                    { value: "25+", suffix: " providers", label: "LLM Integrations", hl: false, dc: "25", dcs: "+" },
                    { value: "65%", suffix: " savings", label: "Cost Reduction", hl: false, dc: "65", dcs: "%" },
                  ].map((stat, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.38 + i * 0.07 }}
                      style={{
                        padding: "16px 18px",
                        border: "2px solid var(--nb-border)",
                        borderRadius: "var(--radius)",
                        background: stat.hl ? "var(--nb-yellow)" : "var(--nb-bg)",
                        boxShadow: "var(--shadow-brutal-sm)",
                      }}>
                      <div style={{
                        fontSize: 24, fontWeight: 900,
                        letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 3,
                      }}>
                        <span
                          data-counter={stat.dc}
                          data-counter-suffix={stat.dcs}
                          data-counter-decimals={stat.dcd}
                        >
                          {stat.value}
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 700 }}>{stat.suffix}</span>
                      </div>
                      <div style={{
                        fontSize: 10, fontWeight: 800, textTransform: "uppercase",
                        letterSpacing: "0.1em", color: "var(--nb-ink-muted)",
                      }}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: gateway diagram */}
            <motion.div
              data-float="on"
              initial={{ opacity: 0, x: 48 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GatewayDiagram />
            </motion.div>
          </div>
        </div>

        {/* Provider marquee strip */}
        <div style={{
          marginTop: 64,
          borderTop: "2px solid var(--nb-border)",
          borderBottom: "2px solid var(--nb-border)",
          background: "var(--nb-invert)", padding: "14px 0", overflow: "hidden",
        }}>
          <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
            {[...PROVIDERS, ...PROVIDERS].map((p, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "0 28px", fontSize: 11, fontWeight: 700,
                color: "rgba(250,248,243,0.85)", letterSpacing: "0.09em",
                textTransform: "uppercase", whiteSpace: "nowrap",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}>
                <span style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: "var(--nb-yellow)", flexShrink: 0, display: "inline-block",
                }} />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM → SOLUTION ───────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">The Challenge</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.03em", marginTop: 12 }}>
              AI complexity is growing faster
              <br />than your team.
            </h2>
          </motion.div>

          {/* Pain cards */}
          <motion.div className="cards-3"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
            variants={stagger}>
            {[
              {
                icon: Lock, title: "Model Lock-in Risk",
                body: "Hardcoding to one AI provider creates brittle architectures and crushing technical debt. Switching costs are enormous when your abstractions are tightly coupled to a single vendor.",
                bg: "var(--nb-orange-subtle)", border: "var(--nb-orange)", text: "var(--nb-orange)",
              },
              {
                icon: DollarSign, title: "Unpredictable AI Costs",
                body: "Cloud AI billing surprises derail engineering budgets. Without real-time cost enforcement per team, feature, or customer, overruns happen silently before anyone notices.",
                bg: "var(--nb-warning-subtle)", border: "var(--nb-warning)", text: "var(--nb-warning)",
              },
              {
                icon: AlertTriangle, title: "Compliance Exposure",
                body: "PII and sensitive data flowing unchecked to third-party endpoints creates audit failures, GDPR/HIPAA risk, and enterprise security blockers at every procurement review.",
                bg: "var(--nb-danger-subtle)", border: "var(--nb-danger)", text: "var(--nb-danger)",
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="nb-card" style={{ padding: 28 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "var(--radius)",
                    background: c.bg, border: `2px solid ${c.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 18, color: c.text, flexShrink: 0,
                  }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 10, letterSpacing: "-0.02em" }}>{c.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--nb-ink-muted)" }}>{c.body}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Transition arrow */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "44px 0" }}>
            <motion.div
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              style={{ width: 2, height: 40, background: "var(--nb-border)", transformOrigin: "top" }} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4 }}
              style={{
                margin: "14px 0", padding: "10px 28px",
                background: "var(--nb-invert)", color: "var(--nb-bg)",
                border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
                fontSize: 12, fontWeight: 800, letterSpacing: "0.1em",
                textTransform: "uppercase", boxShadow: "var(--shadow-brutal-sm)",
              }}>
              InferGate solves this
            </motion.div>
            <motion.div
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              style={{ width: 2, height: 40, background: "var(--nb-border)", transformOrigin: "top" }} />
          </div>

          {/* Solution cards */}
          <motion.div className="cards-3"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
            variants={stagger}>
            {[
              {
                icon: GitBranch, title: "Universal Provider Abstraction",
                body: "A single OpenAI-compatible API that routes to 25+ providers. Switch models, chain providers, or failover automatically with zero application code changes.",
              },
              {
                icon: BarChart3, title: "Hierarchical Budget Control",
                body: "6-level cost hierarchy enforced in real time from org down to individual model calls. Virtual keys embed budgets, rate limits, and TTLs — no billing surprises, ever.",
              },
              {
                icon: Shield, title: "Enterprise-Grade Compliance",
                body: "AES-256 encryption, RBAC, SCIM 2.0, Vault integration, PII guardrails, and air-gapped VPC deployment. Pass every enterprise security review on the first try.",
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="nb-card nb-card--yellow" style={{ padding: 28 }}>
                  <div className="feature-icon" style={{ marginBottom: 18 }}><Icon size={20} /></div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 10, letterSpacing: "-0.02em" }}>{c.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--nb-ink-muted)" }}>{c.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 3. ARCHITECTURE ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Architecture</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.03em", marginTop: 12 }}>
              The AI Control Plane
              <br />Your Enterprise Needs
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}
            style={{ marginBottom: 40 }}>
            <ArchDiagram />
          </motion.div>

          {/* 5 feature tiles */}
          <motion.div
            className="ig-arch-tiles"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={stagger}>
            {[
              { icon: GitBranch, label: "Intelligent Routing", sub: "CEL engine, <100µs" },
              { icon: Database, label: "Semantic Caching", sub: "30–65% cost reduction" },
              { icon: BarChart3, label: "Budget Governance", sub: "6-level hierarchy" },
              { icon: Eye, label: "Full Observability", sub: "Prometheus + OTLP" },
              { icon: Bot, label: "Native MCP", sub: "Tool registry + agents" },
            ].map((tile, i) => {
              const Icon = tile.icon;
              return (
                <motion.div key={i} variants={fadeUp} style={{
                  padding: "20px 16px",
                  border: "2px solid var(--nb-border)",
                  borderRadius: "var(--radius)",
                  background: "var(--nb-bg)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 8, textAlign: "center",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "var(--radius)",
                    background: "var(--nb-yellow)", border: "2px solid var(--nb-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "var(--shadow-brutal-sm)",
                  }}>
                    <Icon size={18} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.01em" }}>{tile.label}</span>
                  <span style={{ fontSize: 11, color: "var(--nb-ink-muted)", lineHeight: 1.4 }}>{tile.sub}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. PERFORMANCE ──────────────────────────────── */}
      <section className="section section--invert" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(245,197,24,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.055) 1px, transparent 1px)",
          backgroundSize: "48px 48px", pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ color: "rgba(250,248,243,0.45)" }}>Performance</span>
            <h2 style={{
              fontSize: "clamp(26px, 3.8vw, 56px)",
              lineHeight: 1.04, letterSpacing: "-0.03em", marginTop: 12, color: "var(--nb-bg)",
            }}>
              12× Faster Than the
              <br />
              <span style={{ color: "var(--nb-yellow)" }}>Nearest Alternative</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(250,248,243,0.5)", marginTop: 14, lineHeight: 1.65 }}>
              Written in Go with zero-allocation middleware. InferGate is 12× faster than LiteLLM,
              <br />2× faster than Kong AI — and that gap widens under concurrency.
            </p>
          </motion.div>

          <div className="ig-perf-grid">
            {/* Comparison table */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{
                border: "2px solid rgba(255,255,255,0.14)",
                borderRadius: "var(--radius)", overflow: "hidden",
              }}>
              <table className="ig-table" style={{ background: "transparent" }}>
                <thead>
                  <tr>
                    {["Gateway", "Runtime", "Throughput"].map(h => (
                      <th key={h} style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(250,248,243,0.5)",
                        borderRight: "1px solid rgba(255,255,255,0.08)",
                        borderBottom: "2px solid rgba(255,255,255,0.14)",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "InferGate", lang: "Go", rps: "10,400 req/s", hl: true },
                    { name: "Kong AI", lang: "Lua", rps: "~5,000 req/s", hl: false },
                    { name: "Portkey", lang: "Node.js", rps: "~2,100 req/s", hl: false },
                    { name: "LiteLLM", lang: "Python", rps: "~850 req/s", hl: false },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{
                        fontWeight: row.hl ? 800 : 600,
                        color: row.hl ? "var(--nb-ink)" : "rgba(250,248,243,0.75)",
                        background: row.hl ? "var(--nb-yellow)" : "transparent",
                        borderRight: "1px solid rgba(255,255,255,0.08)",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                      }}>
                        {row.hl && <span style={{ marginRight: 6, fontSize: 11 }}>★</span>}{row.name}
                      </td>
                      <td style={{
                        color: row.hl ? "rgba(10,10,10,0.55)" : "rgba(250,248,243,0.45)",
                        fontFamily: "'JetBrains Mono',monospace", fontSize: 12,
                        background: row.hl ? "var(--nb-yellow)" : "transparent",
                        borderRight: "1px solid rgba(255,255,255,0.08)",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                      }}>{row.lang}</td>
                      <td style={{
                        fontWeight: row.hl ? 800 : 600,
                        fontFamily: "'JetBrains Mono',monospace",
                        color: row.hl ? "var(--nb-ink)" : "rgba(250,248,243,0.75)",
                        background: row.hl ? "var(--nb-yellow)" : "transparent",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                      }}>{row.rps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Bar chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
              <PerfBars />
            </motion.div>
          </div>

          {/* Extra metrics row */}
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 40 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}>
            {[
              { val: "0.3ms", dc: "0.3", dcs: "ms", dcd: "1", label: "P50 overhead", sub: "Adds virtually nothing to latency" },
              { val: "1.2ms", dc: "1.2", dcs: "ms", dcd: "1", label: "P99 overhead", sub: "Consistent tail performance at scale" },
              { val: "<2s",   dc: "2",   dcs: "s",             label: "Cold start",   sub: "~50MB base memory footprint" },
            ].map((m, i) => (
              <motion.div key={i} variants={fadeUp} style={{
                padding: "22px 24px",
                border: "2px solid rgba(255,255,255,0.1)",
                borderRadius: "var(--radius)",
                background: "rgba(255,255,255,0.04)",
              }}>
                <div
                  data-counter={m.dc}
                  data-counter-suffix={m.dcs}
                  data-counter-decimals={m.dcd}
                  style={{ fontSize: 34, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--nb-yellow)", marginBottom: 4 }}
                >{m.val}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(250,248,243,0.8)", marginBottom: 3 }}>{m.label}</div>
                <div style={{ fontSize: 12, color: "rgba(250,248,243,0.38)", lineHeight: 1.55 }}>{m.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. FEATURES GRID ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} style={{ marginBottom: 48 }}>
            <span className="section-label">Platform Capabilities</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.03em", marginTop: 12, maxWidth: 560 }}>
              Everything you need to run
              <br />AI in production.
            </h2>
          </motion.div>

          <motion.div className="cards-3 ig-features-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            variants={stagger}>
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="nb-card" style={{ padding: 28 }}>
                  <div className="feature-icon" style={{ marginBottom: 16 }}><Icon size={20} /></div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.02em" }}>{feat.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "var(--nb-ink-muted)" }}>{feat.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 6. PROVIDER COVERAGE ────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Provider Ecosystem</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.03em", marginTop: 12 }}>
              Every Provider. One Interface.
            </h2>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", marginTop: 14, lineHeight: 1.65, maxWidth: 560, margin: "14px auto 0" }}>
              25+ providers. Add, swap, or chain them without touching a single line of application code.
            </p>
          </motion.div>

          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={stagger}>
            {PROVIDERS.map((p, i) => (
              <motion.span key={i} variants={fadeUp} style={{
                padding: "9px 18px",
                border: "2px solid var(--nb-border)",
                borderRadius: "var(--radius)",
                fontSize: 13, fontWeight: 700,
                background: i % 7 === 0 ? "var(--nb-yellow)" : i % 9 === 4 ? "var(--nb-invert)" : "var(--nb-bg)",
                color: i % 9 === 4 ? "var(--nb-bg)" : "var(--nb-ink)",
                boxShadow: "var(--shadow-brutal-sm)",
                whiteSpace: "nowrap",
                letterSpacing: "-0.01em",
                transition: "transform 0.12s ease, box-shadow 0.12s ease",
              }}>
                {p}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. CODE SNIPPET ─────────────────────────────── */}
      <section className="section section--elevated">
        <div className="container container--narrow">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-label">Drop-in Migration</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 44px)", lineHeight: 1.06, letterSpacing: "-0.03em", marginTop: 12 }}>
              One URL change. Instant access
              <br />to every provider.
            </h2>
            <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", marginTop: 14, lineHeight: 1.65 }}>
              InferGate is fully compatible with the OpenAI SDK. Change only{" "}
              <code style={{
                fontFamily: "'JetBrains Mono',monospace",
                background: "var(--nb-yellow-subtle)",
                border: "1px solid var(--nb-yellow-dark)",
                padding: "2px 7px", borderRadius: 3, fontSize: 13,
              }}>base_url</code>
              {" "}and your existing code works immediately.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}>

            {/* Tab buttons */}
            <div style={{ display: "flex", gap: 2, marginBottom: -2, position: "relative", zIndex: 1 }}>
              {(["python", "typescript"] as const).map(tab => (
                <button key={tab} onClick={() => setCodeTab(tab)} style={{
                  padding: "9px 22px", fontSize: 12, fontWeight: 800,
                  fontFamily: "'JetBrains Mono',monospace",
                  letterSpacing: "0.04em", cursor: "pointer",
                  border: "2px solid var(--nb-border)",
                  borderBottom: codeTab === tab ? "2px solid var(--nb-invert)" : "2px solid var(--nb-border)",
                  borderRadius: "var(--radius) var(--radius) 0 0",
                  background: codeTab === tab ? "var(--nb-invert)" : "var(--nb-surface)",
                  color: codeTab === tab ? "var(--nb-bg)" : "var(--nb-ink-muted)",
                  textTransform: "capitalize", transition: "all 0.15s",
                }}>{tab}</button>
              ))}
            </div>

            {/* Code panels */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              {/* Before */}
              <div className="code-block" style={{ borderRadius: "0 0 0 var(--radius)", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" /><span className="code-dot code-dot--y" /><span className="code-dot code-dot--g" />
                  <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.38)", fontWeight: 600 }}>
                    {codeTab === "python" ? "before.py" : "before.ts"}
                  </span>
                </div>
                <div className="code-block__body">
                  <pre dangerouslySetInnerHTML={{ __html: codeTab === "python" ? CODE_PY_BEFORE : CODE_TS_BEFORE }} />
                </div>
              </div>

              {/* After */}
              <div className="code-block" style={{ borderRadius: "0 var(--radius) var(--radius) 0", borderLeft: "none" }}>
                <div className="code-block__bar">
                  <span className="code-dot code-dot--r" /><span className="code-dot code-dot--y" /><span className="code-dot code-dot--g" />
                  <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.38)", fontWeight: 600 }}>
                    {codeTab === "python" ? "after.py" : "after.ts"}
                  </span>
                  <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 800, color: "var(--nb-yellow)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    InferGate ✓
                  </span>
                </div>
                <div className="code-block__body">
                  <pre dangerouslySetInnerHTML={{ __html: codeTab === "python" ? CODE_PY_AFTER : CODE_TS_AFTER }} />
                </div>
              </div>
            </div>

            {/* Compatible SDKs strip */}
            <div style={{
              marginTop: 20, padding: "14px 20px",
              border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
              background: "var(--nb-bg)", boxShadow: "var(--shadow-brutal-sm)",
              display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap",
            }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--nb-ink-muted)", flexShrink: 0 }}>
                Compatible with:
              </span>
              {["Python","TypeScript","Go","Rust","Java","Ruby","C#","OpenAI SDK","Anthropic SDK","LangChain","PydanticAI","LiteLLM"].map(s => (
                <span key={s} style={{
                  padding: "3px 10px", fontSize: 11, fontWeight: 700,
                  border: "1.5px solid var(--nb-border-light)",
                  borderRadius: 3, background: "var(--nb-surface)",
                  color: "var(--nb-ink-muted)",
                }}>{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. SECURITY ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="ig-security-split">
            {/* Left */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}>
              <span className="section-label">Security &amp; Compliance</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 44px)", lineHeight: 1.06, letterSpacing: "-0.03em", marginTop: 12, marginBottom: 20 }}>
                Built for Regulated
                <br />Environments
              </h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 32 }}>
                InferGate is designed to pass enterprise security reviews and operate in the most demanding
                compliance environments — from FCA-regulated financial services to HIPAA healthcare
                to air-gapped government infrastructure.
              </p>
              <div className="ig-split-2col" style={{ gap: 10 }}>
                {SECURITY_POINTS.map((point, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13.5, lineHeight: 1.5, color: "var(--nb-ink-muted)" }}>
                    <span style={{
                      width: 19, height: 19, borderRadius: 3,
                      background: "var(--nb-yellow)", border: "1.5px solid var(--nb-border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: shield */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.65, type: "spring", stiffness: 100 }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <SecurityShield />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. INDUSTRIES ───────────────────────────────── */}
      <section className="section section--surface">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-label">Industries</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 44px)", lineHeight: 1.06, letterSpacing: "-0.03em", marginTop: 12 }}>
              Trusted across regulated sectors
            </h2>
          </motion.div>

          <motion.div className="cards-4"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
            variants={stagger}>
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <Link href={`/industries/${ind.slug}`} className="nb-card"
                    style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14, textDecoration: "none", height: "100%" }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: "var(--radius)",
                      background: "var(--nb-yellow)", border: "2px solid var(--nb-border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "var(--shadow-brutal-sm)", color: "var(--nb-ink)", flexShrink: 0,
                    }}>
                      <Icon size={26} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 7, letterSpacing: "-0.02em" }}>{ind.title}</h3>
                      <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--nb-ink-muted)" }}>{ind.desc}</p>
                    </div>
                    <div style={{
                      marginTop: "auto", display: "flex", alignItems: "center", gap: 4,
                      fontSize: 12, fontWeight: 800, color: "var(--nb-ink-dim)",
                    }}>
                      Learn more <ChevronRight size={13} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 10. ENTERPRISE CTA ──────────────────────────── */}
      <section className="section" style={{ background: "var(--nb-yellow)", position: "relative", overflow: "hidden" }}>
        {/* Stripe bg */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(-45deg, transparent 0, transparent 18px, rgba(10,10,10,0.045) 18px, rgba(10,10,10,0.045) 36px)",
          pointerEvents: "none",
        }} />
        {/* Watermark */}
        <div aria-hidden style={{
          position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)",
          fontSize: "clamp(200px, 30vw, 380px)", fontWeight: 900,
          color: "rgba(10,10,10,0.045)",
          fontFamily: "'Bricolage Grotesque',sans-serif",
          lineHeight: 1, letterSpacing: "-0.08em",
          pointerEvents: "none", userSelect: "none",
        }}>IG</div>

        <div className="container container--tight" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}>
            <span className="eyebrow" style={{
              background: "var(--nb-invert)", color: "var(--nb-bg)",
              borderColor: "var(--nb-invert)",
            }}>
              Get Started
            </span>
            <h2 style={{
              fontSize: "clamp(30px, 5vw, 72px)",
              lineHeight: 1.02, letterSpacing: "-0.045em",
              marginTop: 20, marginBottom: 18, fontWeight: 900,
            }}>
              Ready to bring AI infrastructure
              <br />
              <em style={{ fontFamily: "'Fraunces',Georgia,serif", fontStyle: "italic", fontWeight: 700 }}>
                under control?
              </em>
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.65, color: "rgba(10,10,10,0.62)",
              maxWidth: 520, margin: "0 auto 40px",
            }}>
              Enterprise AI gateway for teams that need reliability, governance,
              and uncompromising performance — all behind one OpenAI-compatible API.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.22 }}
              style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-invert">
                Contact Sales <ArrowRight size={16} />
              </Link>
              <Link href="/book-demo" className="btn-secondary"
                style={{ background: "rgba(250,248,243,0.85)" }}>
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Responsive styles ────────────────────────────── */}
      <style>{`
        .ig-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .ig-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .ig-perf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .ig-security-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .ig-arch-tiles {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }
        @media (max-width: 1024px) {
          .ig-arch-tiles { grid-template-columns: repeat(3, 1fr); }
          .ig-perf-grid  { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .ig-hero-grid  { grid-template-columns: 1fr; gap: 36px; }
          .ig-hero-grid  > div:last-child { display: none; }
          .ig-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .ig-perf-grid  { grid-template-columns: 1fr; }
          .ig-security-split { grid-template-columns: 1fr; gap: 36px; }
          .ig-security-split > div:last-child { display: none; }
          .ig-arch-tiles { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .ig-stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .ig-arch-tiles { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}
