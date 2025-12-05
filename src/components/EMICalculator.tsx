// Updated EMI Calculator - Premium Purple Theme (Classy + Clean)
"use client";

import { useState, useMemo } from "react";

interface Car {
  price: number;
  downPrice: number;
}

export default function EMICalculator({ car }: { car: Car }) {
  const [loanAmount, setLoanAmount] = useState(car.price * 0.75);
  const [downPayment, setDownPayment] = useState(car.downPrice);
  const [duration, setDuration] = useState(66);
  const [rateOfInterest] = useState(8.5);

  const monthlyEMI = useMemo(() => {
    const principal = loanAmount;
    const ratePerMonth = rateOfInterest / 100 / 12;
    const numerator =
      principal * ratePerMonth * Math.pow(1 + ratePerMonth, duration);
    const denominator = Math.pow(1 + ratePerMonth, duration) - 1;
    return Math.round(numerator / denominator);
  }, [loanAmount, duration, rateOfInterest]);

  const totalPayment = monthlyEMI * duration;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <style>{`
        /* CLASSY PURPLE SLIDER */
        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          background: #262626;
          border-radius: 50px;
          cursor: pointer;
          outline: none;
        }

        /* Track */
        input[type='range']::-webkit-slider-runnable-track {
          height: 8px;
          background: linear-gradient(to right, #5b21b6, #7c3aed); /* purple gradient */
          border-radius: 50px;
        }

        /* Thumb */
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          border: 3px solid #7c3aed; /* purple border */
          box-shadow: 0 0 12px rgba(124, 58, 237, 0.7); /* purple glow */
          margin-top: -6px;
        }

        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          border: 3px solid #7c3aed;
          box-shadow: 0 0 12px rgba(124, 58, 237, 0.7);
        }
      `}</style>

      <div className="bg-[#0c0c0f] rounded-3xl p-10 border border-purple-900 shadow-[0_0_60px_rgba(124,58,237,0.15)]">
        <h2 className="text-4xl font-bold mb-2 text-white tracking-wide">
          EMI Calculator
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Elegant and premium financing calculator experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left Controls */}
          <div className="space-y-10">
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-lg font-semibold text-gray-200">
                  Loan Amount
                </label>
                <span className="text-3xl font-bold text-purple-400">
                  ₹{(loanAmount / 100000).toFixed(2)}L
                </span>
              </div>

              <input
                type="range"
                min={car.price * 0.3}
                max={car.price}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />

              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <span>₹{((car.price * 0.3) / 100000).toFixed(2)}L</span>
                <span>₹{(car.price / 100000).toFixed(2)}L</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-lg font-semibold text-gray-200">
                  Down Payment
                </label>
                <span className="text-3xl font-bold text-purple-400">
                  ₹{(downPayment / 100000).toFixed(2)}L
                </span>
              </div>

              <input
                type="range"
                min={0}
                max={car.price * 0.7}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />

              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <span>₹0</span>
                <span>
                  ₹{((car.price * 0.7) / 100000).toFixed(2)}L
                </span>
              </div>
            </div>

            {/* Duration */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-lg font-semibold text-gray-200">
                  Loan Duration
                </label>
                <span className="text-3xl font-bold text-purple-400">
                  {duration} Months
                </span>
              </div>

              <input
                type="range"
                min={12}
                max={84}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />

              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <span>12 Months</span>
                <span>84 Months</span>
              </div>
            </div>

            {/* Interest Box */}
            <div className="bg-[#1a1a1d] border border-purple-900 rounded-2xl p-5">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">
                  Rate of Interest:
                </span>{" "}
                {rateOfInterest}% p.a.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                *May vary based on credit profile
              </p>
            </div>
          </div>

          {/* Right Side Result */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1d] rounded-2xl p-8 border border-purple-900 shadow-lg">
              <p className="text-gray-400 text-sm mb-2 font-medium">
                Monthly EMI Payment
              </p>
              <p className="text-5xl font-bold text-purple-400">
                ₹{(monthlyEMI / 1000).toFixed(2)}K
              </p>
              <p className="text-gray-400 text-sm">per month</p>
            </div>

            {/* Breakdown */}
            <div className="space-y-4">
              <div className="flex justify-between p-5 bg-[#111] rounded-xl border border-purple-900">
                <span className="text-gray-200 font-medium">
                  Total Amount Payable
                </span>
                <span className="text-gray-100 font-bold">
                  ₹{(totalPayment / 100000).toFixed(2)}L
                </span>
              </div>

              <div className="flex justify-between p-5 bg-[#111] rounded-xl border border-purple-900">
                <span className="text-gray-200 font-medium">
                  Interest Payable
                </span>
                <span className="text-purple-400 font-bold">
                  ₹{(totalInterest / 100000).toFixed(2)}L
                </span>
              </div>

              <div className="flex justify-between p-5 bg-[#111] rounded-xl border border-purple-900">
                <span className="text-gray-200 font-medium">
                  Principal Amount
                </span>
                <span className="text-purple-400 font-bold">
                  ₹{(loanAmount / 100000).toFixed(2)}L
                </span>
              </div>
            </div>

            {/* Buttons */}
            <button className="w-full py-4 px-6 bg-purple-600 text-white rounded-xl text-lg font-bold hover:bg-purple-700 transition-all cursor-pointer">
              Check Eligibility
            </button>

            <button className="w-full py-3 px-6 bg-[#1a1a1d] text-white rounded-lg border border-purple-900 hover:bg-[#2a2a2a] transition-all cursor-pointer">
              View Loan Breakup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
