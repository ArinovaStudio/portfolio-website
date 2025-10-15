import Image from 'next/image'
import React, { useEffect, useState, useTransition } from 'react'
import { useCursor } from './CursorContext'
import {motion} from "framer-motion";
import { fetchData } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';
import MiniLoader from './SmallLoader';

function Products() {
    const {setCursor} = useCursor()
        const [products, setProducts] = useState<any>([])
        const [transition, startTransition] = useTransition();
  
        const getData = () => startTransition(async () => {
          const data = await fetchData("products")
          if (data) {
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
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: false}}
    transition={{delay: 0.8, duration: 1.2}}
    className="flex sm:justify-start sm:items-center gap-4 w-full h-1/6 mt-1 flex-wrap sm:px-16 px-8">
        {
            products.slice(0, 3).map((items, idx) => (
        <div 
        key={idx}
        onMouseEnter={() => setCursor("label", items.title)}
        onMouseLeave={() => setCursor("default")}
        className="w-24 h-full">
            <img
            src={urlFor(items.mainImage).url()}
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