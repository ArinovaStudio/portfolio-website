"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedTitle() {
  const title1 = "ARINOVA";
  const title2 = "STUDIO";

  const arinovaRef = useRef<HTMLHeadingElement>(null);
  const studioRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Force GPU acceleration & prevent layout shifts
    gsap.set([arinovaRef.current, studioRef.current], {
      willChange: "transform, opacity, filter",
      transformPerspective: 1000,
      backfaceVisibility: "hidden",
    });

    // Use a timeline for consistent sequencing
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.inOut",
          duration: 0.7,
          delay: 0.6
        },
      });

      // Smooth upward reveal (ARINOVA)
      tl.fromTo(
        arinovaRef.current?.children || [],
        {
          y: 180,
          rotateX: 120,
          opacity: 0,
          filter: "blur(8px)",
          scale: 0.92,
        },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          stagger: 0.06,
        }
      );

      // Downward reveal (STUDIO)
      tl.fromTo(
        studioRef.current?.children || [],
        {
          y: -180,
          rotateX: -120,
          opacity: 0,
          filter: "blur(8px)",
          scale: 0.92,
        },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          stagger: 0.06,
        },
        "-=0.5"
      );

      // Fade out STUDIO smoothly
      tl.to(
        studioRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: "power4.out",
        },
        "+=2"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center overflow-hidden perspective-[1000px] px-4">
      <h1
        ref={arinovaRef}
        className="font-unbounded font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] uppercase leading-[0.8] py-2 text-neutral-100 flex justify-center flex-wrap"
      >
        {title1.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              willChange: "transform, opacity, filter",
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      <h1
        ref={studioRef}
        className="font-space font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] uppercase text-neutral-100 flex justify-center flex-wrap"
      >
        {title2.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              willChange: "transform, opacity, filter",
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
