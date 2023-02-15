import React from 'react'
import Link from 'next/link'
export default function Register() {
  return (
    <div  className="w-full 
    h-screen
    justify-center  
    bg-gradient-to-tr
    from-gray-800
    to-gray-500
    to-gray-400">
  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8 bg-white px-[50px] py-[50px] rounded-[10px]">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-[30px]">
          Register
        </h2>

      </div>
      <form className="mt-8 space-y-6" >
        <input type="hidden" name="name" />
        <div className="-space-y-px rounded-md shadow-sm">
        <div>
            <label className="sr-only">
             Name
            </label>
            <input
              id="name"
              name="name"
              type="name"

              autoComplete="name"
              required
              className="relative my-[20px] h-[50px] block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Name"
            />
          </div>
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
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full h-[50px] appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
        
          <div className="text-sm">
            <a href="#" className="font-medium">
              Forgot your <strong>Password?</strong>
            </a>
          </div>
        </div>

        <div>
          <Link
            type="submit"
            href="/"
            className="group relative mb-[20px] h-[40px] w-[100px] justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  </div>

</div>
  )
}
