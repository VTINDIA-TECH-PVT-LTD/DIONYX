import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    title: "Hotel Overview",
    video: "https://lh3.googleusercontent.com/ggms/AF1QipM7qUisJk-JsXM7igzATEfM0z4l_NCnuMW9VFHj=m18?cpn=LCMEDMwYMR2Ww59S",
  },
  {
    title: "Luxury Rooms",
    video: "https://lh3.googleusercontent.com/ggms/AF1QipM7qUisJk-JsXM7igzATEfM0z4l_NCnuMW9VFHj=m18?cpn=LCMEDMwYMR2Ww59S",
  },
  {
    title: "Fine Dining",
    video: "https://lh3.googleusercontent.com/ggms/AF1QipM7qUisJk-JsXM7igzATEfM0z4l_NCnuMW9VFHj=m18?cpn=LCMEDMwYMR2Ww59S",
  },
  {
    title: "Swimming Pool",
    video: "https://lh3.googleusercontent.com/ggms/AF1QipM7qUisJk-JsXM7igzATEfM0z4l_NCnuMW9VFHj=m18?cpn=LCMEDMwYMR2Ww59S",
  },
  {
    title: "Swimming Pool",
    video: "https://lh3.googleusercontent.com/ggms/AF1QipM7qUisJk-JsXM7igzATEfM0z4l_NCnuMW9VFHj=m18?cpn=LCMEDMwYMR2Ww59S",
  },
  {
    title: "Swimming Pool",
    video: "https://lh3.googleusercontent.com/ggms/AF1QipM7qUisJk-JsXM7igzATEfM0z4l_NCnuMW9VFHj=m18?cpn=LCMEDMwYMR2Ww59S",
  },
];

const VideoGallery = () => {
  return (
    <section className=" bg-gray-100 pb-15">
      <div className="container mx-auto ">
        {/* Heading */}
        <section className="text-center py-16 bg-orange-100">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-800"
        >
          Our Video Gallery
        </motion.h1>
        
      </section>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg bg-black"
            >
              <video
                src={item.video}
                className="w-full h-64 object-cover"
                controls
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 text-lg font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
