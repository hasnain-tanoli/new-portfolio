"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setSubmitSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title mb-4">Contact</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Let's work together
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Availability Info */}
          <div>
            <div className="card mb-8">
              <h2 className="text-xl font-semibold mb-4">I'm currently available for:</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-success mr-2">●</span>
                  <span>Full-time positions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">●</span>
                  <span>Freelance projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">●</span>
                  <span>Consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">●</span>
                  <span>Speaking engagements</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Or email me directly:</h2>
              <a 
                href={`mailto:${siteConfig.email}`} 
                className="link-animated text-accent font-medium text-lg"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>

                {submitSuccess && (
                  <div className="mt-4 p-3 rounded-lg bg-success/10 text-success text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitError && (
                  <div className="mt-4 p-3 rounded-lg bg-error/10 text-error text-center">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}