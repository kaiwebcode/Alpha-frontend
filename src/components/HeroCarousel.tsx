
import carHero1 from "../assets/car-hero-1.jpg";
import carHero2 from "../assets/car-hero-2.jpg";
import carHero3 from "../assets/car-hero-3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card } from "./ui/card";

const carImages = [
  { src: carHero1, alt: "Luxury Blue Sedan" },
  { src: carHero2, alt: "Black Sports SUV" },
  { src: carHero3, alt: "White Electric Sedan" },
];

export const HeroCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 animate-fade-in">
      <Carousel className="w-full">
        <CarouselContent>
          {carImages.map((car, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-muted to-background">
                  <img
                    src={car.src}
                    alt={car.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};
