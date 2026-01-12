import React from "react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div
      className="shapes-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
        background: "var(--color-bg)",
      }}
    >
      {/* Main Glow 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "40vw",
          height: "40vw",
          background:
            "radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      {/* Main Glow 2 */}
      <motion.div
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "35vw",
          height: "35vw",
          background:
            "radial-gradient(circle, rgba(157, 80, 187, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />

      {/* Small Floating particle */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "40%",
          left: "60%",
          width: "10px",
          height: "10px",
          background: "var(--color-primary)",
          borderRadius: "50%",
          filter: "drop-shadow(0 0 10px var(--color-primary))",
        }}
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 2,
        }}
        style={{
          position: "absolute",
          bottom: "30%",
          left: "20%",
          width: "6px",
          height: "6px",
          background: "var(--color-secondary)",
          borderRadius: "50%",
          filter: "drop-shadow(0 0 8px var(--color-secondary))",
        }}
      />
    </div>
  );
};

export default FloatingShapes;
