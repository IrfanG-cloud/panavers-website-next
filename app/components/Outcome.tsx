import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Outcome() {
  return (
    // bg-gradient-to-tr from-gray-600 to-gray-500
    <div className=" w-full py-[80px] bg-white">
      <div className="w-full">
        <h1 className="text-[14px] text-4xl px-[50px] text-center text-gray-800">
          The Outcome for Participants of the Program
        </h1>
        <p className="px-[50px] pt-[10px] text-gray-800 text-16px text-1xl text-center">
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </p>
      </div>
      <div className="flex pt-[80px] flex-wrap gap-2 w-[95%] m-auto">
        <div className="w-[400px] ">
          <div className="group relative h-[260px]">
            <Image
              src="/metajobs.jpeg"
              width={500}
              height={700}
              alt="Islamabad"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-red-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <Link
                className="mt-5 px-4 py-2 text-2xl text-white duration-300"
                href="https://portal.piaic.org/signup"
              >
                Top 5 Metaverse jobs that will rule the future of tech
                industry
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[400px] ">
          <div className="group relative h-[260px]">
            <Image
              src="/blockchain.jpeg"
              width={500}
              height={700}
              alt="Islamabad"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-red-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <Link
                className="mt-5 px-4 py-2 text-2xl text-white duration-300"
                href="https://portal.piaic.org/signup"
              >
                Blockchain Developer Salary - Jun 2022
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[400px] ">
          <div className="group relative h-[260px]">
            <Image
              src="/we3salary.jpeg"
              width={500}
              height={700}
              alt="Islamabad"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-red-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <Link
                className="mt-5 px-4 py-2 text-2xl text-white duration-300"
                href="https://portal.piaic.org/signup"
              >
                Web3 Salaries Soar to $750,000 for Rank-and-File
                DevsCloud-Native Computing Specialization
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[400px] ">
          <div className="group relative h-[260px]">
            <Image
              src="/metagam.jpeg"
              width={500}
              height={700}
              alt="Islamabad"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-red-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <Link
                className="mt-5 px-4 py-2 text-2xl text-white duration-300"
                href="https://portal.piaic.org/signup"
              >
                The Metaverse, Blockchain Gaming, and NFTs: Navigating the
                Internet’s Uncharted Waters
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[400px] pt-[30px]">
          <div className="group relative h-[260px]">
            <Image
              src="/metadeveloper.jpg"
              width={500}
              height={700}
              alt="Islamabad"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-red-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <Link
                className="mt-5 px-4 py-2 text-2xl text-white duration-300"
                href="https://portal.piaic.org/signup"
              >
                How To Become Metaverse Developer: Scope, Skills, and Salary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
