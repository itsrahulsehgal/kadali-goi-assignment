import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

const Home = () => {
    const [showPopup, setShowPopup] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    const handleLearnMoreClick = () => {
        setShowPopup(!showPopup);
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
                <h1>Welcome..!</h1>
                <p>Navigate Knowledge, Reach Success...!</p>
                <button className="gradient-button">
                    Learn More
                </button>
            </div>
            <div className="right-container">
                <motion.img
                    src="https://kadali.my.canva.site/99wala/images/c5728b2bab432a9fc87a96559e214050.png"
                    alt="Overlay Image"
                    className="overlay-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
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

export default Home;
