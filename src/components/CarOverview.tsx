
import { Calendar, Gauge, IndianRupee, Car } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const carDetails = [
  {
    icon: Car,
    label: "Model",
    value: "Premium Sedan X5",
    color: "text-purple-700",
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
    color: "text-purple-700",
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
    <div className="w-full max-w-6xl mx-auto px-4 animate-fade-in">
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-primary/10 text-purple-700 hover:bg-purple-700/20 px-4 py-2 text-sm font-semibold">
          Featured Vehicle
        </Badge>
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-700 to-purple-700 bg-clip-text text-transparent">
          Car Overview
        </h2>
        <p className="text-muted-foreground text-lg">Complete specifications and pricing details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {carDetails.map((detail, index) => (
          <Card
            key={index}
            className="group hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] border-border bg-card hover:scale-105 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-700/10 to-purple-700/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <detail.icon className={`h-8 w-8 ${detail.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{detail.label}</p>
                <p className="text-2xl font-bold text-foreground">{detail.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-gradient-to-br from-purple-700/20 to-accent/5 border-purple-700/60 shadow-[var(--shadow-card)]">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Premium Leather Interiors",
              "Advanced Safety Features",
              "Panoramic Sunroof",
              "Smart Connectivity System",
              "Automatic Climate Control",
              "LED Headlamps & DRLs",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-700 to-green-500"></div>
                <span className="text-base">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
