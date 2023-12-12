'use client'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AnalogClock from 'analog-clock-react';

const ScrollBackgroundAnimation = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll position
            const scrollY = window.scrollY;

            // Adjust the animation based on the scroll position
            // if (controls.transition) {
                controls.start({ opacity: 1 - scrollY / 400, y: scrollY / 2 });
            // }

        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        // controls.start();
        // if (controls.transition) {
        //     controls.start();
        // }
        // Remove the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    let options = {
        width: "250px",
        border: true,
        borderColor: "white",
        baseColor: "black",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
            second: "#d81c7a",
            minute: "#ffffff",
            hour: "#ffffff"
        }
    };

    return (
        <motion.div
            className="min-h-[70vh] w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 relative flex items-center "
            animate={controls}
        >
            {/* <h1 className="text-4xl font-bold text-white">Scroll down to see the animation</h1> */}
            {/* <AnalohgClock></AnalohgClock> */}
            <AnalogClock {...options} />
        </motion.div>
    );
};

export default ScrollBackgroundAnimation;
