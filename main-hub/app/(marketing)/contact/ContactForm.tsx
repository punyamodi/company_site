"use client";

import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="nb-card" style={{ padding: 40 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8 }}>Request a Demo</h2>
      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", marginBottom: 28 }}>
        We typically respond within one business day.
      </p>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
        onSubmit={(e) => e.preventDefault()}
      >
        {[
          { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
          { id: "email", label: "Work Email", type: "email", placeholder: "jane@company.com" },
          { id: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
          { id: "role", label: "Job Title", type: "text", placeholder: "CTO / VP Engineering / etc." },
        ].map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 6 }}
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              style={{
                width: "100%", padding: "10px 14px",
                border: "2px solid var(--nb-border)", borderRadius: "var(--radius)",
                background: "var(--nb-bg)", fontSize: 14, fontFamily: "var(--font-bricolage,sans-serif)",
                color: "var(--nb-ink)", outline: "none", transition: "box-shadow .15s",
              }}
              onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.boxShadow = "var(--shadow-brutal-sm)"; }}
              onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.boxShadow = "none"; }}
            />
          </div>
        ))}
        <div>
          <label
            htmlFor="products"
            style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 6 }}
          >
            Products of Interest
          </label>
          <select
            id="products"
            style={{ width: "100%", padding: "10px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-bg)", fontSize: 14, fontFamily: "var(--font-bricolage,sans-serif)", color: "var(--nb-ink)", outline: "none" }}
          >
            <option value="">Select products...</option>
            <option value="full-suite">Full Suite (All Four Products)</option>
            <option value="infergate">InferGate — AI Gateway</option>
            <option value="converse">Converse — Voice AI</option>
            <option value="halodesk">HaloDesk — Support Intelligence</option>
            <option value="onyx">Onyx — Enterprise Knowledge AI</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 6 }}
          >
            Tell Us More (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Describe your use case, scale, and any specific requirements..."
            style={{ width: "100%", padding: "10px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-bg)", fontSize: 14, fontFamily: "var(--font-bricolage,sans-serif)", color: "var(--nb-ink)", outline: "none", resize: "vertical" }}
          />
        </div>
        <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
          Request Demo <ArrowRight size={15} />
        </button>
      </form>
    </div>
  );
}
