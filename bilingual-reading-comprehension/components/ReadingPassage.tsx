
import React from 'react';
import { Passage, Question, QuestionOption } from '../types';

interface ReadingPassageProps {
  passageData: Passage;
  userAnswers: { [questionId: number]: string };
  onAnswerSelect: (passageId: string, questionId: number, optionId: string) => void;
  showResults: boolean;
}

const QuestionOptionComponent: React.FC<{
  option: QuestionOption;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  showResults: boolean;
  onSelect: () => void;
}> = ({ option, isSelected, isCorrect, isIncorrect, showResults, onSelect }) => {
  const getOptionClasses = () => {
    let baseClasses = 'flex items-start p-4 mb-3 border-2 rounded-lg cursor-pointer transition-all duration-200';
    if (showResults) {
      if (isCorrect) return `${baseClasses} bg-green-100 border-green-500 text-green-800 font-semibold`;
      if (isIncorrect) return `${baseClasses} bg-red-100 border-red-500 text-red-800 line-through`;
      return `${baseClasses} border-slate-300 bg-slate-50 text-slate-500`;
    }
    if (isSelected) {
      return `${baseClasses} bg-blue-100 border-blue-500 shadow-md`;
    }
    return `${baseClasses} border-slate-300 hover:bg-slate-100 hover:border-slate-400`;
  };

  const getOptionIdClasses = () => {
    let baseClasses = 'flex-shrink-0 w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center mr-4';
     if (showResults) {
      if (isCorrect) return `${baseClasses} bg-green-500 text-white`;
      if (isIncorrect) return `${baseClasses} bg-red-500 text-white`;
      return `${baseClasses} bg-slate-300 text-slate-600`;
    }
    if (isSelected) {
      return `${baseClasses} bg-blue-500 text-white`;
    }
    return `${baseClasses} bg-slate-300 text-slate-600`;
  }

  return (
    <div className={getOptionClasses()} onClick={onSelect}>
      <span className={getOptionIdClasses()}>{option.id}</span>
      <p className="flex-grow">{option.text}</p>
    </div>
  );
};

const QuestionComponent: React.FC<{
  questionData: Question;
  passageId: string;
  selectedAnswer: string | undefined;
  onAnswerSelect: (passageId: string, questionId: number, optionId: string) => void;
  showResults: boolean;
}> = ({ questionData, passageId, selectedAnswer, onAnswerSelect, showResults }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">{questionData.id}. {questionData.question}</h3>
      <div>
        {questionData.options.map(option => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = questionData.correctAnswer === option.id;
          const isIncorrect = isSelected && !isCorrect;

          return (
            <QuestionOptionComponent
              key={option.id}
              option={option}
              isSelected={isSelected}
              isCorrect={isCorrect}
              isIncorrect={isIncorrect}
              showResults={showResults}
              onSelect={() => !showResults && onAnswerSelect(passageId, questionData.id, option.id)}
            />
          );
        })}
      </div>
      {showResults && (
        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
          <p className="font-semibold text-yellow-800">Explanation:</p>
          <p className="text-yellow-700">{questionData.explanation}</p>
        </div>
      )}
    </div>
  );
};


const ReadingPassage: React.FC<ReadingPassageProps> = ({ passageData, userAnswers, onAnswerSelect, showResults }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">{passageData.titleVi}</h1>
        <h2 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">{passageData.titleEn}</h2>
        <p className="text-slate-600 leading-relaxed whitespace-pre-line">{passageData.passage}</p>
      </div>
      <div>
        {passageData.questions.map(question => (
          <QuestionComponent
            key={question.id}
            questionData={question}
            passageId={passageData.id}
            selectedAnswer={userAnswers?.[question.id]}
            onAnswerSelect={onAnswerSelect}
            showResults={showResults}
          />
        ))}
      </div>
    </div>
  );
};

export default ReadingPassage;
