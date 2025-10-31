"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
  {
    "id": 1,
    "name": "Rohit Mehra",
    "role": "Product Manager, FinEdge",
    "image": "https://images.unsplash.com/photo-1603415526960-f7e0328ecf4f?w=500",
    "quote": "Working with Arinova Studio was a game-changer for our product launch. Their team delivered top-notch design and functionality on a tight deadline, and the communication was effortless throughout."
  },
  {
    "id": 2,
    "name": "Priya Iyer",
    "role": "Creative Director, Lumos Digital",
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    "quote": "Their ability to blend creativity with technical precision truly sets them apart. Our project turned out far better than we imagined — professional, scalable, and beautiful."
  },
  {
    "id": 3,
    "name": "Aman Khanna",
    "role": "Founder, UrbanNest Interiors",
    "image": "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500",
    "quote": "I was impressed by how well they understood our brand. The website perfectly reflects our identity, and our clients often compliment the design. Totally worth it!"
  },
  {
    "id": 4,
    "name": "Sneha Patel",
    "role": "Marketing Head, GreenCore Solutions",
    "image": "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=500",
    "quote": "Their attention to detail is unmatched. From concept to final delivery, everything was smooth and transparent. The results exceeded expectations!"
  },
  {
    "id": 5,
    "name": "Rajat Sinha",
    "role": "CTO, TechNova Systems",
    "image": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500",
    "quote": "We were looking for a reliable partner who could handle complex frontend and backend tasks — and they nailed it. The performance improvements are outstanding."
  },
  {
    "id": 6,
    "name": "Divya Nair",
    "role": "Operations Manager, SwiftMove Logistics",
    "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500",
    "quote": "Professional, innovative, and incredibly supportive. They kept us in the loop at every stage and ensured that every aspect of our project aligned with our business goals."
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