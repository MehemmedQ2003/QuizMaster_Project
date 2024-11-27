import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-teal-600" />
                <span className="text-xl font-bold text-gray-900">QuizMaster</span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/categories", label: "Questions" },
                { path: "/contact", label: "Contact" },
                { path: "/signin", label: "Sign In" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`font-semibold text-lg ${
                    isActive(path) ? "text-teal-600" : "text-gray-700"
                  } hover:text-teal-600 transition-colors duration-300`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/signup"
                className={`font-semibold text-lg px-4 py-2 rounded-md ${
                  isActive("/signup")
                    ? "bg-teal-900 text-white"
                    : "bg-teal-600 text-white hover:bg-teal-900"
                } transition-colors duration-300`}
              >
                Sign Up
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-50 shadow-inner px-4 py-4 space-y-4"
          >
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/categories", label: "Questions" },
              { path: "/contact", label: "Contact" },
              { path: "/signin", label: "Sign In" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-semibold text-lg ${
                  isActive(path) ? "text-teal-600" : "text-gray-700"
                } hover:text-teal-600 transition-colors duration-300`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-lg text-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-900 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex-grow px-4 py-8"
      >
        <Outlet />
      </motion.main>

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-6">
        <div className="flex flex-col justify-center items-center px-4">
          <p className="text-xl font-semibold text-center md:text-left">
            &copy; {new Date().getFullYear()} QuizMaster. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
