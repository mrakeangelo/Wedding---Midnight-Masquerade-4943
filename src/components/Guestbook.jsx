import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFeather, FiHeart, FiStar } = FiIcons;

const Guestbook = () => {
  const [entries, setEntries] = useState([
    {
      name: "Lady Catherine",
      message: "May your love story be as eternal as the stars above the castle towers.",
      date: "October 10, 2024"
    },
    {
      name: "Lord Blackwood",
      message: "Two souls united in darkness and light - a perfect match for the ages.",
      date: "October 9, 2024"
    },
    {
      name: "Countess Rosalind",
      message: "Your love reminds us that the most beautiful romances are written in shadows.",
      date: "October 8, 2024"
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.name && newEntry.message) {
      setEntries([
        {
          ...newEntry,
          date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        },
        ...entries
      ]);
      setNewEntry({ name: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setNewEntry({
      ...newEntry,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="guestbook" className="guestbook">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Etch Your Wishes in the Dark</h2>
          <div className="section-ornament">❦</div>
          <p className="section-subtitle">Leave your mark in our book of shadows</p>
        </motion.div>
        
        <div className="guestbook-content">
          <motion.form
            className="guestbook-form"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <div className="form-header">
              <SafeIcon icon={FiFeather} className="quill-icon" />
              <h3>Sign Our Guestbook</h3>
            </div>
            
            <div className="form-group">
              <label htmlFor="guestName">Your Name</label>
              <input
                type="text"
                id="guestName"
                name="name"
                value={newEntry.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="guestMessage">Your Message</label>
              <textarea
                id="guestMessage"
                name="message"
                value={newEntry.message}
                onChange={handleChange}
                rows="4"
                placeholder="Share your wishes for our eternal love..."
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiHeart} />
              Sign with Love
            </motion.button>
          </motion.form>
          
          <motion.div
            className="guestbook-entries"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Wishes from Our Guests</h3>
            <div className="entries-list">
              {entries.map((entry, index) => (
                <motion.div
                  key={index}
                  className="entry"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="entry-header">
                    <span className="entry-name">{entry.name}</span>
                    <span className="entry-date">{entry.date}</span>
                  </div>
                  <p className="entry-message">{entry.message}</p>
                  <div className="entry-ornament">
                    <SafeIcon icon={FiStar} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;