"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AboutCompany() {
  const [openSection, setOpenSection] = useState("vision");

  const sections = [
    {
      id: "mission",
      title: "OUR MISSION",
      content: "To bridge the gap between great ideas and exceptional digital execution. We transform complex business challenges into intuitive, high-performing websites that not only look stunning but also drive meaningful results for our clients."
    },
    {
      id: "vision",
      title: "OUR VISION",
      content: "To become the most trusted digital partner for businesses seeking to make their mark online. We envision a future where every company has access to premium web solutions that amplify their unique voice and accelerate their growth journey."
    },
    {
      id: "history",
      title: "OUR JOURNEY",
      content: "Our story began with a simple realization: too many businesses were settling for mediocre websites that didn't reflect their true potential. Fueled by this gap in the market, we set out to create a studio that prioritizes quality, collaboration, and client success above all else. Today, we continue this mission with every project we undertake."
    }
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? "" : id);
  };

  return (
    <div className="min-h-screen bg-background text-white px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-8xl">
        {/* Header */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-neutral-300 font-stretch uppercase tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          ABOUT OUR COMPANY
        </motion.h1>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
          {/* Left Column */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-700 font-unbounded font-light leading-relaxed">
              At Arinova Studio, we're more than just developers - we're your partners in digital growth. We combine strategic thinking with technical expertise to build websites that tell your story, engage your audience, and deliver tangible business outcomes.
            </p>

            {/* Animated Button */}
            <Link
              href={"/about-us"}
              className="relative group capitalize px-8 py-2 w-fit text-lg font-light tracking-wide text-neutral-700 hover:bg-primary hover:text-white transition-all duration-500 font-unbounded cursor-pointer text-center"
            >
              <div className="border-t-2 border-primary absolute w-full -top-2 left-0 group-hover:border-transparent transition-all duration-500"></div>
              <div className="border-1 rotate-90 border-primary absolute w-1/3 top-1/2 -right-4 group-hover:border-transparent transition-all duration-500"></div>
              <div className="border-1 rotate-90 border-primary absolute w-1/3 top-1/2 -left-4 group-hover:border-transparent transition-all duration-500"></div>
              <div className="border-b-2 border-primary absolute w-full -bottom-2 left-0 group-hover:border-transparent transition-all duration-500"></div>
              <span className="relative z-10">Meet our team</span>

              <motion.div
                className="absolute inset-0 rounded-lg border border-primary opacity-0 group-hover:opacity-100"
                animate={{
                  boxShadow: [
                    "0 0 0px #9b5cff",
                    "0 0 20px #9b5cff",
                    "0 0 0px #9b5cff",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </Link>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            className="space-y-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.2 }}
                className={
                  index < sections.length - 1 ? "border-b border-gray-800" : ""
                }
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <h3
                    className={`text-2xl sm:text-3xl tracking-wider transition-colors font-space ${
                      openSection === section.id
                        ? "text-purple-500"
                        : "text-gray-600 group-hover:text-gray-400"
                    }`}
                  >
                    {section.title}
                  </h3>
                  <span
                    className={`text-3xl sm:text-4xl font-light transition-all duration-300 ${
                      openSection === section.id
                        ? "text-purple-500 rotate-180"
                        : "text-gray-600"
                    }`}
                  >
                    {openSection === section.id ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openSection === section.id && (
                    <motion.div
                      key={section.id}
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="overflow-hidden pb-6"
                    >
                      <motion.p
                        className="text-white text-base sm:text-lg leading-relaxed mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                      >
                        {section.content}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Brand Logos - SOON GOING TO ADD */}
        {/* <motion.div
          className="mt-32 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-25 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white grayscale rounded-lg"></div>
        </motion.div> */}
      </div>
    </div>
  );
}