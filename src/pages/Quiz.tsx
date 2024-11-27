import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import quizData from '../data/quizData.json';

const Quiz = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isFinished, setIsFinished] = useState(false);

  const category = quizData.categories.find(c => c.id === categoryId);
  const questions = category?.questions || [];

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isFinished) {
      handleFinish();
    }
  }, [timeLeft, isFinished]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === undefined) {
      toast.error('Please select an answer before proceeding');
      return;
    }
    setCurrentQuestion(prev => prev + 1);
  };

  const handleFinish = () => {
    if (answers.length !== questions.length) {
      toast.error('Please answer all questions before finishing');
      return;
    }
    setIsFinished(true);
  };

  const calculateResults = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: (correct / questions.length) * 100
    };
  };

  if (!category) {
    return <div>Category not found</div>;
  }

  if (isFinished) {
    const results = calculateResults();
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{borderRadius: "25px"}}
        className="max-w-2xl mx-auto my-32 bg-white p-8 shadow-lg shadow-gray-500 hover:shadow-black hover:transition-all hover:duration-300"
      >
        <h2 className="text-5xl font-bold mb-6 text-center">Quiz Results</h2>
        <div className="space-y-4">
          <p className="text-lg text-center">
            <span className="font-bold text-3xl text-green-600">Correct Answers: {results.correct}</span>
          </p>
          <p className="text-lg text-center">
            <span className="font-bold text-3xl text-red-600">Incorrect Answers: {results.total - results.correct}</span>
          </p>
          <p className="text-xl text-center">
            Score: <span className="font-bold">{results.percentage.toFixed(1)}%</span>
          </p>
        </div>
        <div className='flex justify-center'>
          <button
            onClick={() => navigate('/categories')}
            className="mt-8 bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-900 mx-auto w-100"
          >
            Try Another Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{category.name}</h2>
          <div className="text-lg font-semibold">
            Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg font-medium mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <p className="text-xl">{questions[currentQuestion].question}</p>
        </div>

        <div className="space-y-4">
          {questions[currentQuestion].answers.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 text-left rounded-md border ${
                answers[currentQuestion] === index
                  ? 'border-indigo-600 bg-teal-50'
                  : 'border-gray-200 hover:border-indigo-600'
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            disabled={currentQuestion === 0}
            className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-900"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-900"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;