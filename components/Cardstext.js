
export default function Cardstext() {
  return (
    <section className="">
      <div className="gap-8 mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="px-4 py-12 bg-indigo-500 rounded-lg sm:px-6 md:flex md:flex-col md:py-16 md:border-r md:border-indigo-900">
          <blockquote className="mt-1 md:flex-grow md:flex md:flex-col">
            <div className="relative pb-5 text-lg font-medium text-white md:flex-grow">
              <p className="relative py-4 text-center">
              Keeping your car in full working order whilst working can be very difficult. That is why the car
              mechanics at Automate in Ashford, Middlesex, offer you a reliable service with all work guaranteed
              so that you will have your car when you need it.
              </p>
            </div>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Get essential repairs
          </button>
          </blockquote>
        </div>
        <div className="px-4 py-12 bg-indigo-500 border-t-2 border-indigo-900 rounded-lg sm:px-6 md:py-16 md:border-t-0 md:border-l">
          <blockquote className="mt-1 md:flex-grow md:flex md:flex-col">
            <div className="relative pb-5 text-lg font-medium text-white md:flex-grow">
              <p className="relative py-4 text-center">
              Our car mechanics have been providing a professional service for over a decade that has led to you
              benefiting from high quality repairs and helped ensure that your car is fit and safe to pass an MOT
              test.
              </p>
            </div>
            <button className="w-full px-2 py-2 mx-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Visit our garage today
            </button>
          </blockquote>
        </div>
      </div>
    </section>
  )
}