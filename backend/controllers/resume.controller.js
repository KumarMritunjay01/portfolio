import Resume from "../models/resume.model.js";

export const saveResume = async (req, res) => {
  try {
    const { resumeUrl } = req.body;

    if (!resumeUrl) {
      return res.status(400).json({ message: "Resume URL required" });
    }

    const newResume = await Resume.create({ resumeUrl });

    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne().sort({ createdAt: -1 });

    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
