import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getProjects = () => {
   return API.get("/api/projects");
};

// ✅ Send Contact Message
export const sendMessage = (data) => API.post("/api/contact", data);

// GET Skills
export const getSkills = () => API.get("/api/skill");

// GET LeetCode Stats
export const getLeetCodeStats = () => {
  return API.get("/api/coding/leetcode");
};

export const getHackerRankStats = () => {
  return API.get("/api/coding/hackerrank");
};

// ✅ GET Certificates 🔥
export const getCertificates = () => API.get("/api/certificates");

// ✅ GET Resume
export const getResume = () => API.get("/api/resume");