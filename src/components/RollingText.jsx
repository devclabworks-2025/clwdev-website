import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RollingText = () => {
  const phrases = [
    "Coune LabWorks",
    "BASED IN BANDUNG",
    "INDONESIA",
    "ACCESSIBLE WORLDWIDE",
    "DESIGN AND CODE",
    "GENERATIVE VISUAL"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="relative h-12 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute text-2xl md:text-3xl lg:text-4xl font-bold text-black whitespace-nowrap"
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RollingText;
