// src/pages/Accommodation.jsx
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";
import Uniqueness from "../pages/Uniqueness";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const rooms = [
  {
    title: "Deluxe King Room",
    description: "Elegant comfort with king-sized bed, balcony, and city views.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    price: "₹4,999 / night",
  },
  {
    title: "Executive Suite",
    description:
      "Spacious suite with a private lounge, luxury bathroom & modern amenities.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    price: "₹7,499 / night",
  },
  {
    title: "Family Room",
    description:
      "Perfect for families with extra space, cozy beds & warm interiors.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    price: "₹6,299 / night",
  },
  
];

const Accommodation = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 min-h-96 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154206-f3d3be726f88?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white"
        >
          <h1 className="text-5xl font-bold drop-shadow-lg">
            Luxury Accommodation
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Experience unmatched comfort & hospitality at Dionyx
          </p>
        </motion.div>
      </section>

      {/* Sticky Booking Widget */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto -mt-16 relative z-20 bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-4"
      >
        <div className="flex items-center gap-3 flex-1 border rounded-lg p-3">
          <Calendar className="text-orange-500" />
          <input
            type="date"
            className="w-full outline-none"
            placeholder="Check-in Date"
          />
        </div>
        <div className="flex items-center gap-3 flex-1 border rounded-lg p-3">
          <Users className="text-orange-500" />
          <input
            type="number"
            className="w-full outline-none"
            placeholder="Guests"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-orange-600 transition-colors"
        >
          Check Availability
        </motion.button>
      </motion.div>

      {/* Rooms Showcase */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Rooms & Suites
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Image with zoom hover */}
              <div className="overflow-hidden h-64">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-semibold">{room.title}</h3>
                <p className="text-sm mt-2">{room.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold">{room.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-orange-500 px-4 py-2 rounded-lg shadow-md hover:bg-orange-600"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Experience Luxury?
        </motion.h2>
        <p className="opacity-90 mb-6">
          Book your stay today and make unforgettable memories at Dionyx Hotel.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-orange-600 px-8 py-3 rounded-xl shadow-lg font-semibold"
        >
          Reserve Now
        </motion.button>
      </section>
      <Uniqueness />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Accommodation;
