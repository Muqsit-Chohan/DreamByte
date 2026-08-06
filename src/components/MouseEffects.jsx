import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseEffects({ theme }) {
 const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring/follower
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on non-touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

    };

    const handleMouseDown = (e) => {
      setIsClicked(true);
      // Spawn ripple
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: 40 + Math.random() * 20,
        alpha:
          theme === "light"
            ? 0.6 // Slightly less opaque for light theme ripples
            : 0.8,
      });
    };

    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track hovered elements
    const handleMouseOver = (e) => {
      const target = e.target.closest(
        'a, button, input, textarea, [role="button"], .interactive-hover, .glass-panel-hover, card',
      );
      if (target) {
        setIsHovered(true);
        const dataText = target.getAttribute("data-cursor-text");
        if (dataText) {
          setHoverText(dataText);
        } else if (
          target.tagName === "BUTTON" ||
          target.getAttribute("role") === "button"
        ) {
          setHoverText("");
        } else {
          setHoverText("");
        }
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const handleScroll = () => {
      setIsHovered(false);
      setHoverText("");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY, theme]);

  // Canvas animation loop for click ripples
  useEffect(() => {
    let animationFrameId;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render ripples
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += (r.maxRadius - r.radius) * 0.15;
        r.alpha -= 0.025;

        if (r.alpha <= 0) {
          ripplesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle =
          theme === "light"
            ? `rgba(0, 150, 136, ${r.alpha})`
            : `rgba(0, 211, 189, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = theme === "light" ? 8 : 12;
        ctx.shadowColor = theme === "light" ? "rgba(0, 150, 136, 0.7)" : "#00d3bd";
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  if (!isVisible) return null;

  return (
    <>
      {/* Canvas layer for click ripples */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />

      {/* Primary Inner Glow Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference dark:mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#a855f7" : "#00d3bd",
          boxShadow: isHovered
            ? "0 0 20px #a855f7, 0 0 35px #a855f7"
            : "0 0 15px #00d3bd, 0 0 25px #00d3bd",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-3 h-3 bg-slate-900 dark:bg-white rounded-full opacity-90" />
      </motion.div>

      {/* Outer Spring Follower Ring / Glow Aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-teal-500/60 dark:border-teal-400/40 bg-teal-500/20 dark:bg-teal-400/10 backdrop-blur-[1px] flex items-center justify-center text-xs font-semibold text-slate-900 dark:text-white tracking-wider"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (hoverText ? 80 : 54) : isClicked ? 24 : 38,
          height: isHovered ? (hoverText ? 80 : 54) : isClicked ? 24 : 38,
          borderColor:
            theme === "light"
              ? isHovered ? "rgba(168, 85, 247, 0.9)" : "rgba(0, 211, 189, 0.7)"
              : isHovered ? "rgba(168, 85, 247, 0.7)" : "rgba(0, 211, 189, 0.4)",
          backgroundColor:
            theme === "light"
              ? isHovered ? "rgba(168, 85, 247, 0.25)" : "rgba(0, 211, 189, 0.15)"
              : isHovered ? "rgba(168, 85, 247, 0.15)" : "rgba(0, 211, 189, 0.06)",
          boxShadow:
            theme === "light"
              ? isHovered
                ? "0 0 30px rgba(168, 85, 247, 0.6), inset 0 0 15px rgba(168, 85, 247, 0.3)"
                : "0 0 20px rgba(0, 211, 189, 0.4), inset 0 0 10px rgba(0, 211, 189, 0.2)"
              : isHovered
                ? "0 0 30px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.2)"
                : "0 0 20px rgba(0, 211, 189, 0.25), inset 0 0 10px rgba(0, 211, 189, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] uppercase font-bold text-teal-600 dark:text-teal-300 drop-shadow-md select-none px-1 text-center"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
