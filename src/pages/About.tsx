import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, User, Globe, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-100 py-16 px-4"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h1 className="text-5xl font-extrabold text-teal-800 drop-shadow-md">
          About QuizMaster
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Your ultimate destination for interactive learning and knowledge testing. Embark on a journey to challenge your mind and grow your skills.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
        {[
          {
            icon: <BookOpen className="h-10 w-10" />,
            title: "Diverse Categories",
            description: "Multiple subjects to test your knowledge and broaden your understanding.",
          },
          {
            icon: <Clock className="h-10 w-10" />,
            title: "Timed Challenges",
            description: "Compete against the clock and test your quick thinking and accuracy.",
          },
          {
            icon: <Award className="h-10 w-10" />,
            title: "Track Progress",
            description: "Analyze your results and keep improving as you climb the leaderboard.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-teal-600 mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full bg-teal-50 py-16 mt-16">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-extrabold text-teal-800">
            Why Choose QuizMaster?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="h-10 w-10" />,
                title: "User-Friendly Design",
                description: "A seamless and intuitive interface for a delightful experience.",
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Global Community",
                description: "Compete and connect with quiz enthusiasts worldwide.",
              },
              {
                icon: <Star className="h-10 w-10" />,
                title: "Personalized Content",
                description: "Quizzes tailored to your interests and skill level.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-teal-700 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to start your journey?
        </h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/categories')}
          className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl transform transition-transform duration-300"
        >
          Explore Categories
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default About;
