import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

const About = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleLearnMoreClick = () => {
        setShowPopup(!showPopup);
    };

    const containerVariants = {
        hidden: { opacity: 0, x: '-100%', scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };

    return (
        <motion.div
            className="container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onClick={handleLearnMoreClick}
        >
            <div className="left-container">
                <h1>About Us</h1>
                <p></p>
                <button className="gradient-button">
                    Learn More
                </button>
            </div>
            <div className="right-container">
                <img
                    src='https://kadali.my.canva.site/99wala/images/0ac322d0a0778d60de63e8eda1eb6a48.png'
                    className="overlay-image"
                />
            </div>
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        className="popup"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        {/* Your pop-up content goes here */}
                        <p>This is a pop-up!</p>
                        <button onClick={handleLearnMoreClick}>Close</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default About;
