// src/pages/Accommodation.jsx
import React from "react";
import { motion } from "framer-motion";

// ✅ import your components
import Mianhome from "../components/Mianhome";
import Footer from "../components/Footer";

const accommodations = [
  {
    name: "Deluxe Room",
    description:
      "Spacious and elegantly designed with a king-size bed, private balcony, and a stunning city view.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "$180 / night",
  },
  {
    name: "Ocean View Suite",
    description:
      "Luxurious suite with a panoramic ocean view, private jacuzzi, and personal butler service.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    price: "$350 / night",
  },
  {
    name: "Family Villa",
    description:
      "Perfect for families, this villa includes two bedrooms, a living room, and a private pool.",
    image:
      "https://images.unsplash.com/photo-1590490360183-c33d57733427?auto=format&fit=crop&w=800&q=80",
    price: "$500 / night",
  },
];

const Accommodation = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50">
      {/* ✅ Show homepage hero */}
      <Mianhome />

      <div className="py-16 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
        >
          Accommodation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Experience comfort and elegance in our carefully curated rooms and
          suites, designed to make your stay unforgettable.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {accommodations.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                       transition-transform transform hover:-translate-y-2 cursor-pointer"
            >
              <motion.img
                src={room.image}
                alt={room.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                <div className="text-lg font-bold text-orange-600">
                  {room.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Accommodation;
