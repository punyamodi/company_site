"use client";

import { FormEvent, useMemo, useState } from "react";
import { AlertCircle, ArrowRight, MailCheck } from "lucide-react";

type FormDataState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  service: string;
  message: string;
};

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "Web / App Development", label: "Web / App Development" },
  { value: "AI Agents & Automation", label: "AI Agents & Automation" },
  { value: "Customer Chatbot", label: "Customer Chatbot" },
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "E-commerce Development", label: "E-commerce Development" },
  { value: "UI / UX Design", label: "UI / UX Design" },
  { value: "AI Integration into Existing Product", label: "AI Integration into Existing Product" },
  { value: "Dedicated Engineering Team", label: "Dedicated Engineering Team" },
  { value: "Not sure - need advice", label: "Not sure - need advice" },
];

const initialState: FormDataState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  service: "",
  message: "",
};

function fieldLabelStyle() {
  return {
    display: "block",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: ".08em",
    textTransform: "uppercase" as const,
    color: "var(--nb-ink)",
    marginBottom: 6,
  };
}

function inputStyle() {
  return {
    width: "100%",
    padding: "10px 14px",
    border: "2px solid var(--nb-border)",
    borderRadius: "var(--radius)",
    background: "var(--nb-bg)",
    fontSize: 14,
    fontFamily: "var(--font-bricolage,sans-serif)",
    color: "var(--nb-ink)",
    outline: "none",
  };
}

function createMailtoLink(data: FormDataState) {
  const subject = `Project enquiry - ${data.service || "General enquiry"}`;
  const body = [
    "New project enquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "N/A"}`,
    `Budget: ${data.budget || "Not specified"}`,
    `Service: ${data.service || "Not selected"}`,
    "",
    "Project details:",
    data.message,
  ].join("\n");

  return `mailto:hello@aiplatform.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataState>(initialState);
  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(
    () => Boolean(formData.name.trim() && formData.email.trim() && formData.message.trim()),
    [formData],
  );

  const updateField = (key: keyof FormDataState, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (error) setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      setError("Please complete your name, email, and project details.");
      return;
    }

    window.location.href = createMailtoLink(formData);
    setSubmitted(true);
  };

  return (
    <div className="nb-card" style={{ padding: 40 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8 }}>
        Start a Conversation
      </h2>
      <p style={{ fontSize: 14, color: "var(--nb-ink-muted)", marginBottom: 8 }}>
        Share your project details and we will prepare a tailored response.
      </p>
      <p style={{ fontSize: 12.5, color: "var(--nb-ink-dim)", marginBottom: 28 }}>
        On submit, this opens a pre-filled email draft to <strong style={{ color: "var(--nb-ink)" }}>hello@aiplatform.io</strong>.
      </p>

      <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={fieldLabelStyle()}>
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Jane Smith"
            style={inputStyle()}
          />
        </div>

        <div>
          <label htmlFor="email" style={fieldLabelStyle()}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="jane@company.com"
            style={inputStyle()}
          />
        </div>

        <div>
          <label htmlFor="company" style={fieldLabelStyle()}>
            Company / Organisation
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="Acme Corp"
            style={inputStyle()}
          />
        </div>

        <div>
          <label htmlFor="budget" style={fieldLabelStyle()}>
            Approximate Budget
          </label>
          <input
            id="budget"
            type="text"
            value={formData.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            placeholder="e.g. $10k-$25k"
            style={inputStyle()}
          />
        </div>

        <div>
          <label htmlFor="service" style={fieldLabelStyle()}>
            Service Required
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => updateField("service", e.target.value)}
            style={inputStyle()}
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value || "empty"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" style={fieldLabelStyle()}>
            Tell Us About Your Project *
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Describe what you are building, who it is for, and your timeline."
            style={{ ...inputStyle(), resize: "vertical" as const }}
          />
        </div>

        {error ? (
          <p style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#B42318", fontWeight: 600 }}>
            <AlertCircle size={14} />
            {error}
          </p>
        ) : null}

        {submitted ? (
          <p style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--nb-green)", fontWeight: 700 }}>
            <MailCheck size={14} />
            Draft opened. If your mail client did not open, email hello@aiplatform.io directly.
          </p>
        ) : null}

        <button
          type="submit"
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", marginTop: 8, opacity: canSubmit ? 1 : 0.95 }}
        >
          Open Email Draft <ArrowRight size={15} />
        </button>
      </form>
    </div>
  );
}
