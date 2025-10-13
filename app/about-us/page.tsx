import Footer from '@/elements/Footer'
import Navbar from '@/elements/Navbar'
import Title from '@/elements/Title'
import React from 'react'

function page() {
  return (
    <>
    <Navbar />
        <div className="w-screen h-screen">
            <Title 
            title='Aboout US'
            slogan='meet our world class team'
            />
        </div>
    <Footer />
    </>
  )
}

export default page