"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Code2, ArrowRight, BarChart3, Database, Shield, Zap } from "lucide-react";

export default function CodeInterpreterPage() {
  return (
    <div style={{ background: "var(--nb-bg)", minHeight: "100vh", color: "var(--nb-ink)" }}>
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="eyebrow">Code Interpreter</div>
              <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 20 }}>
                Agents that<br />
                <span style={{ fontFamily: "var(--font-fraunces, serif)", fontStyle: "italic", fontWeight: 300 }}>compute,</span><br />not just generate.
              </h1>
              <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, marginBottom: 36 }}>
                Give your agents the ability to execute Python in a secure, sandboxed environment. Analyze uploaded datasets, render charts, perform calculations, and generate output files — all within the conversation.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Demo <ArrowRight size={16} /></Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="code-block">
                <div className="code-block__bar">
                  <div className="code-dot code-dot--r" /><div className="code-dot code-dot--y" /><div className="code-dot code-dot--g" />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>execution_context.py</span>
                </div>
                <div className="code-block__body">
                  <pre>{`<span class="tok-keyword">import</span> pandas <span class="tok-keyword">as</span> pd
<span class="tok-keyword">import</span> matplotlib.pyplot <span class="tok-keyword">as</span> plt

<span class="tok-comment"># Analyze uploaded CSV</span>
df = pd.read_csv(<span class="tok-string">"sales_q4.csv"</span>)

<span class="tok-comment"># Group by region, compute totals</span>
summary = df.groupby(<span class="tok-string">"region"</span>)[<span class="tok-string">"revenue"</span>].sum()

<span class="tok-comment"># Render bar chart</span>
summary.plot(kind=<span class="tok-string">"bar"</span>, color=<span class="tok-string">"#F59E0B"</span>)
plt.title(<span class="tok-string">"Q4 Revenue by Region"</span>)
plt.savefig(<span class="tok-string">"chart.png"</span>, dpi=<span class="tok-number">150</span>)

<span class="tok-comment"># → Chart embedded in response</span>`}</pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="cards-2">
            {[
              { icon: Database, title: "Data Analysis on Demand", desc: "Upload CSV, Excel, or JSON files directly in chat. Agents parse, analyze, and compute statistics without leaving the conversation." },
              { icon: BarChart3, title: "Dynamic Chart Rendering", desc: "Generate matplotlib, seaborn, or plotly visualizations from your data and display them inline — no separate tool required." },
              { icon: Shield, title: "Secure Sandboxed Execution", desc: "Python runs in an isolated container environment. No network access, no filesystem escape, no risk to your infrastructure." },
              { icon: Zap, title: "File Generation", desc: "Agents can generate processed output files — cleaned datasets, generated reports, converted formats — and make them available for download." },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="nb-card" style={{ padding: 32 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: "var(--nb-violet)", border: "2px solid var(--nb-border)", boxShadow: "var(--shadow-brutal-sm)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--nb-ink-muted)", lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--invert">
        <div className="container container--tight" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--nb-bg)", marginBottom: 20 }}>
            Ready for data-driven agents?
          </h2>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", marginTop: 32 }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
