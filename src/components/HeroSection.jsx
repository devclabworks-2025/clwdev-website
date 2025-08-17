import React from 'react';
import { motion } from 'framer-motion';
import RollingText from './RollingText';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-black mb-12 leading-none tracking-tight"
        >
          COUNE
          <span className="block text-gray-800">LABWORKS</span>
        </motion.h1>
        
        {/* Rolling Text Animation */}
        <motion.div 
          variants={itemVariants}
          className="mb-16"
        >
          <RollingText />
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="space-x-6"
        >
          <motion.a 
            href="#archive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => scrollToSection('archive')}
          >
            VIEW WORK
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            GET IN TOUCH
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 