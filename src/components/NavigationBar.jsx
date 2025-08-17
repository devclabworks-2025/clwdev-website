import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { 
      y: -100, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { 
      y: -20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            variants={navItemVariants}
            className="flex-shrink-0"
          >
            <a 
              href="#" 
              className="text-2xl font-bold text-black hover:text-gray-600 transition-colors duration-300"
              onClick={() => scrollToSection('home')}
            >
              CLW
            </a>
          </motion.div>
          
          {/* Desktop Navigation Links */}
          <motion.div 
            variants={navItemVariants}
            className="hidden md:block"
          >
            <div className="ml-10 flex items-baseline space-x-8">
              <motion.a 
                href="#home"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                onClick={() => scrollToSection('home')}
              >
                Home
              </motion.a>
              <motion.a 
                href="#archive"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                onClick={() => scrollToSection('archive')}
              >
                Archive
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.div 
            variants={navItemVariants}
            className="md:hidden"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-black hover:text-gray-600 p-2 rounded-md transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <motion.a
                  href="#home"
                  whileHover={{ x: 10 }}
                  className="block px-3 py-2 text-black hover:text-gray-600 transition-colors duration-300"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#archive"
                  whileHover={{ x: 10 }}
                  className="block px-3 py-2 text-black hover:text-gray-600 transition-colors duration-300"
                  onClick={() => scrollToSection('archive')}
                >
                  Archive
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 0 }}
                  className="block px-3 py-2 text-black hover:text-gray-600 transition-colors duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavigationBar; 