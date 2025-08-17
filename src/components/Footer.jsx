import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
    <>
      {/* Main Footer Content */}
      <footer className="bg-black/50 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-4">CLW</h3>
              <p className="text-gray-400">
                Creative Landing Works - Where digital dreams become reality.
              </p>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <motion.a 
                    href="#home" 
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={() => scrollToSection('home')}
                  >
                    Home
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#archive" 
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={() => scrollToSection('archive')}
                  >
                    Archive
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#contact" 
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact
                  </motion.a>
                </li>
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>hello@clw.com</p>
                <p>+62 123 456 789</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border-t border-white/10 mt-8 pt-8 text-center"
          >
            <p className="text-gray-400">
              © 2024 CLW. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Simple Copyright Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 Coune LabWorks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 