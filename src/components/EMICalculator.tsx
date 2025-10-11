import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { Slider } from "./ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1060800);
  const [downPayment, setDownPayment] = useState(265200);
  const [duration, setDuration] = useState(66);

  // logic of EMI calculation
  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const rate = 9.5 / 100 / 12; // 9.5% annual rate
    const emi = (principal * rate * Math.pow(1 + rate, duration)) / (Math.pow(1 + rate, duration) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] border-border animate-scale-in">
      <CardHeader className="border-b bg-gradient-to-br from-muted/50 to-background">
        <CardTitle className="text-2xl font-bold text-foreground">EMI Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        {/* Loan Amount */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-base font-semibold text-foreground">Loan Amount</label>
            <span className="text-2xl font-bold text-purple-800">₹ {loanAmount.toLocaleString('en-IN')}</span>
          </div>
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            min={100000}
            max={1326000}
            step={10000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹ 1,00,000</span>
            <span>₹ 13,26,000</span>
          </div>
        </div>

        {/* Down Payment */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-base font-semibold text-foreground">Down Payment*</label>
            <span className="text-2xl font-bold text-green-500">₹ {downPayment.toLocaleString('en-IN')}</span>
          </div>
          <Slider
            value={[downPayment]}
            onValueChange={(value) => setDownPayment(value[0])}
            min={0}
            max={1226000}
            step={5000}
            className="w-full "
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹ 0</span>
            <span>₹ 12,26,000</span>
          </div>
        </div>

        {/* Duration */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-base font-semibold text-foreground">Duration of Loan</label>
            <span className="text-2xl font-bold text-purple-800">{duration} Months</span>
          </div>
          <Slider
            value={[duration]}
            onValueChange={(value) => setDuration(value[0])}
            min={12}
            max={84}
            step={6}
            className="w-full "
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>12 Months</span>
            <span>84 Months</span>
          </div>
        </div>

        {/* EMI Display */}
        <div className="pt-6 border-t border-border">
          <div className="text-center space-y-4">
            <div>
              <span className="text-5xl font-bold bg-gradient-to-r from-green-400  to-green-600/60 bg-clip-text text-transparent">
                ₹{emi.toLocaleString('en-IN')}
              </span>
              <span className="text-lg text-muted-foreground ml-2">per month</span>
            </div>

            <button className="flex items-center gap-2 text-purple-800 hover:text-purple-500/80 transition-colors mx-auto font-medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              View Loan Breakup
              <ChevronDown className="h-4 w-4" />
            </button>

            <Button
              size="lg" 
              className="w-full bg-gradient-to-r from-purple-700 to-purple-800/90 hover:shadow-[var(--shadow-hover)] transition-all duration-300 text-base font-semibold py-6"
            >
              <span className="mr-2">💰</span>
              Check eligibility
            </Button>

            <p className="text-xs text-muted-foreground leading-relaxed">
              *Rate of interest can vary subject to credit profile. Loan approval is at the sole discretion of the finance partner.
              <br />
              **Processing fee and other loan charges are not included.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
