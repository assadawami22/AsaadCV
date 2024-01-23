 import React from 'react'
 import Image from 'next/image'
 const Education = () => {
    const h4_from300To700 = 'min-[300px]:max-[700px]:text-1xl'
    const h1_from300To700 = 'min-[300px]:max-[700px]:text-4xl'
   return (
     <div className=''>

        <h1  className={`text-6xl ${h1_from300To700} font-bold pb-20`}>Education and Training</h1>
        <h2 className='text-3xl font-semibold pb-4'>King Fahd University of Petroleum and Minerals (Graduated in Aug 2023)</h2>

        <div className='grid grid-cols-2 min-[300px]:max-[700px]:grid-cols-1'>
            
            <div className={`${h4_from300To700}`}>
                <div className='pb-14'>
                    <h4 className='text-2xl font-medium py-2'>• Bachelor of Science in Software Engineering</h4>
                    <h4 className='text-2xl font-medium py-2'>• Cybersecurity and Blockchain(Concentration program)</h4>
                </div>

                <div className='  '>
                    <h2 className='text-3xl font-semibold pb-4'>Online Courses</h2>
                    <h4 className='text-2xl font-medium py-2'>• Data Analysis using Python (Completed)</h4>
                    <h4 className='text-2xl font-medium py-2'>• The Complete 2023 Web Development Bootcamp (In progress)</h4>
                    <h4 className='text-2xl font-medium py-2'>• User Experience design Misk Hub/ 7 h (Completed)</h4>
                </div>
            </div>

            <div >
                <Image className=' opacity-10 min-[300px]:max-[700px]:row-end-3 row-span-2 ' width={600} height={200} src='/images/kfupm1.png' alt='imm' />
            </div>
          


            
        </div>
       

        
        
     </div>
   )
 }
 
 export default Education