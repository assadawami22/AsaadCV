import React from 'react'

const Academic = () => {

  const h4_from300To700 = 'min-[300px]:max-[700px]:text-1xl'
  const h1_from300To700 = 'min-[300px]:max-[700px]:text-4xl'
  return (
    <div>
        <h1 className={`text-6xl ${h1_from300To700}  font-bold pb-20`}>Academic Projects</h1>

        <h2 className='text-3xl min-[300px]:max-[700px]:text-2xl max-[700px]:font-bold font-semibold '>Academic Projects (King Fahd University of Petroleum and Minerals)</h2>
        <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>Building a full-stack project (Senior Project: web application (Applier) that eases the process of applying for jobs and helps medical students find patients) with a team of six students.</h4>
        <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>Developing SRS / SDD / Test Plan/ Project Plan Documents.</h4>
        <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>Implementation: MERN Full-Stack</h4>
        <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>Developing a privacy tool (Private Set Intersection) with a team of three students.</h4>
        <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>Developing a UML diagrams project (Haraj App) with a team of six students.</h4>
        <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>Developing (Burger Restaurant web application) with a team of two students.</h4>
        <h4 className={`text-2xl ${h4_from300To700} font-medium py-3`}>Creating a (library System database) using PHP MySQL with a team of three students.</h4>


    </div>
  )
}

export default Academic