// src/components/PreNavbar.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const PreNavbar = () => {
  return (
    <div className="bg-orange-600 text-white text-sm py-4 px-6 flex justify-between items-center">
      {/* Left Side: Contact Info */}
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-xs" />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-xs" />
          <span>info@hoteldionyx.com</span>
        </div>
      </div>

      {/* Right Side: Maybe social icons later */}
      <div className="hidden md:flex gap-4">
        <a href="tel:+919876543210" className="hover:underline">
          Call Us
        </a>
        <a href="mailto:info@hoteldionyx.com" className="hover:underline">
          Email Us
        </a>
      </div>
    </div>
  );
};

export default PreNavbar;
