import Image from 'next/image'
import { Inter } from 'next/font/google'

import React from "react";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experiance from "../components/Experiance";
import About from "../components/About";
import Academic from "../components/Academic";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const s400_1400 = 'min-[200px]:max-[1400px]:px-12     pb-12';

  return (
    <main className='  	'>

  
    
    <div className=" text-[#5f7026]  ">
      <div
        id="summary"
        className={`${s400_1400} overflow-x-auto overscroll-auto focus:overscroll-contain pt-10   px-48   h-[100vh]    bg-gradient-to-tr from-[#ccd5ae] via-[#e9edc9] via-[#fefae0] via-[#faedcd]    to-[#d4a373]`}
      >
        <Navbar />
        <Summary />
      </div>

      <div
        id="education"
        className={` ${s400_1400} overflow-x-auto overscroll-auto focus:overscroll-contain  px-48  h-[100vh]  pt-8 bg-gradient-to-tr from-[#d4a373] via-[#e9edc9] via-[#fefae0] via-[#faedcd]    to-[#ccd5ae]`}
      >
        <Education />
      </div>

      <div
        id="academic"
        className={` ${s400_1400} overflow-x-auto overscroll-auto focus:overscroll-contain  px-48 h-[100vh]  pt-8 bg-gradient-to-tr from-[#d4a373] via-[#e9edc9] via-[#fefae0] via-[#faedcd]    to-[#ccd5ae]`}
      >
        <Academic />
      </div>

      <div
        id="skills"
        className={` ${s400_1400}  overflow-x-auto overscroll-auto focus:overscroll-contain px-48 h-[100vh]  pt-8  bg-gradient-to-tr from-[#ccd5ae] via-[#e9edc9] via-[#fefae0] via-[#faedcd]    to-[#d4a373]`}
      >
        <Skills />
      </div>

      <div
        id="experiance"
        className={` ${s400_1400} overflow-x-auto overscroll-auto focus:overscroll-contain  px-48 h-[100vh]  pt-8 bg-gradient-to-tr from-[#d4a373] via-[#e9edc9] via-[#fefae0] via-[#faedcd]    to-[#ccd5ae]`}
      >
        <Experiance />
      </div>

      <div
      id="about"
       className={`${s400_1400} pb-6 overflow-x-auto overscroll-auto focus:overscroll-contain  px-48 h-[100vh]  pt-8 bg-gradient-to-tr from-[#d4a373] via-[#e9edc9] via-[#fefae0] via-[#faedcd]    to-[#ccd5ae]`}>
        <About />
      </div>
    </div>
  
    </main>
  )
}
