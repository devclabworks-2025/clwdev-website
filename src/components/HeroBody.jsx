import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroBody = () => {
  const [hoveredLine, setHoveredLine] = useState(null);

  // Heading lines data
  const headingLines = [
    "Pattern Dimensions",
    "And Moments That", 
    "Connect And Leave",
    "A Bold Experience"
  ];

  // Animation variants for section entrance
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 40
    },
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
    hidden: { 
      opacity: 0,
      y: 20
    },
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
      {/* Background pattern overlay - matching SubHeader */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #1A2B3C 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #E0E0E0 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side: Paragraph with Shimmering Text */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="text-white text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                Every project is a chance to blend design and development,
              </p>
              <p>
                shaping bold interactive ideas into sleek digital{' '}
                <span className="shimmer-text">realities</span> - built with
              </p>
              <p>
                <span className="shimmer-text">Intent</span>,{' '}
                <span className="shimmer-text">Speed and Visual</span> clarity that attracts lot of
              </p>
              <p>
                peoples.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Interactive Heading */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            {headingLines.map((line, index) => (
              <motion.h2
                key={index}
                className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight cursor-pointer"
                onMouseEnter={() => setHoveredLine(index)}
                onMouseLeave={() => setHoveredLine(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  opacity: hoveredLine === null || hoveredLine === index ? 1 : 0.5,
                  transition: 'opacity 0.3s ease'
                }}
              >
                {line}
              </motion.h2>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for shimmer effect */}
      <style jsx>{`
        .shimmer-text {
          position: relative;
          display: inline-block;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.8) 25%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8) 75%,
            transparent 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2.5s ease-in-out infinite;
          filter: blur(0.3px);
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Hover effect for shimmer text */
        .shimmer-text:hover {
          filter: blur(0.5px) brightness(1.2);
          animation-duration: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default HeroBody;

/*
CUSTOMIZATION GUIDE:

1. Shimmer Animation:
   - Duration: Change 2.5s in animation: shimmer 2.5s for faster/slower loop
   - Gradient colors: Modify rgba(255, 255, 255, 0.8) for different shimmer intensity
   - Background size: Change 200% for wider/narrower shimmer effect
   - Blur effect: Adjust blur(0.3px) for more/less blur
   - Hover speed: Modify 1.5s in hover animation-duration

2. Shimmer Text Selection:
   - Add shimmer: Wrap any word in <span className="shimmer-text">Word</span>
   - Remove shimmer: Remove shimmer-text class from span
   - Multiple words: Apply to individual words or phrases as needed
   - Example: <span className="shimmer-text">Design and Development</span>

3. Heading Hover Effects:
   - Opacity dimming: Change 0.5 in hoveredLine !== index ? 1 : 0.5
   - Transition speed: Modify 0.3s in style transition
   - Hover scale: Change scale: 1.02 for different hover magnification
   - Hover timing: Adjust duration: 0.3 in whileHover transition

4. Layout & Spacing:
   - Column gap: Change gap-12 for different spacing between left/right sides
   - Section padding: Modify py-20 for overall section height
   - Side padding: Change px-16 for left/right edge spacing
   - Text spacing: Adjust space-y-6 and space-y-4 for different text gaps

5. Typography:
   - Paragraph size: Change text-lg md:text-xl for different paragraph sizes
   - Heading sizes: Modify text-3xl md:text-4xl lg:text-5xl xl:text-6xl
   - Font weights: Change font-bold to other weights (font-light, font-medium, etc.)
   - Line height: Adjust leading-relaxed and leading-tight

6. Responsive Behavior:
   - Mobile stacking: grid-cols-1 ensures single column on small screens
   - Desktop layout: lg:grid-cols-2 creates 2 columns on large screens
   - Text scaling: Adjust responsive prefixes (sm:, md:, lg:, xl:) for breakpoints
   - Padding adjustments: Modify px-16 for different screen size padding

7. Background Pattern:
   - Dot colors: Modify #1A2B3C and #E0E0E0 for different dot colors
   - Pattern size: Change 20px 20px for different dot density
   - Pattern offset: Adjust 0 0, 10px 10px for different positioning
   - Opacity: Change opacity-20 for background visibility

8. Animation Timing:
   - Section entrance: Change 0.8s duration for faster/slower reveal
   - Item stagger: Modify 0.2s delay between left/right sides
   - Hover transitions: Adjust 0.3s for different hover responsiveness
   - Shimmer loop: Modify 2.5s for different shimmer cycle speed

9. Performance Optimization:
   - Reduce animations: Lower stagger delays for faster loading
   - Shimmer efficiency: Adjust background-size for smoother animation
   - Hover effects: Reduce scale values for less GPU intensive animations
   - Intersection observer: Modify amount: 0.3 for different trigger points
*/
