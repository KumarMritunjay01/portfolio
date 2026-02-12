import express from "express";
import { getSkills , createSkill } from "../controllers/skill.controller.js";

const router = express.Router();

router.get("/", getSkills);
router.post("/", createSkill);

export default router;