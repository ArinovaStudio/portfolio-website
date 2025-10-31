"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const played = useRef(false); // ensures animation runs only once
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (!loaderRef.current || played.current) return;

    played.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Step 0: show text & line instantly
    gsap.set(textRef.current, { opacity: 1, scale: 1 });
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

    // Step 1: animate line subtly for 2s while text is static
    tl.to(lineRef.current, {
      scaleX: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    // Step 2: fade out text and line before split
    tl.to(
      textRef.current,
      { opacity: 0, scale: 0, duration: 0.3, ease: "power2.inOut" },
      "<"
    );
    tl.to(lineRef.current, { opacity: 0, duration: 0.3 }, "<");

    // Step 3: split loader (top moves up, bottom moves down)
    tl.to(topRef.current, { y: "-100%", duration: 1, ease: "power4.inOut" }, "<");
    tl.to(bottomRef.current, { y: "100%", duration: 1, ease: "power4.inOut" }, "<");
  }, [onComplete]);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 4000)
  }, [])
  return (
    <div
      ref={loaderRef}
      className={`fixed inset-0 z-[9999] overflow-hidden bg-transparent ${visible ? "flex" : "hidden"} flex-col items-center justify-center`}
    >
      {/* Top Half */}
      <div ref={topRef} className="absolute top-0 left-0 w-full h-1/2 bg-neutral-900" />

      {/* Bottom Half */}
      <div ref={bottomRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-neutral-900" />

      {/* Center Text */}
      <div className="z-10 flex flex-col items-center gap-4">
        <h1
          ref={textRef}
          className="text-3xl md:text-5xl text-white font-space tracking-wide"
        >
          Turning Visualization Into Reality.
        </h1>

        {/* Animated Line */}
        <div
          ref={lineRef}
          className="w-40 h-[2px] bg-gradient-to-r from-white/0 via-white to-white/0 rounded"
        />
      </div>
    </div>
  );
}
