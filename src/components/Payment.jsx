// src/pages/Payment.jsx
import React from "react";
import { motion } from "framer-motion";


const Payment = () => {
  return (
    <div className="bg-gray-100 min-h-80 flex flex-col items-center justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-orange-600 mb-6"
      >
        Secure Payment
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <form>
          <label className="block mb-4">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
              placeholder="John Doe"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Card Number</span>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
              placeholder="**** **** **** ****"
            />
          </label>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <label>
              <span className="text-gray-700">Expiry Date</span>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                placeholder="MM/YY"
              />
            </label>
            <label>
              <span className="text-gray-700">CVV</span>
              <input
                type="password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                placeholder="***"
              />
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
          >
            Pay Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Payment;
