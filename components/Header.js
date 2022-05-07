import Image from 'next/image'

export default function Example() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
        <Image src="/page-repairs.jpg" alt="Vercel Logo" layout="fill" />
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl">Quality car mechanics at a competitive price</h1>
          <p className="max-w-4xl mt-6 text-xl text-indigo-100">
          Special offers! <br /> T’s & C’s – Book before March 31st 2017. Air Conditioning Re-Gas £50
          </p>
        </div>
      </div>
    )
  }