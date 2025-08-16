// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 min-h-screen">
      {/* Hero Banner */}
      <section className="text-center py-16 bg-orange-100">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-800"
        >
          Contact Hotel Dionyx
        </motion.h1>
        <p className="text-gray-600 mt-4 text-lg">
          We’re here to help you 24/7. Reach out to us anytime!
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-700">Send us a Message</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition font-semibold">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-700">Get in Touch</h2>
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-orange-600 text-xl" />
              <p>Saheed Nagar,Bhubaneswar</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-orange-600 text-xl" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-orange-600 text-xl" />
              <p>info@hoteldionyx.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-600 text-xl" />
              <p>+91 98765 43210</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6862174010246!2d72.82887401421466!3d18.944200387155486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1fdfa72891%3A0x808c86fbb25a8139!2sTaj%20Mahal%20Palace!5e0!3m2!1sen!2sin!4v1674827960472!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </motion.div>
      </section>
        <Footer />
    </div>
  );
};

export default Contact;
