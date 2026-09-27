import React from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

/**
 * Smooth pop animation from down to up with fade and pop from bottom.
 * Uses silky cubic-bezier deceleration curve [0.16, 1, 0.3, 1] with subtle scale pop.
 */
export const smoothPopUp: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const fadeInUp: Variants = smoothPopUp;

export const popCard: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.94
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.54,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const scaleUpCard: Variants = popCard;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.04): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

/**
 * Ultra-smooth step window pop animation with refined deceleration
 */
export const smoothStepPop: Variants = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.64,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

/**
 * Slide & pop from left with upward motion
 */
export const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
    y: 28,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

/**
 * Slide & pop from right with upward motion
 */
export const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
    y: 28,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className = '',
  delay = 0,
  ...props
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 38, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px', amount: 0.15 }}
      transition={{ duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export const SmoothPopBox: React.FC<HTMLMotionProps<'div'> & { delay?: number }> = ({
  children,
  className = '',
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px', amount: 0.15 }}
      transition={{ duration: 0.58, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
