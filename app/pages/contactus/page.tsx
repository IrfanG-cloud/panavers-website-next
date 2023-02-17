
import Navbar from '@/app/components/Navbar'
import React from 'react'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <div>
        <Navbar />

        <div  className="w-full 
        h-screen
        justify-center  
        bg-gradient-to-tr
        from-gray-900
        to-purple-800
">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white px-[50px] py-[50px] rounded-[10px]">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-[30px]">
              Contact Us
            </h2>

          </div>
          <form className="mt-8 space-y-6" >
            <input type="hidden" name="remember" />
            <div className=" rounded-md shadow-sm space-y-6">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"

                  autoComplete="email"
                  required
                  className="relative my-[20px] h-[50px] block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full h-[50px] appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-red-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div >
                <label htmlFor="subject" className="sr-only">
                  Message
                </label>
                <textarea
                  id="comments"
                  name="textarea"
                  autoComplete="current-password"
                  className="relative block w-full h-[50px] appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-red-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Your Text Here..."
                  
                >
                  </textarea>
              </div>
            </div>


            <div>
              <Link
                type="submit"
                href="/"
                className="group relative mb-[20px] h-[40px] w-[80px] justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
  
    </div>
        <Footer />
        </div>
  )
}
