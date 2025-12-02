"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { fetchData } from "@/sanity/lib/fetch";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ImageItem {
  _id: number;
  image: string;
  width: string;
  height: string;
  mobileWidth: string;
  mobileHeight: string;
  left: string;
  top: string;
  mobileLeft: string;
  mobileTop: string;
}

function DesignGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [images, setImages] = useState<ImageItem[]>([]);

  const getData = async () => {
    const data = await fetchData("designGallery");
    if (data) {
      setImages(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest: number) => {
      setScrollProgress(latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

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

  // ---------- 1) DYNAMIC HEIGHT BASED ON IMAGE COUNT ----------
  // each image gets some scroll space; tweak constants as you like
  const totalImages = images.length || 1;
  const containerHeightVh = Math.max(200, totalImages * 120); // min 200vh

  // ---------- 2) SEQUENTIAL IMAGE APPEAR / HOLD / DISAPPEAR ----------
  // We'll dedicate a portion of the scroll (0.05 → 0.8) to cycling images
  const imagesStartProgress = 0.05;
  const imagesEndProgress = 0.8;
  const imagesRange = imagesEndProgress - imagesStartProgress;
  const segmentLength = imagesRange / totalImages;

  const finalMessageOpacity = useTransform(
    scrollYProgress,
    [imagesEndProgress, imagesEndProgress + 0.1],
    [0, 1]
  );
  const finalMessageScale = useTransform(
    scrollYProgress,
    [imagesEndProgress, imagesEndProgress + 0.1],
    [0.8, 1]
  );

  return (
    <div
      id="design-gallery"
      ref={containerRef}
      className="relative"
      style={{ height: `${containerHeightVh}vh` }}
    >
      <div className="sticky top-0 min-h-screen h-screen w-screen bg-background flex justify-center items-center overflow-hidden">
        {/* Images Layer */}
        <div className="absolute inset-0 z-0">
          {images.map((image: ImageItem, index: number) => {
            // Each image gets its own scroll segment
            const segmentStart =
              imagesStartProgress + segmentLength * index;
            const segmentEnd = segmentStart + segmentLength;

            // inside each segment: 0–30% fade in, 30–70% hold, 70–100% fade out
            const appearEnd = segmentStart + segmentLength * 0.3;
            const disappearStart = segmentStart + segmentLength * 0.7;

            let opacity = 0;
            let yPosition = 20; // translateY in %

            if (
              scrollProgress >= segmentStart &&
              scrollProgress < appearEnd
            ) {
              // fade in
              const localProgress =
                (scrollProgress - segmentStart) / (appearEnd - segmentStart);
              opacity = localProgress;
              yPosition = 20 - localProgress * 20; // 20% → 0
            } else if (
              scrollProgress >= appearEnd &&
              scrollProgress < disappearStart
            ) {
              // fully visible
              opacity = 1;
              yPosition = 0;
            } else if (
              scrollProgress >= disappearStart &&
              scrollProgress < segmentEnd
            ) {
              // fade out
              const localProgress =
                (scrollProgress - disappearStart) /
                (segmentEnd - disappearStart);
              opacity = 1 - localProgress;
              yPosition = -localProgress * 20; // 0 → -20%
            } else {
              // outside this segment
              opacity = 0;
              yPosition = 20;
            }

            return (
              <React.Fragment key={image._id}>
                {/* Desktop / tablet */}
                <motion.div
                  className="hidden md:block absolute rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    width: image.width,
                    height: image.height,
                    left: image.left,
                    top: image.top,
                    opacity,
                    y: `${yPosition}%`,
                  }}
                >
                  <Image
                    src={urlFor(image.image).url()}
                    alt={`Design ${image._id}`}
                    fill
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Mobile */}
                <motion.div
                  className="block md:hidden absolute rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    width: image.mobileWidth,
                    height: image.mobileHeight,
                    left: image.mobileLeft,
                    top: image.mobileTop,
                    opacity,
                    y: `${yPosition}%`,
                  }}
                >
                  <Image
                    fill
                    src={urlFor(image.image).url()}
                    alt={`Design ${image._id}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Main Title */}
        <motion.h1
          className="relative z-20 text-5xl sm:text-6xl md:text-8xl font-bold uppercase text-white text-center px-4 mix-blend-difference"
          style={{
            fontFamily: "Unbounded, sans-serif",
            opacity: scrollProgress < imagesEndProgress ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <span className="font-stretch">Dessign</span> Gallery
        </motion.h1>

        {/* Final Message */}
        <motion.div
          className="absolute z-20 text-center px-6"
          style={{
            opacity: finalMessageOpacity,
            scale: finalMessageScale,
          }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "Unbounded, sans-serif" }}
          >
            Next
          </h2>
          <p
            className="text-2xl sm:text-3xl md:text-5xl text-gray-400"
            style={{ fontFamily: "Unbounded, sans-serif" }}
          >
            Your Design Can Be Here
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default DesignGallery;
