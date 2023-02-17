import Navbar from '@/app/components/Navbar'
import React from 'react'
import Footer from '@/app/components/Footer'
import HeroSection from '@/app/components/HeroSection'
import Image from "next/image";
import Link from "next/link";

export default function AvailableProgram() {
  return (
    <div>
        <Navbar />
        <div className="w-full py-[80px] ">
      <div className=" h-auto pb-[30px]">
        <div className=" bg-red text-center ">
          <h6 className=" text-white text-[14px] text-3xl font-bold pt-[10px] text-center">
            Specialized Tracks
          </h6>
          <p className="text-white text-[16px] text-2xl text-center pt-[10px]">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
      </div>
      <div className="flex m-auto w-[95%] flex-wrap gap-2">
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
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-purple-900 dark:bg-slate-600 p-4 rounded shadow dark:shadow-red-600">
              <h6 className="text-white text-[16px] text-2xl font-bold">
                Web 3.0 (Blockchain) and Metaverse Specialization
              </h6>
              <p className="text-white text-[16px] text-1xl">
                This Web 3.0 and Metaverse specialization focuses on
                developing..
              </p>
              <Link
                className="text-white font-bold text-[16px] text-2xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
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
                src="/ai.png"
                width={500}
                height={500}
                alt="image"
                className="object-cover h-[450px]"
              />
            </Link>
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-purple-900 light:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
              <h6 className="text-white text-[20px] font-bold text-2xl">
                Artificial Intelligence (AI) and Deep Learning Specialization
              </h6>
              <p className="text-white text-[16px] text-1xl">
                The AI and Deep Learning specialization focuses on building ..
              </p>
              <Link
                className="text-white font-bold text-[16px] text-2xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
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
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-purple-900 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
              <h6 className="text-white text-[16px] font-bold text-2xl">
                Cloud-Native Computing Specialization
              </h6>
              <p className="text-white text-[16px] text-1xl">
                The Cloud-Native Computing focuses on Containers, Kubernetes,
                and CDK for Kubernetes. .
              </p>
              <Link
                className="text-white text-[16px] text-2xl font-bold mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
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
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-purple-900 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
              <h6 className="text-white text-[16px] font-bold text-2xl">
                Ambient Computing and IoT Specialization
              </h6>
              <p className="text-white text-[16px] text-1xl">
                The Ambient Computing and IoT Specialization focuses on
                building..
              </p>
              <Link
                className="text-white font-bold text-[16px] text-2xl mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
                href="https://portal.piaic.org/signup"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className="group relative block overflow-hidden transition-all duration-500 h-[450px]">
            <Link
              href="#"
              className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
              title=""
            >
              <Image
                src="/geomatric.png"
                width={500}
                height={500}
                alt="image"
                className="object-cover h-[450px]"
              />
            </Link>
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-purple-900 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
              <h6 className="text-white text-[16px] font-bold text-2xl">
                Genomics and Bioinformatics Specialization
              </h6>
              <p className="text-white text-[16px] text-1xl">
                Genomics is the study of the total genetic makeup of individual
                organisms..
              </p>
              <Link
                className="text-white text-[16px] text-2xl font-bold mt-5 py-3 rounded-[5px] hover:bg-white-600 duration-300"
                href="https://portal.piaic.org/signup"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className="group relative block overflow-hidden transition-all duration-500 h-[450px]">
            <Link
              href="#"
              className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
              title=""
            >
              <Image
                src="/networking.png"
                width={500}
                height={500}
                alt="image"
                className="object-cover h-[450px]"
              />
            </Link>
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-purple-900 dark:bg-slate-900 p-4 rounded shadow dark:shadow-red-600">
              <h6 className="text-white text-[16px] font-bold text-2xl">
                Network Programmability and Automation Specialization
              </h6>
              <p className="text-white  text-[16px] text-1xl">
                More than ever, network engineers are finding it challenging to
                complete...
              </p>
              <Link
                className="text-white text-[16px] text-2xl mt-5 font-bold py-3 rounded-[5px] hover:bg-white-600 duration-300"
                href="https://portal.piaic.org/signup"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer />
    </div>
  )
}
