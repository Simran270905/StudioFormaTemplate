import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 🔗 Replace this URL with your backend endpoint
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-15 px-10 md:px-24 border-t border-black/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-[#B89B5E] mb-4">
            START A PROJECT
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-snug mb-8">
            Let’s shape a space <br />
            together.
          </h2>

          <p className="text-[#6B6B6B] max-w-md">
            Share a few details about your project. Our studio will
            review your inquiry and respond thoughtfully.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-black/20 bg-transparent py-3 outline-none focus:border-black transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-black/20 bg-transparent py-3 outline-none focus:border-black transition"
          />

          <select
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full border-b border-black/20 bg-transparent py-3 outline-none focus:border-black transition text-[#6B6B6B]"
          >
            <option value="">Project Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Office">Office</option>
            <option value="Hospitality">Hospitality</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-black/20 bg-transparent py-3 outline-none focus:border-black transition resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="border border-black px-10 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition disabled:opacity-50"
          >
            {status === "loading" ? "SENDING..." : "SEND INQUIRY"}
          </button>

          {/* STATUS MESSAGES */}
          {status === "success" && (
            <p className="text-sm text-green-600">
              Message sent successfully. We’ll be in touch.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
