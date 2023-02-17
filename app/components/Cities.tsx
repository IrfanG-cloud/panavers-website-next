import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cities() {
  return (
    <div className="w-full py-[100px] ">
      <div className="group relative">
          <div className=" w-full justify-left text-white">
            <h1 className="text-[14px] text-3xl ml-[50px] text-center font-semibold">
              A Nationwide Program
            </h1>
          </div>
      </div>
      <div className=" flex w-full justify-center gap-2 pt-[50px]">
        <div className="w-[400px]">
          <div className="group relative h-[260px] w-450 p-4 border-4 shadow-lg border-purple-900">
            <Image
              src="/islamabad.png"
              width={200}
              height={200}
              alt="Islamabad"
              className="object-fit h-[150px] m-auto mt-[20px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-green-800  via-green-600 to-green-800  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <h1 className="text-2xl text-white font-bold">Islamabad</h1>
              <Link
                className="mt-5 px-4 py-2 rounded-[5px] bg-gray-300 hover:bg-white-600 duration-300"
                href="/pages/courses"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <div className="group relative h-[260px] w-450 p-4 border-4 shadow-lg border-purple-900">
            <Image
              src="/peshawar.png"
              width={300}
              height={250}
              alt="Peshawar"
              className="object-fit h-[150px] mt-[20px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <h1 className="text-2xl text-white font-bold">Peshawar</h1>
              <Link
                className="mt-5 px-4 py-2 rounded-[5px] bg-white hover:bg-white duration-300"
                href="/pages/courses"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <div className="group relative h-[260px] w-450 p-4 border-4 shadow-lg border-purple-900">
            <Image
              src="/lahore.png"
              width={200}
              height={200}
              alt="Lahore"
              className="object-fit h-[150px] m-auto mt-[20px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <h1 className="text-2xl text-white font-bold">Lahore</h1>
              <Link
                className="mt-5 px-4 py-2 rounded-[5px] bg-white hover:bg-white duration-300"
                href="/pages/courses"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className="group relative h-[260px] w-450 p-4 border-4 shadow-lg border-purple-900">
            <Image
              src="/karachi.png"
              width={200}
              height={200}
              alt="Karachi"
              className="object-fit h-[150px] m-auto mt-[20px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <h1 className="text-2xl text-white font-bold"> Karachi</h1>
              <Link
                className="mt-5 px-4 py-2 rounded-[5px] bg-white hover:bg-white duration-300"
                href="/pages/courses"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
