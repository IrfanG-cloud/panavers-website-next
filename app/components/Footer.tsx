import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
    <div
      className="flex 
        h-[120px]
        text-white
        text-1xl
        px-[50px]
        justify-between
        py-[20px]
"
    >
      <Link href="/">
        <Image src="/logo-white.png" width={100} height={50} alt="logo" />
      </Link>
      <p className="text-gray-100">© 2023 Panaveasre DAO. All rights reserved</p>
      <div className="flex justify-center space-x-4 text-gray-100 hover:text-gray-400 gap-4">
        <Link href='https://www.facebook.com/groups/panaverse'>Facebook</Link>
        <Link href='https://www.youtube.com/@panaverse/streams'>Youtube</Link>
        <Link href='https://github.com/panaverse'>Github</Link>
        <Link href='https://twitter.com/Panaverse_edu'>Twitter</Link>
      </div>
    </div>
    </>
  )
}
