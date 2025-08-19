// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-12 px-6 md:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img
            src="https://dionyx.in/images/newlogo1.png"
            alt="Hotel Logo"
            className="w-36 mb-4"
          />
          <p className="text-gray-400 text-sm">
            Hotel Dionyx, Bhubaneswar – experience unmatched luxury and warm
            hospitality in the heart of Odisha.
          </p>
          <div className="flex space-x-4 mt-4">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/share/16zJHzBVrC/" },
              { Icon: Instagram, href: "https://www.instagram.com/hoteldionyx?igsh=cHRudXR2NzlqcnF0" },
              { Icon: Twitter, href: "https://twitter.com/yourpage" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#f97316' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon className="text-white hover:text-orange-500" size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {['Home', 'Accommodation', 'About Us', 'Facilities', 'Gallery', 'Contact Us'].map(
              (item, idx) => (
                <li key={idx} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1" />
              123 Dionyx Road, Bhubaneswar, Odisha
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              contact@dionyx.in
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get our latest updates and offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-3 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hotel Dionyx. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
