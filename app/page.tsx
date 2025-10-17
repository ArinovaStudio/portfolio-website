// "use client";

// import { Suspense, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import MiniLoader from "@/elements/SmallLoader";
// import Hero from "@/pages/Hero";
// import Loader from "@/elements/Loader";
// import { AnimatePresence } from "framer-motion";


// export default function Home() {
//   const [showContent, setShowContent] = useState(false);

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setShowContent(true)
//   //   }, 2000);
//   //   return () => clearTimeout(timer)
//   // }, [])
//   return (
//     <>
//       {!showContent && <Loader onComplete={() => setShowContent(true)}/>}
//             <Hero />
//           <Suspense fallback={<MiniLoader />}>
//             <Navbar />
//             <Portfolio />
//             <AboutCompany />
//             <Services />
//             <Approch />
//             <CaseStudiesScroll />
//             <DesignGallery />
//             <Blogs />
//             <TestimonialsCarousel />
//             <Contact />
//             <Footer />
//           </Suspense>
//     </>
//   );
// }

"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import MiniLoader from "@/elements/SmallLoader";
import Hero from "@/pages/Hero";
import Loader from "@/elements/Loader";

const Navbar = dynamic(() => import("@/elements/Navbar"), {
  loading: () => <MiniLoader />,
});

const Approch = dynamic(() => import("@/pages/Approch"), {
  loading: () => <MiniLoader />,
});
const Portfolio = dynamic(() => import("@/pages/Portfolio"), {
  loading: () => <MiniLoader />,
});
const AboutCompany = dynamic(() => import("@/pages/About"), {
  loading: () => <MiniLoader />,
});
const Services = dynamic(() => import("@/pages/Services"), {
  loading: () => <MiniLoader />,
});
const DesignGallery = dynamic(() => import("@/pages/DesignGallery"), {
  loading: () => <MiniLoader />,
});
const CaseStudiesScroll = dynamic(() => import("@/pages/CaseStudies"), {
  loading: () => <MiniLoader />,
});
const Blogs = dynamic(() => import("@/pages/Blogs"), {
  loading: () => <MiniLoader />,
});
const TestimonialsCarousel = dynamic(() => import("@/pages/testimonials"), {
  loading: () => <MiniLoader />,
});
const Contact = dynamic(() => import("@/pages/Contacts"), {
  loading: () => <MiniLoader />,
});
const Footer = dynamic(() => import("@/elements/Footer"), {
  loading: () => <MiniLoader />,
});


export default function Home() {
  return (
    <>
      {/* Loader on top, content is already mounted underneath */}
      <Loader />

      {/* Main content is rendered immediately but loader hides it */}
      <div style={{ position: "relative", zIndex: 0 }}>
        <Hero />
        <Suspense fallback={<MiniLoader />}>
          <Navbar />
          <Portfolio />
          <AboutCompany />
          <Services />
          <Approch />
          <CaseStudiesScroll />
          <DesignGallery />
          <Blogs />
          <TestimonialsCarousel />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

