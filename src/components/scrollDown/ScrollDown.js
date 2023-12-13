'use client'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AnalogClock from 'analog-clock-react';

const ScrollBackgroundAnimation = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the vertical scroll position
            const scrollY = window.scrollY;

            // Adjust the animation based on the vertical scroll position
            controls.start({ opacity: 1 - scrollY / 400, x: scrollY / 2 });
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    let options = {
        width: "200px",
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
            className="w-[200px] h-[200px] relative flex justify-center items-center "
            animate={controls}
        >
            {/* <h1 className="text-4xl font-bold text-white">Scroll down to see the animation</h1> */}
            {/* <AnalohgClock></AnalohgClock> */}
            <AnalogClock {...options} />
        </motion.div>
    );
};

export default ScrollBackgroundAnimation;
