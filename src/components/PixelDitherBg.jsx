import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PixelDitherBg = ({ isVisible }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let dots = [];
    let time = 0;

    // Set canvas size to match viewport
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Recalculate dots for new size
      initializeDots();
    };

    // Initialize dots grid - match screenshot pattern exactly
    const initializeDots = () => {
      const rect = canvas.getBoundingClientRect();
      const spacing = 8; // 10px spacing between dots for screenshot-like density
      const cols = Math.ceil(rect.width / spacing);
      const rows = Math.ceil(rect.height / spacing);
      
      dots = [];
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            baseOpacity: 0 + Math.random() * 0.3, // Base opacity 0.2-0.5 for subtlety
            speed: 0.8 + Math.random() * 1.2, // Animation speed variation
            phase: Math.random() * Math.PI * 2, // Random starting phase
            size: 1.2 + Math.random() * 0.8, // Dot size variation 1.2-2.0px
            hue: Math.random() < 0.85 ? 0 : Math.random() * 40 - 20 // 85% white, 15% subtle grey/blue
          });
        }
      }
    };

    // Animation loop - subtle shimmer like stars
    const animate = () => {
      if (!isVisible) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach(dot => {
        // Calculate subtle shimmer effect using sine wave
        const shimmer = Math.sin(time * dot.speed + dot.phase) * 0.15 + 0.85;
        const opacity = dot.baseOpacity * shimmer;
        
        // Set color based on hue variation - match screenshot colors
        if (dot.hue === 0) {
          // White dots (85% of dots)
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        } else {
          // Subtle grey/blue dots (15% of dots) - very subtle
          const lightness = 180 + dot.hue; // Lighter grey for subtlety
          ctx.fillStyle = `rgba(${lightness}, ${lightness}, ${lightness + 15}, ${opacity})`;
        }
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      time += 0.015; // Slower animation for subtle shimmer
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    if (isVisible && !isInitialized) {
      resizeCanvas();
      setIsInitialized(true);
      animate();
    }

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isInitialized]);

  // Cleanup animation when component unmounts
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </motion.div>
  );
};

export default PixelDitherBg;

/*
CUSTOMIZATION GUIDE:

1. Animation Timing:
   - Fade-in duration: Change 0.6s in transition duration
   - Shimmer speed: Modify time += 0.015 in animate() function
   - Higher value = faster shimmer, Lower value = slower shimmer
   - Current: 0.015 for subtle, star-like twinkling

2. Dot Density:
   - Spacing: Change spacing = 10 to adjust distance between dots
   - 8px = denser grid, 12px = sparser grid
   - Screenshot shows ~10px spacing for optimal density
   - Size variation: Modify dot.size range (currently 1.2-2.0px)

3. Colors & Opacity:
   - Base opacity: Change 0.2 + Math.random() * 0.3 range
   - White dot percentage: Modify Math.random() < 0.85 (currently 85%)
   - Color variation: Adjust hue range for subtle grey/blue tints
   - Current: Very subtle variation to match screenshot

4. Shimmer Effect:
   - Intensity: Change * 0.15 + 0.85 in shimmer calculation
   - Lower multiplier = more subtle effect
   - Speed variation: Modify dot.speed range (currently 0.8-2.0)
   - Phase variation: Adjust dot.phase calculation for different patterns

5. Performance:
   - Reduce dots: Increase spacing for better performance on mobile
   - Animation frame rate: Lower time increment for smoother animation
   - Canvas scaling: Adjust devicePixelRatio handling if needed
   - Current settings optimized for smooth 60fps animation

6. Screenshot Matching:
   - Dot size: 1.2-2.0px matches the small, subtle dots shown
   - Spacing: 10px creates the grid-like pattern visible in screenshot
   - Opacity: 0.2-0.5 base opacity for subtle, non-intrusive background
   - Colors: 85% white, 15% very subtle grey/blue for authenticity
*/
