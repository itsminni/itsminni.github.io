import { useEffect, useState, useRef } from "react";
import { motion, cubicBezier } from 'framer-motion';

const easeFn = cubicBezier(0.42, 0, 0.58, 1);

interface EntryAnimationProps {
  onFinish?: () => void;
}

function EntryAnimation({ onFinish }: EntryAnimationProps) {
  const [showText, setShowText] = useState(false);
  const [hideEntry, setHideEntry] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const textTimer = setTimeout(() => setShowText(true), 400);
    const hideTimer = setTimeout(() => setHideEntry(true), 1500);
    const finishTimer = setTimeout(() => {
      if (!finishedRef.current) {
        finishedRef.current = true;
        document.body.style.overflow = previousOverflow;
        onFinish?.();
      }
    }, 1650);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
      clearTimeout(finishTimer);
      if (!finishedRef.current) {
        document.body.style.overflow = previousOverflow;
      }
    };
  }, [onFinish]);

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeFn,
      },
    },
  };

  const containerVariants = {
    hidden: {
      scaleY: 0,
      opacity: 0,
      transition: { duration: 0.1, ease: easeFn },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-black overflow-hidden px-4"
      variants={containerVariants}
      initial="visible"
      animate={hideEntry ? "hidden" : "visible"}
      style={{ originY: 0, zIndex: 50 }}
    >
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={showText ? "visible" : "hidden"}
        className="text-white font-black tracking-wider text-center"
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 'clamp(3rem, 10vw, 12rem)',
          lineHeight: '0.9',
        }}
      >
        MINNI
      </motion.div>
    </motion.div>
  );
}

export default EntryAnimation;