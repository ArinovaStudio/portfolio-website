import { LucideGlobe } from "lucide-react";
import a from "@/public/assets/adarsh.jpeg";
import r from "@/public/assets/rajneesh.png";
import s from "@/public/assets/sayam.jpg";
import aq from "@/public/assets/aquib.jpg";
import ash from "@/public/assets/ashutosh.jpg";
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
    name: "Rajneesh Verma",
    image: r,
    position: "Managing Director",
    links: [
      {
        title: "instagram",
        url: "https://instagram.com/rajneeshmeenaverma",
        icon: FaInstagram,
      },
            {
        title: "linkedin",
        url: "https://linkedin.com/in/rajneesh-verma-4a871825b",
        icon: FaLinkedinIn,
      },
                  {
        title: "twitter",
        url: "https://x.com/",
        icon: FaXTwitter,
      },
    ],
  },
  {
    name: "Sayam Khajuria",
    image: s,
    position: "COO, CO-Founder",
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
    name: "Ashutosh Pandey",
    image: ash,
    position: "Chief Technical Officer (CTO)",
    links: [
      {
        title: "linkedin",
        url: "https://linkedin.com/in/ashutosh-pandey-87543b269",
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
