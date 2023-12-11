'use client'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AnalohgClock from "@/components/AnalogClock/AnalohgClock"

const ScrollBackgroundAnimation = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll position
            const scrollY = window.scrollY;

            // Adjust the animation based on the scroll position
            controls.start({ opacity: 1 - scrollY / 400, y: scrollY / 2 });
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <motion.div
            className="min-h-[70vh] w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 relative flex items-center "
            animate={controls}
        >
            {/* <h1 className="text-4xl font-bold text-white">Scroll down to see the animation</h1> */}
            <AnalohgClock></AnalohgClock>
        </motion.div>
    );
};

export default ScrollBackgroundAnimation;
