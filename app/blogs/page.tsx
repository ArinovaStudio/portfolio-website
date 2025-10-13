import Cards from '@/elements/Cards'
import Footer from '@/elements/Footer'
import Navbar from '@/elements/Navbar'
import Title from '@/elements/Title'
import React from 'react'


const blogs = [
  {
    id: 1,
    image: "https://picsum.photos/1080/1080", // Replace with your real image
    author: "Adarsh Pandit",
    title: "Title Of The Blog",
    description:
      "Figma Ipsum Component Variant Main Layer. Background Ipsum List Edit Selection Share Figma Stroke. Strikethrough Pixel Flatten Scale...",
    date: "02/10/2025",
  },
  {
    id: 2,
    image: "https://picsum.photos/1080/1080",
    author: "Adarsh Pandit",
    title: "Title Of The Blog",
    description:
      "Figma Ipsum Component Variant Main Layer. Background Ipsum List Edit Selection Share Figma Stroke. Strikethrough Pixel Flatten Scale...",
    date: "02/10/2025",
  },
  {
    id: 3,
    image: "https://picsum.photos/1080/1080",
    author: "Adarsh Pandit",
    title: "Title Of The Blog",
    description:
      "Figma Ipsum Component Variant Main Layer. Background Ipsum List Edit Selection Share Figma Stroke. Strikethrough Pixel Flatten Scale...",
    date: "02/10/2025",
  },
];


function page() {
  return (
    <div>
        <Navbar />
        <div className="w-screen min-h-screen h-auto">
            <Title 
            title='Bloggs'
            slogan='read the best blogs written by tech experts'
            />

        <div className="flex flex-wrap mx-auto my-10 justify-center items-start px-14 gap-28">
        {
            blogs.map((items, idx) => (
                <div className="w-1/4">
                <Cards 
                blog={items}
                key={idx}
                />
                </div>
            ))
        }
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default page