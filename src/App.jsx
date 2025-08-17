import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SubHeader from './components/SubHeader';
import HeroBody from './components/HeroBody';
import PixelDitherBg from './components/PixelDitherBg';

function App() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showPixelBg, setShowPixelBg] = useState(false);

  useEffect(() => {
    // Opening animation sequence orchestration - strict timing as specified
    const timer1 = setTimeout(() => {
      // t=1.3s: Navigation slides in + Pixelated background fades in
      setShowNavigation(true);
      setShowPixelBg(true);
    }, 1300);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black font-['Inter_Display',sans-serif] overflow-x-hidden">
      {/* Layer 0: Pixelated Background (fixed, behind content, matches screenshot) */}
      <PixelDitherBg isVisible={showPixelBg} />
      
      {/* Layer 10: Hero Section (centered, scale 0.5→1, duration 1.2s) */}
      <Hero />
      
      {/* Layer 20: Sub Header (3 columns with glitchy icons and text) */}
      <SubHeader />
      
      {/* Layer 25: Hero Body (2 columns with shimmering text and interactive heading) */}
      <HeroBody />
      
      {/* Layer 40: Navigation (slides in from top at t=1.3s, no scaling) */}
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ 
          y: showNavigation ? 0 : -24, 
          opacity: showNavigation ? 1 : 0 
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.1 // Small delay after background starts fading in
        }}
      >
        <Navigation />
      </motion.div>
      
      {/* Layer 50: Custom Cursor (highest priority, blend-mode difference) */}
      <CustomCursor />
    </div>
  );
}

export default App;

/*
ANIMATION SEQUENCE TIMING (Strict):

1. t=0.0s: Hero text animation starts
   - Scale: 0.5 → 1.0
   - Opacity: 0 → 1
   - Word-by-word reveal with staggered letters
   - Duration: 1.2 seconds exactly

2. t=1.3s: Navigation + Background
   - Navigation slides in from top (y:-24 → 0, opacity 0→1)
   - Pixelated background fades in (opacity 0→1, duration 0.6s)
   - Background begins subtle shimmer animation

Z-INDEX LAYERING:
- Layer 0: Pixelated background (z-0) - fixed, behind all content
- Layer 10: Hero section (z-10) - main content area
- Layer 20: Sub Header (z-20) - 3-column layout with glitch effects
- Layer 25: Hero Body (z-25) - 2-column layout with shimmer effects
- Layer 40: Navigation (z-40) - slides in after hero animation
- Layer 50: Custom cursor (z-50) - highest priority, blend-mode difference

RESPONSIVE BEHAVIOR:
- Hero text scales responsively: text-6xl → text-[15vw] on large screens
- Sub Header: 3 columns on desktop, stacks vertically on mobile
- Hero Body: 2 columns on desktop, stacks vertically on mobile
- Navigation maintains 64px padding on left and right
- Background dots maintain consistent 10px spacing across all screen sizes
- Custom cursor respects touch devices with system cursor fallback

GLITCH EFFECTS:
- Scroll-triggered text distortion with per-character animation
- Icon hover effects with glow and scale animations
- Background pattern with subtle dot overlay
- Responsive grid layout with proper spacing

SHIMMER EFFECTS:
- Left side paragraph with shimmering key phrases
- Right side interactive heading with hover opacity changes
- Custom CSS animations with gradient backgrounds
- Smooth transitions and hover interactions
*/ 