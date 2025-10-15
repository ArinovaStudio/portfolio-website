"use client";

import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fetchData } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import MiniLoader from "@/elements/SmallLoader";

export default function Portfolio() {
    const [products, setProducts] = useState<any>([]);
    const [transition, startTransition] = useTransition();
    const [current, setCurrent] = useState(0);

    const router = useRouter()

    const getData = () =>
      startTransition(async () => {
        const data = await fetchData("portfolio");
        if (data) {
          setProducts(data);
        }
      });
  
    useEffect(() => {
      getData();
    }, []);
  
    useEffect(() => {
      // Only start interval if products exist
      if (products.length === 0) return;

      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % products.length);
      }, 6000); // Slide changes every 6 seconds
      
      return () => clearInterval(interval);

    }, [products.length]);

    const fadeVariant = {
      initial: { opacity: 0, scale: 1.05 },
      animate: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
      exit: { opacity: 0, scale: 0.98, transition: { duration: 1.2, ease: "easeInOut" } },
    };

    const textVariant = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } },
      exit: { opacity: 0, y: -20, transition: { duration: 0.8 } },
    };

    // Show loader while fetching or if no products
    if (transition || products.length === 0) {
      return (
        <MiniLoader />
      )
    }

    // At this point, products array is guaranteed to have data
    const currentProduct = products[current];

    return (
      <div className="w-screen min-h-screen text-white relative px-6 sm:px-10 md:px-12 py-10 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <motion.div
          className="w-full flex flex-col sm:flex-row justify-between items-start relative z-50 mix-blend-difference"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="font-unbounded text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 sm:mb-0">
            LATEST <br /> PORTFOLIO
          </h1>
          <p className="sm:w-1/2 lg:w-1/3 font-medium text-lg sm:text-xl md:text-2xl text-right font-space">
            Our creative spirit comes alive in the digital realm — with nimble fingers
            crafting stories that blend art and technology.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="w-full flex-grow relative -mt-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              // onClick={() => router.push(`/portfolio/${currentProduct.slug.current}`)}
              key={currentProduct._id}
              variants={fadeVariant as any}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={urlFor(currentProduct.mainImage).url()}
                alt={currentProduct.title}
                fill
                className="object-cover brightness-75 transition-all duration-1000"
                priority
              />

              <div className="absolute inset-0 flex items-end justify-start p-6 sm:p-10 md:p-16 lg:p-20">
                <motion.div
                  variants={textVariant as any}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="max-w-3xl"
                >
                  <div className="px-3 py-1 w-fit bg-white backdrop-blur-sm text-black text-lg sm:text-xl md:text-2xl font-dm mb-4">
                    {currentProduct.category}
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-tall mb-3 tracking-wide font-medium">
                    {currentProduct.title}
                  </h1>
                  <p className="font-dm italic text-base sm:text-lg md:text-xl font-light max-w-xl">
                    {currentProduct.miniDescription}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
}