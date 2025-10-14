"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import ThreeD from "@/elements/Canvas";
import AnimatedTitle from "@/elements/RevealAnimation";
import { LucideMouse } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <AuroraBackground>
      <div className="w-screen h-screen text-white flex items-center justify-center flex-col relative overflow-hidden">
        {/* 3D Model Container */}
        <div className="w-screen h-screen absolute z-20 flex justify-center items-center flex-col">
          <div className="w-full h-full md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-3/4 px-4 md:px-0">
            <ThreeD />
          </div>
        </div>

        {/* Description Text */}
        <div className="absolute left-4 bottom-16 md:left-12 md:bottom-16 lg:left-20 lg:bottom-12 z-30 max-w-[90%] md:max-w-[50%] lg:max-w-[33%]">
          <p className="text-sm md:text-base lg:text-xl bg-gradient-to-br from-white via-white/30 to-white/0 bg-clip-text text-transparent">
            At Arinova Studio, we craft innovative digital experiences. From
            custom solutions and services to cutting-edge products, we blend
            creativity and technology to bring your ideas to life.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute flex items-center gap-2 left-1/3 lg:left-5/6 bottom-4 md:right-8 md:bottom-6 ml-0 md:ml-12 lg:bottom-8 font-space text-sm md:text-base lg:text-xl font-light z-30">
          <LucideMouse
            size={20}
            strokeWidth={1}
            className="animate-bounce md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
          <span>Scroll down</span>
        </div>

        {/* Animated Title */}
        <AnimatedTitle />

        {/* Studio Text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.9 }}
          className="font-space font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] uppercase text-transparent mt-14 py-0.5 sm:mt-16 md:mt-24 lg:mt-[10.5rem] left-1/2 -translate-x-1/2 md:left-[40%] md:translate-x-0 lg:left-[34%] absolute z-[99] whitespace-nowrap"
          style={{
            WebkitTextStroke: `${isMobile ? "2px" : "4px"} white`,
          }}
        >
          studio
        </motion.h1>
      </div>
    </AuroraBackground>
  );
}

export default Hero;
