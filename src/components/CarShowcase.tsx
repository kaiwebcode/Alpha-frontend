import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CarViewer360 from "./CarViewer360";
import CarCarousel from "./CarCarousel";

interface Car {
  id: number;
  name: string;
  model: string;
  price: number;
  downPrice: number;
  images: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function CarShowcase({ car }: { car: Car }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show360, setShow360] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || show360) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay, show360, car.images.length]);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-white">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
      >

        {/* MAIN IMAGE + CAROUSEL */}
        <motion.div
          variants={fadeLeft}
          className="lg:col-span-2"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1d]/80 to-[#0c0c0f]/20 aspect-video group shadow-[0_0_60px_rgba(124,58,237,0.15)] border border-purple-900">
            {!show360 ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={car.images[currentImageIndex]}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onMouseEnter={() => setIsAutoPlay(false)}
                  onMouseLeave={() => setIsAutoPlay(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            ) : (
              <CarViewer360 car={car} />
            )}

            {/* LEFT BUTTON */}
            {!show360 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev - 1 + car.images.length) % car.images.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-[#1a1a1d]/70 hover:bg-[#2a2a2a]/70 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg border border-purple-800 hover:shadow-purple-500/50 cursor-pointer"
                >
                  <svg
                    className="w-7 h-7 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* RIGHT BUTTON */}
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) => (prev + 1) % car.images.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-[#1a1a1d]/70 hover:bg-[#2a2a2a]/70 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg border border-purple-800 hover:shadow-purple-500/50 cursor-pointer"
                >
                  <svg
                    className="w-7 h-7 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* 360 BUTTON */}
            <button
              onClick={() => setShow360(!show360)}
              className="absolute top-6 right-6 z-20 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/60 transition-all shadow-lg hover:scale-105 active:scale-95 text-sm cursor-pointer"
            >
              {show360 ? "← Back" : "360°"}
            </button>

            {/* COUNTER */}
            {!show360 && (
              <div className="absolute bottom-6 right-6 bg-[#1a1a1d]/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-purple-800">
                {currentImageIndex + 1}/{car.images.length}
              </div>
            )}
          </div>

          {/* CAROUSEL */}
          {!show360 && (
            <CarCarousel
              images={car.images}
              currentIndex={currentImageIndex}
              onSelect={setCurrentImageIndex}
            />
          )}
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          variants={fadeRight}
          className="bg-[#1a1a1d]/90 p-8 rounded-3xl border border-purple-900 shadow-[0_0_60px_rgba(124,58,237,0.15)] h-fit sticky top-32"
        >
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-purple-400">
            {car.name}
          </h1>
          <p className="text-gray-400 text-lg mb-8 font-medium">{car.model}</p>

          <div className="space-y-5 mb-8 pb-8 border-b border-purple-800">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-medium">Price</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                ₹{(car.price / 100000).toFixed(2)}L
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-medium">Down Payment</span>
              <span className="text-xl font-semibold text-purple-400">
                ₹{(car.downPrice / 100000).toFixed(2)}L
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/60 transition-all shadow-lg hover:scale-[1.02] active:scale-95 text-lg ">
              Get Loan Quote
            </button>

            <button className="w-full py-4 px-6 bg-[#1a1a1d]/70 text-purple-300 rounded-xl font-bold hover:bg-[#2a2a2a] transition-all border border-purple-800 hover:border-purple-500 text-lg">
              Schedule Test Drive
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
