import express from "express";
import { sendContactMessage } from "../controllers/contact.controller.js";

const router = express.Router();

// ✅ POST Contact Message
router.post("/", sendContactMessage);

export default router;
