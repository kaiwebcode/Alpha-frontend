"use client";

import { useState } from "react";
// import { Header } from "./components/Header";
// import CarShowcase from "./components/CarShowcase";
// import Footer from "./components/footer";

// ---- IMPORT IMAGES ----
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import { Header } from "../components/Header";
import CarShowcase from "../components/CarShowcase";
import EMICalculator from "../components/EMICalculator";
import CarDetails from "../components/CarDetails";
import Footer from "../components/footer";
// import { EMICalculator } from "./components/EMICalculator";
// import CarDetails from "./components/CarDetails";
// import EMICalculator from "./components/EMICalculator";
// Add your new image here
// import img5 from "./assets/image5.png";

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
  images: [img1, img2, img3, img4], // <-- Updated
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
      <main className="pt-20">
        <CarShowcase car={carData} />

        <div className="flex justify-center gap-4 py-12 px-4">
          <button
            onClick={() => setActiveTab("showcase")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "showcase"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/40 scale-[1.02]"
                : "bg-[#1a1a1a] text-gray-300 border border-white/10 hover:border-purple-500/40 hover:text-white hover:scale-[1.02] cursor-pointer"
            }`}
          >
            EMI Calculator
          </button>

          <button
            onClick={() => setActiveTab("details")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "details"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/40 scale-[1.02]"
                : "bg-[#1a1a1a] text-gray-300 border border-white/10 hover:border-purple-500/40 hover:text-white hover:scale-[1.02] cursor-pointer"
            }`}
          >
            Car Details
          </button>
        </div>

        {activeTab === "showcase" && <EMICalculator car={carData} />}
        {activeTab === "details" && <CarDetails car={carData} />}
      </main>
      <Footer />
    </div>
  );
}
