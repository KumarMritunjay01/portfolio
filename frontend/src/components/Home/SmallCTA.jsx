import React from "react";
import { motion } from "framer-motion";

function SmallCTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          className="text-center border border-border rounded-2xl p-10 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Let's build something together.
          </h2>

          <p className="mt-4 text-muted max-w-xl mx-auto">
            I'm always interested in working on meaningful projects
            and creating useful digital experiences.
          </p>

          <motion.a
            href="/contact"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-primary text-background font-medium"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk →
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default SmallCTA;