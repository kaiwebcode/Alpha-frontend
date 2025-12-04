import { Car, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Cars", href: "#cars" },
    { label: "Calculator", href: "#calculator" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full sticky top-0 z-50
        bg-[#07080d]/50 backdrop-blur-2xl
        border-b border-white/10
        shadow-[0_0_30px_#7c3aed44]
      "
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-3"
        >
          <div
            className="
              w-12 h-12 rounded-xl
              bg-gradient-to-br from-purple-600 to-indigo-700
              flex items-center justify-center
              border border-purple-500/30
              shadow-[0_0_25px_#8b5cf6aa]
            "
          >
            <Car className="h-7 w-7 text-white" />
          </div>

          <div className="leading-tight">
            <h1
              className="
                text-2xl font-extrabold tracking-tight
                bg-gradient-to-r from-purple-300 via-purple-200 to-indigo-200
                bg-clip-text text-transparent
              "
            >
              Alpha Motors
            </h1>
            <p className="text-xs text-gray-400">Premium Car Marketplace</p>
          </div>
        </motion.div>

        {/* NAV LINKS - DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="
                text-sm font-medium text-gray-300
                hover:text-white transition-all
                relative group
              "
            >
              {link.label}

              {/* Underline Animation */}
              <span
                className="
                  absolute bottom-0 left-0 w-0 h-0.5
                  bg-gradient-to-r from-blue-500 to-purple-500
                  group-hover:w-full transition-all duration-300
                "
              ></span>
            </motion.a>
          ))}
        </nav>

        {/* RIGHT AUTH BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-gray-300 hover:text-white text-sm transition-all cursor-pointer">
            Sign In
          </button>

          <button
            className="
              px-5 py-2 rounded-lg text-sm font-medium text-white
              bg-gradient-to-r from-blue-500 to-purple-500
              shadow-[0_0_15px_#7c3aed66]
              hover:shadow-[0_0_25px_#7c3aedaa]
              transition-all cursor-pointer
            "
          >
            Get Started
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            md:hidden flex flex-col gap-4 px-6 py-5
            bg-[#0b0d12]/95 backdrop-blur-xl
            border-t border-white/5
            shadow-[0_0_30px_#00000088]
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-gray-300 text-sm py-2
                hover:text-white transition-all
                border-b border-white/5
              "
            >
              {link.label}
            </a>
          ))}

          {/* MOBILE AUTH BUTTONS */}
          <div className="flex flex-col gap-3 pt-2">
            <button className="py-2 text-gray-300 hover:text-white text-sm">
              Sign In
            </button>

            <button
              className="
                py-3 rounded-lg text-white text-sm
                bg-gradient-to-r from-blue-500 to-purple-500
                shadow-[0_0_20px_#7c3aed66]
              "
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
