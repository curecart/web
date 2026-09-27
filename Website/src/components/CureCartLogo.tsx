import React from 'react';

interface CureCartLogoProps {
  className?: string;
  imageClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2x' | 'top-xl' | 'touch-edges';
  showTagline?: boolean;
  theme?: 'dark' | 'light';
}

export const CureCartLogo: React.FC<CureCartLogoProps> = ({
  className = '',
  imageClassName = '',
  size = 'top-xl'
}) => {
  // Sizing presets
  const sizeClasses = {
    sm: 'h-13 w-auto max-w-[170px]',
    md: 'h-16 sm:h-18 md:h-20 w-auto max-w-[260px]',
    lg: 'h-18 sm:h-20 md:h-22 w-auto max-w-[310px]',
    xl: 'h-24 sm:h-28 md:h-32 w-auto max-w-[420px]',
    '2x': 'h-26 sm:h-32 md:h-36 lg:h-42 w-auto max-w-[270px] sm:max-w-[400px] md:max-w-[540px] lg:max-w-[640px]',
    // 50-60% bigger for top bar without changing top strip dimensions
    'top-xl': 'h-36 sm:h-46 md:h-52 lg:h-60 w-auto max-w-[320px] sm:max-w-[480px] md:max-w-[660px] lg:max-w-[820px]',
    // Logo that almost touches left to right of the page
    'touch-edges': 'w-full max-w-5xl md:max-w-6xl lg:max-w-7xl h-auto max-h-[160px] sm:max-h-[220px] md:max-h-[280px] lg:max-h-[340px]'
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src="/curecart-logo.png"
        alt="Cure Cart - Meds To Your Door Under 24 Hours"
        className={`${sizeClasses[size]} ${imageClassName} object-contain drop-shadow-sm transition-transform duration-200`}
        loading="eager"
      />
    </div>
  );
};
