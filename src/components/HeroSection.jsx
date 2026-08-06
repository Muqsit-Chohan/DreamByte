import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─────────────────────────────────────────────────────────
// CINEMATIC INLINE STYLES (DreamByte Nexora OS edition)
// ─────────────────────────────────────────────────────────
const HERO_STYLES = `
@keyframes hero-heartbeat {
  0%,100% { transform: scale(1);   filter: drop-shadow(0 0 4px rgba(0,211,189,.4)); }
  20%,40% { transform: scale(1.10); filter: drop-shadow(0 0 10px rgba(0,211,189,.7)); }
  25%     { transform: scale(1);   }
}
@keyframes hero-ping-ring {
  0%   { transform: scale(1);   opacity: 0.8; }
  100% { transform: scale(2.2); opacity: 0; }
}

.animate-hero-heartbeat { animation: hero-heartbeat 2.2s cubic-bezier(.25,1,.5,1) infinite; }
.animate-hero-ping      { animation: hero-ping-ring 1.6s ease-out infinite; }

/* Hero center glow */
.hero-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(56, 189, 248, 0.30) 0%,
    rgba(13, 148, 136, 0.20) 38%,
    transparent 72%
  );

}
.dark .hero-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 211, 189, 0.20) 0%,
    rgba(99, 102, 241, 0.14) 38%,
    transparent 72%
  );
}
.light .hero-aurora {
  opacity: 0.98;
  filter: blur(92px) saturate(1.15);
  mix-blend-mode: screen;
}
.dark .hero-aurora {
  opacity: 0.82;
}

/* Giant ghost text */
.hero-giant-text { 
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(3rem, 13vw, 13rem);
  line-height: .82;
  font-weight: 900;
  letter-spacing: -.05em;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(15, 23, 42, 0.14);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.14) 0%, rgba(13, 148, 136, 0.06) 50%, transparent 85%);
  -webkit-background-clip: text;
  background-clip: text;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
}
.dark .hero-giant-text {
  -webkit-text-stroke: 1px rgba(255,255,255,.06);
  background: linear-gradient(180deg, rgba(255,255,255,.12) 10%, transparent 75%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic gradient headline */
.hero-text-glow {
  background: linear-gradient(180deg, #0f172a 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.dark .hero-text-glow {
  background: linear-gradient(180deg, #ffffff 30%, rgba(255,255,255,.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 22px rgba(255,255,255,.12));
}

/* Glass pills */
.dark .hero-glass-pill {
  background: linear-gradient(145deg, rgba(255,255,255,.05) 0%, rgba(255,255,255,.02) 100%);
  box-shadow:
    0 10px 28px -10px rgba(0,0,0,.6),
    inset 0 1px 1px rgba(255,255,255,.08),
    inset 0 -1px 2px rgba(0,0,0,.5);
  border: 1px solid rgba(255,255,255,.09);
}
.hero-glass-pill {
  background: linear-gradient(145deg, rgba(0,0,0,.03) 0%, rgba(0,0,0,.01) 100%);
  box-shadow:
    0 10px 28px -10px rgba(0,0,0,.1),
    inset 0 1px 1px rgba(0,0,0,.03),
    inset 0 -1px 2px rgba(0,0,0,.05);
  border: 1px solid rgba(0,0,0,.05);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition: all .4s cubic-bezier(.16,1,.3,1);
}

`;

// ─────────────────────────────────────────────────────────
// MAGNETIC BUTTON — zero-dep, GSAP powered
// ─────────────────────────────────────────────────────────
function MagneticButton({
  className,
  children,
  as: Tag = "button",
  onClick,
  href,
  target,
  rel,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      gsap.to(el, {
        x: x * 0.38,
        y: y * 0.38,
        rotateX: -y * 0.14,
        rotateY: x * 0.14,
        scale: 1.06,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1,.3)",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onLeave, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onLeave);
    };
  }, []);

  const props = { ref, className: cn("cursor-pointer", className), onClick };
  if (Tag === "a") {
    props.href = href;
    props.target = target;
    props.rel = rel;
  }

  return <Tag {...props}>{children}</Tag>;
}

// ─────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────
export default function HeroSection({ setCurrentPage, theme, toggleTheme }) {
  const sectionRef = useRef(null);
  const giantRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(
        [
          headlineRef.current,
          subRef.current,
          ctaRef.current,
        ],
        { opacity: 0, y: 40 },
      );
      gsap.set(giantRef.current, { opacity: 0, scale: 0.85 });

      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(
        giantRef.current,
        { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" },
        0,
      )
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.38)
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.52)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.64);

      // Scroll parallax on giant text
      gsap.to(giantRef.current, {
        y: "18vh",
        x: "-10vw", // Moves the text to the left as it scrolls down
        rotate: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HERO_STYLES }} />

      <section
        ref={sectionRef}
        id="home"
        className="relative isolate min-h-screen w-full overflow-hidden bg-white dark:bg-[#080d11] flex flex-col"
      >
        <div className="hero-aurora fixed left-1/2 top-1/2 h-[58vh] w-[72vw] rounded-[50%] blur-[96px] z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
         {/* ── Side accent lines ── */}
        <div className="absolute left-0 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-teal-600/30 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-1/2 w-px h-40 bg-gradient-to-b from-transparent via-purple-600/30 to-transparent pointer-events-none" />

        {/* ── Giant ghost background text ── */}
        <div
          ref={giantRef}
          className="hero-giant-text absolute left-1/2 -translate-x-1/2 bottom-[2vh] z-[1]"
          aria-hidden="true"
        >
          DREAMBYTE
        </div>

        {/* ── Diagonal Marquee Strip ── */}
        {/* <div className="absolute top-[200px] left-0 w-full z-10 overflow-hidden border-y border-gray-300 dark:border-white/[.06] bg-white/60 dark:bg-[#080d11]/60 backdrop-blur-md py-3 -rotate-[1.2deg] scale-110 shadow-lg dark:shadow-2xl pointer-events-none">
          <div className="flex w-max animate-hero-marquee space-x-10 text-slate-500 dark:text-white/40">
            <TechStackMarqueeItem />
            <TechStackMarqueeItem />
          </div>
        </div> */}

        {/* ── Main Content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 sm:px-8 pt-32 pb-20 text-center max-w-6xl mx-auto w-full">
          {/* Announcement badge */}
          {/* <div ref={badgeRef}>
            <MagneticButton
              as="a"
              href="https://nexsoraos.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-glass-pill inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-hero-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              <span className="text-white/50 text-xs font-semibold">
                By DreamByte
              </span>
              <span className="text-white/20 text-xs">•</span>
              <span className="text-teal-300 text-xs font-bold animate-hero-heartbeat inline-block">
                Nexsora OS v2.0 is Live ✦
              </span>
            </MagneticButton>
          </div> */}

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="hero-text-glow text-3xl sm:text-6xl lg:text-6xl font-extrabold tracking-[-0.05em] leading-[.92] max-w-4xl font-heading"
          >
           We Engineer Smart AI, Software & Immersive  {" "} <br/>
            <span className="bg-gradient-to-r from-teal-600 bg-clip-text text-transparent">
              Games
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            ref={subRef}
            className="mt-6 text-base sm:text-md uppercase text-gray-700 dark:text-white/45 max-w-2xl leading-relaxed font-medium"
          >
            Powered by our in-house innovation lab and custom client engineering
            team.{" "}
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <MagneticButton
              as="a"
              href="#projects"
              data-cursor-text="EXPLORE"
              className="px-9 py-4 rounded-full text-slate-800 dark:text-white/80 font-bold text-sm sm:text-base flex items-center gap-2 bg-white/80 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none transition-all"
            >
              <Play className="w-4 h-4 text-teal-600 dark:text-teal-400 fill-teal-600/20 dark:fill-teal-400/20" />
              <span>Explore Products</span>
            </MagneticButton>
          </div>

        </div>
      </section>
    </>
  );
}
