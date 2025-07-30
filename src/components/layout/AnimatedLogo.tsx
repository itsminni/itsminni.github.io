import { useState, useEffect } from 'react';
import { motion, easeInOut } from 'motion/react';

const AnimatedLogo = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const leftVariants = {
    hidden: { x: -800, y: -300, opacity: 0, scale: 0.7, rotate: -45 },
    visible: { 
      x: 0, y: 0, opacity: 1, scale: 1, rotate: 0,
      transition: { 
        duration: 0.6, 
        ease: easeInOut, 
        delay: 0
      }
    }
  };

  const containerVariants = {
    hidden: { scale: 0.5, rotate: 0 },
    visible: { 
      scale: 1, rotate: 0,
      transition: { duration: 0.4, ease: easeInOut, delay: 0.8 }
    }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate={animate ? "visible" : "hidden"}>
      <svg width="120" height="100" className="sm:w-[180px] sm:h-[150px] md:w-[240px] md:h-[200px]" viewBox="0 0 582.97 497.03">
        <defs>
          <style>{`.cls-1, .cls-2 { fill: #fc3; fill-rule: evenodd; }`}</style>
        </defs>
        <motion.path
          className="cls-2"
          d="M5.81,71.13h151l169,294-77.5,127L5.81,71.13Z"
          variants={leftVariants}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
        />
        <motion.polygon
          className="cls-1"
          points="272.81 272.92 325.81 365.13 425.81 219.61 458.81 258.61 522.81 258.61 459.81 170.61 576.81 6.61 453.81 5.61 398.05 87.95 365.81 47.11 304.81 47.11 366.69 134.4 272.81 272.92"
          style={{ fill: '#336' }}
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedLogo;