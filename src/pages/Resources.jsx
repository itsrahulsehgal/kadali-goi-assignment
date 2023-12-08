import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    return (
        <motion.div
            className="container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="left-container">
                <h1>Resources</h1>
                <p>Resource Hub, Your Gateway to Educational Excellence...!</p>
                <button className="gradient-button">
                    Learn More
                </button>
            </div>
            <div className="right-container">
                <motion.img
                    src='https://kadali.my.canva.site/99wala/images/62ca204fb576f4b4fafe03d53886bc5b.jpg'
                    alt="Overlay Image"
                    className="overlay-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
            </div>
        </motion.div>
    );
};

export default Resources;
