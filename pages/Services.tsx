"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lenis from "lenis";

import web_1 from "/public/assets/services/web_1.jpg"
import web_2 from "/public/assets/services/web_2.png"
import web_3 from "/public/assets/services/web_3.jpg"

import app_1 from "/public/assets/services/app_1.jpg"
import app_2 from "/public/assets/services/app_2.jpg"
import app_3 from "/public/assets/services/app_3.png"

import sw_1 from "/public/assets/services/software_1.jpg"
import sw_2 from "/public/assets/services/software_2.jpg"
import sw_3 from "/public/assets/services/software_3.jpg"

import ui_1 from "/public/assets/services/ui.jpg"
import ui_2 from "/public/assets/services/ui_2.jpg"
import ui_3 from "/public/assets/services/ui_3.jpg"

import ani_1 from "/public/assets/services/ani_1.jpg"
import ani_2 from "/public/assets/services/ani_2.jpg"
import ani_3 from "/public/assets/services/ani_3.jpg"


import cs_1 from "/public/assets/services/cyber_1.png"
import cs_2 from "/public/assets/services/cyber_2.jpg"
import cs_3 from "/public/assets/services/cyber_3.jpg"

import ec_1 from "/public/assets/services/ec_1.jpg"
import ec_2 from "/public/assets/services/ec_2.jpg"
import ec_3 from "/public/assets/services/ec_3.jpg"

import pd_1 from "/public/assets/services/pd_1.jpg"
import pd_2 from "/public/assets/services/pd_2.jpg"
import pd_3 from "/public/assets/services/pd_2.png"

import ai_1 from "/public/assets/services/ai_1.png"
import ai_2 from "/public/assets/services/ai_2.png"
import ai_3 from "/public/assets/services/ai_3.jpeg"
import { StaticImageData } from "next/image";




interface ServiceImages {
  [key: string]: string[];
}

function Services() {
  const [currentView, setCurrentView] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const services: string[] = [
    "Website Development",
    "Mobile App Development",
    "Software Tools",
    "UI/UX Design",
    "3D Animation",
    "AI/ML",
    "Cyber Security",
    "E-commerce Platforms",
    "Product Design",
  ];

  const serviceImages: Record<string, StaticImageData[]> = {
    "Website Development": [
      web_1,
      web_2,
      web_3
    ],
    "Mobile App Development": [
      app_1, app_2, app_3
    ],
    "Software Tools": [
      sw_1, sw_2, sw_3
    ],
    "UI/UX Design": [
      ui_1,
      ui_2,
      ui_3
    ],
    "3D Animation": [
      ani_1, ani_2, ani_3
    ],
    "AI/ML": [
      ai_1, ai_2, ai_3
    ],
    "Cyber Security": [
      cs_1, cs_2, cs_3
    ],
    "E-commerce Platforms": [
       ec_1, ec_2, ec_3
    ],
    "Product Design": [
      pd_1, pd_2, pd_3
    ],
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest: number) => {
      const section = Math.min(
        Math.floor(latest * services.length),
        services.length - 1
      );
      setCurrentView(section);
    });

    return () => unsubscribe();
  }, [scrollYProgress, services.length]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const getRandomPosition = (index: number): { x: string; y: string } => {
    const seed = index * 1234;
    const positions = [
      { x: "10%", y: "15%" },
      { x: "80%", y: "20%" },
      { x: "15%", y: "70%" },
      { x: "75%", y: "65%" },
      { x: "85%", y: "40%" },
      { x: "20%", y: "80%" },
    ];
    return positions[seed % positions.length];
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="sticky top-0 w-screen h-screen flex flex-col gap-8 justify-center items-center overflow-hidden">
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>

        {services[currentView] &&
          serviceImages[services[currentView]].map(
            (img: any, idx: number) => {
              const position = getRandomPosition(currentView * 3 + idx);
              return (
                <motion.div
                  key={`${services[currentView]}-${idx}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="absolute w-32 h-32 md:w-40 md:h-40 border-4 border-white rounded-xl rotate-12 overflow-hidden shadow-2xl"
                  style={{
                    left: position.x,
                    top: position.y,
                  }}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            }
          )}

        <div className="relative z-20 flex flex-col gap-0 mt-28 items-center">
          {services.map((item: string, index: number) => {
            const opacity = currentView === index ? 1 : 0.3;
            const scale = currentView === index ? 1 : 0.8;
            const yOffset = (index - currentView) * 100;

            return (
              <motion.h1
                key={item}
                animate={{
                  opacity,
                  scale,
                  y: yOffset,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className={`uppercase font-semibold font-unbounded -mt-14 ${
                  currentView === index ? "text-white" : "text-neutral-500"
                } text-4xl md:text-7xl text-center px-4`}
              >
                {item}
              </motion.h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
