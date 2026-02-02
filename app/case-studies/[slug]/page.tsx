"use client";

import React, { useEffect, useState, useTransition } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import { fetchData } from "@/sanity/lib/fetch";
import MiniLoader from "@/elements/SmallLoader";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/elements/Navbar";
import Footer from "@/elements/Footer";
import { portableTextComponents } from "@/components/PortableTextComponent";
import { LucideArrowLeft } from "lucide-react";



const CaseStudyPage = () => {
  const params = useParams();
  const router = useRouter();
//   console.log(params.get("slug"));
  
  const [caseStudies, setCaseStudies] = useState<any>([])
  const [transition, startTransition] = useTransition();

  const getData = () => startTransition(async () => {
    const data = await fetchData("caseStudyBySlug", params.slug as any)
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
  if (!caseStudies) return notFound();


  return (
    <>
    <Navbar />
<div className="bg-background text-white min-h-screen py-16 px-6 max-w-7xl mx-auto">
      {/* Main Image */}
                    <header className="mb-10 flex items-center justify-between">
                <div className="space-y-2 w-full">
                  <div onClick={() => router.back()} className="flex gap-2 w-full justify-between items-center">
                  <p className="flex gap-2"><LucideArrowLeft />Back</p>  
                  <div className="">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                    CASE STUDIES
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    A closer look at one of our case studies.
                  </p>
                  </div>
                  </div>
                </div>
              </header>
                    <div className="flex w-full justify-between items-end mb-4">
        <h1 className="sm:text-4xl text-lg font-unbounded font-medium">{caseStudies.businessName}</h1>
        <h1>{new Date(caseStudies.publishedAt).toLocaleDateString()}</h1>
      </div>
      {caseStudies.mainImage && (
        <div className="mb-8 w-full sm:h-[32rem] h-[20rem] relative">
          <Image
            src={urlFor(caseStudies.mainImage).url()}
            alt={caseStudies.mainImage.alt || caseStudies.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h1 className="sm:text-4xl text-xl font-bold mb-2">{caseStudies.title}</h1>
      <p className="sm:text-base text-sm text-gray-200 mb-6">{caseStudies.miniDescription}</p>

      {/* Stats */}
      {caseStudies.stats?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-2 mb-4">
          {caseStudies.stats.map((stat, idx) => (
            <div key={idx} className="sm:p-6 p-2 rounded-lg text-center">
              <h3 className="sm:text-5xl text-3xl font-unbounded font-bold">{stat.value}</h3>
              <p className="text-gray-400 mt-2 sm:text-lg text-sm  font-space">{stat.key}</p>
            </div>
          ))}
        </div>
      )}

      {/* Percentage if any */}
      {caseStudies.percentage && (
        <h1 className="sm:text-3xl text-xl font-unbounded flex justify-between items-center">
            Peformance Improved
                        <span className="text-primary font-bold">
          {caseStudies.percentage}%
            {/* {} */}
            </span>
            </h1>
      )}

      {/* Rich text body */}
      <div className="max-w-none border-t-2 my-6 border-neutral-800">
        <PortableText value={caseStudies.body} components={portableTextComponents}  />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CaseStudyPage;
