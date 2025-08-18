// src/pages/Gallery.jsx
import React from "react";
import Footer from "../components/Footer";

const photos = [
  "https://picsum.photos/id/1018/400/300",
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1016/400/300",
];

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
];

export default function Gallery() {
  return (
    <div className="p-8 bg-gradient-to-b from-white to-orange-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>

      {/* Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {photos.map((src, i) => {
          let desc = '';
          if (i === 0) desc = 'Our ludge area';
          else if (i === 1) desc = 'Our Dining area';
          else if (i === 2) desc = 'Our Swimming poll';
          else if (i === 3) desc = 'Our Graden area';
          else if (i === 4) desc = 'Our Graden area';
          else if (i === 5) desc = 'Our Graden area';
          return (
            <div key={i} className="flex flex-col items-center">
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 mb-2"
              />
              <span className="text-xl">{desc}</span>
            </div>
          );
        })}
      </div>
      {/* Photos Description */}
      <div className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        <p>
          Explore our collection of beautiful moments and memories. Each photo captures the essence of our unique experience and the vibrant atmosphere we offer. Enjoy browsing through our gallery!
        </p>
      </div>

      {/* Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((src, i) => (
          <video
            key={i}
            controls
            className="rounded-2xl shadow-md w-full"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
