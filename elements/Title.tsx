import React from 'react'

function Title({title, slogan}: {title: string, slogan: string}) {
  return (
    <div className='flex pt-20 justify-between px-8 items-center gap-8'>
        <h1 className='font-stretch uppercase text-6xl'>{title}</h1>
        <p className='text-2xl font-light font-cursive italic w-3/6 text-right text-neutral-400'>{slogan}</p>
    </div>
  )
}

export default Title