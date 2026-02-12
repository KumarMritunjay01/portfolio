import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-secondary/10 border border-border rounded-xl p-5"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-primary">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-muted mt-2 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-3 text-sm">
        <span className="text-secondary font-medium">
          Tech Stack:
        </span>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs border border-border rounded-md text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">

        {project.githubLink && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary text-background"
          >
            <FaGithub />
            GitHub
          </motion.a>
        )}

        {project.liveDemo && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-border hover:bg-primary hover:text-background transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </motion.a>
        )}

      </div>
    </motion.div>
  );
}

export default ProjectCard;