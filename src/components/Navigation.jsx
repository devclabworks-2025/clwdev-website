import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Menu items with comma + 2 spaces as specified
  const menuItems = [
    { id: 'home', text: 'Home' },
    { id: 'known', text: 'Known' },
    { id: 'archive', text: 'Archive' },
    { id: 'contact', text: 'Contact' }
  ];

  // Handle scroll for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for staggered text reveal
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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Letter animation variants for wavy flip effect from right to left
  const letterVariants = {
    initial: { rotateX: 0, y: 0 },
    hover: (i) => ({
      rotateX: [0, -15, 15, 0],
      y: [0, -3, 3, 0],
      transition: {
        duration: 0.8,
        delay: (menuItems.length - 1 - i) * 0.05, // Right to left stagger
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Bottom border - #555555 grey as specified */}
      <div className="border-b border-[#555555] h-px" />
      
      <div className="flex justify-between items-center h-20 px-16">
        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center"
        >
          <img
            src="/Asset/Main Logo 2.png"
            alt="CLW Logo"
            className="h-10 w-auto object-contain cursor-pointer"
            style={{ minWidth: '40px' }}
            onLoad={() => console.log('Logo loaded successfully')}
            onError={(e) => {
              console.error('Logo failed to load:', e.target.src);
              // Fallback to PNG if SVG fails
              e.target.src = '/logo.png';
            }}
          />
          {/* Debug: Show logo path */}
          <div className="ml-2 text-xs text-gray-400 hidden">
            Logo: /logo.svg
          </div>
        </motion.div>


        {/* Right: Menu Items */}
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-8"
        >
          {menuItems.map((item, itemIndex) => (
            <div key={item.id} className="relative">
              {/* Menu item with comma + 2 spaces */}
              <motion.div
                className="flex items-center cursor-pointer"
                onMouseEnter={() => setHoveredIndex(itemIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  opacity: hoveredIndex === null || hoveredIndex === itemIndex ? 1 : 0.5
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Text letters with right-to-left wavy animation */}
                {item.text.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    custom={letterIndex}
                    variants={letterVariants}
                    initial="initial"
                    whileHover="hover"
                    className={`text-[#A0A0A0] hover:text-white transition-colors duration-300 ${
                      hoveredIndex === itemIndex ? 'text-white' : ''
                    }`}
                    style={{
                      display: 'inline-block',
                      transformOrigin: 'center'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                
                {/* Comma + 2 spaces (except for last item) */}
                {itemIndex < menuItems.length - 1 && (
                  <span className="text-[#A0A0A0] ml-2">,</span>
                )}
                {itemIndex < menuItems.length - 1 && (
                  <span className="text-[#A0A0A0] ml-2">&nbsp;</span>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

/*
CUSTOMIZATION GUIDE:

1. Animation Speed:
   - staggerChildren: Delay between menu items (default: 0.1s)
   - delayChildren: Initial delay before animation starts (default: 0.2s)
   - Letter animation duration: Change 0.8s in letterVariants.hover

2. Hover Effects:
   - Letter rotation: Modify rotateX values in letterVariants.hover
   - Right-to-left stagger: Change (menuItems.length - 1 - i) * 0.05 timing
   - Opacity dimming: Adjust 0.5 value for non-hovered items
   - Wavy effect: Modify y values [0, -3, 3, 0] for different wave intensity

3. Colors:
   - Default text: Change text-[#A0A0A0] to any color
   - Hover text: Change text-white to any color
   - Border: Change border-[#555555] to any color

4. Spacing:
   - Logo padding: Change px-16 to adjust left/right padding
   - Menu spacing: Change space-x-8 to adjust between menu items
   - Comma spacing: Modify ml-2 values for comma positioning

5. Typography:
   - Logo size: Change text-2xl to adjust logo font size
   - Menu font: Add font classes like font-medium, font-light, etc.

6. Animation Direction:
   - Right-to-left: The (menuItems.length - 1 - i) calculation creates right-to-left stagger
   - Wavy effect: Y-axis movement creates the wave animation
   - Flip effect: rotateX creates the 3D flip animation
*/
