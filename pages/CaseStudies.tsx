"use client";

import React, { useRef, useEffect, useState, useTransition } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "@/elements/CursorContext";
import { useRouter } from "next/navigation";
import { fetchData } from "@/sanity/lib/fetch";
import MiniLoader from "@/elements/SmallLoader";
import { urlFor } from "@/sanity/lib/image";

export default function CaseStudiesScroll() {
    const [caseStudies, setCaseStudies] = useState([])
    
  const router = useRouter();

  const getData = async () => {
    const data = await fetchData("caseStudies")
    if (data) {
      setCaseStudies(data)
    }
  }

  const {setCursor} = useCursor()
  useEffect(() => {
    getData()
  }, [])

  // if (transition) {
  //   return (
  //     <MiniLoader />
  //   )
  // }

  const panels = caseStudies.length; // number of steps to scroll through
  const pinRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const progress = Math.min(Math.max(v ?? 0, 0), 1);
      const raw = progress * (panels - 1);
      const idx = Math.round(raw);
      setActive(idx);
    });
  }, [scrollYProgress, panels]);

  const wrapperHeight = `${panels * 100}vh`;

  // Variants
  const leftVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "circOut" },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const rightVariants = {
    enter: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.9, ease: "circOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      x: 20,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // Stats container & item variants (staggered)
  const statsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.18,
      },
    },
  };

  const statItem = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background text-white font-dm">
      {/* Header Section (unchanged) */}
      <div className="px-6 md:px-16 lg:px-24 pt-12 pb-8">
        <p className="text-gray-400 text-sm md:text-base mb-4 font-unbounded font-light">
          ✳ Our Track Record
        </p>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-2 uppercase font-stretch">
          Case Studdies
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl font-cursive italic">
          How We <span className="text-purple-500">Helped</span> Businesses To{" "}
          <span className="text-purple-500">Increase Metrics</span>.
        </p>
      </div>

      {/* PINNED SCROLL STORY AREA */}
      <div ref={containerRef} className="relative" style={{ height: wrapperHeight }}>
        <div ref={pinRef} className="sticky top-0 w-full h-screen flex items-center">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 lg:px-24">
            {/* LEFT: textual case study with 4 stats */}
            <div className="w-full md:w-1/2 pr-0 md:pr-12">
              {caseStudies.map((study, i) => {
                const isActive = i === active;
                return (
                  <motion.div
                    key={study._id}
                    className="mb-6"
                    initial={false}
                    animate={isActive ? "enter" : "exit"}
                    variants={leftVariants as any}
                    aria-hidden={!isActive}
                    style={{ display: isActive ? "block" : "none" }}
                  >
                    <div
                      data-id={study._id}
                      className={`case-study-item border-b-2 border-gray-600 py-4 pt-12 transition-all duration-700 mt-6`}
                    >
                      <div className="mb-4">
                        <div className="flex justify-between items-end flex-col sm:flex-row">
                          <div className="w-full sm:w-3/5">
                            <p className="text-gray-400 text-base font-dm mb-2">
                              We Helped <span className="text-white">{study.title}</span>{" "}
                              {study.miniDescription}
                            </p>
                          </div>

                          <div className="text-7xl md:text-7xl font-semibold font-unbounded">
                            {study.percentage}%
                          </div>
                        </div>
                      </div>

                      {/* ---- NEW: 4 stats display (2x2 grid on md+, stacked on small) ---- */}
                      <motion.div
                        variants={statsContainer}
                        initial="hidden"
                        animate={isActive ? "show" : "hidden"}
                        className="grid grid-cols-2 gap-4 mt-6"
                      >
                        {study.stats.map((s, idx) => (
                          <motion.div
                            key={idx}
                            variants={statItem as any}
                            className="bg-transparent p-3 rounded-md flex flex-col"
                          >
                            {/* First stat: special white highlight + subtle pulsing */}
                            {idx === 0 ? (
                              <motion.div
                                initial={{ scale: 1, color: "#9CA3AF" }}
                                animate={
                                  isActive
                                    ? { scale: [1, 1.03, 1], color: ["#9CA3AF", "#ffffff"] }
                                    : { scale: 1, color: "#9CA3AF" }
                                }
                                transition={{
                                  duration: 1.6,
                                  ease: "easeInOut",
                                  repeat: isActive ? 2 : 0,
                                  repeatType: "reverse",
                                  delay: 0.12,
                                }}
                                className="text-2xl md:text-3xl font-unbounded font-semibold"
                              >
                                {s.value}
                              </motion.div>
                            ) : (
                              <div className="text-2xl md:text-3xl font-unbounded font-semibold text-gray-300">
                                {s.value}
                              </div>
                            )}
                            <div className="text-sm text-gray-400 mt-1">{s.key}</div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT: sticky SVG/image area (unchanged visual, only animated) */}
            <div className="w-full md:w-[40vw] md:h-[83vh] md:mr-16 flex justify-center md:justify-end">
              {caseStudies.map((study, i) => {
                const isActive = i === active;
                return (
                  <motion.div
                  onMouseEnter={() => setCursor("label", "Xyz business")}
                  onMouseLeave={() => setCursor("default")}
                    key={`svg-${study._id}`}
                    initial={false}
                    animate={isActive ? "enter" : "exit"}
                    variants={rightVariants as any}
                    aria-hidden={!isActive}
                    className="w-full md:w-auto"
                    style={{
                      display: isActive ? "block" : "none",
                    }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 545 725"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      className="max-w-full h-auto md:h-[83vh] block"
                    >
                      <defs>
                        <clipPath id={`imageClip-${i}`}>
                          <path d="M0 0H397.396L471.938 65.1907L545 135.32V725H114.529L55.5 667.318L0 609.435V0Z" />
                        </clipPath>
                        <filter id={`grayscale-${i}`}>
                          <feColorMatrix type="saturate" values="0" />
                        </filter>
                      </defs>

                      <image
                        href={urlFor(study.mainImage).url()}
                        width="545"
                        height="725"
                        clipPath={`url(#imageClip-${i})`}
                        filter={`url(#grayscale-${i})`}
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Small pager / hint (unchanged) */}
      <div className="px-6 md:px-16 lg:px-24 pt-6 pb-20">
        <div className="flex gap-3 items-center">
          {caseStudies.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-white scale-110" : "bg-gray-600"
              }`}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
