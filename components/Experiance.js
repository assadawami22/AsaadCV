import React from 'react'

const Experiance = () => {

  const h4_from300To700 = 'min-[300px]:max-[700px]:text-1xl'
  const h1_from300To700 = 'min-[300px]:max-[700px]:text-4xl'
  const h2_from300To700 = 'min-[300px]:max-[700px]:text-2xl'
  return (
    <div className=''>

        <h1 className={`text-6xl ${h1_from300To700} font-bold pb-12`}>Experience</h1>

        <div className='pb-6'>
            <h2 className={`text-3xl ${h2_from300To700}  font-semibold `}>INTERNSHIP (SUMMER TRAINING) 11 JUN 2023 – 11 SEP 2023</h2>
            <p className='text-lg'>Bloom Duck (Technology Information and Internet), Dhahran Techno Valley, Saudi Arabia</p>
        </div>
     
        <div className=''>
                <h2 className={`text-3xl ${h2_from300To700} font-semibold pb-4`}>Responsibility: -</h2>
                <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>  Developed user interfaces as a front-end developer, utilizing Next.js and the Tailwind CSS library</h4>
                <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>  Delivered 30 screens, and 43 componenets, ensuring high-quality and timely completion of the project.</h4>
                <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>  Collaborated closely with the design team to create visually appealing web pages, implementing Figma designs and providing feedback for improvement.</h4>
                <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>  Created an SRS document.</h4>
                <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>  Led a team of developers in testing and brainstorming sessions.</h4>
                <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>  Utilized Jest and the React Testing Library to test and ensure the reliability and functionality of the web application.</h4>
            </div>

    </div>
  )
}

export default Experiance