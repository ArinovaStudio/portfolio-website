import Image from "next/image";
import React from "react";

function ApprochCard({id, title, image, description}: {
    id: number,
    title: string,
    image: any,
    description: string
}) {
  return (
    <div className="w-full h-full border-2 border-neutral-200 bg-white text-black rounded-xl p-6 flex justify-between flex-col items-start">
      <h1 className="text-3xl font-space font-semibold tracking-tight">
        {id}. {title}
      </h1>
      <div className="w-full h-3/5 mt-6">
      <Image 
      width={image.width}
      height={image.height}
      className="w-full h-full object-cover"
      src={image.src}
      alt={"demo title"}
      />
      </div>

      <p className="font-cursive italic text-sm">{description}</p>
    </div>
  );
}

export default ApprochCard;
