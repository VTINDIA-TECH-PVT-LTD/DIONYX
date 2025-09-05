// src/components/Activities.jsx
import React from "react";
import { motion } from "framer-motion";
import { Activity, Sun, Music, Bike } from "lucide-react";
import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative h-[30vh] md:h-[35vh] lg:h-[35vh]  w-full overflow-hidden">
        <img
          src="/assets/Banner.jpg" // your banner
          alt="Activities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Activities
          </motion.h1>
          <p className="text-sm md:text-base">
            <Link to="/" className="text-red-500 hover:underline">
              Home
            </Link>{" "}
            → Activities
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-orange-700 mb-6"
          >
            Fun & Engaging Experiences
          </motion.h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            At Hotel Dionyx, we ensure your stay is filled with not just comfort,
            but also joy and excitement. Our range of activities caters to all age
            groups, keeping every guest entertained and engaged.
          </p>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Activity size={40} className="text-orange-600" />,
                title: "Swimming Pool",
                desc: "Take a refreshing dip in our crystal-clear swimming pool.",
              },
              {
                icon: <Sun size={40} className="text-orange-600" />,
                title: "Yoga & Wellness",
                desc: "Morning yoga sessions to rejuvenate your mind and body.",
              },
              {
                icon: <Music size={40} className="text-orange-600" />,
                title: "Cultural Evenings",
                desc: "Experience live music and traditional dance performances.",
              },
              {
                icon: <Bike size={40} className="text-orange-600" />,
                title: "Outdoor Adventures",
                desc: "Enjoy guided cycling tours and nature walks nearby.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
