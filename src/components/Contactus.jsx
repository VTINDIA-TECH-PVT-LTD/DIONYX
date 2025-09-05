// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 min-h-screen">
      {/* ==========================
          DEMO HERO BANNER (replaces the old orange heading)
          Put your demo image at: public/assets/overview-banner.png
          ========================== */}
      <section className="relative w-full">
        <div className="relative h-[30vh] md:h-[35vh] lg:h-[35vh] w-full overflow-hidden">
          <img
            src="/assets/Banner.jpg"
            alt="Contact banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/60" />

          {/* centered title & breadcrumb */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Hotel Dionyx
            </motion.h1>

            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-3 text-sm sm:text-base text-white/90 flex items-center gap-2"
              aria-label="Breadcrumb"
            >
              <a href="/" className="text-orange-300 hover:underline">
                Home
              </a>
              <span className="text-white/60">→</span>
              <span>Contact Us</span>
            </motion.nav>
          </div>
        </div>
      </section>

      {/* ==========================
          Contact content (form + info)
          ========================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        {/* optional short intro below banner */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-gray-600 text-lg">
            We’re here to help you 24/7. Reach out to us anytime — for
            reservations, events, or general inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
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
                <p>Saheed Nagar, Bhubaneswar</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.088097834721!2d85.84269852797176!3d20.29299557839749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c6a9e8cc17%3A0x66aa46cf3ceab634!2sHOTEL%20DIONYX!5e0!3m2!1sen!2sin!4v1755584327258!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Contact;
