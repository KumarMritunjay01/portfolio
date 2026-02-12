import axios from "axios";

console.log("NEW BUILD TEST ");

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getProjects = () => {
   console.log("Calling API → /api/projects ");
   return API.get("/api/projects");
};

// ✅ Send Contact Message
export const sendMessage = (data) => API.post("/api/contact", data);