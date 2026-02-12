import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/project.routes.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Db connections
connectDB();

// Middlewares
app.use(cors({
    origin:"https://portfolio-red-eight-84.vercel.app"
}));
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio API Running 🚀");
});

// Project Routes
app.use("/api/projects", projectRoutes);

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});