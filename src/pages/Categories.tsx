import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import quizData from "../data/quizData.json";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Categories</h1>
        <p className="text-xl text-gray-600">Choose a category to begin your quiz</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mx-32">
        {quizData.categories.map((category, index) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons];

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }} // Adds hover scaling
              onClick={() => navigate(`/quiz/${category.id}`)}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer transform transition-transform"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  {IconComponent && <IconComponent className="h-8 w-8 text-teal-900" />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600">{category.questions.length} questions</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Categories;
