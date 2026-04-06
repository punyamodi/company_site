import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with AI Platform Agency, including timelines, pricing, communication, and delivery.",
};

const FAQS = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We build websites, web apps, mobile apps, AI agents, customer chatbots, and internal platforms. We work with startups, growing teams, and enterprise organisations.",
  },
  {
    question: "How quickly can a project start?",
    answer:
      "Most projects start within one to two weeks after discovery and scope alignment. For urgent timelines, we can prioritise fast kickoff with a dedicated squad.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "We typically work in three models: fixed-scope project, sprint-based time and materials, or dedicated team. The right model depends on your scope clarity and delivery speed requirements.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. We often join active projects, improve architecture, ship new features, and stabilise delivery without forcing a full rewrite.",
  },
  {
    question: "How do you handle communication?",
    answer:
      "You get a dedicated point of contact, weekly demos, and clear progress updates. We prefer transparent async communication with fast turnaround on decisions and blockers.",
  },
  {
    question: "Do you support products after launch?",
    answer:
      "Yes. We provide post-launch support, optimisation, and ongoing feature development so your product continues to improve after release.",
  },
  {
    question: "Can you sign NDA and assign IP?",
    answer:
      "Yes. We support mutual NDAs and full IP assignment. Enterprise legal and procurement workflows are part of our standard process.",
  },
  {
    question: "How do we get started?",
    answer:
      "Share your goals, constraints, and target outcomes through our contact page. We will respond within one business day and propose next steps.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="grid-bg" />
        <div className="container--narrow" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ display: "inline-flex" }}>FAQ</div>
          <h1 style={{ fontSize: "clamp(38px,5.2vw,64px)", letterSpacing: "-0.045em", marginBottom: 18, lineHeight: 1 }}>
            Common questions,{" "}
            <span style={{ fontFamily: "var(--font-fraunces,serif)", fontStyle: "italic", color: "var(--nb-ink-muted)" }}>
              clear answers.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--nb-ink-muted)", lineHeight: 1.7, maxWidth: 680 }}>
            Everything buyers usually ask before starting. If you need a direct answer for your specific case, contact us and we will reply within one business day.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container--narrow" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((item) => (
            <article key={item.question} className="nb-card" style={{ padding: 24 }}>
              <h2 style={{ fontSize: 20, letterSpacing: "-0.03em", marginBottom: 8 }}>{item.question}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--nb-ink-muted)" }}>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--invert" style={{ position: "relative" }}>
        <div className="container--tight" style={{ textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.045em", color: "var(--nb-bg)", marginBottom: 14, lineHeight: 1 }}>
            Still have questions?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(250,248,243,0.72)", marginBottom: 30, lineHeight: 1.65 }}>
            Tell us what you are planning and we will recommend the right path.
          </p>
          <a href={`${BASE}/contact/`} className="btn-primary">
            Talk to Our Team <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
