import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "A modern web application built to solve real-world problems with a clean and intuitive interface.",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A responsive and interactive web application focused on performance and user experience.",
    technologies: ["React", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A full-stack application with authentication, API integration and a responsive frontend.",
    technologies: ["React", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium">
            MY WORK
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A few projects I've worked on that showcase my skills
            and experience.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="border border-border rounded-2xl p-6 bg-background"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="h-40 rounded-xl bg-muted/10 border border-border flex items-center justify-center">
                <span className="text-muted text-sm">
                  Project Preview
                </span>
              </div>

              {/* CONTENT */}
              <h3 className="mt-5 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-muted text-sm leading-relaxed">
                {project.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs px-3 py-1 rounded-full border border-border text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.liveUrl}
                  className="text-sm text-primary hover:underline"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  className="text-sm text-muted hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* VIEW ALL */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg border border-border hover:bg-muted/10 transition"
          >
            View All Projects →
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedProjects;