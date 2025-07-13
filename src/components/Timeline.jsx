import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      year: "2019",
      title: "The First Encounter",
      description: "Our eyes met across the candlelit library during a midnight poetry reading. The world stood still as destiny whispered our names."
    },
    {
      year: "2020",
      title: "Letters in the Shadows",
      description: "Through moonlit correspondence and secret garden meetings, our hearts intertwined like ivy on ancient stone."
    },
    {
      year: "2022",
      title: "The Proposal",
      description: "Under a blood moon in the castle ruins, Sebastian knelt with grandmother's ruby ring, sealing our eternal bond."
    },
    {
      year: "2024",
      title: "The Masquerade",
      description: "Tonight, we dance as one soul in two bodies, surrounded by those who've witnessed our dark romance bloom."
    }
  ];

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">A Night to Remember</h2>
          <div className="section-ornament">❦</div>
          <p className="section-subtitle">Our love story unfolds like pages from a gothic romance</p>
        </motion.div>
        
        <div className="timeline-container">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
              <div className="timeline-ornament">✦</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;