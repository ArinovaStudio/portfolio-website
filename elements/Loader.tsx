"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const Preloader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const oRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const letters = loaderRef.current?.querySelectorAll(".letter");

    // Rolling animation for each letter
    gsap.fromTo(
      letters,
      { y: 50, rotationX: -90, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
        onComplete: () => {
          // After rolling animation, split background
          const tl = gsap.timeline({
            onComplete: onFinish,
          });

          tl.to(topRef.current, {
            y: "-100%",
            duration: 1,
            ease: "power2.inOut",
          })
            .to(
              bottomRef.current,
              {
                y: "100%",
                duration: 1,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              oRef.current,
              {
                scale: 120,
                duration: 1,
                ease: "power2.inOut",
                opacity: 0,
              },
              "<"
            );
        },
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Split background */}
      <div
        ref={topRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-black"
      ></div>
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
      ></div>

      {/* Loading text */}
      <div
        ref={loaderRef}
        className="relative z-50 flex text-white text-4xl font-bold space-x-2 font-cursive italic"
      >
        {["L", "o", "a", "d", "i", "n", "g", ".",".","."].map((letter, idx) => (
          <span
            key={idx}
            className={`letter ${letter === "o" ? "o-letter" : ""}`}
            ref={letter === "o" ? oRef : null}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};
