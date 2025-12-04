import { motion } from "framer-motion";
import carHero1 from "../assets/car-hero-1.jpg";
import carHero2 from "../assets/car-hero-2.jpg";
import carHero3 from "../assets/car-hero-3.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Card } from "./ui/card";

const carImages = [
  { src: carHero1, alt: "Luxury purple Sedan" },
  { src: carHero2, alt: "Black Sports SUV" },
  { src: carHero3, alt: "White Electric Sedan" },
];

export const HeroCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-4"
    >
      <Carousel className="w-full relative select-none">
        <CarouselContent>
          {carImages.map((car, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="group"
              >
                <Card className="border-0 shadow-xl overflow-hidden rounded-2xl bg-zinc-800">
                  <motion.div
                    className="aspect-video relative overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.10 }}
                    transition={{ duration: 0.45 }}
                  >
                    {/* Image */}
                    <motion.img
                      src={car.src}
                      alt={car.alt}
                      className="w-full h-full object-cover rounded-2xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    {/* Gradient Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

                    {/* Subtle Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl" />
                  </motion.div>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Glassmorphic Buttons */}
        <CarouselPrevious
          className="
            left-4 
            bg-white/10 backdrop-blur-lg border border-black/20 
            hover:bg-white/20 hover:scale-110 
            transition-all duration-300 
            text-black shadow-lg cursor-pointer
          "
        />
        <CarouselNext
          className="
            right-4 
            bg-white/10 backdrop-blur-lg border border-black/20 
            hover:bg-white/20 hover:scale-110 
            transition-all duration-300 
            text-black shadow-lg cursor-pointer
          "
        />
      </Carousel>
    </motion.div>
  );
};
