import { motion } from "framer-motion";

interface Car {
  name: string;
  year: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  features: string[];
  description: string;
}

export default function CarDetails({ car }: { car: Car }) {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">

          {/* Description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0f0f12] rounded-2xl p-8 border border-[#2b2b33] shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">About This Car</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {car.description}
            </p>
          </motion.div>

          {/* Specifications */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0f0f12] rounded-2xl p-8 border border-[#2b2b33] shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Specifications</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                { label: "Year", value: car.year },
                { label: "Mileage", value: car.mileage },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl border border-purple-700/40 bg-purple-700/10"
                >
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-purple-400">{item.value}</p>
                </motion.div>
              ))}

              {[{ label: "Fuel Type", value: car.fuelType },
                { label: "Transmission", value: car.transmission }].map(
                (item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-xl border border-[#2b2b33] bg-[#17171c]"
                  >
                    <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0f0f12] rounded-2xl p-8 border border-[#2b2b33] shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {car.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[#2b2b33] bg-[#141418]"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Contact Box */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0f0f12] rounded-2xl p-8 border border-purple-700/40 shadow-lg"
          >
            <h4 className="text-xl font-bold text-white mb-6">Interested?</h4>

            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all cursor-pointer">
                Contact Dealer
              </button>

              <button className="w-full py-3 px-4 bg-transparent text-purple-400 rounded-xl font-semibold border border-purple-700/40 hover:bg-purple-600/10 transition-all cursor-pointer">
                Schedule Visit
              </button>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0f0f12] rounded-2xl p-6 border border-[#2b2b33] shadow-lg"
          >
            <h4 className="font-semibold text-white mb-4">Why Choose Us?</h4>

            <ul className="space-y-3 text-sm text-gray-300">
              {[
                "100% Verified Cars",
                "Hassle-free Finance",
                "Free Home Inspection",
                "Extended Warranty",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
