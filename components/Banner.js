import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className="bg-white">
      <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-rap">
          <div className="flex items-center flex-1 w-0">
            <a className="flex p-2 bg-white " href="./">
              <Image alt="automate logo" src="/automate-logo.jpg" width={220} height={100}   />
            </a>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Big news! We are excited to announce a brand new product.</span>
            </p>
          </div>
          <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              className="flex items-center justify-center px-4 py-4 text-xl font-medium text-black bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50"
            >
              <Image alt="garage scheme" src="/good-garage-scheme.png" width={250} height={40} />
                          01784 625 699
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}