import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="md:w-1/2"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          WELCOME TO{' '}
          <span className="text-orange-500">HOTEL DIONYX</span>
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          Odisha is an attractive treasure house of cultures and customs, religions and traditions, languages and literature, art and architecture, scenic beauties and wildlife. True to the nature of the state, "Hotel DIONYX, Bhubaneswar has been designed keeping in mind the requirement of all sections of travellers, and corporate clients. Providing Luxury Accommodation. Be it religious, leisure or business, we address all needs. The rooms have been designed very tastefully and the food menu offers multiple cuisine options. Facility for business meetings and social occasions has also been created in the form of a Board Room, Banquet Hall. The Hotel is on the Heart of City & has 20 well equipped rooms. Air-conditioned restaurants that serve immaculate cuisines in addition to takeaway also. Also providing the home delivery food service through ZOMATO and SWIGGY.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="md:w-1/2"
      >
        <img
          src="https://dionyx.in/images/new.jpeg" // Replace with your image URL or local import
          alt="Hotel Dionyx"
          className="rounded-lg shadow-lg object-cover w-full max-h-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
