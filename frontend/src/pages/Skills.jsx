import React from "react";
import SkillCard from "../components/SkillCard";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "React.js", level: 90, icon: <FaReact /> },
  { name: "Node.js", level: 85, icon: <FaNodeJs /> },
  { name: "MongoDB", level: 80, icon: <SiMongodb /> },
  { name: "Express.js", level: 85, icon: <SiExpress /> },
  { name: "JavaScript", level: 88, icon: <FaJs /> },
  { name: "HTML / CSS", level: 92, icon: <FaHtml5 /> },
];

function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            My Skills 🚀
          </h1>

          <p className="mt-4 text-muted">
            Technologies & tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              index={index}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Skills;