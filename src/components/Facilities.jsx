// src/pages/Facilities.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaSwimmingPool,
  FaUtensils,
  FaSpa,
  FaDumbbell,
  FaWifi,
  FaCar,
} from "react-icons/fa";
import Footer from "../components/Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const facilities = [
  {
    icon: <FaSwimmingPool className="text-4xl text-orange-600" />,
    title: "Luxury Pool",
    desc: "Relax and enjoy our infinity pool with ocean views.",
  },
  {
    icon: <FaUtensils className="text-4xl text-orange-600" />,
    title: "Fine Dining",
    desc: "Experience world-class cuisines prepared by top chefs.",
  },
  {
    icon: <FaSpa className="text-4xl text-orange-600" />,
    title: "Spa & Wellness",
    desc: "Unwind with our rejuvenating spa treatments and massages.",
  },
  {
    icon: <FaDumbbell className="text-4xl text-orange-600" />,
    title: "Fitness Center",
    desc: "Stay fit with our modern gym facilities.",
  },
  {
    icon: <FaWifi className="text-4xl text-orange-600" />,
    title: "Free Wi-Fi",
    desc: "Enjoy unlimited high-speed internet across the hotel.",
  },
  {
    icon: <FaCar className="text-4xl text-orange-600" />,
    title: "Airport Pickup",
    desc: "Convenient airport transfer services available 24/7.",
  },
];

const Facilities = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50   ">
      {/* Page Title */}
      <section className="text-center py-16 bg-orange-100">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-800"
           style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Facilities
        </motion.h1>
        
      </section>
      {/* <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12"
      >
        Our Facilities
      </motion.h2> */}

      {/* Facilities Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20 pt-5 ">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
          >
            <div className="flex justify-center mb-4">{facility.icon}</div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              {facility.title}
            </h3>
            <p className="text-gray-600 text-sm">{facility.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* <Footer /> */}
      {/* <ScrollToTopButton /> */}
    </div>
  );
};

export default Facilities;
