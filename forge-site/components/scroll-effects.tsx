"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "section, .nb-card, .glass-card, [data-reveal]";
const FLOAT_SELECTOR = "[data-float], .hero-visual, .float, .floating";

export function ScrollEffects() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    ).filter((el) => el.dataset.reveal !== "off");

    revealElements.forEach((el, index) => {
      el.classList.add("scroll-reveal");
      if (!el.style.getPropertyValue("--reveal-delay")) {
        el.style.setProperty("--reveal-delay", `${(index % 8) * 70}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );

    revealElements.forEach((el) => observer.observe(el));

    const floating = Array.from(
      document.querySelectorAll<HTMLElement>(FLOAT_SELECTOR),
    ).filter((el) => el.dataset.float !== "off");

    floating.forEach((el, index) => {
      el.classList.add(index % 2 === 0 ? "float-soft" : "float-soft-slow");
      if (!el.style.getPropertyValue("--float-delay")) {
        el.style.setProperty("--float-delay", `${(index % 6) * 0.3}s`);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
