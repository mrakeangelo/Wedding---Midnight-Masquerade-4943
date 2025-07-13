import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiHeart, FiMapPin, FiCamera } = FiIcons;

const Registry = () => {
  const registryItems = [
    {
      icon: FiHeart,
      title: "Antique Silverware Set",
      description: "Heirloom quality pieces for our candlelit dinners",
      price: "$450"
    },
    {
      icon: FiCamera,
      title: "Vintage Photography Session",
      description: "Capture our love story in gothic elegance",
      price: "$800"
    },
    {
      icon: FiMapPin,
      title: "European Castle Tour",
      description: "Honeymoon adventure through medieval castles",
      price: "$3,200"
    },
    {
      icon: FiGift,
      title: "Crystal Chandelier",
      description: "Illuminate our first home with romantic ambiance",
      price: "$1,200"
    }
  ];

  return (
    <section id="registry" className="registry">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Legacy of Love</h2>
          <div className="section-ornament">❦</div>
          <p className="section-subtitle">Help us build our romantic sanctuary</p>
        </motion.div>
        
        <div className="registry-grid">
          {registryItems.map((item, index) => (
            <motion.div
              key={index}
              className="registry-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="item-icon">
                <SafeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p className="item-description">{item.description}</p>
              <div className="item-price">{item.price}</div>
              <button className="registry-btn">
                Select This Gift
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="registry-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>Additional Registry Information</h3>
          <p>
            Our registry includes carefully curated items that reflect our shared love 
            for gothic romance, vintage elegance, and creating a home filled with mystery 
            and beauty. Each piece has been chosen to help us build our own castle of love.
          </p>
          <div className="registry-links">
            <a href="#" className="registry-link">View Full Registry</a>
            <a href="#" className="registry-link">Monetary Gifts</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;