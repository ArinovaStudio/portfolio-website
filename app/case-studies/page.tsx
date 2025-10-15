"use client";

import Footer from "@/elements/Footer";
import Navbar from "@/elements/Navbar";
import Title from "@/elements/Title";
import React, { useEffect, useState, useTransition } from "react";
import { useCursor } from "@/elements/CursorContext";
import { fetchData } from "@/sanity/lib/fetch";
import MiniLoader from "@/elements/SmallLoader";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";


interface caseStudies {
  title: string
  businessName: string
  mainImage: string
  miniDescription: string
  slug: {current: string}
  percentage: number
  stats: any[]
}

function page() {
  const { setCursor } = useCursor();
  const [caseStudies, setCaseStudies] = useState<caseStudies[]>([])
  const [transition, startTransition] = useTransition();

  const router = useRouter();

  const getData = () => startTransition(async () => {
    const data = await fetchData("caseStudies")
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
  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen h-auto pb-24">
        <Title
          title="Case Studdies"
          slogan="We have helped many businesses next can be yours"
        />

        {caseStudies.map((study, i) => (
          <div
          
            className={`flex flex-col lg:justify-between lg:items-center px-4 sm:px-8 lg:px-14 gap-6 lg:gap-12 py-6 lg:py-16 sm:mt-12 mt-4 w-full min-h-[80vh] lg:h-[80vh] ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            key={i}
          >
            <div className="w-full lg:w-3/5 h-auto lg:h-full flex flex-col justify-center items-start">
              <div className="mb-4">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-0">
                  <div className="w-full lg:w-3/5">
                    <p className="text-gray-400 text-sm sm:text-base font-dm mb-2">
                      We Helped <span className="text-white">{study.title}</span>{" "}
                      {study.miniDescription}
                    </p>
                  </div>

                  <div className="text-5xl sm:text-6xl md:text-7xl font-semibold font-unbounded">
                    {study.percentage}%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-7 border-b-2 w-3/4 border-gray-400 sm:gap-4 mt-4 lg:mt-6">
                {study.stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-transparent p-3 rounded-md flex flex-col"
                  >
                    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-unbounded font-semibold text-gray-300">
                      {s.value}
                    </div>
                    <div className="text-sm sm:text-base lg:text-xl text-gray-400 mt-1">{s.key}</div>
                  </div>
                ))}
              </div>
            </div>
                  <div
                  onClick={() => router.push(`/case-studies/${study.slug.current}`)}
                  onMouseEnter={() => setCursor("label", study.businessName)}
                  onMouseLeave={() => setCursor("default")}
                    className="w-full md:w-auto"
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 545 725"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      className="max-w-full h-auto md:h-[80vh] block"
                    >
                      <defs>
                        <clipPath id={`imageClip-${i}`}>
                          <path d="M0 0H397.396L471.938 65.1907L545 135.32V725H114.529L55.5 667.318L0 609.435V0Z" />
                        </clipPath>
                        <filter id={`grayscale-100`}>
                          <feColorMatrix type="saturate" values="0" />
                        </filter>
                      </defs>

                      <image
                        href={urlFor(study.mainImage).url()}
                        width="545"
                        height="725"
                        clipPath={`url(#imageClip-${i})`}
                        filter={`url(#grayscale-100)`}
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default page;