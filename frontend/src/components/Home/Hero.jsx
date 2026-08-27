import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full px-6">

        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-full border border-border text-muted text-sm"
          >
            MERN Stack Developer
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-5xl md:text-7xl font-bold leading-tight"
          >
            Hello, I am{" "}
            <span className="text-primary">
              MRITUNJAY
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-muted text-xl max-w-2xl mx-auto"
          >
            I build modern web applications and turn ideas
            into useful digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="/projects"
              className="px-6 py-3 rounded-lg bg-primary text-background font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-lg border border-border hover:bg-muted/10 transition"
            >
              Contact Me
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;