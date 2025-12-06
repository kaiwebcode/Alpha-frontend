import { useState } from "react";
import { motion } from "framer-motion";

// ---- IMPORT COMPONENTS ----
import { Header } from "../components/Header";
import CarShowcase from "../components/CarShowcase";
import EMICalculator from "../components/EMICalculator";
import CarDetails from "../components/CarDetails";
import Footer from "../components/footer";

// ---- IMPORT IMAGES ----
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

// ---- CAR DATA ----
const carData = {
  id: 1,
  name: "BMW i7",
  model: "2024",
  price: 1060800,
  downPrice: 265200,
  year: 2024,
  mileage: "5 km",
  fuelType: "Electric",
  transmission: "Automatic",
  images: [img1, img2, img3, img4],
  features: [
    "Panoramic Roof",
    "Premium Sound System",
    "Leather Seats",
    "Climate Control",
    "5G Connectivity",
  ],
  description:
    "Experience luxury and performance in the all-new BMW i7. Combining elegant design with cutting-edge electric technology.",
};

// ---- PAGE ----
export default function Home() {
  const [activeTab, setActiveTab] = useState<"showcase" | "details">(
    "showcase"
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-1 px-2 md:px-0 lg:pt-14">
        {/* CAR SHOWCASE */}
        <CarShowcase car={carData} />

        {/* TABS */}
        <div className="flex justify-center gap-3 lg:pt-14 md:gap-6 pt-8 flex-wrap">

          {/* ---- Button 1 (EMI Calculator) ---- */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}

            onClick={() => setActiveTab("showcase")}
            className={`px-6 md:px-8 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 
              ${
                activeTab === "showcase"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/40 scale-105"
                  : "bg-[#1a1a1a] text-gray-300 border border-white/10 hover:border-purple-500/40 hover:text-white hover:scale-105 cursor-pointer"
              }`}
          >
            EMI Calculator
          </motion.button>

          {/* ---- Button 2 (Car Details) ---- */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}

            onClick={() => setActiveTab("details")}
            className={`px-6 md:px-8 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 
              ${
                activeTab === "details"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/40 scale-105"
                  : "bg-[#1a1a1a] text-gray-300 border border-white/10 hover:border-purple-500/40 hover:text-white hover:scale-105 cursor-pointer"
              }`}
          >
            Car Details
          </motion.button>

        </div>

        {/* CONTENT SWITCHING */}
        <div className="px-1 md:px-0">
          {activeTab === "showcase" && <EMICalculator car={carData} />}
          {activeTab === "details" && <CarDetails car={carData} />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
