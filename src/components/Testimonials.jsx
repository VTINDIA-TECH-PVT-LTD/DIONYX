// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Carter',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'Absolutely amazing stay! The staff were friendly and the rooms were spotless. I would definitely recommend this hotel to my friends.',
    rating: 5,
  },
  {
    name: 'Michael Singh',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    review:
      'Fantastic location and the food was excellent. It felt like home away from home. Will be coming back soon!',
    rating: 4,
  },
  {
    name: 'Sophia Lee',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    review:
      'The spa and wellness area were top-notch. A very relaxing experience. Perfect for a weekend getaway.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Guests Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center 
                       hover:bg-orange-600 hover:text-stone-50 transition-colors duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-transparent hover:border-stone-50 transition-colors duration-300"
            />
            <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
            <p className="mb-4 text-sm">{testimonial.review}</p>
            <div className="flex justify-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-500 fill-yellow-400 group-hover:text-yellow-300 group-hover:fill-yellow-300"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
