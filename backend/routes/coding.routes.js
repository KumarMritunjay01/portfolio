import express from "express";

import {
  getLeetCodeStats,
  getHackerRankStats,
} from "../controllers/coding.controller.js";

const router = express.Router();

router.get("/leetcode", getLeetCodeStats);

router.get("/hackerrank", getHackerRankStats);

export default router;