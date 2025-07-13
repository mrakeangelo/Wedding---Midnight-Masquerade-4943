import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMusic, FiPlay, FiPause, FiVolume2, FiVolumeX } = FiIcons;

const Soundtrack = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      className="soundtrack"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <div className="soundtrack-controls">
        <button onClick={togglePlay} className="play-btn">
          <SafeIcon icon={isPlaying ? FiPause : FiPlay} />
        </button>
        <button onClick={toggleMute} className="mute-btn">
          <SafeIcon icon={isMuted ? FiVolumeX : FiVolume2} />
        </button>
        <div className="soundtrack-info">
          <SafeIcon icon={FiMusic} />
          <span>Midnight Waltz</span>
        </div>
      </div>
      
      {isPlaying && (
        <div className="music-visualizer">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="visualizer-bar"
              animate={{
                height: [10, 30, 15, 25, 10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Soundtrack;