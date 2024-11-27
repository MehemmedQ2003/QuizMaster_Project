import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-br from-teal-100 to-blue-50 min-h-screen py-16 px-4"
    >
      <div className="w-full px-32">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold text-teal-900 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600"
          >
            Have questions? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            {[
              {
                icon: <Mail className="h-6 w-6 text-teal-600" />,
                title: "Email",
                text: "support@quizmaster.com",
              },
              {
                icon: <Phone className="h-6 w-6 text-teal-600" />,
                title: "Phone",
                text: "+1 (555) 123-4567",
              },
              {
                icon: <MapPin className="h-6 w-6 text-teal-600" />,
                title: "Location",
                text: "123 Quiz Street, Knowledge City",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg hover:scale-105"
              >
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text", value: formData.name },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  value: formData.email,
                },
                {
                  id: "subject",
                  label: "Subject",
                  type: "text",
                  value: formData.subject,
                },
              ].map(({ id, label, type, value }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={(e) =>
                      setFormData({ ...formData, [id]: e.target.value })
                    }
                    className="mt-1 w-full py-2 px-4 bg-teal-100 border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1 bg-teal-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-teal-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-teal-700"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
