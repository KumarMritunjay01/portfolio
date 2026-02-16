import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/project.routes.js"
import contactRoutes from "./routes/contact.routes.js"
import skillRoutes from "./routes/skill.routes.js"
import cirtificateRoutes from "./routes/certificate.routes.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Db connections
connectDB();

// Middlewares
app.use(cors({
    origin: [
        "https://portfolio-dun-five-25.vercel.app",
        "http://localhost:5173",
        "http://192.168.29.115:5000",
    ]
}));
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio API Running 🚀");
});

// Project Routes
app.use("/api/projects", projectRoutes);

// Contact Routes
app.use("/api/contact" ,contactRoutes)

// skills route
app.use("/api/skill", skillRoutes);4

// Cirtificates
app.use("/api/certificates",cirtificateRoutes);

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});