import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import skillRoutes from "./routes/skill.routes.js";
import CertificateRoutes from "./routes/certificate.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import codingRoutes from "./routes/coding.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Db connections
connectDB();

// Allowed origins from environment variable or defaults
const allowedOrigins = process.env.CLIENT_URL 
    ? process.env.CLIENT_URL.split(",") 
    : ["http://localhost:5173", "http://192.168.29.115:5000"];

// Middlewares
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, Postman)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === "development") {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio API Running ");
});

// Project Routes
app.use("/api/projects", projectRoutes);

// Contact Routes
app.use("/api/contact", contactRoutes);

// skills route
app.use("/api/skill", skillRoutes);

app.use("/api/coding", codingRoutes);

// Certificates
app.use("/api/certificates", CertificateRoutes);

// Resume
app.use("/api/resume", resumeRoutes);

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});