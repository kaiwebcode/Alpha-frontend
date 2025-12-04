import { Calendar, Gauge, IndianRupee, Car } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const carDetails = [
  {
    icon: Car,
    label: "Model",
    value: "Premium X5",
    color: "text-purple-600",
  },
  {
    icon: Calendar,
    label: "Year",
    value: "2023",
    color: "text-green-500",
  },
  {
    icon: Gauge,
    label: "Mileage",
    value: "12,500 km",
    color: "text-purple-600",
  },
  {
    icon: IndianRupee,
    label: "Price",
    value: "₹ 13,26,000",
    color: "text-green-500",
  },
];

export const CarOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-4"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <Badge className="mb-4 bg-purple-700/10 text-purple-700 hover:bg-purple-700/20 px-4 py-2 text-sm font-semibold backdrop-blur">
          Featured Vehicle
        </Badge>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent"
        >
          Car Overview
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-muted-foreground text-lg"
        >
          Complete specifications and pricing details
        </motion.p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {carDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.45 }}
          >
            <Card
              className="
                group relative bg-[#0f0f12] backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-purple-700 transition-shadow duration-300 cursor-pointer rounded-2xl
              "
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Icon */}
                <div
                  className="
                    mx-auto w-16 h-16 rounded-full bg-gradient-to-br 
                    from-purple-600/10 to-purple-600/5 
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300
                  "
                >
                  <detail.icon className={`h-8 w-8 ${detail.color}`} />
                </div>

                {/* Label + Value */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="text-2xl font-bold mt-1 text-white">
                    {detail.value}
                  </p>
                </div>
              </CardContent>

              {/* Glow Border on Hover */}
              {/* <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-purple-600/30 to-purple-800/30 blur-lg" /> */}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Key Features Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Card className="mt-20 bg-gradient-to-br from-purple-700/10 to-purple-900/10 border-purple-700/40 rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-4xl font-bold mb-10 text-white">
              Key Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Premium Leather Interiors",
                "Advanced Safety Features",
                "Panoramic Sunroof",
                "Smart Connectivity System",
                "Automatic Climate Control",
                "LED Headlamps & DRLs",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-green-500 shadow-md"></div>
                  <span className="text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
