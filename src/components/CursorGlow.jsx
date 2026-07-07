import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
    }
  };

  return (
    <motion.div
      className="cursor-glow"
      variants={variants}
      animate="default"
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 214, 194, 0.15) 0%, rgba(255, 214, 194, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CursorGlow;
