import HeroSection from '@/app/components/HeroSection'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import Footer from '@/app/components/Footer'
import Image from "next/image";
import Link from "next/link";

export default function Apply() {
  return (
    <div>
      <Navbar />
      <section>
      <div className="w-full justify-center pt-[80px]">
      <div className="w-full ">
        <div className="group relative">
          <div className=" w-full text-black-800 py-[50px] text-center">
            <h1 className="text-[14px] text-white text-3xl font-semibold">
              Core Courses
            </h1>
            <p className="text-[14px] text-1xl text-white text-center mt-[10px]">
              Every participant of the program will start by completing the
              following three core courses:
            </p>
          </div>
        </div>
      </div>
      <div className="w-full justify-center pb-[80px] gap-4 sm:flex">
      <div className="w-[320px] sm:w-[450px] ">
        <div className="h-[320px] group relative sm:h-[450px]">
          <Image
            src="/oop.png"
            width={500}
            height={700}
            alt="Islamabad"
            className="object-cover h-[320px] sm:h-[450px]"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-purple-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-purple-300 ">Quarter-I (Core)</h1>
            <p className="text-[16px] text-1xl mb-[20px] px-[30px] text-purple-300">
              TCS-101: Object-Oriented Programming using TypeScript
            </p>
            <Link
              className="mt-5 px-4 py-2 rounded-[5px] text-purple-900 bg-purple-400 hover:bg-purple-600 duration-300"
              href="https://portal.piaic.org/signup"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[320px] sm:w-[450px] ">
        <div className="group relative h-[320px] sm:h-[450px]">
          <Image
            src="/api.png"
            width={500}
            height={700}
            alt="Islamabad"
            className="object-cover h-[320px] sm:h-[450px]"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-purple-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-purple-300 font-bold">Quarter-II (Core)</h1>
            <p className="text-[16px] text-1xl mb-[20px] px-[30px] text-purple-300">
              W2-201: Developing Planet-Scale Web 2.0 Serverless Apps and APIs
              using Next.js 13 and Cloud Development for Terraform
            </p>
            <Link
              className="mt-5 px-4 py-2 rounded-[5px] text-purple-900 bg-purple-400 hover:bg-purple-600 duration-300"
              href="https://portal.piaic.org/signup"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[320px] sm:w-[450px] ">
        <div className="group relative h-[320px] sm:h-[450px]">
          <Image
            src="/fullstacknew.png"
            width={500}
            height={700}
            alt="Islamabad"
            className="object-cover h-[320px] sm:h-[450px]"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-purple-900 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-purple-300 font-bold">
              Quarter-III (Core)
            </h1>
            <p className="text-[16px] text-2xl mb-[20px] px-[30px] text-purple-300">
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Producat Development
            </p>
            <Link
              className="mt-5 px-4 py-2 rounded-[5px] text-purple-900 bg-purple-400 hover:bg-purple-600  duration-300"
              href="https://portal.piaic.org/signup"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
      </section>
      <Footer />
      </div>
  )
}
