import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { scrollToTop as scrollToTopSmooth } from '../lib/lenis';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    scrollToTopSmooth();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-50 grid h-12 w-12 place-items-center rounded-full bg-teal-500/20 dark:bg-teal-400/20 text-teal-700 dark:text-teal-400 shadow-lg transition-colors hover:bg-teal-500/30 dark:hover:bg-teal-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:focus-visible:ring-teal-300"
          aria-label="Go to top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}