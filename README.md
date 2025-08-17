# CLW Landing Page - React + Framer Motion

A modern, animated landing page for CLW (Creative Landing Works) built with React, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Page Opening Transition** with fullscreen black overlay animation
- **Enhanced Navigation Bar** with Framer Motion animations
- **Sticky Navigation** that changes appearance on scroll
- **Rolling Text Animation** in hero section
- **Smooth Animations** throughout the page
- **Responsive Design** for all devices
- **Modern UI/UX** with Tailwind CSS
- **Performance Optimized** with Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Page Transition Features

### ✅ Page Opening Animation:

1. **Fullscreen Black Overlay** - Covers entire viewport on page load
2. **Brand Reveal** - COUNE LABWORKS logo appears with smooth animations
3. **Slide Up Transition** - Overlay slides upward and disappears in 1.2 seconds
4. **Content Fade In** - Landing page content fades in smoothly after transition
5. **Modular Component** - `PageTransition.jsx` for easy customization

### 🎭 Animation Sequence:

- **0.0s**: Black overlay appears
- **0.2s**: Logo starts fading in
- **0.6s**: Logo fully visible
- **1.2s**: Overlay slides up and disappears
- **1.6s**: Main content fully visible

## 🎨 Navigation Bar Features

### ✅ Enhanced Features Implemented:

1. **Sticky Navigation** - Navbar stays at top when scrolling
2. **Fade-in Animation** - Navbar animates in from top on page load
3. **Framer Motion Integration** - Smooth, professional animations
4. **Tailwind CSS Styling** - Consistent design system
5. **Scroll-based Effects** - Background opacity changes on scroll
6. **Mobile Responsive** - Collapsible mobile menu with animations
7. **Interactive Elements** - Hover effects and smooth transitions

### 🎭 Animation Details:

- **Page Load**: Navbar slides down from top with fade-in effect
- **Scroll Effect**: Background becomes more opaque and adds shadow
- **Hover Effects**: Navigation links scale and change color smoothly
- **Mobile Menu**: Smooth height animation with fade effects
- **Icon Transitions**: Menu/close icons rotate smoothly

## 🏗️ Project Structure

```
react.dev/
├── src/
│   ├── components/
│   │   ├── PageTransition.jsx    # Page opening animation
│   │   ├── NavigationBar.jsx     # Enhanced navigation with animations
│   │   ├── HeroSection.jsx       # Hero section with rolling text
│   │   ├── RollingText.jsx       # Rolling text animation component
│   │   ├── ArchiveSection.jsx    # Portfolio section
│   │   ├── ContactSection.jsx    # Contact form
│   │   └── Footer.jsx            # Footer with animations
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind CSS + custom styles
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── postcss.config.js            # PostCSS configuration
```

## 🎯 Customization

### Page Transition
Edit `PageTransition.jsx` to modify:
- Animation duration and timing
- Logo/branding appearance
- Transition effects and easing
- Overlay color and style

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  'clw-primary': '#1a1a1a',    // Main background
  'clw-secondary': '#f5f5f5',  // Secondary background
  'clw-accent': '#3b82f6'      // Accent color
}
```

### Animations
Modify animation variants in component files to adjust timing and effects.

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Framer Motion** - Professional animations
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing

## 📝 License

This project is for CLW (Creative Landing Works) use.

## 🤝 Contributing

For internal CLW team use only. 