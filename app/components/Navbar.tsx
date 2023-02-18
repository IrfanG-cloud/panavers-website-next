'use client'

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import {useState} from 'react'
import router from "next/router";

interface NavItem {
  label: string;
  page: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "How It Work",
    page: "home",
    href: "/",
  },
  {
    label: "Courses",
    page: "courses",
    href: "/pages/courses",
  },
  {
    label: "Available Programs",
    page: "availableprogram",
    href: "/pages/availableprogram",
  },
  {
    label: "Contact Us",
    page: "contactus",
    href: "/pages/contactus",
  },
];



function NavLink({to, children}:any) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}:any) {
  const router = useRouter();
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-purple-800 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <Link href="/">
              <Image className="py-[10px]" src="/logo-white.png" width={100} height={50} alt="logo" />
              </Link>
            </div>
            <div className="flex gap-7 text-[16px] text-[#fff]">
          {NAV_ITEMS.map((item, idx) => {
            return (
              <Link
                href={`${item.href}`}
                key={idx}
                className="color-white px-[20px] 
                          py-[10px] font-semibold 
                          hover:bg-purple-400 
                          hover:text-purple-600 
                          hover:rounded-md 
                          hover:px-[20px] 
                          hover:py-[10px]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        </div>
    )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)


  return (
    // <div className="w-full mx-auto fixed top-0 px-10 bg-purple-900 z-10">
    //   <div className="justify-between items-center flex">
    //     <Link href="/">
    //       <Image className="py-[10px]" src="/logo-white.png" width={100} height={50} alt="logo" />
    //     </Link>
    //     <div className="flex gap-7 text-[16px] text-[#fff]">
    //       {NAV_ITEMS.map((item, idx) => {
    //         return (
    //           <Link
    //             href={`${item.href}`}
    //             key={idx}
    //             className="color-white px-[20px] 
    //                       py-[10px] font-semibold 
    //                       hover:bg-purple-400 
    //                       hover:text-purple-600 
    //                       hover:rounded-md 
    //                       hover:px-[20px] 
    //                       hover:py-[10px]"
    //           >
    //             {item.label}
    //           </Link>
    //         );
    //       })}
    //     </div>
    //     <div className="flex gap-2">
    //       <div>
    //         <button type="button" onClick={() => router.push('/pages/courses')} className="w-30 h-12 bg-purple-700 text-white px-5 font-semibold border-none rounded-md hover:bg-purple-400 hover:text-purple-600 text-1x1 active:bg-purple-700 focus:outline-none focus:ring focus:ring-red-300 ...">
    //         Apply
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <nav className="w-full mx-auto fixed flex filter drop-shadow-md bg-purple-900 px-4 py-4 h-20 items-center z-10">
    <MobileNav open={open} setOpen={setOpen}/>
    <div className="w-3/12 flex items-center">
        <Link href="/">
      <Image className="py-[10px]" src="/logo-white.png" width={100} height={50} alt="logo" />
      </Link>
    </div>
    <div className="w-9/12 flex justify-end items-center">

        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
            setOpen(!open)
        }}>
            {/* hamburger button */}
            <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
            <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
            <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
        </div>

        <div className="hidden md:flex">
        <div className="flex gap-7 text-[16px] text-[#fff]">
          {NAV_ITEMS.map((item, idx) => {
             return (
               <Link
                href={`${item.href}`}
               key={idx}
                className="color-white px-[20px] 
                           py-[10px] font-semibold 
                          hover:bg-purple-400 
                           hover:text-purple-600 
                         hover:rounded-md 
                           hover:px-[20px] 
                           hover:py-[10px]"
              >
                {item.label}
               </Link>
            );
          })}
         </div>
        </div>
    </div>
    <div className="flex gap-2">
          <div>
             <button type="button" onClick={() => router.push('/pages/courses')} className="w-30 h-12 bg-purple-700 text-white px-5 font-semibold border-none rounded-md hover:bg-purple-400 hover:text-purple-600 text-1x1 active:bg-purple-700 focus:outline-none focus:ring focus:ring-red-300 ...">
           Apply
             </button>
           </div>
         </div>
</nav>

  );
}
