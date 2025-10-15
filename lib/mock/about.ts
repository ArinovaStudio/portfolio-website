import { LucideGlobe, LucideInstagram, LucideLinkedin } from "lucide-react";
import a from "@/public/assets/adarsh.jpeg";
import r from "@/public/assets/rajneesh.png";
import s from "@/public/assets/sayam.jpg";
import aq from "@/public/assets/aquib.jpg";
import ash from "@/public/assets/ashutosh.jpg";

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
        icon: LucideInstagram,
      },
      {
        title: "Linkedin",
        url: "https://linkedin.com/in/devadarsh",
        icon: LucideLinkedin,
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
        icon: LucideInstagram,
      },
            {
        title: "linkedin",
        url: "https://linkedin.com/in/rajneesh-verma-4a871825b",
        icon: LucideLinkedin,
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
        icon: LucideInstagram,
      },
      {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/sayam-khajuria",
        icon: LucideLinkedin,
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
        icon: LucideLinkedin,
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
        icon: LucideInstagram,
      },
    ],
  },
];
