"use client";

import { useState } from "react";
import { SendMessage } from "./Buttons";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess("Message sent successfully!");
      setFormData({ name: "", surname: "", email: "", message: "" });
    } catch (error: any) {
      setError(error.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full w-full 2xl:w-1/3 xl:w-1/2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-full text-white text-paragraph leading-paragraph space-y-4"
      >
        <div className="flex flex-col 3xl:flex-row max-3xl:space-y-4 3xl:space-x-4 w-full">
          <div className="flex flex-col w-full md:space-y-2 space-y-1">
            <label className="md:text-paragraph text-paragraph-sm">Name</label>
            <input
              className="lg:p-4 py-2 px-3 md:text-paragraph text-paragraph-sm rounded-lg text-black-100 focus:outline-none"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-full md:space-y-2 space-y-1">
            <label className="md:text-paragraph text-paragraph-sm">
              Surname
            </label>
            <input
              className="lg:p-4 py-2 px-3 md:text-paragraph text-paragraph-sm rounded-lg text-black-100 focus:outline-none"
              type="text"
              placeholder="Surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:space-y-2 space-y-1">
          <label className="md:text-paragraph text-paragraph-sm">
            Email Address
          </label>
          <input
            className="lg:p-4 py-2 px-3 md:text-paragraph text-paragraph-sm rounded-lg text-black-100 focus:outline-none"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-full md:space-y-2 space-y-1">
          <label className="md:text-paragraph text-paragraph-sm">Message</label>
          <textarea
            className="h-48 w-full lg:p-4 py-2 px-3 md:text-paragraph text-paragraph-sm rounded-lg text-black-100 focus:outline-none resize-none"
            placeholder="We've been trying to reach you about your car's extended warranty."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <SendMessage isSubmitting={isSubmitting} />
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
};
