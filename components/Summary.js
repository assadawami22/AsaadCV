import React from 'react'

const Summary = () => {
  const h4_from300To700 = 'min-[300px]:max-[700px]:text-1xl'
  const h1_from300To700 = 'min-[300px]:max-[700px]:text-4xl'
  return (
    <div className='pt-10   '>
        <div className=' pb-20'>
            <h1 className={`min-[700px]:max-[1112px]:text-6xl ${h1_from300To700} text-8xl font-bold`} >Asaad Al-Awami</h1>
            <h4 className={`text-xl ${h4_from300To700}  max-[840px]:grid grid-rows-3`}> <span> | Dammam (willing to relocate)</span><span> | M: +966 547609964</span> <span> | assadawami2022@gmail.com</span> </h4>
        </div>

        <p className=' min-[700px]:max-[1112px]:text-2xl text-3xl text-left leading-snug	'>
        As a creative and technically skilled software engineer who graduated in Aug 2023 &apos;, I am seeking an entry-level position in a challenging engineering career or a related field. I am driven to apply my technical and analytical skills to contribute to an organization&apos; objectives while broadening my skills and expertise. I am eager to take on challenging projects and to continuously learn and grow in my career.
        </p>
        
    </div>
  )
}

export default Summary