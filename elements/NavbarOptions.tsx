"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Tabs {
  title: string;
  link: string;
}

function NavbarOptions({ close }: { close: (val: boolean) => void }) {
  const tabs: Tabs[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "/#about" },
    { title: "Blogs", link: "/#blogs" },
    { title: "Portfolio", link: "/#portfolio" },
    { title: "Case Studies", link: "/#case-studies" },
    { title: "Design Gallery", link: "/#design-gallery" },
    { title: "Contact Info", link: "/#contact-info" },
  ];

  const [active, setActive] = useState<string>(tabs[0].link);

  // Container animation for staggering
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  // Item animation (slide + fade)
  const item = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.77, 0, 0.175, 1] },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen bg-background flex flex-col justify-center items-end px-6 sm:px-10 md:px-16 py-10 z-[998] overflow-hidden"
      initial={{ x: "100%" }}
      animate={{
        x: 0,
        transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
      }}
      exit={{ x: "100%", transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      {/* Close Button */}
      <motion.div
        onClick={() => close(false)}
        className="absolute top-8 left-6 sm:top-10 sm:left-10 md:left-12 cursor-pointer text-white w-10 sm:w-12 h-10 sm:h-12 hover:rotate-180 transition-transform duration-500"
        whileHover={{ scale: 1.1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
      </motion.div>

      {/* Menu Items */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-end gap-4 sm:gap-6 md:gap-8"
      >
        {tabs.map((tab, idx) => (
          <motion.div
            key={idx}
            variants={item as any}
            className="overflow-hidden relative group"
          >
            {/* Reveal Animation Layer */}
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 0.8,
                delay: 0.2 + idx * 0.15,
                ease: [0.83, 0, 0.17, 1],
              }}
              className="absolute inset-0 bg-white z-10"
            />

            <Link
              href={tab.link}
              onClick={() => close(false)}
              className="block"
            >
              <h1
                className={`font-unbounded uppercase font-extrabold relative transition-colors duration-700
                ${
                  active === tab.link ? "text-white" : "text-neutral-700"
                }
                ${
                  tab.link === tabs[6].link
                    ? "text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                    : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                }
                after:absolute after:inset-0 after:w-0 hover:after:w-full after:h-full after:bg-white
                after:transition-all after:duration-500 after:-z-10 after:translate-x-full hover:after:translate-x-0 hover:text-black`}
              >
                {tab.title}
              </h1>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default NavbarOptions;
