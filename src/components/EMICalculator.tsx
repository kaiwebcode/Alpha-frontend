import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Slider } from "./ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1060800);
  const [downPayment, setDownPayment] = useState(265200);
  const [duration, setDuration] = useState(66);

  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const rate = 9.5 / 100 / 12;
    const emi =
      (principal * rate * Math.pow(1 + rate, duration)) /
      (Math.pow(1 + rate, duration) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Card className="w-full max-w-2xl mx-auto rounded-2xl bg-[#0f0f12] backdrop-blur-xl border border-white/5 shadow-2xl shadow-purple-700">
        
        {/* HEADER */}
        <CardHeader className="py-6 border-b border-white/5 bg-gradient-to-r from-purple-900/20 via-purple-800/10 to-transparent">
          <CardTitle className="text-3xl font-bold tracking-tight text-white drop-shadow">
            EMI Calculator
          </CardTitle>
        </CardHeader>

        <CardContent className="p-8 space-y-10">
          
          {/* ------------------- LOAN AMOUNT ------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-gray-300">
                Loan Amount
              </label>

              <motion.span
                key={loanAmount}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent"
              >
                ₹ {loanAmount.toLocaleString("en-IN")}
              </motion.span>
            </div>

            <Slider
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
              min={100000}
              max={1326000}
              step={10000}
            />

            <div className="flex justify-between text-sm text-gray-500">
              <span>₹1,00,000</span>
              <span>₹13,26,000</span>
            </div>
          </motion.div>

          {/* ------------------- DOWN PAYMENT ------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-gray-300">
                Down Payment*
              </label>

              <motion.span
                key={downPayment}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-green-400"
              >
                ₹ {downPayment.toLocaleString("en-IN")}
              </motion.span>
            </div>

            <Slider
              value={[downPayment]}
              onValueChange={(value) => setDownPayment(value[0])}
              min={0}
              max={1226000}
              step={5000}
            />

            <div className="flex justify-between text-sm text-gray-500">
              <span>₹0</span>
              <span>₹12,26,000</span>
            </div>
          </motion.div>

          {/* ------------------- DURATION ------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-gray-300">
                Loan Duration
              </label>

              <motion.span
                key={duration}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-purple-400"
              >
                {duration} Months
              </motion.span>
            </div>

            <Slider
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
              min={12}
              max={84}
              step={6}
            />

            <div className="flex justify-between text-sm text-gray-500">
              <span>12 Months</span>
              <span>84 Months</span>
            </div>
          </motion.div>

          {/* ------------------- EMI RESULT ------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="pt-8 border-t border-white/5"
          >
            <div className="text-center space-y-6">
              
              {/* EMI Number */}
              <motion.div
                key={emi}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-5xl font-extrabold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                  ₹{emi.toLocaleString("en-IN")}
                </span>
                <span className="text-lg text-gray-400 ml-2">per month</span>
              </motion.div>

              {/* Breakdown Button */}
              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mx-auto font-medium">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
                View Loan Breakup
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full py-6 rounded-xl font-semibold text-white 
                bg-gradient-to-r from-purple-700 to-purple-900 
                hover:shadow-lg hover:shadow-purple-800/40 transition-all duration-300"
              >
                💰 Check eligibility
              </Button>

              <p className="text-xs text-gray-500 leading-relaxed">
                *Rate of interest may vary based on credit profile.  
                **Processing fee & other charges are not included.
              </p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
