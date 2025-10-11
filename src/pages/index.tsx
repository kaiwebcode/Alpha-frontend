// import { Header } from "@/components/Header";
// import { HeroCarousel } from "@/components/HeroCarousel";
// import { View360Button } from "@/components/View360Button";
// import { EMICalculator } from "@/components/EMICalculator";
// import { CarOverview } from "@/components/CarOverview";

import { CarOverview } from "../components/CarOverview";
import { EMICalculator } from "../components/EMICalculator";
import { Header } from "../components/Header";
import { HeroCarousel } from "../components/HeroCarousel";
import { View360Button } from "../components/View360Button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      <Header />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section id="home" className="space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500/10 bg-clip-text text-transparent">
              Discover Your Dream Car
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium vehicles with transparent pricing and flexible financing
              options
            </p>
          </div>

          <HeroCarousel />

          <div className="flex justify-center">
            <View360Button />
            </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-12">
          <EMICalculator />
        </section>

        {/* Car Overview Section */}
        <section id="cars" className="py-12">
          <CarOverview />
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-border">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Alpha Motors. Premium Car Marketplace Project.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
