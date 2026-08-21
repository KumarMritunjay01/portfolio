import React from "react";
import { delay, motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
  <div className="max-w-6xl mx-auto px-6 w-full">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT → TEXT */}
      <motion.div className="text-center md:text-left"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:3}}
      >

        <div className="inline-block px-4 py-1 rounded-full border border-border text-muted text-sm"
        >
          MERN Stack Developer
        </div>

        <motion.h1
          className="mt-6 text-4xl md:text-6xl font-bold"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {"Hello, I am".split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {" "}

          <motion.span
            className="text-primary"
          >
            {"MRITUNJAY".split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {" "}
          </motion.span>
        </motion.h1>

        <motion.p className="mt-4 text-muted text-lg"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2 , duration:1}}
        >
          Turning ideas into web applications.
        </motion.p>

        <motion.p className="mt-2 text-muted"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.4 , duration:1}}
        >
          Building products that people love to <span className="text-primary">use.</span>
        </motion.p>
      </motion.div>

      {/* RIGHT → IMAGE */}
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dkddz7kio/image/upload/v1771153184/profile_yrnliy.jpg"
          alt="image"
          className="w-72 rounded-2xl border border-border shadow-sm"
        />
      </div>

    </div>
  </div>
</section>

  );
}

export default Hero;
