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
  const [images, setImages] = useState([]);
  const getData = async () => {
    const data = await fetchData("designGallery");
    if (data) {
      console.log(data);
      setImages(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // const images: ImageItem[] = [
  //     {
  //         id: 1,
  //         src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
  //         width: "280px",
  //         height: "380px",
  //         mobileWidth: "140px",
  //         mobileHeight: "190px",
  //         left: "5%",
  //         top: "10%",
  //         mobileLeft: "5%",
  //         mobileTop: "15%"
  //     },
  //     {
  //         id: 2,
  //         src: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&h=600&fit=crop",
  //         width: "520px",
  //         height: "350px",
  //         mobileWidth: "260px",
  //         mobileHeight: "175px",
  //         left: "35%",
  //         top: "5%",
  //         mobileLeft: "25%",
  //         mobileTop: "10%"
  //     },
  //     {
  //         id: 3,
  //         src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  //         width: "300px",
  //         height: "420px",
  //         mobileWidth: "150px",
  //         mobileHeight: "210px",
  //         left: "70%",
  //         top: "15%",
  //         mobileLeft: "65%",
  //         mobileTop: "20%"
  //     },
  //     {
  //         id: 4,
  //         src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
  //         width: "450px",
  //         height: "300px",
  //         mobileWidth: "225px",
  //         mobileHeight: "150px",
  //         left: "10%",
  //         top: "55%",
  //         mobileLeft: "8%",
  //         mobileTop: "45%"
  //     },
  //     {
  //         id: 5,
  //         src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
  //         width: "300px",
  //         height: "420px",
  //         mobileWidth: "150px",
  //         mobileHeight: "210px",
  //         left: "65%",
  //         top: "50%",
  //         mobileLeft: "60%",
  //         mobileTop: "50%"
  //     },
  //     {
  //         id: 6,
  //         src: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
  //         width: "380px",
  //         height: "280px",
  //         mobileWidth: "190px",
  //         mobileHeight: "140px",
  //         left: "20%",
  //         top: "25%",
  //         mobileLeft: "15%",
  //         mobileTop: "30%"
  //     },
  //     {
  //         id: 7,
  //         src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
  //         width: "320px",
  //         height: "400px",
  //         mobileWidth: "160px",
  //         mobileHeight: "200px",
  //         left: "55%",
  //         top: "30%",
  //         mobileLeft: "50%",
  //         mobileTop: "35%"
  //     },
  //     {
  //         id: 8,
  //         src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
  //         width: "420px",
  //         height: "320px",
  //         mobileWidth: "210px",
  //         mobileHeight: "160px",
  //         left: "8%",
  //         top: "70%",
  //         mobileLeft: "10%",
  //         mobileTop: "60%"
  //     },
  //     {
  //         id: 9,
  //         src: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop",
  //         width: "350px",
  //         height: "380px",
  //         mobileWidth: "175px",
  //         mobileHeight: "190px",
  //         left: "72%",
  //         top: "75%",
  //         mobileLeft: "68%",
  //         mobileTop: "70%"
  //     },
  //     {
  //         id: 10,
  //         src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  //         width: "480px",
  //         height: "340px",
  //         mobileWidth: "240px",
  //         mobileHeight: "170px",
  //         left: "30%",
  //         top: "45%",
  //         mobileLeft: "25%",
  //         mobileTop: "55%"
  //     }
  // ];

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

  const imagesEndProgress = 0.8;
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
      style={{ height: "600vh" }}
    >
      <div className="sticky top-0 min-h-screen h-screen w-screen bg-background flex justify-center items-center overflow-hidden">
        {/* Images Layer - Behind text */}
        <div className="absolute inset-0 z-0">
          {images.map((image: ImageItem, index: number) => {
            const totalImages = images.length;
            const appearStart = 0.05 + index * 0.06;
            const appearEnd = appearStart + 0.08;
            const disappearStart = 0.35 + index * 0.035;
            const disappearEnd = disappearStart + 0.08;

            let opacity = 0;
            let yPosition = 100;

            if (scrollProgress < appearStart) {
              opacity = 0;
              yPosition = 100;
            } else if (
              scrollProgress >= appearStart &&
              scrollProgress < appearEnd
            ) {
              const progress =
                (scrollProgress - appearStart) / (appearEnd - appearStart);
              opacity = progress;
              yPosition = 100 - progress * 100;
            } else if (
              scrollProgress >= appearEnd &&
              scrollProgress < disappearStart
            ) {
              opacity = 1;
              yPosition = 0;
            } else if (
              scrollProgress >= disappearStart &&
              scrollProgress < disappearEnd
            ) {
              const progress =
                (scrollProgress - disappearStart) /
                (disappearEnd - disappearStart);
              opacity = 1 - progress;
              yPosition = -(progress * 100);
            } else {
              opacity = 0;
              yPosition = -100;
            }

            return (
              <React.Fragment key={image._id}>
                <motion.div
                  className="hidden md:block absolute rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    width: image.width,
                    height: image.height,
                    left: image.left,
                    top: image.top,
                    opacity: opacity,
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
                <motion.div
                  className="block md:hidden absolute rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    width: image.mobileWidth,
                    height: image.mobileHeight,
                    left: image.mobileLeft,
                    top: image.mobileTop,
                    opacity: opacity,
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

        {/* Design Gallery Text - Always centered, stays visible until end */}
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

        {/* Final Message - Appears after images are done */}
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
