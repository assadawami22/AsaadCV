import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const show = () => {
    setShowMenu(!showMenu);
  };

  const [hideMenu, setHideMenu]=useState(false)
  const hide = () =>{
    setShowMenu(!showMenu)
  }
  



  return (
    <div className="flex justify-center relative ">
      <button
        onClick={show}
        className={` min-[1400px]:hidden fixed z-10 top-12 right-12`}
      >
        {showMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </button>

   

      {showMenu && (
        <div onClick={hide} className="flex  gap-20 max-[1400px]:fixed py-8 top-0 bg-gradient-to-tr from-[#d4a373] via-[#e9edc9] via-[#fefae0] via-[#faedcd]    to-[#ccd5ae]  sm:flex-col sm:text-center min-[1400px]:hidden max-[700px]:flex-col max-[700px]:text-center  w-full justify-center text-2xl font-semibold">
          <Link href={"#summary"} scroll={false}>
            Summary
          </Link>
          <Link href={"#education"}>Education and Training</Link>
          <Link href={"#academic"}>Academic Projects</Link>
          <Link href={"#skills"}>SKILLS</Link>
          <Link href={"#experiance"}>Experience</Link>
        </div>
      )}
      <div className="flex gap-20 max-[1400px]:hidden   sm:flex-wrap max-[700px]:flex-col max-[700px]:text-center  w-full justify-center text-2xl font-semibold">
        <Link href={"#summary"} scroll={false}>
          Summary
        </Link>
        <Link href={"#education"}>Education and Training</Link>
        <Link href={"#academic"}>Academic Projects</Link>
        <Link href={"#skills"}>SKILLS</Link>
        <Link href={"#experiance"}>Experience</Link>
      </div>

      
    </div>
  );
};

export default Navbar;
