import React from 'react';
import { motion } from 'framer-motion';

interface CureCartCrossWatermarkProps {
  className?: string;
  size?: number | string;
  opacity?: number;
  animate?: boolean;
}

export const CureCartCrossWatermark: React.FC<CureCartCrossWatermarkProps> = ({
  className = '',
  size = 140,
  opacity = 0.12,
  animate = false
}) => {
  const content = (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full drop-shadow-xs"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cureCrossLightGradSvg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0284C7" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#00A8CC" stopOpacity="0.6" />
        </linearGradient>

        <linearGradient id="cureCrossInnerGlowSvg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      {/* Main Cure Cart Cross Body with Smooth Pill Radii */}
      <path
        d="M 36 6 C 36 2.68, 38.68 0, 42 0 L 58 0 C 61.32 0, 64 2.68, 64 6 L 64 36 L 94 36 C 97.32 36, 100 38.68, 100 42 L 100 58 C 100 61.32, 97.32 64, 94 64 L 64 64 L 64 94 C 64 97.32, 61.32 100, 58 100 L 42 100 C 38.68 100, 36 97.32, 36 94 L 36 64 L 6 64 C 2.68 64, 0 61.32, 0 58 L 0 42 C 0 38.68, 2.68 36, 6 36 L 36 36 Z"
        fill="url(#cureCrossLightGradSvg)"
      />

      {/* Inner Light Inlay Cross */}
      <path
        d="M 40 14 C 40 11.8, 41.8 10, 44 10 L 56 10 C 58.2 10, 60 11.8, 60 14 L 60 40 L 86 40 C 88.2 40, 90 41.8, 90 44 L 90 56 C 90 58.2, 88.2 60, 86 60 L 60 60 L 60 86 C 60 88.2, 58.2 90, 56 90 L 44 90 C 41.8 90, 40 88.2, 40 86 L 40 60 L 14 60 C 11.8 60, 10 58.2, 10 56 L 10 44 C 10 41.8, 11.8 40, 14 40 L 40 40 Z"
        fill="url(#cureCrossInnerGlowSvg)"
      />

      {/* Center Light Dot */}
      <circle cx="50" cy="50" r="5" fill="#FFFFFF" fillOpacity="0.8" />
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        className={`pointer-events-none select-none ${className}`}
        style={{ width: size, height: size, opacity }}
        animate={{
          y: [-8, 8, -8],
          rotate: [-3, 3, -3],
          scale: [1, 1.04, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, opacity }}
    >
      {content}
    </div>
  );
};
