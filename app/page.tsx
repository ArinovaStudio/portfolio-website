import Footer from "@/elements/Footer";
import Navbar from "@/elements/Navbar";
import AboutCompany from "@/pages/About";
import Approch from "@/pages/Approch";
import Blogs from "@/pages/Blogs";
import CaseStudiesScroll from "@/pages/CaseStudies";
import Contact from "@/pages/Contacts";
import DesignGallery from "@/pages/DesignGallery";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import TestimonialsCarousel from "@/pages/testimonials";

export default function Home() {
  return (
    <>
    <Navbar />
    <Approch />
    <Portfolio />
    <AboutCompany />
    <Services />
    <DesignGallery />
    <CaseStudiesScroll />
    {/* <Blogs /> */}
    <TestimonialsCarousel />
    <Contact />
    <Footer />
    </>
  );
}
