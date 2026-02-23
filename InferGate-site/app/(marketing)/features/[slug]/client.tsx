"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  GitBranch,
  Shield,
  Database,
  Eye,
  BarChart3,
  Lock,
  Brain,
  Network,
  Activity,
  Server,
  Layers,
  Zap,
  Key,
  Code,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface FeatureItem {
  title: string;
  body: string;
}

interface FeatureData {
  eyebrow: string;
  headline: string;
  subhead: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  accentColor: string;
  features: FeatureItem[];
  codeSnippet: { lang: string; code: string };
  svgType: string;
  ctaText?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function parseFeature(raw: string): FeatureItem {
  const sep = raw.indexOf(": ");
  if (sep === -1) return { title: raw, body: "" };
  return { title: raw.slice(0, sep), body: raw.slice(sep + 2) };
}

function features(...raws: string[]): FeatureItem[] {
  return raws.map(parseFeature);
}

// ---------------------------------------------------------------------------
// FEATURES_DATA
// ---------------------------------------------------------------------------
const FEATURES_DATA: Record<string, FeatureData> = {
  routing: {
    eyebrow: "Gateway Core",
    headline: "Route any request to the best available model.",
    subhead:
      "CEL-based routing evaluated in under 100µs. Route by cost, latency, region, model capability, or any custom attribute. Update rules live without restarts.",
    icon: GitBranch,
    accentColor: "#F5C518",
    features: features(
      "CEL Expression Engine: Google's Common Expression Language evaluates routing rules against request metadata in <100µs. Route on model name, token count, message length, cost-to-date, tags, and custom headers.",
      "Declarative YAML Config: Define priority chains, round-robin pools, and weighted splits in a single config file. Hot-reload propagates changes without restarting the gateway.",
      "Canary & A/B Deployments: Send 80% of traffic to your stable model and 20% to a newer candidate. Measure results, then shift weight with a single config update.",
      "Metadata-Aware Routing: Virtual keys carry metadata (team=frontend, env=production). CEL rules can inspect key metadata to route different teams to different model pools."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `routes:
  - id: cost-saver
    priority: 20
    match:
      cel: "size(request.body.messages) > 50 || request.body.max_tokens > 4000"
    target: gemini-flash-pool

  - id: admin-team
    priority: 10
    match:
      virtual_key: "ig_vkey_admin"
    target: gpt4o-primary`,
    },
    svgType: "routing",
    ctaText: "Talk to our engineering team",
  },

  fallback: {
    eyebrow: "Reliability",
    headline: "Provider outages become invisible.",
    subhead:
      "Define priority chains once. InferGate handles rate limits, timeouts, and regional outages automatically. Your application only sees successful responses.",
    icon: Activity,
    accentColor: "#FF5A36",
    features: features(
      "Priority Chains: List providers in order of preference. InferGate tries each in sequence, advancing only when the current endpoint returns a retryable error.",
      "Exponential Backoff with Jitter: Retries on transient errors use exponential backoff plus random jitter to avoid thundering-herd effects on recovering providers.",
      "Transient vs Semantic Error Classification: InferGate retries 429, 502, and 503 responses automatically. It never retries 400 Bad Request or 401 Unauthorized — those surface immediately to your application.",
      "Client Transparency: Your application sees a single successful response. All retry attempts, provider switches, and latency details are captured in traces and logs for debugging."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `targets:
  - id: openai-primary
    provider: openai
    model: gpt-4o
    priority: 10

  - id: azure-fallback
    provider: azure-openai
    model: gpt-4o
    priority: 20
    region: eastus

  - id: anthropic-last-resort
    provider: anthropic
    model: claude-3-5-sonnet-20241022
    priority: 30

fallback:
  max_retries: 3
  retry_on: [429, 502, 503, 504]
  backoff: exponential_jitter`,
    },
    svgType: "fallback",
  },

  caching: {
    eyebrow: "Performance & Cost",
    headline: "Answer similar questions once. Cache the rest.",
    subhead:
      "Vector-similarity deduplication returns cached responses for semantically equivalent queries. Drive 30–65% cost reduction on repeated workloads.",
    icon: Database,
    accentColor: "#F5C518",
    features: features(
      "Vector Embeddings for Similarity: Incoming requests are embedded and compared against cached query vectors using cosine similarity. Works with Qdrant or pgvector as the backing store.",
      "Configurable Similarity Threshold: Set the similarity cutoff (e.g. 0.92) that determines what counts as a cache hit. Lower thresholds cast a wider net; higher thresholds are more precise.",
      "Scoped Per-Org or Per-Virtual-Key: Cache namespaces are isolated per organisation or per virtual key so tenant A never receives tenant B's cached responses.",
      "Cache Bypass Controls: Include a Cache-Control: no-cache header or set bypass_cache: true in request metadata to force a fresh model call for any request.",
      "Real-Time Hit/Miss Telemetry: Track cache hit rates, bytes saved, and token savings in Prometheus metrics. Dashboard panels update in real-time."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `plugins:
  - name: semanticcache
    enabled: true
    config:
      backend: qdrant
      qdrant_url: "http://qdrant:6333"
      collection: infergate_cache
      similarity_threshold: 0.92
      embedding_model: text-embedding-3-small
      ttl: 3600          # seconds
      scope: virtual_key # or "org"`,
    },
    svgType: "caching",
  },

  observability: {
    eyebrow: "Operations",
    headline: "Full visibility into every AI request.",
    subhead:
      "Prometheus metrics, OpenTelemetry traces, real-time log streaming, and an immutable audit trail. From P99 latency to per-team token spend — you see everything.",
    icon: Eye,
    accentColor: "#F5C518",
    features: features(
      "Prometheus Metrics: Latency histograms (P50/P95/P99), error rates, token usage per provider and model, cache hit ratio, budget consumption — all exported on /metrics.",
      "OpenTelemetry Distributed Tracing: Every request spans from gateway ingress to model response. Export to Jaeger, Grafana Tempo, Datadog, or any OTLP-compatible backend.",
      "WebSocket Real-Time Dashboard: Stream live request events to any WebSocket consumer. Power custom dashboards, alerting sidecars, or real-time cost-tracking UIs.",
      "Immutable Queryable Audit Trail: Every request and admin action is written to an append-only log in PostgreSQL or ClickHouse. Query by time range, virtual key, model, team, and more.",
      "Maxim AI Analytics Integration: Native plugin ships events to Maxim for LLM-quality evaluation, regression detection, and automated prompt performance scoring."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `plugins:
  - name: otel
    enabled: true
    config:
      endpoint: "http://otel-collector:4317"
      service_name: infergate
      sample_rate: 1.0
      propagation: w3c

# prometheus scrape config (prometheus.yml)
scrape_configs:
  - job_name: infergate
    static_configs:
      - targets: ["infergate:8080"]
    metrics_path: /metrics`,
    },
    svgType: "observability",
  },

  "rate-limiting": {
    eyebrow: "Governance",
    headline: "Real-time cost control across every team and model.",
    subhead:
      "Define budgets at six levels of granularity. InferGate enforces them in real-time — rerouting to cheaper models at soft thresholds and blocking at hard limits.",
    icon: BarChart3,
    accentColor: "#FF5A36",
    features: features(
      "6-Level Hierarchy: Set budgets at Org → Customer → Team → Virtual Key → Provider → Model. Child limits are always bounded by parent quotas.",
      "Real-Time Token Cost Tracking: InferGate maintains a live pricing catalog for every supported model. Token costs are accumulated in real-time against every applicable budget level.",
      "Soft Limits — Reroute: When spend crosses a soft threshold (e.g. 80%), InferGate automatically reroutes traffic to a cheaper model defined in the budget config.",
      "Hard Limits — Block: At the hard limit, requests are rejected with a 429 and a structured error body that includes the budget level, spend so far, and reset time.",
      "Zero Surprise Bills: Hard limits guarantee maximum spend. No rounding, no grace periods — the limit is the limit."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `budgets:
  org:
    id: acme-corp
    monthly_usd: 5000
    hard_limit: true

  teams:
    - id: team-frontend
      monthly_usd: 500
      soft_limit_pct: 80
      soft_limit_fallback: gemini-flash-pool
      hard_limit: true

  virtual_keys:
    - key: ig_vkey_dev123
      daily_usd: 10
      rpm: 60
      tpd: 200000`,
    },
    svgType: "governance",
  },

  "access-control": {
    eyebrow: "Security",
    headline: "Distribute scoped credentials, never raw API keys.",
    subhead:
      "Virtual Keys give teams access to exactly the models they need — nothing more. Enforce RBAC, provision via SCIM, and rotate keys instantly.",
    icon: Lock,
    accentColor: "#F5C518",
    features: features(
      "Virtual Keys (ig_vkey_): Scoped credentials that reference provider pools without embedding raw API keys. Each key can be restricted to specific models, providers, and budget ceilings.",
      "RBAC with Three Roles: Users (read-only dashboard), Developers (create keys, manage pools), and Admins (full access including billing and SCIM). Roles are assignable per-org.",
      "SCIM 2.0 Provisioning: Auto-provision and deprovision users from Okta, Azure AD, or any SCIM-compliant IdP. Group membership maps directly to InferGate RBAC roles.",
      "SSO via OAuth2: Google and GitHub OAuth2 out of the box. SAML 2.0 support for enterprise IdPs. JIT provisioning creates accounts on first login.",
      "Key TTL & Instant Revocation: Set expiry dates on virtual keys for contractors or short-lived workloads. Revoke any key instantly — propagation to all gateway nodes is sub-second.",
      "Metadata Binding for Routing: Attach arbitrary metadata to keys (team, environment, tier). CEL routing rules can inspect this metadata to enforce team-level routing policies."
    ),
    codeSnippet: {
      lang: "bash",
      code: `# Create a scoped virtual key via API
curl -X POST https://your-gateway/v1/virtual-keys \\
  -H "Authorization: Bearer $INFERGATE_ADMIN_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "frontend-team-prod",
    "allowed_models": ["gpt-4o-mini", "gemini-1.5-flash"],
    "budget": { "daily_usd": 20, "rpm": 100 },
    "metadata": { "team": "frontend", "env": "production" },
    "expires_at": "2025-12-31T00:00:00Z"
  }'`,
    },
    svgType: "access-control",
  },

  guardrails: {
    eyebrow: "Compliance",
    headline: "Intercept sensitive data before it leaves your perimeter.",
    subhead:
      "PII detection and payload redaction at the gateway layer. Set content policies, enforce topic restrictions, and log every guardrail event for compliance reporting.",
    icon: Shield,
    accentColor: "#FF5A36",
    features: features(
      "PII Detection & Redaction: Pattern-match and redact names, SSNs, credit card numbers, email addresses, phone numbers, and PHI patterns before payloads reach any model provider.",
      "Content Policy Enforcement: Define allow-lists and deny-lists for topics, phrases, and regex patterns. Apply policies per-virtual-key or globally across the org.",
      "Semantic Filter on Request & Response: Go beyond keyword matching — use an embedding-based classifier to block prompt injection attempts, jailbreaks, or off-topic queries.",
      "Guardrail Event Audit Logging: Every blocked or redacted request is written to the audit log with the rule that triggered it. Export these events for HIPAA, SOX, and GDPR compliance reporting.",
      "Configurable Response for Blocked Requests: Return a custom error message, a 400 with structured metadata, or silently substitute a safe response — all configurable per policy."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `plugins:
  - name: guardrails
    enabled: true
    config:
      pii:
        enabled: true
        action: redact   # or "block"
        patterns: [ssn, credit_card, email, phone, name]

      content_policy:
        deny_topics: ["violence", "illegal_activity"]
        deny_regex: ["(?i)ignore previous instructions"]

      semantic_filter:
        enabled: true
        classifier: jailbreak-v2
        threshold: 0.85`,
    },
    svgType: "guardrails",
  },

  "mcp-gateway": {
    eyebrow: "Agents & Tools",
    headline: "Run agentic AI loops at the gateway layer.",
    subhead:
      "InferGate implements the Model Context Protocol natively. Tool registry, agent mode, and sandboxed Starlark execution — offloaded from your application to the gateway.",
    icon: Brain,
    accentColor: "#F5C518",
    features: features(
      "Full MCP Spec (2024-11-05): InferGate implements the complete Model Context Protocol specification including tool discovery, structured tool calls, and result injection.",
      "Tool Registry (stdio/HTTP/WebSocket): Register MCP servers over any transport. The gateway proxies tool calls, aggregates results, and re-injects them into the model context automatically.",
      "Agent Mode — Iterative Execution: Enable agent_mode to let InferGate run the full send→tool_call→execute→return loop autonomously. Your application sends one request; the gateway handles all iterations.",
      "Starlark Code Execution: Define lightweight tools as inline Starlark scripts. Sandboxed execution eliminates round-trips to external services for simple transformations — up to 10x fewer LLM calls.",
      "Per-Key Tool Group Access Control: Assign tool groups to virtual keys. A frontend key might only access web_search; a backend key gets database and code_exec tools.",
      "MCP Server Health Monitoring: InferGate health-checks all registered MCP servers. Unhealthy servers are excluded from tool offerings and flagged in Prometheus metrics."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `mcp:
  agent_mode: true
  max_iterations: 10

  servers:
    - id: web-search
      transport: http
      url: "http://mcp-search:8000"
      tools: [search, fetch_url]

    - id: code-runner
      transport: stdio
      command: ["python", "mcp_runner.py"]
      tools: [execute_python, lint_code]

  tool_groups:
    - id: backend-tools
      tools: [web-search, code-runner]`,
    },
    svgType: "mcp",
  },

  "adaptive-load-balancing": {
    eyebrow: "Performance",
    headline: "Traffic flows to the fastest, healthiest endpoint.",
    subhead:
      "Four algorithms — priority, round-robin, weighted, and latency-based. InferGate tracks Time-to-First-Token in rolling windows and automatically shifts load.",
    icon: Network,
    accentColor: "#F5C518",
    features: features(
      "Priority / Failover Chains: Designate a primary endpoint and one or more fallbacks. Traffic shifts automatically when the primary exceeds error thresholds.",
      "Round-Robin Across Key Pools: Distribute load evenly across multiple API key copies of the same provider to overcome per-key rate limits.",
      "Weighted Splits (e.g. 80/20): Assign traffic percentages to endpoints. Ideal for canary deployments — ship 20% to a new model and observe metrics before full rollout.",
      "Latency-Based Routing: InferGate tracks Time-to-First-Token in a 5-minute rolling window per endpoint. Endpoints with higher P95 TTFT receive proportionally less traffic.",
      "Per-Region Routing: Tag endpoints with GCP or AWS regions. Route latency-sensitive traffic to the nearest region; route batch workloads to cheaper regions.",
      "Dynamic Weight Adjustment: Change algorithm, weights, or priority order via config hot-reload. No restart required; changes take effect within one polling interval."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `target_pool:
  id: primary-pool
  algorithm: latency_based
  window_minutes: 5
  ttft_percentile: p95

  targets:
    - id: openai-us-east
      provider: openai
      model: gpt-4o
      region: us-east-1
      weight: 50

    - id: openai-eu-west
      provider: openai
      model: gpt-4o
      region: eu-west-1
      weight: 30

    - id: azure-us-central
      provider: azure-openai
      model: gpt-4o
      region: us-central
      weight: 20`,
    },
    svgType: "load-balancing",
  },

  clustering: {
    eyebrow: "Infrastructure",
    headline: "Scale horizontally without coordination overhead.",
    subhead:
      "Stateless gateway nodes share config via Redis or PostgreSQL. Roll updates with zero downtime. Kubernetes-native with HPA, PDB, and TLS ingress.",
    icon: Server,
    accentColor: "#F5C518",
    features: features(
      "Stateless Gateway Nodes: Every node reads from shared config and state backends. No sticky sessions, no node-local state — any node can serve any request.",
      "Shared Config Backend (Redis/PostgreSQL): Virtual keys, routing rules, budgets, and guardrail policies are stored centrally. Changes propagate to all nodes on the next poll cycle (default 5s).",
      "Rolling Updates with Zero Downtime: Kubernetes rolling update strategy combined with readiness probes ensures requests are never dropped during pod replacement.",
      "Kubernetes Helm Chart: Production-ready chart includes HPA (scale on RPS or CPU), PDB (always ≥2 pods available), TLS ingress via cert-manager, and configurable resource limits.",
      "Circuit Breaker Per Provider: Each provider connection has an independent circuit breaker. Tripped breakers exclude the provider from routing without affecting other providers.",
      "Config Hot-Reload Across All Nodes: POST to /admin/reload or update the shared backend — all nodes pick up changes within the configured poll interval without any restart."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `# helm/values.yaml
replicaCount: 3

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 20
  targetCPUUtilizationPercentage: 60

podDisruptionBudget:
  minAvailable: 2

config:
  backend: redis
  redis_url: "redis://redis-cluster:6379"
  hot_reload_interval: 5s

ingress:
  enabled: true
  tls: true
  certManager: true`,
    },
    svgType: "clustering",
  },

  "audit-logs": {
    eyebrow: "Compliance",
    headline: "Every request. Every action. Every change. Logged.",
    subhead:
      "Immutable, append-only audit trail queryable from PostgreSQL or ClickHouse. SIEM-ready structured JSON for Splunk, Datadog, and more.",
    icon: Layers,
    accentColor: "#FF5A36",
    features: features(
      "Append-Only Immutable Log: Every request and every admin action (key creation, config change, user role update) is written to an append-only store. Records cannot be modified or deleted.",
      "Queryable Log Store (PostgreSQL or ClickHouse): Run SQL queries over the audit log. Filter by time, virtual key, model, team, guardrail trigger, or HTTP status.",
      "SIEM-Ready Structured JSON Events: Each event is a JSON object with a fixed schema. Native integrations for Splunk HEC, Datadog Log Management, and any webhook-compatible SIEM.",
      "Configurable Retention & Data Residency: Set per-org retention windows (90 days to 7 years). Pin audit data to specific cloud regions to meet data-residency requirements.",
      "SOC 2 / HIPAA / ISO 27001 Alignment: Audit log schema and retention controls are designed to satisfy common compliance framework evidence requirements out of the box.",
      "Exportable Compliance Reports: Generate time-range reports of all requests, guardrail events, and admin actions as CSV or JSON. Attach directly to compliance audit submissions."
    ),
    codeSnippet: {
      lang: "json",
      code: `{
  "event_id": "evt_01HXYZ9K2MBPQR3V4W5XYZABCD",
  "timestamp": "2025-01-15T14:23:07.412Z",
  "event_type": "request.completed",
  "virtual_key": "ig_vkey_frontend_prod",
  "org_id": "org_acme",
  "team": "frontend",
  "model": "gpt-4o",
  "provider": "openai",
  "prompt_tokens": 412,
  "completion_tokens": 128,
  "cost_usd": 0.00274,
  "latency_ms": 1843,
  "cache_hit": false,
  "guardrail_triggered": false,
  "status": 200
}`,
    },
    svgType: "audit",
  },

  vault: {
    eyebrow: "Security",
    headline: "Zero secrets in config. Zero secrets at rest.",
    subhead:
      "HashiCorp Vault stores all provider API keys. InferGate fetches, caches, and rotates credentials automatically. Your config files never contain credentials.",
    icon: Key,
    accentColor: "#F5C518",
    features: features(
      "Dynamic Secrets via Vault Leases: Vault issues short-lived credentials with automatic renewal. InferGate tracks lease expiry and renews before provider calls fail.",
      "Transit Encryption Layer: Use Vault's transit engine to encrypt sensitive fields in the InferGate database at the application layer — independent of database-level encryption.",
      "Built-in AES-256-GCM Fallback: For deployments without Vault, InferGate encrypts credentials at rest with AES-256-GCM using a key derived from a master secret env var.",
      "Vault Namespaces for Multi-Tenant Isolation: Map each InferGate organisation to a Vault namespace. Secrets for tenant A are physically isolated from tenant B's secrets.",
      "Audit Logging of All Vault Operations: Every secret fetch, renewal, and rotation is logged to both InferGate's audit log and Vault's own audit backend — full lineage.",
      "Fallback to Env Vars: For local dev or non-Vault deployments, InferGate reads credentials from environment variables. Production deployments should always use Vault or the built-in encryption layer."
    ),
    codeSnippet: {
      lang: "yaml",
      code: `secrets:
  backend: vault

  vault:
    address: "https://vault.internal:8200"
    auth_method: kubernetes
    role: infergate-prod
    namespace: infergate/prod

    paths:
      openai: "secret/data/providers/openai"
      anthropic: "secret/data/providers/anthropic"
      gemini: "secret/data/providers/gemini"

    lease_renew_threshold: 0.75  # renew at 75% of TTL`,
    },
    svgType: "vault",
  },

  plugins: {
    eyebrow: "Platform",
    headline: "Extend the gateway to fit your architecture.",
    subhead:
      "BeforeHook and AfterHook interfaces let you inject logic at any point in the request lifecycle. Bundled plugins cover 90% of use cases out of the box.",
    icon: Code,
    accentColor: "#F5C518",
    features: features(
      "BeforeHook Interface: Runs before the request reaches any provider. Use for auth checks, rate-limit enforcement, payload transformation, header injection, or request enrichment.",
      "AfterHook Interface: Runs after the provider response is received. Use for response logging, metrics emission, response enrichment, format normalisation, or downstream webhook delivery.",
      "Bundled Plugin Library: governance, semanticcache, logging, otel, maxim, telemetry, litellmcompat, jsonparser, and mocker — each independently toggleable per-deployment.",
      "Hot-Loadable via Config API: Enable, disable, or reconfigure any plugin with a PATCH to /admin/plugins. Changes propagate across all nodes without a restart.",
      "Sequential Chaining with Configurable Order: Plugins execute in a deterministic order defined in config. Place auth before rate-limiting; place logging after caching to avoid logging cache hits.",
      "Pure Go Interface — Zero CGO: Plugin interfaces are plain Go interfaces. Implement them in any Go package, compile into the gateway binary, or run as a sidecar over HTTP."
    ),
    codeSnippet: {
      lang: "go",
      code: `// Implement BeforeHook to inject a custom header
package myplugin

import (
    "context"
    "net/http"
    "github.com/infergate/gateway/plugin"
)

type RequestTagger struct{}

func (t *RequestTagger) Name() string { return "request-tagger" }

func (t *RequestTagger) BeforeHook(
    ctx context.Context,
    req *plugin.Request,
) (*plugin.Request, error) {
    req.Headers.Set("X-Trace-Source", "infergate")
    req.Metadata["tagged"] = true
    return req, nil
}`,
    },
    svgType: "plugins",
  },
};

// ---------------------------------------------------------------------------
// SVG Animations
// ---------------------------------------------------------------------------

function RoutingSVG() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" aria-hidden>
      {/* Source node */}
      <motion.rect
        x="20" y="100" width="80" height="40" rx="4"
        fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
      />
      <motion.text x="60" y="125" textAnchor="middle" fontSize="11" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Request
      </motion.text>

      {/* Decision diamond */}
      <motion.polygon
        points="200,80 240,120 200,160 160,120"
        fill="#F5C518" stroke="#0A0A0A" strokeWidth="2"
        initial={{ scale: 0, transformOrigin: "200px 120px" }}
        animate={{ scale: 1, transformOrigin: "200px 120px" }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      />
      <motion.text x="200" y="125" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        CEL
      </motion.text>

      {/* Destination nodes */}
      {[
        { y: 40, label: "GPT-4o", delay: 0.6 },
        { y: 100, label: "Gemini", delay: 0.7 },
        { y: 160, label: "Claude", delay: 0.8 },
      ].map(({ y, label, delay }) => (
        <motion.g key={label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay }}>
          <rect x="300" y={y} width="80" height="30" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
          <text x="340" y={y + 20} textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">{label}</text>
        </motion.g>
      ))}

      {/* Arrow: source → diamond */}
      <motion.line
        x1="100" y1="120" x2="158" y2="120"
        stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowhead)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.25, duration: 0.4 }}
      />

      {/* Arrows: diamond → destinations */}
      {[
        { x2: 300, y2: 55 },
        { x2: 300, y2: 115 },
        { x2: 300, y2: 175 },
      ].map(({ x2, y2 }, i) => (
        <motion.line
          key={i}
          x1="240" y1="120" x2={x2} y2={y2}
          stroke="#0A0A0A" strokeWidth="1.5" markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.55 + i * 0.1, duration: 0.35 }}
        />
      ))}

      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function FallbackSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      {[
        { x: 20, label: "Primary", color: "#FF5A36", fail: true, delay: 0.1 },
        { x: 160, label: "Fallback 1", color: "#F5C518", fail: false, delay: 0.5 },
        { x: 300, label: "Fallback 2", color: "#4ade80", fail: false, delay: 0.9 },
      ].map(({ x, label, color, fail, delay }) => (
        <motion.g key={label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}>
          <rect x={x} y="80" width="100" height="40" rx="4" fill={color} stroke="#0A0A0A" strokeWidth="2" />
          <text x={x + 50} y="105" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">{label}</text>
          {fail && (
            <>
              <motion.line x1={x + 20} y1="60" x2={x + 80} y2="120" stroke="#FF5A36" strokeWidth="3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.3 }} />
              <motion.line x1={x + 80} y1="60" x2={x + 20} y2="120" stroke="#FF5A36" strokeWidth="3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.3 }} />
            </>
          )}
        </motion.g>
      ))}
      {[
        { x1: 120, y1: 100, x2: 158, y2: 100, delay: 0.35 },
        { x1: 260, y1: 100, x2: 298, y2: 100, delay: 0.75 },
      ].map(({ x1, y1, x2, y2, delay }, i) => (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowFallback)"
          strokeDasharray="5,3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay, duration: 0.3 }} />
      ))}
      <defs>
        <marker id="arrowFallback" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function CachingSVG() {
  return (
    <svg viewBox="0 0 440 200" className="w-full h-full" aria-hidden>
      {/* Query */}
      <motion.rect x="10" y="80" width="70" height="40" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
      <motion.text x="45" y="105" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Query</motion.text>

      {/* Embed */}
      <motion.rect x="110" y="80" width="80" height="40" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
      <motion.text x="150" y="105" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Embed</motion.text>

      {/* Vector DB */}
      <motion.ellipse cx="270" cy="100" rx="50" ry="30" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} />
      <motion.text x="270" y="105" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>Vector DB</motion.text>

      {/* Cache HIT */}
      <motion.rect x="360" y="80" width="70" height="40" rx="4" fill="#4ade80" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
      <motion.text x="395" y="100" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>Cache</motion.text>
      <motion.text x="395" y="115" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>HIT ✓</motion.text>

      {/* Arrows */}
      {[
        { x1: 80, y1: 100, x2: 108, delay: 0.25 },
        { x1: 190, y1: 100, x2: 218, delay: 0.45 },
        { x1: 320, y1: 100, x2: 358, delay: 0.7 },
      ].map(({ x1, y1, x2, delay }, i) => (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={100}
          stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowCache)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay, duration: 0.25 }} />
      ))}
      <defs>
        <marker id="arrowCache" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function ObservabilitySVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden>
      {/* Request */}
      <motion.rect x="10" y="90" width="70" height="40" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
      <motion.text x="45" y="115" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>Request</motion.text>

      {/* Traces box */}
      <motion.rect x="110" y="40" width="80" height="36" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} />
      <motion.text x="150" y="63" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>OTel Traces</motion.text>

      {/* Metrics */}
      <motion.rect x="110" y="92" width="80" height="36" rx="4" fill="#FF5A36" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} />
      <motion.text x="150" y="115" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#FAF8F3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>Prometheus</motion.text>

      {/* Audit */}
      <motion.rect x="110" y="144" width="80" height="36" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} />
      <motion.text x="150" y="167" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Audit Log</motion.text>

      {/* Dashboard */}
      <motion.rect x="270" y="82" width="110" height="56" rx="4" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }} />
      <motion.text x="325" y="106" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#F5C518"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>Dashboard</motion.text>
      <motion.text x="325" y="123" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#FAF8F3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>Real-time</motion.text>

      {/* Connector lines */}
      <motion.line x1="80" y1="110" x2="108" y2="110"
        stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowObs)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.3 }} />
      {[{ y: 58 }, { y: 110 }, { y: 162 }].map(({ y }, i) => (
        <motion.line key={i} x1="192" y1={y} x2="268" y2="110"
          stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arrowObs)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }} />
      ))}
      <defs>
        <marker id="arrowObs" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function GovernanceSVG() {
  const levels = ["Org", "Customer", "Team", "Virtual Key", "Provider", "Model"];
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" aria-hidden>
      {levels.map((label, i) => {
        const w = 340 - i * 40;
        const x = (400 - w) / 2;
        const y = 10 + i * 36;
        return (
          <motion.g key={label}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.15 * i, duration: 0.3 }}
            style={{ transformOrigin: "200px 0px" }}>
            <rect x={x} y={y} width={w} height="28" rx="4"
              fill={i === 0 ? "#0A0A0A" : i % 2 === 0 ? "#F5C518" : "#FAF8F3"}
              stroke="#0A0A0A" strokeWidth="2" />
            <text x="200" y={y + 19} textAnchor="middle" fontSize="10"
              fontFamily="var(--font-jetbrains)"
              fill={i === 0 ? "#FAF8F3" : "#0A0A0A"}>
              {label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

function AccessControlSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      {/* Key */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        <circle cx="50" cy="100" r="22" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2" />
        <rect x="68" y="96" width="40" height="8" rx="2" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2" />
        <rect x="96" y="88" width="8" height="8" rx="1" fill="#0A0A0A" />
        <rect x="106" y="88" width="6" height="8" rx="1" fill="#0A0A0A" />
      </motion.g>

      {/* Shield */}
      <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: "spring" }}
        style={{ transformOrigin: "200px 100px" }}>
        <path d="M200,68 L232,80 L232,110 Q232,132 200,144 Q168,132 168,110 L168,80 Z"
          fill="#FF5A36" stroke="#0A0A0A" strokeWidth="2" />
        <text x="200" y="112" textAnchor="middle" fontSize="22" fill="#FAF8F3">✓</text>
      </motion.g>

      {/* Locked models */}
      {[40, 100, 160].map((y, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.1 }}>
          <rect x="300" y={y} width="80" height="28" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
          <text x="340" y={y + 19} textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">
            {["GPT-4o", "Claude", "Gemini"][i]}
          </text>
        </motion.g>
      ))}

      {/* Lines */}
      <motion.line x1="110" y1="100" x2="166" y2="100"
        stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowAC)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.25, duration: 0.3 }} />
      {[54, 114, 174].map((y, i) => (
        <motion.line key={i} x1="234" y1="100" x2="298" y2={y}
          stroke="#0A0A0A" strokeWidth="1.5" markerEnd="url(#arrowAC)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.65 + i * 0.08, duration: 0.25 }} />
      ))}
      <defs>
        <marker id="arrowAC" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function GuardrailsSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      {/* Payload in */}
      <motion.rect x="10" y="80" width="80" height="40" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
      <motion.text x="50" y="105" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>Payload</motion.text>

      {/* Shield wall */}
      <motion.path d="M170,60 L210,72 L210,128 Q210,152 190,160 Q170,152 170,128 L170,72 Z"
        fill="#FF5A36" stroke="#0A0A0A" strokeWidth="2"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        transition={{ delay: 0.35, type: "spring", stiffness: 150 }}
        style={{ transformOrigin: "190px 110px" }} />
      <motion.text x="190" y="115" textAnchor="middle" fontSize="18" fill="#FAF8F3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>🛡</motion.text>

      {/* PII tags being blocked */}
      {[55, 80, 105].map((y, i) => (
        <motion.g key={i}
          initial={{ x: 0, opacity: 1 }} animate={{ x: -30, opacity: 0 }}
          transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}>
          <rect x="100" y={y} width="60" height="16" rx="3" fill="#fca5a5" stroke="#0A0A0A" strokeWidth="1.5" />
          <text x="130" y={y + 11} textAnchor="middle" fontSize="8" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">
            {["SSN", "Email", "PHI"][i]}
          </text>
        </motion.g>
      ))}

      {/* Clean output */}
      <motion.rect x="300" y="80" width="80" height="40" rx="4" fill="#4ade80" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />
      <motion.text x="340" y="100" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>Clean</motion.text>
      <motion.text x="340" y="115" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>Output ✓</motion.text>

      {/* Arrows */}
      <motion.line x1="90" y1="100" x2="168" y2="100"
        stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowGuard)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.25 }} />
      <motion.line x1="212" y1="100" x2="298" y2="100"
        stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowGuard)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.85, duration: 0.25 }} />
      <defs>
        <marker id="arrowGuard" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function McpSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden>
      {/* LLM box */}
      <motion.rect x="140" y="80" width="120" height="60" rx="4" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
      <motion.text x="200" y="108" textAnchor="middle" fontSize="11" fontFamily="var(--font-jetbrains)" fill="#F5C518"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>InferGate</motion.text>
      <motion.text x="200" y="125" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#FAF8F3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>MCP Gateway</motion.text>

      {/* Tool nodes */}
      {[
        { x: 10, y: 30, label: "web_search" },
        { x: 10, y: 90, label: "code_exec" },
        { x: 10, y: 150, label: "database" },
        { x: 320, y: 30, label: "GPT-4o" },
        { x: 320, y: 90, label: "Claude" },
        { x: 320, y: 150, label: "Gemini" },
      ].map(({ x, y, label }, i) => (
        <motion.g key={label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.08 }}>
          <rect x={x} y={y} width="90" height="28" rx="4"
            fill={i < 3 ? "#F5C518" : "#FAF8F3"} stroke="#0A0A0A" strokeWidth="2" />
          <text x={x + 45} y={y + 19} textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">{label}</text>
        </motion.g>
      ))}

      {/* Loop arrows */}
      {[44, 104, 164].map((y, i) => (
        <React.Fragment key={i}>
          <motion.line x1="100" y1={y} x2="138" y2={y <= 100 ? 100 : 120}
            stroke="#FF5A36" strokeWidth="1.5" markerEnd="url(#arrowMcp)"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }} />
          <motion.line x1="262" y1={y <= 100 ? 100 : 120} x2="318" y2={y}
            stroke="#0A0A0A" strokeWidth="1.5" markerEnd="url(#arrowMcp)"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.75 + i * 0.1, duration: 0.3 }} />
        </React.Fragment>
      ))}
      <defs>
        <marker id="arrowMcp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function LoadBalancingSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      {/* Inbound */}
      <motion.rect x="10" y="80" width="70" height="40" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
      <motion.text x="45" y="105" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>Traffic</motion.text>

      {/* LB node */}
      <motion.circle cx="170" cy="100" r="28" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} />
      <motion.text x="170" y="97" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Load</motion.text>
      <motion.text x="170" y="110" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Balancer</motion.text>

      {/* Endpoints */}
      {[
        { y: 28, label: "Node A", w: 80 },
        { y: 86, label: "Node B", w: 65 },
        { y: 144, label: "Node C", w: 50 },
      ].map(({ y, label, w }, i) => (
        <motion.g key={label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 + i * 0.1 }}>
          <rect x="300" y={y} width="88" height="28" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
          <rect x="300" y={y} width={w} height="28" rx="4" fill="#4ade80" stroke="#0A0A0A" strokeWidth="0" />
          <text x="344" y={y + 19} textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">{label}</text>
        </motion.g>
      ))}

      {/* Lines */}
      <motion.line x1="80" y1="100" x2="140" y2="100"
        stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowLB)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.25 }} />
      {[42, 100, 158].map((y, i) => (
        <motion.line key={i} x1="198" y1="100" x2="298" y2={y}
          stroke="#0A0A0A" strokeWidth="1.5" markerEnd="url(#arrowLB)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }} />
      ))}
      <defs>
        <marker id="arrowLB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function ClusteringSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden>
      {/* LB at top */}
      <motion.rect x="150" y="10" width="100" height="36" rx="4" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
      <motion.text x="200" y="33" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#F5C518"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Load Balancer</motion.text>

      {/* Gateway nodes */}
      {[60, 180, 300].map((x, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.1 }}>
          <rect x={x} y="80" width="80" height="50" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
          <text x={x + 40} y="103" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">Gateway</text>
          <text x={x + 40} y="119" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">Node {i + 1}</text>
        </motion.g>
      ))}

      {/* Shared backend */}
      <motion.rect x="120" y="168" width="160" height="40" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
      <motion.text x="200" y="185" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>Shared Config Backend</motion.text>
      <motion.text x="200" y="200" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>Redis / PostgreSQL</motion.text>

      {/* LB → nodes */}
      {[100, 220, 340].map((x, i) => (
        <motion.line key={i} x1="200" y1="46" x2={x} y2={78}
          stroke="#0A0A0A" strokeWidth="1.5" markerEnd="url(#arrowCluster)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.28 + i * 0.08, duration: 0.25 }} />
      ))}
      {/* nodes → backend */}
      {[100, 220, 340].map((x, i) => (
        <motion.line key={i} x1={x} y1="132" x2="200" y2="166"
          stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arrowCluster)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.65 + i * 0.08, duration: 0.25 }} />
      ))}
      <defs>
        <marker id="arrowCluster" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function AuditSVG() {
  const events = [
    { label: "request.completed", color: "#4ade80" },
    { label: "key.created", color: "#F5C518" },
    { label: "guardrail.triggered", color: "#FF5A36" },
    { label: "config.updated", color: "#F5C518" },
    { label: "budget.exceeded", color: "#FF5A36" },
  ];
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden>
      {/* Timeline line */}
      <motion.line x1="60" y1="20" x2="60" y2="200"
        stroke="#0A0A0A" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />

      {events.map(({ label, color }, i) => (
        <motion.g key={label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.15 }}>
          <circle cx="60" cy={30 + i * 38} r="8" fill={color} stroke="#0A0A0A" strokeWidth="2" />
          <rect x="80" y={18 + i * 38} width="290" height="24" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" />
          <text x="94" y={34 + i * 38} fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">{label}</text>
          <text x="358" y={34 + i * 38} textAnchor="end" fontSize="8" fontFamily="var(--font-jetbrains)" fill="#666">✓</text>
        </motion.g>
      ))}
    </svg>
  );
}

function VaultSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden>
      {/* App config (no secrets) */}
      <motion.rect x="10" y="75" width="80" height="50" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
      <motion.text x="50" y="98" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Config</motion.text>
      <motion.text x="50" y="113" textAnchor="middle" fontSize="8" fontFamily="var(--font-jetbrains)" fill="#888"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>No secrets</motion.text>

      {/* Vault */}
      <motion.rect x="160" y="60" width="80" height="80" rx="4" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.35, type: "spring" }}
        style={{ transformOrigin: "200px 100px" }} />
      <motion.text x="200" y="97" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#F5C518"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>HashiCorp</motion.text>
      <motion.text x="200" y="113" textAnchor="middle" fontSize="10" fontFamily="var(--font-jetbrains)" fill="#FAF8F3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>Vault</motion.text>

      {/* Providers */}
      {[
        { y: 30, label: "OpenAI Key" },
        { y: 85, label: "Anthropic Key" },
        { y: 140, label: "Gemini Key" },
      ].map(({ y, label }, i) => (
        <motion.g key={label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.1 }}>
          <rect x="300" y={y} width="90" height="28" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2" />
          <text x="345" y={y + 19} textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains)" fill="#0A0A0A">{label}</text>
        </motion.g>
      ))}

      {/* Arrows */}
      <motion.line x1="90" y1="100" x2="158" y2="100"
        stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowVault)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.25, duration: 0.25 }} />
      {[44, 99, 154].map((y, i) => (
        <motion.line key={i} x1="242" y1="100" x2="298" y2={y}
          stroke="#0A0A0A" strokeWidth="1.5" markerEnd="url(#arrowVault)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.65 + i * 0.1, duration: 0.25 }} />
      ))}
      <defs>
        <marker id="arrowVault" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

function PluginsSVG() {
  const stages = ["Auth", "Rate\nLimit", "BeforeHook", "Provider", "AfterHook", "Log"];
  return (
    <svg viewBox="0 0 440 140" className="w-full h-full" aria-hidden>
      {stages.map((label, i) => {
        const x = 10 + i * 70;
        const isHook = label.includes("Hook");
        return (
          <motion.g key={label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }}>
            <rect x={x} y="50" width="60" height="40" rx="4"
              fill={isHook ? "#FF5A36" : "#FAF8F3"} stroke="#0A0A0A" strokeWidth="2" />
            {label.split("\n").map((line, j) => (
              <text key={j} x={x + 30} y={isHook ? 67 + j * 14 : 75} textAnchor="middle"
                fontSize="9" fontFamily="var(--font-jetbrains)"
                fill={isHook ? "#FAF8F3" : "#0A0A0A"}>{line}</text>
            ))}
            {i < stages.length - 1 && (
              <motion.line x1={x + 62} y1="70" x2={x + 68} y2="70"
                stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrowPlugin)"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.15 + i * 0.1, duration: 0.2 }} />
            )}
          </motion.g>
        );
      })}
      <defs>
        <marker id="arrowPlugin" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0A0A0A" />
        </marker>
      </defs>
    </svg>
  );
}

const SVG_MAP: Record<string, React.ComponentType> = {
  routing: RoutingSVG,
  fallback: FallbackSVG,
  caching: CachingSVG,
  observability: ObservabilitySVG,
  governance: GovernanceSVG,
  "access-control": AccessControlSVG,
  guardrails: GuardrailsSVG,
  mcp: McpSVG,
  "load-balancing": LoadBalancingSVG,
  clustering: ClusteringSVG,
  audit: AuditSVG,
  vault: VaultSVG,
  plugins: PluginsSVG,
};

// ---------------------------------------------------------------------------
// FeatureContent
// ---------------------------------------------------------------------------
import React from "react";

export function FeatureContent({ slug }: { slug: string }) {
  const data = FEATURES_DATA[slug];
  if (!data) return null;

  const Icon = data.icon;
  const DiagramSVG = SVG_MAP[data.svgType];

  return (
    <main style={{ background: "var(--nb-bg, #FAF8F3)", minHeight: "100vh" }}>
      {/* ── Breadcrumb ── */}
      <div className="container" style={{ paddingTop: "1.5rem", paddingBottom: "0" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", fontFamily: "var(--font-jetbrains)", color: "#666" }}>
          <Link href="/" style={{ color: "#666", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/features" style={{ color: "#666", textDecoration: "none" }}>Features</Link>
          <span>/</span>
          <span style={{ color: "#0A0A0A", fontWeight: 500 }}>{data.headline.replace(/\.$/, "")}</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="section" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            {/* Left: text */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span
                  className="feature-icon"
                  style={{ background: data.accentColor, boxShadow: "4px 4px 0px #0A0A0A", border: "2px solid #0A0A0A", borderRadius: "4px", padding: "0.5rem", display: "inline-flex" }}
                >
                  <Icon size={22} strokeWidth={2} />
                </span>
                <span className="eyebrow">{data.eyebrow}</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                  color: "#0A0A0A",
                  marginBottom: "1.25rem",
                  fontWeight: 700,
                }}
              >
                {data.headline}
              </h1>

              <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "#3a3a3a", marginBottom: "2rem", maxWidth: "52ch" }}>
                {data.subhead}
              </p>

              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">
                  {data.ctaText ?? "Book a demo"}
                </Link>
                <Link href="/docs" className="btn-secondary">
                  Read the docs
                </Link>
              </div>
            </motion.div>

            {/* Right: SVG diagram */}
            <motion.div
              className="nb-card"
              style={{
                background: "#FAF8F3",
                border: "2px solid #0A0A0A",
                borderRadius: "4px",
                boxShadow: "6px 6px 0px #0A0A0A",
                padding: "2rem",
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            >
              {DiagramSVG ? <DiagramSVG /> : (
                <div style={{ color: "#888", fontFamily: "var(--font-jetbrains)", fontSize: "0.875rem" }}>Diagram</div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="section section--surface">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            <p className="section-label" style={{ marginBottom: "0.5rem" }}>What&rsquo;s included</p>
            <h2 style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#0A0A0A", marginBottom: "2.5rem" }}>
              Every capability, production-ready.
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: data.features.length === 4 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
          >
            {data.features.map((f, i) => (
              <motion.div
                key={f.title}
                className="nb-card"
                style={{
                  border: "2px solid #0A0A0A",
                  borderRadius: "4px",
                  boxShadow: "4px 4px 0px #0A0A0A",
                  background: "#FAF8F3",
                  padding: "1.5rem",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <div
                  style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: data.accentColor, border: "2px solid #0A0A0A",
                    marginBottom: "0.875rem",
                  }}
                />
                <h3 style={{ fontFamily: "var(--font-bricolage)", fontSize: "1rem", fontWeight: 700, color: "#0A0A0A", marginBottom: "0.5rem" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "#444" }}>{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Code Snippet ── */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            <p className="section-label" style={{ marginBottom: "0.5rem" }}>Configuration</p>
            <h2 style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#0A0A0A", marginBottom: "2rem" }}>
              Drop it into your stack.
            </h2>
          </motion.div>

          <motion.div
            className="code-block"
            style={{ maxWidth: "860px" }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="code-block__bar">
              <span style={{ display: "flex", gap: "6px" }}>
                {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                  <span key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c, border: "1px solid rgba(0,0,0,0.2)" }} />
                ))}
              </span>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-jetbrains)", color: "#888" }}>
                {data.codeSnippet.lang === "go" ? "plugin.go" : data.codeSnippet.lang === "bash" ? "terminal" : `infergate.${data.codeSnippet.lang}`}
              </span>
            </div>
            <div className="code-block__body">
              <pre style={{ margin: 0, overflowX: "auto" }}>
                <code style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.8125rem", lineHeight: 1.7, color: "#e2e8f0" }}>
                  {data.codeSnippet.code}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section section--surface">
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "#0A0A0A", marginBottom: "1rem" }}>
              Ready to ship?
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#444", marginBottom: "2rem" }}>
              InferGate runs in Docker or Kubernetes. You can be in production in under 30 minutes.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/docs/quickstart" className="btn-primary">
                Quickstart guide
              </Link>
              <Link href="/contact" className="btn-secondary">
                {data.ctaText ?? "Talk to sales"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
