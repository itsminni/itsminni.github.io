import AnimatedLogo from "./layout/AnimatedLogo";
import { useEffect, useState } from "react";
import { motion, cubicBezier } from 'framer-motion';

const easeFn = cubicBezier(0.42, 0, 0.58, 1); // cubic-bezier equivalente a 'easeInOut'

function EntryAnimation() {
  const [showText, setShowText] = useState(false);
  const [hideEntry, setHideEntry] = useState(false);

  useEffect(() => {
    // Testo più veloce - inizia quasi subito dopo il logo
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 900);

    // Dopo l'animazione del testo, comprimi verso l'alto e nascondi
    const hideTimer = setTimeout(() => {
      setHideEntry(true);
    }, 1800); // 900ms + 900ms (tempo animazione + pausa)

    // Rimuovo il timer per la navbar perché showNavbar non è usato
    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -200,
      scale: 0.3,
      rotate: -10,
      z: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      z: 0,
      transition: {
        duration: 0.2,
        ease: easeFn
      }
    }
  };

  const containerVariants = {
    hidden: {
      scaleY: 0,
      opacity: 0,
      transition: { duration: 0.1, ease: easeFn }
    }
  };

  return (
    <>
      <motion.div
        className="h-screen w-full flex items-center justify-center bg-black overflow-hidden px-4"
        variants={containerVariants}
        initial="visible"
        animate={hideEntry ? "hidden" : "visible"}
        style={{ originY: 0, position: 'absolute', width: '100%', zIndex: 50 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 relative max-w-full">
          <div className="relative z-10 flex-shrink-0">
            <AnimatedLogo />
          </div>
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            className="text-white font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider relative z-0 text-center sm:text-left"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              transformStyle: 'preserve-3d',
              fontSize: 'clamp(2rem, 8vw, 12rem)',
              lineHeight: '0.9'
            }}
          >
            ALLINX
          </motion.div>
        </div>
      </motion.div>
      
    </>
  );
}

export default EntryAnimation;