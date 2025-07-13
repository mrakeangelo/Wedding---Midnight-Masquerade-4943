import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="candle-glow candle-1"></div>
        <div className="candle-glow candle-2"></div>
        <div className="candle-glow candle-3"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-ornament"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          ✦
        </motion.div>
        
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="title-line">Isabella</span>
          <span className="title-ampersand">&</span>
          <span className="title-line">Sebastian</span>
        </motion.h1>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Request the honour of your presence at our
        </motion.p>
        
        <motion.div
          className="hero-date"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span className="date-text">Midnight Masquerade</span>
          <span className="date-number">XIII • X • MMXXIV</span>
        </motion.div>
        
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="scroll-indicator">
            <span>Enter the Ballroom</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;