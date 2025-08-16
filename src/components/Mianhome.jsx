import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const foodBanners = [
  {
    title: 'Explore and Enjoy with Hotel Dionyx',
    image:
      'https://m.ahstatic.com/is/image/accorhotels/met_p_a106-39:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&dpr=on,1.5&qlt=80',
      
  },
  {
    title: 'Luxury Rooms and Suites',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww',
  },
  {
    title: 'Luxury Infrastructure',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=60',
  },
];

export default function Mianhome() {
  const SLIDE_COUNT = foodBanners.length;
  const AUTO_PLAY_MS = 3000;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, AUTO_PLAY_MS);
    return () => clearInterval(autoplayRef.current);
  }, [isPaused]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((prev) => (prev + 1) % SLIDE_COUNT);
      if (e.key === 'ArrowLeft') setIndex((prev) => (prev - 1 + SLIDE_COUNT) % SLIDE_COUNT);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goTo = (i) => setIndex(i % SLIDE_COUNT);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider */}
      <motion.div
        className="flex"
        style={{ width: `${SLIDE_COUNT * 100}vw`, height: 500 }}
        animate={{ x: `-${index * 100}vw` }}
        transition={{ type: 'spring', stiffness: 120, damping: 24 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        drag="x"
        onDragStart={() => setIsPaused(true)}
        onDragEnd={(event, info) => {
          const threshold = 80;
          if (info.offset.x < -threshold) setIndex((prev) => (prev + 1) % SLIDE_COUNT);
          else if (info.offset.x > threshold) setIndex((prev) => (prev - 1 + SLIDE_COUNT) % SLIDE_COUNT);
          setIsPaused(false);
        }}
      >
        {foodBanners.map((item, i) => (
          <div
            key={i}
            className="w-screen h-[500px] relative flex items-center justify-center flex-shrink-0 border-r-2 border-white/20"
          >
            {/* Image with zoom effect */}
            <motion.img
              key={item.image}
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Trending Tag */}
            {/* <div className="absolute top-6 left-6 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-lg">
              Trending
            </div> */}

            {/* Animated Title */}
            <AnimatePresence mode="wait">
              {index === i && (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-10 left-6 text-white text-2xl md:text-4xl font-extrabold max-w-[90%] leading-snug drop-shadow-lg"
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="absolute left-0 right-0 bottom-6 flex justify-center items-center gap-3">
        {foodBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full focus:outline-none transform transition-all duration-300 ${
              i === index ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
