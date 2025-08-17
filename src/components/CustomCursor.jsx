import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Mouse position values with spring physics
  const cursorX = useSpring(useMotionValue(0), { 
    stiffness: 150, 
    damping: 15 
  });
  const cursorY = useSpring(useMotionValue(0), { 
    stiffness: 150, 
    damping: 15 
  });

  useEffect(() => {
    // Detect touch devices
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);

    // Only show cursor on non-touch devices
    if (!isTouchDevice) {
      setIsVisible(true);
      
      const handleMouseMove = (e) => {
        cursorX.set(e.clientX - 12); // Center cursor (24px / 2)
        cursorY.set(e.clientY - 12);
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', checkTouchDevice);
      };
    }

    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  // Hide cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Custom Cursor Circle */}
      <div 
        className="w-6 h-6 rounded-full border-2 border-white"
        style={{
          mixBlendMode: 'difference', // Inverts colors when passing over elements
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;

/*
CUSTOMIZATION GUIDE:

1. Cursor Size:
   - Change w-6 h-6 to adjust size (e.g., w-8 h-8 for 32px)
   - Update cursorX.set(e.clientX - 16) accordingly (half of new size)

2. Animation Speed:
   - stiffness: Higher = faster movement (default: 150)
   - damping: Lower = more bounce, Higher = smoother (default: 15)
   - Example: stiffness: 200, damping: 10 for faster, bouncier movement

3. Border Thickness:
   - Change border-2 to border-3 or border for different thickness
   - Or use custom: border-[3px]

4. Colors:
   - Change border-white to any Tailwind color
   - Or use custom: border-[#FF0000] for specific hex values

5. Blend Mode:
   - Change mixBlendMode to: 'multiply', 'screen', 'overlay', etc.
   - 'difference' creates the inverted effect, 'exclusion' is similar but softer
*/
