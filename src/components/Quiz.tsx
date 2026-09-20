import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle, RotateCcw, Award } from 'lucide-react';
import { QuizQuestion, Language } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  currentLang: Language;
  onQuizComplete?: (score: number, total: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({
  questions,
  currentLang,
  onQuizComplete,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) return null;

  const handleSelect = (questionId: string, optionId: string) => {
    if (submitted) return; // Locked after submission
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswerId) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    if (onQuizComplete) {
      onQuizComplete(score, questions.length);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = questions.every((q) => selectedAnswers[q.id]);

  return (
    <div className="my-8 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">
              {currentLang === 'bn' ? 'কুইজ: নিজের জ্ঞান পরীক্ষা করুন' : 'Knowledge Check: Quiz'}
            </h3>
            <p className="text-xs text-slate-400">
              {currentLang === 'bn'
                ? `মোট প্রশ্ন: ${questions.length}টি`
                : `${questions.length} question(s) to verify understanding`}
            </p>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-slate-200">
              {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.correctAnswerId;

          return (
            <div
              key={q.id}
              className={`p-4 rounded-xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-500/50 bg-emerald-950/10'
                    : 'border-rose-500/50 bg-rose-950/10'
                  : 'border-slate-800 bg-slate-900/50'
              }`}
            >
              <p className="font-semibold text-sm text-slate-200 mb-3">
                <span className="text-cyan-400 mr-1.5">Q{qIndex + 1}.</span>
                {q.question[currentLang] || q.question.en}
              </p>

              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isSelected = userAnswer === opt.id;
                  let optionStyle = 'border-slate-700/60 bg-slate-800/40 text-slate-300 hover:border-slate-600';

                  if (submitted) {
                    if (opt.id === q.correctAnswerId) {
                      optionStyle = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'border-rose-500 bg-rose-500/20 text-rose-300 line-through';
                    } else {
                      optionStyle = 'border-slate-800 bg-slate-900/40 text-slate-500 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-cyan-500 bg-cyan-500/20 text-cyan-200 font-medium shadow-sm';
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-center justify-between transition-all ${optionStyle}`}
                    >
                      <span>{opt[currentLang] || opt.en}</span>
                      {submitted && opt.id === q.correctAnswerId && (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-start space-x-2">
                  <span className="text-cyan-400 font-semibold uppercase tracking-wider shrink-0">
                    {currentLang === 'bn' ? 'ব্যাখ্যা:' : 'Explanation:'}
                  </span>
                  <span className="text-slate-300 leading-relaxed">
                    {q.explanation[currentLang] || q.explanation.en}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={handleSubmit}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              allAnswered
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            {currentLang === 'bn' ? 'উত্তর সাবমিট করুন' : 'Submit Answers'}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-cyan-400" />
            <span>{currentLang === 'bn' ? 'পুনরায় চেষ্টা করুন' : 'Retry Quiz'}</span>
          </button>
        )}

        <span className="text-xs text-slate-500">
          {!submitted
            ? currentLang === 'bn'
              ? `${Object.keys(selectedAnswers).length}/${questions.length} উত্তর দেওয়া হয়েছে`
              : `${Object.keys(selectedAnswers).length}/${questions.length} answered`
            : score === questions.length
            ? currentLang === 'bn'
              ? '🎉 অসাধারণ! সব উত্তর সঠিক!'
              : '🎉 Perfect Score!'
            : currentLang === 'bn'
            ? '👏 ভালো চেষ্টা! ভুলগুলো দেখে নিন'
            : 'Good effort! Review missed answers'}
        </span>
      </div>
    </div>
  );
};
