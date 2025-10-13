"use client";

import React from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Cards from "@/elements/Cards";
import {motion} from "framer-motion"

const blogs = [
  {
    id: 1,
    image: "https://picsum.photos/1080/1080", // Replace with your real image
    author: "Adarsh Pandit",
    title: "Title Of The Blog",
    description:
      "Figma Ipsum Component Variant Main Layer. Background Ipsum List Edit Selection Share Figma Stroke. Strikethrough Pixel Flatten Scale...",
    date: "02/10/2025",
  },
  {
    id: 2,
    image: "https://picsum.photos/1080/1080",
    author: "Adarsh Pandit",
    title: "Title Of The Blog",
    description:
      "Figma Ipsum Component Variant Main Layer. Background Ipsum List Edit Selection Share Figma Stroke. Strikethrough Pixel Flatten Scale...",
    date: "02/10/2025",
  },
  {
    id: 3,
    image: "https://picsum.photos/1080/1080",
    author: "Adarsh Pandit",
    title: "Title Of The Blog",
    description:
      "Figma Ipsum Component Variant Main Layer. Background Ipsum List Edit Selection Share Figma Stroke. Strikethrough Pixel Flatten Scale...",
    date: "02/10/2025",
  },
];

export default function Blogs() {
  return (
    <section className="bg-[#0b0b0b] text-white px-6 md:px-16 lg:px-24 py-16 min-h-screen h-screen relative">
      {/* Heading and View All */}
      <div className="flex justify-between items-start mb-10">
        <motion.h2 
            initial={{x: -600}}
            whileInView={{x: 0}}
            viewport={{once: false}}
            transition={{ duration: 1.5, delay: 0.8, type: 'spring', stiffness: 300 }}

        className="text-9xl font-unbounded font-bold leading-none text-white mix-blend-exclusion tracking-tight">
          BLOGS
        </motion.h2>
        <Link
          href="#"
          className="text-[#9b5cff] font-space text-lg font-semibold uppercase tracking-wide mt-4 hover:text-[#a26cff] transition-colors"
        >
          VIEW ALL
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="w-full h-5/6 -mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {blogs.map((blog) => (
            <Cards blog={blog} key={blog.id}/>
        ))}
      </div>
    </section>
  );
}
