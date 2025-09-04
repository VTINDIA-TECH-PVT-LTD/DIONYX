// src/pages/Gallery.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaTimes, FaPlay } from "react-icons/fa";

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

const videos = [
  { title: "Hotel Overview", video: "https://dionyx.in/images/Hotel%20Dionxy.mp4" },
  { title: "Luxury Rooms", video: "https://dionyx.in/images/Hotel%20Dionxy.mp4" },
  { title: "Fine Dining", video: "https://dionyx.in/images/Hotel%20Dionxy.mp4" },
  { title: "Swimming Pool", video: "https://dionyx.in/images/Hotel%20Dionxy.mp4" },
  { title: "Spa & Wellness", video: "https://dionyx.in/images/Hotel%20Dionxy.mp4" },
  { title: "Events & Parties", video: "https://dionyx.in/images/Hotel%20Dionxy.mp4" },
];

export default function Gallery() {
  const [tab, setTab] = useState("photos");
  const [fullscreen, setFullscreen] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <video
          src="https://dionyx.in/images/Hotel%20Dionxy.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience Dionyx
          </motion.h1>
          <p className="text-white/90 mt-4 text-lg md:text-xl max-w-2xl">
            Explore our world through stunning photos and immersive videos.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mt-10">
        {["photos", "videos"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${
              tab === t
                ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-orange-50"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {tab === "photos" ? (
            // Masonry Photo Grid
            <motion.div
              key="photos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
            >
              {photos.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group"
                  onClick={() => setFullscreen({ type: "image", src })}
                >
                  <img
                    src={src}
                    alt={`Gallery ${i}`}
                    className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <FaExpand className="text-white text-2xl" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Video Grid
            <motion.div
              key="videos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {videos.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  onClick={() => setFullscreen({ type: "video", src: item.video })}
                >
                  <video
                    src={item.video}
                    muted
                    loop
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                    <FaPlay className="text-white text-3xl" />
                  </div>
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent py-3 px-4">
                    <p className="text-white font-semibold">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen Modal */}
      {fullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <button
            onClick={() => setFullscreen(null)}
            className="absolute top-6 right-6 bg-white/90 text-black p-2 rounded-full shadow-md hover:bg-white"
          >
            <FaTimes size={24} />
          </button>
          {fullscreen.type === "image" ? (
            <img
              src={fullscreen.src}
              alt="Fullscreen"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          ) : (
            <video
              src={fullscreen.src}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          )}
        </motion.div>
      )}
    </div>
  );
}
