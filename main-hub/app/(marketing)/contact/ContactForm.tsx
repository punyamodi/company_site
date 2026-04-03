"use client";

import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="nb-card" style={{ padding: 40 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8 }}>Start a Conversation</h2>
      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", marginBottom: 28 }}>
        Tell us about your project. We{"'"}ll get back to you within one business day.
      </p>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
        onSubmit={(e) => e.preventDefault()}
      >
        {[
          { id: "name",    label: "Full Name",   type: "text",  placeholder: "Jane Smith" },
          { id: "email",   label: "Email",        type: "email", placeholder: "jane@company.com" },
          { id: "company", label: "Company / Organisation", type: "text", placeholder: "Acme Corp (or leave blank)" },
          { id: "budget",  label: "Approximate Budget", type: "text", placeholder: "e.g. $10k–$25k" },
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
              onBlur={(e)  => { (e.currentTarget as HTMLInputElement).style.boxShadow = "none"; }}
            />
          </div>
        ))}

        <div>
          <label
            htmlFor="service"
            style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 6 }}
          >
            Service Required
          </label>
          <select
            id="service"
            style={{ width: "100%", padding: "10px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-bg)", fontSize: 14, fontFamily: "var(--font-bricolage,sans-serif)", color: "var(--nb-ink)", outline: "none" }}
          >
            <option value="">Select a service...</option>
            <option value="web-app">Web / App Development</option>
            <option value="ai-agent">AI Agents & Automation</option>
            <option value="chatbot">Customer Chatbot</option>
            <option value="mobile">Mobile App Development</option>
            <option value="ecommerce">E-commerce Development</option>
            <option value="ui-ux">UI / UX Design</option>
            <option value="ai-integration">AI Integration into Existing Product</option>
            <option value="dedicated-team">Dedicated Engineering Team</option>
            <option value="not-sure">Not sure — need advice</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            style={{ display: "block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nb-ink)", marginBottom: 6 }}
          >
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Describe what you're building, what problem it solves, and any deadlines or constraints..."
            style={{ width: "100%", padding: "10px 14px", border: "2px solid var(--nb-border)", borderRadius: "var(--radius)", background: "var(--nb-bg)", fontSize: 14, fontFamily: "var(--font-bricolage,sans-serif)", color: "var(--nb-ink)", outline: "none", resize: "vertical" }}
          />
        </div>

        <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
          Send Message <ArrowRight size={15} />
        </button>
      </form>
    </div>
  );
}
