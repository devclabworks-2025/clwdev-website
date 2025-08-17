import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-clw-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Ready to bring your vision to life? Get in touch and let's create something amazing together.
          </motion.p>
          
          {/* Contact Form */}
          <motion.form 
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.input 
                type="text" 
                placeholder="Your Name" 
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-clw-accent transition-colors duration-300"
              />
              <motion.input 
                type="email" 
                placeholder="Your Email" 
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-clw-accent transition-colors duration-300"
              />
            </div>
            <motion.textarea 
              placeholder="Your Message" 
              rows="4" 
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-clw-accent transition-colors duration-300 mb-6"
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-clw-accent hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 