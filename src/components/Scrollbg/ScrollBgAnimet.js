'use client'
import { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import GradientTextAnimation from '../Animetion/Animetion';

const ScrollBg = () => {
    const [{ opacity, y }, spring] = useSpring(() => ({ opacity: 1, y: 0 }));

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll position
            const scrollY = window.scrollY;

            // Set a threshold for the scroll position to trigger the animation
            const threshold = window.innerHeight / 2;

            // Adjust the spring animation based on the scroll position
            spring.start({
                opacity: scrollY > threshold ? 1 - Math.min(1, (scrollY - threshold) / 400) : 1,
                y: scrollY > threshold ? (scrollY - threshold) / 2 : 0,
            });
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [spring]);

    return (
        <animated.div
            className=" w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500  flex items-center justify-center container mx-auto"
            style={{
                position: 'fixed',
                top: '20%',

                transform: 'translate(-50%, -50%)',
                opacity,
                transform: y.interpolate((val) => `translateY(${val}px)`),
            }}
        >
            <GradientTextAnimation />
        </animated.div>
    );
};

export default ScrollBg;