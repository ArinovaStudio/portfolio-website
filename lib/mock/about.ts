import { LucideGlobe } from "lucide-react";
import a from "@/public/assets/adarsh.jpeg";
import s from "@/public/assets/sayam.jpg";
import aq from "@/public/assets/aquib.jpg";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const founders = [
  {
    name: "Adarsh Pandit",
    image: a,
    position: "CEO, Founder",
    links: [
      {
        title: "website",
        url: "https://adarshpandit.vercel.app",
        icon: LucideGlobe,
      },
      {
        title: "instagram",
        url: "https://instagram.com/innovative.adarsh",
        icon: FaInstagram,
      },
      {
        title: "Linkedin",
        url: "https://linkedin.com/in/devadarsh",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "Sayam Khajuria",
    image: s,
    position: "M.D, CO-Founder",
    links: [
      {
        title: "instagram",
        url: "https://www.instagram.com/sayam.khajuria",
        icon: FaInstagram,
      },
      {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/sayam-khajuria",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "Aquib Ahmed",
    image: aq,
    position: "Senior Supervisor",
    links: [
      {
        title: "instagram",
        url: "https://instagram.com",
        icon: FaInstagram,
      },
    ],
  },
];
