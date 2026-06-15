"use client";

import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fetchData } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import MiniLoader from "@/elements/SmallLoader";
import { PortfolioCards } from "@/components/PortfolioCard";

export default function Portfolio() {
    const [products, setProducts] = useState<any>([]);
    const [transition, startTransition] = useTransition();

    const router = useRouter()

    const getData = () =>
      startTransition(async () => {
        const data = await fetchData("portfolio");
        if (data) {
          setProducts(data.slice(0, 10));
        }
      });
  
    useEffect(() => {
      getData();
    }, []);
  


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
          <h1 className="font-unbounded text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 sm:mb-0">
            LATEST <br /> PORTFOLIO
          </h1>
          <p className="sm:w-1/2 lg:w-1/3 font-medium text-sm sm:text-xl md:text-2xl text-right font-space">
            Our creative spirit comes alive in the digital realm — with nimble fingers
            crafting stories that blend art and technology.
          </p>
        </motion.div>

        <PortfolioCards data={products} />
      </div>
    );
}