import express from "express";
import Certificate from "../models/certificate.model.js";

const router = express.Router();


// ✅ CREATE Certificate
router.post("/", async (req, res) => {
  try {
    const newCert = new Certificate(req.body);
    const savedCert = await newCert.save();

    res.status(201).json(savedCert);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET All Certificates
router.get("/", async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });

    res.json(certificates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;