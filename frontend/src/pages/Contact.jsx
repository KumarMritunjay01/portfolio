import React, { useState } from "react";
import { sendMessage } from "../services/api";
import { useNavigate } from "react-router-dom";

function Contact() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // ✅ Validation Function
  const validate = () => {
    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      // ✅ Trimmed Data (Pro-Level Detail)
      const cleanedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const res = await sendMessage(cleanedData);

      if (res.data.success) {

        setSuccess("Message sent successfully. I'll get back to you soon.");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // ✅ Redirect After Delay
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }

    } catch (error) {

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      <div className="max-w-2xl mx-auto px-6 py-24">

        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-10 text-center">
          Contact Me
        </h1>

        <div className="bg-background border border-border rounded-xl p-6">

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Full Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {errors.name && (
                <p className="text-error text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {errors.email && (
                <p className="text-error text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject / Opportunity"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {errors.subject && (
                <p className="text-error text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-background border border-border rounded-lg px-4 py-2 resize-none
                focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {errors.message && (
                <p className="text-error text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-background py-2 rounded-lg font-semibold
              hover:scale-105 active:scale-95 transition duration-300
              disabled:opacity-50 shadow-sm cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success */}
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