import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
    <div
      className="
        h-[120px]
        text-white
        text-1xl
        px-[10px]
        m-auto
        sm:px-[50px]
        sm:justify-between
        sm:flex
        md:flex
        lg:flex
"
    >
      <Link href="/">
        <Image src="/logo-white.png" width={100} height={50} alt="logo"/>
      </Link>
      <p className="text-gray-100 text-center">© 2023 Panaveasre DAO. All rights reserved</p>
      <div className="flex justify-center space-x-4 text-gray-100 hover:text-gray-400 gap-4 ">
        <Link href='https://www.facebook.com/groups/panaverse'>Facebook</Link>
        <Link href='https://www.youtube.com/@panaverse/streams'>Youtube</Link>
        <Link href='https://github.com/panaverse'>Github</Link>
        <Link href='https://twitter.com/Panaverse_edu'>Twitter</Link>
      </div>
    </div>
    </>
  )
}
