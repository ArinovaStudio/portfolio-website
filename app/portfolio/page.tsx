"use client";

import { useCursor } from "@/elements/CursorContext";
import Footer from "@/elements/Footer";
import Navbar from "@/elements/Navbar";
import Title from "@/elements/Title";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { fetchData } from "@/sanity/lib/fetch";
import MiniLoader from "@/elements/SmallLoader";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Main() {
  const { setCursor } = useCursor();
  const [products, setProducts] = useState<any>([]);
  const [transition, startTransition] = useTransition();

  const getData = () =>
    startTransition(async () => {
      const data = await fetchData("portfolio");
      if (data) {
        setProducts(data);
      }
    });

  useEffect(() => {
    getData();
  }, []);

  if (transition) {
    return <MiniLoader />;
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen h-auto">
        <Title title="Porrtfolio" slogan="Crafting seamless digital experiences with precision." />
        <div
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-8 lg:px-16 gap-4 md:gap-8 lg:gap-10 my-10"
        >
          {products.map((items: any, i: number) => (
            <Link 
            onClick={() => setCursor("default")}
            href={`/portfolio/${items.slug.current}`}
            onMouseEnter={() => setCursor("label", "View")}
            onMouseLeave={() => setCursor("default")}            
            
            key={i}>
              <motion.div
                // key={i}
                className="w-full h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[24rem] relative overflow-hidden"
                variants={itemVariants as any}
              >
                <Image
                  src={urlFor(items.mainImage).url()}
                  alt={items.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <h1 className="w-full text-base font-unbounded py-3">
                {items.title}
              </h1>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Main;