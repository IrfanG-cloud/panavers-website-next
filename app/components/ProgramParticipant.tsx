import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramParticipant() {
  return (
    <div>
      <div className="w-full bg-gray-100">
      
          <div className=" h-auto py-[80px]">
            <div className=" bg-red text-center ">
              <h6 className=" text-gray-800 text-[14px] text-4xl pt-[10px] text-center">
                Specialized Tracks
              </h6>
              <p className="text-gray-800 text-[18px] text-1xl pt-[10px] text-center">
                After completing the first three quarters the participants will
                select one or more specializations consisting of two courses
                each:
              </p>
            </div>
          </div>
          <div className="flex m-auto w-[95%] flex-wrap gap-2 py-[50px]">
          <div className="w-[400px] ">
            <div className="group relative block overflow-hidden transition-all duration-500 h-[450px]">
              <Link
                href="#"
                className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                title=""
              >
                <Image
                  src="/web3.png"
                  width={500}
                  height={500}
                  alt="image"
                  className="object-cover h-[450px]"
                />
              </Link>
              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-gray-100 dark:bg-slate-600 p-4 rounded shadow dark:shadow-red-600">
                <h6 className="text-gray-800 text-[20px] font-bold text-4xl">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h6>
                <p className="text-gray-800 text-[16px] text-2xl">
                  This Web 3.0 and Metaverse specialization focuses on
                  developing..
                </p>
                <Link
                  className="text-gray-800 font-bold text-[20px] text-4xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
                  href="https://portal.piaic.org/signup"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[400px] ">
            <div className="group relative block overflow-hidden transition-all duration-500 h-[450px]">
              <Link
                href="#"
                className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                title=""
              >
                <Image
                  src="/a1.jpeg"
                  width={500}
                  height={500}
                  alt="image"
                  className="object-cover h-[450px]"
                />
              </Link>
              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-gray-100 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
                <h6 className="text-gray-800 text-[20px] font-bold text-4xl">
                  Artificial Intelligence (AI) and Deep Learning Specialization
                </h6>
                <p className="text-gray-800 text-[16px] text-2xl">
                  The AI and Deep Learning specialization focuses on building ..
                </p>
                <Link
                  className="text-gray-800 font-bold text-[20px] text-4xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
                  href="https://portal.piaic.org/signup"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[400px] ">
            <div className="group relative block overflow-hidden transition-all duration-500 h-[450px]">
              <Link
                href="#"
                className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                title=""
              >
                <Image
                  src="/cloud.png"
                  width={500}
                  height={500}
                  alt="image"
                  className="object-cover h-[450px]"
                />
              </Link>
              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-gray-100 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
                <h6 className="text-gray-800 text-[20px] font-bold text-4xl">
                  Cloud-Native Computing Specialization
                </h6>
                <p className="text-gray-800 text-[16px] text-2xl">
                  The Cloud-Native Computing Specialization focuses on Containers,
                  Kubernetes, and CDK for Kubernetes. .
                </p>
                <Link
                  className="text-gray-800 text-[20px] text-4xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
                  href="https://portal.piaic.org/signup"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[400px] ">
            <div className="group relative block overflow-hidden transition-all duration-500 h-[450px]">
              <Link
                href="#"
                className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                title=""
              >
                <Image
                  src="/AmbientComputing.png"
                  width={500}
                  height={500}
                  alt="image"
                  className="object-cover h-[450px]"
                />
              </Link>
              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-gray-100 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
                <h6 className="text-gray-800 text-[20px] font-bold text-4xl">
                  Ambient Computing and IoT Specialization
                </h6>
                <p className="text-gray-800 text-[16px] text-2xl">
                  The Ambient Computing and IoT Specialization focuses on
                  building..
                </p>
                <Link
                  className="text-gray-800 font-bold text-[20px] text-4xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
                  href="https://portal.piaic.org/signup"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[400px] pt-[30px]">
            <div className="group relative block overflow-hidden transition-all duration-500 h-[450px]">
              <Link
                href="#"
                className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                title=""
              >
                <Image
                  src="/genomics.jpeg"
                  width={500}
                  height={500}
                  alt="image"
                  className="object-cover h-[450px]"
                />
              </Link>
              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-gray-100 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
                <h6 className="text-gray-800 text-[20px] font-bold text-4xl">
                Genomics and Bioinformatics Specialization
                </h6>
                <p className="text-gray-800 text-[16px] text-2xl">
                Genomics is the study of the total genetic makeup of individual organisms..
                </p>
                <Link
                  className="text-gray-800 text-[20px] text-4xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
                  href="https://portal.piaic.org/signup"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[400px] pt-[30px]">
            <div className="group relative block overflow-hidden transition-all duration-500 h-[450px]">
              <Link
                href="#"
                className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                title=""
              >
                <Image
                  src="/automation.jpeg"
                  width={500}
                  height={500}
                  alt="image"
                  className="object-cover h-[450px]"
                />
              </Link>
              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-gray-100 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
                <h6 className="text-gray-800 text-[20px] font-bold text-4xl">
                Network Programmability and Automation Specialization
                </h6>
                <p className="text-gray-800  text-[16px] text-2xl">
                More than ever, network engineers are finding it challenging to complete...
                </p>
                <Link
                  className="text-gray-800 text-[20px] text-4xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
                  href="https://portal.piaic.org/signup"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
          </div> 
        </div>
      </div>
  );
}
