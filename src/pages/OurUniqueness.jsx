// src/components/OurUniqueness.jsx
import React from "react";

const OurUniqueness = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-sm">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-4">OUR UNIQUENESS</h2>

      {/* List */}
      <ol className="list-decimal pl-6 space-y-3 text-gray-800">
        <li>
          Cosy hotel, situated in the heart of the city and just walking
          distance to all business hubs and corporate houses.
        </li>
        <li>Taking extra care of various services and facilities.</li>
        <li>The best ambience for group stay.</li>
        <li>Couple friendly.</li>
        <li>
          And the best part is our combo meals for in-house guests, because we
          are strictly against food wastage.
        </li>
      </ol>

      {/* Highlight Box */}
      <div className="mt-6 bg-orange-500 text-white font-semibold text-center p-3 rounded">
        The best part? All of these hospitalities are extended at budget hotel
        prices!!!!
      </div>
    </div>
  );
};

export default OurUniqueness;
