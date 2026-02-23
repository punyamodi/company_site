import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BarChart3,
  ChevronRight,
  Globe,
  Search,
  Star,
  Tag,
  FileText,
  Folder,
  MessageSquare,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Base & Help Center — Self-Service That Actually Works",
  description:
    "Build a branded help center with articles, folders, multi-portal support, SEO-optimized URLs, and integrated Captain AI search. Reduce ticket volume by letting customers help themselves.",
};

const FEATURES_CORE = [
  {
    icon: FileText,
    title: "Article Management",
    desc: "Create, publish, and archive articles with a rich editor. Full lifecycle management from draft to published to archived — with version awareness.",
    accent: "#0EA5A0",
  },
  {
    icon: Folder,
    title: "Folders & Categories",
    desc: "Organize articles into folders and categories for logical navigation. Nested structures keep large knowledge bases browsable and maintainable.",
    accent: "#6366F1",
  },
  {
    icon: Globe,
    title: "SEO-Optimized URLs",
    desc: "Every article gets a clean, human-readable URL slug. Structured metadata ensures your help content ranks in organic search — reducing inbound volume.",
    accent: "#F59E0B",
  },
  {
    icon: Tag,
    title: "Multi-Portal Support",
    desc: "Run separate help center portals for different products, brands, or regions — each with its own branding, domain, and article set.",
    accent: "#FF5A36",
  },
  {
    icon: Star,
    title: "Article CSAT",
    desc: "\"Was this helpful?\" prompts on every article. Negative responses surface articles that need improvement before they drive support tickets.",
    accent: "#F59E0B",
  },
  {
    icon: MessageSquare,
    title: "Related Articles Engine",
    desc: "Automatically surface related content at the bottom of every article. Keep customers reading — and keep them out of your inbox.",
    accent: "#0EA5A0",
  },
];

const ANALYTICS_ITEMS = [
  {
    metric: "Most Viewed",
    desc: "See which articles get the most traffic to understand what customers struggle with most.",
  },
  {
    metric: "Zero-Result Searches",
    desc: "Queries that return no results reveal gaps in your knowledge base — content opportunities hiding in plain sight.",
  },
  {
    metric: "Article CSAT Rate",
    desc: "Per-article helpfulness scores highlight content that needs a rewrite before it drives tickets.",
  },
  {
    metric: "Deflection Rate",
    desc: "Track how many customers resolve their questions in the help center without opening a conversation.",
  },
];

const LANGUAGES = [
  "English", "Spanish", "French", "German", "Portuguese",
  "Japanese", "Korean", "Dutch", "Italian", "Polish",
];

export default function KnowledgeBasePage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          borderBottom: "2px solid var(--nb-border)",
          paddingTop: 96,
          paddingBottom: 80,
        }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}
        />
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Copy */}
            <div>
              <div className="eyebrow anim-fade-up">
                <BookOpen size={12} />
                Knowledge Base
              </div>
              <h1
                className="anim-fade-up delay-100"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  lineHeight: 1,
                  marginBottom: 24,
                  letterSpacing: "-0.04em",
                }}
              >
                Self-service that{" "}
                <em
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--nb-teal)",
                    fontWeight: 700,
                  }}
                >
                  actually works
                </em>
              </h1>
              <p
                className="anim-fade-up delay-200"
                style={{
                  fontSize: "1.125rem",
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.7,
                  maxWidth: 500,
                  marginBottom: 40,
                }}
              >
                Build a fully branded help center with articles, folders, and
                multi-portal support. Every article is SEO-optimized and searchable
                by Captain AI — so customers find answers before they open a ticket.
              </p>
              <div
                className="anim-fade-up delay-300"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <Link href="/contact" className="btn-primary">
                  Get started <ArrowRight size={16} />
                </Link>
                <Link href="/features" className="btn-secondary">
                  All features <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hero SVG — knowledge base portal */}
            <div className="anim-fade-up delay-200">
              <svg
                viewBox="0 0 480 420"
                fill="none"
                style={{
                  width: "100%",
                  maxWidth: 480,
                  filter: "drop-shadow(6px 6px 0px #0A0A0A)",
                }}
              >
                {/* Portal card */}
                <rect x="0" y="0" width="480" height="420" rx="4" fill="#FAF8F3" stroke="#0A0A0A" strokeWidth="2" />
                {/* Header bar */}
                <rect x="0" y="0" width="480" height="56" rx="4" fill="#0EA5A0" stroke="#0A0A0A" strokeWidth="2" />
                <text x="24" y="24" fill="#fff" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.05em">HELP CENTER</text>
                <text x="24" y="44" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="sans-serif">How can we help you today?</text>
                {/* Search bar */}
                <rect x="90" y="64" width="300" height="32" rx="4" fill="#fff" stroke="#0A0A0A" strokeWidth="1.5" />
                <text x="108" y="84" fill="#9CA3AF" fontSize="10" fontFamily="sans-serif">Search the knowledge base...</text>
                <circle cx="372" cy="80" r="8" fill="#0EA5A0">
                  <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Category tiles */}
                {[
                  { x: 16, y: 108, label: "Getting Started", icon: "🚀", count: "12 articles" },
                  { x: 168, y: 108, label: "Billing & Plans", icon: "💳", count: "8 articles" },
                  { x: 320, y: 108, label: "Integrations", icon: "🔌", count: "16 articles" },
                  { x: 16, y: 188, label: "API Reference", icon: "⚡", count: "24 articles" },
                  { x: 168, y: 188, label: "Security", icon: "🔒", count: "6 articles" },
                  { x: 320, y: 188, label: "Troubleshooting", icon: "🔧", count: "20 articles" },
                ].map((cat, i) => (
                  <g key={cat.label}>
                    <rect
                      x={cat.x}
                      y={cat.y}
                      width={136}
                      height={68}
                      rx="3"
                      fill="#F0EDE4"
                      stroke="#C8C3B5"
                      strokeWidth="1.5"
                    >
                      <animate
                        attributeName="fill"
                        values="#F0EDE4;#E6E1D4;#F0EDE4"
                        dur={`${3 + i * 0.5}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.3}s`}
                      />
                    </rect>
                    <text x={cat.x + 12} y={cat.y + 24} fontSize="16" fontFamily="sans-serif">{cat.icon}</text>
                    <text x={cat.x + 12} y={cat.y + 44} fill="#0A0A0A" fontSize="10" fontWeight="700" fontFamily="sans-serif">{cat.label}</text>
                    <text x={cat.x + 12} y={cat.y + 58} fill="#7A746A" fontSize="9" fontFamily="sans-serif">{cat.count}</text>
                  </g>
                ))}

                {/* Divider */}
                <line x1="16" y1="270" x2="464" y2="270" stroke="#C8C3B5" strokeWidth="1" />

                {/* Recent articles */}
                <text x="16" y="290" fill="#7A746A" fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.08em">POPULAR ARTICLES</text>
                {[
                  { title: "How to set up live chat on your website", views: "2.4k views" },
                  { title: "Connecting your WhatsApp Business account", views: "1.8k views" },
                  { title: "Understanding CSAT scores and reports", views: "1.2k views" },
                  { title: "Setting up automated responses with Captain AI", views: "980 views" },
                ].map((art, i) => (
                  <g key={art.title}>
                    <rect x="16" y={300 + i * 26} width="440" height="22" rx="2" fill="transparent" />
                    <circle cx="28" cy={312 + i * 26} r="3" fill="#0EA5A0" />
                    <text x="40" y={316 + i * 26} fill="#0A1628" fontSize="10" fontFamily="sans-serif">{art.title}</text>
                    <text x="400" y={316 + i * 26} fill="#7A746A" fontSize="9" fontFamily="sans-serif" textAnchor="end">{art.views}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES ────────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">Core Capabilities</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
            }}
          >
            Everything a modern{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              help center
            </em>{" "}
            needs
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            From article creation to multi-portal management, HaloDesk&apos;s knowledge
            base is built to scale with your product — and reduce your ticket volume
            automatically.
          </p>
          <div className="cards-3">
            {FEATURES_CORE.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="nb-card anim-fade-up"
                  style={{ padding: 24, animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className="feature-icon"
                    style={{ marginBottom: 16, background: f.accent }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      marginBottom: 8,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--nb-ink-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CAPTAIN AI INTEGRATION ───────────────────────────────── */}
      <section
        className="section"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div className="section-label">Captain AI Integration</div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  marginBottom: 20,
                  lineHeight: 1.1,
                }}
              >
                Your knowledge base{" "}
                <em
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--nb-orange)",
                  }}
                >
                  powers the AI
                </em>
              </h2>
              <p
                style={{
                  color: "var(--nb-ink-muted)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Captain AI searches your knowledge base in real time to resolve
                incoming conversations. Every article you publish immediately expands
                Captain&apos;s resolution capability — no retraining required.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  "AI searches articles to generate accurate responses",
                  "Cites source article in every AI reply",
                  "Falls back gracefully to agent handoff when unsure",
                  "Article quality directly improves AI resolution rate",
                ].map((item) => (
                  <li
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "var(--nb-teal)",
                        borderRadius: 2,
                        border: "1.5px solid var(--nb-border)",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                      }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span
                      style={{
                        color: "var(--nb-ink-muted)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Multi-language visual */}
            <div>
              <div
                className="nb-card"
                style={{
                  padding: 28,
                  background: "var(--nb-surface)",
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "1rem",
                    marginBottom: 8,
                  }}
                >
                  Multilingual Article Support
                </div>
                <p
                  style={{
                    color: "var(--nb-ink-muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  Publish articles in multiple languages and serve the right locale
                  automatically based on the customer&apos;s browser settings or portal
                  configuration.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {LANGUAGES.map((lang, i) => (
                    <span
                      key={lang}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "4px 10px",
                        background:
                          i < 3 ? "var(--nb-teal)" : "var(--nb-bg)",
                        color: i < 3 ? "#fff" : "var(--nb-ink-muted)",
                        border: "1.5px solid var(--nb-border)",
                        borderRadius: 2,
                        fontSize: "0.8125rem",
                        fontWeight: i < 3 ? 700 : 500,
                        boxShadow: "2px 2px 0px var(--nb-border)",
                      }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANALYTICS ────────────────────────────────────────────── */}
      <section
        className="section section--surface"
        style={{ borderBottom: "2px solid var(--nb-border)" }}
      >
        <div className="container">
          <div className="section-label">Analytics</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: 16,
            }}
          >
            Measure what your{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              content
            </em>{" "}
            is doing
          </h2>
          <p
            style={{
              color: "var(--nb-ink-muted)",
              maxWidth: 600,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            HaloDesk tracks every interaction with your help center — so you always
            know which articles deflect tickets, which ones need updating, and what
            topics your customers can&apos;t find answers to.
          </p>
          <div className="cards-2" style={{ gap: 20 }}>
            {ANALYTICS_ITEMS.map((item, i) => (
              <div
                key={item.metric}
                className="nb-card anim-fade-up"
                style={{ padding: 24, animationDelay: `${i * 80}ms` }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <BarChart3 size={18} color="var(--nb-teal)" />
                  <strong style={{ fontSize: "0.9375rem" }}>{item.metric}</strong>
                </div>
                <p
                  style={{
                    color: "var(--nb-ink-muted)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--nb-invert)",
          borderTop: "2px solid var(--nb-border)",
        }}
      >
        <div
          className="dot-grid"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{ textAlign: "center", position: "relative" }}
        >
          <div
            className="eyebrow anim-fade-up"
            style={{ margin: "0 auto 24px" }}
          >
            <Search size={12} />
            Deflect Tickets
          </div>
          <h2
            className="anim-fade-up delay-100"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "var(--nb-bg)",
              marginBottom: 20,
            }}
          >
            A help center that{" "}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--nb-teal)",
              }}
            >
              actually deflects
            </em>
          </h2>
          <p
            className="anim-fade-up delay-200"
            style={{
              color: "rgba(250,248,243,0.7)",
              maxWidth: 520,
              margin: "0 auto 40px",
              lineHeight: 1.7,
              fontSize: "1.0625rem",
            }}
          >
            Publish articles once. Captain AI uses them to resolve conversations
            automatically — reducing ticket volume without extra headcount.
          </p>
          <div
            className="anim-fade-up delay-300"
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-invert">
              Talk to sales <ArrowRight size={16} />
            </Link>
            <Link href="/features" className="btn-secondary">
              Explore all features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
