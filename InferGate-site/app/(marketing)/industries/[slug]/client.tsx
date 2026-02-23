"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowLeft,
  AlertCircle,
  ShieldCheck,
  Lock,
  FileText,
  Key,
  Users,
  Eye,
  Database,
  Server,
  HardDrive,
  Activity,
  Zap,
  GitBranch,
  Package,
  Cpu,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Capability {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
}

interface IndustryData {
  metaTitle: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  complianceFrameworks: string[];
  whoForTitle: string;
  whoForBody: string;
  pain: string;
  capabilities: Capability[];
  note?: string;
}

// ─── SVG Illustrations ───────────────────────────────────────────────────────

function FinancialServicesSVG() {
  const circuitPaths = [
    "M 48 144 H 126 V 84 H 178","M 48 144 H 126 V 144 H 178","M 48 144 H 126 V 204 H 178",
    "M 302 144 H 362 V 64 H 416","M 302 144 H 362 V 124 H 416","M 302 144 H 362 V 184 H 416",
    "M 302 144 H 362 V 224 H 416","M 240 64 V 18","M 240 232 V 274 H 60 V 232",
  ];
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#0A0A0A" rx="4" />
      {circuitPaths.map((d, i) => (<motion.path key={i} d={d} stroke="#F5C518" strokeWidth="1" opacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.25 + i * 0.09, duration: 0.7 }} />))}
      {[[126,84],[126,144],[126,204],[362,64],[362,124],[362,184],[362,224]].map(([cx,cy],i) => (<motion.circle key={i} cx={cx} cy={cy} r="3" fill="#F5C518" opacity="0.5" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.6 + i * 0.06 }} />))}
      <motion.path d="M 240 62 L 302 90 L 302 164 Q 302 206 240 228 Q 178 206 178 164 L 178 90 Z" fill="rgba(245,197,24,0.13)" stroke="#F5C518" strokeWidth="2.5" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.22, duration: 0.55, type: "spring", stiffness: 180 }} style={{ transformOrigin: "240px 145px" }} />
      <motion.path d="M 226 136 V 127 Q 226 113 240 113 Q 254 113 254 127 V 136" stroke="#F5C518" strokeWidth="2.5" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.68, duration: 0.4 }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.82 }}>
        <rect x="222" y="136" width="36" height="28" rx="3" fill="#F5C518" stroke="#0A0A0A" strokeWidth="1.5" />
        <circle cx="240" cy="149" r="4.5" fill="#0A0A0A" />
        <rect x="238" y="149" width="4" height="7" rx="1.5" fill="#0A0A0A" />
      </motion.g>
      <motion.text x="240" y="198" textAnchor="middle" fill="rgba(245,197,24,0.7)" fontSize="8" fontWeight="700" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}>Financial Grade</motion.text>
      {[{ y: 84, label: "AES-256" }, { y: 144, label: "TLS 1.2+" }, { y: 204, label: "SCIM 2.0" }].map((item, i) => (<motion.g key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.42 + i * 0.1 }}><rect x="10" y={item.y - 14} width="88" height="26" rx="3" fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.32)" strokeWidth="1" /><text x="54" y={item.y + 4} textAnchor="middle" fill="#F5C518" fontSize="10" fontWeight="700" fontFamily="monospace">{item.label}</text></motion.g>))}
      {[{ y: 64, label: "SOX logs" }, { y: 124, label: "MiFID II" }, { y: 184, label: "RBAC" }, { y: 224, label: "Vault" }].map((item, i) => (<motion.g key={i} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.48 + i * 0.1 }}><rect x="382" y={item.y - 14} width="88" height="26" rx="3" fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.32)" strokeWidth="1" /><text x="426" y={item.y + 4} textAnchor="middle" fill="#F5C518" fontSize="10" fontWeight="700" fontFamily="monospace">{item.label}</text></motion.g>))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
        <rect x="152" y="250" width="176" height="26" rx="3" fill="#F5C518" />
        <text x="240" y="267" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontWeight="800" fontFamily="sans-serif">FINANCIAL-GRADE COMPLIANCE</text>
      </motion.g>
    </svg>
  );
}

function HealthcareSVG() {
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#F0EDE4" rx="4" />
      <motion.rect x="20" y="24" width="440" height="218" rx="6" fill="rgba(45,106,79,0.06)" stroke="#2D6A4F" strokeWidth="2" strokeDasharray="10 6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} />
      <motion.text x="240" y="16" textAnchor="middle" fill="#2D6A4F" fontSize="9" fontWeight="800" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>HIPAA-ALIGNED VPC PERIMETER</motion.text>
      <motion.g initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.38, duration: 0.5, type: "spring", stiffness: 180 }} style={{ transformOrigin: "240px 130px" }}>
        <rect x="174" y="96" width="132" height="68" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2.5" />
        <text x="240" y="122" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontWeight="800" fontFamily="sans-serif">InferGate</text>
        <text x="240" y="138" textAnchor="middle" fill="rgba(10,10,10,0.6)" fontSize="8.5" fontFamily="monospace">PII/PHI redaction</text>
        <text x="240" y="153" textAnchor="middle" fill="rgba(10,10,10,0.6)" fontSize="8.5" fontFamily="monospace">audit trail · TLS 1.2+</text>
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <rect x="230" y="48" width="20" height="32" rx="2" fill="#2D6A4F" opacity="0.8" />
        <rect x="222" y="56" width="36" height="16" rx="2" fill="#2D6A4F" opacity="0.8" />
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
        <rect x="34" y="90" width="120" height="52" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="94" y="112" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontWeight="700" fontFamily="sans-serif">EHR / EMR</text>
        <text x="94" y="127" textAnchor="middle" fill="#7A746A" fontSize="8.5" fontFamily="monospace">clinical workflows</text>
        <text x="94" y="138" textAnchor="middle" fill="#7A746A" fontSize="8.5" fontFamily="monospace">PHI handled here</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.58, duration: 0.4 }}>
        <rect x="326" y="90" width="120" height="52" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="386" y="112" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontWeight="700" fontFamily="sans-serif">Ollama / vLLM</text>
        <text x="386" y="127" textAnchor="middle" fill="#7A746A" fontSize="8.5" fontFamily="monospace">on-prem model</text>
        <text x="386" y="138" textAnchor="middle" fill="#7A746A" fontSize="8.5" fontFamily="monospace">no external calls</text>
      </motion.g>
      <motion.path d="M 154 116 L 174 130" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.38 }} />
      <motion.path d="M 306 130 L 326 116" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.78, duration: 0.38 }} />
      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.4 }}>
        <rect x="174" y="186" width="132" height="40" rx="4" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="240" y="202" textAnchor="middle" fill="#F5C518" fontSize="9.5" fontWeight="800" fontFamily="monospace">HashiCorp Vault</text>
        <text x="240" y="216" textAnchor="middle" fill="rgba(250,248,243,0.5)" fontSize="8" fontFamily="monospace">API key rotation</text>
      </motion.g>
      <motion.path d="M 240 164 L 240 186" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.82, duration: 0.3 }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
        <circle cx="464" cy="130" r="11" stroke="#FF5A36" strokeWidth="1.5" fill="rgba(255,90,54,0.08)" />
        <line x1="458" y1="124" x2="470" y2="136" stroke="#FF5A36" strokeWidth="2.5" />
        <line x1="470" y1="124" x2="458" y2="136" stroke="#FF5A36" strokeWidth="2.5" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <rect x="94" y="254" width="292" height="26" rx="3" fill="#2D6A4F" />
        <text x="240" y="271" textAnchor="middle" fill="#FAF8F3" fontSize="10" fontWeight="800" fontFamily="sans-serif">PHI NEVER LEAVES YOUR PERIMETER</text>
      </motion.g>
    </svg>
  );
}

function TechnologySVG() {
  const providers = [{ y: 50, label: "GPT-5 (20%)", w: 22 }, { y: 100, label: "Claude (60%)", w: 67 }, { y: 150, label: "Mistral (20%)", w: 22 }];
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#0A0A0A" rx="4" />
      <path d="M 80 200 A 160 160 0 0 1 400 200" stroke="#1e1e1e" strokeWidth="26" strokeLinecap="round" fill="none" />
      <motion.path d="M 80 200 A 160 160 0 0 1 400 200" stroke="#F5C518" strokeWidth="24" strokeLinecap="round" fill="none" strokeDasharray="504" initial={{ strokeDashoffset: 504 }} animate={{ strokeDashoffset: 0 }} transition={{ delay: 0.45, duration: 1.5, ease: [0.16, 1, 0.3, 1] }} />
      {Array.from({ length: 11 }).map((_, i) => { const angle = -180 + i * 18, rad = (angle * Math.PI) / 180, cx = 240, cy = 200, r = 152, x1 = cx + r * Math.cos(rad), y1 = cy + r * Math.sin(rad), x2 = cx + (r - 14) * Math.cos(rad), y2 = cy + (r - 14) * Math.sin(rad); return (<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i === 10 ? "#FF5A36" : "rgba(255,255,255,0.2)"} strokeWidth={i === 10 ? "2.5" : "1.5"} />); })}
      <motion.g style={{ transformOrigin: "240px 200px" }} initial={{ rotate: -180 }} animate={{ rotate: 0 }} transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}>
        <line x1="240" y1="200" x2="390" y2="200" stroke="#FF5A36" strokeWidth="3" strokeLinecap="round" />
      </motion.g>
      <circle cx="240" cy="200" r="9" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2.5" />
      <text x="75" y="222" textAnchor="middle" fill="rgba(250,248,243,0.3)" fontSize="9" fontFamily="monospace">0</text>
      <text x="405" y="222" textAnchor="middle" fill="#FF5A36" fontSize="9" fontFamily="monospace">MAX</text>
      <motion.text x="240" y="160" textAnchor="middle" fill="#FAF8F3" fontSize="38" fontWeight="800" fontFamily="sans-serif" letterSpacing="-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>10,400</motion.text>
      <motion.text x="240" y="182" textAnchor="middle" fill="rgba(250,248,243,0.4)" fontSize="10.5" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>req/s · single node</motion.text>
      <motion.g initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.4 }}>
        <rect x="330" y="28" width="138" height="148" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="399" y="48" textAnchor="middle" fill="rgba(250,248,243,0.5)" fontSize="8.5" fontFamily="monospace">CEL A/B routing</text>
        {providers.map((p, i) => (
          <g key={i}>
            <text x="344" y={p.y + 24} fill="rgba(250,248,243,0.75)" fontSize="9" fontFamily="monospace">{p.label}</text>
            <rect x="344" y={p.y + 28} width="112" height="10" rx="2" fill="rgba(255,255,255,0.08)" />
            <motion.rect x="344" y={p.y + 28} width={p.w} height="10" rx="2" fill="#F5C518" initial={{ width: 0 }} animate={{ width: p.w }} transition={{ delay: 0.9 + i * 0.1, duration: 0.6 }} />
          </g>
        ))}
        <text x="344" y="162" fill="rgba(250,248,243,0.35)" fontSize="7.5" fontFamily="monospace">hot-reload · no deploys</text>
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <rect x="12" y="28" width="130" height="60" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="77" y="50" textAnchor="middle" fill="rgba(250,248,243,0.45)" fontSize="8.5" fontFamily="monospace">semantic cache</text>
        <text x="77" y="74" textAnchor="middle" fill="#F5C518" fontSize="22" fontWeight="800" fontFamily="sans-serif">30–65%</text>
        <text x="77" y="86" textAnchor="middle" fill="rgba(250,248,243,0.35)" fontSize="7.5" fontFamily="monospace">cost reduction</text>
      </motion.g>
      {[{ x: 18, label: "P50 latency", value: "0.3ms" }, { x: 170, label: "Cold start", value: "<2s" }, { x: 322, label: "Memory", value: "<50MB" }].map((stat, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.55 + i * 0.08 }}>
          <rect x={stat.x} y="246" width="128" height="38" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x={stat.x + 64} y="260" textAnchor="middle" fill="rgba(250,248,243,0.4)" fontSize="8.5" fontFamily="monospace">{stat.label}</text>
          <text x={stat.x + 64} y="276" textAnchor="middle" fill="#F5C518" fontSize="14" fontWeight="800" fontFamily="sans-serif">{stat.value}</text>
        </motion.g>
      ))}
    </svg>
  );
}

function GovernmentSVG() {
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#F0EDE4" rx="4" />
      <defs><pattern id="gov-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="0" cy="0" r="1" fill="#C8C3B5" /></pattern></defs>
      <rect width="480" height="290" fill="url(#gov-dots)" />
      <motion.rect x="20" y="24" width="440" height="220" rx="6" fill="rgba(10,10,10,0.04)" stroke="#0A0A0A" strokeWidth="2" strokeDasharray="10 6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} />
      <motion.text x="240" y="16" textAnchor="middle" fill="#4A4540" fontSize="9.5" fontWeight="700" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>SOVEREIGN AIR-GAPPED PERIMETER</motion.text>
      <motion.g initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.45 }}>
        {[156, 174, 192, 258, 276, 294].map((x, i) => (<rect key={i} x={x} y="54" width="10" height="48" fill="#0A0A0A" opacity="0.7" />))}
        <rect x="144" y="46" width="162" height="12" rx="2" fill="#0A0A0A" opacity="0.85" />
        <polygon points="153,46 240,20 327,46" fill="#F5C518" stroke="#0A0A0A" strokeWidth="1.5" />
        <rect x="140" y="102" width="170" height="8" fill="#0A0A0A" opacity="0.7" />
        <rect x="222" y="80" width="26" height="30" rx="1" fill="#F5C518" stroke="#0A0A0A" strokeWidth="1.5" />
      </motion.g>
      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.45 }}>
        <rect x="174" y="128" width="132" height="56" rx="4" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
        <text x="240" y="151" textAnchor="middle" fill="#F5C518" fontSize="11" fontWeight="800" fontFamily="sans-serif">InferGate</text>
        <text x="240" y="165" textAnchor="middle" fill="rgba(250,248,243,0.5)" fontSize="8.5" fontFamily="monospace">air-gapped · RBAC · audit</text>
        <text x="240" y="176" textAnchor="middle" fill="rgba(250,248,243,0.5)" fontSize="8.5" fontFamily="monospace">SCIM 2.0 · Vault</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.4 }}>
        <rect x="36" y="150" width="120" height="44" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="96" y="169" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontWeight="700" fontFamily="sans-serif">On-prem LLM</text>
        <text x="96" y="183" textAnchor="middle" fill="#7A746A" fontSize="8" fontFamily="monospace">Ollama / vLLM</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.68, duration: 0.4 }}>
        <rect x="324" y="150" width="120" height="44" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="384" y="169" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontWeight="700" fontFamily="sans-serif">SIEM / Audit</text>
        <text x="384" y="183" textAnchor="middle" fill="#7A746A" fontSize="8" fontFamily="monospace">immutable logs</text>
      </motion.g>
      <motion.path d="M 156 172 L 174 172" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.78, duration: 0.3 }} />
      <motion.path d="M 306 172 L 324 172" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.84, duration: 0.3 }} />
      <motion.path d="M 240 128 L 240 110" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.72, duration: 0.3 }} />
      <line x1="464" y1="50" x2="464" y2="230" stroke="#C8C3B5" strokeWidth="1.5" strokeDasharray="5 4" />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
        <circle cx="464" cy="140" r="12" stroke="#FF5A36" strokeWidth="1.5" fill="rgba(255,90,54,0.08)" />
        <line x1="458" y1="134" x2="470" y2="146" stroke="#FF5A36" strokeWidth="2.5" />
        <line x1="470" y1="134" x2="458" y2="146" stroke="#FF5A36" strokeWidth="2.5" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <rect x="40" y="212" width="400" height="26" rx="3" fill="#0A0A0A" />
        <text x="240" y="229" textAnchor="middle" fill="#F5C518" fontSize="10" fontWeight="800" fontFamily="monospace">FEDRAMP-POSTURE ALIGNED · DATA RESIDENCY GUARANTEED</text>
      </motion.g>
    </svg>
  );
}

// ─── Illustrations map ────────────────────────────────────────────────────────

const ILLUSTRATIONS: Record<string, React.ComponentType> = {
  "financial-services": FinancialServicesSVG,
  healthcare: HealthcareSVG,
  technology: TechnologySVG,
  government: GovernmentSVG,
};

// ─── Industries data ──────────────────────────────────────────────────────────

const INDUSTRIES_DATA: Record<string, IndustryData> = {
  "financial-services": {
    metaTitle: "Financial Services",
    eyebrow: "Industries · Financial Services",
    headline: "AI infrastructure built for financial-grade compliance.",
    subhead:
      "From algorithmic trading desks to retail banking AI assistants, financial institutions need AI infrastructure that operates within their existing compliance frameworks — not around them.",
    complianceFrameworks: ["SOX", "MiFID II", "PCI-DSS aligned", "AES-256", "TLS 1.2+"],
    whoForTitle: "Who is this for?",
    whoForBody:
      "Platform engineers, CISOs, and compliance officers at banks, asset managers, broker-dealers, insurance companies, and fintech firms where data security and audit requirements are non-negotiable. You need to deploy AI at scale without creating new regulatory surface area.",
    pain:
      "Financial firms face strict controls on where data goes and who can access it. Routing trading or customer data through third-party AI APIs introduces regulatory risk, data residency complications, and audit gaps that compliance teams cannot accept — no matter how much the business wants the capability.",
    capabilities: [
      { icon: Eye, title: "PII guardrails for financial data", description: "Detect and redact account numbers, SSNs, IBAN codes, and financial identifiers before requests reach any LLM. Configurable redaction policies per route and team." },
      { icon: FileText, title: "SOX / MiFID II audit logs", description: "Every request logged with timestamp, user identity, model, token count, masked content, and response code. Structured JSON export compatible with compliance review workflows." },
      { icon: Users, title: "RBAC per trading desk or team", description: "Granular permissions by trading desk, business unit, or regional team. Role assignments synced from your Active Directory or LDAP via SCIM 2.0 provisioning." },
      { icon: Database, title: "Budget controls per team", description: "Set AI spend limits per desk, strategy, or cost centre. Real-time enforcement prevents bill surprises and provides the cost allocation data finance teams need for chargeback." },
      { icon: ShieldCheck, title: "Air-gapped VPC deployment", description: "No traffic leaves your private network without explicit routing configuration. Meets regulatory requirements for data locality, network isolation, and third-party vendor risk." },
      { icon: Key, title: "HashiCorp Vault for key management", description: "Rotate provider API keys dynamically through Vault. No long-lived credentials in configuration files or environment variables. Full key lifecycle audit trail." },
    ],
  },

  healthcare: {
    metaTitle: "Healthcare",
    eyebrow: "Industries · Healthcare",
    headline: "Secure AI processing for HIPAA-aligned workflows.",
    subhead:
      "Patient data is among the most sensitive information an organization can handle. InferGate enables healthcare organizations to deploy AI capabilities while ensuring PHI never leaves their controlled infrastructure.",
    complianceFrameworks: ["HIPAA-aligned", "PHI redaction", "AES-256", "TLS 1.2+", "VPC-only"],
    whoForTitle: "Who is this for?",
    whoForBody:
      "Health systems, hospital networks, digital health startups, healthcare SaaS vendors, and any organization that processes Protected Health Information and wants to leverage AI while maintaining HIPAA-aligned technical safeguards. Equally relevant to compliance officers, CTOs, and platform engineers in the healthcare space.",
    pain:
      "HIPAA requires that PHI be protected with appropriate technical safeguards at every point in its lifecycle. Routing patient data through commercial LLM APIs — even encrypted in transit — creates a data processing relationship with a third party that must be covered by a Business Associate Agreement. For many organizations, that risk is unacceptable.",
    note:
      "InferGate is not a covered entity and does not provide legal compliance advice. Organizations should engage qualified legal counsel when determining HIPAA applicability to their specific deployments.",
    capabilities: [
      { icon: ShieldCheck, title: "VPC-only deployment", description: "InferGate operates entirely within your HIPAA-aligned VPC. No PHI leaves your network perimeter. No outbound telemetry, no third-party data processors introduced." },
      { icon: Eye, title: "PII / PHI redaction", description: "Detect and redact protected health information before requests reach any model. Configurable entity patterns for patient names, MRNs, dates of birth, diagnosis codes, and more." },
      { icon: HardDrive, title: "On-premises model support", description: "Route sensitive clinical workloads to locally hosted Ollama or vLLM instances. Zero external data transmission for the most sensitive PHI-adjacent use cases." },
      { icon: FileText, title: "HIPAA-aligned audit trail", description: "Immutable, structured request logs with access timestamps, user identity, and content hashes. Supports HIPAA Security Rule documentation requirements for access controls and audit controls." },
      { icon: Lock, title: "TLS 1.2+ encryption", description: "All communication encrypted in transit with TLS 1.2 or higher. Configurable cipher suites to align with your organization's HIPAA Security Rule implementation requirements." },
      { icon: Key, title: "HashiCorp Vault integration", description: "Provider API keys stored and rotated via Vault dynamic secrets. No plaintext credentials in configuration files, container environment variables, or version control." },
    ],
  },

  technology: {
    metaTitle: "Technology",
    eyebrow: "Industries · Technology",
    headline: "High-throughput AI infrastructure for fast-moving product teams.",
    subhead:
      "Tech companies ship AI features fast and iterate constantly. InferGate gives product and platform engineering teams the throughput, flexibility, and cost controls to build AI-native products without running into infrastructure limits.",
    complianceFrameworks: ["10,400 req/s", "0.3ms P50", "30–65% cost reduction", "CEL routing"],
    whoForTitle: "Who is this for?",
    whoForBody:
      "Product engineers, platform teams, and engineering managers at SaaS companies, developer tools startups, AI-native products, and any technology company shipping customer-facing AI features. You care about latency, cost, and the ability to swap models without re-engineering your stack.",
    pain:
      "AI features built directly on provider SDKs are fragile. Model deprecations break production. Vendor bill spikes hit without warning. A/B testing models requires risky code deployments. And the Python proxy someone stood up to route traffic is now a single point of failure under real load.",
    capabilities: [
      { icon: Zap, title: "10,400 req/s throughput", description: "Scale AI features to production traffic without a dedicated infrastructure team. Zero-allocation Go middleware handles 10,400 req/s on a standard 4-core node under sustained load." },
      { icon: Database, title: "Semantic caching (30–65% cost reduction)", description: "Cache semantically equivalent requests, not just exact string matches. Typical product workloads see 30–65% reduction in LLM API spend with no change to response quality." },
      { icon: GitBranch, title: "CEL routing for A/B model testing", description: "Write routing rules in CEL: send 20% of traffic to GPT-5, 80% to Claude, measure, adjust — no code deploys, no releases, no downtime. Rules hot-reload in milliseconds." },
      { icon: Activity, title: "Hot-reload configuration", description: "Push new routing rules, model swaps, rate limits, and budget changes without restarting the gateway or affecting live traffic. Config updates take effect in under a second." },
      { icon: Package, title: "Plugin system for custom middleware", description: "Add custom request enrichment, authentication schemes, response transformation, or telemetry hooks in Go. Extend the gateway without forking or managing a separate proxy." },
      { icon: Cpu, title: "Drop-in SDK compatibility", description: "Works with every OpenAI-compatible SDK: LangChain, LlamaIndex, Vercel AI SDK, and your own REST clients. Change one URL and InferGate handles everything else." },
    ],
  },

  government: {
    metaTitle: "Government",
    eyebrow: "Industries · Government",
    headline: "Sovereign AI processing for public sector requirements.",
    subhead:
      "Government agencies cannot route sensitive data through commercial cloud AI APIs. InferGate is designed to operate with complete data sovereignty — air-gapped, on-premises, with the access controls and audit capabilities that public sector demands.",
    complianceFrameworks: ["Air-gapped", "FedRAMP posture-aligned", "SCIM 2.0", "RBAC", "AES-256"],
    whoForTitle: "Who is this for?",
    whoForBody:
      "Federal agencies, state and local government IT departments, defense contractors, and public sector technology teams responsible for deploying AI capabilities within strict data governance frameworks. You need AI infrastructure that meets data residency, sovereignty, and auditability requirements.",
    pain:
      "Government networks frequently operate under classified or CUI handling requirements that prohibit routing data through commercial cloud APIs. FedRAMP and agency-specific authorization requirements create barriers to adopting SaaS AI tooling — but the pressure to deploy AI capabilities continues to grow.",
    note:
      "InferGate is not FedRAMP authorized. Its architecture and security controls are designed to align with FedRAMP Moderate baselines to support agency authorization efforts. Agencies should conduct their own ATO process.",
    capabilities: [
      { icon: ShieldCheck, title: "Air-gapped deployment", description: "InferGate requires zero outbound network connections to operate. It starts, routes, caches, and logs entirely within your air-gapped environment — no internet access required." },
      { icon: HardDrive, title: "On-premises model support", description: "Process sensitive government data with locally hosted Ollama or vLLM instances. Same unified API and routing rules, zero external data transmission, full data residency control." },
      { icon: Users, title: "RBAC + SCIM for large-org provisioning", description: "Manage thousands of users across agencies, units, and classification tiers via SCIM 2.0 from your government identity provider. Granular role assignments per organizational unit." },
      { icon: FileText, title: "Full audit logging", description: "Every AI request logged with user identity, model, token count, masked content, and response code. Structured JSON export for SIEM ingestion and compliance documentation." },
      { icon: Lock, title: "FedRAMP-posture-aligned security", description: "AES-256 at rest, TLS 1.2+ in transit, HashiCorp Vault for secrets management, and SIEM-compatible audit logging — aligned with FedRAMP Moderate control baselines." },
      { icon: Database, title: "Data residency guarantees", description: "All request data, cached responses, and audit logs stored in your designated infrastructure. No InferGate telemetry, no required external storage, no data leaving sovereign boundary." },
    ],
  },
};

// ─── Page client component ────────────────────────────────────────────────────

export function IndustrySlugClient({ slug }: { slug: string }) {
  const data = INDUSTRIES_DATA[slug];

  if (!data) {
    notFound();
  }

  const Illustration = ILLUSTRATIONS[slug];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="section dot-grid" style={{ paddingTop: 128, paddingBottom: 80 }}>
        <div className="container container--narrow">
          <motion.div className="breadcrumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} style={{ marginBottom: 32 }}>
            <Link href="/industries" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--nb-ink-muted)", textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
              <ArrowLeft size={14} strokeWidth={2.5} /> Industries
            </Link>
            <span style={{ color: "var(--nb-border-light)" }}>/</span>
            <span style={{ color: "var(--nb-ink)", fontWeight: 700, fontSize: 13 }}>{data.metaTitle}</span>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
              <span className="eyebrow">{data.eyebrow}</span>
              <h1 style={{ fontSize: "clamp(30px, 4vw, 52px)", marginBottom: 20, lineHeight: 1.05, letterSpacing: "-0.04em" }}>{data.headline}</h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.78, marginBottom: 28 }}>{data.subhead}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {data.complianceFrameworks.map((fw) => (
                  <span key={fw} style={{ display: "inline-flex", alignItems: "center", padding: "4px 10px", background: "var(--nb-surface)", border: "1.5px solid var(--nb-border)", borderRadius: "var(--radius)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", fontFamily: "var(--font-jetbrains, monospace)", color: "var(--nb-ink)" }}>{fw}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">Talk to an engineer →</Link>
                <Link href="/book-demo" className="btn-secondary">See a demo</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} style={{ border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow-brutal-lg)" }}>
              {Illustration && <Illustration />}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pain point ───────────────────────────────────────── */}
      <section className="section section--invert" style={{ padding: "56px 24px" }}>
        <div className="container container--narrow">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "rgba(255,90,54,0.15)", border: "1.5px solid rgba(255,90,54,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
              <AlertCircle size={20} color="#FF5A36" strokeWidth={2.5} />
            </div>
            <div>
              <div className="section-label" style={{ color: "rgba(250,248,243,0.45)", marginBottom: 10 }}>The challenge</div>
              <p style={{ fontSize: 17, color: "rgba(250,248,243,0.8)", lineHeight: 1.78, maxWidth: 720 }}>{data.pain}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container container--narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="section-label">{data.whoForTitle}</div>
              <h2 style={{ fontSize: "clamp(22px, 2.8vw, 34px)", letterSpacing: "-0.035em", lineHeight: 1.1 }}>Built for your organization.</h2>
            </div>
            <p style={{ fontSize: 16, color: "var(--nb-ink-muted)", lineHeight: 1.85, paddingTop: 4 }}>{data.whoForBody}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Key capabilities ──────────────────────────────────── */}
      <section className="section">
        <div className="container container--narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} style={{ marginBottom: 48 }}>
            <div className="section-label">Capabilities</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", letterSpacing: "-0.035em", lineHeight: 1.1 }}>Built for {data.metaTitle}</h2>
          </motion.div>
          <div className="cards-3">
            {data.capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}>
                  <div className="nb-card" style={{ padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
                    <div className="feature-icon"><Icon size={18} strokeWidth={2.5} /></div>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.025em" }}>{cap.title}</h3>
                      <p style={{ fontSize: 13.5, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>{cap.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Deployment ───────────────────────────────────────── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container container--narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="section-label">Deployment</div>
              <h2 style={{ fontSize: "clamp(22px, 2.8vw, 34px)", marginBottom: 16, letterSpacing: "-0.035em", lineHeight: 1.1 }}>Your infrastructure. Your control.</h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.8, marginBottom: 24 }}>InferGate ships as a single Go binary under 50MB. Deploy it in your VPC via Kubernetes Helm chart, Docker Compose, or ECS task definition. No external dependencies required for operation.</p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 14 }}>Discuss your deployment →</Link>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, paddingTop: 4 }}>
              {["Air-gapped VPC deployment", "Kubernetes Helm chart (HPA + PDB)", "Docker + ECS deployment recipes", "HashiCorp Vault secrets integration", "SIEM-compatible audit log export", "SCIM 2.0 identity provisioning", "Local model support (Ollama / vLLM)", "AES-256 + TLS 1.2+ everywhere"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={16} color="var(--nb-green)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 14.5, color: "var(--nb-ink)", fontWeight: 600 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Legal note (optional) ─────────────────────────────── */}
      {data.note && (
        <section style={{ padding: "32px 24px", background: "var(--nb-elevated)" }}>
          <div className="container container--narrow">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "20px 22px", background: "var(--nb-bg)", border: "1.5px solid var(--nb-border-light)", borderRadius: "var(--radius)" }}>
              <AlertCircle size={16} color="var(--nb-ink-dim)" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontSize: 13, color: "var(--nb-ink-muted)", lineHeight: 1.75 }}>
                <strong style={{ color: "var(--nb-ink)", fontWeight: 700 }}>Note: </strong>{data.note}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section section--invert">
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} style={{ maxWidth: 600 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--nb-bg)", marginBottom: 16, letterSpacing: "-0.035em" }}>Ready to deploy in your environment?</h2>
            <p style={{ color: "rgba(250,248,243,0.6)", fontSize: 17, marginBottom: 36, lineHeight: 1.7 }}>Talk to an engineer about your specific infrastructure and compliance requirements. We&apos;ll walk through a proof-of-concept deployment in your environment.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact us →</Link>
              <Link href="/industries" className="btn-secondary"><ArrowLeft size={14} strokeWidth={2.5} /> All industries</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
