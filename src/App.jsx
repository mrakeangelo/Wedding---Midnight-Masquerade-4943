import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import Soundtrack from './components/Soundtrack';
import './App.css';

function App() {
  const [theme, setTheme] = useState('twilight');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'twilight' ? 'golden' : 'twilight');
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="masquerade-mask"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="mask-ornament">✦</div>
        </motion.div>
        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Welcome to the Masquerade...
        </motion.p>
      </div>
    );
  }

  return (
    <Router>
      <div className={`app ${theme}-theme`}>
        <Soundtrack />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Timeline />
          <WeddingInfo />
          <Gallery />
          <RSVP />
          <Registry />
          <Guestbook />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;