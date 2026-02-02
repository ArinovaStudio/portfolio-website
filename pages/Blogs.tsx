"use client";

import React, { useEffect, useState, useTransition } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Cards from "@/elements/Cards";
import {motion} from "framer-motion"
import { fetchData } from "@/sanity/lib/fetch";
import MiniLoader from "@/elements/SmallLoader";

export default function Blogs() {
      const [blogs, setCaseStudies] = useState<any>([])
    const [transition, startTransition] = useTransition();
  
    const getData = () => startTransition(async () => {
      const data = await fetchData("posts")
      if (data) {
        setCaseStudies(data)
      }
    })
  
    useEffect(() => {
      getData()
    }, [])
  
    if (transition) {
      return (
        <MiniLoader />
      )
    }
  return (
    <section className="bg-[#0b0b0b] text-white px-6 md:px-16 lg:px-24 py-16 min-h-screen lg:h-screen h-auto relative">
      {/* Heading and View All */}
      <div className="flex justify-between items-start mb-10">
        <motion.h2 
            initial={{x: -600}}
            animate={{x: 0}}
            viewport={{once: false}}
            transition={{ duration: 1.5, delay: 0.8, type: 'spring', stiffness: 300 }}

        className="text-4xl mt-10 sm:mt-0 sm:text-9xl font-unbounded font-bold leading-none text-white mix-blend-exclusion tracking-tight">
          BLOGS
        </motion.h2>
        <Link
          href="/blogs"
          className="text-[#9b5cff] font-space text-lg font-semibold uppercase tracking-wide mt-4 hover:text-[#a26cff] transition-colors"
        >
          VIEW ALL
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="w-full h-1/2 sm:h-5/6 mt-0 sm:-mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {
            blogs.slice(0, 3).map((items: any, idx: number) => (
                <Link href={`/blogs/${items.slug.current}`} key={idx}>
                <Cards 
                blog={items}
                key={idx}
                />
                </Link>
            ))
        }
      </div>
    </section>
  );
}
