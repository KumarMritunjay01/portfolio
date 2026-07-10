import Contact from "../models/contact.model.js";

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, phone number and message are required.",
      });
    }

    const newMessage = new Contact({
      name,
      email, // optional
      phone,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};