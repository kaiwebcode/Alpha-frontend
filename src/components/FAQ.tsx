import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


export function FAQ() {
  const faqData = [
    {
      q: "What services does Alpha Motors provide?",
      a: "Alpha Motors offers premium car showcases, EMI calculators, detailed car specifications, and a smooth user experience to explore vehicle features and compare models.",
    },
    {
      q: "Can I calculate EMI instantly?",
      a: "Yes! Our built-in EMI Calculator gives you an instant breakdown of monthly payments based on the car price, interest rate, and duration.",
    },
    {
      q: "Does Alpha Motors list electric cars like BMW i7?",
      a: "Absolutely. Alpha Motors includes luxury EV models like the BMW i7, showcasing complete details including mileage, features, and pricing.",
    },
    {
      q: "Is the price shown the final on-road price?",
      a: "No, the displayed price is an approximate base value. On-road price may vary depending on location, taxes, and additional accessories.",
    },
    {
      q: "Is the website responsive and mobile-friendly?",
      a: "Yes, our entire system including car showcase, calculator, and detail pages is optimized for all devices.",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto pt-10 pb-20 px-1.5">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <AccordionItem
              value={`faq-${index}`}
              className="border border-white/10 rounded-xl px-4 bg-[#1a1a1a] shadow-md hover:border-purple-400/40 transition"
            >
              <AccordionTrigger className="text-base md:text-lg lg:text-xl font-medium text-gray-200 hover:text-white cursor-pointer">
                Q. {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed text-xl">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
}
