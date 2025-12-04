import { Rotate3D } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const View360Button = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handle360View = () => {
    setIsRotating(true);
    toast.success("360° View Activated", {
      description: "Interactive car view is now enabled",
    });

    setTimeout(() => setIsRotating(false), 2000);
  };

  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      className="relative"
    >
      <Button
        onClick={handle360View}
        size="lg"
        className={`
          relative group overflow-hidden
          bg-gradient-to-r from-purple-700 to-purple-900 
          hover:from-purple-600 hover:to-purple-800
          transition-all duration-300 shadow-lg
          text-white rounded-xl px-6 py-5 cursor-pointer
        `}
      >
        {/* Shine / Light Sweep Effect */}
        <span
          className="
          absolute inset-0 w-full h-full bg-gradient-to-r 
          from-transparent via-white/20 to-transparent 
          opacity-0 group-hover:opacity-100 
          translate-x-[-150%] group-hover:translate-x-[150%]
          transition-all duration-700 ease-out
        "
        />

        {/* Ripple Effect */}
        <AnimatePresence>
          {isRotating && (
            <motion.span
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 0.4, scale: 2.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-xl bg-white/10"
            />
          )}
        </AnimatePresence>

        {/* Icon + Text */}
        <div className="flex items-center gap-2 relative z-10">
          <motion.div
            animate={isRotating ? { rotate: 360 } : {}}
            transition={{ duration: 1, repeat: isRotating ? Infinity : 0, ease: "linear" }}
          >
            <Rotate3D
              className={`h-5 w-5 
              ${!isRotating && "group-hover:rotate-180 transition-transform duration-700"}`}
            />
          </motion.div>

          <span className="font-semibold tracking-wide">View 360°</span>
        </div>
      </Button>
    </motion.div>
  );
};
