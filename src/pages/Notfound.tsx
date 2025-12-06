import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("❌ 404 Error: Route not found →", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0d12] text-white px-4">
      <div className="text-center">

        {/* BIG 404 ANIMATION */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-8xl font-extrabold
            bg-gradient-to-r from-purple-500 via-blue-400 to-purple-600
            bg-clip-text text-transparent
            drop-shadow-[0_0_20px_#7c3aedaa]
          "
        >
          404
        </motion.h1>

        {/* MESSAGE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-gray-300"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-sm text-gray-500"
        >
          It may have been moved, deleted, or never existed.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="
              inline-block px-8 py-3 rounded-xl font-medium
              bg-gradient-to-r from-blue-600 to-purple-600
              shadow-[0_0_20px_#7c3aed66]
              hover:shadow-[0_0_30px_#7c3aedaa]
              transition-all duration-300
            "
          >
            ⬅ Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
