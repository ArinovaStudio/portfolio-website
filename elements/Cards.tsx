"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Cards({ blog }: { blog: any }) {
  return (
    <motion.div
      key={blog.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: blog.id * 0.2 }}
      viewport={{ once: false }}
      whileHover={{ y: -8 }}
      className="flex flex-col overflow-hidden border border-transparent group transition-transform duration-500"
    >
      {/* Image */}
      <div className="w-full h-80 overflow-hidden">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Text Section */}
      <div className="pt-4 pb-2">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-[#9b5cff] font-dm text-lg mb-1"
        >
          {blog.author}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          viewport={{ once: false }}
          className="text-2xl sm:text-3xl font-space font-medium mb-4 text-white"
        >
          {blog.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: false }}
          className="text-neutral-500 font-space font-light text-sm sm:text-base"
        >
          {blog.description}
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
          <span className="text-base">{blog.date}</span>
        </div>

        <Link
          href="#"
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
        </Link>
      </motion.div>
    </motion.div>
  );
}

