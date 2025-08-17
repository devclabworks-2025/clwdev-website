import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for the opening sequence
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger between "Coune" and "LabWorks"
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      rotateX: -90
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.05, // Stagger letters within each word
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <motion.div
        className="text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          className="text-white font-['Inter_Display'] leading-none"
          aria-label="Coune LabWorks"
          variants={wordVariants}
        >
          {/* "Coune" - Bold (as shown in screenshot) */}
          <motion.span 
            className="block font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12vw] 2xl:text-[15vw]"
            variants={wordVariants}
          >
            {Array.from("Coune").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                className="inline-block"
                style={{ 
                  display: 'inline-block',
                  transformOrigin: 'center bottom'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
          
          {/* "LabWorks" - Thin (as shown in screenshot) */}
          <motion.span 
            className="block font-thin text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12vw] 2xl:text-[15vw]"
            variants={wordVariants}
          >
            {Array.from("LabWorks").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                className="inline-block"
                style={{ 
                  display: 'inline-block',
                  transformOrigin: 'center bottom'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;

/*
CUSTOMIZATION GUIDE:

1. Animation Timing:
   - Total duration: Change 1.2s in containerVariants.visible.transition.duration
   - Word stagger: Modify staggerChildren: 0.2 (delay between "Coune" and "LabWorks")
   - Letter stagger: Change i * 0.05 in letterVariants.visible.transition.delay
   - Word animation: Adjust 0.8s in wordVariants.visible.transition.duration
   - Letter animation: Modify 0.6s in letterVariants.visible.transition.duration

2. Typography:
   - Font weights: "Coune" uses font-bold, "LabWorks" uses font-thin
   - Available weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
   - Responsive sizing: Current breakpoints match screenshot scale:
     * Mobile: text-6xl (60px)
     * Small: text-7xl (72px) 
     * Medium: text-8xl (96px)
     * Large: text-9xl (128px)
     * XL: text-[12vw] (12% of viewport width)
     * 2XL: text-[15vw] (15% of viewport width)

3. Animation Effects:
   - Scale range: Change scale: 0.5 to scale: 0.3 for more dramatic entrance
   - Y movement: Adjust y: 50 in wordVariants.hidden for different slide distance
   - Rotation: Modify rotateX: -90 in letterVariants.hidden for different 3D effect
   - Easing: Change ease: "easeOut" to "easeInOut", "easeIn", or custom cubic-bezier

4. Staggering:
   - Word timing: Increase staggerChildren for longer delay between words
   - Letter timing: Adjust i * 0.05 multiplier for faster/slower letter reveal
   - Example: i * 0.03 = faster, i * 0.08 = slower

5. Responsive Design:
   - Breakpoint adjustments: Modify sm:, md:, lg:, xl:, 2xl: prefixes
   - Viewport units: Change text-[12vw] to text-[10vw] or text-[15vw]
   - Font scaling: Adjust base sizes for different screen sizes
   - Ensure text appears large on desktop as shown in screenshot
*/
