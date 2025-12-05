"use client"

interface Car {
  name: string
  year: number
  mileage: string
  fuelType: string
  transmission: string
  features: string[]
  description: string
}

export default function CarDetails({ car }: { car: Car }) {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">

          {/* Description */}
          <div className="bg-[#0f0f12] rounded-2xl p-8 border border-[#2b2b33] shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">About This Car</h3>
            <p className="text-gray-300 leading-relaxed text-lg">{car.description}</p>
          </div>

          {/* Specifications */}
          <div className="bg-[#0f0f12] rounded-2xl p-8 border border-[#2b2b33] shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Specifications</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div className="text-center p-4 rounded-xl border border-purple-700/40 bg-purple-700/10">
                <p className="text-sm text-gray-400 mb-1">Year</p>
                <p className="text-2xl font-bold text-purple-400">{car.year}</p>
              </div>

              <div className="text-center p-4 rounded-xl border border-purple-700/40 bg-purple-700/10">
                <p className="text-sm text-gray-400 mb-1">Mileage</p>
                <p className="text-2xl font-bold text-purple-400">{car.mileage}</p>
              </div>

              <div className="text-center p-4 rounded-xl border border-[#2b2b33] bg-[#17171c]">
                <p className="text-sm text-gray-400 mb-1">Fuel Type</p>
                <p className="text-lg font-semibold text-white">{car.fuelType}</p>
              </div>

              <div className="text-center p-4 rounded-xl border border-[#2b2b33] bg-[#17171c]">
                <p className="text-sm text-gray-400 mb-1">Transmission</p>
                <p className="text-lg font-semibold text-white">{car.transmission}</p>
              </div>

            </div>
          </div>

          {/* Features */}
          <div className="bg-[#0f0f12] rounded-2xl p-8 border border-[#2b2b33] shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {car.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[#2b2b33] bg-[#141418]"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Contact Box */}
          <div className="bg-[#0f0f12] rounded-2xl p-8 border border-purple-700/40 shadow-lg">
            <h4 className="text-xl font-bold text-white mb-6">Interested?</h4>

            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all cursor-pointer">
                Contact Dealer
              </button>

              <button className="w-full py-3 px-4 bg-transparent text-purple-400 rounded-xl font-semibold border border-purple-700/40 hover:bg-purple-600/10 transition-all cursor-pointer">
                Schedule Visit
              </button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#0f0f12] rounded-2xl p-6 border border-[#2b2b33] shadow-lg">
            <h4 className="font-semibold text-white mb-4">Why Choose Us?</h4>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span> 100% Verified Cars
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span> Hassle-free Finance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span> Free Home Inspection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span> Extended Warranty
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
