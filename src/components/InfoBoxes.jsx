// src/components/InfoBoxes.jsx
import React from 'react';
import { motion } from 'framer-motion';

const boxes = [
  {
    title: 'Our Vision',
    image: 'https://olddionyx.vercel.app/images/23.jpeg',
    content:
      'We aim to deliver the best food experience with quality ingredients and passion.',
    button: 'Learn More',
  },
  {
    title: 'Our Services',
    image: 'https://olddionyx.vercel.app/images/26.jpg',
    content:
      'From dine-in to doorstep delivery, we serve you wherever you are.',
    button: 'Explore Services',
  },
];

const InfoBoxes = () => {
  return (
    <div className="py-12 px-6 md:px-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Render 2 animated boxes */}
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={box.image}
              alt={box.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  {box.title}
                </h3>
                <p className="text-gray-600 mb-4">{box.content}</p>
              </div>
              <button className="mt-auto bg-orange-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer">
                {box.button}
              </button>
            </div>
          </motion.div>
        ))}

        {/* Replace 3rd box with custom content */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-center text-center">
          <h3 className="text-2xl font-bold text-orange-600 mb-3">Experience True Comfort</h3>
          <p className="text-gray-700 mb-4">
            Our hotel offers more than just a place to stay. Enjoy luxurious amenities,
            scenic views, and top-class hospitality that make every moment memorable Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius modi fugiat dolores sint odio quos, explicabo quo officia voluptate ullam incidunt nobis porro excepturi eligendi officiis voluptas itaque. At..
          </p>
          <p className="text-gray-600">Book now and feel the difference!</p>
        </div>
        
      </div>
    </div>
  );
};

export default InfoBoxes;
