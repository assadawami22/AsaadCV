import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//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

const About = () => {
  return (
    <div className='grid  grid-cols-2 min-[300px]:max-[800px]:grid-cols-1 text-center gap-10 over h-full place-items-center '>
        <div className='block '>
            <Image className='max-[800px]:text-6xl flex justify-center rounded-full' src='/images/assadimg.jpg' width={300} height={300} alt='im' />
        </div>

        <div className=' '> 
            <h1 className='text-8xl  '>Asaad Alawami </h1>
            <h2 className='text-2xl'>Fresh Software Engineer</h2>
            <Link className='text-[#6DA4AA] text-xl' href="https://www.linkedin.com/in/asaad-al-awami-083610180/">LinkedIn</Link>
        </div>
    </div>
  )
}

export default About