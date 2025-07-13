import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-ornament">❦</div>
          <p className="footer-text">
            Midnight Masquerade – A Fantasy Wedding Template by Mrake Agency
          </p>
          <div className="footer-details">
            <p>Isabella & Sebastian • October 13, 2024</p>
            <p>Ravenshollow Castle • A Night to Remember</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;