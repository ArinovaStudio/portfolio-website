// // 'use client';

// // import { useState, useEffect } from 'react';

// // export default function TestimonialsCarousel() {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   const testimonials = [
// //     {
// //       id: 1,
// //       name: "SONIYA SHARMA",
// //       role: "CFO - ARINOVA STUDIO",
// //       image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop",
// //       quote: "Figma Ipsum Component Variant Main Layer. Effect Export Edit Horizontal Bold. Device Connection Underline Outline Connection Outline Frame Slice Union Main. Draft Vector Vertical Fill Content Pencil Arrow. Distribute Star Reesizing Clip Layout. Horizontal Main Duplicate Component Polygon Subtract Underline Selection List. Link Share Share Figma Style Follower."
// //     },
// //     {
// //       id: 2,
// //       name: "JOHN ANDERSON",
// //       role: "CEO - TECH INNOVATIONS",
// //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
// //       quote: "Outstanding service and exceptional quality. The team delivered beyond our expectations and transformed our vision into reality. Highly recommended for anyone looking for professional excellence."
// //     },
// //     {
// //       id: 3,
// //       name: "MARIA GARCIA",
// //       role: "Design Director - CREATIVE LAB",
// //       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
// //       quote: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to delivering high-quality results is unmatched. A true partner in success."
// //     },
// //     {
// //       id: 4,
// //       name: "DAVID CHEN",
// //       role: "CTO - DIGITAL SOLUTIONS",
// //       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
// //       quote: "Incredible professionalism and technical expertise. They understood our needs perfectly and delivered a solution that exceeded all expectations. Truly exceptional work."
// //     },
// //     {
// //       id: 5,
// //       name: "SARAH WILLIAMS",
// //       role: "Marketing Lead - BRAND STUDIO",
// //       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
// //       quote: "The best decision we made was partnering with this team. Their creativity and strategic thinking helped us achieve remarkable results. Simply outstanding!"
// //     },
// //     {
// //       id: 6,
// //       name: "MICHAEL BROWN",
// //       role: "Product Manager - INNOVATE CO",
// //       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
// //       quote: "Exceptional quality and unwavering dedication to excellence. The team's expertise and professionalism shine through in every aspect of their work."
// //     },
// //     {
// //       id: 7,
// //       name: "EMILY DAVIS",
// //       role: "VP Operations - FUTURE TECH",
// //       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
// //       quote: "A game-changing partnership that has transformed our business. Their innovative approach and commitment to success is truly remarkable."
// //     }
// //   ];

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
// //     }, 5000);

// //     return () => clearInterval(timer);
// //   }, [testimonials.length]);

// //   const goToSlide = (index: number) => {
// //     setCurrentSlide(index);
// //   };

// //   return (
// //     <div className="min-h-screen px-20 py-20">
// //       {/* Header */}
// //       <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold font-unbounded mb-20 tracking-tight">
// //         <span className="text-neutral-700">WHAT OUR </span>
// //         <span className="text-white">CLIENTS</span>
// //         <span className="text-neutral-700"> SAYS</span>
// //       </h1>

// //       {/* Testimonial Card Container */}
// //       <div className="w-full max-w-8xl mx-auto relative">
// //         {/* Dashed border top */}

// //         {/* Dashed border bottom */}
// //         <div className="absolute bottom-0 left-0 right-0 h-px flex">
// //           <div>
// //                       <svg width="1680" height="3" viewBox="0 0 1680 3" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <line x1="1" y1="1.55347" x2="1679" y2="1.55347" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" strokeDasharray="24 24"/>
// // </svg>
// //           </div>
// //         </div>

// //         {/* Main content */}
// //         <div className="relative py-10 overflow-hidden">
// //           <div
// //             className="flex transition-transform duration-700 ease-in-out"
// //             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// //           >
// //             {testimonials.map((testimonial) => (
// //               <div
// //                 key={testimonial.id}
// //                 className="w-full flex-shrink-0 px-8"
// //               >
// //                 <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start max-w-7xl mx-auto">
// //                   {/* Left side - Image */}
// //                   <div className="flex flex-col items-center">
// //                     <div className="w-96 h-80">
// //                       <img
// //                         src={testimonial.image}
// //                         alt={testimonial.name}
// //                         className="w-full h-full object-cover"
// //                       />
// //                     </div>
// //                     <div className="text-center">
// //                       <h3 className="text-2xl font-bold font-unbounded mt-4 w-fit uppercase">{testimonial.name}</h3>
// //                       <p className="text-gray-500 text-base mt-0.5 font-space tracking-wide">{testimonial.role}</p>
// //                     </div>
// //                   </div>

// //                   {/* Right side - Quote with vertical dashed line */}
// //                   <div className="relative pl-0 lg:pl-12 flex">
// //                     <div>
// //                       {/* Quote icon */}
// //                       <div className="text-7xl text-white leading-none font-space">"</div>

// //                       {/* Quote text */}
// //                       <p className="text-white text-2xl leading-relaxed italic font-cursive">
// //                         {testimonial.quote}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="w-full flex justify-end items-end gap-4 mt-16">
// //         {testimonials.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => goToSlide(index)}
// //             className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${
// //               currentSlide === index
// //                 ? 'bg-white'
// //                 : 'bg-neutral-700 hover:bg-gray-600'
// //             }`}
// //             aria-label={`Go to slide ${index + 1}`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function TestimonialsCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "SONIYA SHARMA",
//       role: "CFO - ARINOVA STUDIO",
//       image:
//         "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop",
//       quote:
//         "Figma Ipsum Component Variant Main Layer. Effect Export Edit Horizontal Bold. Device Connection Underline Outline Connection Outline Frame Slice Union Main. Draft Vector Vertical Fill Content Pencil Arrow. Distribute Star Reesizing Clip Layout. Horizontal Main Duplicate Component Polygon Subtract Underline Selection List. Link Share Share Figma Style Follower.",
//     },
//     {
//       id: 2,
//       name: "JOHN ANDERSON",
//       role: "CEO - TECH INNOVATIONS",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
//       quote:
//         "Outstanding service and exceptional quality. The team delivered beyond our expectations and transformed our vision into reality. Highly recommended for anyone looking for professional excellence.",
//     },
//     {
//       id: 3,
//       name: "MARIA GARCIA",
//       role: "Design Director - CREATIVE LAB",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
//       quote:
//         "Working with this team has been an absolute pleasure. Their attention to detail and commitment to delivering high-quality results is unmatched. A true partner in success.",
//     },
//     {
//       id: 4,
//       name: "DAVID CHEN",
//       role: "CTO - DIGITAL SOLUTIONS",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
//       quote:
//         "Incredible professionalism and technical expertise. They understood our needs perfectly and delivered a solution that exceeded all expectations. Truly exceptional work.",
//     },
//     {
//       id: 5,
//       name: "SARAH WILLIAMS",
//       role: "Marketing Lead - BRAND STUDIO",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
//       quote:
//         "The best decision we made was partnering with this team. Their creativity and strategic thinking helped us achieve remarkable results. Simply outstanding!",
//     },
//     {
//       id: 6,
//       name: "MICHAEL BROWN",
//       role: "Product Manager - INNOVATE CO",
//       image:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
//       quote:
//         "Exceptional quality and unwavering dedication to excellence. The team's expertise and professionalism shine through in every aspect of their work.",
//     },
//     {
//       id: 7,
//       name: "EMILY DAVIS",
//       role: "VP Operations - FUTURE TECH",
//       image:
//         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
//       quote:
//         "A game-changing partnership that has transformed our business. Their innovative approach and commitment to success is truly remarkable.",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [testimonials.length]);

//   const goToSlide = (index: number) => setCurrentSlide(index);

//   return (
//     <section className="bg-[#0b0b0b] text-white px-6 sm:px-10 md:px-16 lg:px-20 py-20 min-h-screen relative overflow-hidden">
//       {/* Header */}
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: false }}
//         className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-unbounded mb-20 tracking-tight text-center lg:text-left"
//       >
//         <span className="text-neutral-700">WHAT OUR </span>
//         <span className="text-white">CLIENTS</span>
//         <span className="text-neutral-700"> SAY</span>
//       </motion.h1>

//       {/* Main content */}
//       <div className="relative py-10 max-w-7xl">
//               <motion.div
//               initial={{opacity: 0}}
//             whileInView={{opacity: 1}}
//             viewport={{once: false}}
//             transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
//               className="absolute top-0 left-0 right-0 h-px flex">
//         <div>
//           <svg
//             width="1680"
//             height="3"
//             viewBox="0 0 1680 3"
//             fill="none"
//             xmlns="http:ww.w3.org/2000/svg"
//           >
//             <line
//               x1="1"
//               y1="1.55347"
//               x2="1679"
//               y2="1.55347"
//               stroke="#8F8F8F"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeDasharray="24 24"
//             />
//           </svg>
//         </div>
//       </motion.div>

//             <motion.div
//             initial={{opacity: 0}}
//             whileInView={{opacity: 1}}
//             viewport={{once: false}}
//             transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
//             className="absolute bottom-0 left-0 right-0 h-px flex">
//         <div>
//           <svg
//             width="1680"
//             height="3"
//             viewBox="0 0 1680 3"
//             fill="none"
//             xmlns="http:ww.w3.org/2000/svg"
//           >
//             <line
//               x1="1"
//               y1="1.55347"
//               x2="1679"
//               y2="1.55347"
//               stroke="#8F8F8F"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeDasharray="24 24"
//             />
//           </svg>
//         </div>
//       </motion.div>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={testimonials[currentSlide].id}
//             initial={{ opacity: 0, y: 50, scale: 0.98 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -50, scale: 0.98 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start px-20"
//           >
//             {/* Left side - Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               className="flex flex-col items-center justify-center"
//             >
//               <motion.img
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 src={testimonials[currentSlide].image}
//                 alt={testimonials[currentSlide].name}
//                 className="w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 object-cover"
//               />
//               <h3 className="text-2xl font-bold font-unbounded mt-4 uppercase">
//                 {testimonials[currentSlide].name}
//               </h3>
//               <p className="text-gray-500 text-base mt-0.5 font-space tracking-wide">
//                 {testimonials[currentSlide].role}
//               </p>
//             </motion.div>

//             {/* Right side - Quote */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="relative flex flex-col justify-center"
//             >
//               <div className="text-7xl text-white leading-none font-space mb-4">
//                 "
//               </div>
//               <p className="text-white text-xl sm:text-2xl leading-relaxed italic font-cursive">
//                 {testimonials[currentSlide].quote}
//               </p>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Dots Navigation */}
//       <div className="flex justify-center lg:justify-end gap-3 mt-12">
//         {testimonials.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => goToSlide(index)}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentSlide === index
//                 ? "bg-white"
//                 : "bg-neutral-700 hover:bg-gray-500"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    },
    {
      id: 4,
      name: "DAVID CHEN",
      role: "CTO - DIGITAL SOLUTIONS",
      image:
        "https://cdn.dribbble.com/users/1121006/screenshots/15638503/media/8c33c3c3751e4e8c6b7b4c8c8e8e8e8e.jpg?resize=800x600&vertical=center",
      quote:
        "We engaged this team for a complex e-commerce platform rebuild, and the results were outstanding. They modernized our tech stack, improved site speed by 60%, and implemented robust security measures. Their technical decisions have positioned us for scalable growth over the next 5 years.",
    },
    {
      id: 5,
      name: "SARAH WILLIAMS",
      role: "Marketing Lead - BRAND STUDIO",
      image:
        "https://cdn.dribbble.com/users/1121006/screenshots/15638503/media/8c33c3c3751e4e8c6b7b4c8c8e8e8e8e.jpg?resize=800x600&vertical=center",
      quote:
        "Our new website has become our most powerful marketing tool. The team built a platform that not only looks stunning but converts visitors into customers at an unprecedented rate. Their understanding of user experience and conversion optimization principles is exceptional. Our online revenue has increased by 150% since launch.",
    },
    {
      id: 6,
      name: "MICHAEL BROWN",
      role: "Product Manager - INNOVATE CO",
      image:
        "https://cdn.dribbble.com/users/1121006/screenshots/15638503/media/8c33c3c3751e4e8c6b7b4c8c8e8e8e8e.jpg?resize=800x600&vertical=center",
      quote:
        "The team's agile development approach and clear communication made managing our product roadmap effortless. They delivered features on time, within budget, and with quality that exceeded our expectations. Their proactive problem-solving saved us countless hours and potential roadblocks.",
    },
    {
      id: 7,
      name: "EMILY DAVIS",
      role: "VP Operations - FUTURE TECH",
      image:
        "https://cdn.dribbble.com/users/1121006/screenshots/15638503/media/8c33c3c3751e4e8c6b7b4c8c8e8e8e8e.jpg?resize=800x600&vertical=center",
      quote:
        "From initial consultation to final delivery, the professionalism and expertise demonstrated by this team were remarkable. They transformed our outdated web presence into a modern, high-performing digital platform that accurately represents our brand. The entire process was collaborative, transparent, and delivered exceptional value.",
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
                className="relative w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 overflow-hidden"
              >
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-full h-full object-cover rounded-lg"
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