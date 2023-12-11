'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedImage = ({ source,hig }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`opacity-0 transform transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'translate-x-full'
      }`}
    >
        <div>Image</div>
    </div>
  );
};

export default AnimatedImage;
