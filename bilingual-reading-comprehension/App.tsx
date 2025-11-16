
import React, { useState, useMemo } from 'react';
import ReadingPassage from './components/ReadingPassage';
import { READING_PASSAGES } from './constants';
import { UserAnswers } from './types';

const ResultsSummary: React.FC<{ score: number; total: number; onRetry: () => void }> = ({ score, total, onRetry }) => {
    const percentage = total > 0 ? (score / total) * 100 : 0;
    let feedback = { message: '', color: '' };

    if (percentage === 100) {
        feedback = { message: 'Excellent! Perfect score!', color: 'text-green-600' };
    } else if (percentage >= 75) {
        feedback = { message: 'Great job!', color: 'text-blue-600' };
    } else if (percentage >= 50) {
        feedback = { message: 'Good effort. Keep practicing!', color: 'text-yellow-600' };
    } else {
        feedback = { message: 'Keep trying! You can do better.', color: 'text-red-600' };
    }

    return (
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-2xl mx-auto border border-slate-200 mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Completed!</h2>
            <p className="text-xl text-slate-600 mb-4">Your Score</p>
            <p className="text-5xl font-extrabold text-blue-600 mb-4">
                {score} <span className="text-3xl text-slate-500">/ {total}</span>
            </p>
            <p className={`text-lg font-semibold ${feedback.color} mb-6`}>{feedback.message}</p>
             <button
                onClick={onRetry}
                className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md"
            >
                Try Again
            </button>
        </div>
    );
};


export default function App() {
  const [activePassageIndex, setActivePassageIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = useMemo(() => READING_PASSAGES.reduce((acc, p) => acc + p.questions.length, 0), []);

  const answeredQuestionsCount = useMemo(() => {
    // FIX: Explicitly type the accumulator `acc` as `number` to resolve a TypeScript inference issue.
    return Object.values(userAnswers).reduce((acc: number, answers) => acc + Object.keys(answers).length, 0);
  }, [userAnswers]);

  const handleAnswerSelect = (passageId: string, questionId: number, optionId: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [passageId]: {
        ...prev[passageId],
        [questionId]: optionId,
      },
    }));
  };

  const calculateScore = () => {
    let score = 0;
    READING_PASSAGES.forEach(passage => {
      passage.questions.forEach(question => {
        if (userAnswers[passage.id]?.[question.id] === question.correctAnswer) {
          score++;
        }
      });
    });
    return score;
  };

  const handleSubmit = () => {
    if (answeredQuestionsCount === totalQuestions) {
      setShowResults(true);
      window.scrollTo(0, 0);
    }
  };

  const handleRetry = () => {
    setUserAnswers({});
    setShowResults(false);
    setActivePassageIndex(0);
  };
  
  const score = showResults ? calculateScore() : 0;

  return (
    <div className="min-h-screen bg-slate-100 font-sans pb-24">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-blue-700">📝 Bilingual Reading Practice</h1>
            <p className="text-slate-500">Improve your English and Vietnamese reading skills</p>
          </div>
          {!showResults && (
            <nav className="flex space-x-2 bg-slate-200 p-1 rounded-lg">
              {READING_PASSAGES.map((passage, index) => (
                <button
                  key={passage.id}
                  onClick={() => setActivePassageIndex(index)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activePassageIndex === index ? 'bg-white text-blue-600 shadow' : 'text-slate-600 hover:bg-slate-300'
                  }`}
                >
                  Bài Đọc {index + 1}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="py-8">
        {showResults ? (
          <>
            <ResultsSummary score={score} total={totalQuestions} onRetry={handleRetry} />
            {READING_PASSAGES.map(passage => (
                <ReadingPassage
                    key={passage.id}
                    passageData={passage}
                    userAnswers={userAnswers[passage.id] || {}}
                    onAnswerSelect={() => {}}
                    showResults={true}
                />
            ))}
          </>
        ) : (
          <ReadingPassage
            passageData={READING_PASSAGES[activePassageIndex]}
            userAnswers={userAnswers[READING_PASSAGES[activePassageIndex].id] || {}}
            onAnswerSelect={handleAnswerSelect}
            showResults={false}
          />
        )}
      </main>

       {!showResults && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-slate-200 p-4 shadow-top">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-2 md:mb-0">
                     <p className="text-sm font-semibold text-slate-700">
                        Progress: {answeredQuestionsCount} / {totalQuestions} answered
                    </p>
                    <div className="w-64 bg-slate-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(answeredQuestionsCount / totalQuestions) * 100}%` }}></div>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={answeredQuestionsCount !== totalQuestions}
                    className="w-full md:w-auto px-8 py-3 font-bold text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-slate-400 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 shadow-md"
                >
                    Check Answers
                </button>
            </div>
        </footer>
      )}
    </div>
  );
}
