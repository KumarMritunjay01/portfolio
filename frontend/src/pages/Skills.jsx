import React, { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";
import Loader from "../components/Loader";
import { getSkills } from "../services/api";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);

      const res = await getSkills();
      const skillsData = res.data.data ?? res.data;

      setSkills(skillsData);

    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Professional Icon Mapping
  const iconMap = {
    react: <FaReact />,
    node: <FaNodeJs />,
    mongodb: <SiMongodb />,
    express: <SiExpress />,
    javascript: <FaJs />,
    html: <FaHtml5 />,
    typescript: <SiTypescript />,
    nextjs: <SiNextdotjs />,
    java: <FaJava />,
    sql: <FaDatabase />,
    database: <FaDatabase />,
    git: <FaGitAlt />,
    dsa: <GiBrain />,
    algorithm: <GiBrain />,
    jwt: <FaJs />,
    "rest apis": <FaJs />,
  };

  const getIcon = (iconName) => {
    return iconMap[iconName?.toLowerCase()] || <FaJs />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            My Skills
          </h1>

          <p className="mt-4 text-muted">
            Technologies & tools I work with
          </p>
        </div>

        <div className="mt-16">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill._id}
                  name={skill.name}
                  level={skill.level}
                  icon={getIcon(skill.icon)}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;