// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Mianhome from "../components/Mianhome";
import ScrollToTopButton from "../components/ScrollToTopButton"; // keep consistent with your project

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-orange-50">
        {/* =========================
            HERO / DEMO BANNER (replaces the old heading)
            - Put your demo image at: public/assets/overview-banner.png
            - Or uncomment the import line below and place the file inside src/assets
            ========================= */}
        {/* import demoBanner from '../assets/overview-banner.png' */}
        <section className="relative w-full">
          <div className="relative h-[30vh] md:h-[35vh] lg:h-[35vh] w-full overflow-hidden">
            {/* Use public/assets path (recommended) */}
            <img
              src="/assets/Banner.jpg"
              alt="Overview banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Optional: if you prefer importing, uncomment the import above and use:
                <img src={demoBanner} ... /> */}

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Centered content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About Us
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
                <span>About Us</span>
              </motion.nav>
            </div>
          </div>
        </section>

        {/* =========================
            About Section (kept from your original file)
            ========================= */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
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
                offers a unique blend of modern architecture, warm interiors,
                and personalized services. Whether it’s a weekend getaway or a
                long vacation, our guests enjoy the perfect balance of
                relaxation and sophistication.
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
    </>
  );
};

export default About;
