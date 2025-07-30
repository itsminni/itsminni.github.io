import AnimatedLogo from "./layout/AnimatedLogo";
import { useEffect, useState } from "react";
import { motion, cubicBezier } from 'framer-motion';

const easeFn = cubicBezier(0.42, 0, 0.58, 1); // cubic-bezier equivalente a 'easeInOut'

function EntryAnimation() {
  const [showText, setShowText] = useState(false);
  const [hideEntry, setHideEntry] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Testo più veloce - inizia quasi subito dopo il logo
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 900);

    // Dopo l'animazione del testo, comprimi verso l'alto e nascondi
    const hideTimer = setTimeout(() => {
      setHideEntry(true);
    }, 1800); // 900ms + 900ms (tempo animazione + pausa)

    const navbarTimer = setTimeout(() => {
      setShowNavbar(true);
    }, 2100); // poco dopo la fine della compressione

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
      clearTimeout(navbarTimer);
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
        className="h-screen w-full flex items-center justify-center bg-black overflow-hidden"
        variants={containerVariants}
        initial="visible"
        animate={hideEntry ? "hidden" : "visible"}
        style={{ originY: 0, position: 'absolute', width: '100%', zIndex: 50 }}
      >
        <div className="flex items-center gap-4 relative">
          <div className="relative z-10">
            <AnimatedLogo onAnimationComplete={() => {}} />
          </div>
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            className="text-white font-black text-[15vh] tracking-wider relative z-0"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              transformStyle: 'preserve-3d'
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