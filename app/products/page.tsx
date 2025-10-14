"use client";

import { useCursor } from '@/elements/CursorContext'
import Footer from '@/elements/Footer'
import Navbar from '@/elements/Navbar'
import Title from '@/elements/Title'
import Image from 'next/image'
import React, { useEffect, useState, useTransition } from 'react'
import { motion } from 'framer-motion'
import { fetchData } from '@/sanity/lib/fetch';
import MiniLoader from '@/elements/SmallLoader';

function page() {
    const {setCursor} = useCursor()
      const [products, setProducts] = useState<any>([])
      const [transition, startTransition] = useTransition();
    
      const getData = () => startTransition(async () => {
        const data = await fetchData("caseStudies")
        if (data) {
          console.log(data);
          setProducts(data)
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
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }
    
    return (
        <>
            <Navbar />
            <div className="w-screen min-h-screen h-auto">
                <Title 
                    title='Our own creatioons'
                    slogan='We not only help businesses to grow we create our own products as well'
                />
                <motion.div 
                    className="flex flex-wrap w-full px-4 sm:px-8 md:px-12 lg:px-16 gap-4 sm:gap-8 md:gap-12 lg:gap-16 justify-start items-center my-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {
                        products.map((items: any, i: number) => (
                    <motion.div 
                        className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-1.5rem)] lg:w-[47%] h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[30rem] relative overflow-hidden"
                        variants={itemVariants as any}
                    >
                        <Image 
                            src={"https://picsum.photos/1080/1080"} 
                            alt='okay' 
                            fill 
                            className="object-cover"
                        />
                        <h1 className='mix-blend-difference text-xl sm:text-2xl md:text-3xl lg:text-4xl font-unbounded text-right text-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 relative z-50'>
                            Title for the page
                        </h1>
                        <div  
                            onMouseEnter={() => setCursor("label", "View")} 
                            onMouseLeave={() => setCursor("default")} 
                            className="w-full h-full absolute inset-0 z-10 group bg-black/20 hover:bg-black/40 transition-colors duration-300 flex justify-start items-end px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                        >
                            <p className='text-sm sm:text-base md:text-lg lg:text-xl font-space w-full sm:w-5/6 md:w-3/4 text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, porro.
                            </p>
                        </div>
                    </motion.div>
                                            ))
                    }
                </motion.div>
            </div>
            <Footer />
        </>
    )
}

export default page