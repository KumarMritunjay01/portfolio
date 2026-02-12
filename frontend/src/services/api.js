import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

console.log("API URL:",import.meta.env.VITE_API_URL);
const API = axios.create({
  baseURL: "https://portfolio-lo6u.onrender.com"
});

export const getProjects = () => API.get("/api/projects");

// ✅ Send Contact Message
export const sendMessage = (data) => API.post("/api/contact", data);