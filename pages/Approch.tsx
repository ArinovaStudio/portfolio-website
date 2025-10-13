"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Asterisk } from 'lucide-react';
import ApprochCard from '@/elements/ApprochCard';

import core from "@/public/icons/compass.png"
import audiance from "@/public/icons/audiance.jpg"
import stratergies from "@/public/icons/stratergies.jpg"
import experience from "@/public/icons/design.jpg"
import code from "@/public/icons/code.jpg"
import launch from "@/public/icons/launch.jpg"



// Lenis smooth scroll implementation
const useLenis = () => {
  useEffect(() => {
    class Lenis {
      private raf: number | null = null;
      private scrollTop = 0;
      private targetScrollTop = 0;
      private ease = 0.075;

      constructor() {
        this.init();
      }

      init() {
        this.animate();
        window.addEventListener('wheel', this.onWheel);
        window.addEventListener('touchmove', this.onTouchMove);
      }

      onWheel = (e: WheelEvent) => {
        this.targetScrollTop += e.deltaY;
        this.targetScrollTop = Math.max(0, Math.min(this.targetScrollTop, document.body.scrollHeight - window.innerHeight));
      };

      onTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        if (this.lastTouch) {
          const delta = this.lastTouch - touch.clientY;
          this.targetScrollTop += delta * 2;
          this.targetScrollTop = Math.max(0, Math.min(this.targetScrollTop, document.body.scrollHeight - window.innerHeight));
        }
        this.lastTouch = touch.clientY;
      };

      private lastTouch: number | null = null;

      animate = () => {
        this.scrollTop += (this.targetScrollTop - this.scrollTop) * this.ease;
        window.scrollTo(0, this.scrollTop);
        this.raf = requestAnimationFrame(this.animate);
      };

      destroy() {
        if (this.raf) cancelAnimationFrame(this.raf);
        window.removeEventListener('wheel', this.onWheel);
        window.removeEventListener('touchmove', this.onTouchMove);
      }
    }

    const lenis = new Lenis();
    return () => lenis.destroy();
  }, []);
};


const cards = [
  {
    id: 1,
    title: "Discover the Core",
    description:
      "We dive deep into your brand’s essence to uncover your story, purpose, and unique strengths.",
    image: core,
  },
  {
    id: 2,
    title: "Decode the Audience",
    description:
      "We study your audience to reveal what drives their decisions and how to connect meaningfully.",
    image: audiance,
  },
  {
    id: 3,
    title: "Define the Strategy",
    description:
      "We craft a smart, actionable roadmap aligning your goals with real audience insights.",
    image: stratergies,
  },
  {
    id: 4,
    title: "Design the Experience",
    description:
      "We turn insights into stunning visuals and seamless digital experiences that people love.",
    image: experience,
  },
  {
    id: 5,
    title: "Develop & Refine",
    description:
      "We build with precision and optimize for speed, scalability, and flawless performance.",
    image: code,
  },
  {
    id: 6,
    title: "Launch & Elevate",
    description:
      "We launch your project strategically, track results, and evolve continuously for lasting growth.",
    image: launch,
  },
];


const ApproachScroll: React.FC = () => {
  useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Header fade
  const headerOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);

  // Text separation animation (10% to 25%)

  const scale = useTransform(scrollYProgress, [0.1, 0.25], [1, 0.6])
  const leftTextX = useTransform(scrollYProgress, [0.1, 0.25], [0, -100]);
  const rightTextX = useTransform(scrollYProgress, [0.1, 0.25], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  const pos = useTransform(scrollYProgress, [0.1, 0.25], [-100, -350])
  // Card appearance (15% to 22%)
  const cardAppearScale = useTransform(scrollYProgress, [0.15, 0.22], [0, 1]);
  const cardAppearOpacity = useTransform(scrollYProgress, [0.15, 0.22], [0, 1]);
  
  // Individual card progress tracking (25% to 85%)
  // Each card gets equal time: 60% / 5 cards = 12% per card
  const card1Opacity = useTransform(scrollYProgress, [0.25, 0.30, 0.37, 0.42], [1, 1, 1, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.37, 0.42, 0.49, 0.54], [0, 1, 1, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.49, 0.54, 0.61, 0.66], [0, 1, 1, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0.61, 0.66, 0.73, 0.78], [0, 1, 1, 0]);
  const card5Opacity = useTransform(scrollYProgress, [0.73, 0.78, 0.85, 0.85], [0, 1, 1, 1]);
  
  // Last card expansion (85% to 100%)
  const lastCardScale = useTransform(scrollYProgress, [0.85, 1], [1, 5]);
  const lastCardBorderRadius = useTransform(scrollYProgress, [0.85, 1], [24, 0]);
  const finalTextOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  const cardOpacities = [card1Opacity, card2Opacity, card3Opacity, card4Opacity, card5Opacity];

  return (
    <div ref={containerRef} className="relative" style={{ height: '600vh' }}>
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-background flex items-center justify-center">
        {/* Header - Above the main heading */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 capitalize text-xl text-gray-400 flex justify-center items-center gap-2 z-20"
          style={{ 
            y: pos,
            opacity: headerOpacity 
          }}
        >
          <Asterisk className="text-gray-400" size={28} />
          <p className="font-dm">From Concept to Launch</p>
        </motion.div>

        {/* Left Text */}
        <motion.div
          className="absolute left-20 text-white z-10"
          style={{ x: leftTextX, opacity: textOpacity, scale: scale }}
        >
          <h1 className="text-7xl font-stretch uppercase leading-tight">
            Your Ideas
            <br />
            Into Bbrand
          </h1>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="absolute right-20 text-white z-10"
          style={{ x: rightTextX, opacity: textOpacity, scale: scale }}
        >
          <h1 className="text-7xl font-stretch uppercase leading-tight">
            Transform
            <br />
            Stories
          </h1>
        </motion.div>

        {/* Card Container */}
        <motion.div 
          className="relative w-[500px] h-[600px] flex items-center justify-center"
          style={{
            scale: cardAppearScale,
            opacity: cardAppearOpacity,
          }}
        >
          {cards.map((card, index) => {
            const isLast = index === cards.length - 1;
            
            return (
              <motion.div
                key={card.id}
                className="absolute rounded-xl bg-white p-3.5 flex items-center justify-center"
                style={{
                  width: 450,
                  height: 560,
                  scale: isLast ? lastCardScale : 1,
                  borderRadius: isLast ? lastCardBorderRadius : 24,
                  opacity: cardOpacities[index],
                  zIndex: 10 + index,
                }}
              >
                {!isLast ? (
                    <ApprochCard 
                    id={card.id}
                    description={card.description}
                    title={card.title}
                    image={card.image}
                    />
                ) : (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-white"
                    style={{
                      opacity: finalTextOpacity,
                      borderRadius: lastCardBorderRadius,
                    }}
                  >
                    <p className="text-xs font-bold text-black font-unbounded">
                        Products By US
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ApproachScroll;