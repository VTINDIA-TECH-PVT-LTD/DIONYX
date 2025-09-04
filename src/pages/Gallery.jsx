// src/pages/Gallery.jsx
import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaExpand, FaTimes } from "react-icons/fa"; 
import ScrollToTopButton from "../components/ScrollToTopButton";
import { motion } from "framer-motion";

const photos = [
  "https://olddionyx.vercel.app/images/drone.jpeg",
  "https://olddionyx.vercel.app/images/ew.jpeg",
  "https://olddionyx.vercel.app/images/2.jpeg",
  "https://olddionyx.vercel.app/images/bb1.jpg",
  "https://olddionyx.vercel.app/images/3.jpeg",
  "https://olddionyx.vercel.app/images/4.jpeg",
  "https://olddionyx.vercel.app/images/9.jpeg",
  "https://olddionyx.vercel.app/images/new4.jpg",
  "https://olddionyx.vercel.app/images/7.jpeg",
];

export default function Gallery() {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 min-h-screen">
      {/* Heading */}
      <section className="text-center py-16 bg-orange-100 shadow-inner">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Photos Gallery
        </motion.h1>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Explore our property highlights and facilities in a beautifully curated gallery.
        </p>
      </section>

      {/* Photos Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  ">
          {photos.map((src, i) => {
            let desc = "";
            if (i === 0) desc = "Our Lounge Area";
            else if (i === 1) desc = "Our Dining Area";
            else if (i === 2) desc = "Beautiful Pathway";
            else if (i === 3) desc = "Our Garden Area";
            else desc = "Scenic View";

            return (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full h-65 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                  <span className="text-white text-lg font-semibold drop-shadow-md transform translate-y-6 group-hover:translate-y-0 transition duration-500">
                    {desc}
                  </span>

                  {/* Fullscreen Button */}
                  <button
                    onClick={() => setFullscreenImg(src)}
                    className="absolute top-3 right-3 bg-white/80 text-black p-2 rounded-full hover:bg-white shadow-md transition"
                  >
                    <FaExpand size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImg && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setFullscreenImg(null)}
            className="absolute top-6 right-6 bg-white/80 text-black p-2 rounded-full hover:bg-white shadow-md transition"
          >
            <FaTimes size={24} />
          </button>
          <img
            src={fullscreenImg}
            alt="Fullscreen"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}

      <ScrollToTopButton />
      {/* <Footer /> */}
    </div>
  );
}
