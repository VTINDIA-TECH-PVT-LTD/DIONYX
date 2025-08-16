// src/components/CallForReservation.jsx
import React from "react";
import { motion } from "framer-motion";

const CallForReservation = () => {
  return (
    <motion.a
      href="tel:9861006356"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 8,
        delay: 0.5,
      }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-20 right-6 bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg text-sm sm:text-base z-50 animate-pulse-glow"
    >
      CALL FOR RESERVATION: 9861006356
    </motion.a>
  );
};

export default CallForReservation;
