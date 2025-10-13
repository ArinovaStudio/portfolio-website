"use client";

import React from 'react'
import { motion } from 'framer-motion'

function Title({title, slogan}: {title: string, slogan: string}) {
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  
  const sloganVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  }
  
  return (
    <div className='flex flex-col md:flex-row pt-16 md:pt-20 justify-between px-4 sm:px-6 md:px-8 items-start md:items-center gap-4 sm:gap-6 md:gap-8'>
      <motion.h1 
        className='font-stretch uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'
        variants={titleVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className='text-base sm:text-lg md:text-xl lg:text-2xl font-light font-cursive italic w-full md:w-3/6 lg:w-3/6 text-left md:text-right text-neutral-400'
        variants={sloganVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {slogan}
      </motion.p>
    </div>
  )
}

export default Title