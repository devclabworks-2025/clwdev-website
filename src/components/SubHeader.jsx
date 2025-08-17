import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SubHeader = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const { scrollY } = useScroll();
  
  // Transform scroll position to trigger glitch effect
  const glitchIntensity = useTransform(scrollY, [0, 100], [0, 1]);
  
  // Handle scroll state for glitch effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set new timeout to detect when scrolling stops
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // 150ms delay to detect scroll stop
      
      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  // Subheader data
  const subheaderItems = [
    {
      id: 'location',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      primaryText: "BASED IN BANDUNG",
      secondaryText: "•INDONESIA",
      iconColor: "text-green-400"
    },
    {
      id: 'worldwide',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          {/* Center star/diamond */}
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 12l-2-2m0 0l2-2m-2 2l2 2m-2-2l-2 2"
          />
        </svg>
      ),
      primaryText: "ACCESIBLE",
      secondaryText: "WORLDWIDE",
      iconColor: "text-white"
    },
    {
      id: 'verified',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Shield/badge shape */}
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
          {/* Checkmark inside */}
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 12l2 2 4-4"
          />
        </svg>
      ),
      primaryText: "DESIGN AND CODE",
      secondaryText: "GENERATIVE VISUAL",
      iconColor: "text-blue-400"
    }
  ];

  // Glitch animation variants
  const glitchVariants = {
    clean: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    glitch: (i) => ({
      x: [0, -2, 2, -1, 1, 0],
      opacity: [1, 0.8, 0.9, 0.7, 1],
      transition: {
        duration: 0.1,
        delay: i * 0.02,
        ease: "easeInOut"
      }
    })
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #1A2B3C 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #E0E0E0 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {subheaderItems.map((item, itemIndex) => (
            <motion.div
              key={item.id}
              className="text-center"
              variants={itemVariants}
            >
              {/* Icon with glitch effect */}
              <motion.div
                className={`flex justify-center mb-6 ${item.iconColor}`}
                whileHover={{ 
                  scale: 1.1,
                  filter: "drop-shadow(0 0 8px currentColor)"
                }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>

              {/* Primary Text with glitch effect */}
              <motion.h3
                className="text-white font-bold text-lg md:text-xl mb-2 tracking-wider"
                variants={glitchVariants}
                animate={isScrolling ? "glitch" : "clean"}
                custom={itemIndex}
              >
                {item.primaryText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={glitchVariants}
                    animate={isScrolling ? "glitch" : "clean"}
                    custom={index}
                    style={{
                      display: 'inline-block',
                      transformOrigin: 'center'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h3>

              {/* Secondary Text with glitch effect */}
              <motion.p
                className="text-[#A1A1AA] text-sm md:text-base tracking-wide"
                variants={glitchVariants}
                animate={isScrolling ? "glitch" : "clean"}
                custom={itemIndex + 10}
              >
                {item.secondaryText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={glitchVariants}
                    animate={isScrolling ? "glitch" : "clean"}
                    custom={index + 20}
                    style={{
                      display: 'inline-block',
                      transformOrigin: 'center'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubHeader;

/*
CUSTOMIZATION GUIDE:

1. Glitch Effect Intensity:
   - X-axis displacement: Change -2, 2, -1, 1 values in glitchVariants.glitch.x
   - Opacity flicker: Modify [1, 0.8, 0.9, 0.7, 1] for different flicker intensity
   - Animation duration: Change 0.1s in glitchVariants.glitch.transition.duration
   - Stagger delay: Adjust i * 0.02 for faster/slower per-character glitch

2. Scroll Sensitivity:
   - Scroll threshold: Modify [0, 100] in useTransform for different trigger points
   - Scroll stop delay: Change 150ms timeout for faster/slower glitch recovery
   - Glitch trigger: Adjust scrollY range for more/less sensitive activation

3. Icon Colors & Effects:
   - Location pin: Change text-green-400 to any Tailwind green variant
   - Globe: Change text-white to any color
   - Verified badge: Change text-blue-400 to any Tailwind blue variant
   - Hover scale: Modify scale: 1.1 for different hover magnification
   - Glow effect: Adjust drop-shadow values for icon aura intensity

4. Typography:
   - Primary text: Change text-lg md:text-xl for different sizes
   - Secondary text: Change text-sm md:text-base for different sizes
   - Font weights: Modify font-bold for primary, add font classes for secondary
   - Letter spacing: Adjust tracking-wider and tracking-wide values

5. Layout & Spacing:
   - Column gap: Change gap-12 md:gap-8 for different spacing
   - Icon margin: Modify mb-6 for icon-to-text spacing
   - Text margin: Adjust mb-2 for primary-to-secondary text spacing
   - Section padding: Change py-20 for overall section height

6. Background Pattern:
   - Dot colors: Modify #1A2B3C and #E0E0E0 for different dot colors
   - Pattern size: Change 20px 20px for different dot density
   - Pattern offset: Adjust 10px 10px for different pattern positioning
   - Opacity: Change opacity-20 for background visibility

7. Responsive Behavior:
   - Mobile stacking: grid-cols-1 ensures single column on mobile
   - Tablet breakpoint: md:grid-cols-3 creates 3 columns on medium+ screens
   - Text scaling: Adjust text sizes with responsive prefixes (sm:, md:, lg:)
   - Icon sizing: Modify w-12 h-12 for different icon dimensions

8. Animation Timing:
   - Container reveal: Change 0.8s duration for faster/slower entrance
   - Item stagger: Modify 0.2s delay between columns
   - Hover effects: Adjust 0.3s for icon hover responsiveness
   - Glitch recovery: Modify 0.3s for text snap-back speed
*/
