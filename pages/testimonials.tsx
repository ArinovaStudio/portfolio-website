"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "SONIYA SHARMA",
      role: "CFO - ARINOVA STUDIO",
      image:
        "https://cdn.dribbble.com/users/1188733/screenshots/15749885/media/6b3091b0c5a3e53e3b67a8e6c26b6a0e.jpg?resize=800x600&vertical=center",
      quote:
        "Working with our development team has been transformative for our agency. The quality of websites they deliver consistently exceeds client expectations, and their technical expertise has helped us win major projects. Their attention to detail and commitment to deadlines makes them an invaluable asset to our studio.",
    },
    {
      id: 2,
      name: "JOHN ANDERSON",
      role: "CEO - TECH INNOVATIONS",
      image:
        "https://cdn.dribbble.com/users/1486700/screenshots/16497748/media/4b5c01539d463c0d963b8773a9c4d5a5.jpg?resize=800x600&vertical=center",
      quote:
        "The web application developed by this team revolutionized our internal operations. They delivered a scalable, user-friendly platform that increased our team's productivity by 40%. Their understanding of both technical requirements and business objectives made the entire process seamless and highly effective.",
    },
    {
      id: 3,
      name: "MARIA GARCIA",
      role: "Design Director - CREATIVE LAB",
      image:
        "https://cdn.dribbble.com/users/236966/screenshots/17300205/media/3b61a5a33a2b675e66f6e0c6c4b5e7a5.jpg?resize=800x600&vertical=center",
      quote:
        "As a design agency, finding development partners who truly understand design principles is rare. This team not only understands design but enhances it through their technical implementation. The websites they build are pixel-perfect, performant, and exactly what our clients envision. A true design-development partnership.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="bg-[#0b0b0b] text-white px-6 sm:px-10 md:px-16 lg:px-20 py-20 min-h-screen relative overflow-hidden">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-unbounded mb-20 tracking-tight text-center lg:text-left"
      >
        <span className="text-neutral-700">WHAT OUR </span>
        <span className="text-white">CLIENTS</span>
        <span className="text-neutral-700"> SAY</span>
      </motion.h1>

      {/* Main content */}
      <div className="relative py-10 max-w-7xl">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: false}}
          transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0 h-px flex"
        >
          <div>
            <svg
              width="1680"
              height="3"
              viewBox="0 0 1680 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="1.55347"
                x2="1679"
                y2="1.55347"
                stroke="#8F8F8F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="24 24"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: false}}
          transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 right-0 h-px flex"
        >
          <div>
            <svg
              width="1680"
              height="3"
              viewBox="0 0 1680 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="1.55347"
                x2="1679"
                y2="1.55347"
                stroke="#8F8F8F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="24 24"
              />
            </svg>
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentSlide].id}
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start px-4 lg:px-20"
          >
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 overflow-hidden mr-0 flex justify-center items-center sm:mr-14"
              >
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  // fill
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold font-unbounded mt-4 uppercase text-center">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-gray-500 text-base mt-0.5 font-space tracking-wide text-center">
                {testimonials[currentSlide].role}
              </p>
            </motion.div>

            {/* Right side - Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative flex flex-col justify-center"
            >
              <div className="text-7xl text-white leading-none font-space mb-4">
                "
              </div>
              <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
                {testimonials[currentSlide].quote}
              </p>
              <div className="text-7xl text-white leading-none font-space mt-4 text-right">
                "
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center lg:justify-end gap-3 mt-12">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white"
                : "bg-neutral-700 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}