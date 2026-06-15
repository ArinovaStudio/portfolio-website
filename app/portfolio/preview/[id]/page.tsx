"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/arinova.jpg"
import Image from "next/image";
import { LucideArrowLeft } from "lucide-react";


function PreviewUrl() {
  const id = useParams().id as string;
  const [previewUrl, setPewview] = useState<null | string>(null);
  const router = useRouter()
  useEffect(() => {
    if (id) {
      const url = atob(id);
      setPewview(url)
    }
  }, [id]);

  return (
    <div className="flex-1 h-screen w-screen relative bg-black">
      {previewUrl ? (
        <iframe
          src={previewUrl}
          className="w-full h-full border-none"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-xs sm:text-sm text-neutral-500">
          Hosted URL is not set for this project.
        </div>
      )}
    <div
    onClick={() => router.back()}
    style={{paddingLeft: "0.5rem", paddingRight: "0.3rem"}} className="group w-max py-1 mix-blend-difference bg-white rounded-lg absolute bottom-4 right-4 z-999 flex justify-center gap-2 items-center">
        <p className="text-[10px] group-hover:opacity-0 text-black">Product by Arinova Studio</p>
        <p className="text-[13px] group-hover:opacity-100 opacity-0 text-black absolute flex justify-center items-center gap-1"><LucideArrowLeft size={12}/> Back </p>
        <Image
        src={logo.src}
        alt="text-logo"
        width={100}
        height={100}
        className="w-6 h-6 rounded-md"
        />
    </div>
    </div>
  );
}

export default PreviewUrl;
