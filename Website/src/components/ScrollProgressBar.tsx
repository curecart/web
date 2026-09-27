import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Page } from '../types';

interface ScrollProgressBarProps {
  currentPage: Page;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ currentPage }) => {
  const { scrollYProgress } = useScroll();

  // Create a silky smooth spring motion for Apple-like momentum and fluid physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none overflow-hidden bg-slate-100/60"
      role="progressbar"
      aria-label="Page reading progress"
    >
      {/* Dynamic progress bar with vibrant gradient & subtle leading glow */}
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 shadow-[0_0_8px_rgba(2,132,199,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};
