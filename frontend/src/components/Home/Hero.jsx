import React from "react";
import { motion } from "framer-motion";

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
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 w-full py-20">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* =================================================
                HELLO
            ================================================== */}

            <motion.div
              className="
                text-3xl
                md:text-4xl
                font-medium
                inline-flex
              "
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {"Hello".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letter}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>


            {/* =================================================
                NAME
            ================================================== */}

            <motion.h1
              className="
                mt-2
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-bold
                leading-tight
              "
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{
                delayChildren: 0.2,
              }}
            >

              {"I'm".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letter}
                >
                  {char}
                </motion.span>
              ))}

              {"\u00A0"}

              <span className="text-primary">

                {"Mritunjay Kumar".split("").map(
                  (char, index) => (
                    <motion.span
                      key={index}
                      variants={letter}
                    >
                      {char === " "
                        ? "\u00A0"
                        : char}
                    </motion.span>
                  )
                )}

              </span>

            </motion.h1>


            {/* =================================================
                PROFESSION
            ================================================== */}

            <motion.h2
              className="
                mt-2
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-semibold
              "
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{
                delayChildren: 1,
              }}
            >

              {"Software Developer".split("").map(
                (char, index) => (
                  <motion.span
                    key={index}
                    variants={letter}
                  >
                    {char === " "
                      ? "\u00A0"
                      : char}
                  </motion.span>
                )
              )}

            </motion.h2>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              className="
                mt-4
                text-muted
                text-lg
              "
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
            >
              Turning ideas into web applications.
            </motion.p>


            <motion.p
              className="
                mt-0.5
                text-muted
              "
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.5,
              }}
            >
              Building products that people love to{" "}
              <span className="text-primary font-medium">
                use.
              </span>
            </motion.p>
          </motion.div>


          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}

          <motion.div
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.9,
              ease: "easeOut",
            }}
          >

            {/* Soft Glow */}

            <div
              className="
                absolute
                inset-10
                rounded-full
                bg-primary/5
                dark:bg-primary/10
                blur-3xl
              "
            />


            {/* Image Container */}

            <motion.div
              className="
                relative
                z-10
                w-full
                max-w-md
                lg:max-w-lg
              "
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <img
                src="/homepage.png"
                alt="Software Developer"
                className="
                  block
                  w-full
                  h-auto
                  max-h-[480px]
                  rounded-3xl
                  object-contain
                  drop-shadow-xl
                  md:ml-12
                "
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;