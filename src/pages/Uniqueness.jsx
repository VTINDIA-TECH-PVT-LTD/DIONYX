// src/components/Uniqueness.jsx
import React from "react";
import { motion } from "framer-motion";
// Import icons from react-icons
import { FaHotel, FaUtensils, FaUsers, FaHeart, FaHome } from "react-icons/fa";

const points = [
  {
    text: "Cosy hotel, situated in the heart of the city and just walking distance to all business hubs and corporate houses.",
    icon: <FaHotel className="w-6 h-6 text-orange-500" />,
  },
  {
    text: "Taking extra care of various services and facilities.",
    icon: <FaUtensils className="w-6 h-6 text-orange-500" />,
  },
  {
    text: "The best ambience for group stays.",
    icon: <FaUsers className="w-6 h-6 text-orange-500" />,
  },
  {
    text: "Couple friendly.",
    icon: <FaHeart className="w-6 h-6 text-orange-500" />,
  },
  {
    text: "Our combo meals for in-house guests – because we are strictly against food wastage.",
    icon: <FaHome className="w-6 h-6 text-orange-500" />,
  },
];

export default function Uniqueness() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-800 mb-10"
        >
          OUR UNIQUENESS
        </motion.h2>

        <div className="space-y-1 text-left">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">{point.icon}</div>
              <p className="text-gray-700 leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Note */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1 }}
          viewport={{ once: true }}
          className="mt-10 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-lg"
        >
          The best part? All of these hospitalities are extended at budget hotel prices!
        </motion.div>
      </div>
    </section>
  );
}
