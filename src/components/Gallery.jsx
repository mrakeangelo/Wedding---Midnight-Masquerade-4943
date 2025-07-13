import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      caption: "The ancient castle where our love story began"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      caption: "Candlelit moments in the garden"
    },
    {
      src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
      caption: "The grand ballroom awaits"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      caption: "Our engagement in the moonlight"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      caption: "The chapel where we'll say 'I do'"
    },
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
      caption: "Dancing under the stars"
    }
  ];

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Captured in Shadow & Light</h2>
          <div className="section-ornament">❦</div>
          <p className="section-subtitle">Moments from our dark romance</p>
        </motion.div>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openImage(index)}
            >
              <img src={image.src} alt={image.caption} />
              <div className="gallery-overlay">
                <p className="gallery-caption">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeImage}>
                <SafeIcon icon={FiX} />
              </button>
              <button className="modal-nav modal-prev" onClick={prevImage}>
                <SafeIcon icon={FiChevronLeft} />
              </button>
              <button className="modal-nav modal-next" onClick={nextImage}>
                <SafeIcon icon={FiChevronRight} />
              </button>
              <img src={images[selectedImage].src} alt={images[selectedImage].caption} />
              <p className="modal-caption">{images[selectedImage].caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;