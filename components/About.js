import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className='grid  grid-cols-2 sm:grid-cols-1 text-center gap-10 over h-full place-items-center'>
        <div className='block '>
            <Image className='max-[800px]:text-6xl flex justify-center rounded-full' src='/images/assadimg.jpg' width={300} height={300} />
        </div>

        <div className=' '> 
            <h1 className='text-8xl  '>Asaad Alawami </h1>
            <h2 className='text-2xl'>Fresh Software Engineer</h2>
            <Link className='text-[#6DA4AA]' href="https://www.linkedin.com/in/asaad-al-awami-083610180/">LinkedIn</Link>
        </div>
    </div>
  )
}

export default About