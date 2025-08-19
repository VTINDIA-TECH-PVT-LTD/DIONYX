// src/components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // WhatsApp link with pre-filled message
  const phoneNumber = "919861340691"; // Replace with Hotel Dionyx's WhatsApp number
  const message = "Hii Welcome to Hotel Dionyx";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
