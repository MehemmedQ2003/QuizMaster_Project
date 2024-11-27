import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, BookOpen, Trophy, Users, Search, Zap } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-200 flex flex-col items-center justify-center space-y-16 py-16 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-teal-800 drop-shadow-lg">
          Welcome to QuizMaster
        </h1>
        <p className="text-lg md:text-2xl text-teal-700 max-w-3xl mx-auto">
          Explore engaging quizzes, challenge your skills, and become a master of knowledge.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/categories')}
          className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-md hover:shadow-2xl transform transition-transform duration-300 mt-6"
        >
          Start Quiz Now
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {[
          {
            icon: <Brain className="h-16 w-16" />,
            title: "Explore Categories",
            description: "Dive into topics like Web Development, Science, History, and more!",
          },
          {
            icon: <BookOpen className="h-16 w-16" />,
            title: "Timed Challenges",
            description: "Put your knowledge to the test with exciting timed quizzes.",
          },
          {
            icon: <Trophy className="h-16 w-16" />,
            title: "Track Your Success",
            description: "Monitor your progress and strive to become a quiz master.",
          },
          {
            icon: <Users className="h-16 w-16" />,
            title: "Compete with Friends",
            description: "Challenge your friends and see who can score the highest.",
          },
          {
            icon: <Search className="h-16 w-16" />,
            title: "Discover New Knowledge",
            description: "Uncover interesting facts and expand your understanding.",
          },
          {
            icon: <Zap className="h-16 w-16" />,
            title: "Quick Quizzes",
            description: "Enjoy fun and fast quizzes to learn on the go.",
          },          
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 text-center hover:scale-105"
          >
            <div className="text-teal-600 mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
