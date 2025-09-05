// src/pages/SkyKitchen.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const demoItems = [
  {
    title: "Rooftop Dining",
    image: "https://source.unsplash.com/800x600/?rooftop,dining",
    desc: "Experience fine dining under the stars with breathtaking city views.",
  },
  {
    title: "Live Music Nights",
    image: "https://source.unsplash.com/800x600/?music,restaurant",
    desc: "Enjoy soulful live performances while savoring your favorite dishes.",
  },
  {
    title: "Signature Cocktails",
    image: "https://source.unsplash.com/800x600/?cocktail,bar",
    desc: "Taste our handcrafted cocktails curated by expert mixologists.",
  },
];

const SkyKitchen = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative h-[30vh] md:h-[35vh] lg:h-[35vh]  w-full overflow-hidden">
        <img
          src="/assets/Banner.jpg"
          alt="Sky Kitchen Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Sky Kitchen
          </motion.h1>
          <p className="text-sm md:text-base">
            <Link to="/" className="text-red-500 hover:underline">
              Home
            </Link>{" "}
            → Sky Kitchen
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800"
        >
          A Rooftop Experience Like No Other
        </motion.h2>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {demoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkyKitchen;
