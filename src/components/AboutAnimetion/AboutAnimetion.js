'use client'
import { motion } from 'framer-motion';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
};

const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const AboutAnimetion = () => {
    return (
        <motion.div
            className=" text-gradient space-y-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            {/* A dedicated Web Developer */}
            <div className=' text-2xl lg:text-4xl font-bold'>
                <motion.span variants={wordVariants}>I</motion.span>{' '}
                <motion.span variants={wordVariants}>AM</motion.span>{' '}
                <motion.span variants={wordVariants}>ASIF</motion.span>{' '}
                <motion.span variants={wordVariants}>AHAMMED </motion.span>{' '}
                <motion.span variants={wordVariants}>.</motion.span>{' '}
            </div>
        </motion.div>
    );
};

export default AboutAnimetion;