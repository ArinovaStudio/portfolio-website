"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

export default function Cards({ blog }: { blog: any }) {
  // console.log(blog)
  const router = useRouter()
  return (
    <motion.div
      key={blog.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: blog.id * 0.2 }}
      viewport={{ once: false }}
      className="flex flex-col overflow-hidden border border-transparent group transition-transform duration-200 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="w-full h-80 overflow-hidden">
        <Image
          src={urlFor(blog.mainImage).url()}
          alt={blog.title}
          width={1080}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="pt-4 pb-2">
        <div className="flex gap-2.5 items-center">

        <div className="w-6 h-6 my-1 overflow-hidden">
          {blog.author.image ? (
            <Image 
            src={urlFor(blog.author.image).url()}
            alt={blog.author.name}
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full bg-purple-400/10 text-purple-500 grid place-items-center rounded-full">{blog.author.name.charAt(0)}</div>
          )}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-[#9b5cff] font-dm text-lg mb-1"
        >
          {blog.author.name}
        </motion.p>
          </div>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          viewport={{ once: false }}
          className="text-base sm:text-xl font-space font-medium mb-4 text-white"
        >
          {blog.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: false }}
          className="text-neutral-500 line-clamp-2 font-space font-light text-sm sm:text-base"
        >
          {blog.miniDescription}
        </motion.p>
      </div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
        className="flex justify-between items-center pt-4 text-sm text-neutral-200 font-space"
      >
        <div className="flex items-center gap-2">
          <Calendar size={20} className="text-gray-400" />
          <span className="text-base">{blog.publishedAt.split("T")[0]}</span>
        </div>

        <div
        onClick={() => router.push(`/blogs/${blog.slug.current}`)}
          // href={blog.slug.current}
          className="flex items-center gap-1 text-lg text-white border-b border-white/60 hover:text-[#9b5cff] transition-colors group-hover:border-[#9b5cff]"
        >
          Read More{" "}
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <ArrowUpRight size={20} />
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

