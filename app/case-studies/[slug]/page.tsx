"use client";

import React, { useEffect, useState, useTransition } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { fetchData } from "@/sanity/lib/fetch";
import MiniLoader from "@/elements/SmallLoader";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/elements/Navbar";
import Footer from "@/elements/Footer";
import { portableTextComponents } from "@/components/PortableTextComponent";



const CaseStudyPage = () => {
  const params = useParams();
    
//   console.log(params.get("slug"));
  
  const [caseStudies, setCaseStudies] = useState<any>([])
  const [transition, startTransition] = useTransition();

  const getData = () => startTransition(async () => {
    const data = await fetchData("caseStudyBySlug", params.slug as any)
    if (data) {
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
  if (!caseStudies) return notFound();


  return (
    <>
    <Navbar />
<div className="bg-background text-white min-h-screen py-16 px-6 max-w-7xl mx-auto">
      {/* Main Image */}
      {caseStudies.mainImage && (
          <div className="mb-8 w-full h-[32rem] relative">
          <Image
            src={urlFor(caseStudies.mainImage).url()}
            alt={caseStudies.mainImage.alt || caseStudies.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-2">{caseStudies.title}</h1>
      <p className="text-lg text-gray-200 mb-6">{caseStudies.miniDescription}</p>

      {/* Stats */}
      {caseStudies.stats?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {caseStudies.stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-lg text-center">
              <h3 className="text-5xl font-unbounded font-bold">{stat.value}</h3>
              <p className="text-gray-400 mt-2 font-2xl font-space">{stat.key}</p>
            </div>
          ))}
        </div>
      )}

      {/* Percentage if any */}
      {caseStudies.percentage && (
        <>
        <p className="text-6xl mb-1 font-unbounded font-bold text-right text-primary">
          {caseStudies.percentage}%
        </p>
        <h1 className="text-4xl font-unbounded flex justify-between items-center">
            <span className="text-2xl">
            {new Date(caseStudies.publishedAt).toLocaleDateString()}
            </span>
            Peformance Improved</h1>
        </>
      )}

      {/* Rich text body */}
      <div className="max-w-none border-t-2 pt-6 border-neutral-800">
        <PortableText value={caseStudies.body} components={portableTextComponents}  />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CaseStudyPage;
