import Skill from "../models/skill.model.js";

// ✅ GET Skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();

    res.status(200).json({
      success: true,
      data: skills,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ✅ CREATE Skill 🔥🔥🔥
export const createSkill = async (req, res) => {
  try {

    console.log("🔥 BODY:", req.body);   // ✅ ADD THIS

    const { name, level, icon } = req.body;

    console.log("🔥 EXTRACTED:", name, level, icon);  // ✅ ADD

    const newSkill = new Skill({ name, level, icon });

    console.log("🔥 NEW SKILL:", newSkill);   // ✅ ADD

    await newSkill.save();

    console.log("✅ SAVED TO DB");   // ✅ ADD

    res.status(201).json({
      success: true,
      message: "Skill added successfully",
    });

  } catch (error) {

    console.error("❌ ERROR:", error);  // ✅ IMPORTANT

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};