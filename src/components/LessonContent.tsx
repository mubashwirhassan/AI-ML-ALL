import React from 'react';
import {
  BookOpen,
  Lightbulb,
  HelpCircle,
  Clock,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Flame,
  Check,
  X,
  Zap,
  Cpu,
  Layers,
} from 'lucide-react';
import { Lesson, Level, Language } from '../types';
import { CodeBlock } from './CodeBlock';
import { Quiz } from './Quiz';

interface LessonContentProps {
  lesson: Lesson;
  level: Level;
  currentLang: Language;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string) => void;
  onNavigateLesson: (lessonId: string) => void;
  onBackToLevel: () => void;
  prevLesson?: Lesson;
  nextLesson?: Lesson;
}

export const LessonContent: React.FC<LessonContentProps> = ({
  lesson,
  level,
  currentLang,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onNavigateLesson,
  onBackToLevel,
  prevLesson,
  nextLesson,
}) => {
  const [showHint, setShowHint] = React.useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Top Breadcrumb & Action Toolbar */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-800 text-xs text-slate-400">
        <div className="flex items-center space-x-2 truncate">
          <button
            onClick={onBackToLevel}
            className="hover:text-cyan-400 transition-colors font-medium flex items-center space-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{level.title[currentLang] || level.title.en}</span>
          </button>
          <span>/</span>
          <span className="text-slate-300 truncate font-semibold">
            {lesson.title[currentLang] || lesson.title.en}
          </span>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => onToggleBookmark(lesson.id)}
            className={`p-2 rounded-xl border transition-all ${
              isBookmarked
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                : 'bg-slate-800/80 border-slate-700/80 text-slate-400 hover:text-slate-200'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this lesson'}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onToggleComplete(lesson.id)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border font-semibold text-xs transition-all ${
              isCompleted
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {isCompleted
                ? currentLang === 'bn'
                  ? 'সম্পন্ন হয়েছে'
                  : 'Completed'
                : currentLang === 'bn'
                ? 'সম্পন্ন চিহ্নিত করুন'
                : 'Mark Complete'}
            </span>
          </button>
        </div>
      </div>

      {/* Lesson Header */}
      <header className="my-8">
        <div className="flex items-center space-x-3 mb-3 flex-wrap gap-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Level {lesson.levelId} • {lesson.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            {lesson.difficulty}
          </span>
          <div className="flex items-center space-x-1 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>
              {lesson.estimatedMinutes} {currentLang === 'bn' ? 'মিনিট পাঠ' : 'min read'}
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {lesson.title[currentLang] || lesson.title.en}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
          {lesson.subtitle[currentLang] || lesson.subtitle.en}
        </p>
      </header>

      {/* 1. What Is It? */}
      <section className="my-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
        <div className="flex items-center space-x-2.5 text-cyan-400 font-bold mb-3">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-base sm:text-lg">
            {currentLang === 'bn' ? 'সহজ ভাষায় বিষয়টি কী?' : '1. What Is It?'}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          {lesson.whatIsIt[currentLang] || lesson.whatIsIt.en}
        </p>
      </section>

      {/* 2. Real-World Analogy */}
      <section className="my-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900/90 to-slate-950 border border-amber-500/20 shadow-md">
        <div className="flex items-center space-x-2.5 text-amber-400 font-bold mb-3">
          <Lightbulb className="w-5 h-5" />
          <h2 className="text-base sm:text-lg">
            {currentLang === 'bn' ? 'বাস্তব জীবনের তুলনা (Intuitive Analogy)' : '2. Real-World Analogy'}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed italic">
          "{lesson.analogy[currentLang] || lesson.analogy.en}"
        </p>
      </section>

      {/* 3. Why It Matters */}
      <section className="my-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
        <div className="flex items-center space-x-2.5 text-emerald-400 font-bold mb-3">
          <Zap className="w-5 h-5" />
          <h2 className="text-base sm:text-lg">
            {currentLang === 'bn' ? 'কেন এটি জানা জরুরি?' : '3. Why It Matters'}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lesson.whyItMatters[currentLang] || lesson.whyItMatters.en}
        </p>
      </section>

      {/* 4. How It Works */}
      <section className="my-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
        <div className="flex items-center space-x-2.5 text-purple-400 font-bold mb-3">
          <Cpu className="w-5 h-5" />
          <h2 className="text-base sm:text-lg">
            {currentLang === 'bn' ? 'কীভাবে ধাপে ধাপে কাজ করে?' : '4. How It Works Step-by-Step'}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
          {lesson.howItWorks[currentLang] || lesson.howItWorks.en}
        </p>
      </section>

      {/* 5. Formula & Symbols (If present) */}
      {lesson.formula && (
        <section className="my-8 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
          <div className="flex items-center space-x-2.5 text-cyan-400 font-bold mb-4">
            <span className="font-mono text-lg font-bold">Σ</span>
            <h2 className="text-base sm:text-lg">
              {currentLang === 'bn' ? 'গাণিতিক সূত্র ও প্রতীকের অর্থ' : '5. Mathematical Formula Breakdown'}
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-cyan-300 text-center text-base sm:text-lg overflow-x-auto my-3">
            {lesson.formula.expression}
          </div>

          {lesson.formula.parts && (
            <div className="mt-4 divide-y divide-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                {currentLang === 'bn' ? 'প্রতীকসমূহের ব্যাখ্যা:' : 'Symbols Explained:'}
              </span>
              {lesson.formula.parts.map((p, idx) => (
                <div key={idx} className="py-2 flex items-start space-x-3 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-cyan-400 shrink-0 w-24">{p.symbol}</span>
                  <span className="text-slate-300">{p.meaning[currentLang] || p.meaning.en}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* When to use vs When not to use */}
      {(lesson.whenToUse || lesson.whenNotToUse) && (
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson.whenToUse && (
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-3">
                <Check className="w-5 h-5" />
                <h3 className="text-sm font-bold">
                  {currentLang === 'bn' ? 'কখন ব্যবহার করবেন' : 'When to Use'}
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/90 list-disc list-inside">
                {(lesson.whenToUse[currentLang] || lesson.whenToUse.en).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {lesson.whenNotToUse && (
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <div className="flex items-center space-x-2 text-rose-400 font-bold mb-3">
                <X className="w-5 h-5" />
                <h3 className="text-sm font-bold">
                  {currentLang === 'bn' ? 'কখন ব্যবহার করবেন না' : 'When NOT to Use'}
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-200/90 list-disc list-inside">
                {(lesson.whenNotToUse[currentLang] || lesson.whenNotToUse.en).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Advantages & Limitations */}
      {(lesson.advantages || lesson.limitations) && (
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson.advantages && (
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <h3 className="text-sm font-bold text-cyan-400 mb-3 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>{currentLang === 'bn' ? 'প্রধান সুবিধাসমূহ' : 'Key Advantages'}</span>
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                {(lesson.advantages[currentLang] || lesson.advantages.en).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {lesson.limitations && (
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <h3 className="text-sm font-bold text-amber-400 mb-3 flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span>{currentLang === 'bn' ? 'সীমাবদ্ধতাসমূহ' : 'Limitations & Caveats'}</span>
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                {(lesson.limitations[currentLang] || lesson.limitations.en).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Practical ML Application */}
      {lesson.practicalApplication && (
        <section className="my-8 p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30">
          <div className="flex items-center space-x-2 text-cyan-400 font-bold mb-2">
            <Flame className="w-5 h-5" />
            <h3 className="text-sm font-bold">
              {currentLang === 'bn' ? 'বাস্তব প্রয়োগ (Practical Application)' : 'Real-World ML Application'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-cyan-200/90 leading-relaxed">
            {lesson.practicalApplication[currentLang] || lesson.practicalApplication.en}
          </p>
        </section>
      )}

      {/* Code Example */}
      {lesson.codeExample && (
        <section className="my-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center space-x-2">
              <span className="text-cyan-400 font-mono">&lt;/&gt;</span>
              <span>{currentLang === 'bn' ? 'পাইথন কোড উদাহরণ' : 'Hands-on Python Implementation'}</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">Executable Simulation</span>
          </div>

          <CodeBlock
            code={lesson.codeExample.code}
            language={lesson.codeExample.language}
            title={lesson.codeExample.title}
            expectedOutput={lesson.codeExample.expectedOutput}
            explanation={lesson.codeExample.explanation}
            currentLang={currentLang}
          />
        </section>
      )}

      {/* Common Mistakes */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <section className="my-8 p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30">
          <div className="flex items-center space-x-2 text-rose-400 font-bold mb-4">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="text-base font-bold">
              {currentLang === 'bn' ? 'সাধারণ ভুল ও ফাঁদ (Common Mistakes)' : 'Common Pitfalls & Mistakes'}
            </h2>
          </div>

          <div className="space-y-3">
            {lesson.commonMistakes.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
                <div className="flex items-start space-x-2 text-rose-300 mb-1">
                  <X className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="font-semibold">
                    {item.mistake[currentLang] || item.mistake.en}
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-emerald-300 pl-6 text-xs">
                  <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>
                    <strong>{currentLang === 'bn' ? 'সঠিক সমাধান: ' : 'Fix: '}</strong>
                    {item.solution[currentLang] || item.solution.en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practice Task */}
      {lesson.practiceTask && (
        <section className="my-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-base sm:text-lg">
                {currentLang === 'bn' ? 'অনুশীলনী টাস্ক (Practice Task)' : 'Practice Challenge'}
              </h2>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
              {lesson.practiceTask.title[currentLang] || lesson.practiceTask.title.en}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lesson.practiceTask.instructions[currentLang] || lesson.practiceTask.instructions.en}
          </p>

          {lesson.practiceTask.hint && (
            <div className="mt-4 pt-3 border-t border-slate-800">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>
                  {showHint
                    ? currentLang === 'bn'
                      ? 'ইঙ্গিত লুকান'
                      : 'Hide Hint'
                    : currentLang === 'bn'
                    ? '💡 ইঙ্গিত (Hint) দেখুন'
                    : '💡 Reveal Hint'}
                </span>
              </button>
              {showHint && (
                <div className="mt-2 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                  {lesson.practiceTask.hint[currentLang] || lesson.practiceTask.hint.en}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* Quiz */}
      {lesson.quiz && lesson.quiz.length > 0 && (
        <Quiz questions={lesson.quiz} currentLang={currentLang} />
      )}

      {/* Navigation Footer */}
      <footer className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
        {prevLesson ? (
          <button
            onClick={() => onNavigateLesson(prevLesson.id)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left hidden sm:block">
              <span className="text-[10px] text-slate-500 uppercase block font-mono">
                {currentLang === 'bn' ? 'পূর্ববর্তী' : 'Previous'}
              </span>
              <span className="truncate max-w-[150px] inline-block">
                {prevLesson.title[currentLang] || prevLesson.title.en}
              </span>
            </div>
            <span className="sm:hidden">{currentLang === 'bn' ? 'আগেরটি' : 'Prev'}</span>
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={() => onToggleComplete(lesson.id)}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            isCompleted
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95'
          }`}
        >
          {isCompleted
            ? currentLang === 'bn'
              ? '✓ সম্পন্ন করা হয়েছে'
              : '✓ Completed'
            : currentLang === 'bn'
            ? 'পড়া শেষ করলাম'
            : 'Mark as Finished'}
        </button>

        {nextLesson ? (
          <button
            onClick={() => onNavigateLesson(nextLesson.id)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-colors"
          >
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-slate-500 uppercase block font-mono">
                {currentLang === 'bn' ? 'পরবর্তী' : 'Next'}
              </span>
              <span className="truncate max-w-[150px] inline-block">
                {nextLesson.title[currentLang] || nextLesson.title.en}
              </span>
            </div>
            <span className="sm:hidden">{currentLang === 'bn' ? 'পরেরটি' : 'Next'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onBackToLevel}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-colors"
          >
            <span>{currentLang === 'bn' ? 'রোডম্যাপে ফিরুন' : 'Back to Roadmap'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </footer>
    </div>
  );
};
