"use client";

import { useCursor } from '@/elements/CursorContext'
import Footer from '@/elements/Footer'
import Navbar from '@/elements/Navbar'
import Title from '@/elements/Title'
import Image from 'next/image'
import React from 'react'

function page() {
    const {setCursor} = useCursor()
  return (
    <>
        <Navbar />
        <div className="w-screen min-h-screen h-auto">
            <Title 
            title='Our own creatioons'
            slogan='We not only help businesses to grow we create our own products as well'
            />
        <div className="flex flex-wrap w-full px-16 gap-16 justify-start items-center my-10">
           
            <div className="w-[47%] h-[30rem] relative overflow-hidden">
                <Image src={"https://picsum.photos/1080/1080"} alt='okay' fill />
                    <h1 className='mix-blend-difference text-4xl font-unbounded text-right text-white  px-8 py-8 relative z-50'>Title for the page</h1>
                <div  onMouseEnter={() => setCursor("label", "View")} onMouseLeave={() => setCursor("default")} className="w-full h-full absolute inset-0 z-10 group bg-black/20 flex justify-start items-end px-8 py-6">
                    <p className='text-xl font-space w-3/4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, porro.</p>
                </div>
            </div>


        </div>
        </div>
        <Footer />
    </>
  )
}

export default page