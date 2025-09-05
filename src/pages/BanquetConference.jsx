// src/components/BanquetConference.jsx
import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Utensils, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const BanquetConference = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative h-[30vh] md:h-[35vh] lg:h-[35vh]  w-full overflow-hidden">
        <img
          src="/assets/Banner.jpg" // your banner
          alt="Banquet & Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Banquet & Conference
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-orange-700 mb-6"
          >
            Perfect Venue for Every Occasion
          </motion.h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Banquet hall for big gathering under renovation but we are doing outdoor caterings for big and small events and corporate affairs.A well equipped boardroom for business meet, review meet and other get-together for 20 persons.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={40} className="text-orange-600" />,
                title: "Spacious Halls",
                desc: "Accommodates up to 500 guests comfortably with flexible seating.",
              },
              {
                icon: <Calendar size={40} className="text-orange-600" />,
                title: "Event Planning",
                desc: "Dedicated team to help plan and execute your special day flawlessly.",
              },
              {
                icon: <Utensils size={40} className="text-orange-600" />,
                title: "Catering Services",
                desc: "Delicious multi-cuisine menus tailored for your event.",
              },
              {
                icon: <Mic size={40} className="text-orange-600" />,
                title: "Audio-Visual",
                desc: "Modern sound and projection systems for impactful presentations.",
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

export default BanquetConference;
