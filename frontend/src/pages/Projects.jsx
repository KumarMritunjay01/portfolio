import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProjects } from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
          My Projects 🚀
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-secondary/10 border border-border rounded-xl p-5
              hover:scale-[1.02] hover:shadow-lg transition duration-300"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-primary">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-muted mt-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <p className="text-sm mt-3">
                <span className="text-secondary font-medium">
                  Tech Stack:
                </span>{" "}
                <span className="text-muted">
                  {project.techStack?.join(", ")}
                </span>
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-sm px-3 py-1 rounded-lg bg-primary text-white
                    hover:scale-105 transition duration-300"
                  >
                    GitHub
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    className="text-sm px-3 py-1 rounded-lg border border-border
                    hover:bg-primary hover:text-white transition duration-300"
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Projects;