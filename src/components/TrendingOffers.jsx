
import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Luxury Weekend Getaway",
    description:
      "Escape the city and enjoy a luxury weekend stay with complimentary spa access.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Romantic Candlelight Dinner",
    description:
      "Experience a 5-course gourmet dinner under the stars with live music.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Adventure & Explore Package",
    description:
      "Guided tours, water sports, and hiking adventures all in one exciting package.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const TrendingOffers = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-orange-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        🌟 Trending Now at Our Hotel
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                       transition-transform transform hover:-translate-y-2 cursor-pointer"
          >
            <motion.img
              src={offer.image}
              alt={offer.title}
              className="w-full h-56 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {offer.title}
              </h3>
              <p className="text-gray-600 text-sm">{offer.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendingOffers;
