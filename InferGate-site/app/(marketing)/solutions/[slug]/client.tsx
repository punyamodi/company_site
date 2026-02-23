"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Cpu,
  GitBranch,
  RefreshCw,
  Package,
  Globe,
  Layers,
  BarChart3,
  Users,
  FileText,
  Key,
  Activity,
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Zap,
  Server,
  Bot,
  HardDrive,
  Terminal,
  DollarSign,
  AlertCircle,
  Settings,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Capability {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
}

interface SolutionData {
  metaTitle: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  whoForTitle: string;
  whoForBody: string;
  pain: string;
  capabilities: Capability[];
}

// ─── SVG Illustrations ───────────────────────────────────────────────────────

function PlatformEngineersSVG() {
  const providers = [
    { y: 44, label: "OpenAI" },
    { y: 94, label: "Anthropic" },
    { y: 144, label: "Bedrock" },
    { y: 194, label: "Cohere" },
    { y: 244, label: "+21 more" },
  ];
  const inputs = [
    { y: 80, label: "OpenAI SDK" },
    { y: 140, label: "LangChain" },
    { y: 200, label: "REST / cURL" },
  ];
  return (
    <svg
      viewBox="0 0 480 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 480, height: "auto" }}
      aria-hidden="true"
    >
      <rect width="480" height="290" fill="#F0EDE4" rx="4" />
      <defs>
        <pattern id="pg-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="0" cy="0" r="1" fill="#C8C3B5" />
        </pattern>
      </defs>
      <rect width="480" height="290" fill="url(#pg-dots)" />
      {inputs.map((inp, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}>
          <rect x="8" y={inp.y - 17} width="108" height="32" rx="4" fill="#0A0A0A" />
          <text x="62" y={inp.y + 4} textAnchor="middle" fill="#FAF8F3" fontSize="9.5" fontWeight="700" fontFamily="monospace">{inp.label}</text>
        </motion.g>
      ))}
      {inputs.map((inp, i) => (
        <motion.path key={i} d={`M 116 ${inp.y} L 174 145`} stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.35 + i * 0.09, duration: 0.55 }} />
      ))}
      <motion.g initial={{ opacity: 0, scale: 0.82 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.28, duration: 0.55, type: "spring", stiffness: 200 }} style={{ transformOrigin: "240px 145px" }}>
        <rect x="174" y="112" width="132" height="66" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2.5" />
        <text x="240" y="140" textAnchor="middle" fill="#0A0A0A" fontSize="13" fontWeight="800" fontFamily="sans-serif">InferGate</text>
        <text x="240" y="156" textAnchor="middle" fill="rgba(10,10,10,0.6)" fontSize="8.5" fontFamily="monospace">CEL routing · hot-reload</text>
        <text x="240" y="168" textAnchor="middle" fill="rgba(10,10,10,0.6)" fontSize="8.5" fontFamily="monospace">plugin system · Go SDK</text>
      </motion.g>
      {providers.map((p, i) => (
        <motion.path key={i} d={`M 306 145 L 360 ${p.y}`} stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.52 + i * 0.08, duration: 0.5 }} />
      ))}
      {providers.map((p, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.09, duration: 0.4 }}>
          <rect x="360" y={p.y - 17} width="110" height="32" rx="4" fill={i === 4 ? "#FF5A36" : "#FAF8F3"} stroke="#0A0A0A" strokeWidth="1.5" />
          <text x="415" y={p.y + 4} textAnchor="middle" fill={i === 4 ? "#FAF8F3" : "#0A0A0A"} fontSize="9.5" fontWeight="700" fontFamily="monospace">{p.label}</text>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
        <rect x="158" y="195" width="164" height="26" rx="4" fill="#0A0A0A" />
        <text x="240" y="211" textAnchor="middle" fill="#F5C518" fontSize="9.5" fontWeight="800" fontFamily="monospace">0.3ms P50 · 10,400 req/s</text>
      </motion.g>
    </svg>
  );
}

function CTOLeadersSVG() {
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#F0EDE4" rx="4" />
      <defs><pattern id="cto-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="0" cy="0" r="1" fill="#C8C3B5" /></pattern></defs>
      <rect width="480" height="290" fill="url(#cto-dots)" />
      <motion.g initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45 }}>
        <rect x="175" y="12" width="130" height="44" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2" />
        <text x="240" y="31" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontWeight="800" fontFamily="sans-serif">Organisation</text>
        <text x="240" y="46" textAnchor="middle" fill="rgba(10,10,10,0.6)" fontSize="9" fontFamily="monospace">Budget: $500k / mo</text>
      </motion.g>
      <motion.path d="M 240 56 L 240 76" stroke="#0A0A0A" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.38, duration: 0.25 }} />
      <motion.path d="M 86 76 H 394" stroke="#0A0A0A" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.46, duration: 0.4 }} />
      {[
        { cx: 86, label: "Engineering", budget: "$200k" },
        { cx: 240, label: "Research", budget: "$180k" },
        { cx: 394, label: "Product", budget: "$120k" },
      ].map((dept, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 + i * 0.09, duration: 0.4 }}>
          <motion.path d={`M ${dept.cx} 76 L ${dept.cx} 96`} stroke="#0A0A0A" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.58 + i * 0.09, duration: 0.25 }} />
          <rect x={dept.cx - 65} y="96" width="130" height="44" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
          <text x={dept.cx} y="115" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontWeight="700" fontFamily="sans-serif">{dept.label}</text>
          <text x={dept.cx} y="130" textAnchor="middle" fill="rgba(10,10,10,0.55)" fontSize="9" fontFamily="monospace">{dept.budget}</text>
        </motion.g>
      ))}
      {[
        { px: 86, cx: 46, label: "Team A", pct: "67%", warn: false },
        { px: 86, cx: 136, label: "Team B", pct: "42%", warn: false },
        { px: 240, cx: 194, label: "Team C", pct: "55%", warn: false },
        { px: 240, cx: 286, label: "Team D", pct: "88%", warn: true },
        { px: 394, cx: 360, label: "Team E", pct: "91%", warn: true },
        { px: 394, cx: 434, label: "Team F", pct: "28%", warn: false },
      ].map((t, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 + i * 0.07, duration: 0.35 }}>
          <motion.path d={`M ${t.px} 140 L ${t.cx} 168`} stroke="#0A0A0A" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.72 + i * 0.07, duration: 0.3 }} />
          <rect x={t.cx - 40} y="168" width="80" height="42" rx="4" fill={t.warn ? "rgba(255,90,54,0.12)" : "#FAF8F3"} stroke={t.warn ? "#FF5A36" : "#0A0A0A"} strokeWidth="1.5" />
          <text x={t.cx} y="184" textAnchor="middle" fill="#0A0A0A" fontSize="9" fontWeight="700" fontFamily="sans-serif">{t.label}</text>
          <text x={t.cx} y="197" textAnchor="middle" fill={t.warn ? "#FF5A36" : "#7A746A"} fontSize="8" fontFamily="monospace">{t.pct} used</text>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <rect x="12" y="226" width="10" height="10" fill="rgba(255,90,54,0.12)" stroke="#FF5A36" strokeWidth="1.2" /><text x="26" y="236" fill="#7A746A" fontSize="8" fontFamily="monospace">Near budget limit</text>
        <rect x="12" y="244" width="10" height="10" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.2" /><text x="26" y="254" fill="#7A746A" fontSize="8" fontFamily="monospace">Healthy spend</text>
        <rect x="12" y="262" width="10" height="10" fill="#F5C518" stroke="#0A0A0A" strokeWidth="1.2" /><text x="26" y="272" fill="#7A746A" fontSize="8" fontFamily="monospace">Org / Dept</text>
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <rect x="330" y="226" width="138" height="52" rx="4" fill="#0A0A0A" />
        <text x="399" y="245" textAnchor="middle" fill="rgba(250,248,243,0.55)" fontSize="8" fontFamily="monospace">6-level hierarchy</text>
        <text x="399" y="262" textAnchor="middle" fill="#F5C518" fontSize="13" fontWeight="800" fontFamily="sans-serif">RBAC + SCIM 2.0</text>
      </motion.g>
    </svg>
  );
}

function SecurityComplianceSVG() {
  const left = [{ y: 74, label: "AES-256" }, { y: 130, label: "TLS 1.2+" }, { y: 186, label: "SCIM 2.0" }];
  const right = [{ y: 74, label: "Vault" }, { y: 130, label: "SIEM logs" }, { y: 186, label: "RBAC" }];
  const circuitPaths = ["M 50 130 H 122 V 74 H 174","M 50 130 H 122 V 186 H 174","M 306 130 H 358 V 74 H 408","M 306 130 H 358 V 130 H 408","M 306 130 H 358 V 186 H 408","M 240 64 V 18 H 430 V 64","M 240 218 V 262 H 60 V 218"];
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#0A0A0A" rx="4" />
      {circuitPaths.map((d, i) => (<motion.path key={i} d={d} stroke="#F5C518" strokeWidth="1" opacity="0.22" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }} />))}
      <motion.path d="M 240 62 L 302 88 L 302 160 Q 302 202 240 224 Q 178 202 178 160 L 178 88 Z" fill="rgba(245,197,24,0.14)" stroke="#F5C518" strokeWidth="2.5" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.55, type: "spring", stiffness: 180 }} style={{ transformOrigin: "240px 143px" }} />
      <motion.path d="M 226 132 V 124 Q 226 110 240 110 Q 254 110 254 124 V 132" stroke="#F5C518" strokeWidth="2.5" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.4 }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
        <rect x="222" y="132" width="36" height="28" rx="3" fill="#F5C518" stroke="#0A0A0A" strokeWidth="1.5" />
        <circle cx="240" cy="145" r="4.5" fill="#0A0A0A" /><rect x="238" y="145" width="4" height="7" rx="1.5" fill="#0A0A0A" />
      </motion.g>
      {left.map((item, i) => (<motion.g key={i} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.11 }}><rect x="12" y={item.y - 15} width="86" height="28" rx="3" fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.35)" strokeWidth="1" /><text x="55" y={item.y + 4} textAnchor="middle" fill="#F5C518" fontSize="10" fontWeight="700" fontFamily="monospace">{item.label}</text><circle cx="98" cy={item.y} r="3" fill="#F5C518" opacity="0.5" /></motion.g>))}
      {right.map((item, i) => (<motion.g key={i} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.52 + i * 0.11 }}><rect x="382" y={item.y - 15} width="86" height="28" rx="3" fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.35)" strokeWidth="1" /><text x="425" y={item.y + 4} textAnchor="middle" fill="#F5C518" fontSize="10" fontWeight="700" fontFamily="monospace">{item.label}</text><circle cx="382" cy={item.y} r="3" fill="#F5C518" opacity="0.5" /></motion.g>))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
        <rect x="162" y="245" width="156" height="28" rx="3" fill="#F5C518" />
        <text x="240" y="262" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontWeight="800" fontFamily="sans-serif">AIR-GAPPED VPC READY</text>
      </motion.g>
    </svg>
  );
}

function CostControlSVG() {
  const weeks = [{ label: "Wk 1", before: 178, after: 71 }, { label: "Wk 2", before: 200, after: 74 }, { label: "Wk 3", before: 195, after: 66 }, { label: "Wk 4", before: 212, after: 70 }];
  const maxVal = 220, chartH = 180, baseY = 230, bw = 38, groupW = bw * 2 + 10, startX = 56, groupGap = 28;
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#F0EDE4" rx="4" />
      <line x1="46" y1="50" x2="46" y2={baseY} stroke="#0A0A0A" strokeWidth="1.5" /><line x1="46" y1={baseY} x2="460" y2={baseY} stroke="#0A0A0A" strokeWidth="1.5" />
      {[0, 0.25, 0.5, 0.75, 1].map((frac, i) => { const y = baseY - frac * chartH; return (<g key={i}><line x1="40" y1={y} x2="46" y2={y} stroke="#0A0A0A" strokeWidth="1" /><text x="36" y={y + 4} textAnchor="end" fill="#7A746A" fontSize="8" fontFamily="monospace">${Math.round(frac * maxVal)}k</text><line x1="46" y1={y} x2="460" y2={y} stroke="#C8C3B5" strokeWidth="0.5" strokeDasharray="3 3" /></g>); })}
      {weeks.map((w, i) => {
        const gx = startX + i * (groupW + groupGap);
        const beforeH = (w.before / maxVal) * chartH, afterH = (w.after / maxVal) * chartH;
        return (
          <g key={i}>
            <motion.g style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              <rect x={gx} y={baseY - beforeH} width={bw} height={beforeH} rx="2" fill="#C8C3B5" stroke="#0A0A0A" strokeWidth="1.5" />
            </motion.g>
            <motion.g style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              <rect x={gx + bw + 10} y={baseY - afterH} width={bw} height={afterH} rx="2" fill="#F5C518" stroke="#0A0A0A" strokeWidth="1.5" />
            </motion.g>
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 + i * 0.1 }}>
              <rect x={gx + bw + 8} y={baseY - afterH - 22} width={bw + 4} height="18" rx="3" fill="#FF5A36" />
              <text x={gx + bw + 10 + bw / 2} y={baseY - afterH - 10} textAnchor="middle" fill="#FAF8F3" fontSize="9" fontWeight="800" fontFamily="monospace">-{Math.round((1 - w.after / w.before) * 100)}%</text>
            </motion.g>
            <text x={gx + groupW / 2} y={baseY + 14} textAnchor="middle" fill="#7A746A" fontSize="8.5" fontFamily="sans-serif">{w.label}</text>
          </g>
        );
      })}
      <rect x="296" y="60" width="12" height="12" fill="#C8C3B5" stroke="#0A0A0A" strokeWidth="1" /><text x="313" y="71" fill="#4A4540" fontSize="9" fontFamily="sans-serif">Before InferGate</text>
      <rect x="296" y="80" width="12" height="12" fill="#F5C518" stroke="#0A0A0A" strokeWidth="1" /><text x="313" y="91" fill="#4A4540" fontSize="9" fontFamily="sans-serif">With semantic caching</text>
      <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.95, duration: 0.4 }} style={{ transformOrigin: "400px 178px" }}>
        <rect x="336" y="148" width="128" height="60" rx="4" fill="#0A0A0A" />
        <text x="400" y="170" textAnchor="middle" fill="rgba(250,248,243,0.5)" fontSize="8.5" fontFamily="monospace">Average reduction</text>
        <text x="400" y="196" textAnchor="middle" fill="#F5C518" fontSize="24" fontWeight="800" fontFamily="sans-serif">30–65%</text>
      </motion.g>
    </svg>
  );
}

function HighThroughputSVG() {
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#0A0A0A" rx="4" />
      <path d="M 96 210 A 144 144 0 0 1 384 210" stroke="#1e1e1e" strokeWidth="28" strokeLinecap="round" fill="none" />
      <motion.path d="M 96 210 A 144 144 0 0 1 384 210" stroke="#F5C518" strokeWidth="26" strokeLinecap="round" fill="none" strokeDasharray="452" initial={{ strokeDashoffset: 452 }} animate={{ strokeDashoffset: 0 }} transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }} />
      {Array.from({ length: 11 }).map((_, i) => { const angle = -180 + i * 18, rad = (angle * Math.PI) / 180, cx = 240, cy = 210, r = 136, x1 = cx + r * Math.cos(rad), y1 = cy + r * Math.sin(rad), x2 = cx + (r - 14) * Math.cos(rad), y2 = cy + (r - 14) * Math.sin(rad); return (<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i === 10 ? "#FF5A36" : "rgba(255,255,255,0.25)"} strokeWidth={i === 10 ? "2.5" : "1.5"} />); })}
      <motion.g style={{ transformOrigin: "240px 210px" }} initial={{ rotate: -180 }} animate={{ rotate: 0 }} transition={{ delay: 0.55, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}>
        <line x1="240" y1="210" x2="378" y2="210" stroke="#FF5A36" strokeWidth="3" strokeLinecap="round" />
      </motion.g>
      <circle cx="240" cy="210" r="9" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2.5" />
      <text x="90" y="232" textAnchor="middle" fill="rgba(250,248,243,0.35)" fontSize="9" fontFamily="monospace">0</text>
      <text x="390" y="232" textAnchor="middle" fill="#FF5A36" fontSize="9" fontFamily="monospace">MAX</text>
      <motion.text x="240" y="168" textAnchor="middle" fill="#FAF8F3" fontSize="40" fontWeight="800" fontFamily="sans-serif" letterSpacing="-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>10,400</motion.text>
      <motion.text x="240" y="190" textAnchor="middle" fill="rgba(250,248,243,0.45)" fontSize="11" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>req/s · single node</motion.text>
      {[{ x: 18, label: "P50 latency", value: "0.3ms" }, { x: 170, label: "Memory", value: "<50MB" }, { x: 322, label: "Cold start", value: "<2s" }].map((stat, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 + i * 0.1 }}>
          <rect x={stat.x} y="242" width="128" height="40" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <text x={stat.x + 64} y="258" textAnchor="middle" fill="rgba(250,248,243,0.45)" fontSize="9" fontFamily="monospace">{stat.label}</text>
          <text x={stat.x + 64} y="274" textAnchor="middle" fill="#F5C518" fontSize="15" fontWeight="800" fontFamily="sans-serif">{stat.value}</text>
        </motion.g>
      ))}
    </svg>
  );
}

function AgentOrchestrationSVG() {
  const tools = [{ x: 28, y: 106, label: "Code Exec", sub: "Starlark" }, { x: 28, y: 182, label: "Web Search", sub: "tool" }, { x: 352, y: 106, label: "DB Query", sub: "tool" }, { x: 352, y: 182, label: "File Read", sub: "tool" }, { x: 182, y: 228, label: "LLM Router", sub: "25+ providers" }];
  const connectors = [{ x1: 184, y1: 148, x2: 128, y2: 106 }, { x1: 184, y1: 148, x2: 128, y2: 182 }, { x1: 296, y1: 148, x2: 352, y2: 106 }, { x1: 296, y1: 148, x2: 352, y2: 182 }, { x1: 240, y1: 180, x2: 240, y2: 228 }];
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#F0EDE4" rx="4" />
      <defs>
        <pattern id="ao-dots2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="0" cy="0" r="1" fill="#C8C3B5" /></pattern>
        <marker id="arrow2" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0, 7 2.5, 0 5" fill="#0A0A0A" /></marker>
        <marker id="arrowR2" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0, 7 2.5, 0 5" fill="#FF5A36" /></marker>
      </defs>
      <rect width="480" height="290" fill="url(#ao-dots2)" />
      <motion.g initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45 }}>
        <rect x="184" y="18" width="112" height="46" rx="4" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
        <text x="240" y="39" textAnchor="middle" fill="#FAF8F3" fontSize="12" fontWeight="800" fontFamily="sans-serif">AI Agent</text>
        <text x="240" y="54" textAnchor="middle" fill="rgba(250,248,243,0.5)" fontSize="8.5" fontFamily="monospace">orchestrator loop</text>
      </motion.g>
      <motion.path d="M 234 64 L 234 116" stroke="#0A0A0A" strokeWidth="2" markerEnd="url(#arrow2)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.38, duration: 0.35 }} />
      <motion.path d="M 246 116 L 246 64" stroke="#FF5A36" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrowR2)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.52, duration: 0.35 }} />
      <motion.g initial={{ opacity: 0, scale: 0.82 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 180 }} style={{ transformOrigin: "240px 148px" }}>
        <rect x="184" y="116" width="112" height="64" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2.5" />
        <text x="240" y="140" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontWeight="800" fontFamily="sans-serif">MCP Gateway</text>
        <text x="240" y="154" textAnchor="middle" fill="rgba(10,10,10,0.6)" fontSize="8" fontFamily="monospace">tool registry</text>
        <text x="240" y="166" textAnchor="middle" fill="rgba(10,10,10,0.6)" fontSize="8" fontFamily="monospace">Starlark exec</text>
      </motion.g>
      {tools.map((tool, i) => (<motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 + i * 0.09 }}><rect x={tool.x} y={tool.y - 20} width="100" height="38" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" /><text x={tool.x + 50} y={tool.y - 4} textAnchor="middle" fill="#0A0A0A" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">{tool.label}</text><text x={tool.x + 50} y={tool.y + 10} textAnchor="middle" fill="#7A746A" fontSize="8" fontFamily="monospace">{tool.sub}</text></motion.g>))}
      {connectors.map((c, i) => (<motion.path key={i} d={`M ${c.x1} ${c.y1} L ${c.x2} ${c.y2}`} stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 + i * 0.08, duration: 0.45 }} />))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <rect x="362" y="228" width="108" height="46" rx="4" fill="#FF5A36" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="416" y="247" textAnchor="middle" fill="#FAF8F3" fontSize="8.5" fontFamily="monospace">fewer round-trips</text>
        <text x="416" y="264" textAnchor="middle" fill="#FAF8F3" fontSize="18" fontWeight="800" fontFamily="sans-serif">10× less</text>
      </motion.g>
    </svg>
  );
}

function SelfHostedSVG() {
  return (
    <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 480, height: "auto" }} aria-hidden="true">
      <rect width="480" height="290" fill="#F0EDE4" rx="4" />
      <motion.rect x="24" y="28" width="406" height="206" rx="6" fill="rgba(245,197,24,0.07)" stroke="#F5C518" strokeWidth="2.5" strokeDasharray="10 6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.55 }} />
      <motion.text x="227" y="20" textAnchor="middle" fill="#7A746A" fontSize="9.5" fontWeight="700" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>YOUR VPC / AIR-GAPPED ENVIRONMENT</motion.text>
      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.45 }}>
        <rect x="164" y="76" width="136" height="60" rx="4" fill="#F5C518" stroke="#0A0A0A" strokeWidth="2" />
        <text x="232" y="101" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontWeight="800" fontFamily="sans-serif">InferGate</text>
        <text x="232" y="117" textAnchor="middle" fill="rgba(10,10,10,0.6)" fontSize="8.5" fontFamily="monospace">Go · &lt;50MB · &lt;2s start</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
        <rect x="42" y="162" width="130" height="56" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="107" y="183" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontWeight="700" fontFamily="sans-serif">Ollama / vLLM</text>
        <text x="107" y="198" textAnchor="middle" fill="#7A746A" fontSize="8" fontFamily="monospace">local models</text>
        <text x="107" y="210" textAnchor="middle" fill="#7A746A" fontSize="8" fontFamily="monospace">data never leaves</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.4 }}>
        <rect x="292" y="162" width="130" height="56" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="357" y="183" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontWeight="700" fontFamily="sans-serif">K8s Helm Chart</text>
        <text x="357" y="198" textAnchor="middle" fill="#7A746A" fontSize="8" fontFamily="monospace">HPA · PDB · TLS</text>
        <text x="357" y="210" textAnchor="middle" fill="#7A746A" fontSize="8" fontFamily="monospace">Docker · ECS ready</text>
      </motion.g>
      <motion.path d="M 164 106 L 107 162" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.72, duration: 0.38 }} />
      <motion.path d="M 300 106 L 357 162" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.38 }} />
      <line x1="448" y1="50" x2="448" y2="220" stroke="#C8C3B5" strokeWidth="1.5" strokeDasharray="5 4" />
      {[96, 160].map((y, i) => (<motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 + i * 0.1 }}><circle cx="440" cy={y} r="11" stroke="#FF5A36" strokeWidth="1.5" fill="rgba(255,90,54,0.08)" /><line x1="434" y1={y - 6} x2="446" y2={y + 6} stroke="#FF5A36" strokeWidth="2.5" /><line x1="446" y1={y - 6} x2="434" y2={y + 6} stroke="#FF5A36" strokeWidth="2.5" /></motion.g>))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <rect x="98" y="252" width="268" height="28" rx="3" fill="#0A0A0A" />
        <text x="232" y="270" textAnchor="middle" fill="#F5C518" fontSize="10.5" fontWeight="800" fontFamily="monospace">COMPLETE DATA SOVEREIGNTY</text>
      </motion.g>
    </svg>
  );
}

// ─── Illustrations map ────────────────────────────────────────────────────────

const ILLUSTRATIONS: Record<string, React.ComponentType> = {
  "platform-engineers": PlatformEngineersSVG,
  "cto-it-leaders": CTOLeadersSVG,
  "security-compliance": SecurityComplianceSVG,
  "cost-control": CostControlSVG,
  "high-throughput": HighThroughputSVG,
  "agent-orchestration": AgentOrchestrationSVG,
  "self-hosted": SelfHostedSVG,
};

// ─── Solutions data ───────────────────────────────────────────────────────────

const SOLUTIONS_DATA: Record<string, SolutionData> = {
  "platform-engineers": {
    metaTitle: "Platform & ML Engineers",
    eyebrow: "Solutions · Platform & ML Engineers",
    headline: "Built for engineers who own AI infrastructure.",
    subhead:
      "Stop writing one-off integrations for every LLM provider your teams want to try. InferGate gives you a single, unified control plane with routing, observability, and policy enforcement — without touching application code.",
    whoForTitle: "Who is this for?",
    whoForBody:
      "Platform engineers, ML infrastructure teams, and AI platform leads responsible for standardizing how their organization accesses AI models. You own the toolchain, and you need something that scales from a single team to hundreds of services without forcing a migration.",
    pain:
      "Managing API integrations for OpenAI, Anthropic, AWS Bedrock, Cohere, and a growing list of providers means duplicated client code, inconsistent timeout handling, no unified observability, and a fresh onboarding burden every time a new provider gets evaluated.",
    capabilities: [
      { icon: Globe, title: "Drop-in URL replacement", description: "Point any OpenAI-compatible SDK at InferGate's base URL. No code changes beyond the endpoint swap — every existing SDK call routes through the gateway immediately." },
      { icon: GitBranch, title: "CEL routing in <100µs", description: "Write routing rules in Google's Common Expression Language: route by model name, virtual key tier, request metadata, or custom headers. Rules evaluate in under 100 microseconds." },
      { icon: RefreshCw, title: "Hot-reload configuration", description: "Update routing rules, budget limits, provider keys, and plugin config live. Zero restarts, zero dropped connections — push a YAML change and the gateway adapts in milliseconds." },
      { icon: Package, title: "Go SDK & plugin system", description: "Extend the gateway with custom middleware written in Go. Add request enrichment, custom auth, response transformation, or telemetry hooks without forking the binary." },
      { icon: Layers, title: "25+ providers, one API surface", description: "OpenAI, Anthropic, AWS Bedrock, Cohere, Mistral, Azure OpenAI, Google Vertex, Ollama, vLLM, and 16 more. All behind one OpenAI-compatible API that every SDK already understands." },
      { icon: Cpu, title: "Zero vendor lock-in", description: "Provider keys live in the gateway. Switching models or providers is a config change, not an engineering sprint. Your application never hardcodes a provider again." },
    ],
  },

  "cto-it-leaders": {
    metaTitle: "CTO & IT Leaders",
    eyebrow: "Solutions · CTO & IT Leaders",
    headline: "Visibility and control over your entire AI spend.",
    subhead:
      "AI adoption is accelerating across every team in your organization. Without centralized governance, that means uncontrolled spend, inconsistent security posture, and no audit trail. InferGate gives leadership the controls that belong at the infrastructure layer.",
    whoForTitle: "Who is this for?",
    whoForBody:
      "CTOs, CIOs, VP Engineering, and IT Directors responsible for AI governance across multiple teams and business units. You need to enable AI adoption at speed without surrendering financial controls or security oversight.",
    pain:
      "As teams independently integrate AI models, costs become opaque and unpredictable. There is no unified view of spend across departments, no enforceable policy layer, and no audit trail that would satisfy a compliance review or a board question about AI risk.",
    capabilities: [
      { icon: Layers, title: "6-level budget hierarchy", description: "Set and enforce spend limits at organization, department, project, team, application, and virtual-key level. Budgets cascade and enforce in real time before charges accumulate." },
      { icon: BarChart3, title: "Real-time AI spend dashboards", description: "See AI spend, cache hit rates, model usage, latency, and error rates across every team and project in a single unified view. No waiting for the monthly cloud invoice." },
      { icon: Users, title: "RBAC with granular scopes", description: "Define who can create virtual keys, adjust budgets, view request logs, modify routing rules, and deploy configuration changes. Roles can be scoped to org, department, or project." },
      { icon: FileText, title: "Immutable audit trail", description: "Every request logged with model name, token count, inferred cost, virtual key ID, response code, and custom metadata. Exportable as structured JSON for finance or compliance." },
      { icon: Users, title: "SCIM 2.0 provisioning", description: "Sync users, groups, and roles directly from Okta, Azure AD, JumpCloud, or any SCIM-compatible identity provider. User lifecycle is fully automated — no manual deprovisioning." },
      { icon: Settings, title: "Configurable policy enforcement", description: "Define org-wide policies in CEL: block specific model tiers for non-approved teams, enforce PII detection on sensitive projects, cap context windows per tier." },
    ],
  },

  "security-compliance": {
    metaTitle: "Security & Compliance",
    eyebrow: "Solutions · Security & Compliance",
    headline: "Enterprise AI that meets your compliance requirements.",
    subhead:
      "Sensitive data flowing through third-party AI APIs is one of the highest-risk surfaces in your organization. InferGate is designed from the ground up to operate within your security boundary — not around it.",
    whoForTitle: "Who is this for?",
    whoForBody:
      "CISOs, security architects, compliance officers, and platform engineers at companies with strict regulatory requirements — financial services, healthcare, government, or any enterprise with sensitive data and an AI adoption mandate to fulfill.",
    pain:
      "Every API call to an external LLM provider is a potential data egress event. Without an intermediary layer that enforces redaction, encryption, access controls, and logging, you have no way to demonstrate compliance or investigate an incident after the fact.",
    capabilities: [
      { icon: ShieldCheck, title: "Air-gapped VPC deployment", description: "Deploy InferGate entirely within your private VPC with no required outbound connections. Data never crosses your network boundary without explicit routing configuration." },
      { icon: Eye, title: "PII guardrails", description: "Detect and redact sensitive data before requests reach any model. Configurable pattern rules for SSNs, credit card numbers, email addresses, and custom entity types." },
      { icon: Lock, title: "AES-256 + TLS 1.2+", description: "All secrets encrypted at rest with AES-256. All transit encrypted with TLS 1.2 or higher. Cipher suites are configurable to meet your internal security policy requirements." },
      { icon: Key, title: "HashiCorp Vault integration", description: "Fetch provider API keys from Vault dynamic secrets. Automatic rotation on schedule or on demand. No plaintext provider credentials in configuration files or environment variables." },
      { icon: FileText, title: "SIEM-ready audit logs", description: "Structured JSON request logs with request ID, virtual key, model, token count, inferred cost, response code, and masked content. Compatible with Splunk, Elastic, Datadog, and any SIEM." },
      { icon: Users, title: "RBAC + SCIM 2.0", description: "Granular permission scopes for every gateway action. SCIM 2.0 syncs users and groups from your IdP so access is provisioned and revoked automatically with employment lifecycle." },
    ],
  },

  "cost-control": {
    metaTitle: "Cost Control",
    eyebrow: "Solutions · Cost Control",
    headline: "Stop AI cost overruns before they start.",
    subhead:
      "AI API spend compounds fast. Semantic caching, multi-level budgets, and automatic fallback routing give you the tools to grow AI usage without growing your bill proportionally.",
    whoForTitle: "Who is this for?",
    whoForBody:
      "Engineering leaders, FinOps teams, and platform engineers at companies where AI API spend has become a significant or fast-growing line item. You need cost predictability without throttling the teams building on AI.",
    pain:
      "LLM API bills are opaque and unpredictable. Identical questions asked slightly differently generate full model calls. Teams have no visibility into their individual spend until the monthly cloud invoice arrives — by which point the damage is done.",
    capabilities: [
      { icon: Database, title: "Semantic caching (30–65% reduction)", description: "Cache responses to semantically similar requests, not just identical ones. Typical enterprise deployments see 30–65% cost reduction. Cache is fully configurable per route and model." },
      { icon: Layers, title: "6-level budget enforcement", description: "Set hard or soft spend limits at organization, department, project, team, application, and virtual-key level. Budgets are checked on every request — not at billing cycle end." },
      { icon: AlertCircle, title: "Real-time overage prevention", description: "When a budget threshold is reached, InferGate can block, warn, or reroute instantly. No more discovering overruns in the next month's invoice." },
      { icon: GitBranch, title: "Automatic fallback to cheaper models", description: "Configure threshold-triggered routing: when Team A reaches 80% of budget, route non-critical traffic to a cheaper fallback model automatically. No engineer intervention required." },
      { icon: BarChart3, title: "Cost allocation reporting", description: "Attribute every API dollar to a specific team, project, virtual key, or application. Export structured reports for finance chargeback or internal showback." },
      { icon: Activity, title: "Multi-provider cost comparison", description: "Real-time cost-per-1k-token visibility across all 25+ providers and models. Use this data to inform routing decisions and spot cheaper alternatives for your workloads." },
    ],
  },

  "high-throughput": {
    metaTitle: "High-Throughput Apps",
    eyebrow: "Solutions · High-Throughput Apps",
    headline: "10,400 req/s on a single node. Linear scaling beyond.",
    subhead:
      "Most AI gateway proxies are written in Python or Node.js and buckle under sustained production load. InferGate is written in Go with zero-allocation middleware and SSE zero-copy streaming — built from the start for throughput.",
    whoForTitle: "Who is this for?",
    whoForBody:
      "Product engineering teams, platform teams, and infrastructure leads building AI-native applications that need to handle real user traffic at scale — search, autocomplete, content generation, chat, and any AI feature that lives on the critical path.",
    pain:
      "Python and Node.js AI proxies add 8–20ms of overhead at P50 and fall over under sustained load. When your AI feature is on the critical path for thousands of concurrent users, your gateway needs to be invisible — not a bottleneck.",
    capabilities: [
      { icon: Zap, title: "10,400 req/s on a single node", description: "Benchmarked at 10,400 requests per second on a standard 4-core node under sustained load. Add replicas and throughput scales linearly with CPU cores." },
      { icon: Activity, title: "0.3ms P50 overhead", description: "Zero-allocation Go middleware adds only 0.3ms at the 50th percentile. Compared to 8–20ms for typical Python or Node.js proxies — a difference users can feel." },
      { icon: Zap, title: "SSE zero-copy streaming", description: "Server-Sent Events responses are forwarded with zero-copy semantics. No intermediate buffering means no latency cliff for long streaming completions." },
      { icon: HardDrive, title: "<50MB resident memory", description: "The entire gateway process uses less than 50MB of resident memory under load. Friendly to Kubernetes resource limits and keeps your node costs down." },
      { icon: Server, title: "<2s cold start", description: "Kubernetes pods are serving traffic in under 2 seconds from cold. HPA scale-out events are effective immediately when traffic spikes arrive." },
      { icon: Cpu, title: "Linear CPU scaling", description: "Go's goroutine scheduler handles 100k+ concurrent connections. Add vCPUs or replicas and throughput scales linearly — no GIL, no event-loop bottleneck." },
    ],
  },

  "agent-orchestration": {
    metaTitle: "Agent Orchestration",
    eyebrow: "Solutions · Agent Orchestration",
    headline: "Native MCP support at the gateway layer.",
    subhead:
      "Agentic AI applications multiply every LLM round-trip into a chain of calls. A gateway that understands Model Context Protocol can collapse that overhead — centralizing tool registry, health monitoring, and access control in one place.",
    whoForTitle: "Who is this for?",
    whoForBody:
      "Engineers building multi-step AI agents, autonomous coding assistants, research pipelines, or any application where an LLM needs to call tools, reason over results, and iterate. You need the coordination layer to be fast, observable, and access-controlled.",
    pain:
      "Agentic loops route every tool call back through the LLM, multiplying latency and cost with each iteration. Managing tool availability, retries, and authorization at the application level means every agent reimplements the same boilerplate — and none of it is observable.",
    capabilities: [
      { icon: Bot, title: "Native MCP gateway", description: "First-class Model Context Protocol support at the gateway layer. No sidecar, no separate proxy — MCP tool dispatch is native to the InferGate request path." },
      { icon: Package, title: "Centralized tool registry", description: "Register and version tools once. Agents discover available tools through the gateway without per-agent configuration. Tool schemas are validated at registration time." },
      { icon: Terminal, title: "Starlark code execution", description: "Run lightweight Starlark scripts as gateway-layer tools. Sandboxed, deterministic, version-controlled — without deploying a full code interpreter or sidecar." },
      { icon: GitBranch, title: "Agent mode routing", description: "In agent mode, the gateway manages tool dispatch, retries, and result aggregation for multi-step loops. 10x fewer round-trips to the LLM for equivalent task completion." },
      { icon: Activity, title: "Tool health monitoring", description: "Track availability, response time, and error rates per tool. Automatically failover to healthy instances. Alert when a tool degrades below configured SLO thresholds." },
      { icon: ShieldCheck, title: "Access-controlled tool groups", description: "Assign tools to virtual key scopes. Agent A can only invoke tools in its authorized group. Prevents prompt injection from escalating to unauthorized tool access." },
    ],
  },

  "self-hosted": {
    metaTitle: "Self-Hosted / VPC",
    eyebrow: "Solutions · Self-Hosted / VPC",
    headline: "Complete data sovereignty in your infrastructure.",
    subhead:
      "SaaS AI gateways still send your data somewhere. InferGate runs entirely inside your network perimeter — air-gapped if required — with support for local models, Kubernetes, Docker, and ECS deployment patterns.",
    whoForTitle: "Who is this for?",
    whoForBody:
      "Security-first engineering teams, regulated enterprise, government agencies, and any organization where the data residency requirement is absolute: no request data leaves your sovereign boundary, ever.",
    pain:
      "Even well-intentioned SaaS gateways are a data egress vector. Air-gapped environments, government networks, and financial institutions with data residency obligations cannot route AI traffic through a third-party control plane — no matter how secure the vendor claims to be.",
    capabilities: [
      { icon: ShieldCheck, title: "Air-gapped VPC deployment", description: "InferGate requires zero outbound connections to operate. It starts, routes, and logs entirely within your network perimeter — no telemetry, no license checks, no cloud calls." },
      { icon: HardDrive, title: "Local model support (Ollama / vLLM)", description: "Route to locally hosted models via Ollama or vLLM using the same unified API and routing rules. Sensitive workloads never touch an external endpoint." },
      { icon: Server, title: "Kubernetes Helm chart", description: "Production-ready Helm chart with HPA for scale-out, PDB for safe rollouts, TLS termination, ConfigMap management, and resource limit defaults tuned for the Go binary." },
      { icon: Package, title: "Docker + ECS deployment recipes", description: "Docker Compose for local and staging environments, ECS task definitions for AWS VPC deployments. Both patterns are fully documented with example configurations." },
      { icon: Key, title: "HashiCorp Vault integration", description: "Fetch provider API keys from Vault dynamic secrets at startup. Rotate credentials on schedule without pod restarts. No long-lived secrets in environment variables or config." },
      { icon: Database, title: "Data residency guarantees", description: "All request logs, cached responses, and configuration stored in your chosen data tier. No InferGate telemetry endpoints, no required external storage — your data, your infrastructure." },
    ],
  },
};

// ─── Page client component ────────────────────────────────────────────────────

export function SolutionSlugClient({ slug }: { slug: string }) {
  const data = SOLUTIONS_DATA[slug];

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
            <Link href="/solutions" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--nb-ink-muted)", textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
              <ArrowLeft size={14} strokeWidth={2.5} /> Solutions
            </Link>
            <span style={{ color: "var(--nb-border-light)" }}>/</span>
            <span style={{ color: "var(--nb-ink)", fontWeight: 700, fontSize: 13 }}>{data.metaTitle}</span>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
              <span className="eyebrow">{data.eyebrow}</span>
              <h1 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", marginBottom: 20, lineHeight: 1.05, letterSpacing: "-0.04em" }}>{data.headline}</h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.78, marginBottom: 32 }}>{data.subhead}</p>
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
              <div className="section-label" style={{ color: "rgba(250,248,243,0.45)", marginBottom: 10 }}>The problem</div>
              <p style={{ fontSize: 17, color: "rgba(250,248,243,0.8)", lineHeight: 1.78, maxWidth: 700 }}>{data.pain}</p>
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
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.035em", lineHeight: 1.1 }}>Built for your role.</h2>
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
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", letterSpacing: "-0.035em", lineHeight: 1.1 }}>What InferGate delivers</h2>
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

      {/* ── What's included ───────────────────────────────────── */}
      <section className="section section--surface" style={{ padding: "72px 24px" }}>
        <div className="container container--narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
            <div>
              <div className="section-label">Included in every plan</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 16, letterSpacing: "-0.035em", lineHeight: 1.1 }}>No feature gates on core infrastructure.</h2>
              <p style={{ fontSize: 15, color: "var(--nb-ink-muted)", lineHeight: 1.8 }}>Every InferGate deployment ships with all core capabilities. Advanced features like enterprise SSO, dedicated support SLAs, and custom deployment assistance are available on the Enterprise plan.</p>
              <div style={{ marginTop: 28 }}>
                <Link href="/pricing" className="btn-secondary" style={{ fontSize: 14 }}>View pricing <ArrowRight size={13} strokeWidth={2.5} /></Link>
              </div>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, paddingTop: 4 }}>
              {["25+ provider integrations", "Semantic caching engine", "CEL routing engine", "6-level budget hierarchy", "Audit log export", "Virtual key management", "Go plugin system", "Kubernetes Helm chart"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={16} color="var(--nb-green)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 14.5, color: "var(--nb-ink)", fontWeight: 600 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section section--invert">
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} style={{ maxWidth: 600 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--nb-bg)", marginBottom: 16, letterSpacing: "-0.035em" }}>Ready to see it in your environment?</h2>
            <p style={{ color: "rgba(250,248,243,0.6)", fontSize: 17, marginBottom: 36, lineHeight: 1.7 }}>Talk to an engineer about your specific setup. We&apos;ll run a proof-of-concept in your environment and show measurable results before you commit.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact us →</Link>
              <Link href="/solutions" className="btn-secondary"><ArrowLeft size={14} strokeWidth={2.5} /> All solutions</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
