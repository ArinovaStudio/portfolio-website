"use client";

import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (!loaderRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Step 1: Text + line fade in
    tl.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    });

    tl.from(
      lineRef.current,
      {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
      },
      "<"
    );

    // Step 2: Hold briefly
    tl.to({}, { duration: 0.5 });

    // Step 3: Split loader (top moves up, bottom moves down)
    tl.to(
      topRef.current,
      { y: "-100%", duration: 1, ease: "power4.inOut" },
      "<"
    );
    tl.to(bottomRef.current, { y: "100%", duration: 1, ease: "power4.inOut" }, "<");
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* Top Half */}
      <div
        ref={topRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-neutral-900"
      />

      {/* Bottom Half */}
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-neutral-900"
      />

      {/* Center Text */}
      <div className="z-10 flex flex-col items-center gap-4">
        <h1
          ref={textRef}
          className="text-3xl md:text-5xl text-white font-space tracking-wide"
        >
          Crafting Tomorrow
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
