import AnimatedLogo from "./AnimatedLogo";
import { useEffect, useState, useRef } from "react";
import { motion, cubicBezier } from 'framer-motion';

const easeFn = cubicBezier(0.42, 0, 0.58, 1); // cubic-bezier equivalente a 'easeInOut'

interface EntryAnimationProps {
  onFinish?: () => void; // callback fired when the entry animation is fully done
}

function EntryAnimation({ onFinish }: EntryAnimationProps) {
  const [showText, setShowText] = useState(false);
  const [hideEntry, setHideEntry] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    // lock scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // show text shortly after start
    const textTimer = setTimeout(() => setShowText(true), 900);
    // trigger collapse
    const hideTimer = setTimeout(() => setHideEntry(true), 1800);
    // finish (allow some extra time for collapse animation ~100ms)
    const finishTimer = setTimeout(() => {
      if (!finishedRef.current) {
        finishedRef.current = true;
        document.body.style.overflow = previousOverflow; // restore scroll
        onFinish?.();
      }
    }, 1950); // 1800 + 150ms buffer

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
      clearTimeout(finishTimer);
      if (!finishedRef.current) {
        document.body.style.overflow = previousOverflow; // ensure restore on unmount
      }
    };
  }, [onFinish]);

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
        className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-black overflow-hidden px-4"
        variants={containerVariants}
        initial="visible"
        animate={hideEntry ? "hidden" : "visible"}
        style={{ originY: 0, zIndex: 50 }}
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