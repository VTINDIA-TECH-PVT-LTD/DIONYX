// src/pages/Gallery.jsx
import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaExpand, FaTimes } from "react-icons/fa"; // ✅ icons from react-icons
import ScrollToTopButton from "../components/ScrollToTopButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

// const videos = [
//   "https://www.w3schools.com/html/mov_bbb.mp4",
//   "https://www.w3schools.com/html/mov_bbb.mp4",
// ];

export default function Gallery() {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  return (
    <>
    
    <div className=" bg-gradient-to-b from-white to-orange-50 min-h-screen">
      
      {/* <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1> */}
      <section className="text-center py-16 bg-orange-100">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-800"
        >
          Our Image Gallery
        </motion.h1>
        
      </section>
      

      {/* Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {photos.map((src, i) => {
          let desc = "";
          if (i === 0) desc = "Our Lounge Area";
          else if (i === 1) desc = "Our Dining Area";
          else if (i === 2) desc = "Beautiful Pathway";
          else if (i === 3) desc = "Our Garden Area";
          else if (i === 4) desc = "Beautiful Pathway";
          else if (i === 5) desc = "Beautiful Pathway";
          else if (i === 6) desc = "Beautiful Pathway";
          else if (i === 7) desc = "Beautiful Pathway";
          else if (i === 8) desc = "Beautiful Pathway";

          return (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image with Zoom */}
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with Caption */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-between p-4">
                <span className="text-white text-lg font-semibold drop-shadow-lg">
                  {desc}
                </span>

                {/* Fullscreen Icon */}
                <button
                  onClick={() => setFullscreenImg(src)}
                  className="bg-white/80 text-black p-2 rounded-full hover:bg-white shadow-md transition"
                >
                  <FaExpand size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Photos Description */}
      <div className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        <p>
          Explore our collection of beautiful moments and memories. Each photo
          captures the essence of our unique experience and the vibrant
          atmosphere we offer. Enjoy browsing through our gallery!
        </p>
      </div>

      {/* Videos */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((src, i) => (
          <video key={i} controls className="rounded-2xl shadow-md w-full">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div> */}

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
      

      {/* <div className="mt-16"> */}
        <ScrollToTopButton />
      {/* </div> */}
    </div>
    </>
  );
}
