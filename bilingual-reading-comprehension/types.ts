
export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
}

export interface Passage {
  id: string;
  titleVi: string;
  titleEn: string;
  passage: string;
  questions: Question[];
}

export interface UserAnswers {
  [passageId: string]: {
    [questionId: number]: string;
  };
}
