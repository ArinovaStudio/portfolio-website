"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    // Step 0: Show text instantly
    gsap.set(textRef.current, { opacity: 1, scale: 1 });
    gsap.set(lineRef.current, { scaleX: 1, transformOrigin: "left center" });

    // Wait 2 seconds, then start the animation
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      delay: 2
    });

    // Step 1: Fade out + scale text before split
    tl.to(
      textRef.current,
      { opacity: 0, scale: 0, duration: 0.3, ease: "power2.inOut" }
    );

    tl.to(lineRef.current, { opacity: 0, duration: 0.2 }, "<");

    // Step 2: Split loader (top moves up, bottom moves down)
    tl.to(topRef.current, { y: "-100%", duration: 1, ease: "power4.inOut" }, "<");
    tl.to(bottomRef.current, { y: "100%", duration: 1, ease: "power4.inOut" }, "<");
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] overflow-hidden bg-transparent flex flex-col items-center justify-center"
    >
      {/* Top Half */}
      <div ref={topRef} className="absolute top-0 left-0 w-full h-1/2 bg-neutral-900" />

      {/* Bottom Half */}
      <div ref={bottomRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-neutral-900" />

      {/* Center Text */}
      <div className="z-10 flex flex-col items-center gap-4">
        <h1
          ref={textRef}
          className="text-3xl md:text-5xl text-white font-space tracking-wide text-center"
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