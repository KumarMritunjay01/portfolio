import React, { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";
import Loader from "../components/Loader";   // ✅ IMPORT LOADER
import { getSkills } from "../services/api";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

function Skills() {

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);   // ✅ LOADING STATE

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);   // ✅ START LOADING

      const res = await getSkills();

      console.log("🔥 Skills From DB:", res.data);

      const skillsData = res.data.data ?? res.data;
      setSkills(skillsData);

    } catch (error) {
      console.error("Fetch Error:", error);

    } finally {
      setLoading(false);   // ✅ STOP LOADING
    }
  };

  // ✅ Icon Mapper
  const getIcon = (iconName) => {

    switch (iconName) {
      case "react":
        return <FaReact />;

      case "node":
        return <FaNodeJs />;

      case "mongodb":
        return <SiMongodb />;

      case "express":
        return <SiExpress />;

      case "javascript":
        return <FaJs />;

      case "html":
        return <FaHtml5 />;

      default:
        return <FaJs />;
    }
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

        {/* ✅ CONDITIONAL RENDERING */}
        <div className="mt-16">

          {loading ? (

            <Loader />   // ✅ USE YOUR LOADER COMPONENT

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