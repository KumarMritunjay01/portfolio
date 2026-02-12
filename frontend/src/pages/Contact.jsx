import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { sendMessage } from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(formData);

      setSuccess("Message Sent Successfully 😄🔥");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-20">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-10 text-center">
          Contact Me 📩
        </h1>

        {/* Form Card */}
        <div className="bg-secondary/10 border border-border rounded-xl p-6">

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background border border-border rounded-lg px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background border border-border rounded-lg px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="bg-background border border-border rounded-lg px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-primary text-white py-2 rounded-lg font-semibold
              hover:scale-105 active:scale-95 transition duration-300"
            >
              Send Message 🚀
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-success text-sm text-center">
                {success}
              </p>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
