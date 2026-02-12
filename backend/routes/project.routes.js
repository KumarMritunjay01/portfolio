import express from "express";
import { getProjects, createProject , updateProject , deleteProject} from "../controllers/project.controller.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);

router.get("/:id", getProjects);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;