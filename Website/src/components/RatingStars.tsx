import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number; // e.g., 4.5 or 5
  className?: string;
  sizeClass?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  className = '',
  sizeClass = 'w-4 h-4'
}) => {
  return (
    <div className={`flex items-center gap-1 text-amber-500 ${className}`}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        if (rating >= starIndex) {
          // Full star
          return (
            <Star key={starIndex} className={`${sizeClass} fill-amber-400 text-amber-400`} />
          );
        } else if (rating >= starIndex - 0.5) {
          // Half star
          return (
            <div key={starIndex} className="relative inline-block">
              {/* Empty background star */}
              <Star className={`${sizeClass} text-amber-300`} />
              {/* Half filled star clipped */}
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className={`${sizeClass} fill-amber-400 text-amber-400`} />
              </div>
            </div>
          );
        } else {
          // Empty star
          return (
            <Star key={starIndex} className={`${sizeClass} text-slate-200`} />
          );
        }
      })}
      <span className="ml-1 text-xs font-bold text-slate-700 font-mono">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};
