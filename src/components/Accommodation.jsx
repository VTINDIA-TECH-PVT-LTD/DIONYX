// src/pages/Accommodation.jsx
import React from "react";
import { motion } from "framer-motion";

// ✅ import your components
// import Mianhome from "../components/Mianhome";
import Footer from "../components/Footer";
import OurUniqueness from "../pages/OurUniqueness";
import { Scroll } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";

const accommodations = [
  {
    name: "Deluxe Room",
    description:
      "Spanning 185 sq. ft., the Deluxe Rooms are delightful smart rooms that offer comfortable accommodations to guests.",
    image:
      "https://dionyx.in/images/deluxe.jpg",
    price: " Single 1499/-",
    price2: " Double 1999/- ",
    desc:"Free wifi ,Smart TV with OTT channels , Doctors on call , 24/7 room service , Hot and cold water , 24 hours power backup",
  },
  // {
  //   name: "Ocean View Suite",
  //   description:
  //     "Luxurious suite with a panoramic ocean view, private jacuzzi, and personal butler service.",
  //   image:
  //     "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  //   price: "$350 / night",
  // },
  {
    name: "Executive Rooms",
    description:
      "The Executive Rooms are comfortable rooms with an approximate area of 289 sq. ft. You can accommodate 3 adults at a time. They are well equipped with modern amenities and designed with bespoke interiors elements.",
    image:
      "https://dionyx.in/images/executive.jpg",
      price: " Single 2199/-",
      price2: " Double 2199/- ",
      desc:"Free wifi ,Smart TV with OTT channels , Doctors on call , 24/7 room service , Hot and cold water , 24 hours power backup,Mini bar,In room tea, coffee maker, Large luxury sofa"
  },
];

const Accommodation = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50">
      {/* ✅ Show homepage hero */}
      {/* <Mianhome /> */}

      <div className="py-16 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
        >
          Accommodation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Offering our guests lavish, comfort and amenities, Hotel Dionyx provides two pristine room categories, namely the Deluxe Rooms and the Executive Rooms , to ensure the perfect stay in Bhubaneswar at Saheed Nagar the heart of the city.


        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {accommodations.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                       transition-transform transform hover:-translate-y-2 cursor-pointer"
            >
              <motion.img
                src={room.image}
                alt={room.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                <span className="text-lg font-bold text-orange-600">
                  {room.price}
                  {room.price2 && (
                    <span className="ml-40">{room.price2}</span>
                  )}
                </span>
                {room.desc && (
                  <ul className="text-gray-500 mt-2 text-sm text-left list-none">
                    {room.desc.split(',').map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 mb-1">
                        <span role="img" aria-label="hand arrow">👉</span> {feature.trim()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
        <OurUniqueness  />
        </div>
      </div>

      {/* ✅ Footer at bottom */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Accommodation;
