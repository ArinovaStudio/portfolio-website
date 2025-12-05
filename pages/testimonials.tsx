"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import pic_1 from "@/public/testimonials/rohit_g.jpeg";
import pic_2 from "@/public/testimonials/khushi.jpeg";
import pic_3 from "@/public/testimonials/gaurav.jpeg";
import pic_4 from "@/public/testimonials/subham.jpeg";
import pic_5 from "@/public/testimonials/aryan.jpeg";
import pic_6 from "@/public/testimonials/hardeep.jpeg";
import pic_7 from "@/public/testimonials/shagun.jpeg";


export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
  {
    "id": 1,
    "name": "Rohit gunjal",
    "role": "Business Owner",
    "image": pic_1,
    "quote": "We needed a SaaS product built from scratch and had no idea where to start. The ARINOVA team guided us through every step and delivered something way better than what we had imagined. Super happy with the results."
  },
    {
    "id": 2,
    "name": "Khushi Shah",
    "role": "Fitness Coach",
    "image": pic_2,
    "quote": "What I loved most about ARINOVA is how patient they were. They listened to every small detail and didn’t rush anything. The final product really reflects that."
  },
    {
    "id": 3,
    "name": "Gaurav Pawar",
    "role": "Brand Manager",
    "image": pic_3,
    "quote": "Honestly, working with ARINOVA was the best decision we made this year. They completely revamped our website, and the difference is unbelievable. It loads faster, looks cleaner, and our customers actually compliment it now."
  },
    {
    "id": 4,
    "name": "Subham gunjal",
    "role": "IT Specialist",
    "image": pic_4,
    "quote": "Our systems kept getting small security issues, and it was becoming stressful. ARINOVA did a full audit, fixed everything, and now the whole thing runs smoothly. I finally sleep peacefully."
  },
    {
    "id": 5,
    "name": "Aryan",
    "role": "Entrepreneur",
    "image": pic_5,
    "quote": "I’ve never seen a team respond so quickly and professionally. Whenever we had questions or needed changes, they were always available. You don’t get this kind of support everywhere."
  },
    {
    "id": 6,
    "name": "Hardeep singh",
    "role": "Shop Owner",
    "image": pic_6,
    "quote": "Our old website was outdated and slow. After ARINOVA rebuilt it, it genuinely started feeling like a proper modern business. Sales improved too. They know what they're doing."
  },
    {
    "id": 7,
    "name": "Shagun",
    "role": "Digital Marketer",
    "image": pic_7,
    "quote": "We’ve worked with other tech companies, but the experience with ARINOVA was totally different. They actually care about the project, not just the payment. You can see the passion in their work."
  },

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
                  src={testimonials[currentSlide].image.src}
                  alt={testimonials[currentSlide].name}
                  // fill
                  className="w-full h-full object-cover saturate-0"
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