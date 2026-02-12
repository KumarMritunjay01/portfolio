import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../services/api";
import Loader from "../components/Loader";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-background text-foreground">

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            My Projects 🚀
          </h1>

          <p className="mt-4 text-muted">
            Some of my recent works & experiments
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              index={index}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Projects;