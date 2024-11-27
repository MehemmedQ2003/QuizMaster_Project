export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  questions: Question[];
}

export interface User {
  email: string;
  password: string;
}