import { Car } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-700 to-purple-900/55 flex items-center justify-center shadow-md">
            <Car className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-purple-700 bg-clip-text text-transparent">
              Alpha Motors
            </h1>
            <p className="text-xs text-muted-foreground">Premium Car Marketplace</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#cars" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Cars
          </a>
          <a href="#calculator" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Calculator
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
