import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiMoon, FiSun } = FiIcons;

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">Midnight Masquerade</span>
          <div className="logo-ornament">❦</div>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('timeline')}>Our Story</button>
          <button onClick={() => scrollToSection('wedding-info')}>Details</button>
          <button onClick={() => scrollToSection('gallery')}>Gallery</button>
          <button onClick={() => scrollToSection('rsvp')}>RSVP</button>
          <button onClick={() => scrollToSection('guestbook')}>Guestbook</button>
        </nav>

        <div className="header-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            <SafeIcon icon={theme === 'twilight' ? FiSun : FiMoon} />
            <span>{theme === 'twilight' ? 'Golden Veil' : 'Twilight Gala'}</span>
          </button>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;