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
      "/assets/Room.jpg",
    price: "₹1,999 / night",
  },
  {
    title: "Executive Suite",
    description:
      "Spacious suite with a private lounge, luxury bathroom & modern amenities.",
    image:
      "/assets/Room.jpg",
    price: "₹2,499 / night",
  },
  {
    title: "Family Room",
    description:
      "Perfect for families with extra space, cozy beds & warm interiors.",
    image:
      "/assets/Room.jpg",
    price: "₹3,299 / night",
  },
];

const Accommodation = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 min-h-96 overflow-hidden">
      {/* =========================
          DEMO BANNER (replaces old "Luxury Accommodation" section)
          ========================= */}
      <section className="relative w-full">
        <div className="relative h-[30vh] md:h-[35vh] lg:h-[35vh] w-full overflow-hidden">
          {/* Place your demo banner image inside public/assets */}
          <img
            src="/assets/Accomodation.jpeg"
            alt="Overview banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Centered Title + Breadcrumb */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Luxry Accommodation
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
              <span>Accommodation</span>
            </motion.nav>
          </div>
        </div>
      </section>

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
              {/* Image */}
              <div className="overflow-hidden h-64">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay */}
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
      </section>

      <Uniqueness />
      <ScrollToTopButton />
    </div>
  );
};

export default Accommodation;
