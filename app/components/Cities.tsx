import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cities() {
  return (
    <div className="w-full bg-gray-100 py-[80px] ">
      <div className="group relative">
          <div className=" w-full justify-left text-purple-900 ">
            <h1 className="text-[14px] text-4xl ml-[50px] font-semibold text-center">
              A Nationwide Program
            </h1>
          </div>
      </div>
      <div className=" flex w-full justify-center gap-2 pt-[30px]">
        <div className="w-[400px]">
          <div className="group relative h-[260px]">
            <Image
              src="/islamabad.png"
              width={500}
              height={700}
              alt="Islamabad"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 to-transparent opacity-0 group-hover:h-full group-hover:opacity-100 duration-50">
              <h1 className="text-2xl text-white font-bold">Islamabad</h1>
              <Link
                className="mt-5 px-4 py-2 rounded-[5px] bg-gray-300 hover:bg-white-600 duration-300"
                href="https://portal.piaic.org/signup"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <div className="group relative h-[260px]">
            <Image
              src="/islamabad.png"
              width={500}
              height={700}
              alt="Peshawar"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r  from-purple-900 via-purple-800 to-purple-700 to-transparent  opacity-0 group-hover:h-full group-hover:opacity-100 duration-50">
              <h1 className="text-2xl text-white font-bold">Peshawar</h1>
              <Link
                className="mt-5 px-4 py-2 rounded-[5px] bg-white hover:bg-white duration-300"
                href="https://portal.piaic.org/signup"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <div className="group relative h-[260px]">
            <Image
              src="/islamabad.png"
              width={500}
              height={700}
              alt="Lahore"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 to-transparent opacity-0 group-hover:h-full group-hover:opacity-100 duration-50">
              <h1 className="text-2xl text-white font-bold">Lahore</h1>
              <Link
                className="mt-5 px-4 py-2 rounded-[5px] bg-white hover:bg-white duration-300"
                href="https://portal.piaic.org/signup"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className="group relative h-[260px]">
            <Image
              src="/islamabad.png"
              width={500}
              height={700}
              alt="Karachi"
              className="object-cover h-[260px]"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 to-transparent opacity-0 group-hover:h-full group-hover:opacity-100 duration-50">
              <h1 className="text-2xl text-white font-bold"> Karachi</h1>
              <Link
                className="mt-5 px-4 py-2 rounded-[5px] bg-white hover:bg-white duration-300"
                href="https://portal.piaic.org/signup"
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
