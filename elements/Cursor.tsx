"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useCursor } from "./CursorContext";

export default function CustomCursor() {
  const { type, text, setCursor } = useCursor();
  const [isVisible, setIsVisible] = useState(true);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth motion using springs
  const x = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const y = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const hide = () => setIsVisible(false);
    const show = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, [mouseX, mouseY]);

  // Auto hover detection (reliable, no jitter)
  useEffect(() => {
    let currentHovered: HTMLElement | null = null;

    const handleMove = (e: MouseEvent) => {
      if (type === "label") return; // label mode always overrides

      const el = e.target as HTMLElement;

      const interactive = el.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-hover"
      ) as HTMLElement | null;

      if (interactive) {
        if (currentHovered !== interactive) {
          currentHovered = interactive;
          setCursor("hover");
        }
      } else {
        if (currentHovered) {
          currentHovered = null;
          setCursor("default");
        }
      }
    };

    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, [type, setCursor]);

  // Variants for scaling/morphing
  const variants = {
    default: { scale: 1 },
    hover: { scale: 1 },
    label: { scale: 1 },
  };

  return (
    <motion.div
      style={{
        x,
        y,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        translateX: "-50%",
        translateY: "-50%",
        display: isVisible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 500,
        whiteSpace: "nowrap",
        mixBlendMode: type === "label" ? "normal" : "difference",
      }}
      variants={variants}
      animate={type}
      transition={{ type: "spring", stiffness: 300, damping: 45 }}
      layout
    >
      {type === "label" ? (
        <motion.div
          layout
          className="bg-white/20 backdrop-blur-lg border-2 border-white rounded-full text-2xl font-unbounded font-medium px-6 py-1 pt-1.5"
          transition={{ type: "spring", stiffness: 300, damping: 45 }}
        >
          {text}
        </motion.div>
      ) : (
        <motion.div
          layoutId="innerBall"
          className={`rounded-full bg-white relative`}
          style={{
            width: type === "hover" ? 60 : 30,
            height: type === "hover" ? 60 : 30,
            borderWidth: type === "hover" ? 0 : 1,
            borderStyle: "solid",
            borderColor: "#fff",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 45 }}
        />
      )}
    </motion.div>
  );
}