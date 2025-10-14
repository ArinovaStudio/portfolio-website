// "use client";

// import Footer from "@/elements/Footer";
// import Navbar from "@/elements/Navbar";
// import Title from "@/elements/Title";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useScroll } from "framer-motion";
// import { useCursor } from "@/elements/CursorContext";

// function page() {
//   const { setCursor } = useCursor();
//   const caseStudies = [
//     {
//       id: 1,
//       business: "E-Commerce Platform",
//       description:
//         "to revolutionize their online presence with a scalable, high-performance website that drove massive revenue growth through strategic UX optimization and conversion-focused design",
//       percentage: "98%",
//       image:
//         "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1600&fit=crop",
//       stats: [
//         { label: "Revenue Growth", value: "98%" },
//         { label: "Conversion ↑", value: "45%" },
//         { label: "ROI", value: "6.2x" },
//         { label: "Time to Value", value: "10 weeks" },
//       ],
//     },
//     {
//       id: 2,
//       business: "SaaS Startup",
//       description:
//         "transform their product vision into a powerful web application with intuitive design and smart conversion funnels that dramatically increased user acquisition",
//       percentage: "86%",
//       image:
//         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=1600&fit=crop",
//       stats: [
//         { label: "Revenue Growth", value: "86%" },
//         { label: "Conversion ↑", value: "33%" },
//         { label: "ROI", value: "4.8x" },
//         { label: "Time to Value", value: "8 weeks" },
//       ],
//     },
//     {
//       id: 3,
//       business: "Tech Company",
//       description:
//         "elevate their digital experience through comprehensive product design and UX improvements, resulting in exceptional user retention and engagement metrics",
//       percentage: "74%",
//       image:
//         "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=1600&fit=crop",
//       stats: [
//         { label: "Retention ↑", value: "74%" },
//         { label: "Engagement ↑", value: "52%" },
//         { label: "Churn ↓", value: "18%" },
//         { label: "Time to Value", value: "6 weeks" },
//       ],
//     },
//   ];

//   // Variants
//   const leftVariants = {
//     enter: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.9, ease: "circOut" },
//     },
//     exit: {
//       opacity: 0,
//       y: 30,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//   };

//   const rightVariants = {
//     enter: {
//       opacity: 1,
//       scale: 1,
//       x: 0,
//       transition: { duration: 0.9, ease: "circOut" },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.98,
//       x: 20,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//   };

//   // Stats container & item variants (staggered)
//   const statsContainer = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.18,
//       },
//     },
//   };

//   const statItem = {
//     hidden: { opacity: 0, y: 10, scale: 0.98 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="w-screen min-h-screen h-auto">
//         <Title
//           title="Case Studdies"
//           slogan="We have helped many businesses next can be yours"
//         />

//         {caseStudies.map((study, i) => (
//           <div
//             className={`flex flex-col lg:justify-between lg:items-center px-4 sm:px-8 lg:px-14 gap-6 lg:gap-12 py-6 lg:py-6 w-full min-h-[80vh] lg:h-[80vh] ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
//             key={i}
//           >
//             <div className="w-full lg:w-3/5 h-auto lg:h-full flex flex-col justify-center items-start">
//               <div className="mb-4">
//                 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-0">
//                   <div className="w-full lg:w-3/5">
//                     <p className="text-gray-400 text-sm sm:text-base font-dm mb-2">
//                       We Helped <span className="text-white">{study.business}</span>{" "}
//                       {study.description}
//                     </p>
//                   </div>

//                   <div className="text-5xl sm:text-6xl md:text-7xl font-semibold font-unbounded">
//                     {study.percentage}
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 lg:mt-6">
//                 {study.stats.map((s, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-transparent p-3 rounded-md flex flex-col"
//                   >
//                     <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-unbounded font-semibold text-gray-300">
//                       {s.value}
//                     </div>
//                     <div className="text-sm sm:text-base lg:text-lg text-gray-400 mt-1">{s.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="w-full lg:w-1/3 h-64 sm:h-80 lg:h-full flex justify-center items-center">
//               <svg
//                 width="100%"
//                 height="80%"
//                 viewBox="0 0 545 725"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 className="max-w-full h-full block"
//               >
//                 <defs>
//                   <clipPath id={`imageClip-${study.id}`}>
//                     <path d="M0 0H397.396L471.938 65.1907L545 135.32V725H114.529L55.5 667.318L0 609.435V0Z" />
//                   </clipPath>
//                   <filter id={`grayscale-${study.id}`}>
//                     <feColorMatrix type="saturate" values="0" />
//                   </filter>
//                 </defs>

//                 <image
//                   href={study.image}
//                   width="545"
//                   height="725"
//                   clipPath={`url(#imageClip-${study.id})`}
//                   filter={`url(#grayscale-${study.id})`}
//                   preserveAspectRatio="xMidYMid slice"
//                 />
//               </svg>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default page;

"use client";

import Footer from "@/elements/Footer";
import Navbar from "@/elements/Navbar";
import Title from "@/elements/Title";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "@/elements/CursorContext";

function page() {
  const { setCursor } = useCursor();
  const caseStudies = [
    {
      id: 1,
      business: "E-Commerce Platform",
      description:
        "to revolutionize their online presence with a scalable, high-performance website that drove massive revenue growth through strategic UX optimization and conversion-focused design",
      percentage: "98%",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1600&fit=crop",
      stats: [
        { label: "Revenue Growth", value: "98%" },
        { label: "Conversion ↑", value: "45%" },
        { label: "ROI", value: "6.2x" },
        { label: "Time to Value", value: "10 weeks" },
      ],
    },
    {
      id: 2,
      business: "SaaS Startup",
      description:
        "transform their product vision into a powerful web application with intuitive design and smart conversion funnels that dramatically increased user acquisition",
      percentage: "86%",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=1600&fit=crop",
      stats: [
        { label: "Revenue Growth", value: "86%" },
        { label: "Conversion ↑", value: "33%" },
        { label: "ROI", value: "4.8x" },
        { label: "Time to Value", value: "8 weeks" },
      ],
    },
    {
      id: 3,
      business: "Tech Company",
      description:
        "elevate their digital experience through comprehensive product design and UX improvements, resulting in exceptional user retention and engagement metrics",
      percentage: "74%",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=1600&fit=crop",
      stats: [
        { label: "Retention ↑", value: "74%" },
        { label: "Engagement ↑", value: "52%" },
        { label: "Churn ↓", value: "18%" },
        { label: "Time to Value", value: "6 weeks" },
      ],
    },
  ];

  // Variants
  const leftVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "circOut" },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const rightVariants = {
    enter: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.9, ease: "circOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      x: 20,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // Stats container & item variants (staggered)
  const statsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.18,
      },
    },
  };

  const statItem = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen h-auto pb-24">
        <Title
          title="Case Studdies"
          slogan="We have helped many businesses next can be yours"
        />

        {caseStudies.map((study, i) => (
          <div
            className={`flex flex-col lg:justify-between lg:items-center px-4 sm:px-8 lg:px-14 gap-6 lg:gap-12 py-6 lg:py-16 sm:mt-12 mt-4 w-full min-h-[80vh] lg:h-[80vh] ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            key={i}
          >
            <div className="w-full lg:w-3/5 h-auto lg:h-full flex flex-col justify-center items-start">
              <div className="mb-4">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-0">
                  <div className="w-full lg:w-3/5">
                    <p className="text-gray-400 text-sm sm:text-base font-dm mb-2">
                      We Helped <span className="text-white">{study.business}</span>{" "}
                      {study.description}
                    </p>
                  </div>

                  <div className="text-5xl sm:text-6xl md:text-7xl font-semibold font-unbounded">
                    {study.percentage}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 lg:mt-6">
                {study.stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-transparent p-3 rounded-md flex flex-col"
                  >
                    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-unbounded font-semibold text-gray-300">
                      {s.value}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg text-gray-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 545 725"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                className="max-w-xs sm:max-w-sm lg:max-w-full h-auto lg:h-full block"
                style={{ aspectRatio: '545/725' }}
              >
                <defs>
                  <clipPath id={`imageClip-${study.id}`}>
                    <path d="M0 0H397.396L471.938 65.1907L545 135.32V725H114.529L55.5 667.318L0 609.435V0Z" />
                  </clipPath>
                  <filter id={`grayscale-${study.id}`}>
                    <feColorMatrix type="saturate" values="0" />
                  </filter>
                </defs>

                <image
                  href={study.image}
                  width="545"
                  height="725"
                  clipPath={`url(#imageClip-${study.id})`}
                  filter={`url(#grayscale-${study.id})`}
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default page;