import React from "react";
import { motion } from "framer-motion";

const particles = [
  { id: 1, left: "8%", top: "18%", size: 4, duration: 6 },
  { id: 2, left: "18%", top: "72%", size: 3, duration: 8 },
  { id: 3, left: "32%", top: "35%", size: 4, duration: 7 },
  { id: 4, left: "48%", top: "78%", size: 3, duration: 9 },
  { id: 5, left: "64%", top: "22%", size: 4, duration: 7 },
  { id: 6, left: "76%", top: "65%", size: 3, duration: 8 },
  { id: 7, left: "90%", top: "32%", size: 4, duration: 6 },
];

function BackgroundAnimation() {
  return (
    <div
      className="
        fixed
        inset-0
        z-0
        overflow-hidden
        pointer-events-none
      "
      aria-hidden="true"
    >
      {/* =================================
          Animated Grid
      ================================== */}

      <motion.div
        className="
          absolute
          inset-0
          text-primary
          opacity-[0.035]
          dark:opacity-[0.06]
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
        animate={{
          backgroundPosition: [
            "0px 0px",
            "60px 60px",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =================================
          Top Left Glow
      ================================== */}

      <motion.div
        className="
          absolute
          -top-40
          -left-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-primary/[0.06]
          dark:bg-primary/[0.12]
          blur-3xl
        "
        animate={{
          x: [0, 100, 0],
          y: [0, 70, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================
          Bottom Right Glow
      ================================== */}

      <motion.div
        className="
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/[0.06]
          dark:bg-primary/[0.12]
          blur-3xl
        "
        animate={{
          x: [0, -100, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================
          Center Glow
      ================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/[0.025]
          dark:bg-primary/[0.06]
          blur-3xl
        "
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================
          Floating Particles
      ================================== */}

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-primary/30
            dark:bg-primary/50
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0, 25, 0],
            x: [0, 20, -15, 10, 0],
            opacity: [0.15, 0.6, 0.2, 0.5, 0.15],
            scale: [1, 1.5, 1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundAnimation;