// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Mianhome from "../components/Mianhome";
import ScrollToTopButton from "./ScrollToTopButton";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50">
      {/* Top hero/banner */}
      {/* <Mianhome /> */}
      <section className="text-center py-16 bg-orange-100">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Hotel Dionyx
        </motion.h1>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6"
        >
          {/* About <span className="text-orange-600">Hotel Dionyx</span> */}
        </motion.h1>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16"
        >
          Welcome to Hotel Dionyx, where luxury meets comfort. Our mission is to
          create unforgettable experiences for every guest by blending elegant
          design, world-class hospitality, and the beauty of our surroundings.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://olddionyx.vercel.app/images/about.jpeg"
              alt="Hotel Lobby"
              className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision of redefining luxury stays, Hotel Dionyx
              offers a unique blend of modern architecture, warm interiors, and
              personalized services. Whether it’s a weekend getaway or a long
              vacation, our guests enjoy the perfect balance of relaxation and
              sophistication.
            </p>
            <p className="text-gray-600">
              With top-notch amenities, exquisite dining options, and a
              commitment to excellence, we ensure every moment spent here is
              special. Your comfort is our priority.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Luxury & Comfort",
              desc: "Experience premium rooms with world-class facilities.",
              icon: "🏨",
            },
            {
              title: "Gourmet Dining",
              desc: "Savor delicious meals prepared by our top chefs.",
              icon: "🍽️",
            },
            {
              title: "Unmatched Service",
              desc: "Hospitality that makes you feel truly at home.",
              icon: "🤝",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <ScrollToTopButton />
    </div>
  );
};

export default About;
