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

function page() {
  const { setCursor } = useCursor();
  const [products, setProducts] = useState<any>([]);
  const [transition, startTransition] = useTransition();

  const router = useRouter();
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
          className="flex flex-wrap w-full px-4 sm:px-8 md:px-12 lg:px-16 gap-4 sm:gap-8 md:gap-12 lg:gap-10 justify-start items-center my-10"
          // variants={containerVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((items: any, i: number) => (
            <Link 
            onClick={() => setCursor("default")}
            href={`/portfolio/${items.slug.current}`}
            onMouseEnter={() => setCursor("label", "View")}
            onMouseLeave={() => setCursor("default")}            
            className="sm:w-[48%] lg:w-full h-full" key={i}>
              <motion.div
                // key={i}
                className="w-full h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[30rem] relative overflow-hidden"
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


export default page;