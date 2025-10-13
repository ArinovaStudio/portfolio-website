// import Image from 'next/image'
// import React from 'react'

// function Portfolio() {
//   return (
//     <div className='w-screen h-screen text-white relative px-12 py-10 flex justify-between flex-col'>
//         <div className="w-full h-1/6 flex justify-between relative z-50 mix-blend-difference items-start">
//         <h1 className='font-unbounded text-8xl font-black'>LATEST <br />PORTFOLIO</h1>
//         <p className='w-1/4 font-medium text-right text-2xl font-space'>Our creative spirit come alive in the digital realm. With nimble fingers flying across the device.</p>
//         </div>
//         <div className="w-full h-[81%] relative">
//             <Image 
//             src={"https://picsum.photos/1080/1920"}
//             alt='Image'
//             fill
//             className='w-full h-full object-cover brightness-75'
//             />
//         <div className="absolute inset-0 w-full h-full flex justify-start items-end p-10">
//             <div className="">
//                 <div className='px-3 py-1 w-fit bg-white backdrop-blur-sm text-black text-2xl font-dm mb-4'>E-commerce</div>
//                 <h1 className='text-8xl font-tall mb-2 tracking-wide font-medium'>Title for the Product</h1>
//                 <p className='font-dm italic text-xl w-1/3 font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sit deleniti obcaecati architecto, mollitia impedit ex quasi voluptates voluptatem distinctio?</p>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Portfolio

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      image: "https://picsum.photos/id/1011/1080/1920",
      tag: "E-commerce",
      title: "Elegant Storefront",
      description:
        "We crafted a seamless online shopping experience for modern retail brands—beautiful, functional, and lightning-fast.",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1025/1080/1920",
      tag: "Branding",
      title: "Visual Identity Project",
      description:
        "Transforming brand stories into timeless visual experiences that resonate deeply with audiences.",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1035/1080/1920",
      tag: "UI/UX Design",
      title: "Designing Intuitive Interfaces",
      description:
        "From wireframe to final polish, we built an intuitive user experience loved by thousands of customers.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % portfolios.length);
    }, 6000); // Slide changes every 6 seconds
    return () => clearInterval(interval);
  }, [portfolios.length]);

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
            key={portfolios[current].id}
            variants={fadeVariant as any}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={portfolios[current].image}
              alt={portfolios[current].title}
              fill
              className="object-cover brightness-75 transition-all duration-1000"
              priority
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-end justify-start p-6 sm:p-10 md:p-16 lg:p-20">
              <motion.div
                variants={textVariant as any}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-3xl"
              >
                <div className="px-3 py-1 w-fit bg-white backdrop-blur-sm text-black text-lg sm:text-xl md:text-2xl font-dm mb-4">
                  {portfolios[current].tag}
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-tall mb-3 tracking-wide font-medium">
                  {portfolios[current].title}
                </h1>
                <p className="font-dm italic text-base sm:text-lg md:text-xl font-light max-w-xl">
                  {portfolios[current].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
