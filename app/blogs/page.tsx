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
            slogan='read the best blogs written by tech experts'
            />

        <div className="flex flex-wrap mx-auto my-10 justify-center items-center sm:items-start sm:px-14 px-4 pr-0 pl-8 gap-4 sm:gap-28">
        {
            blogs.map((items: any, idx: number) => (
                <Link href={`/blogs/${items.slug.current}`} key={idx} className="sm:w-1/4 w-full">
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