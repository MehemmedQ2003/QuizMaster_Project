import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign in:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-12"
    >
      {/* Main Sign-In Form */}
      <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all hover:scale-105">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-teal-100 p-4 rounded-full inline-block"
          >
            <LogIn className="h-16 w-16 text-teal-600 mx-auto" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">Welcome Back!</h2>
          <p className="text-gray-600">Sign in to continue your learning journey.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-lg border-gray-900 px-2 py-1 shadow-sm focus:ring-teal-500 focus:border-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full rounded-lg border-gray-900 px-2 py-1 shadow-sm focus:ring-teal-500 focus:border-gray-500"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-800 transition-all"
          >
            Sign In
          </motion.button>
        </motion.form>
      </div>

      {/* Additional Benefits Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-teal-50 p-8 mt-12 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Sign In?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Access personalized learning materials and progress tracking.</li>
          <li>Join a community of learners and interact with peers.</li>
          <li>Stay updated with new content and notifications.</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default SignIn;
