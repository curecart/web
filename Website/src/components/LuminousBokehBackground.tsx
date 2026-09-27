import React from 'react';
import { motion } from 'framer-motion';

export const LuminousBokehBackground: React.FC = () => {
  // Luminous bokeh orbs matching the light-blue sparkling atmosphere from Cure Cart logo artwork
  const bokehOrbs = [
    { id: 1, size: 380, x: '8%', y: '10%', color: 'rgba(56, 189, 248, 0.16)', duration: 18, delay: 0 },
    { id: 2, size: 260, x: '82%', y: '18%', color: 'rgba(2, 132, 199, 0.12)', duration: 22, delay: 2 },
    { id: 3, size: 420, x: '50%', y: '45%', color: 'rgba(186, 230, 253, 0.22)', duration: 24, delay: 1 },
    { id: 4, size: 300, x: '15%', y: '72%', color: 'rgba(14, 165, 233, 0.14)', duration: 20, delay: 3 },
    { id: 5, size: 340, x: '85%', y: '80%', color: 'rgba(56, 189, 248, 0.15)', duration: 19, delay: 2.5 },
    { id: 6, size: 180, x: '70%', y: '5%', color: 'rgba(255, 255, 255, 0.55)', duration: 15, delay: 0.5 },
  ];

  // Smaller sparkling light particles
  const sparkles = [
    { id: 's1', top: '12%', left: '22%', size: 8, delay: 0, duration: 4 },
    { id: 's2', top: '18%', left: '78%', size: 10, delay: 1.2, duration: 4.5 },
    { id: 's3', top: '38%', left: '88%', size: 6, delay: 2.1, duration: 3.8 },
    { id: 's4', top: '55%', left: '8%', size: 9, delay: 0.8, duration: 5 },
    { id: 's5', top: '70%', left: '42%', size: 7, delay: 1.6, duration: 4.2 },
    { id: 's6', top: '85%', left: '75%', size: 8, delay: 2.7, duration: 4.6 },
    { id: 's7', top: '28%', left: '48%', size: 11, delay: 1.9, duration: 5.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Light sky-blue radial gradient glow washes */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-sky-200/40 via-cyan-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-gradient-to-bl from-sky-300/30 via-blue-100/25 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-[700px] h-[700px] bg-gradient-to-t from-sky-200/30 via-cyan-100/20 to-transparent rounded-full blur-3xl" />

      {/* Floating Luminous Bokeh Orbs */}
      {bokehOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-2xl will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            backgroundColor: orb.color
          }}
          animate={{
            y: [-16, 20, -16],
            x: [-12, 14, -12],
            scale: [1, 1.08, 1],
            opacity: [0.7, 0.95, 0.7]
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay
          }}
        />
      ))}

      {/* Twinkling Bokeh Sparkles like the uploaded logo artwork */}
      {sparkles.map((sp) => (
        <motion.div
          key={sp.id}
          className="absolute rounded-full bg-white shadow-[0_0_12px_4px_rgba(56,189,248,0.6)]"
          style={{
            top: sp.top,
            left: sp.left,
            width: sp.size,
            height: sp.size
          }}
          animate={{
            scale: [0.6, 1.3, 0.6],
            opacity: [0.25, 0.9, 0.25]
          }}
          transition={{
            duration: sp.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: sp.delay
          }}
        />
      ))}
    </div>
  );
};
