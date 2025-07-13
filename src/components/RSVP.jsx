import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiUsers, FiHeart, FiCheck } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    attendance: '',
    mask: '',
    dietary: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('RSVP submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="rsvp">
        <div className="container">
          <motion.div
            className="rsvp-success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="success-icon">
              <SafeIcon icon={FiCheck} />
            </div>
            <h2>Your Invitation is Sealed</h2>
            <p>Thank you for your response. We eagerly await your presence at our midnight masquerade.</p>
            <div className="rose-petals">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="petal"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 100, opacity: 1 }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="rsvp">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Seal Your Fate</h2>
          <div className="section-ornament">❦</div>
          <p className="section-subtitle">Respond to our invitation with elegance</p>
        </motion.div>
        
        <motion.form
          className="rsvp-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">
              <SafeIcon icon={FiUser} />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">
              <SafeIcon icon={FiMail} />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">
                <SafeIcon icon={FiUsers} />
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="attendance">
                <SafeIcon icon={FiHeart} />
                Will you attend?
              </label>
              <select
                id="attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="yes">Yes, with pleasure</option>
                <option value="no">Regretfully decline</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="mask">Masquerade Mask Preference</label>
            <select
              id="mask"
              name="mask"
              value={formData.mask}
              onChange={handleChange}
            >
              <option value="">I'll bring my own</option>
              <option value="venetian">Venetian Gold</option>
              <option value="feathered">Feathered Elegance</option>
              <option value="jeweled">Jeweled Mystery</option>
              <option value="classic">Classic Black</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="dietary">Dietary Restrictions</label>
            <input
              type="text"
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="Any dietary needs we should know about?"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">A Message for the Couple</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Share your wishes for our midnight masquerade..."
            />
          </div>
          
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send My Response
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVP;