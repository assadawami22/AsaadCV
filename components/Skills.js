import React from 'react'

const Skills = () => {
  const h4_from300To700 = 'min-[300px]:max-[700px]:text-1xl'
  const h1_from300To700 = 'min-[300px]:max-[700px]:text-4xl'
  return (
    <div>
        <h1 className={`text-6xl ${h1_from300To700} font-bold pb-20`}>SKILLS</h1>


        <div className='grid grid-cols-2 min-[300px]:max-[700px]:grid-cols-1  gap-12 '>
            <div className='py-8'>
                <h4 className='text-2xl font-medium py-2'> Time management</h4>
                <h4 className='text-2xl font-medium py-2'> Proficient in GitHub</h4>
                <h4 className='text-2xl font-medium py-2'> Ability to work under pressure and produce the best result, both individually and within a team.</h4>
                <h4 className='text-2xl font-medium py-2'> Highly motivated to learn new skills.</h4>
                <h4 className='text-2xl font-medium py-2'> Well-developed in leadership, and problem-solving.</h4>
                <h4 className='text-2xl font-medium py-2'> Excellent verbal communication skills</h4>
            </div>
            
            <div className='py-16'>
                <h2 className='text-3xl font-semibold pb-4'>Programming Languages: -</h2>
                <h4 className='text-2xl font-medium py-2'> Full-Stack Web Development React/Nextjs/ HTML/ CSS/ JAVASCRIPT/ Node.js</h4>
                <h4 className='text-2xl font-medium py-2'> Java</h4>
                <h4 className='text-2xl font-medium py-2'> Python</h4>
                <h4 className='text-2xl font-medium py-2'> SQL and MongoDB</h4>
                <h4 className='text-2xl font-medium py-2'> Beginner in Solidity</h4>
            </div>

        </div>

        
    </div>
  )
}

export default Skills