import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiClock, FiUsers, FiHeart } = FiIcons;

const WeddingInfo = () => {
  return (
    <section id="wedding-info" className="wedding-info">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">The Grand Affair</h2>
          <div className="section-ornament">❦</div>
          <p className="section-subtitle">Join us for an evening of mystery, romance, and celebration</p>
        </motion.div>
        
        <div className="info-grid">
          <motion.div
            className="info-card ceremony"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-icon">
              <SafeIcon icon={FiHeart} />
            </div>
            <h3>Ceremony</h3>
            <div className="card-details">
              <p><SafeIcon icon={FiMapPin} /> Ravenshollow Castle</p>
              <p><SafeIcon icon={FiClock} /> 11:00 PM</p>
              <p className="card-description">
                Exchange vows in the ancient stone chapel by candlelight, 
                where centuries of love stories have been written.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="info-card reception"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card-icon">
              <SafeIcon icon={FiUsers} />
            </div>
            <h3>Masquerade Ball</h3>
            <div className="card-details">
              <p><SafeIcon icon={FiMapPin} /> Grand Ballroom</p>
              <p><SafeIcon icon={FiClock} /> Midnight onwards</p>
              <p className="card-description">
                Dance the night away in our grand ballroom, adorned with 
                crystal chandeliers and draped in midnight velvet.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="dress-code"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3>Attire & Etiquette</h3>
          <div className="dress-code-content">
            <div className="attire-section">
              <h4>Masquerade Attire</h4>
              <p>Formal evening wear in deep jewel tones. Masquerade masks encouraged - let mystery be your companion.</p>
            </div>
            <div className="attire-section">
              <h4>Valet Service</h4>
              <p>Complimentary valet parking available. Horse-drawn carriages will transport guests from the manor gates.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;