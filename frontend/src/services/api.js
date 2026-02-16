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

// ✅ GET Certificates 🔥
export const getCertificates = () => API.get("/api/certificates");