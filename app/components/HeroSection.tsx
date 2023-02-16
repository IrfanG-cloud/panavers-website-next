import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      className="
        w-full 
        h-screen
        justify-center  
        flex "
       
    >
      <div className="w-full flex items-center ">
        <div className=" w-2/4 ml-10 pl-20">
          <div className="">
            <h1 className="text-[56px] leading-[60px] text-[#ffffff] font-bold">
              Certified Web 3.0 and Metaverse Developer
            </h1>
          </div>
          <div className="">
            <p className="text-[20px] font-normal leading-[30px] pt-5 text-[#fff]">
              Getting Ready for the Next Generation and Future of the Internet
              <br /> - Join a 13 Trillion Dollar Industry with 5 Billion Users
            </p>
          </div>
          <div>
            <button className="w-[130px] h-[50px] mt-[40px] bg-purple-600 leading-[30px] bg-bottom text-white px-5 font-bold hover:bg-purple-900 hover:text-purple-600 border-none rounded-md text-1xl hover:bg-[0px -144px]">
              <Link href="/auth/register">Apply</Link>
            </button>
          </div>
        </div>

        <Image
          src="/meta-bg.png"
          height={1800}
          width={1000}
          alt="image"
          className="mt-[auto]"
        />
      </div>
    </div>
  );
}
