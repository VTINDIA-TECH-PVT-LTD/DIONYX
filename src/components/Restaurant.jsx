// src/pages/Restaurant.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
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
      <div className="bg-gradient-to-b from-white to-orange-50 pb-5">
        {/* =========================
            DEMO BANNER (replaces heading)
            Place demo image at: public/assets/overview-banner.png
            ========================= */}
        <section className="relative w-full">
          <div className="relative h-[30vh] md:h-[35vh] lg:h-[35vh] w-full overflow-hidden">
            <img
              src="/assets/Resturant.jpeg"
              alt="Overview banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/50" />

            {/* centered title & breadcrumb */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Restaurant
              </motion.h1>

              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-3 text-sm sm:text-base text-white/90 flex items-center gap-2"
                aria-label="Breadcrumb"
              >
                <a href="/" className="text-orange-300 hover:underline">
                  Home
                </a>
                <span className="text-white/60">→</span>
                <span>Restaurant</span>
              </motion.nav>
            </div>
          </div>
        </section>

        {/* Restaurant Intro Section (content kept from original file) */}
        <div className="py-8 md:py-12 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            {/* <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-orange-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hotel Dionyx Restaurant
            </motion.h2> */}
            <p
              className="text-gray-600 mt-4 text-base md:text-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Enjoy world-class dining with dishes crafted from the freshest
              ingredients, blending tradition with culinary artistry.
            </p>
          </div>

          {/* Dining Photos Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          >
            {diningPhotos.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Dining ${index + 1}`}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
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
                transition={{ duration: 0.45 }}
                className="overflow-hidden mt-8 max-w-xl mx-auto bg-white rounded-2xl shadow-lg"
              >
                <ul className="divide-y divide-gray-200">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="flex justify-between items-center px-6 py-4 hover:bg-orange-50 transition-colors"
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {item.name}
                      </span>
                      <span className="text-orange-600 font-bold">
                        ₹{item.price}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ScrollToTopButton />
        {/* optionally include <Footer /> here if you want a footer on this page */}
      </div>
    </>
  );
};

export default Restaurant;
