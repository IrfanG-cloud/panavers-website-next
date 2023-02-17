'use client'

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

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

export default function Navbar() {

  const router = useRouter();

  return (
    <div className="w-full mx-auto fixed top-0 px-10 bg-purple-900 z-10">
      <div className="justify-between items-center flex">
        <Link href="/">
          <Image className="py-[10px]" src="/logo-white.png" width={100} height={50} alt="logo" />
        </Link>
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
        <div className="flex gap-2">
          <div>
            <button type="button" onClick={() => router.push('/pages/courses')} className="w-30 h-12 bg-purple-700 text-white px-5 font-semibold border-none rounded-md hover:bg-purple-400 hover:text-purple-600 text-1x1 active:bg-purple-700 focus:outline-none focus:ring focus:ring-red-300 ...">
            Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
