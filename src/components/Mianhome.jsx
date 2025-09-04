// src/components/Mianhome.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Mianhome() {
  const audioRef = useRef(null);

  // ✅ Autoplay muted first (so browser doesn’t block it)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.muted = true;
    audio.play().catch(() => {});
  }, []);

  // ✅ On first user interaction → unmute & continue playing
  useEffect(() => {
    const enableSound = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.muted = false;
      try {
        await audio.play();
      } catch (err) {
        console.warn("Autoplay still blocked", err);
      }
      document.removeEventListener("click", enableSound);
      document.removeEventListener("touchstart", enableSound);
    };

    document.addEventListener("click", enableSound);
    document.addEventListener("touchstart", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("touchstart", enableSound);
    };
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* 🎵 Background Music */}
      <audio ref={audioRef} src="/assets/dionyx-bg.mp3" preload="auto" />

      {/* 🎥 MP4 Video as Banner */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://dionyx.in/images/Hotel%20Dionxy.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Title Text */}
      <motion.div
        className="absolute bottom-10 left-6 text-white text-3xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore and Enjoy with Hotel Dionyx
      </motion.div>

      {/* 🏷️ Moving welcome text */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 py-2 overflow-hidden">
        <motion.div
          className="text-white text-lg font-semibold whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          Welcome to Hotel Dionyx — Experience Luxury & Comfort
        </motion.div>
      </div>
    </div>
  );
}
