"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "section, .nb-card, .glass-card, [data-reveal], .reveal-card";
const FLOAT_SELECTOR  = "[data-float], .hero-visual, .float, .floating";

export function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // ── 1. Scroll-reveal ──────────────────────────────────────
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    ).filter((el) => el.dataset.reveal !== "off");

    revealEls.forEach((el, i) => {
      el.classList.add("scroll-reveal");
      if (!el.style.getPropertyValue("--reveal-delay")) {
        el.style.setProperty("--reveal-delay", `${(i % 8) * 65}ms`);
      }
    });

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("in-view");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    // ── 2. Stagger grid children within sections ─────────────
    const gridEls = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".cards-2 > *, .cards-3 > *, .cards-4 > *, [data-stagger-grid] > *, " +
        ".hub-product-grid > *, .hub-platform-grid > *, " +
        ".ig-features-grid > *, .cv-cards > *, .hd-features-grid > *"
      )
    );
    gridEls.forEach((el, i) => {
      el.classList.add("stagger-child");
      el.style.setProperty("--stagger-delay", `${(i % 6) * 90}ms`);
    });

    const staggerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("in-view");
            staggerObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );
    gridEls.forEach((el) => staggerObs.observe(el));

    // ── 3. Float animations ───────────────────────────────────
    const floatEls = Array.from(
      document.querySelectorAll<HTMLElement>(FLOAT_SELECTOR)
    ).filter((el) => el.dataset.float !== "off");

    floatEls.forEach((el, i) => {
      const cls = i % 3 === 0 ? "float-soft" : i % 3 === 1 ? "float-soft-slow" : "float-rotate";
      el.classList.add(cls);
      if (!el.style.getPropertyValue("--float-delay")) {
        el.style.setProperty("--float-delay", `${(i % 5) * 0.4}s`);
      }
    });

    // ── 4. Card 3-D tilt on hover ─────────────────────────────
    const tiltEls = Array.from(
      document.querySelectorAll<HTMLElement>(".nb-card:not([data-tilt=off]), [data-tilt]")
    );
    type Handler = (e: MouseEvent) => void;
    const tiltCleanup: Array<[HTMLElement, Handler, Handler]> = [];

    tiltEls.forEach((el) => {
      const onMove: Handler = (e) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
        const y = ((e.clientY - r.top)  / r.height - 0.5) * 10;
        el.style.transform  = `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.015)`;
        el.style.transition = "transform 0.08s linear";
        el.style.zIndex     = "2";
      };
      const onLeave: Handler = () => {
        el.style.transform  = "";
        el.style.transition = "transform 0.5s cubic-bezier(.22,1,.36,1)";
        el.style.zIndex     = "";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      tiltCleanup.push([el, onMove, onLeave]);
    });

    // ── 5. Magnetic hover on primary CTAs ────────────────────
    const magnetEls = Array.from(
      document.querySelectorAll<HTMLElement>(".btn-primary, [data-magnet]")
    );
    const magnetCleanup: Array<[HTMLElement, Handler, Handler]> = [];

    magnetEls.forEach((el) => {
      const onMove: Handler = (e) => {
        const r  = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width  / 2)) * 0.28;
        const dy = (e.clientY - (r.top  + r.height / 2)) * 0.28;
        el.style.transform  = `translate(${dx}px, ${dy}px)`;
        el.style.transition = "transform 0.12s linear";
      };
      const onLeave: Handler = () => {
        el.style.transform  = "";
        el.style.transition = "transform 0.5s cubic-bezier(.22,1,.36,1)";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      magnetCleanup.push([el, onMove, onLeave]);
    });

    // ── 6. Animated number counters ──────────────────────────
    const counterEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter]")
    );
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el        = entry.target as HTMLElement;
          const end       = parseFloat(el.dataset.counter ?? "0");
          const suffix    = el.dataset.counterSuffix ?? "";
          const decimals  = parseInt(el.dataset.counterDecimals ?? "0");
          const duration  = 1800;
          let start: number | null = null;

          const tick = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const v = 1 - Math.pow(1 - p, 3); // ease-out-cubic
            el.textContent = (v * end).toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counterEls.forEach((el) => counterObs.observe(el));

    return () => {
      revealObs.disconnect();
      staggerObs.disconnect();
      counterObs.disconnect();
      tiltCleanup.forEach(([el, m, l]) => {
        el.removeEventListener("mousemove", m);
        el.removeEventListener("mouseleave", l);
      });
      magnetCleanup.forEach(([el, m, l]) => {
        el.removeEventListener("mousemove", m);
        el.removeEventListener("mouseleave", l);
      });
    };
  }, []);

  return null;
}
