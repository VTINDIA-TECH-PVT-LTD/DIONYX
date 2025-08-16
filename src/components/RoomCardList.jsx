// src/components/RoomCardList.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Payment from "./Payment"; // Import the Payment component


const rooms = [
  {
    title: "Deluxe King Room",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTco9IYH6iaB9WSq_KJVu7yE9Tb2eKsM7944CL5yj2PcXPlS_0kiUVxuJ1dDOavW4ThjLY&usqp=CAU",
    price: "$129/night",
    description:
      "Spacious room with a king-sized bed, private balcony, and city view.",
  },
  {
    title: "Executive Suite",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
    price: "$199/night",
    description:
      "Premium suite with separate living area, minibar, and 24/7 room service.",
  },
  {
    title: "Standard Twin Room",
    image:
      "https://media.istockphoto.com/id/1222623844/photo/master-bedroom-in-new-luxury-home-with-chandelier-and-large-bank-of-windows-with-view-of-trees.jpg?s=612x612",
    price: "$89/night",
    description:
      "Comfortable room with two single beds, ideal for friends or colleagues.",
  },
];

const RoomCardList = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setShowPayment(true);
  };

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 relative">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Available Rooms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={room.image}
              // alt={room.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {room.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-1">{room.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-orange-600">
                  {room.price}
                </span>
                <button
                  onClick={() => handleBookNow(room)}
                  className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPayment && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPayment(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                ✖
              </button>

              {/* Payment Component with room details */}
              <Payment room={selectedRoom} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoomCardList;
