import React from 'react';
import { motion } from 'framer-motion';

const Companies = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            x: '-50%',
            y: '-50%',
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: '0%',
            y: '0%',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
        cracker: {
            scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
            rotate: [0, 30, -30, 15, -15, 0],
            opacity: [1, 0.5, 1, 0.3, 1, 0],
            transition: {
                duration: 0.8,
            },
        },
    };

    const handleLearnMoreClick = () => {
        containerVariants.hidden.opacity = 0;
        containerVariants.cracker.opacity = 1;

        setTimeout(() => {
            containerVariants.hidden.opacity = 1;
            containerVariants.cracker.opacity = 0;
        }, 800);
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
                <h1>Companies</h1>
                <p>Corporate Insight: Empower Your Journey...!</p>
                <button className="gradient-button">
                    Learn More
                </button>
            </div>
            <div className="right-container">
                <motion.img
                    src='https://kadali.my.canva.site/99wala/images/e0117e62ef2444c38f1ef957aa52c077.jpg'
                    alt="Overlay Image"
                    className="overlay-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                />
                <motion.div
                    className="cracker"
                    variants={containerVariants.cracker}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                ></motion.div>
            </div>
        </motion.div>
    );
};

export default Companies;
