// src/components/MenuBar.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Accommodation", path: "/accommodation" },
  { label: "About Us", path: "/about" },
  { label: "Restaurant", path: "/restaurant" },
  {
    label: "Facilities",
    hasMegaMenu: true,
    children: [
      { label: "Sky Kitchen", path: "/facilities/sky-kitchen" },
      { label: "Banquet & Conference", path: "/facilities/banquet-conference" },
      { label: "Activities", path: "/facilities/activities" },
    ],
  },
  { label: "Gallery", path: "/video" },
  { label: "Contact Us", path: "/contact" },
];

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [openMega, setOpenMega] = useState(null); // which mega menu is open
  const closeTimerRef = useRef(null);

  // clear timers on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Desktop hover handlers
  const handleDesktopEnter = (index) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMega(index);
  };

  const handleDesktopLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenMega(null);
      closeTimerRef.current = null;
    }, 180);
  };

  return (
    <nav className="bg-white/80 shadow-lg px-6 py-4 flex justify-between items-center sticky top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="/assets/Logo.png"
          alt="Logo"
          className="h-15"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 items-center">
        {menuItems.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative cursor-pointer text-stone-950 font-medium flex items-center group"
            onMouseEnter={() =>
              item.hasMegaMenu ? handleDesktopEnter(i) : null
            }
            onMouseLeave={() =>
              item.hasMegaMenu ? handleDesktopLeave() : null
            }
            aria-haspopup={item.hasMegaMenu ? "true" : undefined}
            aria-expanded={item.hasMegaMenu ? openMega === i : undefined}
          >
            {item.path ? (
              <Link to={item.path} className="flex items-center">
                {item.label}
              </Link>
            ) : (
              <span className="flex items-center">{item.label}</span>
            )}

            {item.hasMegaMenu && (
              <ChevronDown
                size={18}
                className="ml-1 text-gray-500 transition-transform group-hover:rotate-180"
              />
            )}

            {/* Desktop Dropdown */}
            <AnimatePresence>
              {item.hasMegaMenu && item.children && openMega === i && (
                <motion.div
                  key={`mega-${i}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 z-50"
                  onMouseEnter={() => handleDesktopEnter(i)}
                  onMouseLeave={() => handleDesktopLeave()}
                >
                  <div className="bg-white shadow-md rounded-md w-56 overflow-hidden ring-1 ring-black/5">
                    <ul>
                      {item.children.map((child, j) => (
                        <li key={j}>
                          <Link
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Toggle (only hamburger now) */}
      <div className="md:hidden">
        <Menu
          size={28}
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 70 }}
            className="fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-lg shadow-xl p-6 flex flex-col space-y-4 z-50 overflow-y-auto"
          >
            {/* Close Icon inside menu */}
            <div className="flex justify-end mb-4">
              <X
                size={28}
                className="cursor-pointer text-gray-800 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {menuItems.map((item, i) => (
              <div key={i} className="w-full">
                {item.hasMegaMenu && item.children ? (
                  <>
                    <div
                      className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800 hover:text-orange-500"
                      onClick={() =>
                        setOpenMega(openMega === i ? null : i)
                      }
                      aria-expanded={openMega === i}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={18}
                        className={`ml-1 text-gray-500 transition-transform ${
                          openMega === i ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Mobile dropdown */}
                    <AnimatePresence>
                      {openMega === i && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-2 space-y-2"
                        >
                          {item.children.map((child, j) => (
                            <li key={j}>
                              <Link
                                to={child.path}
                                className="block text-gray-700 hover:text-orange-500 py-1"
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenMega(null);
                                }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="text-lg font-medium text-gray-800 hover:text-orange-500 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MenuBar;
