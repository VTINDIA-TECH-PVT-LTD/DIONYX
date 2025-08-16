// src/components/TestimonialBanner.jsx
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialBanner = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-6 md:px-16 relative"
      style={{
        backgroundImage:
          'url("https://cf.bstatic.com/xdata/images/hotel/max1024x768/531094089.jpg?k=7ffb1e64ec22cf3201a23a4c1f4939fa62d8a758e3c7db9057bb8f18374de98d&o=&hp=1")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center text-white">
        {/* Left Section */}
        <div>
          <p className="uppercase text-sm font-semibold tracking-wide text-gray-300">
            What people says
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            HAPPY EXPLORE <span className="text-red-500">REVIEWS</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-md">
            Hotel Dionyx, Bhubaneswar is all about new age advantages and warm
            hospitality that are designed for your comfort.
          </p>
          <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition">
            VIEW MORE
          </button>
        </div>

        {/* Right Section - Testimonial Card */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 md:p-8 relative">
          <div className="flex gap-4 items-start">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user"
              className="w-16 h-16 rounded-full object-cover"
            />
            <p className="text-sm leading-relaxed">
              My stay in Hotel Dionyx was great with excellent room service and they
              follow all covid norms and guidelines
            </p>
          </div>

          <div className="mt-4">
            <p className="text-red-500 font-bold">SANGITA MANDAL</p>
            <p className="text-sm text-gray-600">Cuttack</p>
          </div>

          <Quote className="absolute bottom-4 right-4 text-red-500" size={36} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialBanner;
