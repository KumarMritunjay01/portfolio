
import React from "react";
import Navbar from "../components/Navbar";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Express.js", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "HTML / CSS", level: 92 },
];

function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* <Navbar /> */}

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
          My Skills 🚀
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-secondary/10 border border-border rounded-xl p-5 
              hover:scale-[1.02] transition duration-300"
            >
              {/* Skill Header */}
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">
                  {skill.name}
                </h3>

                <span className="text-sm text-muted">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Skills;