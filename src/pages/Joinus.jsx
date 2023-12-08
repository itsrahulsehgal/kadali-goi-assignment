import React from 'react';
import { motion } from 'framer-motion';

const Explore = () => {
  const containerVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120, damping: 10 } },
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="left-container">
        <h1>Explore Career..!</h1>
        <p>Explore Careers, Navigate Success...!</p>
        <button className="gradient-button">Learn More</button>
      </div>
      <div className="right-container">
        <img
          src="https://kadali.my.canva.site/99wala/images/7a7fba11b713ae9192ff562f34e54267.png"
          alt="Overlay Image"
          className="overlay-image"
        />
      </div>
    </motion.div>
  );
};

export default Explore;
