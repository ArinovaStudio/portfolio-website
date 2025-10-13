import Image from 'next/image'
import React from 'react'
import { useCursor } from './CursorContext'
import {motion} from "framer-motion";

function Products() {
    const {setCursor} = useCursor()
    const products = [
        {
            title: "string",
            slug: ""
        },
                {
            title: "string",
            slug: ""
        },
                {
            title: "string 2",
            slug: ""
        },
                {
            title: "string 3",
            slug: ""
        },
    ]
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: false}}
    transition={{delay: 0.8, duration: 1.2}}
    className="flex justify-start items-center gap-4 w-full h-1/6 mt-1 flex-wrap px-16">
        {
            products.slice(0, 3).map((items) => (
        <div 
        key={items.title}
        onMouseEnter={() => setCursor("label", items.title)}
        onMouseLeave={() => setCursor("default")}
        className="w-24 h-full">
            <img
            src={"https://picsum.photos/1080/1080"}
            alt='image'
            className='w-full object-cover h-full'
            />
        </div>
            ))
        }

    </motion.div>
  )
}

export default Products