import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 200);

    // Hide the overlay after 1.2 seconds
    const overlayTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(overlayTimer);
    };
  }, []);

  const overlayVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
            variants={overlayVariants}
            initial="visible"
            exit="exit"
          >
            {/* Logo/Branding */}
            <AnimatePresence mode="wait">
              {showLogo && (
                <motion.div
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center"
                >
                  <motion.div
                    className="text-white text-6xl md:text-8xl font-black mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    COUNE
                  </motion.div>
                  <motion.div
                    className="text-white text-2xl md:text-3xl font-light tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    LABWORKS
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isVisible ? "hidden" : "visible"}
        className={isVisible ? 'pointer-events-none' : ''}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
