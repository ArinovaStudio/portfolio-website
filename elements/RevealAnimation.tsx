// // "use client";

// // import { motion } from "framer-motion";

// // const revealVariant = (direction: string) => ({
// //   hidden: {
// //     y: direction === "up" ? 300 : -300,
// //     rotateX: direction === "up" ? 145 : -145,
// //     opacity: 0,
// //     filter: "blur(10px)",
// //     scale: 0.9,
// //   },
// //   visible: (i: any) => ({
// //     y: 0,
// //     rotateX: 0,
// //     opacity: 1,
// //     filter: "blur(0px)",
// //     scale: 1,
// //     transition: {
// //       delay: i * 0.08,
// //       duration: 1.2,
// //       ease: [0.25, 1, 0.5, 1], // smooth cubic-bezier
// //     },
// //   }),
// // });

// // export default function AnimatedTitle() {
// //   const title1 = "ARINOVA";
// //   const title2 = "STUDIO";

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen text-center overflow-hidden perspective-[1000px]">
// //       {/* ARINOVA (Upward Reveal) */}
// //       <motion.h1
// //         className="font-unbounded font-bold text-[12rem] uppercase leading-[0.8] py-2 text-neutral-100 flex justify-center"
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         {title1.split("").map((char, i) => (
// //           <motion.span
// //             key={i}
// //             custom={i}
// //             variants={revealVariant("up") as any}
// //             style={{ display: "inline-block" }}
// //           >
// //             {char}
// //           </motion.span>
// //         ))}
// //       </motion.h1>

// //       {/* STUDIO (Downward Reveal) */}
// //       <motion.h1
// //         className="font-space font-bold text-[10rem] uppercase text-neutral-100 flex justify-center"
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         {title2.split("").map((char, i) => (
// //           <motion.span
// //             key={i}
// //             custom={i}
// //             variants={revealVariant("down") as any}
// //             style={{ display: "inline-block" }}
// //           >
// //             {char}
// //           </motion.span>
// //         ))}
// //       </motion.h1>
// //     </div>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";

// const revealVariant = (direction: string) => ({
//   hidden: {
//     y: direction === "up" ? 300 : -300,
//     rotateX: direction === "up" ? 145 : -145,
//     opacity: 0,
//     filter: "blur(10px)",
//     scale: 0.9,
//   },
//   visible: (i: any) => ({
//     y: 0,
//     rotateX: 0,
//     opacity: 1,
//     filter: "blur(0px)",
//     scale: 1,
//     transition: {
//       delay: i * 0.08,
//       duration: 1.2,
//       ease: [0.25, 1, 0.5, 1],
//     },
//   }),
// });

// export default function AnimatedTitle() {
//   const title1 = "ARINOVA";
//   const title2 = "STUDIO";

//   return (
//     <div className="flex flex-col items-center justify-center h-screen text-center overflow-hidden perspective-[1000px] px-4">
//       {/* ARINOVA (Upward Reveal) */}
//       <motion.h1
//         className="font-unbounded font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] uppercase leading-[0.8] py-2 text-neutral-100 flex justify-center flex-wrap"
//         initial="hidden"
//         animate="visible"
//       >
//         {title1.split("").map((char, i) => (
//           <motion.span
//             key={i}
//             custom={i}
//             variants={revealVariant("up") as any}
//             style={{ display: "inline-block" }}
//           >
//             {char}
//           </motion.span>
//         ))}
//       </motion.h1>

//       {/* STUDIO (Downward Reveal) */}
//       <motion.h1
//         className="font-space font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] uppercase text-neutral-100 flex justify-center flex-wrap"
//         initial="hidden"
//         animate="visible"
//       >
//         {title2.split("").map((char, i) => (
//           <motion.span
//             key={i}
//             custom={i}
//             variants={revealVariant("down") as any}
//             style={{ display: "inline-block" }}
//           >
//             {char}
//           </motion.span>
//         ))}
//       </motion.h1>
//     </div>
//   );
// }

"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const revealVariant = (direction: string) => ({
  hidden: {
    y: direction === "up" ? 300 : -300,
    rotateX: direction === "up" ? 145 : -145,
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.9,
  },
  visible: (i: any) => ({
    y: 0,
    rotateX: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
});

export default function AnimatedTitle() {
  const title1 = "ARINOVA";
  const title2 = "STUDIO";
  const studioControls = useAnimation(); // animation controller for STUDIO

  useEffect(() => {
    // Start the STUDIO reveal animation
    studioControls.start("visible");

    // After 3 seconds, fade out the STUDIO text
    const timer = setTimeout(() => {
      studioControls.start({
        opacity: 0,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [studioControls]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center overflow-hidden perspective-[1000px] px-4">
      {/* ARINOVA (Upward Reveal) */}
      <motion.h1
        className="font-unbounded font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] uppercase leading-[0.8] py-2 text-neutral-100 flex justify-center flex-wrap"
        initial="hidden"
        animate="visible"
      >
        {title1.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={revealVariant("up") as any}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* STUDIO (Downward Reveal + Fade Out after 3s) */}
      <motion.h1
        className="font-space font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] uppercase text-neutral-100 flex justify-center flex-wrap"
        initial="hidden"
        animate={studioControls}
      >
        {title2.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={revealVariant("down") as any}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
