// src/pages/Restaurant.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Mianhome from "../components/Mianhome";
import { Scroll } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";

const menuItems = [
  { name: "Signature Seafood Platter", price: "145" },
  { name: "Gourmet Steak", price: "155" },
  { name: "Exotic Fruit Dessert", price: "115" },
  { name: "Italian Pasta Alfredo", price: "125" },
  { name: "Spicy Thai Curry", price: "122" },
  { name: "Fresh Garden Salad", price: "112" },
];

const diningPhotos = [
  "https://olddionyx.vercel.app/images/act7.jpeg",
  "https://olddionyx.vercel.app/images/23.jpeg",
  "https://olddionyx.vercel.app/images/1.jpg",
  "https://olddionyx.vercel.app/images/24.jpeg",
  "https://olddionyx.vercel.app/images/2.jpg",
  "https://olddionyx.vercel.app/images/25.jpeg",
];

const Restaurant = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Optional hero/banner */}
      {/* <Mianhome /> */}

      {/* Restaurant Intro Section */}
      <div className="bg-gradient-to-b from-white to-orange-50  ">
        <section className="text-center py-16 bg-orange-100">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-orange-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hotel Dionyx Restaurant
          </motion.h1>
          <p
            className="text-gray-600 mt-4 text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Enjoy world-class dining with dishes crafted from the freshest
            ingredients, blending tradition with culinary artistry.
          </p>
        </section>

        {/* Dining Photos Grid */}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {diningPhotos.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Dining ${index + 1}`}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>

        {/* Menu Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMenu(!showMenu)}
            className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          >
            {showMenu ? "Hide Menu" : "View Menu"}
          </motion.button>
        </div>

        {/* Menu List Animation */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mt-8 max-w-xl mx-auto bg-white rounded-2xl shadow-lg"
            >
              <ul className="divide-y divide-gray-200">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center px-6 py-4 hover:bg-orange-50 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {item.name}
                    </span>
                    <span className="text-orange-600 font-bold">
                      {item.price}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ScrollToTopButton />
    </>
  );
};

export default Restaurant;
