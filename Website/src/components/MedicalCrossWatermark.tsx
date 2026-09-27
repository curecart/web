import React from 'react';

interface CureCartCrossProps {
  className?: string;
  opacity?: number;
  variant?: 'gradient' | 'outline' | 'soft-cyan';
}

export const MedicalCrossWatermark: React.FC<CureCartCrossProps> = ({
  className = '',
  opacity = 0.12,
  variant = 'gradient'
}) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cureCrossLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00A8CC" stopOpacity="0.55" />
          </linearGradient>

          <linearGradient id="cureCrossSoftGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer Glow Halo for ambient light */}
        <path
          d="M 36 6 C 36 2.68, 38.68 0, 42 0 L 58 0 C 61.32 0, 64 2.68, 64 6 L 64 36 L 94 36 C 97.32 36, 100 38.68, 100 42 L 100 58 C 100 61.32, 97.32 64, 94 64 L 64 64 L 64 94 C 64 97.32, 61.32 100, 58 100 L 42 100 C 38.68 100, 36 97.32, 36 94 L 36 64 L 6 64 C 2.68 64, 0 61.32, 0 58 L 0 42 C 0 38.68, 2.68 36, 6 36 L 36 36 Z"
          fill={variant === 'soft-cyan' ? '#00A8CC' : 'url(#cureCrossLightGrad)'}
        />

        {/* Inner concentric cross in soft light sky white */}
        <path
          d="M 40 14 C 40 11.8, 41.8 10, 44 10 L 56 10 C 58.2 10, 60 11.8, 60 14 L 60 40 L 86 40 C 88.2 40, 90 41.8, 90 44 L 90 56 C 90 58.2, 88.2 60, 86 60 L 60 60 L 60 86 C 60 88.2, 58.2 90, 56 90 L 44 90 C 41.8 90, 40 88.2, 40 86 L 40 60 L 14 60 C 11.8 60, 10 58.2, 10 56 L 10 44 C 10 41.8, 11.8 40, 14 40 L 40 40 Z"
          fill="url(#cureCrossSoftGlow)"
        />

        {/* Center Cure Cart Core Circle Accent */}
        <circle cx="50" cy="50" r="5.5" fill="#FFFFFF" fillOpacity="0.8" />
      </svg>
    </div>
  );
};
