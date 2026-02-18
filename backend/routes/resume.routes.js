import express from "express";
import { saveResume, getResume } from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/", saveResume);
router.get("/", getResume);

export default router;
