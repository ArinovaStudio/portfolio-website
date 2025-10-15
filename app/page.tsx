'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import MiniLoader from '@/elements/SmallLoader';
import Loader from '@/elements/Loader';
import Hero from '@/pages/Hero';

// Loaders
// import Loader from '@/components/Loader';
// import MiniLoader from '@/components/MiniLoader';

// Dynamically import all components with MiniLoader fallback
const Navbar = dynamic(() => import('@/elements/Navbar'), { loading: () => <MiniLoader /> });
// const Hero = dynamic(() => import('@/pages/Hero'), { loading: () => <MiniLoader /> });
const Approch = dynamic(() => import('@/pages/Approch'), { loading: () => <MiniLoader /> });
const Portfolio = dynamic(() => import('@/pages/Portfolio'), { loading: () => <MiniLoader /> });
const AboutCompany = dynamic(() => import('@/pages/About'), { loading: () => <MiniLoader /> });
const Services = dynamic(() => import('@/pages/Services'), { loading: () => <MiniLoader /> });
const DesignGallery = dynamic(() => import('@/pages/DesignGallery'), { loading: () => <MiniLoader /> });
const CaseStudiesScroll = dynamic(() => import('@/pages/CaseStudies'), { loading: () => <MiniLoader /> });
const Blogs = dynamic(() => import('@/pages/Blogs'), { loading: () => <MiniLoader /> });
const TestimonialsCarousel = dynamic(() => import('@/pages/testimonials'), { loading: () => <MiniLoader /> });
const Contact = dynamic(() => import('@/pages/Contacts'), { loading: () => <MiniLoader /> });
const Footer = dynamic(() => import('@/elements/Footer'), { loading: () => <MiniLoader /> });

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Hero />
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
  );
}
