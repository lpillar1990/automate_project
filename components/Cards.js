import Image from 'next/image'

  export default function Cards() {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 pt-20 mx-auto py-15">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50">
                <Image className="object-cover object-center w-full transition-all scale-110 lg:h-48 md:h-36 duration-400 hover:scale-100" src="/card1.jpg" width={500} height={300} alt="blog" />
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium text-gray-600 title-font">Service & Repairs</h1>
                  <div className="flex flex-wrap items-center ">
                    <button className="px-4 py-1 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue">Learn more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50">
                  <Image className="object-cover object-center w-full transition-all scale-110 lg:h-48 md:h-36 duration-400 hover:scale-100" src="/card2.jpg" width={500} height={300} alt="blog" />
                  <div className="p-6">
                    <h1 className="mb-3 text-lg font-medium text-gray-600 title-font">Air Conditioning</h1>
                    <div className="flex flex-wrap items-center ">
                      <button className="px-4 py-1 rounded-lg bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50">
                  <Image className="object-cover object-center w-full transition-all scale-110 lg:h-48 md:h-36 duration-400 hover:scale-100" src="/card3.jpg" width={500} height={300} alt="blog" />
                  <div className="p-6">
                    <h1 className="mb-3 text-lg font-medium text-gray-600 title-font">Brakes & Clutches</h1>
                    <div className="flex flex-wrap items-center ">
                      <button className="px-4 py-1 rounded-lg bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105 shadow-cla-blue">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            </div>
            <section className="text-gray-600 body-font">
        <div className="container px-5 pb-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50">
                <Image className="object-cover object-center w-full transition-all scale-110 lg:h-48 md:h-36 duration-400 hover:scale-100" src="/card4.jpg" width={500} height={300} alt="blog" />
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium text-gray-600 title-font">MOT Preparation</h1>
                  <div className="flex flex-wrap items-center ">
                    <button className="px-4 py-1 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue">Learn more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50">
                  <Image className="object-cover object-center w-full transition-all scale-110 lg:h-48 md:h-36 duration-400 hover:scale-100" src="/card5.jpg" width={500} height={300} alt="blog" />
                  <div className="p-6">
                    <h1 className="mb-3 text-lg font-medium text-gray-600 title-font">Car Electrics & Diagnostics</h1>
                    <div className="flex flex-wrap items-center ">
                      <button className="px-4 py-1 rounded-lg bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50">
                  <Image className="object-cover object-center w-full transition-all scale-110 lg:h-48 md:h-36 duration-400 hover:scale-100" src="/card6.jpg" width={500} height={300} alt="blog" />
                  <div className="p-6">
                    <h1 className="mb-3 text-lg font-medium text-gray-600 title-font">Minor bodywork repair & Polishing</h1>
                    <div className="flex flex-wrap items-center ">
                      <button className="px-4 py-1 rounded-lg bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105 shadow-cla-blue">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </section>
        </section>
    )
  }