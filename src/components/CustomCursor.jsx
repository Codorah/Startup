"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (e) => {
      const target = e.target.closest('a, button, .group');
      if (target) {
        setIsHovering(true);
        if (target.dataset.cursor) {
          setCursorText(target.dataset.cursor);
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-codorah-neonViolet z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(139, 92, 246, 0.3)" : "transparent",
      }}
    >
      {cursorText && (
        <span className="text-[4px] font-mono text-white uppercase tracking-tighter text-center leading-none">
          {cursorText}
        </span>
      )}
      <div className="w-1 h-1 bg-codorah-gold rounded-full"></div>
    </motion.div>
  );
}
