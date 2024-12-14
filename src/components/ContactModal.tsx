"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { useContactModal } from "@/context/ContactModalProvider";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token); // Save the reCAPTCHA token
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA challenge.");
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        "service_2fmos7y", // Replace with your EmailJS Service ID
        "template_peb5v1h", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          "g-recaptcha-response": recaptchaToken, // Send reCAPTCHA token
        },
        "HdkzW4tSYGP4GCqb0" // Replace with your EmailJS User ID
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setRecaptchaToken(null); // Reset reCAPTCHA
      closeModal();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Send Me a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-950">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          {/* reCAPTCHA Widget */}
          <ReCAPTCHA
            sitekey="6Leuv5sqAAAAAGe8HJcAhsmPkBPvWhM-7qjsPJZz" // Replace with your reCAPTCHA site key
            onChange={handleRecaptchaChange}
          />
          <button
            type="submit"
            disabled={isSending || !recaptchaToken}
            className="w-full bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600 transition disabled:bg-gray-400"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
        <button
          onClick={closeModal}
          className="text-gray-500 underline mt-4 block text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}
