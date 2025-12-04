import { motion } from "framer-motion";
import { CarOverview } from "../components/CarOverview";
import { EMICalculator } from "../components/EMICalculator";
import { Header } from "../components/Header";
import { HeroCarousel } from "../components/HeroCarousel";
import { View360Button } from "../components/View360Button";
import { useEffect, useState } from "react";
import Footer from "../components/footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth parallax calculations
  const topBlobTranslate = scrollY * 0.08; // small upward movement
  const bottomBlobTranslate = scrollY * -0.06; // subtle opposite direction
  return (
    <div className="min-h-screen bg-[#0D0F12] text-white scroll-smooth">
      <Header />

      <div id="home" className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/20 to-purple-500/15 rounded-full blur-3xl animate-float"
          style={{
            transform: `translateY(${topBlobTranslate}px)`,
            transition: "transform 0.05s linear",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-purple-500/20 to-pink-500/15 rounded-full blur-3xl animate-float"
          style={{
            transform: `translateY(${bottomBlobTranslate}px)`,
            transition: "transform 0.05s linear",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <main className="container mx-auto px-4 py-12 space-y-28">
        {/* HERO SECTION */}
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-4"
          >
            <h1
              className="
                text-5xl md:text-7xl font-extrabold tracking-tight
                bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-300
                bg-clip-text text-transparent drop-shadow-[0_0_15px_#3A8DFF66]
              "
            >
              Discover Your Dream Car
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Premium vehicles. Transparent pricing. Smooth financing options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <HeroCarousel />
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <View360Button />
          </motion.div>
        </section>

        {/* PRICE CALCULATOR */}
        <section id="calculator" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <EMICalculator />
          </motion.div>
        </section>

        {/* CAR OVERVIEW */}
        <section id="cars" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CarOverview />
          </motion.div>
        </section>
      </main>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Index;
