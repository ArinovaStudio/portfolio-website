"use client";


import Cards from '@/elements/Cards'
import Footer from '@/elements/Footer'
import Navbar from '@/elements/Navbar'
import MiniLoader from '@/elements/SmallLoader'
import Title from '@/elements/Title'
import { fetchData } from '@/sanity/lib/fetch'
import Link from 'next/link';
import React, { useEffect, useState, useTransition } from 'react'


function page() {
    const [blogs, setCaseStudies] = useState<any>([])
    const [transition, startTransition] = useTransition();
  
    const getData = () => startTransition(async () => {
      const data = await fetchData("posts")
      if (data) {
        console.log(data);
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
    <>
        <Navbar />
        <div className="w-screen min-h-screen h-auto">
            <Title 
            title='Bloggs'
            slogan="Insights, trends, and ideas shaping the future."
            />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8">
        {
            blogs.map((items: any, idx: number) => (
                <Link href={`/blogs/${items.slug.current}`} key={idx} className="w-full">
                <Cards 
                blog={items}
                key={idx}
                />
                </Link>
            ))
        }
        </div>
        </div>
        <Footer />
    </>
  )
}

export default page